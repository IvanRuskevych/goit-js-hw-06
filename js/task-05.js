// Напиши скрипт, який під час набору тексту в інпуті input#name-input
// (подія input), підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

console.log('--- task 05 ---');

const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

// console.log('inputRef', inputNameRef);
// console.log('outputNameRef', outputNameRef);

inputNameRef.addEventListener('input', onInputName);

function onInputName(evt) {
  outputNameRef.textContent = evt.currentTarget.value;
}
