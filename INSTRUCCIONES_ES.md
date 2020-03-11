## Desafío de fin de semana: Lista de tareas de SQL
Hola Primers!

¡Bienvenido a su desafío de fin de semana!

Desarrollo Web completa es bastante impresionante, ¿eh? La idea de que se puede hacer una aplicación con arquitectura completa en tan poco tiempo es bastante increíble. Este fin de semana se trata de mostrarnos que tiene un control sobre cada una de las diferentes partes de la Web completa.

## La aplicación de tareas pendientes
Va a crear una aplicación de tareas pendientes -- se llama 'TO-DO' en ingles. Es muy comun abordar este tipo de aplicación cuando se aprende un idioma nuevo, haciéndolo extremadamente valioso hacer por primera vez. Es muy probable que en algún momento de su carrera volverá a abordar esta mientras aprenda otro idioma.

**Estos son los componentes específicos para el desafío:**
* Crear una experiencia de Front-End que permite a un usuario crear una tarea.
* Cuando se crea la tarea, debe almacenarse dentro de una base de datos (SQL)
* Cada vez que se crea una tarea, el Front-End debe actualizarse para mostrar todas las tareas que deben completarse.
* Cada Tarea debe tener una opción para "Completar" o "Eliminar".
* Cuando una tarea esté completa, su representación visual debe cambiar en la Front-End. Por ejemplo, el fondo del contenedor de tareas podría cambiar de gris a verde. La opción "Completar" debe estar "desactivada". Todo esto se puede lograr en CSS, pero también debe incluir la lógica que verifique si una tarea esté completa o no.
* Si una tarea esté completa o no también debe almacenarse en la base de datos.
* Eliminación de una tarea debe eliminar tanto desde Front-End así como la base de datos.


### Estilizar
Utilice el estilo CSS para cambiar la estética de la página más allá del aspecto HTML:
- color de fondo de la página
- familia del tipo de letra y tamaño
- color de texto y o color de fondo de las tareas * para mostrar si se han completado o no*

### Enfoque
Le recomendamos que dedique algún tiempo a pensar en cómo abordar este problema. Piense en toda la lógica necesaria antes de escribir cualquier código. Tómese su tiempo, relájese, recuerde que el síndrome de impostor es real y que es capaz de sobresalir en esto!


### Crear una base de datos
Asegúrese de crear una nueva base de datos a través de Postico. Utilice el nombre `weekend-to-do-app`. Deberá usar este nombre en la configuración de conexión de base de datos en su servidor.


### Estructura de la base de datos
Por favor incluya un archivo se llama `database.sql` en su repositorio que incluye todas sus consultas `CREATE TABLE` . Esto es para que podamos volver a crear su base de datos mientras prueba su aplicación.


## Objetivos extendidos
Para cada uno de tus objetivos 'stretch', estarás practicando la ramificación de git. Consulte las notas de ramificación para obtener un recordatorio sobre los comandos. Cada rama se fusionará en master usando `--no-ff`. Esto nos permitirá ver que ha ramificado su función cuando entrega su código.
- `feature-styling-bootstrap`
- [ ] Añadir Bootstrap a la Front-End y el estilo para arriba!
- Botones: haga que los botones de creación y los botones de finalización sean verdes y el de eliminación rojo.
- Entradas: haga que sus entradas de texto estén diseñadas de la manera de arranque
- Responsivo: haga que su aplicación responda a diferentes tamaños de pantalla: consulte la sección [Diseño] (https://getbootstrap.com/docs/4.1/layout/overview/)
- `feature-confirm-delete`
- [ ] De cualquier manera que desee, cree una opción '¿está seguro: sí / no' al eliminar una tarea.
- Algunas opciones de estilo son [Bootstrap Modal] (https://getbootstrap.com/docs/4.0/components/modal/) o [Sweet Alerts] (https://sweetalert.js.org/guides/).
- `feature-ordering-task-query`
- [ ] Research [Query Params](https://expressjs.com/en/api.html#req.query) para que la solicitud invierta el orden de los todos devueltos.
