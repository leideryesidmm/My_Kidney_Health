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
            '<input type="text" enterkeyhint="next"  class="documento" id="documento" name="documento" required>'+
            '</div>'+
            '<div class="form-column">'+
                '<label for="telefono" id="data">Teléfono:<label id="asq">*</label></label>'+
                '<br>'+
                '<input type="text" enterkeyhint="next"  class="telefono" id="telefono" name="telefono" required>'+
              '</div>'+
            '</div>'+
            '<div class="form-row">'+
            '<div class="form-column">'+
                    '<label for="selectEspecialidad" id="data">Especialidad:<label id="asq">*</label></label>'+
                      '<br>'+
                     '<select name="selectEspecialidad" class="custom-select" id="selectEspecialidad" required>'+
                                               
                      '</select>'+
                    '</div>'+
                    '<div class="form-column">'+
                    '<label for="aniosExperiencia" id="data">Años de Especialidad:<label id="asq">*</label></label>'+
                    '<br>'+
                    '<input type="text" class="aniosExperiencia" id="aniosExperiencia" name="aniosExperiencia" required>'+
                  '</div>'+
                '</div>'+
                '<div class="form-row">'+
                              '<div class="form-column">'+
                    '<label for="correo" id="data">Correo:<label id="asq">*</label></label>'+
                    '<br>'+
                    '<input type="text" class="correo" id="correo" name="correo" required>'+
                  '</div>'+
                  '</div>'+
                  '<div class="buttons">'+
                  '<div class="btn-save">'+
                    '<a href="administrador.html" class="cancelar">Cancelar</a>'+
                  '</div>'+
                  '<div class="btn-save">'+
                    '<button type="submit" class="guardarPac">Actualizar</button>'+
                  '</div>'+
                  '</div>'
                  '</div>'
                  '</div>';
              document.getElementById("editarMedico").innerHTML=msg;
    }
