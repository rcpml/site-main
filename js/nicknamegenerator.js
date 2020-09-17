"use strict";
let adjectives = ["Mysterious","Fluffy","Angry","Vengeful","Hyperactive","Playful","Seismic", 
"Furious","Mad","Jumpy"];
let nouns = ["Eagle","UFO","Wizard","Shark","Turtle","Knight","Dragon","Philosopher","Scarecrow",
"Boxer","Champ","Kid","Mechanic","Executer"];

const resultArea = document.getElementById("js-resultarea");
const adjectiveArea = document.getElementById("js-adjectivearea");
const nounArea = document.getElementById("js-nounarea");
const getButton = document.getElementById("js-getnickname");

resultArea.addEventListener("click", copyToClipboard);
getButton.addEventListener("click", getNickname);


function randomize(arr) {
  return (Math.floor(Math.random() * arr.length));
}

function getAdjective() {
  adjectiveArea.textContent = adjectives[randomize(adjectives)];
}

function getNoun() {
  nounArea.textContent = nouns[randomize(nouns)];
}

function getNickname() {
  getAdjective();
  getNoun();
}

function copyToClipboard() {
  var range = document.createRange();
  range.selectNode(document.getElementById("js-resultarea"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges();// to deselect
}

