var hobbyCheckboxeToggle1 = document.querySelector('.choose-companion__checkboxes-toggle-1');
var hobbyCheckboxes1 = document.querySelector('.choose-companion__checkboxes-1');
var checkBoxOpenedIcon1 = document.querySelector('.choose-companion__checkboxe-opened-icon-1');
var checkBoxClosedIcon1 = document.querySelector('.choose-companion__checkboxe-closed-icon-1');

hobbyCheckboxeToggle1.addEventListener('click', function () {
  onClick(hobbyCheckboxes1, checkBoxOpenedIcon1, checkBoxClosedIcon1);
});

var hobbyCheckboxeToggle2 = document.querySelector('.choose-companion__checkboxes-toggle-2');
var hobbyCheckboxes2 = document.querySelector('.choose-companion__checkboxes-2');
var checkBoxOpenedIcon2 = document.querySelector('.choose-companion__checkboxe-opened-icon-2');
var checkBoxClosedIcon2 = document.querySelector('.choose-companion__checkboxe-closed-icon-2');

hobbyCheckboxeToggle2.addEventListener('click', function () {
  onClick(hobbyCheckboxes2, checkBoxOpenedIcon2, checkBoxClosedIcon2);
});

var hobbyCheckboxeToggle3 = document.querySelector('.choose-companion__checkboxes-toggle-3');
var hobbyCheckboxes3 = document.querySelector('.choose-companion__checkboxes-3');
var checkBoxOpenedIcon3 = document.querySelector('.choose-companion__checkboxe-opened-icon-3');
var checkBoxClosedIcon3 = document.querySelector('.choose-companion__checkboxe-closed-icon-3');

hobbyCheckboxeToggle3.addEventListener('click', function () {
  onClick(hobbyCheckboxes3, checkBoxOpenedIcon3, checkBoxClosedIcon3);
});


var transportToggle = document.querySelector('.choose-companion__transport-toggle');
var transport = document.querySelector('.choose-companion__transport');
var transportOpenedIcon = document.querySelector('.choose-companion__transport-opened-icon');
var transportClosedIcon = document.querySelector('.choose-companion__transport-closed-icon');

transportToggle.addEventListener('click', function () {
  onClick(transport, transportOpenedIcon, transportClosedIcon);
});


var levelToggle = document.querySelector('.choose-companion__level-toggle');
var level = document.querySelector('.choose-companion__level');
var levelOpenedIcon = document.querySelector('.choose-companion__level-opened-icon');
var levelClosedIcon = document.querySelector('.choose-companion__level-closed-icon');

levelToggle.addEventListener('click', function () {
  onClick(level, levelOpenedIcon, levelClosedIcon);
});


const onClick = (divBlock, toggleOpenedIcon, toggleClosedIcon) => {
  if (divBlock.classList.contains('visually-hidden')) {
    divBlock.classList.remove('visually-hidden');
    toggleClosedIcon.classList.remove('visually-hidden')
    toggleOpenedIcon.classList.add('visually-hidden')
  } else {
    divBlock.classList.add('visually-hidden');
    toggleClosedIcon.classList.add('visually-hidden')
    toggleOpenedIcon.classList.remove('visually-hidden')
  }
}
