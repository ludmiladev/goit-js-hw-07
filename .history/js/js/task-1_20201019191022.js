
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
//     то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет
// в консоль текст заголовка элемента(тега h2) и количество элементов

//-------------------------- В Ы П О Л Н Е Н И Е ------------------------------------------------------------

const listRef = document.querySelector('#categories');
console.log(`
    В списке ${listRef.children.length} категории.
`);
// const liEl = listRef.querySelectorAll('li.item');
// liEl.forEach(element => {

//   console.log(`
//     Категорія: ${element.querySelector('h2').textContent}.
//   `);

//   console.log(`
//     Кількість: ${element.querySelector('ul').children.length}.
//   `);
  
// });