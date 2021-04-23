const UserModel = require("../models/UserModel");

const userController = {
  me: async (req, res, next) => {
    try {
      UserModel.findOne({ email: req.user }).then((data) => {
        res.json(data);
      });
    } catch (err) {
      next(err);
    }
  },
  updateCredentials: async (req, res, next) => {
    const {
      credentials: [{ shop_name, shop_password, shop_apiKey }],
    } = req.body;

    try {
      await UserModel.findOneAndUpdate(
        { email: req.user },
        {
          credentials: [
            {
              shop_name: shop_name,
              shop_password: shop_password,
              shop_apiKey: shop_apiKey,
            },
          ],
        }
      );

      res.status(200).send({ message: "User updated" });
    } catch (err) {
      next(err);
    }
  },
};
module.exports = userController;
