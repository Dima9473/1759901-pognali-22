var navMain = document.querySelector('.main-menu');
var navToggle = document.querySelector('.menu__toggle');
var pageHeader = document.querySelector('.page-header');
var logo = document.querySelector('.menu__logo-mobile');
var logoDark = document.querySelector('.menu__logo-mobile-dark');
var closButton = document.querySelector('.menu__close-icon');
var openButton = document.querySelector('.menu__open-icon');
var promoActions = document.querySelector('.menu__actions');

// // navMain.classList.remove('main-nav--nojs');

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
  } else {
    navMain.classList.add('main-menu--closed');
    navMain.classList.remove('main-menu--opened');
    pageHeader.classList.remove('page-header--menu-opened');
    logoDark.classList.add('visually-hidden');
    logo.classList.remove('visually-hidden');
    closButton.classList.add('visually-hidden')
    openButton.classList.remove('visually-hidden');
    promoActions.classList.remove('visually-hidden');
  }
});

