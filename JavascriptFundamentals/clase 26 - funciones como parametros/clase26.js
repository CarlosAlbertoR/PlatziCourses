// Antes de empezar con el Asincronismo en JS, debe ser claro que podemos
// pasar funciones como parámetros. Hasta ahora pasabamos parámetros como
// texto, el nombre de la persona, o números como su altura o peso,
// pero debemos ver que también podemos pasar funciones como parámetros también.

// Utilizando el ejemplo anterior:

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(fn) { // Modificamos saludar para que reciba la función de responder Saludo
        var {nombre, apellido} = this;
        console.log(`Hola, me llamo ${nombre} ${apellido}`);
        if (fn) { // Verificamos si recibimos la función (hay valores que ser puestos dentro de un if verdaderos o falsos, vease truthy falsy en JS)
            fn(nombre, apellido);
        }
    }

    soyAlto() {
        return this.altura > 1.8;
    }
}


class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura); // Esta es la manera de constructor en clase heredada
    }
    saludar(fn) {
        var {nombre, apellido} = this;
        console.log(`Hola me llamo ${nombre} ${apellido} y soy Desarrollador`);
        if (fn) {
            fn(nombre, apellido, true);
        }
    }
}

// Ahora lo que haremos es cada vez que saludamos a alguno podamos responder a ese saludo

// Escribamos funcion responder:

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`);
    if (esDev) {
        console.log('No sabía que eras desarrollador');
    }
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.72);
var erika = new Persona('Erika', 'Luna', 1.65);
var arturo = new Desarrollador('Arturo', 'Martinez', 1.89);

sacha.saludar();
erika.saludar(responderSaludo);
arturo.saludar(responderSaludo);

// Aquí en esta clase aprendimos que le podemos apsar una función a otra
// y hacer que se ejecute.
