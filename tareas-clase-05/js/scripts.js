//   --- Arrays ---

// const nombres = ["Álvaro", "María", "Luis"]; // Array de nombres
// const numeros = [-5, 2, 5, 7, 10];
// const vacio = [];

// console.log(nombres); // Accede a los nombres de dentro del array y los muestra en consola
// console.log(nombres[1]); // Accede al nombre que esta en el elemento del índice 1 ("María") y lo muestra en consola

// nombres[1] = "Ana"; // Accede al nombre que esta en el elemento del índice 1 ("María") y lo modifica por "Ana"

// console.log(nombres);

// console.log(nombres[0]);
// console.log(nombres[1]);
// nombres[0] = "Andres";

// const nombres = ["Álvaro", "María", "Luis"];

// console.log(nombres.length);
// console.log(nombres[nombres.length - 1]);

// nombres[3] = "Lucia"; // Agrega un elemento mas al array
// console.log(nombres);

// nombres[nombres.length] = "Oscar";
// console.log(nombres);

// const restaurantes = [];
// restaurantes.push("Telepizza");
// restaurantes.push("Dominos");
// restaurantes.push("Burger king");

// let restEliminado = restaurantes.pop();

// restaurantes.unshift("Burger King");
// let restEliminado2 = restaurantes.shift();
// console.log(restaurantes);

// const numeros = [1, 20, 22, 5, 50, 17, 2];

// console.log(numeros);

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] > 15) {
//     console.log(numeros[i]);
//   }
// }

// ----- forEach

const nombres = ["Maria", "Alvaro", "Lucia"];

// console.log(nombres);

function mostrarNombre(nombre) {
  nombre = nombre + "!!!";
  console.log(nombre);
}

nombres.forEach(mostrarNombre);
