// Ahora aprenderemos la última estructura de control que se llama Switch.
// Esta estructura de control nos permitirá decidir que código ejecutar de acuerdo a
// múltiples condiciones. 

// Le diremos el horóscopo al usuario (según el signo que el usuario diga)

// Para ello vamos a aprender una función nueva: prompt

// prompt lo que hace es mostrarle una pregunta al usuario y pedirle datos al mismo.

// Le preguntaremos al usuario cuál es su signo:

var signo = prompt('¿Cuál es tu signo?'); // La función prompt devuelve el valor que ingresa el usuario
// Entonces lo guardamos en una variable.

// Analizamos el signo dado por el usuario y dependiendo del signo le diremos
// su horóscopo del día de hoy

// Podriamos hacerlo usando por cada signo, un if. Pero tendríamos un montón de if's.
// Que no es algo tan bueno. Entonces, cuando tengamos un caso en el que tengamos
// muchos if de acuerdo a una variable (distintas posibilidades sujetas a una sola variable)
// Es cuando es conveniente usar un Switch, así:

switch(signo) {
    case 'aries':
        console.log('Continuará la semana con todas las energías para hacer lo que desee. Pero antes que nada, decida qué es lo que quiere para su vida en estos momentos.');
        break;
    case 'tauro':
        console.log('Vea que su falta de concentración y la dispersión de sus energías harán que no pueda concluir con todas las obligaciones. Concéntrese y ponga atención en lo que hace.');
        break;
    case 'geminis':
    case 'géminis': // Se puede crear una acción para dos casos similares
        console.log('Etapa para reordenar las fuerzas internas. Debe entender que no le es conveniente malgastar energías en asuntos que todavía no conoce del todo.');
        break;
    case 'cancer':
    case 'cáncer':
        console.log('Sepa que no es momento para hacer cambios en su vida. Tenga una actitud reflexiva y prudente, de lo contario, podría cometer una grave equivocación.');
        break;
    case 'leo':
        console.log('Probablemente, no esté pasando por un buen momento. Lo mejor será que tenga paciencia, así pronto logrará una satisfacción que lo compensará.');
        break;
    case 'virgo':
        console.log('Comprenda que sostiene la seguridad en usted mismo, será la clave para solucionar todos los conflictos que se le puedan presentar en esta jornada.');
        break;
    case 'libra':
        console.log('Prepárese, ya que su vida social tomará otro color con la presencia de nuevos compromisos. Su entusiasmo se potenciará al máximo, aprovéchelo.');
        break;
    case 'escorpio':
        console.log('Siga manteniendo la confianza en usted mismo, esto le permitirá esquivar todas las dificultades sin demasiado esfuerzo. Continúe encarando las cosas de ese modo.');
        break;
    case 'sagitario':
        console.log('Intente madurar y evite prestar atención a los juicios ajenos, decida por su cuenta. Si sigue retrasando demasiado sus planes, no podrá llevarlos a cabo.');
        break;
    case 'capricornio':
        console.log('Al fin encontrará el camino para cambiar su estilo de vida y sentirse maravillosamente en todo lo que emprenda. No tenga miedo y hágalo.');
        break;
    case 'acuario':
        console.log('Póngase firme, ya que su inseguridad conspirará en contra de sus logros. Momento para planificar las metas y tratar de cumplirlas de una manera ordenada.');
        break;
    case 'piscis':
        console.log('Entienda que el éxito no dependerá solo de sus palabras. En este momento, lo primordial será su imagen personal que lo hará destacarse en todo lo que haga.');
        break;
    default: // El caso default se ejecuta si no entro en ninguno de los casos
        console.log('No es un signo zodiacal válido');
        break;       
}