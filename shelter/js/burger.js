const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const headerOpen = document.querySelector('.header');
const body = document.querySelector('.body');
const liNavigation = document.querySelectorAll('.navigation__li');

burger.addEventListener('click', function () {
  headerOpen.classList.toggle('open');
  body.classList.toggle('open');
});

liNavigation.forEach((li) => {
  li.addEventListener('click', function () {
    headerOpen.classList.remove('open');
    body.classList.remove('open');
  });
});

// закрытие по клику вне окна
navigation.addEventListener('click', function (e) {
  e._isClickWithInMenu = true;
});
burger.addEventListener('click', function (e) {
  e._isClickWithInMenu = true;
});
document.body.addEventListener('click', function (e) {
  if (e._isClickWithInMenu) {
    return;
  }
  headerOpen.classList.remove('open');
  body.classList.remove('open');
});
