'use strict'
const config = require('./config')
const store = require('./store')

// Auth functions below
const signUp = function (data) {
  console.log('api sign-up logging')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}
const signIn = function (data) {
  console.log('api sign-in logging')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    // headers: {
    //   contentType: 'application/json'
    // },
    data
  })
}
const changePassword = function (data) {
  console.log('api changePassword logging')
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const signOut = function () {
  console.log('api sign-out logging')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createComment = function (data) {
  console.log('api createComment logging')
  console.log(data)
  console.log(store)
  return $.ajax({
    url: config.apiUrl + '/comments',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getComments = function (data) {
  console.log('api getComments logging')
  return $.ajax({
    url: config.apiUrl + '/comments',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateComment = function (data) {
  return $.ajax({
    url: config.apiUrl + '/comments/' + data.comment.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteComment = function (data) {
  return $.ajax({
    url: config.apiUrl + '/comments/' + data.comment.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createComment,
  getComments,
  updateComment,
  deleteComment
}
