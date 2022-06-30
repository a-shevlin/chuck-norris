import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Norris from './js/chuck-norris.js';
import NorrisGiphy from './js/giphy-api.js';
import RandomGiphy from './js/random-giphy';

//Bear, Cow, house, bull, giraffe, ant, cat
//Steve Jobs, universe, paperboy, 
//Paris Hilton, Mr. T, the Rock is cooking, King Kong, Obama, King Midas, Charlie Sheen, Saddam Hussein, Steven Seagal, Hellen Keller, President Roosevelt, Bill Gates, Tom Cruise, MacGyver, Ozzy Osbourne, Stevie Wonder, Wilt Chamberlain
//restaurant, Food Network, gasoline, butter, milkshake, fries

//google, encrypted, PI, errors, code, machine, Street Fighter, database, bugs fix, Towers of Hanoi, World of Warcraft, binary, exceptions, infinite loop, type, MySpace, IE, hard drive
   //equal, web, hosting, garbage, Oracle


//keyboard, alt: Ctrl
//No one has ever pair-programmed with Chuck Norris and lived to tell about it.
//Chuck Norris does not need to know about class factory pattern. He can instantiate interfaces.
//Chuck Norris can spawn threads that complete before they are started
//Chuck Norris is the ultimate mutex, all threads fear him.
//If you try to kill -9 Chuck Norris's programs, it backfires.
//Project managers never ask Chuck Norris for estimations... ever.
//Chuck Norris is the only human being to display the Heisenberg uncertainty principle - you can never know both exactly where and how quickly he will roundhouse-kick you in the face.
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
    return response.value;
}

          function sortedGif(response, category) {
          let arr = [];
          const str = response.value;
          if ( category === "food"){
            arr = ['restaurant', 'Food Network', 'gasoline', 'butter', 'milkshake', 'fries'];
          }
          let match = '';
          const contains = arr.some(element => {
            if (str.includes(element)) {
              match = element;
              return true;
            }
            return false;
          });
          let categoryNumber = getRandomInt(300);
          if (contains) {
            RandomGiphy.getRandom(match, categoryNumber)
            .then(function(response) {
              const output = `<img src="${response.data[0].images.downsized_medium.url}"></img>`;
            })
            .catch(function(error) {
              return error;
            })
          } else {
            RandomGiphy.getRandom(category, categoryNumber)
            .then(function(response) {
              const output = `<img src="${response.data[0].images.downsized_medium.url}"></img>`;
            })
            .catch(function(error) {
              return error;
            })
          }
          return output;
          }
         
function matchArrayToCategory(category) {
  let newArray = joke.category;
  return newArray;
}

function findMatch(array, value) {
  let match = array.find(value);
  if (match === undefined) {
    match = value;
  } else {
    return match;
  }
  return match;
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
    let norrisNumber = getRandomInt(120);
    let categoryNumber = getRandomInt(300);
    Norris.getRandom(category)
    .then(function(response) {
      getElements(response);
    });
    NorrisGiphy.getRandom(norrisNumber)
    .then(function(response) {
      $('#randomPic').html(`<img src="${response.data[0].images.downsized_medium.url}"></img>`);
    })
    RandomGiphy.getRandom(category, categoryNumber)
    .then(function(response) {
      $('#norrisPic').html(`<img src="${response.data[0].images.downsized_medium.url}"></img>`);
    })
  });
});