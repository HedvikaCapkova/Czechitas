export const ShoppingItem = (props) => {
  const { id, product, amount, unit, done } = props;

  const element = document.createElement('li');
  element.classList.add('item');
  element.innerHTML = `
    <input type="number" min="0" class="item__name" value="${amount}"/>
    <div class="product">${product}</div>
    <div class="item__amount">${amount} ${unit}</div>
    <button class="item__btn-done ${done && 'item__btn-done--check'}"></button>
  `;

  element.querySelector(".item__name").addEventListener("change", (event) => {
    fetch(`https://apps.kodim.cz/daweb/shoplist/api/weeks/8/days/mon/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: Number(event.target.value) }),
    }).then((response) => response.json())
      .then((data) => element.replaceWith(ShoppingItem(data.results)));
  });
  

  element.querySelector('button').addEventListener('click', () => {
    fetch(`https://apps.kodim.cz/daweb/shoplist/api/weeks/8/days/mon/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ done: !done }),
    }).then((response) => response.json())
      .then((data) => element.replaceWith(ShoppingItem(data.results)));
  });

  return element;
};

