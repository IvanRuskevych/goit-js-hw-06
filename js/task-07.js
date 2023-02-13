console.log('--- task 07 ---');

// Напиши скрипт, який:
// # 1. реагує на зміну значення input#font - size - control (подія input)
// # 2. і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// РІШЕННЯ:

const inputRef = document.querySelector('#font-size-control');
const getTextRef = document.querySelector('#text');
// console.log('inputRef: ', inputRef);
// console.log('getTextRef: ', getTextRef);

inputRef.addEventListener('input', onChangeFontSizeInput);

function onChangeFontSizeInput() {
  getTextRef.style.fontSize = `${inputRef.value}px`;
}
