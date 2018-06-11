'use strict'
const store = require('./store')
// const events = require('./events')

// Auth Ui below
const signUpSuccess = function () {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
  $('#sign-up').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}
const signUpFailure = function () {
  $('#message').text('Failure signing up')
  $('#message').css('background-color', 'red')
  $('#sign-up').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
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
  $('#home').hide()
  $('.slideshow-container').css('display', 'block')
  $('#first').css('display', 'block')
  $('#next').show()
  $('#prev').show()
  $('.dots').show()
  $('#create-comment').css('display', 'block')
  $('#get-comments').css('display', 'block')
  $('#hide-comments').css('display', 'inline-flex')
  $('#update-comment').css('display', 'block')
  $('#destroy-comment').css('display', 'block')
  $('.dots').css('display', 'block')
  $('#sign-in').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
  store.user = data.user
}

const signInFailure = function () {
  $('#message').text('Failure signing in')
  $('#message').css('background-color', 'red')
  $('#sign-in').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

const changePasswordSuccess = function () {
  $('#message').text('Successfully changed password')
  $('#message').css('background-color', 'green')
  $('#change-password').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}
const changePasswordFailure = function () {
  $('#message').text('Failure to change password')
  $('#message').css('background-color', 'red')
  $('#change-password').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
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
  $('#hide-comments').css('display', 'none')
  $('#update-comment').hide()
  $('#destroy-comment').hide()
  $('#commentForum').hide()
  $('#commentsIndiv').hide()
  $('#commentsHeader').hide()
  $('#home').show()
  $('.mySlides-fade').css('display', 'none')
  $('.dots').hide()
  $('#next').hide()
  $('#prev').hide()
  store.user = null
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}
const signOutFailure = function () {
  $('#message').text('Failure to sign out')
  $('#message').css('background-color', 'red')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}
// End of AUTH UI

// COMMENTS UI
const createCommentSuccess = function (data) {
  $('#commentsMsg').text('Successfully created comment')
  $('#commentsMsg').css('background-color', 'green')
  $('#create-comment').trigger('reset')
  setTimeout(() => {
    $('#commentsMsg').html('')
  }, 3000
  )
}
const createCommentFailure = function () {
  $('#commentsMsg').text('Failure to create comment')
  $('#commentsMsg').css('background-color', 'red')
  $('#create-comment').trigger('reset')
  setTimeout(() => {
    $('#commentsMsg').html('')
  }, 3000
  )
}

const getCommentsSuccess = function (data) {
  store.comments = data.comments
  $('#commentsMsg').text('Successfully got comments')
  $('#commentsMsg').css('background-color', 'green')
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
  }
  setTimeout(() => {
    $('#commentsMsg').html('')
  }, 3000
  )
}

const getCommentsFailure = function () {
  $('#commentsMsg').text('Failure to get comments')
  $('#commentsMsg').css('background-color', 'red')
  $('#commentsIndiv').text('')
  setTimeout(() => {
    $('#commentsMsg').html('')
  }, 3000
  )
}

const hideCommentsSuccess = (data) => {
  $('#commentsIndiv').css('display', 'none')
  $('#commentsHeader').text('Poof!')
  $('#commentsHeader').css('background-color', 'orange')
  setTimeout(() => {
    $('#commentsHeader').html('')
  }, 3000
  )
}
const hideCommentsFailure = () => {
  $('#commentsHeader').text('Failure to hide comments!')
  $('#commentsHeader').css('background-color', 'red')
  setTimeout(() => {
    $('#commentsHeader').html('')
  }, 3000
  )
}

const updateCommentSuccess = (data) => {
  $('#commentsHeader').text('Successfully updated comment')
  $('#commentsHeader').css('background-color', 'green')
  $('#commentsIndiv').text('')
  $('#update-comment').trigger('reset')
  setTimeout(() => {
    $('#commentsHeader').html('')
  }, 3000
  )
}
const updateCommentFailure = () => {
  $('#commentsHeader').text('Failure to get comments')
  $('#commentsHeader').css('background-color', 'red')
  $('#commentsIndiv').text('')
  $('#update-comment').trigger('reset')
  setTimeout(() => {
    $('#commentsHeader').html('')
  }, 3000
  )
}

const deleteCommentSuccess = (data) => {
  $('#commentsHeader').text('Successfully deleted comment')
  $('#commentsHeader').css('background-color', 'green')
  $('#commentsIndiv').text('')
  $('#destroy-comment').trigger('reset')
  setTimeout(() => {
    $('#commentsHeader').html('')
  }, 3000
  )
}

const deleteCommentFailure = () => {
  $('#commentsHeader').text('Failure to delete comments')
  $('#commentsHeader').css('background-color', 'red')
  $('#commentsIndiv').text('')
  $('#destroy-comment').trigger('reset')
  setTimeout(() => {
    $('#commentsHeader').html('')
  }, 3000
  )
}

// SLIDESHOW javascript
const slideShowForward = () => {
  plusSlides(1)
}

const slideShowBackward = () => {
  plusSlides(-1)
}

let slideIndex = 1
showSlides(slideIndex)

const plusSlides = function (n) {
  showSlides(slideIndex += n)
}

const currentSlide = function (n) {
  showSlides(slideIndex = n)
}

function showSlides (n) {
  let i
  const slides = document.getElementsByClassName('mySlides-fade')
  const dots = document.getElementsByClassName('dot')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'
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
  hideCommentsSuccess,
  hideCommentsFailure,
  updateCommentSuccess,
  updateCommentFailure,
  deleteCommentSuccess,
  deleteCommentFailure,
  plusSlides,
  currentSlide,
  slideShowForward,
  slideShowBackward
}
