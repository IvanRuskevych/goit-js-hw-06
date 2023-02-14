console.log(' -- Task 1 -- ');

// Напиши скрипт, який:
// # 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// # 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль
// # 3.   текст заголовку елемента (тегу <h2>)
// # 4.   і кількість елементів в категорії (усіх < li >, вкладених в нього).

// РІШЕННЯ:
const arrItemsRef = document.querySelectorAll('.item');
console.log('Number of categories: ', arrItemsRef.length);

const itemsInfo = (element) => {
  console.log('Category: ', element.firstElementChild.textContent);
  console.log('Elements: ', element.lastElementChild.children.length);
};

[...arrItemsRef].map(itemsInfo);
