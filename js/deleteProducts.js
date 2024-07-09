import { connection } from "./connection.js";

const productsList = document.querySelector('[data-list]')

productsList.addEventListener('click', async (event) => {
  event.preventDefault()

  const productId = event.target.dataset.id
  
  if (event.target.nodeName === 'IMG' && event.target.dataset.remove) {
    await connection.deleteProducts(productId)
  }
})