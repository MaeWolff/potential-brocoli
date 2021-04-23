const axios = require('axios')

module.exports = async (arrayOfEmails) => {
  try {
    for (email of arrayOfEmails) {
      await axios({
        method: 'post',
        url: `${process.env.SIB_API_URL}contacts`,
        headers: {
          'api-key': process.env.SIB_API_KEY,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          updateEnabled: false,
          email
        })
      });
    }
  } catch (error) {
    console.info('User already recorded, continue')
  }
}