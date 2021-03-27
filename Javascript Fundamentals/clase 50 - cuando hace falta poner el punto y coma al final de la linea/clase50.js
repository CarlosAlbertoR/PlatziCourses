// El punto y coma es opcional en JavaScript, excepto en algunos casos:

// Cuando usamos varias instrucciones en una mísma línea
// Al comenzar la próxima línea con un array
// Al comenzar la próxima línea con un template string

// El punto y coma, qué dolor de cabeza en JS, ¿no?

// Utilizar punto y coma en JS es opcional, excepto en algunos casos:

// Ejemplo 1:

console.log('Hola'); // Obligatorio cuando la siguiente línea es con un array
[1, 2, 3]

// Ejemplo 2

console.log('Hola 2'); // Obligatorio cuando la siguiente línea es un template string
`Hey que tal`

// Otro caso es cuando tenemos una función:

function calcularDoble(numero) {
    return // Cuando es un enter en return lo toma como punto y coma
    {
                original: numero, doble: numero * 2
    }
}