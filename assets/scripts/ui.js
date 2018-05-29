'use strict'
const store = require('./store')

// Auth Ui below
const signUpSuccess = function () {
  console.log('ui signUpSuccess logging')
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
  $('#sign-up').trigger('reset')
}
const signUpFailure = function () {
  console.log('ui signUpFailure logging')
  $('#message').text('Failure signing up')
  $('#message').css('background-color', 'red')
  $('#sign-up').trigger('reset')
}
const signInSuccess = function (data) {
  console.log('ui signInSuccess logging')
  // Console log data
  console.log(data)
  $('#message').text('Successfully signed in')
  $('#message').css('background-color', 'green')
  $('#change-password').css('display', 'block')
  $('#sign-out').css('display', 'block')
  $('#sign-up').css('display', 'none')
  $('#sign-up').trigger('reset')
  $('#sign-in').css('display', 'none')
  $('#sign-in').trigger('reset')
  $('header').css('display', 'block')
  $('footer').css('display', 'block')
  $('.container').css('display', 'block')
  $('nav.navbar').css('display', 'block')
  $('.carousel-item').css('display', 'block')
  store.user = data.user
}

const signInFailure = function () {
  console.log('ui signInFailure logging')
  $('#message').text('Failure signing in')
  $('#message').css('background-color', 'red')
  $('#sign-in').trigger('reset')
}

const changePasswordSuccess = function () {
  console.log('ui changePasswordSuccess logging')
  $('#message').text('Successfully changed password')
  $('#message').css('background-color', 'green')
  $('#change-password').trigger('reset')
}
const changePasswordFailure = function () {
  console.log('ui changePasswordFailure logging')
  $('#message').text('Failure to change password')
  $('#message').css('background-color', 'red')
  $('#change-password').trigger('reset')
}
const signOutSuccess = function (data) {
  console.log('ui signOutSuccess logging')
  $('#message').text('Successfully signed out')
  $('#message').css('background-color', 'green')
  $('#sign-up').css('display', 'block')
  $('#sign-in').css('display', 'block')
  $('#change-password').css('display', 'none')
  $('#sign-out').css('display', 'none')
  store.user = null
}
const signOutFailure = function () {
  console.log('ui signOutFailure logging')
  $('#message').text('Failure to sign out')
  $('#message').css('background-color', 'red')
}
// End of AUTH UI

// COMMENTS UI
const createCommentSuccess = function (data) {
  console.log('ui createCommentSuccess logging')
  console.log(data)
  $('#commentMessage').text('Successfully signed out')
  $('#commentMessage').css('background-color', 'green')
}
const createCommentFailure = function (data) {
  console.log('ui createCommentFailure logging')
  $('#commentMessage').text('Failure to create comment')
  $('#commentMessage').css('background-color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createCommentSuccess,
  createCommentFailure
}
