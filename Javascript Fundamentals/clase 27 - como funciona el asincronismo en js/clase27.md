¿Cómo funciona el Asincronismo en JS?
JS solo puede hacer una cosa a la vez. No importa cuántos núcleos
tenga la PC o el server sobre el que corra. JS solo podrá ejecutar
una tarea a la vez. 

Aunque JS no es multitarea, puede delegar la ejecución de ciertas funciones
a otros procesos. Este modelo de concurrencia se llama Event Loop. 

Véamoslo con un ejemplo simple de un programa de compra y venta de Bitcoins.

JS tiene algo llamado Pila de ejecución, o CallStack, donde va poniendo
las llamadas a funciones según el orden de ejecución de nuestro programa,
si una función llama a otra, entonces se agrega a la pila. Cuando termina
de ejecutar una función, la saca de la Pila y la desecha. 

En algún momento dado nuestro programa necesita saber el precio de Bitcoins
porque el usuario compró Bitcoins con pesos mexicanos, diciéndole qué función
tiene qué ejecutar cuando esos datos estén listos. 

Le da la tarea al navegador de averigüar el precio de Bitcoins en una página web, y que cuando esté lista esa petición ejecute cierta función. Lo que el navegador se lleva es un Callback, que es una función que JS ejecutará cuando regrese la respuesta del servidor. 

Mientras llega la respuesta, JS seguirá ejecutando el programa principal, y cuando llegue la respuesta, la función a ejecutar (CallBack) irá a otro lado: la cola de tareas. Allí las tareas se encolan según el orden en el que van llegando. ¿Qué tareas van a parar a esta cola? peticiones a servidores, interacciones visuales, navegación client-side, eventos que se realizan cada cierto tiempo. 

Solo hasta que el programa se quede sin funciones en la pila de ejecución, allí irá a buscar las funciones en la cola de tareas. Por eso es que hay que tener cuidado de no generar un cuello de botella en la pila de ejecución. Si JS se queda ejecutando tareas muy pesadas, las funciones de la cola de tareas tardarán mucho tiempo en ejecutarse. 

Por eso, hay que repetirse estas palabras todas las noches antes de irse a dormir: No voy a bloquear el Event Loop. 