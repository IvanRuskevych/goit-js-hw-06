console.log('--- task 10 ---');

// # 1. Напиши скрипт створення і очищення колекції елементів:
// ## 1.1 Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.
// ## 1.2 Натисненням на кнопку Очистити, колекція елементів очищається.#

// # 2. Створи функцію createBoxes(amount), яка приймає один параметр - число.
//      Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.
// ## 2.1 Розміри найпершого <div> - 30px на 30px.
// ## 2.2 Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// ## 2.3 Всі елементи повинні мати випадковий колір фону у форматі HEX.
//        Використовуй готову функцію getRandomHexColor для отримання кольору.

// # 3. Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// РІШЕННЯ:

const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('input');

// console.log('btnCreateRef', btnCreateRef);
// console.log('btnDestroyRef', btnDestroyRef);
// console.log('boxesRef', boxesRef);
// console.log('inputRef', inputRef);

function createBoxes(amount) {
  let width = 30;
  let heigth = 30;
  let arrBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    arrBoxes.push(
      `<div style="background-color: ${getRandomHexColor()};width: ${width + i * 10}px;height: ${
        heigth + i * 10
      }px;"></div>`
    );
  }

  // console.log(arrBoxes.join(''));
  return (boxesRef.innerHTML = arrBoxes.join(''));
}

btnCreateRef.addEventListener('click', onBtnCreateClick);
btnDestroyRef.addEventListener('click', onBtnDestroyClick);

function onBtnCreateClick(evt) {
  evt.preventDefault();
  createBoxes(Number(inputRef.value));
}

function onBtnDestroyClick() {
  boxesRef.innerHTML = '';
  inputRef.value = 0;
}
