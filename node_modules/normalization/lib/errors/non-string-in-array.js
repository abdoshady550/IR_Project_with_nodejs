function NonStringInArray () {
  // name and message
  this.name    = this.constructor.name
  this.message = 'The given array should contain only strings!'

  // V8's stack trace
  Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
}

// inheriting Error
NonStringInArray.prototype = Object.create(Error.prototype)
NonStringInArray.prototype.constructor = NonStringInArray

// here, take it
module.exports = NonStringInArray

