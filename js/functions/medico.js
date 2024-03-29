let medicosRegistrados = async (medicos) => {
  let cont = 1;
  try {
    medicos=await medicos;
    let msg = "";
    if (medicos != null && medicos.length > 0) {
      msg += '<br>' +
        '<table class="medico" id="medico">' +
        '<thead>' +
        '<tr>' +
        '<th>Nombre</th>' +
        '<th>Cédula</th>' +
        '<th>Acciones</th>' +
        '</tr>' +
        '</thead>';

      medicos.forEach((medico) => {
                msg +=
          '<tr>' +
          '<td>' + medico.nombre + '</td>' +
          '<td>' + medico.cedula + '</td>' +
          '<td>' +
          '<a href="" data-bs-toggle="modal" data-bs-target="#vermedico' + cont + '" type="button">' +
          '<img src="../img/ver.png" title="Ver Profesional" alt="Ver información del profesional" class="ver imagen-crecible-iconos"/>' +
          '</a>';
          msg+='<a href="" data-bs-toggle="modal" data-bs-target="#editarmedico' + cont + '" type="button" onclick="irEditarMedico('+medico.cedula+')">' +
          '<img src="../img/lapiz.png" title="Editar Profesional" class="actualizar imagen-crecible-iconos" alt="Editar profesional"/>' +
          '</a>' +
          '<a href="" data-bs-toggle="modal" data-bs-target="#inhabilitarmedico' + cont + '" type="button">' +
          '<img src="../img/cesta.png" title="Inhabilitar Profesional" alt="Inhabilitar médico" class="inhabilitar imagen-crecible-iconos"/>' +
          '</a>' +
          '<a href="" data-bs-toggle="modal" data-bs-target="#restaurarContrasenia' + cont + '" type="button">' +
          '<img src="../img/restaurar.png" title="Restaurar Contraseña" alt="Restaurar Contraseña" class="restaurar imagen-crecible-iconos"/>' +
          '</a>' +
          '</td>' +
          '</tr>';

        msg +=
          '<div class="modal" tabindex="-1" id="inhabilitarmedico' + cont + '">' +
          '<div class="modal-dialog">' +
          '<div class="modal-content">' +
          '<div class="modal-header">' +
          '<h5 class="modal-title">Inhabilitar Médico</h5>' +
          '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
          '</div>' +
          '<div class="modal-body">' +
          '<p><b>¿Está seguro(a) de inhabilitar este médico?</b></p>' +
          '<label class="cedulaMédico" id="cedulaMédico"><b>Cédula: </b>' + medico.cedula + '</label><br>' +
          '<label class="cedulaMédico" id="cedulaMédico"><b>Nombre: </b>' + medico.nombre + '</label>' +
          '</div>' +
          '<div class="modal-footer">' +
          '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>' +
          '<button type="submit" onclick="inhabilitarMedico(' + medico.cedula + ')"" class="btn btn-danger">Inhabilitar</button>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>';

          msg +=
          '<div class="modal" tabindex="-1" id="restaurarContrasenia' + cont + '">' +
          '<div class="modal-dialog">' +
          '<div class="modal-content">' +
          '<div class="modal-header">' +
          '<h5 class="modal-title">Restaurar Contraseña</h5>' +
          '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
          '</div>' +
          '<div class="modal-body">' +
          '<p><b>¿Está seguro(a) de restaurar la contraseña de este médico?</b></p>' +
          '<label class="cedulaMedico" id="cedulaMedico"><b>Cédula: </b>' + medico.cedula + '</label><br>' +
          '<label class="cedulaMedico" id="cedulaMedico"><b>Nombre: </b>' + medico.nombre + '</label>' +
          '</div>' +
          '<div class="modal-footer">' +
          '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>' +
          '<button type="submit" onclick="restaurarContrasenia(' + medico.cedula +','+ cont + ')"" class="btn btn-danger">Restaurar</button>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>';
          
        msg +=
        '<div class="modal" tabindex="-1" id="vermedico' + cont + '">' +
        '<div class="modal-dialog">' +
          '<div class="modal-content">' +
            '<div class="modal-header">' +
              '<h5 class="modal-title">Información del médico</h5>' +
              '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
            '</div>' +
            '<div class="modal-body">' +
              '<div class="row">' + 
                '<div class="col-md-6">' + 
                  '<div class="nombrePaciente">' +
                    '<label for="nombre"><b>Nombre:&nbsp</b></label>' +
                    '<label for="" id="nombre">' + medico.nombre + '</label>' +
                  '</div>' +
                  '<div class="documento">' +
                    '<label for="documento"><b>Documento:&nbsp</b></label>' +
                    '<label for="" id="documento">' + medico.cedula + '</label>' +
                  '</div>' +
                  '<div class="profesion">' +
                    '<label for="profesion"><b>Profesión:&nbsp</b></label>' +
                    '<label for="" id="profesion">' + medico.profesion + '</label>' +
                  '</div>' +
                '</div>' + 
                '<div class="col-md-6">' +
                  '<div class="especialidad">' +
                    '<label for="especialidad"><b>Especialidad:&nbsp</b></label>' +
                    '<label for="" id="especialidad">' + medico.especialidad + '</label>' +
                  '</div>' +
                  '<div class="celular">' +
                    '<label for="celular"><b>Celular:&nbsp</b></label>' +
                    '<label for="" id="celular">' + medico.celular + '</label>' +
                  '</div>' +
                  '<div class="correo">' +
                    '<label for="correo"><b>Correo:&nbsp</b></label>' +
                    '<label for="" id="correo">' + medico.correo + '</label>' +
                  '</div>' +
                '</div>' + 
              '</div>' + 
            '</div>' +
            '<div class="modal-footer">' +
              '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>' +
              '<button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>' +
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
        '<table class="medico">' +
        '<thead>' +
        '<tr>' +
        '<th>Nombre</th>' +
        '<th>Cédula</th>' +
        '<th>Acciones</th>' +
        '</tr>' +
        '</thead>' +
        '<tr>' +
        '<td colspan="3">' + "No hay médicos registrados." + '</td>' +
        '</tr>';
    }
    msg += '</table>';
    document.getElementById("medicos").innerHTML = msg;
  }
  catch (error) {
    console.error("Error in medicosRegistrados:", error);
  }
  new DataTable('#medico', {
    language: {
        url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
    },
});
};


let irEditarMedico = async (ced) => {
 
  localStorage.setItem("cedulaMedico", ced);
  location.href="editarMedico.html"
}


  
let medicosInhabilitados = async (medicos) => {
  let cont = 1;


  try {
    medicos = await medicos;
    let msg = "";

    if (medicos != null && medicos.length > 0) {
      msg += '<div class="container">' +
        '<h2>Médicos Inhabilitados</h2>' +
        '<br>' +
        '<table class="medicosInhabilitados" id="medicosInhabilitados">' +
        '<thead>' +
        '<tr>' +
        '<th>Nombre</th>' +
        '<th>Cédula</th>' +
        '<th>Acciones</th>' +
        '</tr>' +
        '</thead>';

      medicos.forEach((medico) => {

        msg +=
          '<tr>' +
          '<td>' + medico.nombre + '</td>' +
          '<td>' + medico.cedula + '</td>' +
          '<td>' +
          '<a  href="" data-bs-toggle="modal" data-toggle="tooltip" data-placement="bottom" title="Reactivar Profesional" data-bs-target="#habilitarmedico' + cont + '" type="button">' +
          '<img src="../img/actualizar.png" class="actualizar imagen-crecible-iconos" alt="actualizar"/>' +
          '</a >' +
          '</td>' +
          '</tr>' +
          '</div>' +
          '</div>';
        
        msg +=
          '<div class="modal" tabindex="-1" id="habilitarmedico' + cont + '">' +
          '<div class="modal-dialog">' +
          '<div class="modal-content">' +
          '<div class="modal-header">' +
          '<h5 class="modal-title">Habilitar Médico</h5>' +
          '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
          '</div>' +
          '<div class="modal-body">' +
          '<p><b>¿Está seguro(a) de habilitar nuevamente este médico?</b></p>' +
          '<label class="cedulaMedico" id="cedulaMedico"><b>Cédula: </b>' + medico.cedula + '</label><br>' +
          '<label class="cedulaMedico" id="cedulaMedico"><b>Nombre: </b>' + medico.nombre + '</label>' +
          '</div>' +
          '<div class="modal-footer">' +
          '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>' +
          '<button type="button" onclick="habilitarMedico(' + medico.cedula + ')"" "data-toggle="tooltip" data-placement="bottom" title="Habilitar Profesional" class="btn" id="btn-green">Habilitar</button>' +
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
    document.getElementById("medicosinhabilitados").innerHTML = msg;
  }
  catch (error) {
    console.error("Error in medicosRegistrados:", error);
  }
  new DataTable('#medicosInhabilitados', {
    language: {
        url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
    },
});
};



let mostrarInfoMedico=async()=>{
    let msg="";
  
      msg+='<div class="form-container">'+
          '<h2>Editar Médico</h2>'+
          '<form id="paciente-form" onsubmit="actualizarMedico(event)">';
          msg+='<p id="campos"><b>*</b>Campos requeridos</p>'+
          '<div class="form-row">'+
              '<div class="form-column">'+
                '<label for="nombre" id="data">Nombre del médico:<label id="asq">*</label></label>'+
                '<br>'+
                '<input type="text" enterkeyhint="next"  class="nombre" id="nombre" name="nombre" required>'+
              '</div>'+
              '<div class="form-column">'+
            '<label for="selectedDocumento" id="data">Tipo Documento<label id="asq">*</label></label>'+
            '<br>';
            
            msg+='<select id="selectedDocumento" required>'+
            '<option value="">Seleccione...</option>'+
            '<option value="Cédula de ciudadanía">Cédula de ciudadanía</option>'+
                    '<option value="Cédula de extranjería">Cédula de extranjería</option>'+
                    '<option value="Pasaporte">Pasaporte</option>'+
            '</select>';
              msg+='</div>'+
            '</div>'+
            '<div class="form-row">'+
            '<div class="form-column">'+
            '<label for="documento" id="data">Documento de Identidad:<label id="asq">*</label></label>'+
            '<br>'+
            '<input type="text" enterkeyhint="next" placeholder="Número de documento del profesional" class="documento" id="documento" name="documento" required disabled>'+
            '</div>'+
            '<div class="form-column">'+
                '<label for="telefono" id="data">Teléfono:<label id="asq">*</label></label>'+
                '<br>'+
                '<input type="text" enterkeyhint="next" placeholder="Teléfono de contacto" class="telefono" id="telefono" name="telefono" required>'+
              '</div>'+
            '</div>'+
            '<div class="form-row">'+
            '<div class="form-column">'+
                    '<label for="selectedProfesion" id="data">Profesión:<label id="asq">*</label></label>'+
                      '<br>'+
                     '<select name="selectedProfesion" id="selectedProfesion" required>'+
                     '<option value="">Seleccione...</option>'+
                     '<option value="Médico">Médico</option>'+
                     '<option value="Enfermera">Enfermera</option>'+                       
                      '</select>'+
                  '</div>'+
            '<div class="form-column">'+
                    '<label for="selectedEspecialidad" id="data">Especialidad:<label id="asq">*</label></label>'+
                      '<br>'+
                     '<select name="selectedEspecialidad" id="selectedEspecialidad" required>'+
                     '<option value="Nefrólogo">Nefrólogo</option>'+
                     '<option value="Médico general">Médico general</option>'+ 
                     '<option value="Enfermera de diálisis">Enfermera de diálisis</option>'+
                     '<option value="Otro">Otro</option>'+ 
                      '</select>'+
                    '</div>'+
                    
                '</div>'+
                '<div class="form-row">'+
                              '<div class="form-column" id="colcorreo">'+
                    '<label for="correo" id="data">Correo:<label id="asq">*</label></label>'+
                    '<br>'+
                    '<input type="text" class="correo" placeholder="ejemplo@gmail.com" id="correo" name="correo" required>'+
                  '</div>'+
                  '</div>'+
                  '<div class="buttons">'+
                  '<div class="btn-save">'+
                    '<a href="administrador.html" class="cancelar">Cancelar</a>'+
                  '</div>'+
                  '<div class="btn-save">'+
                    '<button type="submit" data-toggle="tooltip" data-placement="bottom" title="Actualizar Profesional" class="guardarMed">Actualizar</button>'+
                  '</div>'+
                  '</div>'
                  '</div>'
                  '</div>';
              document.getElementById("editarMedico").innerHTML=msg;
    }

function modalClose(id) {
  $('#'+id).modal('hide');
}



