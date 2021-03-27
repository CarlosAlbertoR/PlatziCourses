// Cuando hablamos de contexto en JS, hablamos de quien es el objeto this cuando se ejecuta un código
// Un error de los más comunes aqui es de que no se puede ejecutar un metodo porque es undefined, y sucede cuando this
// no es quien esperamos que sea

// Aprenderemos 3 métodos para poder cambiar el contexto de una función:

const juan = {
    nombre: 'Juan',
    edad: 20
}

function saludar () {
    console.log(`Hola, mi nombre es ${this.nombre}`); // Hola, mi nombre es undefined.
}

// Es algo que podriamos esperar ya que en ese contexto this es window, ya que window es quien la ejecuta. 

// Para cambiar el this de dicha función se puede usar bind, que cambia el this en una función

const saludarAJuan = saludar.bind(juan); // Bind lo que hace es devolvernos una nueva función atando el this que le pasamos
// a la función inicial

// Finalmente es saludarAJuan la que ejecutamos para que salude bien

// Si se le quiere dar la función saludar (una misma función) a otro objeto como otra persona, debemos crear otra variable similar
// a saludarAJuan y ejecutar esa. 

// Bind no modifica a la función original. AL usar bind siempre se devuelve una nueva función que tiene un contexto de this
// diferente a la función original.  

// Podemos hacer:

function saludar2 (saludo = 'Hola') { // COlocamos a que reciba un parametro, pero de no mandarse tiene un valor por default
    console.log(`${saludo}, mi nombre es ${this.nombre}`); 
}

setTimeout(saludar2.bind(juan, 'Hola parce'), 1000); // El primer parametro sera el contexto, el segundo es el primer argumento y 
// los demas de la funcion

// Otra manera es call y apply: que si ejecutan la función

saludar.call(juan, 'Hola parce'); // Pasado de parametros de call: el primero el this (contexto), el segundo el primer parametro de la funcion etc

// Apply:

saludar.apply(juan, ['Hola parce']);

// La unica diferencia entre call y apply es que apply el segundo parametro es una array con todos los parametros que recibe la función

// Manejar el this es algo que no podemos perder de vista cuando desarrollamos en JS, sobre todo en código asíncrono