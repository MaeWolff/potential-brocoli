const jwt = require("jsonwebtoken");

const TOKEN_SECRET = process.env.JWT_SECRET_TOKEN;

const authJwt = (req, res, next) => {
  const token = req.headers["token"];

  if (!token) {
    return res.status(401).json({ message: "Auth Error" });
  }

  try {

    jwt.verify(token, TOKEN_SECRET, function (err, decoded) {
      if (err) {
        return res.status(500).send({
          message: err.message,
        });
      }

      req.user = decoded.user.email;

      next();
      return;
    });

    next();
  } catch (err) {
    next(err);
    res.status(500).send({ message: "Invalid Token" });
  }
};

module.exports = {
  TOKEN_SECRET,
  authJwt,
};
