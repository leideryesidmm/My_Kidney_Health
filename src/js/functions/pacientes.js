let pacientesTratados = async () => {
  let cont = 1;
  try {
    const pacientes = await listarPacientes();

    let msg = "";
    if (pacientes != null && pacientes.length > 0) {

      msg += '<br>' +
        '<table class="paciente" id="paciente">' +
        '<thead>' +
        '<tr>' +
        '<th>Nombre</th>' +
        '<th>Cédula</th>' +
        '<th>Acciones</th>' +
        '</tr>' +
        '</thead>';

      pacientes.forEach((paciente) => {
        let clave = encodeURIComponent(CryptoJS.AES.encrypt(paciente.cedula, "clave_secreta").toString())
        console.log(clave);
        msg +=
          '<tr>' +
          '<td>' + paciente.nombre + '</td>' +
          '<td>' + paciente.cedula + '</td>' +
          '<td>' +
          '<a class="icon-link" onclick="irPaciente(\'' + clave + '\', \'' + paciente.nombre + '\')">' +
          '<img src="../img/ver.png" title="Ver Paciente" class="ver"/>' +
          '</a>';
          var urlActual = window.location.href;
          localStorage.setItem("url", urlActual);
          msg+='<a class="icon-link" onclick="editarPaciente(\'' + clave + '\')">' +
          '<img src="../img/lapiz.png" title="Editar Paciente" class="actualizar"/>' +
          '</a>' +
          '<a href="" data-bs-toggle="modal" data-bs-target="#inhabilitarpaciente' + cont + '" type="button">' +
          '<img src="../img/cesta.png" title="Inhabilitar Paciente" class="inhabilitar"/>' +
          '</a>' +
          // '<a href="" data-bs-toggle="modal" data-bs-target="#visita' + cont + '" type="button">' +
          // '<img src="../img/visita.png" title="Visita Especialista" class="visita"/>' +
          // '</a>' +
          // '<a href="" data-bs-toggle="modal" data-bs-target="#chequeo' + cont + '" type="button">' +
          // '<img src="../img/examenes.png" title="Exámenes" class="chequeo"/>' +
          // '</a>' +
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
          '<button type="submit" onclick="inhabilitarPaciente(' + paciente.cedula + ')"" class="btn btn-danger">Inhabilitar</button>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>';

        msg +=
          '<div class="modal" tabindex="-1" id="visita' + cont + '">' +
          '<div class="modal-dialog">' +
          '<div class="modal-content">' +
          '<div class="modal-header">' +
          '<h5 class="modal-title" >Visitas a Especialista</h5>' +
          '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
          '</div>' +
          '<div class="modal-body">' +
          '<label class="cedulaPaciente" id="cedulaPaciente"><b>Cédula: </b>' + paciente.cedula + '</label><br>' +
          '<label class="cedulaPaciente" id="cedulaPaciente"><b>Nombre: </b>' + paciente.nombre + '</label><br>' +
          '<div class="especialistas"><br><form id="checkboxForm">' +
          '<div class="row">' +
          '<div class="col-6"><img src="../img/nefrologo.png" alt="" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="nefrologia" id="nefrologia">' +
          '  <label class="form-check-label" for="flexCheckDefault">' +
          '    Nefrólogo' +
          '  </label>' +
          '</div>' +
          '<div class="col-6"><img src="../img/enfermera.png" alt="" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="enfermeria" id="enfermeria">' +
          '  <label class="form-check-label" for="flexCheckDefault">' +
          '    Enfermera' +
          '  </label>' +
          '</div>' +
          '</div><br>' +
          '<div class="row">' +
          '<div class="col-6"><img src="../img/nutricion.png" alt="" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="nutricion" id="nutricion">' +
          '  <label class="form-check-label" for="flexCheckDefault">' +
          '    Nutricionista' +
          '  </label>' +
          '</div>' +
          '<div class="col-6"><img src="../img/psicologo.png" alt="" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="psicologia" id="psicologia">' +
          '  <label class="form-check-label" for="flexCheckDefault">' +
          '    Psicólogo' +
          '  </label>' +
          '</div>' +
          '</div><br>' +
          '<div class="row">' +
          '<div class="col-6"><img src="../img/asistencia.png" alt="" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="trabajoSocial" id="trabajoSocial">' +
          '  <label class="form-check-label" for="flexCheckDefault">' +
          '    Trabajador Social' +
          '  </label>' +
          '</div>' +
          '<div class="col-6"><img src="../img/admision.png" alt="" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="auxiliarAdmisiones" id="auxiliarAdmisiones">' +
          '  <label class="form-check-label" for="flexCheckDefault">' +
          '    Aux. de Admisiones' +
          '  </label>' +
          '</div>' +
          '</div><br>' +
          '<div class="row text-center">' +
          '<div class="col-12"><img src="../img/Farmacia.png" alt="" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="farmacia" id="farmacia">' +
          '  <label class="form-check-label" for="flexCheckDefault">' +
          '    Farmacia' +
          '  </label>' +
          '</div>' +
          '</div></form>' +
          '</div>' +
          '</div>' +
          '<div class="modal-footer">' +
          '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>' +
          '<button type="submit"  id="guardarVisita" onclick="crearVisita()" class="btn btn-primary">Guardar</button>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>';

        msg +=
          '<div class="modal" tabindex="-1" id="chequeo' + cont + '">' +
          '<div class="modal-dialog modal-lg">' +
          '<div class="modal-content">' +
          '<div class="modal-header">' +
          '<h5 class="modal-title">Seguimiento Mensual</h5>' +
          '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
          '</div>' +
          '<div class="modal-body">' +
          '<label class="cedulaPaciente" id="cedulaPaciente"><b>Cédula: </b>' + paciente.cedula + '</label>&nbsp&nbsp&nbsp&nbsp&nbsp' +
          '<label class="cedulaPaciente" id="cedulaPaciente"><b>Nombre: </b>' + paciente.nombre + '</label>' +
          '<div class="">' +
          '<div class="row">' +
          '<div class="col-6 p-3">' +
          '<div class="row border p-2">' +
          '<div class="centrar-label col-6"><label class="form-label" for="tensionArterial">Tension Arterial</label></div>' +
          '<div class="col-6"><input class="form-control" type="number" name="chequeo" id="tensionArterial" /></div>' +
          '</div>' +
          '<div class="row mt-2 border p-2">' +
          '<div class="centrar-label col-6"><label class="form-label" for="colesterolTotal">Colesterol Total</label></div>' +
          '<div class="col-6"><input class="form-control" type="number" name="chequeo" id="colesterolTotal" /></div>' +
          '</div>' +
          '<div class="row mt-2 border p-2">' +
          '<div class="centrar-label col-6"><label class="form-label" for="glicemia"> Glicemia</label></div>' +
          '<div class="col-6"><input class="form-control" type="number" name="chequeo" id="glicemia" /></div>' +
          '</div>' +
          '<div class="row mt-2 border p-2">' +
          '<div class="centrar-label col-6"><label class="form-label" for="triglicerios">Triglicerios:</label></div>' +
          '<div class="col-6"><input class="form-control" type="number" name="chequeo" id="triglicerios" /></div>' +
          '</div>' +
          '<div class="row mt-2 border p-2">' +
          '<div class="centrar-label col-6"><label class="form-label" for="ldh">LDH:</label></div>' +
          '<div class="col-6"><input class="form-control" type="number" name="chequeo" id="ldh" /></div>' +
          '</div>' +
          '</div>' +
          '<div class="col-6 p-3">' +
          '<div class="row border p-2">' +
          '<div class="centrar-label col-6"><label class="form-label" for="hemoglobina"> Hemoglobina</label></div>' +
          '<div class="col-6"><input class="form-control" type="number" name="chequeo" id="hemoglobina" /></div>' +
          '</div>' +
          '<div class="row mt-2 border p-2">' +
          '<div class="centrar-label col-6"><label class="form-label" for="fosforo">Fósforo:</label></div>' +
          '<div class="col-6"><input class="form-control" type="number" name="chequeo" id="fosforo" /></div>' +
          '</div>' +
          '<div class="row mt-2 border p-2">' +
          '<div class="centrar-label col-6"><label class="form-label" for="potasio">Potasio:</label></div>' +
          '<div class="col-6"><input class="form-control" type="number" name="chequeo" id="potasio" /></div>' +
          '</div>' +
          '<div class="row mt-2 border p-2">' +
          '<div class="centrar-label col-6"><label class="form-label" for="nitrogenoUreico">Nitrógeno Uréico:</label></div>' +
          '<div class="col-6"><input class="form-control" type="number" name="chequeo" id="nitrogenoUreico" /></div>' +
          '</div>' +
          '<div class="row mt-2 border p-2">' +
          '<div class="centrar-label col-6"><label class="form-label" for="hdl">HDL:</label></div>' +
          '<div class="col-6"><input class="form-control" type="number" name="chequeo" id="hdl" /></div>' +
          '</div>' +
          '</div>' +
          ' </div>' +
          '</div>' +
          '</div>' +
          '<div class="modal-footer">' +
          '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>' +
          '<button type="submit" onclick="crearChequeoMensual(' + paciente.cedula + ')"" class="btn btn-primary">Guardar</button>' +
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
        '<table class="paciente">' +
        '<thead>' +
        '<tr>' +
        '<th>Nombre</th>' +
        '<th>Cédula</th>' +
        '<th>Acciones</th>' +
        '</tr>' +
        '</thead>' +
        '<tr>' +
        '<td colspan="3">' + "No hay pacientes registrados." + '</td>' +
        '</tr>';
    }
    msg += '</table>';
    document.getElementById("pacientes").innerHTML = msg;
  }
  catch (error) {
    console.error("Error in pacientesTratados:", error);
  }
  new DataTable('#paciente', {
    language: {
        url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
    },
});
};


function irPaciente(cedula, nombre){
  localStorage.setItem("cedulaPaciente", cedula);
  localStorage.setItem("nombrePaciente", nombre);
  location.href="principal.html";
}

function editarPaciente(cedula){
  localStorage.setItem("cedulaPaciente", cedula);
  location.href="editarPaciente.html";
}


let pacientesInhabilitados = async () => {
  let cont = 1;


  try {
    const pacientes = await listarPacientesInactivos();
    let msg = "";

    if (pacientes != null && pacientes.length > 0) {
      msg += '<div class="container">' +
        '<h2>Pacientes Inhabilitados</h2>' +
        '<br>' +
        '<table class="pacientesInhabilitados" id="pacientesInhabilitados">' +
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
          '</tr>' +
          '</div>' +
          '</div>';
        
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
          cont++;

      });
    }
    else {
      msg += ""
    }
    msg += '</table>';
    document.getElementById("pacientesinhabilitados").innerHTML = msg;
  }
  catch (error) {
    console.error("Error in pacientesTratados:", error);
  }
  new DataTable('#pacientesInhabilitados', {
    language: {
        url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
    },
});
};

let crearVisita = async () => {
  let idCita = 1;
  var checkboxes = document.querySelectorAll("input[name='visita']:checked");
  var visitaEspecialistaDto = {
    cita: idCita // Agregar el ID de la cita
  };

  Array.from(checkboxes).forEach(function (checkbox) {
    visitaEspecialistaDto[checkbox.value] = true;
  });

  console.log(visitaEspecialistaDto);

  if (Object.keys(visitaEspecialistaDto).length > 0) {
    const response = await fetch(servidorAPI + 'Medico/visitaEspecialista', {
      method: "POST",
      body: JSON.stringify(visitaEspecialistaDto),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response);
        if (response.ok) {
          $('#visita').modal('hide');
          location.reload();
        } else {
          $('#errorModal').modal('show');
        }
      })
      .catch(error => {
        console.error(error);
      });
  } else {
    alert("Selecciona al menos un checkbox para guardar.");
  }
};

let crearChequeoMensual = async () => {
  let idCita = 1;
  var inputs = document.querySelectorAll("input[name='chequeo']");
  var chequeoMensualInDto = {
    cita: idCita // Agregar el ID de la cita
  };

  Array.from(inputs).forEach(function (input) {
    if (input.value.trim() !== "") {
      chequeoMensualInDto[input.id] = input.value;
    }
  });

  console.log(chequeoMensualInDto);

  if (Object.keys(chequeoMensualInDto).length > 1) { // Contamos solo la clave 'cita'
    const response = await fetch(servidorAPI + 'Medico/chequeoMensual', {
      method: "POST",
      body: JSON.stringify(chequeoMensualInDto),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    try {
      if (response.ok) {
        $('#chequeo').modal('hide');
        location.reload();
      } else {
        $('#errorModal').modal('show');
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    alert("Completa al menos un campo de entrada para guardar.");
  }
};

pacientesTratados();
pacientesInhabilitados();
