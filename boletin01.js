// Ej 1
function datos_personales() {
    let nombre = window.prompt("Introduce tu nombre: ");
    let edad = parseInt(window.prompt("Introduce tu edad: "));
    let ciudad = window.prompt("Introduce tu ciudad: ");
    console.log("Me llamo " + nombre + ", tengo " + edad + " años y vivo en " + ciudad + ".");
}

// datos_personales();

// Ej 2
function area_rectangulo() {
    let base = parseInt(window.prompt("Introduce la base en cm: "));
    let altura = parseInt(window.prompt("Introduce la altura en cm: "));
    let area = base * altura;
    console.log("El área del rectángulo es " + area + " cm²");
}

// area_rectangulo();

// Ej 3
function conversion_temperatura() {
    let celsius = parseInt(window.prompt("Introduce los grados Celsius: "));
    let fahrenheit = celsius * 1.8 + 32;
    console.log(celsius + "°C son " + fahrenheit + "°F");
}

// conversion_temperatura();

// Ej 4
function precio_compra() {
    let producto = parseInt(window.prompt("Introduce el precio del producto: "));
    let cantidad = parseInt(window.prompt("Introduce la cantidad: "));
    let importe = producto * cantidad;
    console.log("El importe total es: " + importe + "€");
}

// precio_compra();

// Ej 5
function nomina_sencilla() {
    let bruto = parseInt(window.prompt("Introduce tu salario bruto: "));
    let neto = bruto - (bruto * 15 / 100);
    console.log("El salario neto es: " + neto + "€");
}

// nomina_sencilla();

// Ej 6
function conversion_segundos() {
    let segundos = parseInt(window.prompt("Introduce los segundos totales: "));
    let aux = segundos;
    let horas = segundos / 3600;
    segundos = segundos % 3600;
    let minutos = segundos / 60;
    segundos = segundos % 60;
    console.log(aux + " segundos son: " + Math.round(horas) + "h, " + Math.round(minutos) + "m, " + segundos + "s.");
}

// conversion_segundos();

// Ej 7
function intercambio_valores() {
    let a = parseInt(window.prompt("Introduce la variable a: "));
    let b = parseInt(window.prompt("Introduce la variable b: "));
    console.log("El valor de a antes era: " + a);
    console.log("El valor de b antes era: " + b);
    let auxa = a;
    a = b;
    b = auxa;
    console.log("El valor de a ahora es: " + a);
    console.log("El valor de b ahora es: " + b);
}

// intercambio_valores();

// Ej 8
function mayor_edad() {
    let edad = parseInt(window.prompt("Introduce tu edad: "));
    if (edad >= 18) {
        console.log("Eres mayor de edad.");
    } else {
        console.log("Eres menor de edad.");
    }
}

// mayor_edad();

// Ej 9
function numero_positivo() {
    let num = parseInt(window.prompt("Introduce un número: "));
    if (num > 0) {
        console.log("El número es positivo.");
    } else if (num < 0) {
        console.log("El número es negativo.");
    } else {
        console.log("El número es cero.");
    }
}

// numero_positivo();

// Ej 10
function numero_mayor() {
    let num1 = parseInt(window.prompt("Introduce el primer número: "));
    let num2 = parseInt(window.prompt("Introduce el segundo número: "));
    if (num1 > num2) {
        console.log("El número " + num1 + " es mayor que el número " + num2 + ".");
    } else if (num2 > num1) {
        console.log("El número " + num2 + " es mayor que el número " + num1 + ".");
    } else {
        console.log("Los números son iguales.");
    }
}

// numero_mayor();

// Ej 11
function calificacion() {
    let nota = parseInt(window.prompt("Introduce una nota: "));
    if (nota < 5) {
        console.log("El " + nota + " es un suspenso.");
    } else if (nota == 5 || nota == 6) {
        console.log("El " + nota + " es un aprobado.");
    } else if (nota == 7 || nota == 8) {
        console.log("El " + nota + " es un notable.");
    } else {
        console.log("El " + nota + " es un sobresaliente.");
    }
}

// calificacion();

// Ej 12
function anyo_bisiesto() {
    let anyo = parseInt(window.prompt("Introduce un año: "));
    if (anyo % 100 != 0 && anyo % 4 == 0 || anyo % 400 == 0) {
        console.log("El año " + anyo + " es bisiesto.");
    } else {
        console.log("El año " + anyo + " no es bisiesto.");
    }
}

// anyo_bisiesto();

// Ej 13
function calculadora() {
    let num1 = parseInt(window.prompt("Introduce el primer número: "));
    let num2 = parseInt(window.prompt("Introduce el segundo número: "));
    let operador = window.prompt("Introduce el operador: ");
    if (operador == "+") {
        console.log(num1 + " + " + num2 + " = " + (num1 + num2));
    } else if (operador == "-") {
        console.log(num1 + " - " + num2 + " = " + (num1 - num2));
    } else if (operador == "*") {
        console.log(num1 + " * " + num2 + " = " + (num1 * num2));
    } else if (operador == "/") {
        if (num2 == 0) {
            console.log("No se puede dividir entre 0.");
        } else {
            console.log(num1 + " / " + num2 + " = " + (num1 / num2));
        }
    } else {
        console.log("Operador no válido.");
    }
}

// calculadora();

// Ej 14
function numeros_1al10() {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}

// numeros_1al10();

// Ej 15
function numeros_pares() {
    for (let i = 2; i <= 100; i++) {
        if(i%2==0){
            console.log(i);
        }
    }
}

// numeros_pares();

// Ej 16
function multiplicar() {
    let num = parseInt(window.prompt("Introduce un número: "));
    console.log("La tabla de multiplicar del " + num + " es:");
    for(let i = 0; i <= 10; i++) {
        console.log(num*i);
    }
}

// multiplicar();

// Ej 17
function suma_hastaN() {
    let numero = parseInt(window.prompt("Introduce un número: "));
    let result = 0;
        for (let i = 1; i <= numero; i++) {
            result += i;
        }
        console.log("La suma hasta " + numero + " es " + result);
}

// suma_hastaN();

// Ej 18
function factorial() {

    let numero = parseInt(window.prompt("Introduce un número: "));
    let aux = numero;

    if (numero > 0) {
        for (let i = 1; i < aux; i++) {
            numero = numero * i;
        }
        console.log("El factorial de " + aux + " es " + numero);
    } else {
        console.error("El número debe ser positivo.");
    }
}

// factorial();

// Ej 19
function multiplosDe3() {
    
}