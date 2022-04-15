const  adForm = document.querySelector('.ad-form');
adForm.classList.add('ad-form--disabled');
const adFormElements = adForm.querySelectorAll('.ad-form__element');

const  mapFilters = document.querySelector('.map__filters');
mapFilters.classList.add('map__filters--disabled');
const mapFilter = mapFilters.querySelectorAll('.map__filter');

const addInactiveStateForm = (formElements, mapFilterElements) => {
  for (let i = 0; i < formElements.length; i++) {
    const adFormElement = formElements[i];
    adFormElement.setAttribute('disabled', 'disabled');
  }

  for (let i = 0; i < mapFilterElements.length; i++) {
    const mapFilterElement = mapFilterElements[i] ;
    mapFilterElement.setAttribute('disabled', 'disabled');
  }
};

addInactiveStateForm(adFormElements,mapFilter);

const addActiveStateForm = (formElements, mapFilterElements) => {
  adForm.classList.remove('ad-form--disabled');
  for (let i = 0; i < formElements.length; i++) {
    const adFormElement = formElements[i] ;
    adFormElement.removeAttribute('disabled', 'disabled');
  }

  mapFilters.classList.remove('map__filters--disabled');
  for (let i = 0; i < mapFilterElements.length; i++) {
    const mapFilterElement = mapFilterElements[i] ;
    mapFilterElement.removeAttribute('disabled', 'disabled');
  }
};

addActiveStateForm(adFormElements,mapFilter);
