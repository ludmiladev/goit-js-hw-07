
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
//     то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет
// в консоль текст заголовка элемента(тега h2) и количество элементов

//-------------------------- В Ы П О Л Н Е Н И Е ------------------------------------------------------------

// const listRef = document.querySelectorAll('.item');
// console.log(`У списку ${listRef} категорії.`);


// const headingRef = document.querySelectorAll('h2');
// headingRef.forEach(el => console.log(`Категорія: ${el.textContent}\nКількість елементів: ${el.nextElementSibling.children.length}`));


// */

// 'use strict'

// Print sum of categories

const selectByIdOfEl = document.querySelector('#categories');

console.log(`
    У списку ${selectByIdOfEl.children.length} категорії.
`);

// Print name of category and sum of items
// ver.1

const liEl = selectByIdOfEl.querySelectorAll('li.item');

liEl.forEach(element => {

  console.log(`
    Категорія: ${element.querySelector('h2').textContent}.
  `);

  console.log(`
    Кількість: ${element.querySelector('ul').children.length}.
  `);
  
});