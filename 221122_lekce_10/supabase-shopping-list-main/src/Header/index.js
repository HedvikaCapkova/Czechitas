import './style.css';
import { signOut } from '../functions/auth.js';

export const Header = (props) => {
  const { session } = props;

  let userContent = `
    <nav>
      <a href="/register">Registrovat</a>
      <a href="/login">Přihlásit</a>
    </nav>
  `;

  if (session) {
    userContent = `<div>${session.user.email}<button class="btn-logout">Odhlásit</button></div>`;
  }
  
  const element = document.createElement('header');
  element.innerHTML = `
    <div class="container">  
      <nav>
        <a href="/">Domů</a>  
      </nav>
      <div class="user">
        ${userContent}
      </div>
    </div>
  `;

  const btnLogout = element.querySelector('.btn-logout');
  //   btnLogout.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   window.location.href = '/login';
  //   signOut();
  // });

  return element;
};
