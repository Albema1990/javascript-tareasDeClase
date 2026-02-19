// Ejercicio 1 Edad minima
// Crear una pagina HTML simple con:
// - Titulo y texto explicando el ejercicio

let edad = 60; // crear variable edad
if(typeof edad == "number"){
    if(edad < 18){
        console.log("No puede ingresar");
    }else {
        console.log("Puede ingresar");
    }
} else {
    console.log("Ingrese un valor numerico");
}

// Ejercicio 2 Par o Impar

let num = 5; // variable numero

if(num%2 == 0){
    console.log("El numero es par");
}else {
    console.log("El numero es impar");
}

// Ejercicio 3 Nota del alumno

let nota = 8.7;

if(nota < 5){
    console.log("Suspenso");
} else if (nota >= 5 || nota <= 8){
    console.log("Aprobado");
}else {
    console.log("Excelente");
}

// Ejercicio 4 Dia de la semana con Switch

let dia = "Lunes";

switch(dia) {
    case 1:
        console.log("Es lunes") ;
        break;
    case 2:
        console.log("Es martes");
        break;
        case 3:
        console.log("Es miercoles");
        break;
        case 4:
        console.log("Es jueves");
        break;
        case 5:
        console.log("Es viernes");
        break;
        case 6:
        console.log("Es sabado");
        break;
        case 7:
        console.log("Es domingo");
        break;
        default:
            console.log("El dia introducido no existe");

}

// Ejercicio 5 Ternario simple

let temperatura = 20;

if (temperatura < 10){
    console.log("Hace frio");
}else {
    console.log("Hace calor");
}
