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

// тоже нужно от медиазапроса плясать
for (let i = 0; i < 6; i++) {
  newAnimals.push(...getRandomAnimalsFrom(animals));
}

function getRandomAnimalsFrom(animals) {
  let randomAnimals = [];
  const usedIndex = [];

  let numberOfCards = 8;
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
  sliceAnimals = newAnimals.slice(0, 8);
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
  if (numberPage === 2) {
    sliceAnimals = newAnimals.slice(8, 16);
    renderCards(sliceAnimals);
    return;
  }
  if (numberPage === 3) {
    sliceAnimals = newAnimals.slice(16, 24);
    renderCards(sliceAnimals);
    return;
  }
  if (numberPage === 4) {
    sliceAnimals = newAnimals.slice(24, 32);
    renderCards(sliceAnimals);
    return;
  }
  if (numberPage === 5) {
    sliceAnimals = newAnimals.slice(32, 40);
    renderCards(sliceAnimals);
    return;
  }
  if (numberPage === 6) {
    sliceAnimals = newAnimals.slice(40, 48);
    renderCards(sliceAnimals);
    arrowRight.classList.add('no-active');
    arrowRightDouble.classList.add('no-active');
    return;
  }
});

arrowRightDouble.addEventListener('click', function () {
  arrowLeft.classList.remove('no-active');
  arrowLeftDouble.classList.remove('no-active');
  numberPage = 6;
  arrowCurrent.textContent = numberPage;
  sliceAnimals = newAnimals.slice(40, 48);
  renderCards(sliceAnimals);
  arrowRight.classList.add('no-active');
  arrowRightDouble.classList.add('no-active');
});

arrowLeft.addEventListener('click', function () {
  numberPage = numberPage - 1;
  arrowCurrent.textContent = numberPage;
  arrowRight.classList.remove('no-active');
  arrowRightDouble.classList.remove('no-active');
  if (numberPage === 1) {
    currentPage();
    return;
  }
  if (numberPage === 2) {
    sliceAnimals = newAnimals.slice(8, 16);
    renderCards(sliceAnimals);
    return;
  }
  if (numberPage === 3) {
    sliceAnimals = newAnimals.slice(16, 24);
    renderCards(sliceAnimals);
    return;
  }
  if (numberPage === 4) {
    sliceAnimals = newAnimals.slice(24, 32);
    renderCards(sliceAnimals);
    return;
  }
  if (numberPage === 5) {
    sliceAnimals = newAnimals.slice(32, 40);
    renderCards(sliceAnimals);
    return;
  }
  if (numberPage === 6) {
    sliceAnimals = newAnimals.slice(40, 48);
    renderCards(sliceAnimals);
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

console.log(newAnimals);
