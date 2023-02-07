// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listIngredientsRef = document.querySelector('#ingredients');

console.log(' --- task-02 (variant 1) ---');

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
console.log('listIngredientsRef', listIngredientsRef);

// -------------------------------------------------------

console.log(' --- task-02 (variant 2 - callback) ---');

const createItemIngredientsRef = (element) => {
  const itemIngredientRef = document.createElement('li');
  itemIngredientRef.textContent = `${element}`;
  itemIngredientRef.classList.add('item');
  return itemIngredientRef;
};

// const creatItems = (array) => array.map(createItemIngredientsRef);
// listIngredientsRef.append(...creatItems(ingredients));
// console.log('listIngredientsRef', listIngredientsRef);
