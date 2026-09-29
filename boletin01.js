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

conversion_segundos();