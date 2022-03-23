const TITLES = [
  'Заголовок 1',
  'Заголовок 2',
  'Заголовок 3',
  'Заголовок 4',
  'Заголовок 5',
  'Заголовок 6',
  'Заголовок 7',
  'Заголовок 8',
  'Заголовок 9',
  'Заголовок 10'
];

const TYPE_HOTEL = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'description 1',
  'description 2',
  'description 3',
  'description 4',
  'description 5',
  'description 6',
  'description 7',
  'description 8',
  'description 9',
  'description 10'
];

const PHOTO = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

// Функция, возвращающая случайное целое число из переданного диапазона включительно.

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min >= max || min < 0) {
    throw new Error('Введите корректное значене: min >= 0 и max > min');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInt();

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

const getRandomFloat = (min, max, maxDigits) => {

  if (min >= max || min < 0 || maxDigits <= 0) {
    throw new Error('Задан неверный диапазон! Укажите другие числа: min >= 0, max > min, maxDigits <= 0');
  }

  const digitsDegree = 10 ** maxDigits;
  const rand = ((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree;
  return Math.abs(rand.toFixed(maxDigits));
};

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];


const getRandomArray = (newRandomArray) => {
  const maxLength = newRandomArray.length;
  const lengthOfArray = getRandomPositiveInteger(1, maxLength);
  const array = [];

  for (let i = 0; i < lengthOfArray; i++) {
    const indexOfEl = getRandomPositiveInteger(0, 5);
    const el = newRandomArray[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
};

const creatOffer = (index) => {
  const lat = getRandomFloat(35.65000, 35.70000, 5);
  const lng = getRandomFloat(139.70000, 139.80000, 5);
  if (index < 9){
    index = '0' + (index + 1);
  }
  else {
    index = index + 1;
  }
  return {
    author: {
      avatar: 'img/avatars/user' + index + '.png'
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: lat, lng,
      price: getRandomPositiveInteger(1, 2000),
      type: getRandomArrayElement(TYPE_HOTEL),
      rooms: getRandomPositiveInteger(1, 5),
      guests: getRandomPositiveInteger(1, 5),
      checkin: getRandomArrayElement(TIMES),
      checkout: getRandomArrayElement(TIMES),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArray(PHOTO)
    },
    location: {
      lat: lat,
      lng: lng
    }
  };
};

const COUNT = 10;

const creatOffers = () => {
  const data = [];

  for (let i = 0; i < COUNT; i++) {
    const offer = creatOffer(i);
    data.push(offer);
  }
  return data;
};

creatOffers(COUNT);
