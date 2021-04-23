const axios = require('axios')

const axiosSIB = axios.create({
  baseURL: `${process.env.SIB_API_URL}smtp/email`,
  method: 'post',
  headers: { 'api-key': process.env.SIB_API_KEY }
})

module.exports = axiosSIB