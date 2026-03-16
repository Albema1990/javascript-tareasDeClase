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

// function procesarPedido() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Pedido procesado");
//     }, 2000);
//   });
// }

// console.log("Iniciar pedido");

// procesarPedido().then((pedido) => {
//   console.log(pedido);
// });

// -------------------------------

// function validarPago(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;

//       if (success){
//         resolve({success: true, operacion: 123});
//       }else{
//         reject({error: true, operacion: 244});
//       }
//     }, 2000);
//   })
// }

// validarPago().then((response) => {
//   console.log(response);
// }).catch((error) => {
//   console.log(error);
// })

// -----------------------------------------------------------------------

// function login(usuario) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hola, " + usuario);
//     }, 1500);
//   });
// }

// async function iniciarSeccion() {
//   const mensaje = await login("María");
// }

function guardarPerfil() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Perfil guardado");
    }, 1000);
  });
}

async function validar() {
  console.log("Guardando...");
  const res = await guardarPerfil();
  console.log(res);
}

validar();
