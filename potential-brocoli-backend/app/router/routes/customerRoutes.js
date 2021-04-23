// importer les controllers
const customerController = require("../../controllers/customerController");

module.exports = function (router) {
  router.get("/customers/:id", customerController.getCustomer);
  router.post("/customers/:id", customerController.createCustomer);
  router.patch("/customers/sponsor", customerController.updateJackpotOfSponsor);
};
