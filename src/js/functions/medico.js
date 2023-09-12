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
