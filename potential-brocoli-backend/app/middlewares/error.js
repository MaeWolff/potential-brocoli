class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (error, res) => {
  let { statusCode, message } = error;

  // Si le statusCode n'est pas défini, on va le chercher dans le message d'erreur (Erreur provenant de Shopify par exemple)

  if (!statusCode) {
    if (typeof error.message === "undefined" || error.message === null) {
      statusCode = 404;
      return;
    }

    let splitedErrMessage = error.message.split(" ");
    for (const elem of splitedErrMessage) {
      if (!isNaN(elem)) {
        statusCode = parseInt(elem);
        break;
      }
    }
  }

  res.status(statusCode || 422).json({
    status: "Error",
    statusCode: statusCode || 422,
    message,
  });
};

module.exports = {
  ErrorHandler,
  handleError,
};
