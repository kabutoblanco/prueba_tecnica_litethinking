## Prueba tecnica Lite Thinking
La app web de la prueba técnica se realizo con las tecnologías de React JS y Django, particularmente en esta implementación se obto por incrustar el código Javascript de React dentro del proyecto de Django, permitiendo así tener un único servidor.

El despliegue de la app se hizo en la plataforma Heroku, por cuestión de estar más familiarizado con este servidor.

Las funcionalidades de la app son las siguientes:
1. Listar empresas.
2. Registrar empresa.
3. Actualizar empresa.
4. Eliminar empresa.

### Servidor

Para acceder al admin de Django, esta son las credenciales:
* Usuario: daniel
* Contraseña: oracle

Link de la app web:
https://litethinkingenterprise.herokuapp.com/

### Documentación

Para visualizar la documentación del API que se consuma internamente así como el modelo empleado en Django, se puede revisar en swagger en la siguiente dirección:
https://litethinkingenterprise.herokuapp.com/swagger

Debido a que la plataforma Heroku requiere de ser paga para obtener una BD en MySQL o PostgrestSQL, por ende, me incline por realizar en la base de datos de SQLite.
