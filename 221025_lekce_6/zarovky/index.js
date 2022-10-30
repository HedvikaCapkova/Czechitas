console.log('funguju!');

import { Bulb } from './komponenta/index.js';

const bulbElm = Bulb({isOn:true});

const appElm = document.querySelector('#app');
appElm.append(bulbElm);

const clickBulb = document.querySelector('.bulb');
clickBulb.addEventListener("click", () => {
    bulbElm.classList.toggle('bulb--on');
});

