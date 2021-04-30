var filterToggle = document.querySelector('.filter__toggle');
var filterBody = document.querySelector('.filter__body');

filterToggle.addEventListener('click', function () {
  if (filterBody.classList.contains('filter__body--closed')) {
    filterBody.classList.remove('filter__body--closed');
  } else {
    filterBody.classList.add('filter__body--closed');
  }
});
