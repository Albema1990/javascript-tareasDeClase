// --- OBJETOS LITERALES --- //

// const usuario = {
//   nombre: "Juan",
//   apellido: "Pérez",
//   edad: 30,
//   permisos: ["admin", "editor"],
//   direccion: {
//     ciudad: "Madrid",
//     cp: 29010,
//   },
// };

// console.log(usuario);

// const alumno = {
//   nombre: "Álvaro",
//   edad: 36,
// };

// const producto = {
//   nombre: "Nike Air Force One",
//   precio: 129.99,
// };

// console.log(alumno.nombre);
// producto.nombre = "Nike jordan";
// console.log(producto.nombre);

// alumno.apellido = "Benítez"; // crear una nueva propiedad
// delete alumno.edad; // quitar una propiedad con delete

// NOTACION DE CORCHETE

// console.log(alumno['edad']);

// MÉTODOS

// const usuario = {
//   nombre: "Juan",
//   apellido: "Pérez",
//   nombreCompleto: function () {
//     console.log(`${usuario.nombre} ${usuario.apellido}`);
//   },
// };

// usuario.nombreCompleto();

const equipo = {
  nombre: "EBG Málaga",
  ciudad: "- Málaga",
  nombreCiudad: function () {
    console.log(`${this.nombre} ${this.ciudad}`);
  },
};

equipo.nombreCiudad();
