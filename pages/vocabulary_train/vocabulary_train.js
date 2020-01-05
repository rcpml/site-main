const spaceCategory = document.getElementById("spaceCategory");
const agricultureCategory = document.getElementById("agricultureCategory");
const literatureCategory = document.getElementById("literatureCategory");
const psychologyCategory = document.getElementById("psychologyCategory");

const numberOne = document.getElementById('numberOne');
const numberTwo = document.getElementById('numberTwo');
const numberThree = document.getElementById('numberThree');
const numberFour = document.getElementById('numberFour');
const numberFive = document.getElementById('numberFive');
const numberSix = document.getElementById('numberSix');
const numberSeven = document.getElementById('numberSeven');
const numberEight = document.getElementById('numberEight');
const numberNine = document.getElementById('numberNine');
const numberTen = document.getElementById('numberTen');


const wordArea = document.getElementById("wordArea");
const definitionArea = document.getElementById("definitionArea");
const sampleArea = document.getElementById("sampleArea");

let currentCategory;
let currentDeck;

let spaceWords = [
  {
    word: "NEBULA",
    definition:
      "an interstellar cloud of dust, hydrogen, helium and other ionized gases",
    sample:
      "Some nebulate (more than one nebula) from after the explosion of a star."
  },
  {
    word: "COMET",
    definition: "a bright object with a long tail that travels around the sun",
    sample: "Another comet suddenly appeared in the Solar System."
  },
  {
    word: "INTERSTELLAR",
    definition: "occurring or situated between stars",
    sample: "Interstellar travel is expected to be possible by 2050."
  },
  {
    word: "LAUNCH",
    definition: "start or set in motion",
    sample: "The space shuttle was launced successfully!"
  },
  {
    word: "ORBIT",
    definition:
      "a regular, repeating path that one object in space takes around another one",
    sample: "Many planets have moons that orbit them."
  },
  {
    word: "SHUTTLE",
    definition:
      "a vehicle or aircraft that travels regularly between two places",
    sample:
      "The American (space) shuttle was able to be used many times to put payloads in space."
  },
  {
    word: "INTERPLANETARY",
    definition: "situated or travelling between planets",
    sample: "Humans are just beginning to explore interplanetary travel."
  },
  {
    word: "GRAVITY",
    definition:
      "the force by which a planet or other body draws objects toward its center",
    sample:
      "The force of gravity keeps all of the planets in orbit around the sun."
  },
  {
    word: "MILKY WAY",
    definition: "the galaxy that contains our Solar System",
    sample:
      "Our Sun and all the planets around it are part of the Milky Way Galaxy."
  },
  {
      word:'NOVA',
      definition: 'a star that suddenly becomes thousands of times brighter and then gradually fades to its original intensity',
      sample: 'The brightest recent example was Nova Cygni 1975.'
  }
];

let agricultureWords = [
  {
    word: "CULTIVATE",
    definition: "empty!",
    sample: "empty!"
  }
];

let literatureWords = [
  {
    word: "RHYME",
    definition: "empty!",
    sample: "empty!"
  }
];

let psychologyWords = [
    {
      word: "EMPATHY",
      definition: "empty!",
      sample: "empty!"
    }
  ];

spaceCategory.addEventListener("click", () => {
  wordArea.textContent = spaceWords[0].word;
  definitionArea.textContent = spaceWords[0].definition;
  sampleArea.textContent = spaceWords[0].sample;
  currentCategory = "space";
  currentDeck = spaceWords;
});

agricultureCategory.addEventListener("click", () => {
  wordArea.textContent = agricultureWords[0].word;
  definitionArea.textContent = agricultureWords[0].definition;
  sampleArea.textContent = agricultureWords[0].sample;
  currentCategory = "agriculture";
  currentDeck = agricultureWords;
});

literatureCategory.addEventListener("click", () => {
    wordArea.textContent = literatureWords[0].word;
    definitionArea.textContent = literatureWords[0].definition;
    sampleArea.textContent = literatureWords[0].sample;
    currentCategory = "literature";
    currentDeck = literatureWords;
  });

psychologyCategory.addEventListener("click", () => {
    wordArea.textContent = psychologyWords[0].word;
    definitionArea.textContent = psychologyWords[0].definition;
    sampleArea.textContent = psychologyWords[0].sample;
    currentCategory = "literature";
    currentDeck = literatureWords;
  });


numberOne.addEventListener('click', () => {
    wordArea.textContent = currentDeck[0].word;
    definitionArea.textContent = currentDeck[0].definition;
    sampleArea.textContent = currentDeck[0].sample;
})

numberTwo.addEventListener('click', () => {
    wordArea.textContent = currentDeck[1].word;
    definitionArea.textContent = currentDeck[1].definition;
    sampleArea.textContent = currentDeck[1].sample;
})

numberThree.addEventListener('click', () => {
    wordArea.textContent = currentDeck[2].word;
    definitionArea.textContent = currentDeck[2].definition;
    sampleArea.textContent = currentDeck[2].sample;
})

numberFour.addEventListener('click', () => {
    wordArea.textContent = currentDeck[3].word;
    definitionArea.textContent = currentDeck[3].definition;
    sampleArea.textContent = currentDeck[3].sample;
})

numberFive.addEventListener('click', () => {
    wordArea.textContent = currentDeck[4].word;
    definitionArea.textContent = currentDeck[4].definition;
    sampleArea.textContent = currentDeck[4].sample;
})

numberSix.addEventListener('click', () => {
    wordArea.textContent = currentDeck[5].word;
    definitionArea.textContent = currentDeck[5].definition;
    sampleArea.textContent = currentDeck[5].sample;
})

numberSeven.addEventListener('click', () => {
    wordArea.textContent = currentDeck[6].word;
    definitionArea.textContent = currentDeck[6].definition;
    sampleArea.textContent = currentDeck[6].sample;
})

numberEight.addEventListener('click', () => {
    wordArea.textContent = currentDeck[7].word;
    definitionArea.textContent = currentDeck[7].definition;
    sampleArea.textContent = currentDeck[7].sample;
})

numberNine.addEventListener('click', () => {
    wordArea.textContent = currentDeck[8].word;
    definitionArea.textContent = currentDeck[8].definition;
    sampleArea.textContent = currentDeck[8].sample;
})

numberTen.addEventListener('click', () => {
    wordArea.textContent = currentDeck[9].word;
    definitionArea.textContent = currentDeck[9].definition;
    sampleArea.textContent = currentDeck[9].sample;
})


