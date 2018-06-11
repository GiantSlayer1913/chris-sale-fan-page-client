'use strict'

const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const store = require('./store')

// AUTH FUNCTIONS
const onSignUP = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = function () {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onCreateComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createComment(data)
    .then(ui.createCommentSuccess)
    .catch(ui.createCommentFailure)
}

const onGetComments = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getComments(data)
    .then(ui.getCommentsSuccess)
    .catch(ui.getCommentsFailure)
}

const onHideComments = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.hideComments(data)
    .then(ui.hideCommentsSuccess)
    .catch(ui.hideCommentsFailure)
}

const onUpdateComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateComment(data)
    .then(ui.updateCommentSuccess)
    .catch(ui.updateCommentFailure)
}

const onDeleteComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteComment(data)
    .then(ui.deleteCommentSuccess)
    .catch(ui.deleteCommentFailure)
}

const onPreviousSlide = function (event) {
  event.preventDefault()
  ui.slideShowBackward()
}
const onNextSlide = function (event) {
  event.preventDefault()
  ui.slideShowForward()
}
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUP)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create-comment').on('submit', onCreateComment)
  $('#get-comments').on('submit', onGetComments)
  $('#hide-comments').on('submit', onHideComments)
  $('#update-comment').on('submit', onUpdateComment)
  $('#destroy-comment').on('submit', onDeleteComment)
  $('#prev').on('click', onPreviousSlide)
  $('#next').on('click', onNextSlide)
}

module.exports = {
  addHandlers
}
