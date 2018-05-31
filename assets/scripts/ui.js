'use strict'
const store = require('./store')
// const events = require('./events')

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
  $('#create-comment').css('display', 'block')
  $('#get-comments').css('display', 'block')
  $('#update-comment').css('display', 'block')
  $('#destroy-comment').css('display', 'block')
  $('#sign-in').trigger('reset')
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
  $('#commentForum').hide()
  $('#commentsIndiv').hide()
  store.user = null
}
const signOutFailure = function () {
  $('#message').text('Failure to sign out')
  $('#message').css('background-color', 'red')
}
// End of AUTH UI

// COMMENTS UI
const createCommentSuccess = function (data) {
  $('#commentsMsg').text('Successfully created comment')
  $('#commentsMsg').css('background-color', 'green')
  $('#create-comment').trigger('reset')
  // store.comments = data.comments
}
const createCommentFailure = function () {
  $('#commentsMsg').text('Failure to create comment')
  $('#commentsMsg').css('background-color', 'red')
  $('#create-comment').trigger('reset')
}

const getCommentsSuccess = function (data) {
  store.comments = data.comments
  $('#commentsMsg').text('Successfully got comments')
  $('#commentsMsg').css('background-color', 'green')
  // $('#commentsMsg').setTimeout(3000)
  // Clears form fields
  $('#commentsHeader').text('')
  $('#commentForum').text('')
  $('#commentsIndiv').text('')
  $('#commentsHeader').css('background', 'none')
  // Prints Comments
  if (store.comments.length > 0) {
    $('#commentsHeader').append('Comment ID - User Email - Comment text', '<br>')
    for (let i = 0; i < store.comments.length; i++) {
      const commentText = store.comments[i].text
      const commentEmail = store.comments[i].user.email
      const commentId = store.comments[i].id
      $('#commentsIndiv').append(commentId, '...', commentEmail, ' says: ', '"', commentText, '."', '<br>')
      $('#commentsIndiv').css('color', 'black')
      $('#commentsIndiv').css('background', 'rgb(199,199,199)')
      $('#commentsIndiv').css('display', 'block')
      $('#commentsIndiv').css('text-align', 'center')
      $('#commentsIndiv').css('font-size', '20px')
    }
  } else {
    $('#commentsHeader').css('display', 'block')
    $('#commentsHeader').append("You don't have any comments. First, go to 'Create Comment!' and submit a comment.")
    $('#commentsHeader').css('background-color', 'red')
    $('#commentsHeader').css('font color', '#ffffff')
  //  $('#commentsHeader').setTimeout(3000)
  }
}

const getCommentsFailure = function () {
  $('#commentsMsg').text('Failure to get comments')
  $('#commentsMsg').css('background-color', 'red')
  $('#commentsIndiv').text('')
  // $('#commentsMsg').setTimeout(3000)
}

const updateCommentSuccess = (data) => {
  $('#commentsHeader').text('Successfully updated comment')
  $('#commentsHeader').css('background-color', 'green')
  $('#commentsIndiv').text('')
  $('#update-comment').trigger('reset')
}
const updateCommentFailure = () => {
  $('#commentsHeader').text('Failure to get comments')
  $('#commentsHeader').css('background-color', 'red')
  $('#commentsIndiv').text('')
  $('#update-comment').trigger('reset')
}

const deleteCommentSuccess = (data) => {
  $('#commentsHeader').text('Successfully deleted comment')
  $('#commentsHeader').css('background-color', 'green')
  $('#commentsIndiv').text('')
  $('#destroy-comment').trigger('reset')
}
const deleteCommentFailure = () => {
  $('#commentsHeader').text('Failure to delete comments')
  $('#commentsHeader').css('background-color', 'red')
  $('#commentsIndiv').text('')
  $('#destroy-comment').trigger('reset')
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
