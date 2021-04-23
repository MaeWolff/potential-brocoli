const authController = require("../../controllers/authController");

module.exports = function (router) {
  router.post("/auth/login", authController.login);
  router.post("/auth/register", authController.register);
  router.get("/auth/logout", authController.logout);
};
