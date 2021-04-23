const axiosSIB = require("../modules/axiosSIBSendMail");

const CustomerModel = require("../models/CustomerModel");
const UserModel = require("../models/UserModel");

const randomCode = require("../modules/randomCode");

// la Promise n'est pas forcément résolue au moment où on l'importe, mais c'est pas grave, on en a pas besoin tout de suite

const { ErrorHandler } = require("../middlewares/error");

const customerController = {

  getCustomer: async (req, res, next) => {
    try {
      const customer_id = req.params.id;

      // Maintenant, on a besoin de la db, c'est le bon moment pour l'attendre si elle n'est pas encore opérationnelle.
      // Après l'avoir attendue, on appelle findOne sur la collection pour récupérer notre user et on attend à nouveau, le document, cette fois-ci

      const customer = await CustomerModel.findOne({
        customer_id,
      });

      // Si je ne trouve pas de client dans la collection, je le crée
      if (!customer) {
        customerController.createCustomer(req, res, next);
      } else {
        res.status(200).json({
          status: "Success",
          statusCode: 200,
          message: "Response code 200 (Customer Found)",
          data: customer,
        });
      }
    } catch (error) {
      next(error);
    }
  },

  createCustomer: async (req, res, next) => {
    try {
      const userId = req.params.id;
      const nowAtISOFormat = new Date().toISOString();

      let shopifyUser = await UserModel.findOne({
        uuid: req.query.uuid,
      })

      const shopifyConnection = require("../modules/shopifyConnection")(
        shopifyUser.credentials[0].shop_name,
        shopifyUser.credentials[0].shop_apiKey,
        shopifyUser.credentials[0].shop_password
      );
      
      // Je récupère les informations du client, si je n'ai rien, je passe dans le catch
      let customerFromShopify = await shopifyConnection.customer.get(userId);

      // Si un des champs est vide, on retourne une erreur
      if (
        !(
          customerFromShopify.first_name &&
          customerFromShopify.last_name &&
          customerFromShopify.email
        )
      ) {
        throw new ErrorHandler(
          400,
          "Response code 400 (First Name, Last Name And/Or Email Address Are Missing)"
        );
      }

      let priceRuleForSponsorshipCode = await shopifyConnection.priceRule.create(
        {
          value_type: "percentage",
          value: "-100.0",
          customer_selection: "all",
          target_type: "shipping_line",
          target_selection: "all",
          allocation_method: "each",
          allocation_limit: null,
          once_per_customer: true,
          usage_limit: null,
          ends_at: null,
          title: randomCode(
            "sponsorship",
            customerFromShopify.first_name,
            customerFromShopify.last_name
          ),
          prerequisite_shipping_price_range: { less_than_or_equal_to: "8.5" },
          starts_at: nowAtISOFormat,
        }
      );

      let priceRuleForJackpotCode = await shopifyConnection.priceRule.create({
        value_type: "fixed_amount",
        value: "-0.0",
        customer_selection: "prerequisite",
        target_type: "line_item",
        target_selection: "all",
        allocation_method: "across",
        allocation_limit: null,
        once_per_customer: false,
        usage_limit: null,
        ends_at: null,
        prerequisite_customer_ids: [customerFromShopify.id],
        title: randomCode(
          "jackpot",
          customerFromShopify.first_name,
          customerFromShopify.last_name
        ),
        starts_at: nowAtISOFormat,
      });

      let sponsorship_code = await shopifyConnection.discountCode.create(
        priceRuleForSponsorshipCode.id,
        {
          code: priceRuleForSponsorshipCode.title,
        }
      );

      let jackpot_code = await shopifyConnection.discountCode.create(
        priceRuleForJackpotCode.id,
        {
          code: priceRuleForJackpotCode.title,
        }
      );

      let customerForMongo = new CustomerModel({
        customer_id: customerFromShopify.id.toString(),
        first_name: customerFromShopify.first_name,
        last_name: customerFromShopify.last_name,
        email: customerFromShopify.email,
        sponsorship_code: [
          {
            id: sponsorship_code.id,
            price_rule_id: sponsorship_code.price_rule_id,
            code: sponsorship_code.code,
            usage_count: sponsorship_code.usage_count,
          },
        ],
        jackpot_code: [
          {
            id: jackpot_code.id,
            price_rule_id: jackpot_code.price_rule_id,
            code: jackpot_code.code,
            usage_count: jackpot_code.usage_count,
            amount: -0,
          },
        ],
        shop_name: shopifyUser.credentials[0].shop_name,
        order_history: [],
      });

      customerForMongo.save(function (err, doc) {
        if (err) return console.error(err);
        console.log("Document inserted succussfully!");
      });

      res.status(200).json({
        status: "Success",
        statusCode: 200,
        message: "Response code 200 (Customer Created)",
        data: customerForMongo,
      });
    } catch (error) {
      next(error);
    }
  },

  updateJackpotOfSponsor: async (req, res, next) => {
    try {
      let shopifyUser = await UserModel.findOne({
        uuid: req.query.uuid,
      })

      const shopifyConnection = require("../modules/shopifyConnection")(
        shopifyUser.credentials[0].shop_name,
        shopifyUser.credentials[0].shop_apiKey,
        shopifyUser.credentials[0].shop_password
      );

      const customer = await shopifyConnection.customer.get(
        req.query.customerId
      );

      const discountCode = req.query.discountCode;

      const discountAmount = parseFloat(req.query.discountAmount);

      const orderId = req.query.orderId;

      let accountActivationUrl;

      let sponsor;

      switch (true) {
        case discountCode.startsWith("SPONSOR"):
          sponsor = await CustomerModel.findOne({
            "sponsorship_code.code": discountCode,
            shop_name: shopifyUser.credentials[0].shop_name,
          });

          if (!sponsor) {
            throw new ErrorHandler(404, "Response code 404 (Not Found)");
          }

          if (customer.id == sponsor.customer_id) {
            throw new ErrorHandler(
              403,
              "Response code 403 (You Cannot Use Your Own Sponsorship Code)"
            );
          }

          if (sponsor.order_history.includes(orderId)) {
            throw new ErrorHandler(
              403,
              "Response code 403 (Discount Already Completed On This Order)"
            );
          }

          // On ajoute 10€ à la cagnotte et on incrémente le compteur d'utilisation du sponsorcode dans notre BDD MongoDB

          await CustomerModel.updateOne(
            {
              "sponsorship_code.code": discountCode,
              shop_name: shopifyUser.credentials[0].shop_name,
            },
            {
              $inc: {
                "sponsorship_code.$.usage_count": 1,
                "jackpot_code.$.amount": -10,
              },
              $push: {
                order_history: orderId,
              },
            }
          );

          sponsor = await CustomerModel.findOne({
            "sponsorship_code.code": discountCode,
            shop_name: shopifyUser.credentials[0].shop_name,
          });

          // On actualise la valeur du code jackpot côté Shopify
          await shopifyConnection.priceRule.update(
            sponsor.jackpot_code[0].price_rule_id,
            {
              value: sponsor.jackpot_code[0].amount,
            }
          );

          if (customer.state == "disabled") {
            accountActivationUrl = await shopifyConnection.customer.accountActivationUrl(
              customer.id
            );
            // Utiliser cette méthode assigne la valeur de la clé 'state' de l'objet 'customer' à 'invited'
          }

          // Module pour créer les contacts s'ils ne sont pas déjà enregistré sur SIB
          await require("../modules/axiosSIBCreateContacts")([customer.email, sponsor.email])

          // Email envoyé au parrain
          await axiosSIB({
            data: {
              'to': [{
                'email': sponsor.email,
                'name': `${sponsor.first_name} ${sponsor.last_name}`
              }],
              'replyTo': {
                'email': 'bryan.ferreira@hetic.net',
                'name': 'Bryan - BROCOLI'
              },
              'params': {
                'firstNameOfSponsee': customer.first_name,
                'lastNameOfSponsee': customer.last_name,
                'amountOfSponsor': -sponsor.jackpot_code[0].amount,
                'codeOfSponsee': sponsor.sponsorship_code[0].code
              },
              'templateId': 1
            }
          })

          // Email envoyé au filleuil
          await axiosSIB({
            data: {
              'to': [{
                'email': customer.email,
                'name': `${customer.first_name} ${customer.last_name}`
              }],
              'replyTo': {
                'email': 'bryan.ferreira@hetic.net',
                'name': 'Bryan - BROCOLI'
              },
              'params': {
                'firstNameOfSponsor': sponsor.first_name,
                'lastNameOfSponsor': sponsor.last_name,
                'accountActivationUrl': accountActivationUrl,
                'codeOfSponsee': sponsor.sponsorship_code[0].code
              },
              'templateId': 2
            }
          })

          res.status(200).json({
            status: "Success",
            statusCode: 200,
            message: "Response code 200 (Jackpot Amount Increase Done)",
          });

          break;

        case discountCode.startsWith("JACKPOT"):
          sponsor = await CustomerModel.findOne({
            "jackpot_code.code": discountCode,
            shop_name: shopifyUser.credentials[0].shop_name,
          });

          if (!sponsor) {
            throw new ErrorHandler(404, "Response code 404 (Not Found)");
          }

          if (customer.id != sponsor.customer_id) {
            throw new ErrorHandler(
              403,
              "Response code 403 (You Can Only Use Your Own Jackpot Code)"
            );
          }

          if (Math.abs(sponsor.jackpot_code[0].amount) < discountAmount) {
            throw new ErrorHandler(
              403,
              "Response code 403 (The Discount Amount Cannot Be Greater Than The Jackpot Amount)"
            );
          }

          await CustomerModel.updateOne(
            {
              "jackpot_code.code": discountCode,
              shop_name: shopifyUser.credentials[0].shop_name,
            },
            {
              $inc: {
                "jackpot_code.$.usage_count": 1,
                "jackpot_code.$.amount": discountAmount,
              },
            }
          );

          sponsor = await CustomerModel.findOne({
            "jackpot_code.code": discountCode,
            shop_name: shopifyUser.credentials[0].shop_name,
          });

          // On actualise la valeur du code jackpot côté Shopify
          await shopifyConnection.priceRule.update(
            sponsor.jackpot_code[0].price_rule_id,
            {
              value: sponsor.jackpot_code[0].amount,
            }
          );

          res.status(200).json({
            status: "Success",
            statusCode: 200,
            message: "Response code 200 (Jackpot Amount Decrease Done)",
          });
          break;

        default:
          throw new ErrorHandler(
            400,
            "Response code 400 (Wrong Discount Code)"
          );
      }
    } catch (error) {
      next(error);
    }
  },
};

module.exports = customerController;
