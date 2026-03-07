// -- Desectructuración --

// -- Desestructuración de arrays --

// const colores = ["red", "green", "blue"];

// let [rojo] = colores;

// rojo = "un color";

// console.log(colores[0]);
// console.log(rojo);

// const personas = [
//   { nombre: "Ana", edad: 27 },
//   { nombre: "Juan", edad: 33 },
//   { nombre: "Andrea", edad: 50 },
// ];

// const users = personas;

// users.push({ nombre: "María", edad: 30 });
// console.log(personas);

// let numeros = [10, 20, 30];

// let [a, ,] = numeros;
// let [, b] = numeros;
// let [, , c] = numeros;

// console.log(a);
// console.log(b);
// console.log(c);

// -- Desectructuración de Objetos --

// const persona = {
//     nombre: "Juan",
//     edad: 31,
// }

// let {nombre, edad} = persona;

// console.log(nombre, edad);

// const producto = {
//   nombre: "Mouse",
//   precio: 5000,
//   stock: 10,
// };

// let { nombre, precio } = producto;
// console.log(nombre, precio + "€");

// const productos = [
//   { nombre: "Mouse", precio: 5000, stock: 10 },
//   { nombre: "Teclado", precio: 8000, stock: 5 },
//   { nombre: "Monitor", precio: 1500, stock: 21 },
// ];

// for (let i = 0; i < productos.length; i++) {
//   if (productos[i].precio == 8000) {
//     console.log(productos[i].precio);
//   }
// }

// for (let i = 0; i < productos.length; i++) {
//   if (productos[i].nombre == "Monitor") {
//     console.log(productos[i].nombre);
//   }
// }

// -- Rest operator --

// const numeros = [1, 2, 3, 4, 5];
// const [a, b, ...nums] = numeros;
// console.log(a, b, nums);

const nombres = ["Ana", "Juan", "Pedro", "Lucía"];

const [primero, ...resto] = nombres;

console.log(primero);
console.log(resto);

