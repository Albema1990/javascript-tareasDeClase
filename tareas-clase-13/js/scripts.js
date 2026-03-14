// --- PROMESAS ---

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

// function esperar() {
//   return new Promise((resolve) => {
//     setTimeout(
//       () => {
//         resolve("OK");
//       },
//       getRandomInt(500, 1500),
//     );
//   });
// }

// const promise = esperar();
// promise.then((res) => {
//   console.log(res);
// });

// -- ASYNC / AWAIT --

// function getRandomInt(min, max) {
//   const minCeiled = Math.ceil(min);
//   const maxFloored = Math.floor(max);
//   return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
// }

// function esperar(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve({mensaje: "OK"});
//         }, getRandomIntInclusive(500, 1500),
//     );
//     });
// }

// async function ejecutar(){
//     const response = await esperar();
//     console.log(response);
// }

// -- fetch --

const promise = fetch("https://fakestoreapi.com/products");

promise
  .then((response) => {
    console.log(response.json());
    // if(response.status === 200){
    //    console.log("Status: Ok");
    // }
  })
  .catch((error) => {
    console.error(error);
  });
