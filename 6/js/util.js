const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];


const getRandomFloat = (min, max, maxDigits) => {

  if (min >= max || min < 0 || maxDigits <= 0) {
    throw new Error('Задан неверный диапазон! Укажите другие числа: min >= 0, max > min, maxDigits <= 0');
  }

  const digitsDegree = 10 ** maxDigits;
  const rand = ((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree;
  return Math.abs(rand.toFixed(maxDigits));
};


const getRandomArray = (array) => {
  const maxLength = array.length;
  const random = getRandomPositiveInteger(0, maxLength-1);
  const newRandomArray = array.slice(0, random);

  return newRandomArray;
};

export {getRandomPositiveInteger, getRandomArrayElement, getRandomFloat, getRandomArray};
