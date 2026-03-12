// --- Asincronía --- (las tareas se pueden ir resolviendo en diferentes tiempos, no necesitan ir por orden)

// -- setTimeout -- (lo utilizamos para simular un tiempo de demora)

// setTimeout(() => {
//   console.log("Pasaron 2 segundos");
// }, 2000);

// setTimeout(function () {
//   console.log("A");
// }, 0);

// console.log("B");

// setTimeout(() => {
//   console.log("Mensaje tras 3 segundos");
// }, 3000);

// console.log("Primer mensaje");

// setTimeout(() => {
//   console.log("Último mensaje");
// }, 4000);

// -- Callbacks -- (función que se le pasa como argumento a otra función)

// function saludar(callback) {
//   console.log("Preparando saludo");
//   callback();
// }

// function hola() {
//   console.log("Hola");
// }

// saludar(hola);

// const saludar = function (callback) {
//   console.log("Preparando saludo");
//   callback();
// }

// const hola = function() {
//   console.log("Hola");
// }
// saludar(hola);

// const saludar =  (callback) => {
//   console.log("Preparando saludo");
//   callback();
// }

// const hola = () => console.log("Hola");

// saludar(hola);

// -- Promesas -- (más fácil para encadenar procesos)
// se puede resolver o rechazar (resolve / reject)

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = true;

//     if (success) {
//       resolve("Operación exitosa");
//     }
//   }, 2000);
// });

// promesa
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// // -- setInterval -- (ejecuta una función cada cierto tiempo)

// setInterval(() => {
//   console.log("Esto se repite cada 2 segundos");
// }, 2000);

const promesaEjercicio = new Promise((resolve, reject) => {
  setTimeout(() => {
    const numero = 5;
    if (numero > 10) {
      resolve("El número es mayor que 10");
    } else {
      reject("El número es menor o igual a 10");
    }
  }, 2000);
});

promesaEjercicio
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
