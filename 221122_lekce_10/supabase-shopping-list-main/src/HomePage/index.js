import { getShoppingItems } from "../functions/db";
import { ShoppingList } from "../ShoppingList";

export const HomePage = (props) => {
  const { session } = props;

  if (!session) {
    window.location.href = '/login';
  }

  getShoppingItems(session.user.id).then((response) =>{
    const { data, error } = response;

    });

  const element = document.createElement('div');
  element.classList.add('page');
  element.innerHTML = `
  <div class="container">
    <h1>Nákupní seznam</h1>
    <div class="lists">${ShoppingList(session)}</div>
  </div>`;

  return element;
};

