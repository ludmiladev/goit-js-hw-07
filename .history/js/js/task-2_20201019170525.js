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

    const item = document.createElement('li'); 
    item.textContent = ingredients[i];
    htmlString += item.outerHTML;

  }

  console.log(htmlString); 

  const nav = document.querySelector("#ingredients");

  nav.insertAdjacentHTML('afterbegin', htmlString);