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

// calculadora();

// Ejemplo 13: Pide números hasta introducir el 0 y pinta por pantalla el menor, el mayor y la media

function menor_mayor_media() {
    let numero;
    let menor = Infinity;
    let mayor = -Infinity;
    let media = 0;
    let contador = -1;


    do {
        numero = parseInt(window.prompt("Introduce un número: "));
        if ((numero < menor) & (numero != 0)) {
            menor = numero;
        } else if ((numero > mayor) & (numero != 0)) {
            mayor = numero;
        }

        media += numero;
        contador++;

    } while (numero != 0);

    media = media / contador;

    console.log("El menor es " + menor + ", el mayor es " + mayor + " y la media es " + media + ".");

}

// menor_mayor_media();

// Ejemplo 14: Pide una nota numérica y muestra por pantalla si es Suspenso (0-5), Suficiente (5-6), Bien (6-7), Notable (7-9) o Sobresaliente (9-10). Si la nota no está entre 0 y 10, muestra un mensaje de error.

function nota_calificacion() {
    let nota = parseFloat(window.prompt("Introduce una nota: "));

    if (nota >= 0 & nota < 5) {
        console.log("Un " + nota + " es un insuficiente.")
    }
    else if (nota >= 5 & nota < 6) {
        console.log("Un " + nota + " es un suficiente.")
    }
    else if (nota >= 6 & nota < 7) {
        console.log("Un " + nota + " es un bien.")
    }
    else if (nota >= 7 & nota < 9) {
        console.log("Un " + nota + " es un notable.")
    }
    else if (nota >= 9 & nota <= 10) {
        console.log("Un " + nota + " es un sobresaliente.")
    }
    else {
        console.log("Error: La nota introducida no es válida.")
    }
}

// nota_calificacion();

// Ejemplo 15: Pide un número por pantalla y muestra el número de digitos que tiene.

function cuenta_digitos() {
    // let numero = window.prompt("Introduce un número: ");
    // let numdigitos = numero.length;

    // console.log("Son " + numdigitos + " digitos");

    let numero = parseInt(window.prompt("Introduce un número: "));
    let aux = Math.abs(numero);
    let digitos = 0;

    while (aux >= 1) {
        aux = aux / 10;
        digitos++;
    }

    //if (numero > 0) {
    //    while (numero > 0) {
    //        numero = numero / 10;
    //        digitos++;
    //    }
    // } else if (numero < 0) {
    //    while (numero < 0) {
    //        numero = numero * 10;
    //        digitos++;
    //    }
    // }

    console.log("El número " + numero + " tiene " + digitos + " dígitos.");

}

// cuenta_digitos();

// Ejemplo 16: Calcula el factorial de un número solicitado por pantalla siempre y cuando este número sea positivo y par

function factorial_positivoypar() {

    let numero = parseInt(window.prompt("Introduce un número: "));
    let aux = numero;

    if (numero > 0 & numero % 2 == 0) {
        for (let i = 2; i < aux; i++) {
            numero = numero * i;
        }
        console.log("El factorial de " + aux + " es " + numero);
    } else {
        console.error("El número debe ser positivo y par");
    }
}

// factorial_positivoypar();

// Ejemplo 17: Pide un numero por pantalla e imprimelo invertido

function numero_invertido() {
    let numero = parseInt(window.prompt("Indica un número: "));
    let aux = Math.abs(numero);
    let numero_invertido = 0;
    let cifra = 0;

    while (aux > 0) {
        cifra = aux % 10;
        aux = Math.floor(aux / 10);
        numero_invertido = (numero_invertido * 10) + cifra;
    }

    if (numero < 0) {
        numero_invertido = numero_invertido * (-1);
    }

    console.log("El número " + numero + " invertido es " + numero_invertido);
}

numero_invertido();

// Ejemplo 18: Muestra todos los divisores de un numero solicitado por pantalla

// Ejemplo 19: Numero perfecto: Pide un número y determina si es perfecto. Un número es perfecto cuando la suma de sus divisores propios sea igual al propio número. Por ejemplo, 6 es perfecto porque 1 + 2 + 3 = 6.