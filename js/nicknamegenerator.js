"use strict";
(function () {
  let adjectives = ["Mysterious","Fluffy","Angry","Vengeful","Hyperactive","Playful","Seismic", 
"Furious","Mad","Jumpy","Genious","Adventurer","Sparkling","Nocturnal","Aquatic","Jittery",
"Cagey","Capricious","Divergent","Erratic","Heuristic","Evasive","Solar","Tenacious","Zealous",
"Agreeable","Charming","Bright","Versatile","Loyal","Chatty","Witty","Laid-back","Persistent",
"Fearless","Artistic","Nefarious","Speedy","Restless","Icy","Devious","Slippery","Deceptive",
"Foxy","Diligent","Shady","Thrilled","Chirpy","Carefree","Jolly","Crafty","Daring","Agile","Sleepy"];

let nouns = ["Eagle","UFO","Wizard","Shark","Turtle","Knight","Dragon","Philosopher","Scarecrow",
"Boxer","Champ","Hitchhiker","Mechanic","Executer","Astronaut","Soda","Swordmaster","Librarian",
"Sensei","Vampire","Plumber","Baker","Fisher","Gardener","Protagonist","Antagonist","Star","Forester",
"Dragon","Frog","Tiger","Hacker","Keeper","Racer","Rider","Reporter","Traveler","Professor","Chef",
"Pilot","Commander","Painter","Cook","Catcher","Diver","Ranger","Astronomer","Oracle","Cleaner",
"Rocket","Scientist","Magician","Zookeper","Brewmaster","Detective","Shopper","Chocolatier",
"Shuffler"];

const resultArea = document.getElementById("js-resultarea");
const adjectiveArea = document.getElementById("js-adjectivearea");
const nounArea = document.getElementById("js-nounarea");
const getNicknameButton = document.getElementById("js-getnickname");

resultArea.addEventListener("click", copyToClipboard);
getNicknameButton.addEventListener("click", getNickname);


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
})();


