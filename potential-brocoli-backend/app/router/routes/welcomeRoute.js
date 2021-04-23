module.exports = function (router) {
    router.get('/', (req, res) => {
      return res.status(200).json({
        welcome: "Le Groupe 3 vous souhaite la bienvenue à bord. L'API Brocoli encaisse un trafic qui avance à rythme de #croisière."
      })
    })
  }