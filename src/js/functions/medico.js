let medicosRegistrados = async () => {
  let cont = 1;
  try {
    const medicos = await listarMedicos();

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
        let clave = encodeURIComponent(CryptoJS.AES.encrypt(medico.cedula, "clave_secreta").toString())
        console.log(clave);
        msg +=
          '<tr>' +
          '<td>' + medico.nombre + '</td>' +
          '<td>' + medico.cedula + '</td>' +
          '<td>' +
          '<a href="" data-bs-toggle="modal" data-bs-target="#vermedico' + cont + '" type="button">' +
          '<img src="../img/ver.png" title="Ver Médico" class="ver"/>' +
          '</a>';
          msg+='<a href="" data-bs-toggle="modal" data-bs-target="#editarmedico' + cont + '" type="button" onclick="editarMedico('+medico.cedula+')">' +
          '<img src="../img/lapiz.png" title="Editar Médico" class="actualizar"/>' +
          '</a>' +
          '<a href="" data-bs-toggle="modal" data-bs-target="#inhabilitarmedico' + cont + '" type="button">' +
          '<img src="../img/cesta.png" title="Inhabilitar Medico" class="inhabilitar"/>' +
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


  
let medicosInhabilitados = async () => {
  let cont = 1;


  try {
    const medicos = await listarMedicosInactivos();
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
          '<a  href="" data-bs-toggle="modal" data-bs-target="#habilitarmedico' + cont + '" type="button">' +
          '<img src="../img/actualizar.png" class="actualizar"/>' +
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
          '<button type="button" onclick="habilitarMedico(' + medico.cedula + ')"" class="btn" id="btn-green">Habilitar</button>' +
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



let editarMedico=async()=>{
    let msg="";
  
      msg+='<div class="form-container">'+
          '<h2>Editar Información</h2>'+
          '<p id="campos"><b>*</b> Campos requeridos</p>'+
          '<form id="paciente-form" onsubmit="actualizarMedico(event)">';
          msg+='<div class="form-row">'+
              '<div class="form-column">'+
                '<label for="nombre" id="data">Nombre del médico:<label id="asq">*</label></label>'+
                '<br>'+
                '<input type="text" enterkeyhint="next"  class="nombre" id="nombre" name="nombre" required>'+
              '</div>'+
              '<div class="form-column">'+
            '<label for="selectedDocumento" id="data">Documento de Identidad:<label id="asq">*</label></label>'+
            '<br>';
            
            msg+='<select id="selectedDocumento" required>'+
            '<option value="">Seleccione...</option>'+
            '<option value="Cédula de ciudadanía">Cédula de ciudadanía</option>'+
                    '<option value="Tarjeta de identidad">Tarjeta de identidad</option>'+
                    '<option value="Cédula de extranjería">Cédula de extranjería</option>'+
                    '<option value="Pasaporte">Pasaporte</option>'+
            '</select>';
            
              msg+='</div>'+
              '<div class="form-column">'+
                '<label for="fecha" id="data">Fecha de nacimiento:<label id="asq">*</label></label>'+
                '<br>'+
                '<input type="date"  class="fecha" id="fecha" name="fecha" required>'+
              '</div>'+
            '</div>'+
            '<div class="form-row">'+
            '<div class="form-column">'+
            '<label for="selectedDocumento" id="data">Documento de Identidad:<label id="asq">*</label></label>'+
            '<br>';
            
            msg+='<select id="selectedDocumento" required>'+
            '<option value="">Seleccione...</option>'+
            '<option value="Cédula de ciudadanía">Cédula de ciudadanía</option>'+
                    '<option value="Tarjeta de identidad">Tarjeta de identidad</option>'+
                    '<option value="Cédula de extranjería">Cédula de extranjería</option>'+
                    '<option value="Pasaporte">Pasaporte</option>'+
            '</select>';
            
              msg+='</div>'+
            '<div class="form-column">'+
                '<label for="telefono" id="data">Teléfono:<label id="asq">*</label></label>'+
                '<br>'+
                '<input type="text" enterkeyhint="next"  class="telefono" id="telefono" name="telefono" required>'+
              '</div>'+
            '</div>'+
            '<div class="form-row">'+
            '<div class="form-column">'+
            '<label for="direccion" id="data">Dirección:<label id="asq">*</label></label>'+
            '<br>'+
            '<input type="text" enterkeyhint="next" enterkeyhint="previous"  class="direccion" id="direccion" name="direccion" required>'+
          '</div>'+
              '<div class="form-column">'+
              '<label for="correo" id="data">Correo electrónico:<label id="asq">*</label></label>'+
            '<br>'+
            '<input type="text" enterkeyhint="next" enterkeyhint="previous"  class="correo" id="correo" name="correo" placeholder="@" required>'+
              '</div>'+            
            '</div>'+
            '<div class="form-row">'+
            '<div class="form-column">'+
            '<label for="ocupacion" id="data">Ocupación:</label>'+
            '<br>'+
            '<input type="text" enterkeyhint="next" enterkeyhint="previous"  class="ocupacion" id="ocupacion" name="ocupacion" placeholder="Ocupación">'+
  
               
              '</div>'+
              '</div>'+
              '<div class="container">'+
              '<label for="correo" id="prueba">Foto de Perfil: &nbsp&nbsp</label>'+
              '<input type="file" value="Subir Foto" name="imageFile" id="imageFile">'+
              '</div>'+
              '<div class="buttons">'+
              '<div class="btn-save">'+
                '<a href="perfil.html" class="cancelar">Cancelar</a>'+
              '</div>'+
              '<div class="btn-save">'+
                '<button type="submit" class="guardarPac">Actualizar</button>'+
              '</div>'+
              '</div>'
              '</div>';
    }


    medicosRegistrados();
medicosInhabilitados();





