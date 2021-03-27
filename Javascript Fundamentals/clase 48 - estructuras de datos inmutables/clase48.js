// Las estructuras de datos inmutables nos permiten deshacernos del efecto de lado, o side effect, que es cuando
// algo se modifica sin nosotros saberlo (efectos colaterales), es algo bueno usar estructuras de datos inmutables.

// Ejemplo:

var juan = {
    nombre: 'Juan',
    edad: 20
}

const cumpleanos = persona => persona.edad++;

// Si la llamamos en cada momento se ve modificado en sí el objeto (efecto de lado, llamar una función), dicha
// función modifica cosas por fuera de la misma función, un efecto de lado que quisieramos evitar.

// Lo que hacemos es una función inmutable

const cumpleanosInmutable = persona => ({
    ...persona, // Se usa para desglosar y colocar los atributos
    edad: persona.edad + 1 // Aquí pisamos o sobreescribimos el valor de la edad de la persona aumentándole un año
});

// Cuando hacemos eso, estamos devolviendo un nuevo objeto creado en memoria, no se modifica el objeto original

// Usandolo en el browser vemos que devuelve un objeto nuevo y distinto al original y el original no es modificado

// La desventaja de esto es que tendremos que escribir una nueva variable para el nuevo objeto creado para poder referirnos a él
// (guardandolo)

// Se sugiere bastante usar estructuras de datos inmutables a la hora de desarrollar en JS