console.log("Hola mundo");

// Ejemplo 1
var nombre1 = window.prompt("Introduce tu nombre: ");
console.log(`Hola, ${nombre1}!`);
console.log("Hola, " + nombre1 + "!");

// Ejemplo 2
var nombre2 = "Rubén";
console.log(`Hola, ${nombre2}!`);
console.log("Hola, " + nombre2 + "!");

// Ejemplo 3
var edad = window.prompt("Introduce tu edad: ");
if(edad >= 18) {
    console.log("Eres mayor de edad");
}
else {
    console.log("Eres menor de edad");
}

// Definicion de variables: let var const
// let: ámbito de bloque
// var: ámbito de función
// const: constante (su valor no varía)