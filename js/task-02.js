console.log(' --- task-02 ---');

// Напиши скрипт, який для кожного елемента масиву ingredients:
// # 1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// # 2. Додасть назву інгредієнта як його текстовий вміст.
// # 3. Додасть елементу клас item.
// # 4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

console.log(' --- task-02 (variant 1) ---');

// РІШЕННЯ -- варіант 1:

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listIngredientsRef = document.querySelector('#ingredients');

const createItemsIngredientsRef = (array) => {
  return array.map((element) => {
    const itemIngredientRef = document.createElement('li');
    itemIngredientRef.textContent = `${element}`;
    itemIngredientRef.classList.add('item');
    return itemIngredientRef;
  });
};

const createListIngredients = createItemsIngredientsRef(ingredients);
listIngredientsRef.append(...createListIngredients);
console.log('listIngredientsRef: ', listIngredientsRef);

// -------------------------------------------------------

console.log(' --- task-02 (variant 2 - callback) ---');

// РІШЕННЯ -- варіант 2:

const createItemIngredientsRef = (element) => {
  const itemIngredientRef = document.createElement('li');
  itemIngredientRef.textContent = `${element}`;
  itemIngredientRef.classList.add('item');
  return itemIngredientRef;
};

// const creatItems = (array) => array.map(createItemIngredientsRef);
// listIngredientsRef.append(...creatItems(ingredients));
// console.log('listIngredientsRef: ', listIngredientsRef);
