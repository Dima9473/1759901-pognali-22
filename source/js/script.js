//Navigation actions
let navMain = document.querySelector('.main-menu');
let navToggle = document.querySelector('.menu__toggle');
let pageHeader = document.querySelector('.page-header');
let logo = document.querySelector('.menu__logo-mobile');
let logoDark = document.querySelector('.menu__logo-mobile-dark');
let closButton = document.querySelector('.menu__close-icon');
let openButton = document.querySelector('.menu__open-icon');
let promoActions = document.querySelector('.menu__actions');
let underline = document.querySelector('.page-header__underline');

navToggle?.addEventListener('click', () => {
  if (navMain.classList.contains('main-menu--closed')) {
    onNavigationOpen();
  } else {
    onNavigationClosed();
  }
});

const onNavigationOpen = () => {
  navMain.classList.remove('main-menu--closed');
  navMain.classList.add('main-menu--opened');
  pageHeader.classList.add('page-header--menu-opened');
  logoDark.classList.remove('visually-hidden');
  logo.classList.add('visually-hidden');
  closButton.classList.remove('visually-hidden');
  openButton.classList.add('visually-hidden');
  if (promoActions) {
    promoActions.classList.add('visually-hidden');
  }
  if (underline) {
    underline.classList.add('visually-hidden');
  }
}

const onNavigationClosed = () => {
  navMain.classList.add('main-menu--closed');
  navMain.classList.remove('main-menu--opened');
  pageHeader.classList.remove('page-header--menu-opened');
  logoDark.classList.add('visually-hidden');
  logo.classList.remove('visually-hidden');
  closButton.classList.add('visually-hidden')
  openButton.classList.remove('visually-hidden');
  if (promoActions) {
    promoActions.classList.remove('visually-hidden');
  }

  if (underline) {
    underline.classList.remove('visually-hidden');
  }
}

const enableMenuJs = () => {
  navMain?.classList.remove('main-menu--without-js');
  onNavigationClosed();
}

enableMenuJs();

//Checkbox actions
let hobbyCheckboxeToggle1 = document.querySelector('.choose-companion__search-params-toggle-1');
let hobbyCheckboxes1 = document.querySelector('.choose-companion__search-params-1');
let checkBoxOpenedIcon1 = document.querySelector('.choose-companion__checkboxe-opened-icon-1');
let checkBoxClosedIcon1 = document.querySelector('.choose-companion__checkboxe-closed-icon-1');

hobbyCheckboxeToggle1?.addEventListener('click', () => {
  onCheckboxClick(hobbyCheckboxes1, checkBoxOpenedIcon1, checkBoxClosedIcon1);
});

let hobbyCheckboxeToggle2 = document.querySelector('.choose-companion__search-params-toggle-2');
let hobbyCheckboxes2 = document.querySelector('.choose-companion__search-params-2');
let checkBoxOpenedIcon2 = document.querySelector('.choose-companion__checkboxe-opened-icon-2');
let checkBoxClosedIcon2 = document.querySelector('.choose-companion__checkboxe-closed-icon-2');

hobbyCheckboxeToggle2?.addEventListener('click', () => {
  onCheckboxClick(hobbyCheckboxes2, checkBoxOpenedIcon2, checkBoxClosedIcon2);
});

let hobbyCheckboxeToggle3 = document.querySelector('.choose-companion__search-params-toggle-3');
let hobbyCheckboxes3 = document.querySelector('.choose-companion__search-params-3');
let checkBoxOpenedIcon3 = document.querySelector('.choose-companion__checkboxe-opened-icon-3');
let checkBoxClosedIcon3 = document.querySelector('.choose-companion__checkboxe-closed-icon-3');

hobbyCheckboxeToggle3?.addEventListener('click', () => {
  onCheckboxClick(hobbyCheckboxes3, checkBoxOpenedIcon3, checkBoxClosedIcon3);
});


let transportToggle = document.querySelector('.choose-companion__search-params-toggle-4');
let transport = document.querySelector('.choose-companion__search-params-4');
let transportOpenedIcon = document.querySelector('.choose-companion__transport-opened-icon-4');
let transportClosedIcon = document.querySelector('.choose-companion__transport-closed-icon-4');

transportToggle?.addEventListener('click', () => {
  onCheckboxClick(transport, transportOpenedIcon, transportClosedIcon);
});


let levelToggle = document.querySelector('.choose-companion__search-params-toggle-5');
let level = document.querySelector('.choose-companion__search-params-5');
let levelOpenedIcon = document.querySelector('.choose-companion__search-params-opened-icon-5');
let levelClosedIcon = document.querySelector('.choose-companion__search-params-closed-icon-5');

levelToggle?.addEventListener('click', () => {
  onCheckboxClick(level, levelOpenedIcon, levelClosedIcon);
});


const onCheckboxClick = (divBlock, toggleOpenedIcon, toggleClosedIcon) => {
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

//Filter actions
let filter = document.querySelector('.filter');
let filterToggleButton = document.querySelector('.filter__toggle-button');
let filterClose = document.querySelector('.filter__close');
let filterToggleIconClose = document.querySelector('.filter__toggle--closed');
let filterToggleIconOpened = document.querySelector('.filter__toggle--opened');
let filterHide = document.querySelector('.filter__hide');
let filterShowAll = document.querySelector('.filter__show-all');
let filterBody = document.querySelector('.filter__body');
const mediumMaxWidth = 1439;

filterToggleButton?.addEventListener('click', () => {
  if (filterBody.classList.contains('visually-hidden')) {
    onFilterOpen();
  } else {
    onFilterClose()
  }
});

filterClose?.addEventListener('click', () => {
  onFilterClose();
})

const onFilterOpen = () => {
  filter.classList.add('filter--opened');
  filterBody.classList.remove('visually-hidden');
  filterToggleIconClose.classList.remove('visually-hidden');
  filterHide.classList.remove('visually-hidden');
  filterShowAll.classList.add('visually-hidden');
  filterToggleIconOpened.classList.add('visually-hidden');

  if (window.innerWidth > mediumMaxWidth) {
    filterToggleButton.classList.add('visually-hidden');
  }
}

const onFilterClose = () => {
  filter.classList.remove('filter--opened');
  filterBody.classList.add('visually-hidden');
  filterToggleIconClose.classList.add('visually-hidden');
  filterHide.classList.add('visually-hidden');
  filterShowAll.classList.remove('visually-hidden');
  filterToggleIconOpened.classList.remove('visually-hidden');

  if (window.innerWidth > mediumMaxWidth) {
    filterToggleButton.classList.remove('visually-hidden')
  }
}

const enableFilterJs = () => {
  if (!filterBody) return;

  filterClose.classList.remove('filter__close--without-js');
  filterBody.classList.remove('filter__body--without-js');
  onFilterClose();
}

enableFilterJs();

//Select actions
let selectCountry1 = document.querySelector('.add-plans__select-country--1');
let selectText1 = document.querySelector('.add-plans__select-country-text--1');
let openIcon1 = document.querySelector('.add-plans__show-countries-icon--closed-1');
let circleIcon1 = document.querySelector('.add-plans__circle-icon--1');
let closeIcon1 = document.querySelector('.add-plans__close-icon--1');
let countriesDropdown1 = document.querySelector('.add-plans__countries-dropdown--1');

selectCountry1?.addEventListener('click', () => {
  if (!selectCountry1.classList.contains('add-plans__select-country--opened')) {
    onSelectOpen(selectCountry1, selectText1, openIcon1, circleIcon1, closeIcon1, countriesDropdown1)
  }
})

closeIcon1?.addEventListener('click', function (e) {
  onSelectClose(e, selectCountry1, selectText1, openIcon1, circleIcon1, closeIcon1, countriesDropdown1);
})

let selectCountry2 = document.querySelector('.add-plans__select-country--2');
let selectText2 = document.querySelector('.add-plans__select-country-text--2');
let openIcon2 = document.querySelector('.add-plans__show-countries-icon--closed-2');
let circleIcon2 = document.querySelector('.add-plans__circle-icon--2');
let closeIcon2 = document.querySelector('.add-plans__close-icon--2');
let countriesDropdown2 = document.querySelector('.add-plans__countries-dropdown--2');

selectCountry2?.addEventListener('click', () => {
  if (!selectCountry2.classList.contains('add-plans__select-country--opened')) {
    onSelectOpen(selectCountry2, selectText2, openIcon2, circleIcon2, closeIcon2, countriesDropdown2);
  }
})

closeIcon2?.addEventListener('click', function (e) {
  onSelectClose(e, selectCountry2, selectText2, openIcon2, circleIcon2, closeIcon2, countriesDropdown2);
})


let selectCountry3 = document.querySelector('.add-plans__select-country--3');
let selectText3 = document.querySelector('.add-plans__select-country-text--3');
let openIcon3 = document.querySelector('.add-plans__show-countries-icon--closed-3');
let circleIcon3 = document.querySelector('.add-plans__circle-icon--3');
let closeIcon3 = document.querySelector('.add-plans__close-icon--3');
let countriesDropdown3 = document.querySelector('.add-plans__countries-dropdown--3');

selectCountry3?.addEventListener('click', () => {
  if (!selectCountry3.classList.contains('add-plans__select-country--opened')) {
    onSelectOpen(selectCountry3, selectText3, openIcon3, circleIcon3, closeIcon3, countriesDropdown3);
  }
})

closeIcon3?.addEventListener('click', function (e) {
  onSelectClose(e, selectCountry3, selectText3, openIcon3, circleIcon3, closeIcon3, countriesDropdown3);
})

let navButtons = document.querySelector('.step-list__nav-buttons--1');

const onSelectOpen = (selectCountry, selectText, openIcon, circleIcon, closeIcon, countriesDropdown) => {
  selectCountry.classList.add('add-plans__select-country--opened');
  selectText.classList.add('add-plans__select-country--text-opened');
  openIcon.classList.add('visually-hidden');
  closeIcon.classList.remove('visually-hidden');
  countriesDropdown.classList.remove('visually-hidden');

  if (window.innerWidth < 768) {
    circleIcon.classList.add('visually-hidden');
  }

  if (window.innerWidth >= 1440) {
    countriesDropdown.style.width = selectCountry.offsetWidth + "px";
  }

}

const onSelectClose = (e, selectCountry, selectText, openIcon, circleIcon, closeIcon, countriesDropdown) => {
  selectCountry.classList.remove('add-plans__select-country--opened');
  selectText.classList.remove('add-plans__select-country--text-opened');
  openIcon.classList.remove('visually-hidden');
  closeIcon.classList.add('visually-hidden');
  countriesDropdown.classList.add('visually-hidden');

  if (window.innerWidth < 768) {
    circleIcon.classList.remove('visually-hidden');
  }

  e.stopPropagation();
}

//Tariffs actions
let tariffs = document.querySelector('.profile__business-tariffs-button');
let tariffsList = document.querySelector('.business-tariffs');
let closeButton = document.querySelector('.business-tariffs__close');


tariffs?.addEventListener('click', () => {
  if (tariffsList.classList.contains('visually-hidden')) {
    onTariffsOpen();
  } else {
    onTariffsClose();
  }
});


closeButton?.addEventListener('click', () => {
  onTariffsClose();
});

const onTariffsOpen = () => {
  tariffsList.classList.remove('visually-hidden');
}

const onTariffsClose = () => {
  tariffsList.classList.add('visually-hidden');
}

//invalid input
let countryDescriptionInput = document.querySelector('.country-description-list__change-text');
let countryDescriptionInputInvalid = document.querySelector('.country-description-list__change-text-invalid');

countryDescriptionInput?.addEventListener('invalid', () => {
  debugger
  onCountryInputInvalid();
});

countryDescriptionInput?.addEventListener('valid', () => {
  onCountryInputValid();
});

const onCountryInputInvalid = () => {
  if (window.innerWidth >= 1440) {
    //25 is padding-left
    countryDescriptionInputInvalid.style.width = countryDescriptionInput.offsetWidth - 25 + "px";
  }
  //
  countryDescriptionInputInvalid.classList.remove('visually-hidden');
  countryDescriptionInput.classList.add('country-description-list__text-invalid-border');
}

const onCountryInputValid = () => {
  countryDescriptionInputInvalid.classList.add('visually-hidden');
  countryDescriptionInput.classList.remove('country-description-list__text-invalid-border');
}
