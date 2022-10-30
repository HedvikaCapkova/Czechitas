import { Bulb } from './komponenta/index.js';

const appElm = document.querySelector('#app');
appElm.append(Bulb(true), Bulb(), Bulb(true));

// const clickBulb = document.querySelectorAll('.bulb');

// clickBulb.forEach((element) => {
//     element.onclick = () => {
//         element.classList.toggle("bulb--on");
//     }
// });


// appElm.addEventListener("click", (e) => {
//     clickBulb.forEach(element => {
//         e.target === element && element.classList.toggle("bulb--on");
//     })
// })

