// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

let counterValue = 0;
const numCounter = document.querySelector("#value");

const decrement = document.querySelector('#counter button[data-action="decrement"]');
const countDown = () => {
   numCounter.textContent = counterValue -= 1;
};
decrement.addEventListener("click", countDown);

const increment = document.querySelector('#counter button[data-action="increment"]');
const countKb = () => {
   numCounter.textContent = counterValue += 1;
};
increment.addEventListener("click", countKb);
  
