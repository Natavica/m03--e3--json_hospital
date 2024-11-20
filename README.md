# Módulo 03: Taller 02
## Taller: Integración de Funcionalidades Básicas de JavaScript en el Sitio Web del Hospital

### Descripción del Proyecto
*Este proyecto es un sitio web informativo para una clínica médica. El propósito principal es brindar información clara y accesible sobre los servicios médicos, el equipo médico y los detalles de contacto de la clínica. Está desarrollado utilizando HTML, CSS y JavaScript para proporcionar una experiencia fluida y amigable para los usuarios. Es la segunda versión con mejoras como estilos modularizados con SASS modularizado
s con SASS y se aplica BEM*

---

### Cómo visualizar el proyecto en un navegador
*Clona o descarga este repositorio en tu máquina local.
Navega hasta el directorio del proyecto.
Abre el archivo index.html directamente en un navegador web. Puedes hacerlo de las siguientes maneras:
Haciendo doble clic sobre el archivo index.html.
Arrastrando y soltando el archivo en una ventana de tu navegador.
Abriendo el archivo desde la opción "Abrir archivo" en el menú de tu navegador.
El sitio web se renderizará en el navegador, donde podrás navegar por las diferentes vistas (Home, Equipo Médico, Contacto).*

---

### Estructura de Carpetas y Archivos
```bash

/corfo-proyecto-01
│
├── /assets/
│   ├── /scss/
│       └── main.scss 
│       └── main.css.map
│       └── main.css
│       └── /components/  
│                 └── _footer.scss
│                 └── _header.scss
│                 └── _variables.scss
│  
├── ├── /js/
│   │   └── script.js
│   └── /images/         
*
├── index.html              # Página principal (Home)
├── equipo.html             # Página del equipo médico
└── contacto.html           # Página de contacto

```

---







### Explicación de Vistas

*Explica en el archivo README cómo funciona el event loop (stack, heap, queue) en JavaScript.*


# Event Loop en JavaScript

El **Event Loop** es un mecanismo fundamental en JavaScript que permite manejar operaciones asincrónicas y garantizar que las tareas se ejecuten de manera no bloqueante. A continuación, se describe cómo funcionan los componentes principales del Event Loop:

---

## Componentes principales

1. **Call Stack (Pila de llamadas)**:
   - Es una estructura de datos que sigue el principio **LIFO** (*Last In, First Out*).
   - Maneja las funciones y tareas que se están ejecutando de forma sincrónica.
   - Cuando se llama a una función, esta se apila en el *Call Stack*. Cuando la función finaliza, se elimina de la pila.

2. **Heap**:
   - Es la región de memoria donde se almacenan los objetos y las variables dinámicas.
   - JavaScript utiliza el *Heap* para asignar memoria de forma no estructurada y gestionar datos más complejos como objetos.

3. **Message Queue (Cola de mensajes)**:
   - Es una cola que sigue el principio **FIFO** (*First In, First Out*).
   - Almacena las tareas asincrónicas (por ejemplo, eventos, `setTimeout`, `fetch`) que están listas para ser procesadas pero que esperan a que el *Call Stack* esté vacío.

4. **Microtask Queue**:
   - Similar a la Message Queue, pero con mayor prioridad.
   - Contiene tareas como *Promises* resueltas y *Mutation Observers*. Estas tareas se procesan antes que las de la Message Queue.

---

## Proceso del Event Loop

*Es un mecanismo extra que añade un navegador cuando ejecuta js, de esta menera evitamos bloquear la ejecución de js constantemente*

1. **Ejecutar las tareas en el Call Stack**:
   - Mientras haya tareas en el *Call Stack*, estas se ejecutan una tras otra de manera sincrónica.

2. **Revisar las Microtask Queue**:
   - Si el *Call Stack* está vacío, el Event Loop procesará las tareas en la *Microtask Queue* antes de pasar a la *Message Queue*.

3. **Procesar la Message Queue**:
   - Una vez que la *Microtask Queue* está vacía, el Event Loop toma la primera tarea de la *Message Queue* y la ejecuta en el *Call Stack*.

4. **Repetir el proceso**:
   - El Event Loop continúa este ciclo hasta que no queden más tareas por ejecutar.

---

## Ejemplo práctico

```javascript
console.log('Inicio');

setTimeout(() => {
    console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1');
});

console.log('Fin');


| Vista | | Descipción |
|--------------|--------------|--------------|
| Home     | (index.html)    | *Esta es la página de inicio del sitio web. Presenta una descripción general de los servicios de la clínica, información sobre su misión y visión, y enlaces a otras secciones como el equipo médico y la página de contacto.*|
| Equipo       | (equipo.html)    | *En esta página se presenta una lista del equipo médico que trabaja en la clínica. Cada médico tiene una breve descripción de su especialidad, experiencia y una foto. Los usuarios pueden conocer más sobre los profesionales que estarán a cargo de su cuidado.* |
| Contacto       | (contacto.html)   | *La página de contacto ofrece información sobre cómo llegar a la clínica, incluye un formulario para que los usuarios puedan enviar consultas o agendar una cita, y los detalles de contacto como dirección, teléfono y correo electrónico.* |