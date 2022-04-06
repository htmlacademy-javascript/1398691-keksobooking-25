import {createOffers} from './data.js';

const cardAd = document.querySelector('.map');

const similarCardElement = cardAd.querySelector('#map-canvas');
const similarCardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const similarCards = createOffers();

similarCards.forEach((card) => {
  const cardElement = similarCardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent =
  card.offer.title;
  cardElement.querySelector('.popup__text--address').textContent =
  card.offer.address;
  cardElement.querySelector('.popup__text--price').textContent =
  `${card.offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent =
  card.offer.type;
  cardElement.querySelector('.popup__text--capacity').textContent =
  `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent =
  `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkin}`;
  cardElement.querySelector('.popup__features').textContent =
  card.offer.features;
  cardElement.querySelector('.popup__description').textContent =
  card.offer.description;
  cardElement.querySelector('.popup__photos').src = card.offer.photos;
  cardElement.querySelector('.popup__avatar').src = card.author.avatar;
  similarCardElement.appendChild(cardElement);
});
