import { Header } from '../Header/index.js';
import { HomePage } from '../HomePage/index.js';
import { LoginPage } from '../LoginPage/index.js';
import { RegisterPage } from '../RegisterPage/index.js';
import { getSession } from '../functions/auth.js';

export const App = (props) => {
  const { session } = props;

  const element = document.createElement('div');

  if (session === undefined) {
    getSession().then((response) => {
      const { data } = response;
      let session = null;
      if (data && data.session) {
        session = data.session;
      }

      element.replaceWith(
        App({
          session: session,
        }),
      );
    });
  } else {
    element.classList.add('app');
    element.append(Header({ session }));

    const { pathname } = window.location;
    if (pathname === '/') {
      element.append(HomePage({ session }));
    } else if (pathname === '/login') {
      element.append(LoginPage({ session }));
    } else if (pathname === '/register') {
      element.append(RegisterPage({ session }));
    }
  }

  return element;
};

 