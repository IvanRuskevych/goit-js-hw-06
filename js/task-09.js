console.log('--- task 09 ---');

// Напиши скрипт, який:
// # 1. змінює кольори фону елемента < body > через інлайн - стиль
//      по кліку на button.change - color
// # 2. і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// РІШЕННЯ:

const bodyRef = document.querySelector('body');
const buttonRef = bodyRef.querySelector('.change-color');
const textRef = bodyRef.querySelector('.color');

buttonRef.addEventListener('click', onButtonClick);

function onButtonClick(evt) {
  const randomColor = getRandomHexColor();

  bodyRef.style.backgroundColor = `${randomColor}`;
  textRef.textContent = `${randomColor}`;
}
