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

let newAnimals = [];
let numberOfCards = 8;
let quantityPets = 6;

// if (matchMedia) {
//   let screen = window.matchMedia(`(max-width: 771px)`);
//   screen.addListener(changes);
//   changes(screen);
// }

window.addEventListener('resize', () => {
  let width = document.body.clientWidth;
  if (width > 770) {
    numberOfCards = 8;
    quantityPets = 6;

    return;
  }
  if (width < 771 && width > 406) {
    numberOfCards = 6;
    quantityPets = 8;

    return;
  }
  if (width < 406) {
    numberOfCards = 3;
    quantityPets = 12;

    return;
  }
});

// тоже нужно от медиазапроса плясать
function createsRandomNewAnimals() {
  for (let i = 0; i < quantityPets; i++) {
    newAnimals.push(...getRandomAnimalsFrom(animals));
  }
}

function getRandomAnimalsFrom(animals) {
  let randomAnimals = [];
  const usedIndex = [];

  while (usedIndex.length != numberOfCards) {
    const randomIndex = Math.floor(Math.random() * animals.length);

    if (!usedIndex.includes(randomIndex)) {
      randomAnimals.push(animals[randomIndex]);
      usedIndex.push(randomIndex);
    }
  }

  return randomAnimals;
}

const cards = document.querySelector('.slider__cards');
const card = cards.querySelectorAll('.slider__card');

const arrowLeftDouble = document.querySelector('.flip-through__arrow-left-double');
const arrowLeft = document.querySelector('.flip-through__arrow-left');
const arrowRight = document.querySelector('.flip-through__arrow-right');
const arrowRightDouble = document.querySelector('.flip-through__arrow-right-double');
const arrowCurrent = document.querySelector('.flip-through__arrow-current');

let sliceAnimals;
let numberPage = 1;
//текущая страница
function currentPage() {
  sliceAnimals = newAnimals.slice(0, numberOfCards);
  arrowLeft.classList.add('no-active');
  arrowLeftDouble.classList.add('no-active');
  renderCards(sliceAnimals);
  arrowCurrent.textContent = numberPage;
}
currentPage();

arrowRight.addEventListener('click', function () {
  numberPage++;
  arrowCurrent.textContent = numberPage;
  arrowLeft.classList.remove('no-active');
  arrowLeftDouble.classList.remove('no-active');

  sliceAnimals = newAnimals.slice((numberPage - 1) * numberOfCards, numberPage * numberOfCards);
  renderCards(sliceAnimals);

  if (numberPage * numberOfCards == 48) {
    arrowRight.classList.add('no-active');
    arrowRightDouble.classList.add('no-active');
    return;
  }
});

arrowRightDouble.addEventListener('click', function () {
  arrowLeft.classList.remove('no-active');
  arrowLeftDouble.classList.remove('no-active');
  numberPage = quantityPets;
  arrowCurrent.textContent = numberPage;
  sliceAnimals = newAnimals.slice(48 - numberOfCards, 48);
  renderCards(sliceAnimals);
  arrowRight.classList.add('no-active');
  arrowRightDouble.classList.add('no-active');
});

arrowLeft.addEventListener('click', function () {
  numberPage -= 1;
  arrowCurrent.textContent = numberPage;
  arrowRight.classList.remove('no-active');
  arrowRightDouble.classList.remove('no-active');
  sliceAnimals = newAnimals.slice((numberPage - 1) * numberOfCards, numberPage * numberOfCards);
  renderCards(sliceAnimals);

  if (numberPage * numberOfCards == 48) {
    arrowRight.classList.add('no-active');
    arrowRightDouble.classList.add('no-active');
    return;
  }
});

arrowLeftDouble.addEventListener('click', function () {
  arrowLeft.classList.add('no-active');
  arrowLeftDouble.classList.add('no-active');
  numberPage = 1;
  arrowCurrent.textContent = numberPage;
  currentPage();
  arrowRight.classList.remove('no-active');
  arrowRightDouble.classList.remove('no-active');
});

function renderCards() {
  for (let i = 0; i < sliceAnimals.length; i++) {
    setCard(card[i], sliceAnimals[i]);
  }
}

function setCard(cardElement, cardData) {
  img = cardElement.querySelector('.slider__img');
  title = cardElement.querySelector('.slider__title');
  img.src = cardData.img;
  title.textContent = cardData.title;
}
createsRandomNewAnimals();
console.log(newAnimals);
