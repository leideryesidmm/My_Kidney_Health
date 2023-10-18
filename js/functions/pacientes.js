let pacientesTratados = async () => {
  let cont = 1;
  try {
    const pacientes = await listarPacientes();
    let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let usuario = dato.usuario;

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
          '<img src="../img/ver.png" title="Ver Paciente" class="ver imagen-crecible-iconos" alt="Ver paciente"/>' +
          '</a>';
          if(usuario!="administrador"){
          msg+='<a class="icon-link" onclick="editarPaciente(\'' + clave + '\')">' +
          '<img src="../img/lapiz.png" title="Editar Paciente" alt="Editar paciente" class="actualizar imagen-crecible-iconos"/>' +
          '</a>';
          }
          msg+='<a href="" data-bs-toggle="modal" data-bs-target="#inhabilitarpaciente' + cont + '" type="button">' +
          '<img src="../img/cesta.png" title="Inhabilitar Paciente" alt="Inhabilitar paciente" class="inhabilitar imagen-crecible-iconos"/>' +
          '</a>' +


          '<a href="" data-bs-toggle="modal" data-bs-target="#restaurarContrasenia' + cont + '" type="button">' +
          '<img src="../img/restaurar.png" title="Restaurar Contraseña" alt="Restaurar Contraseña" class="restaurar imagen-crecible-iconos"/>' +
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
          '<button type="submit" onclick="inhabilitarPaciente(' + paciente.cedula + ')"" class="btn btn-danger">Inhabilitar</button>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>';

          msg +=
          '<div class="modal" tabindex="-1" id="restaurarContrasenia' + cont + '" role="dialog" aria-labelledby="successModalLabel" aria-hidden="true">' +
          '<div class="modal-dialog">' +
          '<div class="modal-content">' +
          '<div class="modal-header">' +
          '<h5 class="modal-title">Restaurar Contraseña</h5>' +
          '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
          '</div>' +
          '<div class="modal-body">' +
          '<p><b>¿Está seguro(a) de restaurar la contraseña de este paciente?</b></p>' +
          '<label class="cedulaPaciente" id="cedulaPaciente"><b>Cédula: </b>' + paciente.cedula + '</label><br>' +
          '<label class="cedulaPaciente" id="cedulaPaciente"><b>Nombre: </b>' + paciente.nombre + '</label>' +
          '</div>' +
          '<div class="modal-footer">' +
          '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>' +
          '<button type="submit" onclick="restaurarContrasenia(' + paciente.cedula +','+ cont + ')"" class="btn btn-danger">Restaurar</button>' +
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
  var urlActual = window.location.href;
          localStorage.setItem("url", urlActual);
  location.href="editarPaciente.html";
}


let pacientesInhabilitados = async () => {
  let cont = 1;


  try {
    const pacientes = await listarPacientesInactivos();
    let msg = "";

    if (pacientes != null && pacientes.length > 0) {
      msg += '<div class="container">' +
        '<h2>Pacientes inactivos</h2>' +
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
          '<img src="../img/actualizar.png" class="actualizar imagen-crecible-iconos"/>' +
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
