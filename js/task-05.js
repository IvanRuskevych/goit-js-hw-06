console.log('--- task 05 ---');

// Напиши скрипт, який:
// # 1. під час набору тексту в інпуті input#name - input (подія input),
// # 2. підставляє його поточне значення в span#name - output.
// # 3. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// РІШЕННЯ:

const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');
// console.log('inputNameRef: ', inputNameRef);
// console.log('outputNameRef: ', outputNameRef);

inputNameRef.addEventListener('input', onInputName);

function onInputName(evt) {
  outputNameRef.textContent = evt.currentTarget.value;
  if (outputNameRef.textContent === '') {
    outputNameRef.textContent = 'Anonymous';
  }
}
