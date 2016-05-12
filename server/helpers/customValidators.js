'use strict'

const validator = require('validator')

const customValidators = {
  eachIsRemoteVideosAddValid: eachIsRemoteVideosAddValid,
  eachIsRemoteVideosRemoveValid: eachIsRemoteVideosRemoveValid,
  isArray: isArray
}

function eachIsRemoteVideosAddValid (values) {
  return values.every(function (val) {
    return validator.isLength(val.name, 1, 50) &&
      validator.isLength(val.description, 1, 50) &&
      validator.isLength(val.magnetUri, 10) &&
      validator.isURL(val.podUrl) &&
      !isNaN(val.duration)
  })
}

function eachIsRemoteVideosRemoveValid (values) {
  return values.every(function (val) {
    return validator.isLength(val.magnetUri, 10)
  })
}

function isArray (value) {
  return Array.isArray(value)
}

// ---------------------------------------------------------------------------

module.exports = customValidators