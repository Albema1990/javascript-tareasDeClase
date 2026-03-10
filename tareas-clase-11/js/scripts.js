// -- localStorage --

// localStorage.setItem("nombre", "Álvaro"); // para setear
// localStorage.setItem("apellido", "Pérez");
// localStorage.setItem("edad", 30);

// const nombre = localStorage.getItem("nombre");
// console.log(nombre); // para obtener el valor

// const apellido = localStorage.getItem("apellido");
// console.log(apellido); // para obtener el valor

// if (apellido === null || apellido === ""){
//     console.log(`El usuario se llama ${nombre}`);
// }else {
//     console.log(`El usuario se llama ${nombre} ${apellido}`);
// }

// let  edad = localStorage.getItem("edad");
// console.log(edad);
// console.log(typeof edad);

// edad = Number(edad); // para convertir el string a número
// console.log(typeof edad);
// console.log(edad);

// console.log('La edad del usuario es: ' + (edad + 1));

// localStorage.setItem("ciudad", "Málaga");
// localStorage.setItem("país", "España");

// const ciudad = localStorage.getItem("ciudad");

// console.log(ciudad);

// localStorage.removeItem("país");

// const form = document.querySelector("#agregar-texto");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const input = document.querySelector("#nombre");
//   console.log(input.value);

//   localStorage.setItem("nombre", input.value);
// });

// sessionStorage.setItem("apellido", "Pérez");
// const apellido = sessionStorage.getItem("apellido");
// console.log(apellido);

const ciudad = {
  provincia: "Málaga",
  pais: "España",
};

const jsonCiudad = JSON.stringify(ciudad);
localStorage.setItem("ciudad", jsonCiudad);

console.log(jsonCiudad);

const ciudadRecuperada = localStorage.getItem("ciudad");
const ciudadObjeto = JSON.parse(ciudadRecuperada);
console.log(ciudadObjeto);
