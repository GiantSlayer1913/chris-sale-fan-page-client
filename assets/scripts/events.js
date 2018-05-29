
'use strict'
const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')

// AUTH FUNCTIONS
const onSignUP = function (event) {
  console.log('events sign-up logging')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  console.log('events sign-in logging')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  console.log('events changePassword logging')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = function () {
  console.log('events sign-out logging')
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateComment = function (event) {
  console.log('events onCreateComment logging')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createComment(data)
    .then(ui.createCommentSuccess)
    .catch(ui.createCommentFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUP)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create-comment').on('submit', onCreateComment)
}

module.exports = {
  addHandlers
}
