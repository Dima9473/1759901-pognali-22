let navMain = document.querySelector('.main-menu');
let navToggle = document.querySelector('.menu__toggle');
let pageHeader = document.querySelector('.page-header');
let logo = document.querySelector('.menu__logo-mobile');
let logoDark = document.querySelector('.menu__logo-mobile-dark');
let closButton = document.querySelector('.menu__close-icon');
let openButton = document.querySelector('.menu__open-icon');
let promoActions = document.querySelector('.menu__actions');
let underline = document.querySelector('.page-header__underline');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-menu--closed')) {
    navMain.classList.remove('main-menu--closed');
    navMain.classList.add('main-menu--opened');
    pageHeader.classList.add('page-header--menu-opened');
    logoDark.classList.remove('visually-hidden');
    logo.classList.add('visually-hidden');
    closButton.classList.remove('visually-hidden');
    openButton.classList.add('visually-hidden');
    promoActions.classList.add('visually-hidden');
    if (underline) {
      underline.classList.add('visually-hidden');
    }
  } else {
    navMain.classList.add('main-menu--closed');
    navMain.classList.remove('main-menu--opened');
    pageHeader.classList.remove('page-header--menu-opened');
    logoDark.classList.add('visually-hidden');
    logo.classList.remove('visually-hidden');
    closButton.classList.add('visually-hidden')
    openButton.classList.remove('visually-hidden');
    promoActions.classList.remove('visually-hidden');
    if (underline) {
      underline.classList.remove('visually-hidden');
    }
  }
});

