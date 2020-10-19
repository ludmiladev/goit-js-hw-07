// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и 
// нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>







// const input = document.querySelector('#controls input');
// const render = document.querySelector('button[data-action="render"]');
// const destroy = document.querySelector('button[data-action="destroy"]');
// const container = document.querySelector('#boxes')

// let amount

// const createBoxes = function () {
//   let initialWidth = 20;
//   let initialHeight = 20;
//   for (let i = 1; i <= amount; i++) {
//     let random1 = Math.round(Math.random() * 255);
//     let random2 = Math.round(Math.random() * 255);
//     let random3 = Math.round(Math.random() * 255);
//     container.innerHTML += `<div class='box-${i}'></div>`
//     const box = document.querySelector(`.box-${i}`)
//     initialHeight += 10;
//     initialWidth += 10;
//     box.style.width = `${initialWidth}px`;
//     box.style.height = `${initialHeight}px`;
//     box.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`
//   }
// }

// const destroyBoxes = function () {
//   while (container.firstChild) {
//   container.removeChild(container.firstChild);
// }
// }

// input.addEventListener('input', (event) => {
//   amount = event.target.value;
// })

// render.addEventListener('click', createBoxes)
// destroy.addEventListener('click', destroyBoxes)
