import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Norris from './js/chuck-norris.js';
import NorrisGiphy from './js/giphy-api.js';
import RandomGiphy from './js/random-giphy';

function getElements(response) {
    $('#norrisQuote').text(response.value);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
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