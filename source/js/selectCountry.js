var selectCountry1 = document.querySelector('.add-plans__select-country--1');
var selectText1 = document.querySelector('.add-plans__select-country-text--1');
var openIcon1 = document.querySelector('.add-plans__show-countries-icon--closed-1');
var circleIcon1 = document.querySelector('.add-plans__circle-icon--1');
var closeIcon1 = document.querySelector('.add-plans__close-icon--1');
var countriesDropdown1 = document.querySelector('.add-plans__countries-dropdown--1');
var flag1 = document.querySelector('.add-plans__flag--1');

selectCountry1.addEventListener('click', function () {
  if (!selectCountry1.classList.contains('add-plans__select-country--opened')) {
    onOpen(selectCountry1, selectText1, openIcon1, circleIcon1, closeIcon1, countriesDropdown1, flag1)
  }
})

closeIcon1.addEventListener('click', function (e) {
  onClose(e, selectCountry1, selectText1, openIcon1, circleIcon1, closeIcon1, countriesDropdown1, flag1);
})

var selectCountry2 = document.querySelector('.add-plans__select-country--2');
var selectText2 = document.querySelector('.add-plans__select-country-text--2');
var openIcon2 = document.querySelector('.add-plans__show-countries-icon--closed-2');
var circleIcon2 = document.querySelector('.add-plans__circle-icon--2');
var closeIcon2 = document.querySelector('.add-plans__close-icon--2');
var countriesDropdown2 = document.querySelector('.add-plans__countries-dropdown--2');
var flag2 = document.querySelector('.add-plans__flag--2');

selectCountry2.addEventListener('click', function () {
  if (!selectCountry2.classList.contains('add-plans__select-country--opened')) {
    onOpen(selectCountry2, selectText2, openIcon2, circleIcon2, closeIcon2, countriesDropdown2, flag2);
  }
})

closeIcon2.addEventListener('click', function (e) {
  onClose(e, selectCountry2, selectText2, openIcon2, circleIcon2, closeIcon2, countriesDropdown2, flag2);
})


var selectCountry3 = document.querySelector('.add-plans__select-country--3');
var selectText3 = document.querySelector('.add-plans__select-country-text--3');
var openIcon3 = document.querySelector('.add-plans__show-countries-icon--closed-3');
var circleIcon3 = document.querySelector('.add-plans__circle-icon--3');
var closeIcon3 = document.querySelector('.add-plans__close-icon--3');
var countriesDropdown3 = document.querySelector('.add-plans__countries-dropdown--3');

selectCountry3.addEventListener('click', function () {
  if (!selectCountry3.classList.contains('add-plans__select-country--opened')) {
    onOpen(selectCountry3, selectText3, openIcon3, circleIcon3, closeIcon3, countriesDropdown3);
  }
})

closeIcon3.addEventListener('click', function (e) {
  onClose(e, selectCountry3, selectText3, openIcon3, circleIcon3, closeIcon3, countriesDropdown3);
})

const onOpen = (selectCountry, selectText, openIcon, circleIcon, closeIcon, countriesDropdown, flag = null) => {
  selectCountry.classList.add('add-plans__select-country--opened');
  selectText.classList.add('add-plans__select-country--text-opened');
  openIcon.classList.add('visually-hidden');
  closeIcon.classList.remove('visually-hidden');
  countriesDropdown.classList.remove('visually-hidden');

  if (window.innerWidth < 768) {
    circleIcon.classList.add('visually-hidden');
  }

  if (flag && window.innerWidth < 768) {
    flag.classList.add('add-plans__select-country--opened');
    flag.classList.add('add-plans__flag--opened')
  }
}

const onClose = (e, selectCountry, selectText, openIcon, circleIcon, closeIcon, countriesDropdown, flag = null) => {
  selectCountry.classList.remove('add-plans__select-country--opened');
  selectText.classList.remove('add-plans__select-country--text-opened');
  openIcon.classList.remove('visually-hidden');
  closeIcon.classList.add('visually-hidden');
  countriesDropdown.classList.add('visually-hidden');

  if (window.innerWidth < 768) {
    circleIcon.classList.remove('visually-hidden');
  }

  if (flag && window.innerWidth < 768) {
    flag.classList.remove('add-plans__select-country--opened');
    flag.classList.remove('add-plans__flag--opened');
  }

  e.stopPropagation();
}
