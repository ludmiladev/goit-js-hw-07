// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться
// строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>


//-------------------------- В Ы П О Л Н Е Н И Е ------------------------------------------------------------

const input = document.querySelector('#name-input');
const text = document.querySelector('#name-output');

input.addEventListener('input', (event) => {
    text.textContent = event.target.value;
    if (input.value === '') {
        text.textContent = 'незнакомец';
    }
});