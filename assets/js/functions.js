fetch('./assets/js/equipo.json') // Nueva ruta al JSON
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo JSON');
    }
    return response.json();
  })
  .then(data => {
    const container = document.getElementById('doctor-list');

    data.forEach(doctor => {
      const doctorDiv = document.createElement('div');
      doctorDiv.classList.add('doctor');

      doctorDiv.innerHTML = `
        <img src="${doctor.foto}" alt="Foto de ${doctor.nombre}">
        <div>
          <h2>${doctor.nombre}</h2>
          <p><strong>Especialidad:</strong> ${doctor.especialidad}</p>
          <p><strong>Reseña:</strong> ${doctor.resena}</p>
          <p><strong>Experiencia:</strong> ${doctor.experiencia}</p>
             <p><strong>Experiencia:</strong> ${doctor.disponibilidad}</p>
              <p><strong>Horario:</strong> ${doctor.horario}</p>
        </div>
      `;

      container.appendChild(doctorDiv);
    });
  })
  .catch(error => {
    console.error('Error al cargar el JSON:', error);
  });
