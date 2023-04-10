const modalAnimals = [
  {
    img: './imgs/pets/pets-katrine.png',
    name: 'Katrine',
    subtitle: 'Cat',
    age: '1 years',
  },
  {
    img: './imgs/pets/pets-jennifer.png',
    name: 'Jennifer',
    subtitle: 'Dog - Labrador',
    age: '2 months',
  },
  {
    img: './imgs/pets/pets-woody.png',
    name: 'Woody',
    subtitle: 'Dog',
    age: '2 years',
  },
  {
    img: './imgs/pets/pets-sophia.png',
    name: 'Sophia',
    subtitle: 'Dog',
    age: '4 months',
  },
  {
    img: './imgs/pets/pets-timmy.png',
    name: 'Timmy',
    subtitle: 'Cat',
    age: '8 months',
  },
  {
    img: './imgs/pets/pets-charly.png',
    name: 'Charly',
    subtitle: 'Dog',
    age: '2 years',
  },
  {
    img: './imgs/pets/pets-scarlet.png',
    name: 'Scarlett',
    subtitle: 'Dog',
    age: '1 months',
  },
  {
    img: './imgs/pets/pets-freddie.png',
    name: 'Freddie',
    subtitle: 'Cat',
    age: '3 years',
  },
];

const cardAnimal = document.querySelectorAll('.slider__card');
const popupBox = document.querySelector('.popup-box');

// const bodyx = document.querySelector('.body');

function findAnimalByName(name) {
  for (let i = 0; i < modalAnimals.length; i++) {
    if (modalAnimals[i].name == name) {
      return modalAnimals[i];
    }
  }
}

cardAnimal.forEach((element) => {
  element.addEventListener('click', function (e) {
    body.classList.toggle('fix');
    let cardText = e.currentTarget.innerText;
    let name = cardText.split('\n')[0];
    let currentAnimal = findAnimalByName(name);
    const html = `<div class="popup">
    <div class="popup__wrapper">
    <div class="x">
      <div class="popup__cross"></div>
    </div>
    <div class="popup__container">
      <img class="popup__img" src="${currentAnimal.img}" alt="404" />
      <div class="popup__content">
        <h3 class="popup__title">${currentAnimal.name}</h3>
        <div class="popup__subtitle">${currentAnimal.subtitle}</div>
        <div class="popup__text">
        ${currentAnimal.name} is a sweet ${currentAnimal.age} old Labrador that is patiently waiting to find a new
          forever home. This girl really enjoys being able to go outside to run and play,
          but won't hesitate to play up a storm in the house if she has all of her favorite
          toys.
        </div>
        <ul class="popup__characteristic">
          <li class="popup__list"> <span><b>Age: </b>${currentAnimal.age}</span></li>
          <li class="popup__list"> <span><b>Inoculations: </b>none</span></li>
          <li class="popup__list"> <span><b>Diseases: </b>none</span></li>
          <li class="popup__list"> <span><b>Parasites: </b>none</span></li>
        </ul>
      </div>
      </div>
    </div>
  </div>`;

    popupBox.innerHTML = html;

    const container = document.querySelector('.popup__container');
    const popup = document.querySelector('.popup');
    popup.addEventListener('click', function (e) {
      const click = e.composedPath().includes(container);
      if (!click) {
        popupBox.innerHTML = ' ';
      }
      body.classList.remove('fix');
    });

    const popupCross = document.querySelector('.popup__cross');
    popupCross.addEventListener('click', function () {
      popupBox.innerHTML = ' ';
      body.classList.remove('fix');
    });
  });
});
