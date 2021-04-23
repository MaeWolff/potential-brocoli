const randomString = require('randomstring')
const accents = require('remove-accents')

module.exports = function(typeOfDiscountCode, firstNameOfCustomer, lastNameOfCustomer) {
  let discountCode, prefixOfDiscountCode
  let initialsOfCustomer = firstNameOfCustomer.charAt(0) + lastNameOfCustomer.substring(0, 3)
  initialsOfCustomer = accents.remove(initialsOfCustomer).toUpperCase()
  const randomPartOfDiscountCode = randomString.generate({
    length: 4,
    charset: 'alphanumeric',
    capitalization: 'uppercase',
    readable: true
  })

  if (typeOfDiscountCode === 'sponsorship') {
    prefixOfDiscountCode = 'SPONSOR'
  } else if (typeOfDiscountCode === 'jackpot') {
    prefixOfDiscountCode = 'JACKPOT'
  }

  discountCode = prefixOfDiscountCode + initialsOfCustomer + randomPartOfDiscountCode

  return discountCode
}