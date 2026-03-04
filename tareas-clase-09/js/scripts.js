// --- Eventos ---

// -- onclick --
// const h1 = document.querySelector("#titulo"); // con esto obtengo el elemento

// h1.onclick = function(){
//     console.log("Click en h1");
// }

// h1.onclick = function(){
//     console.log("Otro click en h1");
// }

// -- Ejercicio onclick --
// const btn = document.querySelector("#btnSaludar");

// btn.onclick = function(){
//     console.log("Soy el botón saludar");
// }

// --- addEventListening ---
// const h1 = document.querySelector("#titulo");

// function saludar() {
//   console.log("Hola, saludos");
// }

// function mensaje() {
//   console.log("Un mensaje...");
// }

// h1.addEventListener("click", saludar());
// h1.addEventListener("click", mensaje);

// -- mini reto --
// const h1 = document.querySelector("#titulo");

// function cambioTexto(){
//     h1.textContent ="Nuevo h1!";
// }

// h1.addEventListener("click", cambioTexto);

// -- Event --
// const input = document.querySelector("#nombre");

// input.addEventListener("click", (Event) => {
//   event.target.style.backgroundColor = "red";
//   console.log(Event.target);
//   //   console.log(Event);
// });

// input.addEventListener("keyup", (Event) => {
//   console.log(Event.target);
// });

// -- Ejercicio Event --
// const input = document.querySelector("#nombre");

// input.addEventListener("keyup", (Event) => {
//   console.log(Event.target.value);
// });

// --preventDefault--
// const link = document.querySelector("#link");

// link.addEventListener("click", (Event) => {
//   Event.preventDefault();
//   console.log("No se redirige a Google");
// });

const form = document.querySelector("#formulario");

form.addEventListener("submit", (Event) => {
  Event.preventDefault();
  console.log("Formulario no se envía");
});
