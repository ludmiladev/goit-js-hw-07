// Задание 3
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. 
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
//     alt: 'Group of Horses Running',
//   },
// ];





const list = document.querySelector('#gallery')
images.forEach(el => {
  list.insertAdjacentHTML('beforeend',`<li><img src="${el.url}" alt="${el.alt}"></li>`)
})







const galleryEl = document.querySelector('ul#gallery');

const imgList = images.map(slide => {
    const addLiEl = document.createElement('li');
    const addImgEl = document.createElement('img');
    addImgEl.src = slide.url;
    addImgEl.alt = slide.alt;
    addLiEl.appendChild(addImgEl);
    // addLiEl.insertAdjacentHTML('beforeend', `<img src="${slide.url}" alt="${slide.alt}">`);
    // console.log(addLiEl);
    return addLiEl;
  });
  
  galleryEl.append(...imgList);
