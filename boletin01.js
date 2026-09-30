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
    let numero = parseInt(window.prompt("Introduce un número: "));
    if (numero > 0) {
        console.log("El número es positivo.");
    } else if (numero < 0) {
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
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

// numeros_pares();

// Ej 16
function multiplicar() {
    let numero = parseInt(window.prompt("Introduce un número: "));
    console.log("La tabla de multiplicar del " + numero + " es:");
    for (let i = 0; i <= 10; i++) {
        console.log(numero * i);
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
    let numero = parseInt(window.prompt("Introduce un número: "));
    console.log("Los múltiplos de 3 hasta " + numero + " son:");
    for (let i = 1; i <= numero; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}

// multiplosDe3();

// Ej 20
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

// saludar("Rubén");

// Ej 21
function calcularArea(base, altura) {
    console.log(`El área es ${base * altura} cm`)
}

// calcularArea(2, 5);

// Ej 22
function esMayorDeEdad(edad) {
    console.log(edad >= 18 ? true : false);
}

// esMayorDeEdad(20);
// esMayorDeEdad(15);
// esMayorDeEdad(18);

// Ej 23
function obtenerMayor(num1, num2) {
    console.log(num1 == num2 ? `Los números son iguales.` : num1 > num2 ? `El ${num1} es mayor que el ${num2}.` : `El ${num2} es mayor que el ${num1}.`);
}

// obtenerMayor(5, 10);
// obtenerMayor(10, 5);
// obtenerMayor(5, 5);

// Ej 24
function conversion_temperatura2(celsius) {
    console.log(celsius + "°C son " + (celsius * 1.8 + 32) + "°F");
}

// conversion_temperatura2(32);

// Ej 25
function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

function calculadora_con_funciones() {
    let num1 = parseFloat(window.prompt("Introduce el primer número: "));
    let num2 = parseFloat(window.prompt("Introduce el segundo número: "));
    let operador = window.prompt("Introduce la operación: ");
    let resultado;

    if (operador == "+") {
        resultado = sumar(num1, num2);
    } else if (operador == "-") {
        resultado = restar(num1, num2);
    } else if (operador == "*") {
        resultado = multiplicar(num1, num2);
    } else if (operador == "/") {
        if (num2 == 0) {
            console.log("No se puede dividir entre 0.");
            return;
        }
        resultado = dividir(num1, num2);
    } else {
        console.log("Operación no válida.");
        return;
    }

    console.log(`${num1} ${operador} ${num2} = ${resultado}`);
}

// calculadora_con_funciones();

// Ej 26
function validador_notas(nota) {
    if (nota < 5) {
        console.log(`El ${nota} es un suspenso.`);
    } else if (nota == 5 || nota == 6) {
        console.log(`El ${nota} es un aprobado.`);
    } else if (nota == 7 || nota == 8) {
        console.log(`El ${nota} es un notable.`);
    } else {
        console.log(`El ${nota} es un sobresaliente.`);
    }
}

// validador_notas(4);
// validador_notas(5);
// validador_notas(6);
// validador_notas(7);
// validador_notas(8);
// validador_notas(9);
// validador_notas(10);

// Ej 27
function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            return false;
        }
    }
    return true;
}

// console.log(esPrimo(13));
// console.log(esPrimo(9));

// Ej 28
function adivinaNumero28() {
    let secreto = Math.floor(Math.random() * 10) + 1;
    let numero = parseInt(window.prompt("Adivina el número del 1 al 10: "));

    if (numero == secreto) {
        console.log("¡Has acertado!");
    } else if (numero > secreto) {
        console.log("El número introducido es mayor.");
    } else {
        console.log("El número introducido es menor.");
    }
}

// adivinaNumero28();

// Ej 29
function menuOperaciones29() {
    let opcion;

    while (opcion != "5") {
        console.log("1. Sumar");
        console.log("2. Restar");
        console.log("3. Multiplicar");
        console.log("4. Dividir");
        console.log("5. Salir");
        opcion = window.prompt("Elige una opción: ");

        if (opcion == "5") {
            console.log("Fin del programa.");
        } else if (opcion == "1" || opcion == "2" || opcion == "3" || opcion == "4") {
            let num1 = parseFloat(window.prompt("Introduce el primer número: "));
            let num2 = parseFloat(window.prompt("Introduce el segundo número: "));
            let resultado;

            if (opcion == "1") {
                resultado = sumar(num1, num2);
            } else if (opcion == "2") {
                resultado = restar(num1, num2);
            } else if (opcion == "3") {
                resultado = multiplicar(num1, num2);
            } else if (num2 == 0) {
                console.log("No se puede dividir entre 0.");
                continue;
            } else {
                resultado = dividir(num1, num2);
            }

            console.log("Resultado: " + resultado);
        } else {
            console.log("Opción no válida.");
        }
    }
}

// menuOperaciones29();

// Ej 30
function potencia30(base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}

function calculadoraAvanzada30() {
    let opcion;

    while (opcion != "6") {
        console.log("1. Sumar");
        console.log("2. Restar");
        console.log("3. Multiplicar");
        console.log("4. Dividir");
        console.log("5. Potencia");
        console.log("6. Salir");
        opcion = window.prompt("Elige una opción: ");

        if (opcion == "6") {
            console.log("Fin del programa.");
        } else if (opcion == "1" || opcion == "2" || opcion == "3" || opcion == "4" || opcion == "5") {
            let num1 = parseFloat(window.prompt("Introduce el primer número: "));
            let num2 = parseFloat(window.prompt("Introduce el segundo número: "));
            let resultado;

            if (opcion == "1") {
                resultado = sumar(num1, num2);
            } else if (opcion == "2") {
                resultado = restar(num1, num2);
            } else if (opcion == "3") {
                resultado = multiplicar(num1, num2);
            } else if (opcion == "4") {
                if (num2 == 0) {
                    console.log("No se puede dividir entre 0.");
                    continue;
                }
                resultado = dividir(num1, num2);
            } else {
                resultado = potencia30(num1, num2);
            }

            console.log("Resultado: " + resultado);
        } else {
            console.log("Opción no válida.");
        }
    }
}

// calculadoraAvanzada30();

// Ej 31
function calcularMedia31(suma, cantidad) {
    return suma / cantidad;
}

function obtenerCalificacion31(media) {
    if (media < 5) {
        return "Suspenso";
    } else if (media < 7) {
        return "Aprobado";
    } else if (media < 9) {
        return "Notable";
    } else {
        return "Sobresaliente";
    }
}

function sistemaCalificaciones31() {
    let cantidad = parseInt(window.prompt("¿Cuántas notas vas a introducir? "));
    let suma = 0;

    while (cantidad < 1) {
        cantidad = parseInt(window.prompt("Introduce una cantidad mayor que 0: "));
    }

    for (let i = 1; i <= cantidad; i++) {
        let nota = parseFloat(window.prompt("Introduce la nota " + i + " (0-10): "));

        while (nota < 0 || nota > 10) {
            nota = parseFloat(window.prompt("La nota debe estar entre 0 y 10: "));
        }

        suma += nota;
    }

    let media = calcularMedia31(suma, cantidad);
    console.log("Nota media: " + media);
    console.log("Calificación: " + obtenerCalificacion31(media));
}

// sistemaCalificaciones31();

// Ej 32
function consultarSaldo32(saldo) {
    console.log("Saldo actual: " + saldo + "€");
}

function retirarDinero32(saldo, cantidad) {
    if (cantidad <= 0) {
        console.log("La cantidad debe ser mayor que 0.");
    } else if (cantidad > saldo) {
        console.log("No tienes saldo suficiente.");
    } else {
        saldo -= cantidad;
        console.log("Retirada realizada.");
    }
    return saldo;
}

function ingresarDinero32(saldo, cantidad) {
    if (cantidad <= 0) {
        console.log("La cantidad debe ser mayor que 0.");
    } else {
        saldo += cantidad;
        console.log("Ingreso realizado.");
    }
    return saldo;
}

function cajeroAutomatico32() {
    let saldo = 500;
    let opcion;

    while (opcion != "4") {
        console.log("1. Consultar saldo");
        console.log("2. Retirar dinero");
        console.log("3. Ingresar dinero");
        console.log("4. Salir");
        opcion = window.prompt("Elige una opción: ");

        if (opcion == "1") {
            consultarSaldo32(saldo);
        } else if (opcion == "2") {
            let cantidad = parseFloat(window.prompt("¿Cuánto quieres retirar? "));
            saldo = retirarDinero32(saldo, cantidad);
        } else if (opcion == "3") {
            let cantidad = parseFloat(window.prompt("¿Cuánto quieres ingresar? "));
            saldo = ingresarDinero32(saldo, cantidad);
        } else if (opcion != "4") {
            console.log("Opción no válida.");
        }
    }
}

// cajeroAutomatico32();

// Ej 33
function jugarAdivinanza33() {
    let secreto = Math.floor(Math.random() * 100) + 1;
    let numero = 0;
    let intentos = 0;

    while (numero !== secreto) {
        numero = parseInt(window.prompt("Adivina el número del 1 al 100: "));
        intentos++;

        if (numero > secreto) {
            console.log("El número secreto es menor.");
        } else if (numero < secreto) {
            console.log("El número secreto es mayor.");
        }
    }

    console.log("¡Has acertado en " + intentos + " intentos!");
}

// jugarAdivinanza33();

// Ej 34
function kilometrosAMillas34(kilometros) {
    return kilometros * 0.621;
}

function celsiusAFahrenheit34(celsius) {
    return celsius * 1.8 + 32;
}

function kilogramosALibras34(kilogramos) {
    return kilogramos * 2.205;
}

function eurosADolares34(euros) {
    return euros * 1.1;
}

function conversorUnidades34() {
    let opcion = "";

    while (opcion != "5") {
        console.log("1. Kilómetros a millas");
        console.log("2. Celsius a Fahrenheit");
        console.log("3. Kilogramos a libras");
        console.log("4. Euros a dólares");
        console.log("5. Salir");
        opcion = window.prompt("Elige una conversión: ");

        if (opcion == "5") {
            console.log("Fin del programa.");
        } else if (opcion == "1" || opcion == "2" || opcion == "3" || opcion == "4") {
            let valor = parseFloat(window.prompt("Introduce el valor: "));
            let resultado;

            if (opcion == "1") {
                resultado = kilometrosAMillas34(valor) + " millas";
            } else if (opcion == "2") {
                resultado = celsiusAFahrenheit34(valor) + " °F";
            } else if (opcion == "3") {
                resultado = kilogramosALibras34(valor) + " libras";
            } else {
                resultado = eurosADolares34(valor) + " dólares";
            }

            console.log("Resultado: " + resultado);
        } else {
            console.log("Opción no válida.");
        }
    }
}

// conversorUnidades34();

// Ej 35
function comprobarCredenciales35(usuario, contrasena) {
    return usuario === "alumno" && contrasena === "1234";
}

function mostrarAcceso35(acceso) {
    if (acceso) {
        console.log("Acceso concedido.");
    } else {
        console.log("Usuario o contraseña incorrectos.");
    }
}

function controlAcceso35() {
    let acceso = false;

    for (let intento = 1; intento <= 3; intento++) {
        let usuario = window.prompt("Introduce el usuario: ");
        let contrasena = window.prompt("Introduce la contraseña: ");
        acceso = comprobarCredenciales35(usuario, contrasena);
        mostrarAcceso35(acceso);

        if (acceso) {
            return;
        }
    }

    console.log("Acceso bloqueado.");
}

// controlAcceso35();

// Ej 36
function calcularSubtotal36(precio, cantidad) {
    return precio * cantidad;
}

function calcularDescuento36(subtotal) {
    if (subtotal < 50) {
        return 0;
    } else if (subtotal <= 100) {
        return subtotal * 0.05;
    } else if (subtotal <= 200) {
        return subtotal * 0.10;
    } else {
        return subtotal * 0.15;
    }
}

function calcularIva36(importe) {
    return importe * 0.21;
}

function facturarProducto36() {
    let precio = parseFloat(window.prompt("Introduce el precio del producto: "));
    let cantidad = parseInt(window.prompt("Introduce la cantidad: "));
    let subtotal = calcularSubtotal36(precio, cantidad);
    let descuento = calcularDescuento36(subtotal);
    let importeConDescuento = subtotal - descuento;
    let iva = calcularIva36(importeConDescuento);
    let total = importeConDescuento + iva;

    console.log("Subtotal: " + subtotal + "€");
    console.log("Descuento: " + descuento + "€");
    console.log("IVA: " + iva + "€");
    console.log("Total: " + total + "€");
}

// facturarProducto36();

// Ej 37
function comprobarSaldo37(saldo, cantidad) {
    return saldo >= cantidad;
}

function menuCuenta37() {
    let saldo = 500;
    let opcion = "";

    while (opcion != "5") {
        console.log("1. Consultar saldo");
        console.log("2. Ingresar dinero");
        console.log("3. Retirar dinero");
        console.log("4. Comprobar saldo suficiente");
        console.log("5. Salir");
        opcion = window.prompt("Elige una opción: ");

        if (opcion == "1") {
            consultarSaldo32(saldo);
        } else if (opcion == "2") {
            let cantidad = parseFloat(window.prompt("¿Cuánto quieres ingresar? "));
            saldo = ingresarDinero32(saldo, cantidad);
        } else if (opcion == "3") {
            let cantidad = parseFloat(window.prompt("¿Cuánto quieres retirar? "));
            saldo = retirarDinero32(saldo, cantidad);
        } else if (opcion == "4") {
            let cantidad = parseFloat(window.prompt("¿Qué cantidad quieres comprobar? "));
            if (comprobarSaldo37(saldo, cantidad)) {
                console.log("Tienes saldo suficiente.");
            } else {
                console.log("No tienes saldo suficiente.");
            }
        } else if (opcion != "5") {
            console.log("Opción no válida.");
        }
    }
}

// menuCuenta37();

// Ej 38
function mostrarEstadisticas38(mayor, menor, suma, cantidad) {
    console.log("Mayor: " + mayor);
    console.log("Menor: " + menor);
    console.log("Suma: " + suma);
    console.log("Media: " + (suma / cantidad));
}

function estadisticasNumeros38() {
    let cantidad = parseInt(window.prompt("¿Cuántos números vas a introducir? "));

    while (cantidad < 1) {
        cantidad = parseInt(window.prompt("Introduce una cantidad mayor que 0: "));
    }

    let numero = parseFloat(window.prompt("Introduce el número 1: "));
    let mayor = numero;
    let menor = numero;
    let suma = numero;

    for (let i = 2; i <= cantidad; i++) {
        numero = parseFloat(window.prompt("Introduce el número " + i + ": "));
        suma += numero;

        if (numero > mayor) {
            mayor = numero;
        }
        if (numero < menor) {
            menor = numero;
        }
    }

    mostrarEstadisticas38(mayor, menor, suma, cantidad);
}

// estadisticasNumeros38();

// Ej 39
function obtenerCalificacion39(media) {
    if (media < 5) {
        return "Suspenso";
    } else if (media < 7) {
        return "Aprobado";
    } else if (media < 9) {
        return "Notable";
    } else {
        return "Sobresaliente";
    }
}

function mostrarResultadoNotas39(nombre, suma, cantidad) {
    if (cantidad === 0) {
        console.log("Todavía no has introducido notas.");
        return;
    }

    let media = suma / cantidad;
    console.log("Alumno: " + nombre);
    console.log("Media: " + media);
    console.log("Calificación: " + obtenerCalificacion39(media));
    console.log(media >= 5 ? "El alumno ha aprobado." : "El alumno ha suspendido.");
}

function gestionNotas39() {
    let nombre = window.prompt("Introduce el nombre del alumno: ");
    let suma = 0;
    let cantidad = 0;
    let opcion = "";

    while (opcion != "3") {
        console.log("1. Añadir una nota");
        console.log("2. Mostrar resultados");
        console.log("3. Salir");
        opcion = window.prompt("Elige una opción: ");

        if (opcion == "1") {
            let nota = parseFloat(window.prompt("Introduce una nota (0-10): "));
            while (nota < 0 || nota > 10) {
                nota = parseFloat(window.prompt("La nota debe estar entre 0 y 10: "));
            }
            suma += nota;
            cantidad++;
        } else if (opcion == "2") {
            mostrarResultadoNotas39(nombre, suma, cantidad);
        } else if (opcion != "3") {
            console.log("Opción no válida.");
        }
    }
}

// gestionNotas39();

// Ej 40
function mostrarTotalCompra40(subtotal) {
    let descuento = calcularDescuento36(subtotal);
    let importeConDescuento = subtotal - descuento;
    let iva = calcularIva36(importeConDescuento);

    console.log("Subtotal: " + subtotal + "€");
    console.log("Descuento: " + descuento + "€");
    console.log("IVA: " + iva + "€");
    console.log("Total: " + (importeConDescuento + iva) + "€");
}

function tienda40() {
    let subtotal = 0;
    let opcion = "";

    while (opcion != "2") {
        console.log("1. Añadir un producto");
        console.log("2. Finalizar compra");
        opcion = window.prompt("Elige una opción: ");

        if (opcion == "1") {
            let precio = parseFloat(window.prompt("Introduce el precio: "));
            let cantidad = parseInt(window.prompt("Introduce la cantidad: "));

            if (precio <= 0 || cantidad <= 0) {
                console.log("El precio y la cantidad deben ser mayores que 0.");
            } else {
                subtotal += calcularSubtotal36(precio, cantidad);
                console.log("Producto añadido. Subtotal de la compra: " + subtotal + "€");
            }
        } else if (opcion == "2") {
            mostrarTotalCompra40(subtotal);
            console.log("Compra finalizada.");
        } else {
            console.log("Opción no válida.");
        }
    }
}

// tienda40();