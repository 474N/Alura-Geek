import { connection } from "./connection.js";

const productsList = document.querySelector("[data-list]");

function createCard(name, price, url, id) {
    const product = document.createElement("li");
    product.className = "product__card";

    product.innerHTML = `<img
    class="product__img"
    src="${url}"
  />

  <div class="card-container--info">
    <p>${name}</p>
    <div class="card-container--value">
      <p>$ ${Number.parseFloat(price).toFixed(2)}</p>
      <img class="trash_icon" src="./images/icon_trash.png" data-remove="true" data-id="${id}"/>
    </div>
  </div>`;

    return product;
}

async function getProducts() {
    try {
        const products = await connection.getProducts();
        //console.log(products)
        if (products.length > 0) {
            products.forEach((item) => {
                productsList.appendChild(
                    createCard(item.name, item.price, item.image_url, item.id)
                );
            });
        }
        else{
            productsList.innerHTML = `<h2 class="mensaje__titulo">No se obtuvieron productos.</h2>`;
        }
    } catch {
        productsList.innerHTML = `<h2 class="mensaje__titulo">No fue posible cargar la lista de productos.</h2>`;
    }
}

getProducts();