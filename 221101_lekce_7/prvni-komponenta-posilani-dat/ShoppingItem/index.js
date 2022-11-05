export const ShoppingItem = (props) => {
  const { id, product, amount, unit, done } = props;

  let checkClass = '';
  if (done) {
    checkClass = 'item__btn-done--check';
  }

  

  const element = document.createElement('li');
  element.classList.add('item');
  element.innerHTML = `
    <input type="number" class="item__name"/>${product}
    <div class="item__amount">${amount} ${unit}</div>
    <button class="item__btn-done ${checkClass}"></button>
  `;
  
  const inputValue = document.querySelector(".item__name");
  console.log(inputValue);

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

