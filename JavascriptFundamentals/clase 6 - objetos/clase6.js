// Empezaremos a trabajar con objetos, como definir sus atributos y asignarle valores
// a cada uno de ellos. 

// Un objeto que reúne ciertas características de un objeto de la vida real.

// Con llaves delimitamos un objeto en JS

var juan = {
    nombre: 'Juan',
    apellido: 'Marcos',
    edad: 28
}

// Un objeto no es nada más que clave (izquierda, key) y valor (derecha, value)

var manuel = {
    nombre: 'Manuel',
    apellido: 'Calle',
    edad: 27
}

// Usando la función que antes teniamos:

function imprimirNombreEnMayuscula(nombre) {
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

// Si queremos imprimir el nombre de Juan y Manuel, se usa así:
// el nombre de la variable que almacena el objeto + . + la variable del objeto (o atributo)
// que queremos acceder

imprimirNombreEnMayuscula(juan.nombre);
imprimirNombreEnMayuscula(manuel.nombre);

// Podemos mejorar la función haciendo que reciba como tal el OBJETO de la persona y
// en la función se procese el llamado al nombre:

function imprimirNombreEnMayusculaMejorado(obj) {
    var nombre = obj.nombre;
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombreEnMayusculaMejorado(juan);
imprimirNombreEnMayusculaMejorado(manuel);

// Otra posibilidad:

function imprimirNombreEnMayusculaMejorado2(persona) {
    var nombre = persona.nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombreEnMayusculaMejorado2(juan);
imprimirNombreEnMayusculaMejorado2(manuel);

// Otra manera:

function imprimirNombreEnMayusculaMejorado3(persona) {
    console.log(persona.nombre.toUpperCase());
}

imprimirNombreEnMayusculaMejorado3(juan);
imprimirNombreEnMayusculaMejorado3(manuel);

// Una manera actual con las últimas versiones de JS, en donde a la función ya se le dice
// que se recibirá un objeto, y que de ese objeto nos interesa el atributo nombre:

function imprimirNombreEnMayusculaMejorado4({ nombre }) {
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculaMejorado4(juan);
imprimirNombreEnMayusculaMejorado4(manuel);

// Con objetos no solamente los podemos referir a variables, podemos llamar la función
// con un objeto insitu:

imprimirNombreEnMayusculaMejorado4({ nombre: 'Pepito'});

// Si se llama sin argumentos saldrá error puesto que JS tratará de acceder al atributo
// nombre de algo que terminará siendo undefined. O lo que es lo mismo, mandarle
// un objeto que no posea un atributo que en la función se llama.