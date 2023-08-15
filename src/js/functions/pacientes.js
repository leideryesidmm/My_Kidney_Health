
var cedulaEncriptada = "";


let obtenerCedulaEncriptada = async (cedulEncript) => {
  const peticion = await fetch(servidorAPI + 'Medico/findAllPacientes', {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });
  const pacientes = await peticion.json();
  let cedulaEncriptada = "";

  pacientes.forEach(paciente => {
    let decryptedCedula = CryptoJS.AES.decrypt(paciente.cedula, 'clave_secreta').toString(CryptoJS.enc.Utf8);
    let decryptedParam = CryptoJS.AES.decrypt(cedulEncript, 'clave_secreta').toString(CryptoJS.enc.Utf8);
    if (decryptedParam === decryptedCedula)
      cedulaEncriptada = paciente.cedula;
  })
  return cedulaEncriptada;
}


let inhabilitarPaciente = async (ced) => {
  let cedula = ced.toString();
  let cedEncriptada = CryptoJS.AES.encrypt(cedula, 'clave_secreta').toString();
  let cedulaEncriptada = await obtenerCedulaEncriptada(cedEncriptada);

  try {
    const PacienteInDto = { cedula: cedulaEncriptada };

    const response = await fetch(servidorAPI + 'Medico/inhabilitarPaciente', {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(PacienteInDto)
    });

    if (response.ok) {
      $('#inhabilitarpaciente').modal('hide');
      location.reload();
    }
    else {
      console.error("Error al inhabilitar paciente:", response.status);
    }
  }
  catch (error) {
    console.error("Error al inhabilitar paciente:", error);
  }
};


let habilitarPaciente = async (ced) => {
  let cedula = ced.toString();
  let cedEncriptada = CryptoJS.AES.encrypt(cedula, 'clave_secreta').toString();
  let cedulaEncriptada = await obtenerCedulaEncriptada(cedEncriptada);

  try {
    const PacienteInDto = { cedula: cedulaEncriptada };

    const response = await fetch(servidorAPI + 'Medico/reactivarPaciente', {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(PacienteInDto)
    });

    if (response.ok) {      
      location.reload();
    }
    else {
      console.error("Error al inhabilitar paciente:", response.status);
    }
  }
  catch (error) {
    console.error("Error al inhabilitar paciente:", error);
  }
};

let pacientesTratados = async () => {
  let cont = 1;
  try {
    // Call listarPacientes and await its result
    const pacientes = await listarPacientes();

    let msg = "";
    if (pacientes != null && pacientes.length > 0) {

      msg += '<br>' +
        '<table class="pacientes">' +
        '<thead>' +
        '<tr>' +
        '<th>Nombre</th>' +
        '<th>Cédula</th>' +
        '<th>Acciones</th>' +
        '</tr>' +
        '</thead>';

      pacientes.forEach((paciente) => {
        msg +=
          '<tr>' +
          '<td>' + paciente.nombre + '</td>' +
          '<td>' + paciente.cedula + '</td>' +
          '<td>' +
          '<a href="principal.html?cedula=' + encodeURIComponent(CryptoJS.AES.encrypt(paciente.cedula, "clave_secreta").toString()) + '"class="icon-link" onclick="llenarInfoPaciente() type="button">' +
          '<img src="../img/ver.png" class="ver"/>' +
          '</a>' +
          '<a href="info-pacientes.html" type="button">' +
          '<img src="../img/lapiz.png" class="actualizar"/>' +
          '</a>' +
          '<a href="" data-bs-toggle="modal" data-bs-target="#inhabilitarpaciente' + cont + '" type="button">' +
          '<img src="../img/cesta.png" class="inhabilitar"/>' +
          '</a>' +
          '</td>' +
          '</tr>';

        msg +=
          '<div class="modal" tabindex="-1" id="inhabilitarpaciente' + cont + '">' +
          '<div class="modal-dialog">' +
          '<div class="modal-content">' +
          '<div class="modal-header">' +
          '<h5 class="modal-title">Inhabilitar Paciente</h5>' +
          '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
          '</div>' +
          '<div class="modal-body">' +
          '<p><b>¿Está seguro(a) de inhabilitar este paciente?</b></p>' +
          '<label class="cedulaPaciente" id="cedulaPaciente"><b>Cédula: </b>' + paciente.cedula + '</label><br>' +
          '<label class="cedulaPaciente" id="cedulaPaciente"><b>Nombre: </b>' + paciente.nombre + '</label>' +
          '</div>' +
          '<div class="modal-footer">' +
          '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>' +
          '<button type="button" onclick="inhabilitarPaciente(' + paciente.cedula + ')"" class="btn btn-danger">Inhabilitar</button>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>';
        cont++;
      });
    }
    else {
      msg +=
        '<br>' +
        '<table class="pacientes">' +
        '<thead>' +
        '<tr>' +
        '<th>Nombre</th>' +
        '<th>Cédula</th>' +
        '<th>Acciones</th>' +
        '</tr>' +
        '</thead>' +
        '<tr>' +
        '<td colspan="3">' + "No hay pacientes Registrados" + '</td>' +
        '</tr>';
    }
    msg += '</table>';
    document.getElementById("pacientes").innerHTML = msg;
  }
  catch (error) {
    console.error("Error in pacientesTratados:", error);
  }
};

let pacientesInhabilitados = async () => {
  let cont = 1;
  try {
    const pacientes = await listarPacientesInactivos();
    let msg = "";

    if (pacientes != null && pacientes.length > 0) {
      msg += '<br>' +
        '<table class="pacientes">' +
        '<thead>' +
        '<tr>' +
        '<th>Nombre</th>' +
        '<th>Cédula</th>' +
        '<th>Acciones</th>' +
        '</tr>' +
        '</thead>';
        
    pacientes.forEach((paciente) => {
        
        msg +=
          '<tr>' +
          '<td>' + paciente.nombre + '</td>' +
          '<td>' + paciente.cedula + '</td>' +
          '<td>' +
          '<a  href="" data-bs-toggle="modal" data-bs-target="#habilitarpaciente' + cont + '" type="button">' +
          '<img src="../img/actualizar.png" class="actualizar"/>' +
          '</a >' +
          '</td>' +
          '</tr>';

          msg +=
          '<div class="modal" tabindex="-1" id="habilitarpaciente' + cont + '">' +
          '<div class="modal-dialog">' +
          '<div class="modal-content">' +
          '<div class="modal-header">' +
          '<h5 class="modal-title">Habilitar Paciente</h5>' +
          '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
          '</div>' +
          '<div class="modal-body">' +
          '<p><b>¿Está seguro(a) de habilitar nuevamente este paciente?</b></p>' +
          '<label class="cedulaPaciente" id="cedulaPaciente"><b>Cédula: </b>' + paciente.cedula + '</label><br>' +
          '<label class="cedulaPaciente" id="cedulaPaciente"><b>Nombre: </b>' + paciente.nombre + '</label>' +
          '</div>' +
          '<div class="modal-footer">' +
          '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>' +
          '<button type="button" onclick="habilitarPaciente(' + paciente.cedula + ')"" class="btn" id="btn-green">Habilitar</button>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>';
        
      });
    } 
    else {
      msg += '<br>' +
        '<table class="pacientes">' +
        '<thead>' +
        '<tr>' +
        '<th>Nombre</th>' +
        '<th>Cédula</th>' +
        '<th>Acciones</th>' +
        '</tr>' +
        '</thead>' +
        '<tr>' +
        '<td colspan="3">' + "No hay pacientes inhabilitados" + '</td>' +
        '</tr>';
    }
    msg += '</table>';
    document.getElementById("pacientesinhabilitados").innerHTML = msg;
  } 
  catch (error) {
    console.error("Error in pacientesTratados:", error);
  }
};


pacientesTratados();
pacientesInhabilitados();
