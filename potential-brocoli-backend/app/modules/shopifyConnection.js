const Shopify = require('shopify-api-node')

module.exports = (shopName, apiKey, password) => {
  return new Shopify({
    shopName,
    apiKey,
    password,
    autoLimit: true
  })
}