async function mostrarProducto() {
  const response = await fetch("https://fakestoreapi.com/products/1");
  const product = await response.json();
  console.log(product);

  document.querySelector("#titulo").textContent = product.title;
  document.querySelector("#precio").textContent = `$ ${product.price}`;

  const imagen = document.querySelector("#imagen");
  imagen.src = product.image;
  imagen.alt = product.title;
}

mostrarProducto();
