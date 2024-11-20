function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show-menu');
}

document.querySelectorAll('.navbar__links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById("navLinks");
        navLinks.classList.remove("active"); 
    });
});

// Función para validar el nombre (no vacío y sin caracteres especiales)
function validarNombre(nombre) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Solo letras y espacios
    return regex.test(nombre) && nombre.trim() !== ""; // Asegura que no esté vacío
}

function validarCorreo(correo) {
    // Verificamos que el correo contenga el carácter "@"
    if (!correo.includes("@")) {
        return false; // Si no contiene "@", no es válido
    } else {
        return true;
    }
}

// Función para validar el teléfono (solo números y entre 7 y 15 dígitos)
function validarTelefono(telefono) {
    const regex = /^\d{7,15}$/; // Solo números de 7 a 15 dígitos
    return regex.test(telefono);
}

// Función genérica para pedir un dato y validarlo
function pedirDato(mensaje, funcionValidar) {
    let dato; // Variable para guardar el dato
    do {
        dato = prompt(mensaje); // Pedir el dato al usuario
        if (!funcionValidar(dato)) {
            alert("El dato ingresado no es válido. Por favor, inténtalo de nuevo.");
        }
    } while (!funcionValidar(dato)); // Repetir mientras el dato no sea válido
    return dato; // Retornar el dato válido
}

// Seleccionar el botón y agregar el evento
const botonReserva = document.getElementById("reserva");
botonReserva.addEventListener("click", function () {
    // Pedir y validar los datos
    const nombre = pedirDato("Por favor, ingresa tu nombre:", validarNombre);
    const correo = pedirDato("Por favor, ingresa tu correo electrónico:", validarCorreo);
    const telefono = pedirDato("Por favor, ingresa tu número de teléfono:", validarTelefono);

    // Mostrar los datos si todo es válido
    console.log("Nombre válido:", nombre);
    console.log("Correo válido:", correo);
    console.log("Teléfono válido:", telefono);

    alert(`Datos válidos:\nNombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}`);
});

// Datos de las personas para las cards
const personas = [
    {
        nombre: "Dr. Yoda Jedi",
        especialidad: "Otorrinolaringología",
        resena: "orem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores, velitplaceat eligendi quod, eos odit explicabo repellendus sint voluptas.",
        foto: "./assets/images/profesional--yoda.png"
    },
    {
        nombre: "Dr. César Tapia",
        especialidad: "Dermatología",
        resena: "orem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores, velitplaceat eligendi quod, eos odit explicabo repellendus sint voluptas.",
        foto: "./assets/images/profesional--c3po.png"
    },
    {
        nombre: "Dr. Chew Bacca",
        especialidad: "Cardiología",
        resena: "orem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores, velitplaceat eligendi quod, eos odit explicabo repellendus sint voluptas.",
        foto: "./assets/images/profesional--chewie.png"
    },
    {
        nombre: "Dr. Darth Vader",
        especialidad: "Cirujía General",
        resena: "orem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores, velitplaceat eligendi quod, eos odit explicabo repellendus sint voluptas.",
        foto: "./assets/images/profesional--vader.png"
    }
];

// Seleccionar el contenedor de las cards
const contenedor = document.querySelector(".cards__container--equipo");

// Generar y agregar las cards al contenedor
personas.forEach(persona => {
    // Crear el div de la card
    const card = document.createElement("div");
    card.classList.add("card");

    // Agregar el contenido a la card
    card.innerHTML = `
        <img src="${persona.foto}" class="card__img" alt="Foto de ${persona.nombre}">
        <ul>
            <li class="card__text--nombre">${persona.nombre}</li>
            <li class="card__text--especialidad">${persona.especialidad}</li>
            <li class="card__text--resena">${persona.resena}</li>
        </ul>
    `;

    // Agregar la card al contenedor
    contenedor.appendChild(card);
});
