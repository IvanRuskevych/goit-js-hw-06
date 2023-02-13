console.log('--- task 06 ---');

// Напиши скрипт, який:
// # 1. під час втрати фокусу на інпуті(подія blur), перевіряє його вміст
//      щодо правильної кількості введених символів.
// # 2. Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//      якщо неправильна кількість - червоним.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data - length.

// РІШЕННЯ:

const inputRef = document.querySelector('#validation-input');
const minLengthText = Number(inputRef.dataset.length);
// console.log('inputRef: ', inputRef);
// console.log('minLengthText: ', minLengthText);

inputRef.addEventListener('input', onInputBlur);

function onInputBlur(evt) {
  if (evt.currentTarget.value.length >= minLengthText) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}
