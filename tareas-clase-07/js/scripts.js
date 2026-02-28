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

const textos = document.getElementsByClassName("texto");

for (let i = 0; i < textos.length; i++) {
  textos[i].style.color = "pink";
  textos[i].style.fontSize = "30px";
}
