// Hay distintas maneras de comparar variables u objetos en JS. 

var x = 4, y = '4';

// El primer operador de comparación es == en JS.

// Si hacemos x == y, en JS nos dará TRUE. 
// Lo que sucede es tomar los dos valores que se comparan, 
// los lleva a un mismo tipo de dato, seguramente x lo convierte a String
// y los compara, y le da resultado TRUE.

// JS con == lleva los dos valores a un mismo tipo de dato. 

// Si queremos saber si x e y tienen el mismo valor y además son del mismo TIPO
// de variables, se usa el TRIPLE IGUAL: ===

// Efectivamente x === y, nos arroja FALSE. Esto debido a que x es un número e y
// es un string. 

// Es recomendable siempre utilizar el TRIPLE IGUAL. 

// Ahora con objetos:

var juan = {
    nombre: 'Juan'
}

var otraPersona = {
    nombre: 'Juan'
}

// Esencialmente cada objeto es idéntico sin embargo están en variables distintas. 

// Al hacer juan == otraPersona, JS arroja false. 
// Lo que sucede aquí es distinto al ejemplo anterior, en el cual se comparaban
// valores primitivos. acá comparamos objetos y cuando se comparan objetos en JS,
// tanto con == o ===, lo que hace es preguntar por la referencia de la variable
// a la cual estamos utilizando. juan === otraPersona sigue arrojando FALSE.

// Para variables, ¿cuándo la referencia es la misma?, ¿cómo hacemos para que de true?

// Esto lo logramos si reasignamos de esta manera:

var otraPersona2 = juan;

// Lo que estamos diciendo aquí es que la variable otraPersona2 apuntará a la misma
// referencia de variable que apunta juan. Al mismo lugar de memoria que apunta la
// variable juan. Ahora al hacer otraPersona2 == juan da true, ya que son el mismo
// objeto en memoria RAM. Igual con otraPersona2 === juan. 

// Si desglosamos juan dentro de otraPersona3:

var otraPersona3 = {
    ...juan
}

// Esto cuando se compare otraPersona3 == juan seguirá dando false
// Esto sucede porque se está creando un nuevo objeto, y al crear un nuevo objeto
// por más de que desglosemos los atributos de juan, es OTRO LUGAR en la memoria RAM.

// Al igual que como otraPersona2 apunta al mismo lugar de juan,
// si modificamos otraPersona.nombre = 'Pepe', el objeto juan también cambiará. 
// Porque de vuelta: otraPersona2 y sacha apuntan al mismo lugar. 