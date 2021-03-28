// En la clase anterior aprendimos como lograr la herencia prototipal en JS.
// A partir del año 2015, lo que sucede es que JavaScript se fue actualizando
// año tras año. Por eso es que se encuentran distintas versiones con
// ECMAScript 2015, 2016, 2017, etc. 

// ¿Qué es ECMAScript? Es el estándar en el cual se basa JS para conformarse
// como lenguaje. Es decir, todas las funcionalidades que trae el lenguaje. 

// Hay una nueva facilidad para hacer lo mismo de herencia prototipal, 
// pero de una manera mucho más sencilla. 

// No debemos olvidarnos que por debajo siguen siendo todo prototipos. 
// Por más que utilizaremos la palabra Class, que hace referencia a Clase,
// por debajo todo es un prototipo. 

// Tomamos el ejemplo anterior sin la función heredaDe.

// Y ahora utilizaremos la palabra class:

// Aquí decimos que crearemos la clase Persona con un método constructor
// que es el que se ejecutará cuando creemos objetos de dicha clase. 

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }

    soyAlto() {
        return this.altura > 1.8;
    }
}


class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura); // Esta es la manera de constructor en clase heredada
    }
    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`);
    }
}

