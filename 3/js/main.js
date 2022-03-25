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

const COUNT = 10;

const latMin  = 35.65000;

const LatMax =  35.70000;

const lngMin = 139.70000;

const lngMax = 139.80000;

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


const getRandomArray = (array) => {
  const maxLength = array.length;
  const random = getRandomPositiveInteger(0, maxLength-1);
  const newRandomArray = array.slice(0, random);

  return newRandomArray;
};

const creatOffer = (index) => {
  const lat = getRandomFloat(latMin, LatMax, 5);
  const lng = getRandomFloat(lngMin, lngMax, 5);
  let avatarIndex = index + 1;

  if (avatarIndex < 10){
    avatarIndex = `0${avatarIndex}`;
  }

  return {
    author: {
      avatar: `img/avatars/user${avatarIndex}.png`,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `lat:${lat}, lng:${lng}`,
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

const creatOffers = () => {
  const data = [];

  for (let i = 0; i < COUNT; i++) {
    const offer = creatOffer(i);
    data.push(offer);
  }
  return data;
};

creatOffers(COUNT);
