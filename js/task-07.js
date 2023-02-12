// Напиши скрипт, який реагує на зміну значення input#font-size-control
//    (подія input) і змінює інлайн - стиль span#text,
//    оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

console.log('--- task 07 ---');

const inputRef = document.querySelector('#font-size-control');
// console.log('inputRef', inputRef);
const getTextRef = document.querySelector('#text');
// console.log('getTextRef', getTextRef);

inputRef.addEventListener('input', onChangeFontSizeInput);

function onChangeFontSizeInput() {
  getTextRef.style.fontSize = `${inputRef.value}px`;
}
