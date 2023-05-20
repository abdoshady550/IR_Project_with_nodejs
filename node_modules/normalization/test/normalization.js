var assert            = require('assert')
  , normalize         = require('../lib/normalization')
  , NotArrayNorString = require('../lib/errors/not-array-nor-string')
  , NonStringInArray  = require('../lib/errors/non-string-in-array')

it('should normalize a single string', function () {

  assert.equal(normalize('eu sempre tive uma certeza'),
                         'eu sempre tive uma certeza')

  assert.equal(normalize('que só me deu desilusão'),
                         'que so me deu desilusao')

  assert.equal(normalize('é que o amor é uma tristeza'),
                         'e que o amor e uma tristeza')

  assert.equal(normalize('muita mágoa demais para um coração'),
                         'muita magoa demais para um coracao')

})

it('should normalize an array of strings', function () {

  assert.deepEqual(normalize([ 'eu', 'sempre', 'tive', 'uma', 'certeza' ]),
                             [ 'eu', 'sempre', 'tive', 'uma', 'certeza' ])

  assert.deepEqual(normalize([ 'que', 'só', 'me', 'deu', 'desilusão' ]),
                         [ 'que', 'so', 'me', 'deu', 'desilusao' ])

  assert.deepEqual(normalize([ 'é', 'que', 'o', 'amor', 'é', 'uma', 'tristeza' ]),
                         [ 'e', 'que', 'o', 'amor', 'e', 'uma', 'tristeza' ])

  assert.deepEqual(normalize(['muita', 'mágoa', 'demais', 'para', 'um', 'coração' ]),
                         [ 'muita', 'magoa', 'demais', 'para', 'um', 'coracao' ])


})

it('should throw when given not a string nor array', function () {

  assert.throws(
      function () { normalize() }
    , NotArrayNorString
  )

  assert.throws(
    function () { normalize(null)}
    , NotArrayNorString
  )

  assert.throws(
    function () { normalize(123)}
    , NotArrayNorString
  )

  assert.throws(
    function () { normalize(/lol/)}
    , NotArrayNorString
  )

})

it('should throw when there\'s a non string in array', function () {

  assert.throws(
    function () { normalize([ '1', 2, '3' ])}
    , NonStringInArray
  )

})

