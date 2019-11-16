"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

const addButton = document.querySelector('.button-area__add--js');
const removeButton = document.querySelector('.button-area__remove--js');
const counter = document.querySelector('.number--js');
let value = 0;

addButton.addEventListener('click', function(){
  value++;
  counter.textContent = value; 
})

removeButton.addEventListener('click', function(){
  if (value  > 0){
    value--;
    counter.textContent = value;
  }
})


