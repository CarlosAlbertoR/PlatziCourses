var edad = 19;

edad = edad + 1;

edad += 1;

edad++;

console.log(edad);

var peso = 75

peso = peso - 2;

peso -= 2;

peso--; // Aqui solo se decrementa en 1

// Distintos operadores de incremento y decremento en Números en JS

var comer_sandwich = 2;

var jugarFutbol = 3;

peso += comer_sandwich;

peso -= jugarFutbol;

// Para sumar números se usa el operador +, para restar -

var precioDeVino = 200.3;

var total = precioDeVino * 3; // Llevamos 3 vinos

// Total = 600.9000000000001, conteo preciso con decimales
// Se puede re ajustar así:

var total2 = precioDeVino * 100 * 3 / 100;

// Total = 600.9. Aquí funcionó porque se sabian los decimales.
// Pero podemos hacer uso de Math.round 

var total3 = Math.round(precioDeVino * 3); // Que de hecho da 601

// Podemos volver un string fijo a un numero así:

var totalStr = total.toFixed(3); // Indicando cuantos numeros decimales tomar, en este caso 3

// Podemos convertir de String a Numero (flotante o entero) con funciones, por ejemplo:

var total4 = parseFloat(totalStr);

// Las operaciones comunes sobre números en JS aquí, junto con las aritméticas correspondientes
// de sumar +, restar -, multiplicar *, dividir /