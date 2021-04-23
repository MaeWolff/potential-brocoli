const userController = require("../../controllers/userController");
const { authJwt } = require("../../middlewares/authJwt");

module.exports = function (router) {
  router.get("/user/me", authJwt, userController.me);
  router.patch(
    "/user/update-credentials",
    authJwt,
    userController.updateCredentials
  );
};
