# Módulo 03: Laboratorio Virtual 1
## Laboratorio Virtual: Integración de JSON, Estructuras de Datos y Algoritmos en el Sitio Web del Hospital

### Descripción del Proyecto
*En este taller, los estudiantes deben continuar incorporando funcionalidades de JavaScript básico en el proyecto del hospital. Además de manipular el DOM, validar datos, y manejar errores, se pedirá la entrada de información del usuario a través de un prompt, mostrando los resultados por consola o como alertas en el navegador*

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

/Estructura
│
├── /assets/
├── ├── /js/
│   │   └── equipo.json
│   │   └── clone.js
│   │   └── estructuraDatos.js
│   │   └── citas.js
│   │   └── filter.js
│   │   └── navbar.js
│   │   └── prompt.js
│
│   └── /images/ 
│   ├── /scss/
│       └── /abstracts/  
│       └── /components/  
│       └── /core/
│       └── /layout/
│       └── /pages/
│       └── /themes/
│       └── /vendors/    
│       └── main.scss 
│       └── main.css.map
│       └── main.css
│ 
*
├── index.html              # Página principal (Home)
├── equipo.html             # Página del equipo médico
└── contacto.html           # Página de contacto
└── citas.html              # Con el botón agendar se agregan citas y con edl botón atender se borran
└── gestion.html            # Página de contacto

```

---


# Documentación del Proyecto

## 1. Operaciones con JSON

### Carga del JSON con `fetch()`
El archivo `equipo.json` se carga utilizando `fetch`, que envía una solicitud HTTP al servidor.

- **Validación de respuesta:** Se verifica si el servidor devuelve un código de estado exitoso (`response.ok`).
- **Conversión de datos:** La respuesta se convierte en un objeto JavaScript manipulable mediante `response.json()`.

### Clonación del JSON
Se usó `JSON.parse(JSON.stringify(data))` para crear una copia profunda del objeto JSON. Esto asegura que los cambios en la copia no afecten al original.

### Fusión (merge)
La fusión de datos se realiza comparando objetos en el arreglo original (`data`) con los actualizados en la copia (`clonedData`). Si se encuentra una coincidencia, se reemplaza con el objeto actualizado.

---

## 2. Estructuras de datos

### Arreglos
Los arreglos (`[]`) son la base para almacenar y manipular datos en JSON. También se usan para:

- Crear listas como `pila.data` o `cola.queue`.
- Recorrer y filtrar datos (médicos, pacientes).

### Pilas (LIFO: Last In, First Out)
Implementada en la clase `Pila`.

#### Operaciones principales:
- `push(elemento)`: Agrega un elemento al final del arreglo.
- `pop()`: Elimina y devuelve el último elemento.
- `length()`: Devuelve la cantidad de elementos.

#### Uso en el proyecto:
Se usó para mostrar una lista de pacientes en orden inverso al que fueron añadidos.

### Colas (FIFO: First In, First Out)
Implementada en la clase `Cola`.

#### Operaciones principales:
- `enqueue(item)`: Agrega un elemento al final.
- `dequeue()`: Elimina y devuelve el primer elemento.
- `isEmpty()`: Verifica si la cola está vacía.
- `length()`: Devuelve el número de elementos.

#### Uso en el proyecto:
Se usó para manejar la lista de pacientes pendientes por atender en el orden en que llegaron.

---

## 3. Algoritmos implementados

### Recorrido de objetos JSON
Se utilizaron métodos como `forEach`, `map` y `filter` para:
- Iterar sobre los datos cargados.
- Modificar especialidades (ejemplo: cambiar "Otorrinolaringología" por "Ortodoncia").
- Filtrar médicos según especialidad seleccionada.

#### Complejidad:
- **`forEach` y `map`:** \( O(n) \), donde \( n \) es el número de elementos en el arreglo.
- **`filter`:** \( O(n) \), ya que evalúa cada elemento para determinar si cumple con la condición.

### Fusión de datos (merge)
Por cada elemento en el arreglo original (`data`), se busca el correspondiente en la copia (`clonedData`) usando `find`. Si se encuentra, se reemplaza; de lo contrario, se mantiene el original.

#### Complejidad:
- **Búsqueda con `find`:** \( O(m) \), donde \( m \) es el tamaño de `clonedData`.
- **Total:** \( O(n \cdot m) \).

### Renderizado de pacientes y doctores
Se generan dinámicamente tarjetas o filas HTML con los datos.

#### Complejidad:
\( O(n) \), donde \( n \) es el número de pacientes o doctores a mostrar.

---

## 4. Funciones auxiliares

### `obtenerFechaHoraActual()`
- Devuelve la fecha y hora formateada según la configuración local.
- **Uso:** Registrar la hora en que se agenda una cita.

### `renderizarPacientes()`
- Crea una estructura HTML para mostrar pacientes en espera.
- **Uso:** Actualiza dinámicamente la lista de pacientes.

---

## 5. Resumen de utilidad

### JSON y estructuras de datos:
- Facilitan el almacenamiento y manejo eficiente de información (médicos, pacientes).

### Pilas y colas:
- **Pila:** Visualización en orden inverso.
- **Cola:** Orden de llegada.

### Algoritmos:
- Procesan datos de forma eficiente, desde modificaciones simples hasta renderizado dinámico.
