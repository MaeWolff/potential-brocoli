const UserModel = require("../models/UserModel");
const { uuid } = require("uuidv4");
const { ErrorHandler } = require("../middlewares/error");
const jwt = require("jsonwebtoken");

const { TOKEN_SECRET } = require("../middlewares/authJwt");
const TOKEN_EXPRIRATION = 86400; // 24 hours

const authController = {
  register: async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
      let user = await UserModel.findOne({
        email,
      });

      if (user) {
        throw new ErrorHandler(
          400,
          "Response code 400 (User Already Exist)"
        );
      }

      user = new UserModel({
        uuid: uuid(),
        email,
        password,
      });

      await user.save().then((saveUser) => {
        saveUser === user;
      });

      const payload = {
        user: {
          id: user.id,
          email: user.email,
        },
      };

      jwt.sign(
        payload,
        TOKEN_SECRET,
        {
          expiresIn: TOKEN_EXPRIRATION,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token,
          });
        }
      );

      return res.status(200).send({ message: "User created ✓" });
    } catch (err) {
      next(err);
    }
  },

  login: async (req, res) => {
    const email = req.body.email;

    try {
      let user = await UserModel.findOne({
        email,
      });

      if (!user) {
        throw new ErrorHandler(
          404,
          "Response code 404 (Not Found)"
        );
      }

      const payload = {
        user: {
          id: user.id,
          email: user.email,
        },
      };

      jwt.sign(
        payload,
        TOKEN_SECRET,
        {
          expiresIn: TOKEN_EXPRIRATION,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200);

          return res.json({
            token,
          });
        }
      );
    } catch (err) {
      next(err);
    }
  },

  logout: (req, next) => {
    delete req.headers["token"];

    next();
  },
};

module.exports = authController;
