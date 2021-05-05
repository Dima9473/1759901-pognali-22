let hobbyCheckboxeToggle1 = document.querySelector('.choose-companion__search-params-toggle-1');
let hobbyCheckboxes1 = document.querySelector('.choose-companion__search-params-1');
let checkBoxOpenedIcon1 = document.querySelector('.choose-companion__checkboxe-opened-icon-1');
let checkBoxClosedIcon1 = document.querySelector('.choose-companion__checkboxe-closed-icon-1');

hobbyCheckboxeToggle1.addEventListener('click', function () {
  onClick(hobbyCheckboxes1, checkBoxOpenedIcon1, checkBoxClosedIcon1);
});

let hobbyCheckboxeToggle2 = document.querySelector('.choose-companion__search-params-toggle-2');
let hobbyCheckboxes2 = document.querySelector('.choose-companion__search-params-2');
let checkBoxOpenedIcon2 = document.querySelector('.choose-companion__checkboxe-opened-icon-2');
let checkBoxClosedIcon2 = document.querySelector('.choose-companion__checkboxe-closed-icon-2');

hobbyCheckboxeToggle2.addEventListener('click', function () {
  onClick(hobbyCheckboxes2, checkBoxOpenedIcon2, checkBoxClosedIcon2);
});

let hobbyCheckboxeToggle3 = document.querySelector('.choose-companion__search-params-toggle-3');
let hobbyCheckboxes3 = document.querySelector('.choose-companion__search-params-3');
let checkBoxOpenedIcon3 = document.querySelector('.choose-companion__checkboxe-opened-icon-3');
let checkBoxClosedIcon3 = document.querySelector('.choose-companion__checkboxe-closed-icon-3');

hobbyCheckboxeToggle3.addEventListener('click', function () {
  onClick(hobbyCheckboxes3, checkBoxOpenedIcon3, checkBoxClosedIcon3);
});


let transportToggle = document.querySelector('.choose-companion__search-params-toggle-4');
let transport = document.querySelector('.choose-companion__search-params-4');
let transportOpenedIcon = document.querySelector('.choose-companion__transport-opened-icon-4');
let transportClosedIcon = document.querySelector('.choose-companion__transport-closed-icon-4');

transportToggle.addEventListener('click', function () {
  onClick(transport, transportOpenedIcon, transportClosedIcon);
});


let levelToggle = document.querySelector('.choose-companion__search-params-toggle-5');
let level = document.querySelector('.choose-companion__search-params-5');
let levelOpenedIcon = document.querySelector('.choose-companion__search-params-opened-icon-5');
let levelClosedIcon = document.querySelector('.choose-companion__search-params-closed-icon-5');

levelToggle.addEventListener('click', function () {
  onClick(level, levelOpenedIcon, levelClosedIcon);
});


const onClick = (divBlock, toggleOpenedIcon, toggleClosedIcon) => {
  if (divBlock.classList.contains('choose-companion__visually-hidden')) {
    divBlock.classList.remove('choose-companion__visually-hidden');
    toggleClosedIcon.classList.add('visually-hidden')
    toggleOpenedIcon.classList.remove('visually-hidden')
  } else {
    divBlock.classList.add('choose-companion__visually-hidden')
    toggleClosedIcon.classList.remove('visually-hidden')
    toggleOpenedIcon.classList.add('visually-hidden')
  }
}
