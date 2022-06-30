import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Norris from './js/chuck-norris.js';
import NorrisGiphy from './js/giphy-api.js';
import RandomGiphy from './js/random-giphy';

function getElements(response) {
    $('#norrisQuote').text(response.value);
    let speech = new SpeechSynthesisUtterance();
    speech.text = response.value;
    window.speechSynthesis.speak(speech);
    let split = response.value.split(' ');
    if ((split.length - 1) % 2 === 0) {
      let newLength = (split.length / 2) * 1000;
      audioPlay(newLength);
    } else {
      split.pop();
      let newLength = (split.length / 2) * 1000;
      audioPlay(newLength);
    }
    //round down to nearest even number
    //take 2ish words per sec

    //if length is equal to 10 words wait 5 seconds
    console.log(split);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function audioPlay(number) {
  setTimeout(function() {
    let audio = new Audio('http://soundfxcenter.com/music/musical-instruments/8d82b5_Ba_Dum_Tss_Sound_Effect.mp3');
    audio.play();
  }, number);
}

$(document).ready(function() {
  $('#find').click(function() {
    let category = $("#category option:selected").val();
    let number = getRandomInt(120);
    Norris.getRandom(category)
    .then(function(response) {
      getElements(response);
    });
    NorrisGiphy.getRandom(number)
    .then(function(response) {
      $('#randomPic').html(`<img src="${response.data[0].images.downsized_medium.url}"></img>`);
    })
    RandomGiphy.getRandom()
    .then(function(response) {
      $('#norrisPic').html(`<img src="${response.data.images.downsized_medium.url}"></img>`);
    })
  });
});