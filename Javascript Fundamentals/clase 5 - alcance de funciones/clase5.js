// El alcance de funciones es: a qué variables pueden acceder las funciones y que
// valor tendrán esas variables al invocar esa función.

var nombre = 'Juan';

// Función que imprime la variable nombre en mayúsculas

function imprimirNombreEnMayus() {
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombreEnMayus();

// ¿Qué sucede aquí? Dicha función accede a la variable nombre a través de la variable global.
// Se dice que si una variable no está definida dentro del cuerpo de una función
// es una variable de ALCANCE GLOBAL, que se puede acceder desde cualquier función.
// También significa que al definirla de esa manera, arriba y fuera de cualquier función,
// es una variable que se le asigna al OBJETO GLOBAL, que depende de dónde se esté ejecutando JS.

// Por ejemplo, si es en un servidor, seria por ejemplo en el objeto global de Node,
// y si es en el Browser, sería en el objeto global que es la Ventana (Window).

// En nuestro caso es así en el Browser: si hacemos window.nombre en la Consola de Chrome
// nos va a aparecer el valor de Juan. 

// Aquí también sucede otra cosa: sucede un efecto de lado, o un side-effect, o efecto colateral,
// puesto que al invocar la función va a modificar variables que no tiene dentro de ella,
// va a tocar cosas que entre comillas "no le corresponden". Es algo que es mejor evitarlo.

// Una manera de arreglar esto es manejando esta función como un parámetro:

function imprimirNombreEnMayuscula(n) {
    n = n.toUpperCase();
    console.log(n);
}

imprimirNombreEnMayuscula(nombre);

// Podemos ver que ahora la variable n dentro de la función tiene un alcance LOCAL,
// es decir que solo existe dentro del cuerpo de la función. Si deseamos acceder a n
// afuera de la función JS nos responderá que no existe, no está definida. 
// Lo que realmente sucede es que el valor de 'nombre' se copia a la variable 'n', haciendo
// que ese efecto de lado ya no exista más, puesto que se modifica la variable n local y no nombre global.

// Otra cosa que podemos hacer y JS nos lo permite es, para ser más explícitos con la variable n
// en realidad si le podemos decir que es nombre, es decir, usar el mismo nombre de la variable global,
// sin embargo al pasarla como parametro ya JS sabe que es una variable que va a ser copiada
// y que existirá en el ámbito local, así:

function imprimirNombreEnMayuscula2(nombre) {
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombreEnMayuscula2(nombre);

// Ahora para pdoer referirnos a a variable global nombre que tiene valor de Juan
// deberiamos usar window.nombre para ser ultra específicos.

// Importante: toda variable que no esté definida dentro de una función, va a estar
// definida en el objeto global, en este caso window, y vamos a poder llegar a ella
// a través de ese objeto global.