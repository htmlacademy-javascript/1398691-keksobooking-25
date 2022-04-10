const similarCardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const renderPopup = (card) => {
  const cardElement = similarCardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__title').textContent =
  card.offer.title;
  cardElement.querySelector('.popup__text--address').textContent =
  card.offer.address;
  cardElement.querySelector('.popup__text--price').textContent =
  `${card.offer.price} ₽/ночь`;


  const popupType = card.offer.type;
  const getOfferType = () => {
    switch (popupType) {
      case 'flat':
        return 'Квартира';
      case 'bungalow':
        return 'Бунгало';
      case 'house':
        return 'Дом';
      case 'palace':
        return 'Дворец';
      case 'hotel':
        return 'Отель';
      default:
        return null;
    }
  };

  cardElement.querySelector('.popup__type').textContent  = getOfferType(popupType);
  cardElement.querySelector('.popup__text--capacity').textContent =
  `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent =
  `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkin}`;

/*
const featureContainer = document.querySelector('.popup__features');
  const featureListFragment = document.createDocumentFragment();

  card.offer.features.forEach((popupFeature) => {
    const featureListItem = featureContainer.querySelector(`popup__feature--${popupFeature}`);

    if (featureListItem) {
      featureListFragment.append(featureListItem);
    }
  });

  featureContainer.innerHTML = '';
  featureContainer.append(featureListFragment);
*/

  cardElement.querySelector('.popup__features').src = card.offer.features;

  const featureContainer = document.querySelector('.popup__features');
  const featureList = featureContainer.querySelectorAll('.popup__feature');
  const popupFeatureList = card.offer.features;

  featureList.forEach((featureListItem) => {
    const popupFeature = popupFeatureList.some((feature) => featureListItem.classList.contains(`popup__feature--${feature}`),);

    if (!popupFeature) {
      featureListItem.remove();
    }
  });

  cardElement.querySelector('.popup__photos').src = card.offer.photos;

  const photosBlock = cardElement.querySelector('.popup__photos');
  photosBlock.innerHTML = '';

  card.offer.photos.forEach((photo) => {
    const img = document.createElement ('img');
    img.width = 45;
    img.height = 40;
    img.className = 'popup__photo';
    img.src = photo;
    photosBlock.append(img);
  });


  cardElement.querySelector('.popup__description').textContent =
  card.offer.description;
  cardElement.querySelector('.popup__avatar').src = card.author.avatar;

  return cardElement;
};

export { renderPopup };
