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

getRandomFloat();
