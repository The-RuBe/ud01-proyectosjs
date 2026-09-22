function primeros_ejemplos() {
    console.log("Hola mundo");

    // Ejemplo 1
    var nombre1 = window.prompt("Introduce tu nombre: ");
    console.log(`Hola, ${nombre1}!`);
    console.log("Hola, " + nombre1 + "!");

    // Ejemplo 2
    var nombre2 = "Rubén";
    console.log(`Hola, ${nombre2}!`);
    console.log("Hola, " + nombre2 + "!");
}
// Ejemplo 3
function calcula_edad() {
    var edad = window.prompt("Introduce tu edad: ");
    if (edad >= 18) {
        console.log("Eres mayor de edad");
    }
    else {
        console.log("Eres menor de edad");
    }
}

// calcula_edad();


// Definicion de variables: let var const
// const: constante (su valor no varía)
// let: ámbito de bloque
// var: ámbito de función

// Ejemplo 4 
function ejemplo_variables() {
    let auxiliar;
    auxiliar = 10;
    console.log(auxiliar);
    auxiliar = "Mi casa es roja";
    console.log(auxiliar);
    auxiliar = true;
    console.log(auxiliar);
    auxiliar = 1432.12;
}

// Ejemplos 5
function potencia(base, exponente) {

    while (exponente > 1) {
        base *= base;
        exponente--;
    }

    return base;
}

let base = 10;
let exponente = 2;
// console.log(`El resultado de ${base}^${exponente} es: ${potencia(base, exponente)}`)

// Ejercicio 8: Más bucles, solicita número y muestra el acumulado de 10 en 10.
function suma_diez(num_vueltas) {
    let result = 0;
    while (num_vueltas > 0) {
        result += 10;
        num_vueltas--;
    }
    return result;
}
//let num_vueltas = window.prompt("Introduce el número de vueltas: ");
//if (num_vueltas > 0) {
//    console.log('El resultado es: ' + suma_diez(num_vueltas));
//} else {
//    console.log("El número de vueltas debe ser mayor que 0.");
//}

function calculadora() {
    let num1 = parseInt(window.prompt("Introduce el primer operando: "));
    let num2 = parseInt(window.prompt("Introduce el segundo operando: "));
    let opc = 0;

    let resultado = 0;

    while (opc != 5) {
        opc = window.prompt("Elija una operación: \n" +
            "1. Suma \n" +
            "2. Resta \n" +
            "3. Multiplicación \n" +
            "4. División \n" +
            "5. Salir");

        if (opc == 1) {
            console.log("El resultado de la suma es: " + (num1 + num2));
        } else if (opc == 2) {
            console.log("El resultado de la resta es: " + (num1 - num2));
        } else if (opc == 3) {
            console.log("El resultado de la multiplicación es: " + (num1 * num2));
        } else if (opc == 4) {
            if (num2 == 0) {
                console.log("Error: No se puede dividir entre cero.");
            } else {
                console.log("El resultado de la división es: " + (num1 / num2));
            }
        } else if (opc == 5) {
            console.log("Saliendo de la calculadora.");
            break;
        } else {
            console.log("Opción no válida.");
            break;
        }
    }
}

calculadora();