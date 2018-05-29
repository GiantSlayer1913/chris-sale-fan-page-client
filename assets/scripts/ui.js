'use strict'
const store = require('./store')

// Auth Ui below
const signUpSuccess = function () {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
  $('#sign-up').trigger('reset')
}
const signUpFailure = function () {
  $('#message').text('Failure signing up')
  $('#message').css('background-color', 'red')
  $('#sign-up').trigger('reset')
}
const signInSuccess = function (data) {
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
  $('#message').text('Failure signing in')
  $('#message').css('background-color', 'red')
  $('#sign-in').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#message').text('Successfully changed password')
  $('#message').css('background-color', 'green')
  $('#change-password').trigger('reset')
}
const changePasswordFailure = function () {
  $('#message').text('Failure to change password')
  $('#message').css('background-color', 'red')
  $('#change-password').trigger('reset')
}
const signOutSuccess = function (data) {
  $('#message').text('Successfully signed out')
  $('#message').css('background-color', 'green')
  $('#sign-up').css('display', 'block')
  $('#sign-in').css('display', 'block')
  $('#change-password').css('display', 'none')
  $('#sign-out').css('display', 'none')
  store.user = null
}
const signOutFailure = function () {
  $('#message').text('Failure to sign out')
  $('#message').css('background-color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
