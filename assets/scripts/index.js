'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./events')
$('#sign-out').hide()
$('#change-password').hide()
$('#create-comment').hide()
$('#get-comments').hide()
$('#update-comment').hide()
$('#destroy-comment').hide()
$('.slideshow-container').hide()
$('#next').hide()
$('#prev').hide()

$(() => {
  events.addHandlers()
})
