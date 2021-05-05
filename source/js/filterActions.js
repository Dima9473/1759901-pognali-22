let filterToggleButton = document.querySelector('.filter__toggle-button');
let filterClose = document.querySelector('.filter__close');
let filterToggleIconClose = document.querySelector('.filter__toggle--closed');
let filterToggleIconOpened = document.querySelector('.filter__toggle--opened');
let filterHide = document.querySelector('.filter__hide');
let filterShowAll = document.querySelector('.filter__show-all');
let filterBody = document.querySelector('.filter__body');
const mediumMaxWidth = 1439;


filterToggleButton.addEventListener('click', () => {
  if (filterBody.classList.contains('visually-hidden')) {
    onOpen();
  } else {
    onClose()
  }
});

filterClose.addEventListener('click', () => {
  onClose();
})

const onOpen = () => {
  filterBody.classList.remove('visually-hidden');
  filterToggleIconClose.classList.remove('visually-hidden');
  filterHide.classList.remove('visually-hidden');
  filterShowAll.classList.add('visually-hidden');
  filterToggleIconOpened.classList.add('visually-hidden');

  if (window.innerWidth > mediumMaxWidth) {
    filterToggleButton.classList.add('visually-hidden')
  }
}

const onClose = () => {
  filterBody.classList.add('visually-hidden');
  filterToggleIconClose.classList.add('visually-hidden');
  filterHide.classList.add('visually-hidden');
  filterShowAll.classList.remove('visually-hidden');
  filterToggleIconOpened.classList.remove('visually-hidden');

  if (window.innerWidth > mediumMaxWidth) {
    filterToggleButton.classList.remove('visually-hidden')
  }
}
