// Los closures son uno de los conceptos más importantes de JS, entenderlos hará que dominemos el lenguaje de otra manera

// Un closure es una función que recuerda el estado de las cosas cuando fue invocada. Qué es esto?

// Veamoslo con un ejemplo 

// Hagamos una función que creará saludos

// La primera es una función generadora o creadora de otras funciones

const crearSaludo = (finalDeFrase) => {
    return function (nombre) { // Función anónima: esta función recuerda el parámetro finalDeFrase que se utilizaron para los distintos saludos
        console.log(`Hola ${nombre} ${finalDeFrase}`); // Accedemos a la variable finalDeFrase, esto es lo más interesante de todo 
    }
};

const saludoArgentino = crearSaludo('che'); // Los closures son eso. Funciones que recuerdan datos cuando se crearon (en su estado)
const saludoMexicano = crearSaludo('güey');
const saludoColombiano = crearSaludo('amigo');


saludoArgentino('Juan');
saludoMexicano('Juan');
saludoColombiano('Juan');

