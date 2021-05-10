let tariffs = document.querySelector('.profile__business-tariffs-button');
let tariffsList = document.querySelector('.profile__business-tariffs');
let closeButton = document.querySelector('.business-tariffs__close');


tariffs.addEventListener('click', () => {
  if (tariffsList.classList.contains('visually-hidden')) {
    onOpen();
  } else {
    onClose();
  }
});


closeButton.addEventListener('click', () => {
  onClose();
});

const onOpen = () => {
  tariffsList.classList.remove('visually-hidden');
  // filter.classList.add('filter--opened');
  // filterBody.classList.remove('visually-hidden');
  // filterToggleIconClose.classList.remove('visually-hidden');
  // filterHide.classList.remove('visually-hidden');
  // filterShowAll.classList.add('visually-hidden');
  // filterToggleIconOpened.classList.add('visually-hidden');

  // if (window.innerWidth > mediumMaxWidth) {
  //   filterToggleButton.classList.add('visually-hidden');
  // }
}

const onClose = () => {
  tariffsList.classList.add('visually-hidden');
  // filter.classList.remove('filter--opened');
  // filterBody.classList.add('visually-hidden');
  // filterToggleIconClose.classList.add('visually-hidden');
  // filterHide.classList.add('visually-hidden');
  // filterShowAll.classList.remove('visually-hidden');
  // filterToggleIconOpened.classList.remove('visually-hidden');

  // if (window.innerWidth > mediumMaxWidth) {
  //   filterToggleButton.classList.remove('visually-hidden')
  // }
}
