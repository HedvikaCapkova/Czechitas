const products = [
    {
      name: 'Mlýnek na kávu',
      price: 520,
      currency: 'Kč',
    },
    {
      name: 'Varná konvice',
      price: 670,
      currency: 'Kč',
    },
    {
      name: 'Sada hrničků',
      price: 1020,
      currency: 'Kč',
    },
    {
      name: 'Kávovar',
      price: 5800,
      currency: 'Kč',
    },
  ];

  const Product = (props) => {
    const { name, price } = props;

  return `
  <div class="product">
    <h2 class="product__name">${name}</h2>
    <p class="product__price">${price}</p>
</div>
`;

};

const renderProducts = (products) => {
    document.querySelector('.products-section').innerHTML = products.map((item) => {
        return Product(item);
    }).join('');
};

renderProducts(products);