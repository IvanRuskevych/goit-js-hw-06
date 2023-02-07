console.log(' -- Task 1 -- ');

// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль
//   текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>,
//   вкладених в нього).

const listRef = document.querySelector('#categories');
// console.log('categories: ', listRef);
console.log('Number of categories: ', listRef.children.length);

const arrItemsRef = listRef.querySelectorAll('.item');
// console.log('items: ', arrItemsRef);
console.log('Number of categories: ', arrItemsRef.length);

// --------------------------------------------------------------

console.log(' -- forEach() -- ');

const itemInformation = array => {
  array.forEach(element => {
    const titleItemRef = element.firstElementChild.textContent;
    console.log('Category: ', titleItemRef);

    const numberElements = element.lastElementChild.children.length;
    console.log('Elements: ', numberElements);
  });
  return;
};

itemInformation(arrItemsRef);

// -------------------------------------------------------------------

console.log(' -- map() -- ');

const itemsInfo = element => {
  console.log('Category: ', element.firstElementChild.textContent);
  console.log('Elements', element.lastElementChild.children.length);
};

[...arrItemsRef].map(itemsInfo);
