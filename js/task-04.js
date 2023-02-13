console.log('--- task 04 ---');

// # 1. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
//      та ініціалізуй її значенням 0.
// # 2. Додай слухачів кліків до кнопок, всередині яких збільшуй або
//      зменшуй значення лічильника.
// # 3. Оновлюй інтерфейс новим значенням змінної counterValue.

// РІШЕННЯ:

let counterValue = 0;

const decrementButtonRef = document.querySelector('[data-action="decrement"]');
const incrementButtonRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector('#value');

const onIncrementButtonClick = (evt) => {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
};

const onDecrementButtonClick = (evt) => {
  counterValue += -1;
  counterValueRef.textContent = counterValue;
};

decrementButtonRef.addEventListener('click', onDecrementButtonClick);
incrementButtonRef.addEventListener('click', onIncrementButtonClick);
