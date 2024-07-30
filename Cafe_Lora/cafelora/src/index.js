import './style.css';
import { Header } from './components/Header.js'
import { Menu } from './components/Menu.js'
import { Gallery } from './components/Gallery.js'
import { Footer } from './components/Footer.js'
import { Contact } from './components/Contact.js'
import { Banner } from './components/Banner.js'

const pageElement = document.querySelector('div');
pageElement.classList.add('page');

const main = document.createElement('main');
main.append(
  Banner(),
  Menu(),
  Gallery(),
  Contact(),
);

pageElement.append(
  Header(),
  Menu(),
  Footer(),
);

//document.querySelector('#app').append(pageElement);