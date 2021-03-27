// Si conocemos algún otro lenguaje que soporte Herencias entre Clases,
// tal vez nos preguntemos cómo podemos hacer que un prototipo de otro en JS.
// Como tal esto no se puede porque JS soporta es prototipos, no hay como tal clases.
// Hay prototipos que son objetos que les vamos agregando métodos que reciben
// funciones, saben quién es this y saben cómo ejecutarlas. 

// Pero no existe como tal un sistema donde se diga que un prototipo hereda de otro. 

// Lo que sí existe es algo llamado herencia prototipal. 

// Lo que hacemos es crear una especie de prototipo 'hijo', que será
// un subtipo de Persona, por ejemplo, un desarrollador. 

// Lo que hacemos es que decimos que dicho prototipo de desarrollador 
// en realidad puede responder a un método que le mandamos a invocar
// si no sabe como responderlo él, llamará al prototipo padre, 
// y si tampoco lo encuentra en el padre seguirá dicha cadena de herencia
// prototipal hasta el prototipo base de todos los objetos que es Object

// Si Object no conoce ese mensaje, lanzará error de que no se puede ejecutar.

// Tomemos el ejemplo de la clase anterior:

// Para hacer heredencia creamos una función:

function heredaDe(prototipoHijo, prototipoPadre) {
    // Aqui le decimos al prototipo hijo quién será su prototipo padre
    var fn = function () {}; // noop
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}


Persona.prototype.soyAlto = function () {
    return this.altura > 1.8;
}

// Creamos el constructor de Desarrollador:

function Desarrollador(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

// Por ahora ponemos lo mismo de Persona

// Llamamos la función de herencia:

heredaDe(Desarrollador, Persona); // Poniendo heredaDe antes de pisar metodo es indispensable
// Por que si lo hacemos después estariamos pisando el saludo de Persona
// contra el anterior de Desarrollador que creamos

// Pisaremos o sobreescribiremos la función saludar:

Desarrollador.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy Desarrollador`);
}

// Como hacemos herencia prototipal para que herede de Persona por ejemplo
// la función soyAlto?

// En principio, en JS, hasta hace unos años no había manera de hacerlo. 
// GOTO 24

// Prácticamente lo que se hace es:
// Cada objeto en JS tiene su proto. Una clase sin padre,
// su padre (proto) será Object. En este caso de ejemplo le asignamos
// a Desarrollador su padre (proto) como Persona. 

// Lo que nos debemos de llevar es que, como tal la herencia no existe en JS.
// No hay clases, hay PROTOTIPOS. Existe es HERENCIA PROTOTIPAL, y funciona
// como lo presentamos aquí. 

// Lo que sucede cuando se llama por ejemplo a soyAlto() desde desarrollador
// es que busca el método en su proto como tal de Desarrollador, y como
// no lo encuentra lo busca en el proto de su padre, Persona, ahí si lo encuentra
// y lo ejecuta. Y así sucesivamente entre prototipos. Si ninguno lo resuelve
// llega al final de la cadena que es Object y Object tratará de ejecutar dicho
// método. Si no puede ejecutarlo, se lanzará un error. 