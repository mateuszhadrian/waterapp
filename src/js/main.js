"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

const addButton = document.querySelector('.button-area__add--js');
const removeButton = document.querySelector('.button-area__remove--js');
const counter = document.querySelector('.number--js');

const key = new Date().toISOString().slice(0, 10)

if (localStorage.getItem(key) === null) {
  localStorage.setItem(key, 0)
}

counter.textContent = localStorage.getItem(key);

let value = localStorage.getItem(key);

addButton.addEventListener('click', function () {
  value++;
  localStorage.setItem(key, value);
  counter.textContent = localStorage.getItem(key);
})

removeButton.addEventListener('click', function () {
  if (value > 0) {
    value--;
    localStorage.setItem(key, value);
    counter.textContent = localStorage.getItem(key);
  }
})