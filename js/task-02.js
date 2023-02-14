console.log(' --- task-02 ---');

// Напиши скрипт, який для кожного елемента масиву ingredients:
// # 1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// # 2. Додасть назву інгредієнта як його текстовий вміст.
// # 3. Додасть елементу клас item.
// # 4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// РІШЕННЯ:

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listIngredientsRef = document.querySelector('#ingredients');

const createItemIngredientsTag = (element) => {
  const itemIngredientTag = document.createElement('li');
  itemIngredientTag.textContent = `${element}`;
  itemIngredientTag.classList.add('item');

  return itemIngredientTag;
};

const createItems = (array) => array.map(createItemIngredientsTag);

listIngredientsRef.append(...createItems(ingredients));
// console.log('listIngredientsRef: ', listIngredientsRef);
