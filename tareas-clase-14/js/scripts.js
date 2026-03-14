// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 2000);

// console.log("C");

// -------------------------------

// console.log("Esto va primero");

// setTimeout(() => {
//   console.log("Mensaje después de 3 segundos");
// }, 3000);

// -------------------------------

// function login(usuario) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hola, " + usuario);
//     }, 1500);
//   });
// }

// console.log("Validar usuario");

// const promesa = login("Juan");
// promesa.then((mensaje) => {
//   console.log(mensaje);
// });

// console.log("Otras tareas");

// -------------------------------

function procesarPedido() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pedido procesado");
    }, 2000);
  });
}

console.log("Iniciar pedido");

procesarPedido().then((pedido) => {
  console.log(pedido);
});
