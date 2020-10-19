// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов
// используй document.createElement().


ingredients.forEach(el => {
  const listItemRef = document.createElement('li');
  const listRef = document.querySelector('#ingredients');
  listItemRef.textContent = el;
  listRef.appendChild(listItemRef);
});


const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

let htmlString = '';

for (let i = 0; i < ingredients.length; i++) {

    const itemCreator = document.createElement('li');
    itemCreator.textContent = ingredients[i];
    htmlString += itemCreator.outerHTML;

}

console.log(htmlString);

const nav = document.querySelector("#ingredients");

nav.insertAdjacentHTML('afterbegin', htmlString);