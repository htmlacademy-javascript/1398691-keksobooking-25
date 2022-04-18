const similarCardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const getOfferType = (offerType) => {
  switch (offerType) {
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
      throw new(`Unknown offer type: ${offerType}`);
  }
};

const createTemplatePhotos = (photosBlock, photos) => {
  photos.forEach((photo) => {
    const img = document.createElement ('img');
    img.width = 45;
    img.height = 40;
    img.className = 'popup__photo';
    img.src = photo;
    photosBlock.append(img);
  });
};

const createTemplateFeatures = (featureList, popupFeatureList ) => {
  featureList.forEach((featureListItem) => {
    const popupFeature = popupFeatureList.some((feature) => featureListItem.classList.contains(`popup__feature--${feature}`),);

    if (!popupFeature) {
      featureListItem.remove();
    }
  });
};

const renderPopup = (card) => {
  const cardElement = similarCardTemplate.cloneNode(true);
  const capacity = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
  const checkin = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkin}`;

  cardElement.querySelector('.popup__title').textContent = card.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = card.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent  = getOfferType(card.offer.type);
  cardElement.querySelector('.popup__text--capacity').textContent = capacity;
  cardElement.querySelector('.popup__text--time').textContent = checkin;

  const featureContainer = cardElement.querySelector('.popup__features');
  const featureList = featureContainer.querySelectorAll('.popup__feature');
  createTemplateFeatures(featureList, card.offer.features);

  const photosBlock = cardElement.querySelector('.popup__photos');
  photosBlock.innerHTML = '';
  createTemplatePhotos(photosBlock, card.offer.photos);

  cardElement.querySelector('.popup__description').textContent = card.offer.description;
  cardElement.querySelector('.popup__avatar').src = card.author.avatar;

  return cardElement;
};

export { renderPopup };
