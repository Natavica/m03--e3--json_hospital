// // JSON original
// const doctores = [
//   {
//     "nombre": "Dr. Yoda Jedi",
//     "especialidad": "Otorrinolaringología",
//     "resena": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores.",
//     "foto": "./assets/images/profesional--yoda.png",
//     "experiencia": "8 años de experiencia",
//     "disponibilidad": "jueves",
//     "horario": ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"],
//     "contacto": ["correo@starwars.hospital"]
//   },
//   {
//     "nombre": "Dr. César Tapia",
//     "especialidad": "Dermatología",
//     "resena": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores.",
//     "foto": "./assets/images/profesional--c3po.png",
//     "experiencia": "3 años de experiencia",
//     "disponibilidad": "lunes",
//     "horario": ["09:00 AM", "10:00 AM", "01:00 PM", "03:00 PM", "04:00 PM"],
//     "contacto": ["correo@starwars.hospital"]
//   },
//   {
//     "nombre": "Dr. Chew Bacca",
//     "especialidad": "Cardiología",
//     "resena": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores, velitplaceat eligendi quod, eos odit explicabo repellendus sint voluptas.",
//     "foto": "./assets/images/profesional--chewie.png",
//     "experiencia": "5 años de experiencia",
//     "disponibilidad": "viernes",
//     "horario": ["07:00 AM", "10:00 AM", "01:00 PM", "05:00 PM", "06:00 PM"],
//     "contacto": ["correo@starwars.hospital"]
//   },
//   {
//     "nombre": "Dr. Darth Vader",
//     "especialidad": "Cirugía",
//     "resena": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores, velitplaceat eligendi quod, eos odit explicabo repellendus sint voluptas.",
//     "foto": "./assets/images/profesional--vader.png",
//     "experiencia": "3 años de experiencia",
//     "disponibilidad": "martes",
//     "horario": ["09:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "05:00 PM"],
//     "contacto": ["correo@starwars.hospital"]
//   },
//   {
//     "nombre": "Dr. Darth Maul",
//     "especialidad": "Otorrinolaringología",
//     "resena": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores.",
//     "foto": "./assets/images/profesional--darth.jpg",
//     "experiencia": "8 años de experiencia",
//     "disponibilidad": "jueves",
//     "horario": ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"],
//     "contacto": ["correo@starwars.hospital"]
//   },
//   {
//     "nombre": "Dra. Padme Amidala",
//     "especialidad": "Dermatología",
//     "resena": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores.",
//     "foto": "./assets/images/profesional--padme.jpg",
//     "experiencia": "3 años de experiencia",
//     "disponibilidad": "lunes",
//     "horario": ["09:00 AM", "10:00 AM", "01:00 PM", "03:00 PM", "04:00 PM"],
//     "contacto": ["correo@starwars.hospital"]
//   },
//   {
//     "nombre": "Dr. Palpatine",
//     "especialidad": "Cardiología",
//     "resena": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores.",
//     "foto": "./assets/images/profesional--palpatine.jpg",
//     "experiencia": "5 años de experiencia",
//     "disponibilidad": "viernes",
//     "horario": ["07:00 AM", "10:00 AM", "01:00 PM", "05:00 PM", "06:00 PM"],
//     "contacto": ["correo@starwars.hospital"]
//   },
//   {
//     "nombre": "Dr. Storm",
//     "especialidad": "Cirugía",
//     "resena": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores.",
//     "foto": "./assets/images/profesional--storm.jpg",
//     "experiencia": "3 años de experiencia",
//     "disponibilidad": "martes",
//     "horario": ["09:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "05:00 PM"],
//     "contacto": ["correo@starwars.hospital"]
//   },
//   {
//     "nombre": "Dr. Anakin Skywalker",
//     "especialidad": "Dermatología",
//     "resena": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores.",
//     "foto": "./assets/images/profesional--anakin.jpg",
//     "experiencia": "3 años de experiencia",
//     "disponibilidad": "lunes",
//     "horario": ["09:00 AM", "10:00 AM", "01:00 PM", "03:00 PM", "04:00 PM"],
//     "contacto": ["correo@starwars.hospital"]
//   },
//   {
//     "nombre": "Dr. Jabba",
//     "especialidad": "Cardiología",
//     "resena": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores.",
//     "foto": "./assets/images/profesional--jabba.jpg",
//     "experiencia": "5 años de experiencia",
//     "disponibilidad": "viernes",
//     "horario": ["07:00 AM", "10:00 AM", "01:00 PM", "05:00 PM", "06:00 PM"],
//     "contacto": ["correo@starwars.hospital"]
//   },
//   {
//     "nombre": "Dra. Leia",
//     "especialidad": "Otorrinolaringología",
//     "resena": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Abminus repellendus sit quae error! Nam, dicta repudiandae vitae commodi dolores.",
//     "foto": "./assets/images/profesional--leia.jpg",
//     "experiencia": "5 años de experiencia",
//     "disponibilidad": "viernes",
//     "horario": ["07:00 AM", "10:00 AM", "01:00 PM", "05:00 PM", "06:00 PM"],
//     "contacto": ["correo@starwars.hospital"]
//   }
// ];

// // Clonar el JSON original
// const doctoresClonados = JSON.parse(JSON.stringify(doctores));

// // Modificar la especialidad de "Otorrinolaringología" a "Ortodoncia"
// doctoresClonados.forEach((doctor) => {
//   if (doctor.especialidad === "Otorrinolaringología") {
//     doctor.especialidad = "Ortodoncia";
//   }
// });

// // Mostrar resultados
// console.log("Original:", doctores);
// console.log("Modificado:", doctoresClonados);

// // Función para fusionar los JSON
// const mergeDoctores = (original, modificado) => {
//   const resultado = [...original];

//   modificado.forEach((doctorModificado) => {
//     const index = resultado.findIndex((doctorOriginal) => doctorOriginal.nombre === doctorModificado.nombre);

//     if (index !== -1) {
//       // Actualiza los datos si ya existe en el original
//       resultado[index] = { ...resultado[index], ...doctorModificado };
//     } else {
//       // Agrega al doctor si es nuevo
//       resultado.push(doctorModificado);
//     }
//   });

//   return resultado;
// };

// // Fusionar los JSON
// const doctoresFusionados = mergeDoctores(doctores, doctoresClonados);

// // Mostrar resultados
// console.log("Fusionado:", doctoresFusionados);

// clone.js

// Cargar el archivo JSON con fetch()
// clone.js

// Cargar el archivo JSON con fetch()
fetch('./assets/js/equipo.json')
  .then(response => {
    if (!response.ok) { //response.ok: Comprueba si la respuesta fue exitosa (código HTTP 200–299).
      throw new Error('No se pudo cargar el archivo JSON');
    }
    return response.json(); //Convierte la respuesta en un objeto JavaScript. Esto transforma el contenido JSON en algo que puedas manipular en tu código.
  })
  .then(data => { // Se procesan los datos que se cargaron desde el archivo JSON
    // Clonar los datos originales
    const clonedData = JSON.parse(JSON.stringify(data)); //Convierta data en texto JSON y la convierte en un arreglo identico

    // Modificar la copia
    clonedData.forEach(medico => { //Itera sobre cada objeto en clonedData (representando médicos. Si la especialidad del médico es "Otorrinolaringología", la cambia a "Ortodoncia"
      if (medico.especialidad === "Otorrinolaringología") {
        medico.especialidad = "Ortodoncia";
      }
    });

    // Realizar el merge (sobreescribir los datos del original)
    const mergedData = data.map(original => {
      // Buscar el médico correspondiente en clonedData
      const updated = clonedData.find(clone => clone.nombre === original.nombre);

      // Si existe en clonedData, usar los valores actualizados
      return updated ? updated : original;
    });

    console.log('Datos originales:');
    console.log(data);

    console.log('Datos modificados:');
    console.log(clonedData);

    console.log('Datos fusionados (sobrescritos):');
    console.log(mergedData);

    // Aquí podrías guardar o procesar `mergedData` si es necesario
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });
