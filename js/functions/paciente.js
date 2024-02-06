
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
          console.log("ENTRARA A CUIDADOR ACTIVO");
          const cuidador = await cuidadorActivo();
          console.log(cuidador);
    let msg="";

    let ms="";
    
    let usuario2 = JSON.parse(localStorage.getItem("datos")).usuario;
    if(usuario2=="paciente"){
    ms+='Mi perfil';
    }
    else{
      ms+="Perfil del Paciente";
    }

    document.getElementById("title").innerHTML=ms;
    document.getElementById("titleResponsive").innerHTML = ms;
if(paciente!=null){
    let fecha_registro=new Date(paciente.fecha_registro).toLocaleDateString();
    msg+=
    
  '<br>'+
    '<div class="datos">'+
    '<div class="col-md-6">'+
      '<div class="personales">'+
        '<div class="subtitle">'+
          '<h3>Datos Personales</h3>'+
        '</div>'+
        '<div class="fechaRegistro">'+
            '<label for="nombre"><b>Fecha de Registro:</b></label>'+
            '<label for="" id="fechaRegistro">'+fecha_registro+'</label>'+
          '</div>'+
          '<div class="nombrePaciente">'+
            '<label for="nombre"><b>Nombre:</b></label>'+
            '<label for="" id="nombre">'+paciente.nombre+'</label>'+
          '</div>'+
          '<div class="tipoDocumento">'+
            '<label for="tipoDocumento"><b>Tipo de Documento:</b></label>'+
            '<label for="" id="tipoDocumento">'+paciente.tipoDocumento+'</label>'+
          '</div>'+
          '<div class="documento">'+
            '<label for="documento"><b>Número de Documento:</b></label>'+
            '<label for="" id="documento">'+paciente.cedula+'</label>'+
          '</div>'+
          '<div class="fechaNacimiento">'+
            '<label for="fecha"><b>Fecha de Nacimiento:</b></label>'+
            '<label for="" id="fechaNac">'+paciente.nacimiento.toLocaleDateString()+'</label>'+
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
            '<label for="ocupacion"><b>Ocupación:</b></label>'+
            '<label for="" id="ocupacion">'+paciente.ocupacion+'</label>'+
          '</div>';}
          if(paciente.correo!=null && paciente.correo!= ""){
            msg+='<div class="correo">'+
              '<label for="correo"><b>Correo:</b></label>'+
              '<label for="" id="correo">'+paciente.correo+'</label>'+
            '</div>';}
          let usuario = JSON.parse(localStorage.getItem("datos")).usuario;
          var urlActual = window.location.href;
          console.log(paciente.tipoDocumento);
            localStorage.setItem("url", urlActual);
            localStorage.setItem("documento", paciente.tipoDocumento);
          if(usuario=="paciente"){
            msg+=
            '<div class="botonEditarPerfil">'+
          '<a href="editarPaciente.html"class="editarPerfil" >Editar Perfil</a>'+
          '</div>';
          }
          
      msg+='</div>'+
      '</div>'+
      '<div class="col-md-6">'+    
      '<div class="medicos">'+
        '<div class="subtitle">'+
          '<h3>Datos profesional de la salud</h3>'+
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
              '<label><b>Diabetes: </b></label>'+
              '<input type="checkbox" name="diabetes" id="diabetesTrue" class="styled-checkbox" '+ ( paciente.diabetes ? ' checked disabled' :   'disabled')+'>'+
          '</div>'+
          '<div class="hipertension">'+
              '<label><b>Hipertensión: </b></label>'+
              '<input type="checkbox" name="hipertension" id="hipertensionTrue" class="styled-checkbox" '+ ( paciente.hipertension ? ' checked disabled' :  'disabled')+'>'+
          '</div>'+ 
          '<div class="eps">'+
            '<label for="eps"><b>Eps:</b></label>'+
            '<label for="" id="eps">'+paciente.eps +'</label>'+
          '</div>';
          var urlActual = window.location.href;
          localStorage.setItem("url", urlActual);
        if(usuario=="medico"||usuario=="administrador"){
        msg+='<div class="botonEditarPerfil">'+
        '<a href="editarPaciente.html"class="editarPerfil" >Editar Perfil</a>'+
        '</div>';
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
    if(usuario=="medico"||usuario=="administrador"){
    msg+='<div class="botonAgregarAlergia">'+
    '<a href="alergias.html"class="alerg-nueva" id="addAlergia">Agregar Alergia</a>'+
    '</div>'+
    '<br>';
    }
}
else{
  let usuario = JSON.parse(localStorage.getItem("datos")).usuario;
  if(usuario=="medico"||usuario=="administrador"){
  msg+='<div class="botonAgregarAlergia">'+
  '<br><a href="alergias.html"class="alerg-nueva" >Agregar Alergia</a>'+
  '<br>'+
  '</div>';
  }
}
console.log("sfdv")
console.log(cuidador)
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
              '<input type="text" enterkeyhint="next" placeholder="Nombre del paciente" class="nombre" id="nombre" name="nombre" required>'+
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
              '<input type="text" enterkeyhint="next" placeholder="Teléfono de contacto" class="telefono" id="telefono" name="telefono" required>'+
            '</div>'+
          '</div>'+
          '<div class="form-row">'+
          '<div class="form-column">'+
          '<label for="direccion" id="data">Dirección:<label id="asq">*</label></label>'+
          '<br>'+
          '<input type="text" enterkeyhint="next" enterkeyhint="previous" placeholder="Dirección de la residencia" class="direccion" id="direccion" name="direccion" required>'+
        '</div>'+
            '<div class="form-column">'+
            '<label for="correo" id="data">Correo electrónico:<label id="asq">*</label></label>'+
          '<br>'+
          '<input type="text" enterkeyhint="next" enterkeyhint="previous" placeholder="ejemplo@gmail.com" class="correo" id="correo" name="correo" required>'+
            '</div>'+            
          '</div>'+
          '<div class="form-row">'+
          '<div class="form-column">'+
          '<label for="ocupacion" id="data">Ocupación:</label>'+
          '<br>'+
          '<input type="text" enterkeyhint="next" enterkeyhint="previous"  class="ocupacion" id="ocupacion" name="ocupacion" placeholder="Ocupación">'+
            '</div>'+
            '<div class="form-column">'+
              '<label for="selectedEps" id="data" class="labeleps">Eps:<label id="asq" class="labeleps">*</label></label>'+
              '<br>'+
              '<select id="selectedEps" required></select>'+
            '</div>'+ 
            '</div>'+
            '<div class="buttons">'+
            '<div class="btn-save">'+
              '<a href="perfil.html" class="cancelar" id="cancelar">Cancelar</a>'+
            '</div>'+
            '<div class="btn-save">'+
              '<button id="actualizarPerfil" type="submit" data-toggle="tooltip" data-placement="bottom" title="Actualizar Paciente" class="btn btn-primary" data-toggle="modal" data-target="#succesModal" >Actualizar</button>'+
            '</div>'+
            '</div>'+
            '</div>'+
        '</form>';

        document.getElementById("container").innerHTML=msg;
        document.getElementById("selectedDocumento").value = localStorage.getItem("documento");
        listaEps();
            }

           
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
              '<input type="number" step="any" class="peso" id="peso" placeholder="Peso en Kgs." name="peso" required>'+
            '</div>'+
            '<div class="form-column">'+
              '<label for="pesoseco" id="data">Peso Seco:<label id="asq">*</label></label>'+
              '<br>'+
              '<input type="number" step="any" class="pesoseco" id="pesoseco" placeholder="Peso en Kgs." name="pesoseco" required>'+
            '</div>'+
            
          '</div>'+
          '<div class="form-row">'+  
            '<div class="form-column">'+
              '<label for="estatura" id="data">Estatura:</label>'+
              '<br>'+
              '<input type="number" class="estatura" id="estatura" name="estatura" placeholder="Estatura en cm">'+
            '</div>'+ 
            '<div class="form-column enfermedades" >'+
              '<label for="hipertension" id="data2">Hipertensión: </label> ' +
              ' <input type="checkbox" id="hipertension" name="hipertension">'+
              '<label for="diabetes" id="data2" class="labeldiabetes">Diabetes: </label> ' +
              ' <input type="checkbox" id="diabetes" name="diabetes">'+
              '</div>'+
             
            '</div>'+'<div class="buttons">'+
            '<div class="btn-save">'+
              '<button onclick="cancelar()" class="cancelar">Cancelar</button>'+
            '</div>'+
            '<div class="btn-save">'+
              '<button type="submit" data-toggle="modal" data-toggle="tooltip" data-placement="bottom" title="Actualizar Datos" data-target="#successModal" id="actualizarPerfil">Actualizar</button>'+
            '</div>'+
            '</div>'+
            '</form>';

        document.getElementById("container").innerHTML=msg;
      
}
          
         
        
         
}



