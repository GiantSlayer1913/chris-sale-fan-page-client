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
  $('#create-comment').css('display', 'block')
  $('#get-comments').css('display', 'block')
  $('#update-comment').css('display', 'block')
  $('#destroy-comment').css('display', 'block')
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
  $('#change-password').hide()
  $('#sign-out').hide()
  $('header').hide()
  $('footer').hide()
  $('.container').hide()
  $('nav.navbar').hide()
  $('.carousel-item').hide()
  $('#change-password').hide()
  $('#create-comment').hide()
  $('#get-comments').hide()
  $('#update-comment').hide()
  $('#destroy-comment').hide()
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
  $('#commentMessage').text('Successfully created comment')
  $('#commentMessage').css('background-color', 'green')
}
const createCommentFailure = function () {
  console.log('ui createCommentFailure logging')
  $('#commentMessage').text('Failure to create comment')
  $('#commentMessage').css('background-color', 'red')
}

const getCommentsSuccess = function (data) {
  console.log('ui getCommentsSuccess logging')
  $('#commentMessage').text('Successfully got comments')
  $('#commentMessage').css('background-color', 'green')
}
const getCommentsFailure = function () {
  console.log('ui getCommentsFailure logging')
  $('#commentMessage').text('Failure to get comments')
  $('#commentMessage').css('background-color', 'red')
}

const updateCommentSuccess = (data) => {
  console.log('ui updateCommentSuccess logging')
  $('#commentMessage').text('Successfully updated comment')
  $('#commentMessage').css('background-color', 'green')
}
const updateCommentFailure = () => {
  console.log('ui updateCommentFailure logging')
  $('#commentMessage').text('Failure to get comments')
  $('#commentMessage').css('background-color', 'red')
}

const deleteCommentSuccess = (data) => {
  console.log('ui updateCommentSuccess logging')
  $('#commentMessage').text('Successfully deleted comment')
  $('#commentMessage').css('background-color', 'green')
}
const deleteCommentFailure = () => {
  console.log('ui updateCommentFailure logging')
  $('#commentMessage').text('Failure to delete comments')
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
  createCommentFailure,
  getCommentsSuccess,
  getCommentsFailure,
  updateCommentSuccess,
  updateCommentFailure,
  deleteCommentSuccess,
  deleteCommentFailure
}
