// Ejercicios de casa - Clase 03

// -------- Ejercicio 1 Contador simple
// Usar un for para mostrar del 1 al 10 en consola

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// --------- Ejercicio 2 Validar palabra
// Usar while y prompt. Pedir una palabra hasta que sea HTML

// let palabra = prompt("Ingrese una palabra");

// while (palabra != "HTML") {
//   palabra = prompt("Ingrese una palabra que comience por H");
// }

//  ------- Ejercicio 3 Menu simple
// Usar do while.Mostrar un prompt con opciones 1. Saludar y 2. Salir. Repetir hasta que elijan salir

let op;

do {
  op = prompt("Elige: 1.Saludar o 2.Salir");
  switch (op) {
    case 1:
      op = prompt("Hola de nuevo, ¿quieres salir?");
      break;
    case 2:
      op = prompt("Hasta pronto");
      break;
    default:
      op = prompt("Opción no valida, ingrese una de las dos");
  }
} while (op != 2);

// ------- Ejercicio 4 Contador inverso
// Usar for. Mostrar números del 20 al 0. Agregar un comentario explicando que hace cada parte del for

// for (let i = 20; i >= 0; i--) {
//   console.log(i);
// }

// ------- Ejercicio 5 Reflexión escrita
// En un comentario en JS, responder: ¿Cual bucle te resulto más fácil? ¿En qué casos usarías while y en cual for?
