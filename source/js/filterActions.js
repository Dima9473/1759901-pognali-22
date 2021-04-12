var filterToggle = document.querySelector('.filter__toggle');
var filterBody = document.querySelector('.filter__body');
// var logo = document.querySelector('.menu__logo-mobile');
// var logoDark = document.querySelector('.menu__logo-mobile-dark');
// var closButton = document.querySelector('.menu__close-icon');
// var openButton = document.querySelector('.menu__open-icon');
// var promoActions = document.querySelector('.menu__actions');

// // navMain.classList.remove('main-nav--nojs');

filterToggle.addEventListener('click', function () {
  if (filterBody.classList.contains('filter__body--closed')) {
    filterBody.classList.remove('filter__body--closed');
  } else {
    filterBody.classList.add('filter__body--closed');
  }
});
