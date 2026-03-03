const titulo = document.getElementById("tituloLista");
const lista = document.querySelector("#lista");

// modificar un elemento
titulo.textContent = "Mis tareas";

// agregar una clase a un elemento
titulo.classList.add("activo");
titulo.classList.add("destacado");

// crear elementos
const p = document.createElement("p");
p.textContent = "Nuevo párrafo";
p.classList.add("item");

lista.appendChild(p);
// console.log(lista.children);

const items = lista.children;

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
  items[i].classList.add("activo");
}

items[1].remove();
