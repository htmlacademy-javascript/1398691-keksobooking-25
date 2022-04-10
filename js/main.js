import { createOffers } from './data.js';
import { renderPopup } from './popup.js';


const cardAd = document.querySelector('.map');
const similarCardElement = cardAd.querySelector('.map__canvas');

const similarCards = createOffers();
const firstCard = similarCards[0];

const card = renderPopup(firstCard);

similarCardElement.appendChild(card);

