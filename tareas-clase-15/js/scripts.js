async function mostrarProductos() {
  const response = await fetch("https://fakestoreapi.com/products/");
  const products = await response.json();
  console.log(products);

  const container = document.querySelector("#productos");
  container.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("article");
    card.classList.add("card");

    const imagen = document.createElement("img");
    const h3 = document.createElement("h3");
    const price = document.createElement("p");

    imagen.src = product.image;
    imagen.alt = product.title;
    imagen.width = 150;

    h3.textContent = product.title;

    price.textContent = product.price;

    card.appendChild(imagen);
    card.appendChild(h3);
    card.appendChild(price);

    console.log(card);

    container.appendChild(card);
  });
}

mostrarProductos();
