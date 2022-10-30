console.log('funguju!');

import { Bulb } from './komponenta/index.js';

const bulbElm1 = Bulb({isOn:true});

const appElm = document.querySelector('#app');
appElm.append(bulbElm1);