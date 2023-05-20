function NotArrayNorString () {
  // name and message
  this.name    = this.constructor.name
  this.message = 'Pass a string or an array of strings!'

  // V8's stack trace
  Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
}

// inheriting Error
NotArrayNorString.prototype = Object.create(Error.prototype)
NotArrayNorString.prototype.constructor = NotArrayNorString

// here, take it
module.exports = NotArrayNorString

