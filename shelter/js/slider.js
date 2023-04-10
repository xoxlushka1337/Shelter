const animals = [
  {
    img: './imgs/pets/pets-katrine.png',
    title: 'Katrine',
  },
  {
    img: './imgs/pets/pets-jennifer.png',
    title: 'Jennifer',
  },
  {
    img: './imgs/pets/pets-woody.png',
    title: 'Woody',
  },
  {
    img: './imgs/pets/pets-sophia.png',
    title: 'Sophia',
  },
  {
    img: './imgs/pets/pets-timmy.png',
    title: 'Timmy',
  },
  {
    img: './imgs/pets/pets-charly.png',
    title: 'Charly',
  },
  {
    img: './imgs/pets/pets-scarlet.png',
    title: 'Scarlett',
  },
  {
    img: './imgs/pets/pets-freddie.png',
    title: 'Freddie',
  },
];

const cards = document.querySelector('.slider__cards');
const card = cards.querySelectorAll('.slider__card');

// ---
const leftArrow = document.querySelector('.slider__arrow-left');
const rightArrow = document.querySelector('.slider__arrow-right');

let currentState = getRandomAnimalsFrom(animals);
renderCards();
let prevState = [];
let lastDirection = '';

leftArrow.addEventListener('click', function (e) {
  // card.forEach((el) => {
  //   el.classList.toggle('fu');
  // });

  if (lastDirection == 'left' || lastDirection == '') {
    lastDirection = 'left';
    prevState = currentState;
    let randomAnimals = randomAnimalsNotIn(currentState);
    setCurrentStateOn(randomAnimals);
    renderCards();
    return;
  }

  lastDirection = 'left';
  swapStates();
  renderCards();
});

rightArrow.addEventListener('click', function (e) {
  // card.forEach((el) => {
  //   el.classList.toggle('ri');
  // });

  if (lastDirection == 'right' || lastDirection == '') {
    lastDirection = 'right';
    prevState = currentState;
    let randomAnimals = randomAnimalsNotIn(currentState);
    setCurrentStateOn(randomAnimals);
    renderCards();
    return;
  }

  lastDirection = 'right';
  swapStates();
  renderCards();
});
function setCurrentStateOn(newState) {
  currentState = newState;
}

function getRandomAnimalsFrom(animals) {
  let randomAnimals = [];
  const usedIndex = [];
  let numberOfCards = 3;
  if (window.innerWidth < 1101) {
    numberOfCards = 2;
  }
  if (window.innerWidth < 715) {
    numberOfCards = 1;
  }
  while (usedIndex.length != numberOfCards) {
    const randomIndex = Math.floor(Math.random() * animals.length);

    if (!usedIndex.includes(randomIndex)) {
      randomAnimals.push(animals[randomIndex]);
      usedIndex.push(randomIndex);
    }
  }

  return randomAnimals;
}

function randomAnimalsNotIn(usedAnimals) {
  const availableAnimals = animals.filter((animal) => !usedAnimals.includes(animal));
  return getRandomAnimalsFrom(availableAnimals);
}

function renderCards() {
  for (let i = 0; i < currentState.length; i++) {
    setCard(card[i], currentState[i]);
  }
}

function setCard(cardElement, cardData) {
  img = cardElement.querySelector('.slider__img');
  title = cardElement.querySelector('.slider__title');
  img.src = cardData.img;
  title.textContent = cardData.title;
}

function swapStates() {
  let tmp = prevState;
  prevState = currentState;
  currentState = tmp;
}
