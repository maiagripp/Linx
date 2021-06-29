const button = document.getElementById('getProducts');
let page = 0;

button.addEventListener('click', (e) => {
  e.preventDefault();
  loadProducts();
});

function loadProducts() {
  page++;
  let url =
    'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=' +
    page +
    '/json/';

  const elementsArray = document.querySelectorAll('.card');
  const containerCard = document.querySelector('.card-group');

  fetch(url)
    .then((res) =>
      res.json().then((data) => {
        data.products.forEach((item) => {
          containerCard.insertAdjacentHTML(
            'beforeend',
            `<div class="card">
            <div class="card-header">
            <img src="${item.image}"/>
            </div>
            <div class="card-body">
              <h4> ${item.name}</h4>
              <p class="card-text hide-xs">${item.description}</p>
              <p class="card-text"> De: R$ ${item.oldPrice.toFixed(2)} </p>
              <strong>
                <p class="card-text"> Por: R$ ${item.price.toFixed(2)} </p>
              </strong>
              <p class="card-text">ou
              ${
                item.installments.count
              }x de R$${item.installments.value.toFixed(2)}</p>
              <div><button class="btn-common" id="btn-card">Comprar</button></div>
            </div>`
          );
        });
      })
    )
    .catch((err) => {
      console.log('Algo deu errado aqui', err);
    });
}

loadProducts();
