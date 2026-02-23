// ---- Ejercicios de casa Clase 04 ----

// Ejercicio 1 - Saludo reutilizable (Función que reciba un nombre, muestre un saludo y llamarla varias veces)

// let nombre;

// function hola(nombre) {
//   console.log("Hola", nombre);
// }

// hola("María");

// Ejercicio 2 - Calculadora simple (Crear funciones sumar y restar. Pedir dos números con prompt, validar con isNaN y mostrar resultados por consola)

// function suma(num1, num2) {
//   return num1 + num2;
// }

// function resta(num1, num2) {
//   return num1 - num2;
// }

// let num1 = parseFloat(prompt("Ingresa el primer numero"));
// let num2 = parseFloat(prompt("Ingresa el segundo numero"));

// if (isNaN(num1) || isNaN(num2)) {
//   console.log("ERROR. Has introducido al menos, un valor no numérico");
// } else {
//   console.log("La suma es:", suma(num1, num2));
//   console.log("La resta es", resta(num1, num2));
// }

// Ejercicio 3 - Validar edad (Función que reciba una edad, devuelva Mayor o menor y mostrar resultado)

// function edad(num1) {
//   if (num1 >= 18) {
//     return "Mayor";
//   } else {
//     return "Menor";
//   }
// }

// let edadPersona = parseFloat(prompt("Ingrese su edad: "));

// if (isNaN(edadPersona)) {
//   console.log("Edad incorrecta.");
// } else {
//   console.log(edad(edadPersona));
// }

// Ejercicio 4 - Función con parámetro (Crear una función que reciba otra función, ejecutarla, pasar una función flecha)

function ejecutarFuncion(fn) {
	if (typeof fn === "function") {
		fn();
	} else {
		console.log("El parámetro recibido no es una función");
	}
}

// Ejemplo: función flecha definida y pasada como argumento
const miFlecha = () => console.log("Función flecha ejecutada");
ejecutarFuncion(miFlecha);

// Ejemplo: pasar una función flecha inline
ejecutarFuncion(() => console.log("Flecha inline ejecutada"));


