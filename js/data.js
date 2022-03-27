import {getRandomPositiveInteger} from './util.js';
import {getRandomArrayElement} from './util.js';
import {getRandomFloat} from './util.js';
import {getRandomArray} from './util.js';

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

const LAT_MIN  = 35.65000;

const LAT_MAX =  35.70000;

const LNG_MIN = 139.70000;

const LNG_MAX = 139.80000;

const creatOffer = (index) => {
  const lat = getRandomFloat(LAT_MIN, LAT_MAX, 5);
  const lng = getRandomFloat(LNG_MIN, LNG_MAX, 5);
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
      address: `${lat}, ${lng}`,
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

export {creatOffers};
