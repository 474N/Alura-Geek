/*const serverUrl = "https://my-json-server.typicode.com/474N/JsonFaker/products";*/
const serverUrl = "http://localhost:3001/products";

async function getProducts() {
    const connection = await fetch(serverUrl, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    });

    const jsonData = await connection.json();

    return jsonData;
}

async function addProduct(name, price, id, url) {
    const connection = await fetch(serverUrl, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            price: price,
            id: id,
            image_url: url
        }),
    });

    //console.log(connection);

    if (!connection.ok) {
        throw new Error("Ha ocurrido un error al agregar el nuevo producto.");
    }

    const jsonData = await connection.json();
    //console.log(jsonData);
    
    return jsonData;
}

async function deleteProducts(id) {
    const connection = await fetch(`${serverUrl}/${id}`, {
        method: "DELETE",
    });
 
    if (!connection.ok) {
        throw new Error("Ha ocurrido un error al intentar eliminar el producto indicado.");
    }

    const jsonData = await connection.json();

    return jsonData;
}

export const connection = {
    getProducts,
    addProduct,
    deleteProducts,
};