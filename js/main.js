// Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max || min < 0) {
    return ('Введите корректное значене: min >= 0 и max > min');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomIntInclusive();

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.›

function getRandomArbitrary(min, max, maxDigits) {
  if (min >= max || min < 0 || max <= 0 || maxDigits <= 0) {
    return ('Задан неверный диапазон! Укажите другие числа: min >= 0, max > min, maxDigits <= 0');
  }

  const digitsDegree = 10 ** maxDigits;
  return (((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree).toFixed(maxDigits);
}

getRandomArbitrary();
