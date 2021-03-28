// Otra estructura de control que viene en JS es el for.
// El for nos permitirá realizar cierta tarea de manera repetitiva,
// poder realizarla cierta cantidad de veces.

// Una persona que va a comer o hará ejercicio en todo un año, en 365 días
// Al finar sabremos su peso final

var juan = {
    nombre: 'Juan',
    edad: 20,
    peso: 59
}

console.log(`Al inicio del año ${juan.nombre} pesa ${juan.peso} kg`);

// Arrow function que aumenta de peso de una sola línea (se pueden quitar bloques de código)
// Sin embargo eso significa que lo va a retornar la línea
// Es equivalente a:

// function aumentarDePeso(persona) {
//     return persona.peso +=200;
// }

const INCREMENTO_PESO = 0.2; // Magic Number es cuando tenemos un numero que es una constante
 const DIAS_DEL_ANO = 365; // Lo mejor es declararla como tal: una constante y
 // no tener números en el código

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;

// El for tiene 3 partes, la parte inicial, la parte de la condición y la parte del incremento
// Usamos un contador
for (var i = 1; i <= 365; i++) {
    var random = Math.random();

    if (random < 0.25) {
        aumentarDePeso(juan);
    } else if (random < 0.5) {
        adelgazar(juan);
    }
}

console.log(`Al final del año ${juan.nombre} pesa ${juan.peso.toFixed(2)} kg`);

// Recordar que toFixed sirve para truncar un número cierta cantidad de decimales