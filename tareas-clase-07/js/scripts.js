// --- getElementById ---
// const titulo = document.getElementById("titulo");

// console.log(titulo); // muestra todo el objeto
// console.log(titulo.textContent); // muestra solo el contenido

// titulo.textContent = "JavaScript básico";

// const elemento = document.getElementById("subtitulo");
// console.log(elemento.textContent);

// elemento.textContent = "Sub subtítulo";
// console.log(elemento.textContent);

// --- getElementByClassName ---
// const textos = document.getElementsByClassName("texto");
// console.log(textos);
// console.log(textos.length);

// console.log(textos[1]);

// for (let i = 0; i < textos.length; i++) {
//   console.log(textos[i]);
// }

// const subtitulo = document.getElementById("subtitulo");
// console.log(subtitulo.style);

// subtitulo.style.color = "red";
// subtitulo.style.fontSize = "5px";

// const textos = document.getElementsByClassName("texto");

// for (let i = 0; i < textos.length; i++) {
//   textos[i].style.color = "pink";
//   textos[i].style.fontSize = "30px";
// }

// --- getElementByTagName ---
// const textos = document.getElementsByTagName("p"); // trae todos los elementos con la etiqueta p

// for (let i = 0; i < textos.length; i++) {
//   // recorre el array de elementos
//   textos[i].style.color = "blue"; // cambia el color de cada elemento a azul
// }

// --- querySelector ---

// const parrafo = document.querySelector("#otro-parrafo");

// const encabezado = document.querySelector("h1");
// encabezado.textContent = "Modificación del encabezado";
// const primerP = document.querySelector("div p");
// primerP.textContent = "Cambiamos el primer párrafo";

// --- querySelectorAll ---
// const parrafos = document.querySelectorAll("p");
// console.log(parrafos);

// parrafos.forEach(function(parrafo){
//   parrafo.style.color = "green";
// });

const parrafos = document.querySelectorAll("P");

parrafos.forEach(function (parrafo) {
  parrafo.style.color = "red";
  parrafo.textContent = "Cambiamos el texto de los párrafos";
});
