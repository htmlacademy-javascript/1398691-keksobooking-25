const adForm = document.querySelector('.ad-form');
const price = adForm.querySelector('#price');
const roomField = adForm.querySelector('#room_number');
const capacityField = adForm.querySelector('#capacity');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

const MIN_PRICE = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};


const ROOM_OPTION = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0'],
};

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__element--error'
});

//////// title
function validateTitle  (value) {
  return value.length >=30 && value.length <= 100;
}

pristine.addValidator(
  adForm.querySelector('#title'),
  validateTitle,
  'От 30 до 100 символов',
);

/////// price
function validateMaxPrice (value) {
  return value <= 100000;
}

pristine.addValidator(
  price,
  validateMaxPrice,
  'Максимальное значение 100 000',
);

function validateMinPrice (value) {
  const unit = adForm.querySelector('[name="type"]').value;
  return value.length >= MIN_PRICE[unit.value];
}

function getPriceErrorMessage () {
  const unit = adForm.querySelector('[name="type"]');
  return `Минимальная цена ${MIN_PRICE[unit.value]}`;
}

pristine.addValidator(price, validateMinPrice, getPriceErrorMessage);

function onUnitChange () {
  price.value ='';
  price.placeholder = MIN_PRICE[this.value];
  pristine.validate(price);
}

adForm.querySelectorAll('[name="type"]').forEach((item) => item.addEventListener('change', onUnitChange));

/////// rooms
function validateRoom () {
  return ROOM_OPTION[roomField.value].includes(capacityField.value);
}

function getRoomErrorMessage () {
  return `
    'невозможно'
  `;
}

pristine.addValidator(roomField, validateRoom, getRoomErrorMessage);
pristine.addValidator(capacityField, validateRoom, getRoomErrorMessage);

/////// time
function onSelectTimeOutChange (evt) {
  timeOut.value = evt.target.value;
}

timeIn.addEventListener('change', onSelectTimeOutChange);

function onSelectTimeInChange (evt) {
  timeIn.value = evt.target.value;
}

timeOut.addEventListener('change', onSelectTimeInChange);


adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
