// Antes vimos la estructura de repetición for, que es la más básica
// que repite código cierta cantidad de veces. Ahora veremos una estructura
// más avanzada, que es el ciclo while, que nos permite repetir código
// hasta que se cumpla una condición.

var juan = {
    nombre: 'Juan',
    edad: 20,
    peso: 59
}

console.log(`Al inicio del año ${juan.nombre} pesa ${juan.peso} kg`);

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_ANO = 365; 

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;

// Juan fue al nutricionista y le dijeron que debe adelgazar 3 kg, es su meta

const META = juan.peso - 3;

// Arrow function

const comeMucho = () => Math.random() < 0.3; // El 30% de los días come
const realizaDeporte = () => Math.random() < 0.4; // El 40% de los días hace deporte

// El while funciona así: el código entre las llaves se repetirá siempre que la condición
// en el paréntesis se cumpla (mientras que sea verdadera). 

// Cantidad de dias

var dias = 0;

while (juan.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(juan);
    }
    if (realizaDeporte()) {
        adelgazar(juan);
    }
    dias += 1;
}

// La gran ganancia de los ciclos while es que nos permiten ejecutar un código
// muchas veces, y no necesariamente un número fijo como un for. Eso nos permite
// ejecutar un código simplemente hasta que se cumpla o deje de cumplir una condición,
// y eso lo pudimos ver con el uso de números aleatorios: con el número de días
// vimos que se ejecutó en cada runeo distintas veces.

console.log(`Pasaron ${dias} dias hasta que ${juan.nombre} adelgazó 3 kg`);

