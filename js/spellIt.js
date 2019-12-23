const wordsLevel1 = [
  "arbitrary",
  "crunchy",
  "excitement",
  "implicit",
  "weird",
  "brief",
  "caffeine",
  "monarchy",
  "replenish",
  "rhetoric",
  "sandwich",
  "accommodate",
  "maintenance",
  "conscience",
  "silhouette",
  "ambiguous",
  "thorough",
  "occurred",
  "acceptable",
  "scenario",
  "symmetric",
  "acquire",
  "committed",
  "exceed",
  "guarantee",
  "height",
  "hierarchy",
  "jewelry",
  "judgment",
  "maintenance",
  "medieval",
  "misspell",
  "occasionally",
  "perseverance",
  "receipt",
  "rhythm",
  "schedule",
  "access",
  "component",
  "permanent",
  "query",
  "strength",
  "absence",
  "accomplish",
  "business",
  "congratulations",
  "development",
  "especially",
  "government",
  "Arctic",
  "mischief",
  "coincidence",
  "paramount",
  "circumstance",
  "construct",
  "permanent",
  "temporary",
  "reassure",
  "encourage",
  "stimulate",
  "endangered",
  "renewable",
  "anxious",
  "entrepreneur"
];

let wordsLevel1_copy;

//Get the info part to display the new score
let userScore = document.getElementById("userScore");

//Scoreholder in JS
let score = 0;

//The level of the game
let gameLevel;

//Get the button
const theButton = document.getElementById("start-button");

//The textbox for the word to be typed
const wordHolder = document.getElementById("wordHolder");

//Get the card body to change its color based on whether user input matches the target word or not
const cardBody = document.getElementById("cardBody");

//Get the user input
const userInput = document.getElementById("userInput");

//Audio to play for each correct answer
const audio = document.getElementById("audio");

//Check to see if there is a session already started
let hasStarted = false;

//Functions

//Set the level of the game before starting
function setLevel() {}

//Highlight the correctly typed letter
function highlightLetter() {}

//Shuffle the chosen words
function shuffleWords(arr) {
  wordsLevel1_copy = [...arr];
  let currentIndex = wordsLevel1_copy.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = wordsLevel1_copy[currentIndex];
    wordsLevel1_copy[currentIndex] = wordsLevel1_copy[randomIndex];
    wordsLevel1_copy[randomIndex] = temporaryValue;
  }
  console.log(wordsLevel1_copy);
  return wordsLevel1_copy;
}
//Call it once to shuffle the words in the beginning for all word types.
shuffleWords(wordsLevel1);

//Get a random word from the level and display it on the 'wordHolder' component and get user input into focus to being typing
//Clear the input area to begin a smooth typing process
function getMyWord() {
  gameStart();

  wordHolder.textContent = "";
  let splitWord = wordsLevel1_copy[0].split("");

  for (let i = 0; i < splitWord.length; i++) {
    let letterSpan = document.createElement("span");
    letterSpan.textContent = splitWord[i];
    wordHolder.appendChild(letterSpan);
  }

  document.getElementsByName("input")[0].placeholder = "";
  userInput.value = "";
  userInput.maxLength = wordHolder.textContent.length;
  userInput.focus();
  checkInputWord();
}

//Change the class of the input text based on its accuracy & call "nextWord" function back
function checkInputWord() {
  compareWords();
  if (userInput.value == wordHolder.textContent) {
    audio.play();
    snackBar();
    nextWord();
  }
}

//Automatically move to the next word in 0.7 second once user writes the target word correctly
function nextWord() {
  if (wordsLevel1_copy.length > 1) {
    if (userInput.value == wordHolder.textContent) {
      wordsLevel1_copy.splice(0, 1);
      getMyWord();
      setTimeout(function() {
        score += 2;
        userScore.textContent = score + " PTS";
        console.log(wordsLevel1_copy);
      }, 500);
    }
  } else {
    confirm("You have reached the end of the game! Congratulations!");
    theButton.classList.remove("buttons-gray");
  }
}

//Set game status
function gameStart() {
  userInput.disabled = false;
  hasStarted = true;
  if (theButton.classList.contains("buttons-gray") == false) {
    theButton.classList.add("buttons-gray");
  }
}

function compareWords() {
  if (
    userInput.value == wordHolder.textContent.slice(0, userInput.value.length)
  ) {
    // userInput.style.color = "green";
    userInput.classList.remove("background-red");
    userInput.classList.add("background-green");
  } else {
    userInput.classList.remove("background-green");
    userInput.classList.add("background-red");
  }
}

//Reset points
function resetGame() {
  if (score > 0) {
    if (confirm("The points will be reset! Do you confirm?")) {
      shuffleWords(wordsLevel1);
      getMyWord();
      score = 0;
      userScore.textContent = 0 + " PTS";
    }
  }
}

// Snackbar
function snackBar() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 1500);
}
