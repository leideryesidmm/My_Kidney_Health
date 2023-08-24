const data = localStorage.getItem("datos");
const dato=JSON.parse(data);
    var usuario = dato.usuario;
    console.log(usuario);
if(usuario=="paciente"){
     ced = decodeURIComponent(dato.cedula);
    
}
else{
    cedulEncriptad = localStorage.getItem("cedulaPaciente")
    ced=decodeURIComponent(cedulEncriptad);
}

function calcularEdad(nacimiento) {
  console.log(nacimiento);
  const fechaNacimiento = new Date(nacimiento);
  console.log(fechaNacimiento);
  const fechaActual = new Date();
  console.log(fechaActual);
  const edadMilisegundos = fechaActual - fechaNacimiento;
  console.log(edadMilisegundos);
  const edad = new Date(edadMilisegundos).getFullYear() - 1970;
  console.log(edad);
return edad;
}

let perfil=async()=>{
        try {
          const paciente = await listaPacientes();
          console.log(paciente);
          const alergia = await alergias();
          const cuidador = await cuidadorActivo();
          console.log(cuidador);
    let msg="";

    let ms="";
    
    let usuario2 = JSON.parse(localStorage.getItem("datos")).usuario;
    if(usuario2=="paciente"){
    ms+='Mi perfil';
    }
    else{
      ms+="Información del Paciente";
    }

    document.getElementById("title").innerHTML=ms;
if(paciente!=null){
    msg+=

  '<br>'+
    '<div class="datos">'+
    '<div class="col-md-6">'+
      '<div class="personales">'+
        '<div class="subtitle">'+
          '<h3>Datos Personales</h3>'+
        '</div>'+
          '<div class="nombrePaciente">'+
            '<label for="nombre"><b>Nombre:</b></label>'+
            '<label for="" id="nombre">'+paciente.nombre+'</label>'+
          '</div>'+
          '<div class="documento">'+
            '<label for="documento"><b>Documento:</b></label>'+
            '<label for="" id="documento">'+paciente.cedula+'</label>'+
          '</div>'+
          '<div class="fechaNacimiento">'+
            '<label for="fecha"><b>Fecha de Nacimiento:</b></label>'+
            '<label for="" id="fechaNac">'+paciente.nacimiento+'</label>'+
          '</div>'+
          '<div class="edad">'+
            '<label for="edad"><b>Edad:</b></label>'+
            '<label for="" id="edad">'+calcularEdad(paciente.nacimiento) + ' años</label>'+
          '</div>'+
          '<div class="direccion">'+
            '<label for="direccion"><b>Dirección:</b></label>'+
            '<label for="" id="direccion">'+paciente.direccion+'</label>'+
          '</div>'+
          '<div class="telefono">'+
            '<label for="telefono"><b>Celular:</b></label>'+
            '<label for="" id="telefono">'+paciente.celular+'</label>'+
          '</div>';
          if(paciente.ocupacion!=null && paciente.ocupacion!= ""){
          msg+='<div class="ocupacion">'+
            '<label for="ocupacion"><b>Ocupacion:</b></label>'+
            '<label for="" id="ocupacion">'+paciente.ocupacion+'</label>'+
          '</div>';}
          if(paciente.correo!=null && paciente.correo!= ""){
            msg+='<div class="correo">'+
              '<label for="correo"><b>Correo:</b></label>'+
              '<label for="" id="correo">'+paciente.correo+'</label>'+
            '</div>';}
          let usuario = JSON.parse(localStorage.getItem("datos")).usuario;
          var urlActual = window.location.href;
          console.log(paciente.tipo_documento);
            localStorage.setItem("url", urlActual);
            localStorage.setItem("documento", paciente.tipo_documento);
          if(usuario=="paciente"){
          msg+='<a href="editarPaciente.html"class="alerg-nueva" >Editar Perfil</a>';
          }
          
      msg+='</div>'+
      '</div>'+
      '<div class="col-md-6">'+    
      '<div class="medicos">'+
        '<div class="subtitle">'+
          '<h3>Datos Médicos</h3>'+
        '</div>'+
          '<div class="peso">'+
            '<label for="peso"><b>Peso:</b></label>'+
            '<label for="" id="peso">'+paciente.peso + ' Kgs.</label>'+
          '</div>'+
          '<div class="pesoseco">'+
            '<label for="pesoseco"><b>Peso seco:</b></label>'+
            '<label for="" id="pesoseco">'+paciente.pesoSeco + ' Kgs.</label>'+
          '</div>'+
          '<div class="grupoSanguineo">'+
            '<label for="grupoSanguineo"><b>Grupo sanguíneo:</b></label>'+
            '<label for="tiposangre" class="tipo_sangre" id="tipo_sangre">'+paciente.tiposangre+'</label>'+
            '</div>'+
            '<div class="rh">'+
            '<label for="rh"><b>Rh:</b></label>'+
            '<label for="rh" class="rh" id="rh">'+paciente.rh+'</label>'+
          '</div>';
          if(paciente.altura!=null && paciente.altura!= ""){
          msg+='<div class="estatura">'+
              '<label for="estatura"><b>Estatura:</b></label>'+
              '<label for="" id="estatura">'+paciente.altura + ' cm.</label>'+
          '</div>';
          }
          msg+='<div class="diabetes">'+
              '<label><b>Diabetes</b></label>'+
              '<input type="checkbox" name="diabetes" id="diabetesTrue" class="styled-checkbox" '+ (paciente.diabetes ? 'checked disabled' : 'disabled')+'>'+
          '</div>'+
          '<div class="hipertension">'+
              '<label><b>Hipertensión</b></label>'+
              '<input type="checkbox" name="hipertension" id="hipertensionTrue" class="styled-checkbox" '+ (paciente.hipertension ? 'checked disabled' : 'disabled')+'>'+
          '</div>'+ 
          '<div class="eps">'+
            '<label for="eps"><b>Eps:</b></label>'+
            '<label for="" id="eps">'+paciente.eps +'</label>'+
          '</div>';
          var urlActual = window.location.href;
          localStorage.setItem("url", urlActual);
        if(usuario=="medico"){
        msg+='<a href="editarPaciente.html"class="alerg-nueva" >Editar Perfil</a>';
        }
        msg+='</div>'+
        '</div>'+
    '</div>';
}
if(alergia!=null && alergia !== ""){
    msg+=
    '<br>'+
    '<div class="alergiasPac">'+
            '<h3 class="titleAlergia">'+
                'Alérgico a:'+
            '</h3>'+
            '<p class="dataAlergia" id="dataAlergia" name="dataAlergia">'+alergia+
            '</p>'+ 
    '</div>';
    let usuario = JSON.parse(localStorage.getItem("datos")).usuario;
    if(usuario=="medico"){
    msg+='<a href="alergias.html"class="alerg-nueva" >Agregar Alergia</a>'+
    '<br>';
    }
}
else{
  let usuario = JSON.parse(localStorage.getItem("datos")).usuario;
  if(usuario=="medico"){
  msg+='<br><a href="alergias.html"class="alerg-nueva" >Agregar Alergia</a>'+
  '<br>';
  }
}
if(cuidador!=null && cuidador !== ""){
   msg+=
   '<br>'+
   '<div class="dataCuidadorUp">'+
    '<div class="nav-cuidador">'+
        '<div class="inf-cuidador">'+
            '<p class="nombreCuidador" id="nombreCuidador" name="nombreCuidador">' + cuidador.nombre + '</p>'+
            '<p class="cuidador">Cuidador</p>'+
        '</div>'+
        '<div class="img-cuidador">';
        let usuario2 = JSON.parse(localStorage.getItem("datos")).usuario;
  if(usuario2=="paciente"){
        msg+='<a href="cuidador.html" class="ver-cuidador">Ver Cuidador</a>';
  }
        msg+='</div>'+
    '</div>'+
    
'</div>'+
    '<div class="dataCuidador">'+
        '<div class="info-cuidador">'+
        '<p class="direccion-cuidador"><strong>Dirección:</strong></p>'+
        '<p class="dataDireccionCuidador" id="dataDireccionCuidador" name="dataDireccionCuidador">'+cuidador.direccion+'</p>'+
        '</div>'+
        '<div class="info-cuidador">'+
        '<p class="telefono-cuidador"><strong>Teléfono de Contacto:</strong></p>'+
        '<p class="dataTelefonoCuidador" id="dataTelefonoCuidador" name="dataTelefonoCuidador">'+cuidador.celular+'</p>'+
        '</div>'+
        '<div class="info-cuidador">'+
        '<p class="parentesco-cuidador"><strong>Parentesco:</strong></p>'+
        '<p class="dataParentescoCuidador" id="dataParentescoCuidador" name="dataParentescoCuidador">'+cuidador.parentesco+'</p>'+
        '</div>'+
        
    '</div>'+
'</div>'+
'</div>';
}
else{
  let usuario = JSON.parse(localStorage.getItem("datos")).usuario;
  if(usuario=="paciente"){
    msg+='<br><a href="cuidador.html"class="cuidador-nuevo" >Agregar Cuidador</a>';
  }
}

document.getElementById("perfil").innerHTML = msg;
let usuario = JSON.parse(localStorage.getItem("datos")).usuario;
    if(usuario=="paciente"){
let ms="";
ms+='<div class="cerrar">'+
        '<a class="btn" type="button" id="btnguardar" data-bs-toggle="modal" data-bs-target="#nuevacontrasenia">Cambiar contraseña</a>'+
    '</div>';
    document.getElementById("cambiarContrasenia").innerHTML= ms;
}
        }
catch (error) {
    console.error("Error in perfil():", error);
}
}

let editarPaciente=async()=>{
  let msg="";



        let usuario = JSON.parse(localStorage.getItem("datos")).usuario;
  if(usuario=="paciente"){
    msg+='<div class="form-container">'+
        '<h2>Editar mi perfil</h2>'+
        '<p id="campos"><b>*</b> Campos requeridos</p>'+
        '<form id="paciente-form" onsubmit="actualizarPaciente(event)">';
        msg+='<div class="form-row">'+
            '<div class="form-column">'+
              '<label for="nombre" id="data">Nombre del paciente:<label id="asq">*</label></label>'+
              '<br>'+
              '<input type="text" enterkeyhint="next"  class="nombre" id="nombre" name="nombre" required>'+
            '</div>'+
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
          
          msg+='<select id="selectedDocumento" class="custom-select" required>'+
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
              '<label for="ocupacion" id="data">Ocupación:</label>'+
              '<br>'+
              '<input type="text" enterkeyhint="next" enterkeyhint="previous"  class="ocupacion" id="ocupacion" name="ocupacion" placeholder="Ocupación">'+
            '</div>'+
            
          '</div>'+
          '<div class="form-column">'+
              '<label for="correo" id="data">Correo:</label>'+
              '<br>'+
              '<input type="text" enterkeyhint="send"  class="correo" id="correo" name="correo" placeholder="Correo Electrónico">'+
            '</div>';}

           
else{

  msg+='<div class="form-container">'+
        '<h1>Editar Paciente</h1>'+
        '<p id="campos"><b>*</b> Campos requeridos</p>'+
        '<form id="paciente-form" onsubmit="actualizarPaciente(event)">';
          msg+=
          '<div class="form-row">'+
            '<div class="form-column">'+
              '<label for="nombre" id="data">Nombre del paciente:</label>'+
              '<br>'+
              '<input type="text" class="nombre" id="nombre" name="nombre" required disabled>'+
            '</div>'+
            '<div class="form-column">'+
              '<label for="documento" id="data">Documento:</label>'+
              '<br>'+
              '<input type="text" class="documento" id="documento" name="documento" required disabled>'+
            '</div>'+
          '</div>'+
          '<div class="form-row">'+
          '<div class="form-column">'+
              '<label for="peso" id="data">Peso:<label id="asq">*</label></label>'+
              '<br>'+
              '<input type="text" class="peso" id="peso" name="peso" required>'+
            '</div>'+
            '<div class="form-column">'+
              '<label for="pesoseco" id="data">Peso Seco:<label id="asq">*</label></label>'+
              '<br>'+
              '<input type="text" class="pesoseco" id="pesoseco" name="pesoseco" required>'+
            '</div>'+
            
          '</div>'+
          '<div class="form-row">'+  
            '<div class="form-column">'+
              '<label for="selectedEps" id="data">Eps:<label id="asq">*</label></label>'+
              '<br>'+
              '<select id="selectedEps" class="custom-select" required></select>'+
            '</div>'+ 
            '<div class="form-column">'+
              '<label for="estatura" id="data">Estatura:</label>'+
              '<br>'+
              '<input type="text" class="estatura" id="estatura" name="estatura" placeholder="Estatura en cm">'+
            '</div>'+         
          '</div>'+
          
          
         
            '<div class="form-column" id="enf">'+
            '<div class="hipertension">'+
              '<label for="hipertension" id="data2">Hipertensión:</label>'+
              '<input type="checkbox" id="hipertension" name="hipertension">'+
              '</div>'+
              '<div class="diabetes">'+
              '<label for="diabetes" id="data2">Diabetes:</label>'+
              '<input type="checkbox" id="diabetes" name="diabetes">'+
              '</div>'+
            '</div>';
}
          
          msg+='<div class="buttons">'+
          '<div class="btn-save">'+
            '<button onclick="cancelar()" class="cancelar">Cancelar</button>'+
          '</div>'+
          '<div class="btn-save">'+
            '<button type="submit" class="guardarPac">Actualizar</button>'+
          '</div>'+
          '</div>'+
        '</form>'+
          '</div>';

          document.getElementById("container").innerHTML=msg;
          document.getElementById("selectedDocumento").value = localStorage.getItem("documento");
}