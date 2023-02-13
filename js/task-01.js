console.log(' -- Task 1 -- ');

// Напиши скрипт, який:
// # 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// # 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль
// # 3.   текст заголовку елемента (тегу <h2>)
// # 4.   і кількість елементів в категорії (усіх < li >, вкладених в нього).

// РІШЕННЯ для # 1. -- варіант 1:
const listRef = document.querySelector('#categories');
console.log('Number of categories: ', listRef.children.length);

// РІШЕННЯ для # 1. -- варіант 2:
const arrItemsRef = listRef.querySelectorAll('.item');
console.log('Number of categories: ', arrItemsRef.length);
// --------------------------------------------------------------

console.log(' -- Task 1 -- forEach() -- ');

// РІШЕННЯ -- варіант 1:

const itemInformation = (array) => {
  array.forEach((element) => {
    const titleItemRef = element.firstElementChild.textContent;
    console.log('Category: ', titleItemRef);

    const numberElements = element.lastElementChild.children.length;
    console.log('Elements: ', numberElements);
  });
  return;
};

itemInformation(arrItemsRef);
// -------------------------------------------------------------------

console.log(' -- Task 1 -- map() -- ');

// РІШЕННЯ -- варіант 2:

const itemsInfo = (element) => {
  console.log('Category: ', element.firstElementChild.textContent);
  console.log('Elements: ', element.lastElementChild.children.length);
};

[...arrItemsRef].map(itemsInfo);
