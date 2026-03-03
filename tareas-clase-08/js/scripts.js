// --- classList ---

// const p = document.querySelector("p");
// console.log(p.classList);

// -- classList.add() --
// p.classList.add("activo");

// -- classList.remove() --
// p.classList.remove("activo");

// -- classLista.contains() --
// console.log(p.classList.contains("activo"));

// -- classList.toggle() --
// const p = document.querySelector("p");
// p.classList.toggle("activo");
// p.classList.toggle("activo");

// -- classList.replace() --

// const p = document.querySelector("p");
// p.classList.replace("item", "destacado");

// -- createElement() --
const p = document.createElement("p");
p.texContent ="Nuevo párrafo";
p.classList.add("activo");

const body = document.body;
body.append(p);
body.prepend(p);

const div = document.querySelector("#contenedor");
div.append(p);
