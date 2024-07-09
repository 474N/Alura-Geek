import { connection } from "./connection.js";

const form = document.querySelector("[data-form]");

async function addProduct(e) {
    e.preventDefault();
    const productName = document.querySelector("[data-name]").value;
    const productPrice = document.querySelector("[data-price]").value;
    const productImage = document.querySelector("[data-url]").value;

    const productId = crypto.randomUUID();

    try {
        await connection.addProduct(productName, productPrice, productId, productImage);
        form.reset()
    } catch (ex) {
        alert(ex);
    }
}

form.addEventListener("submit", (event) => addProduct(event));