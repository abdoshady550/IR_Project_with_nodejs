var remapInternationalCharToAscii = require('remap-international-char-to-ascii')
  , NotArrayNorString             = require('./errors/not-array-nor-string')
  , NonStringInArray              = require('../lib/errors/non-string-in-array')

module.exports = function (input) {

  var string = isString(input)

  // we only play with arrays
  if (string) input = [ input ]

  // yup, we only play with arrays
  if (isArray(input)) {

    // did I mention that we only play with arrays... of strings?
    if (allStrings(input)) {

      // normalizing each string in array
      var normalized = input.map(normalizeString)

      // here, take it
      return string ? normalized[0] : normalized

    } else throw new NonStringInArray()

  } else throw new NotArrayNorString()
}

function isString (input) { return typeof input === 'string' }

function isArray (input) { return Array.isArray(input) }

function allStrings (input) { return input.every(isString) }

function normalizeString (str) {
  // normalizing each character in string
  return str.toLowerCase().split('').map(normalizeChar).join('')
}

function normalizeChar (c) {
  return alphaNumeric(c) ? c : (remapInternationalCharToAscii(c) || ' ')
}

function alphaNumeric (c) {
  return (c >= 'a' && c <='z') || (c >= '0' && c <= '9')
}

