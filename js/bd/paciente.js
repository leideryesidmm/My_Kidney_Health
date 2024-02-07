let cedulaEncriptada = "";
let contraseniaEncriptada;
let dat= localStorage.getItem("datos");

let cambioContraseniaAlIniciar=async(event)=>{
  event.preventDefault();
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let cedul= decodeURIComponent(dato.cedula);
  event.preventDefault();
  await obtenerClave();
  await obtenerIv();
    const newcontrasenia = document.getElementById("newcontrasenia").value;
    if (newcontrasenia === "" ) {
      document.getElementById("errorMensaje").innerText = "Por favor ingrese una nueva contraseña.";
  }

  let nuevaContrasenia=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(newcontrasenia)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let  usuarioInDto={
    cedula:cedul, contrasenia:nuevaContrasenia
  }
  if (newcontrasenia !== "") {
    fetch(localStorage.getItem("servidorAPI") + "Usuario/cambioContraseniaPrimeraVez", {
      method: "PATCH",
      body: JSON.stringify(usuarioInDto),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": dato.token
      }
    })
      .then(response => {
        if (response.ok) {
          $('#successModal').modal('show');
        } else {
          $('#successModal').modal('show');
        }
      })
      .catch(error => {
        console.error(error);
      });     
}

}

function passwordVisibilityActual(inputId, iconClass) {
  var passwordInput = document.getElementById(inputId);
  var icon = document.querySelector("." + iconClass);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

let paciente=async(cedula)=>{
  usuario={
    cedula:cedula
  }
  let data = localStorage.getItem("datos");
    let dato=JSON.parse(data);
  let peticion=await fetch(localStorage.getItem("servidorAPI")+"Usuario/cedula", {
    method:"POST",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json",
      "Authorization": dato.token
    },
    body:JSON.stringify(usuario)
  })
    if (peticion.status===200) {
      const usuario=await peticion.json();
      return usuario;
    }
    else{
      return null;
    }
}

let cambioContrasenia = async (event) => {
  event.preventDefault();
  await obtenerClave();
  await obtenerIv();
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let cedula= (dato.cedula);
      const usuario=await paciente(cedula);
      let contraseniaBD="";
      if(usuario!=null){
      contraseniaBD=decodeURIComponent(CryptoJS.AES.decrypt(usuario.contrasenia, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
      }
const contraseniaAnterior = document.getElementById("contraseniaanterior").value;
const nuevaContrasenia = document.getElementById("newcontrasenia").value;
let contraseniaNueva=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(nuevaContrasenia)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      
if (contraseniaAnterior === contraseniaBD) {
  let usuarioInDto = { cedula: cedula, contrasenia: contraseniaNueva };


  await fetch(localStorage.getItem("servidorAPI")+"Usuario/cambiarContrasenia", {
    method:"PATCH",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json",
      "Authorization": dato.token
    },
    body:JSON.stringify(usuarioInDto)
  })
  .then(response => {
    if (response.ok) {
      dato.contrasenia=contraseniaNueva;
      const nuevaData = JSON.stringify(dato);
      localStorage.setItem("datos", nuevaData);
      $('#contraseniacambiada').modal('show');

      document.getElementById("contraseniaanterior").value = "";
      document.getElementById("newcontrasenia").value = "";
      $('#nuevacontrasenia').modal('hide');
    } else {
      alert("Error al cambiar la contraseña");
    }
  })
  .catch(error => {
    alert("Error al cambiar la contraseña");
  });
}
else {
$('#contraseniaerronea').modal('show');
document.getElementById("contraseniaanterior").value = "";
document.getElementById("newcontrasenia").value = "";
$('#btnAceptar').click(function() {
  $('#contraseniaerronea').modal('hide');
});
}
};

let listaPacientes = async () => {
  await obtenerClave();
  await obtenerIv();
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);

      let cedulaEncriptada="";
      if(usuario=="medico" || usuario=="administrador"){
        let cedulaDesencriptada = localStorage.getItem("cedulaPaciente");
        cedulaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedulaDesencriptada)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      }
      else{
        cedulaEncriptada=cedul;
      }
  let pacienteInDto = {
    cedula: cedulaEncriptada
  }
    const peticion= await fetch(localStorage.getItem("servidorAPI")+"paciente/findPacienteByCedula/false",{
      method:"POST",
      headers: {
        "Accept":"application/json",
    "Content-Type":"application/json",
    "Authorization": dato.token
      },
      body: JSON.stringify(pacienteInDto)
});
let pacienteAct={}
    const paciente=await peticion.json();
    let nombreDesencriptado= decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    let cedulaDesencriptado= decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    let celularDesencriptado= decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].celular,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    let direccionDesencriptada= decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].direccion,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    let ocupacionDesencriptada= decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].ocupacion,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    let correoDesencriptada= decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].correo,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    let tipoDocumentoDesencriptada= decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].tipoDocumento,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    let epsDesencriptada= paciente[0].eps.nombre;
    let peso= decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].peso,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    let pesoSeco=decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].pesoSeco,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    let tiposangre=decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].tipoSangre,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    let rh=decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].rh,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    let altura=decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].altura,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    let nacimiento=paciente[0].fechaNacimiento.split('T');
    let fechaNacimiento=nacimiento[0];
    let fecha=new Date(fechaNacimiento);
    let fechaRegistro=paciente[0].fechaRegistro.split('T');
    let fecha_registro=fechaRegistro[0];
    let fecha_registrado=new Date(fecha_registro);
    let diabetes=paciente[0].diabetes;
    let hipertension=paciente[0].hipertension;
    let cedula=cedulaDesencriptado;
    let ocupacion=ocupacionDesencriptada;
    let correo=correoDesencriptada;
    let tipo_documento=tipoDocumentoDesencriptada;

  pacienteAct = {
    nombre: nombreDesencriptado, cedula:cedula, celular: celularDesencriptado, direccion: direccionDesencriptada, eps: epsDesencriptada, peso: peso, pesoSeco: pesoSeco, tiposangre: tiposangre, rh: rh, altura: altura, nacimiento: fecha, diabetes: diabetes, hipertension: hipertension, ocupacion:ocupacion, correo:correo, tipoDocumento:tipo_documento, fecha_registro:fecha_registrado

  }
  return pacienteAct;
}

let cuidadorActivo = async () => {
  await obtenerClave();
  await obtenerIv();
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);

      let cedulaEncriptada="";
      if(usuario=="medico"||usuario=="administrador"){
        let cedulaDesencriptada = localStorage.getItem("cedulaPaciente");
        cedulaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedulaDesencriptada)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      }
      else{
        cedulaEncriptada=cedul;
      }
  let pacienteInDto = {
    cedula: cedulaEncriptada
  }
  const peticion = await fetch(localStorage.getItem("servidorAPI") + "paciente/cuidador/findCuidadorActivo", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": dato.token
    },
    body: JSON.stringify(pacienteInDto)
  });
  let cuidadorAct = {}
  if (peticion.status === 200) {
    const cuidadores = await peticion.json();
    let nombreDesencriptado = decodeURIComponent(CryptoJS.AES.decrypt(cuidadores.cuidador.nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    let celularDesencriptado = decodeURIComponent(CryptoJS.AES.decrypt(cuidadores.cuidador.telefono,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    let direccionDesencriptada = decodeURIComponent(CryptoJS.AES.decrypt(cuidadores.cuidador.direccion,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    let parentescoDesencriptado = cuidadores.cuidador.parentesco.descripcion;

    cuidadorAct = {
      nombre: nombreDesencriptado, celular: celularDesencriptado, direccion: direccionDesencriptada, parentesco: parentescoDesencriptado
    }
    return cuidadorAct;
  }
  else {
    return null;
  }

}

let alergias = async () => {
  await obtenerClave();
  await obtenerIv();
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);

      let cedulaEncriptada="";
      if(usuario=="medico" || usuario=="administrador"){
        let cedulaDesencriptada = localStorage.getItem("cedulaPaciente");
        cedulaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedulaDesencriptada)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
    }
      else{
        cedulaEncriptada=cedul;
      }
  let pacienteInDto = {
    cedula: cedulaEncriptada
  }
  let msgalergias="";
    const peticion= await fetch(localStorage.getItem("servidorAPI")+"DatosMedicos/alergia/listByPaciente",{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json",
        "Authorization": dato.token
      },
      body:JSON.stringify(pacienteInDto)
    });
    if (peticion.status === 200) {
    const alergias=await peticion.json();   
    
    
    alergias.forEach(alergia => {
      let alergiaEncriptada = decodeURIComponent(CryptoJS.AES.decrypt(alergia.alergia.nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
      msgalergias = msgalergias + alergiaEncriptada + ", "
    });
    msgalergias = msgalergias.substring(0, msgalergias.length - 2);
  }
  return msgalergias;
}

let encontrarPaciente = async () => {
  await obtenerClave();
  await obtenerIv();
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  let usuario = decodeURIComponent(dato.usuario);
  let cedul= decodeURIComponent(dato.cedula);
  let cedulaEncriptada="";
  if(usuario==="medico" || usuario=="administrador"){
    let cedulaDesencriptada = localStorage.getItem("cedulaPaciente");
    cedulaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedulaDesencriptada)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  }
      else{
        cedulaEncriptada=cedul;
      }    
  const peticion = await fetch(localStorage.getItem("servidorAPI") + "paciente/findPacienteByCedula/false", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": dato.token
    },
    body:JSON.stringify({
      cedula:cedulaEncriptada
    })
  });

  const paciente = await peticion.json();
  let pacienteActual={
    cedula:paciente[0].cedula, contrasenia:paciente[0].contrasenia, rh:paciente[0].rh,
    tipoSangre:paciente[0].tipoSangre
  }
  if(usuario=="paciente"){
  var decryptedNombre = decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),
  {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  document.getElementById("nombre").value = decryptedNombre;
  var fechaNacimiento = paciente[0].fechaNacimiento.split("T")[0];
  document.getElementById("fecha").value = fechaNacimiento;
  var decryptedDireccion = decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].direccion,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  document.getElementById("direccion").value = decryptedDireccion;
  var decryptedTelefono = decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].celular,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  document.getElementById("telefono").value = decryptedTelefono;
  if(paciente.ocupacion!=""){
    var decryptedOcupacion = decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].ocupacion,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    document.getElementById("ocupacion").value = decryptedOcupacion;
    }
    if(paciente.correo!=""){
      var decryptedCorreo = decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].correo,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
      document.getElementById("correo").value = decryptedCorreo;
    }
    const selectEps = document.getElementById('selectedEps');
  const descripcionEps= paciente[0].eps.nombre;
  
  Array.from(selectEps.options).forEach((option, index) => {
    if (option.textContent === descripcionEps) {
      selectEps.selectedIndex = index;
    }
  })
   
  
  }
  else{
    var decryptedNombre = decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),
    {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  document.getElementById("nombre").value = decryptedNombre;

  var decryptedCedula = decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),
  {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  document.getElementById("documento").value = decryptedCedula;
  if(paciente[0].hipertension==true){
  document.getElementById("hipertension").checked=true;
  }
  if(paciente[0].diabetes==true){
  document.getElementById("diabetes").checked=true;
  }
  var peso = decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].peso,CryptoJS.enc.Utf8.parse(cajaNegra2),
  {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  document.getElementById("peso").value = peso;
  var pesoseco=decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].pesoSeco,CryptoJS.enc.Utf8.parse(cajaNegra2),
  {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  document.getElementById("pesoseco").value = pesoseco;
  var decryptedEstatura = decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].altura,CryptoJS.enc.Utf8.parse(cajaNegra2),
  {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  document.getElementById("estatura").value=decryptedEstatura;
}
  return pacienteActual;
  
}

let listaEps = async () => {
  let data = localStorage.getItem("datos");
    let dato=JSON.parse(data);
  const peticion = await fetch(localStorage.getItem("servidorAPI") + "DatosMedicos/ListEps", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": dato.token
    }
  });

  const selectEps = document.getElementById('selectedEps');

  if (selectEps.length == 0) {
    const epss = await peticion.json();
    const optionSeleccionar = document.createElement('option');
    optionSeleccionar.textContent = "Seleccione...";
    selectEps.appendChild(optionSeleccionar);
    epss.forEach(eps => {
      const option = document.createElement('option');
      option.value = eps.idEps;
      option.textContent = eps.nombre;
      selectEps.appendChild(option);
    });
  }
  encontrarPaciente();
}

function cancelar(){
  location.href="pacientes.html";
}

let actualizarPaciente = async (event) => {
  event.preventDefault();
  await obtenerClave();
  await obtenerIv();
  var botonActualizar = document.getElementById("actualizarPerfil");
            botonActualizar.style.background = "gray";
            botonActualizar.disabled = true;
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);
      let cedulaEncriptada="";
    

      if(usuario=="medico" || usuario=="administrador"){
        let cedulaDesencriptada = localStorage.getItem("cedulaPaciente");
        cedulaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedulaDesencriptada)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
       }
      else{
        cedulaEncriptada=cedul;
      }
  var pacienteInDto = {
    cedula: cedulaEncriptada
  }
    const peticion= await fetch(localStorage.getItem("servidorAPI")+"paciente/findPacienteByCedula/false",{
      method:"POST",
      headers: {
        "Accept":"application/json",
    "Content-Type":"application/json",
    "Authorization": dato.token
      },
      body: JSON.stringify(pacienteInDto)
});
    const paciente=await peticion.json();
  
  if(usuario=="paciente"){

  let nombre = document.getElementById("nombre").value;
  let fechaNacimiento= document.getElementById("fecha").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let selectTipoDocumento = selectedDocumento.options[selectedDocumento.selectedIndex];
  let tipo_documento = selectTipoDocumento.value;
  let peso = paciente[0].peso;
  let pesoseco=paciente[0].pesoSeco;
  let ocupacion=document.getElementById("ocupacion").value;
  let correo=document.getElementById("correo").value;
  let estatura=paciente[0].altura;
  var diabetes = paciente[0].diabetes;
  var fecha_registro=paciente[0].fechaRegistro;
     var hipertension = paciente[0].hipertension;
     let selectedOption = selectedEps.options[selectedEps.selectedIndex];
  let eps = selectedOption.value;
      

  pacienteInDto = {
    direccion: CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(direccion)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(),
    fechaNacimiento: fechaNacimiento+"T00:00:00.000Z",
    peso:peso,
    pesoSeco:pesoseco,
    nombre: CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(nombre)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(),
    eps: parseInt(eps,10),
    celular: CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(telefono)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(),
    ocupacion: CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(ocupacion)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(),
    correo: CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(correo)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(),
    activo:true,
    cedula:cedulaEncriptada,
    tipoSangre:paciente[0].tipoSangre,
    tipoDocumento:CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(tipo_documento)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(),
    rh:paciente[0].rh,
    contrasenia:paciente[0].contrasenia,
    altura:estatura,
    cambioContrasenia:paciente[0].cambioContrasenia,
    diabetes:diabetes,
    fechaRegistro:fecha_registro,
    hipertension:hipertension,
  };
}
else{
  let nombre = paciente[0].nombre;
  let fechaNacimiento=paciente[0].fechaNacimiento;
  let telefono = paciente[0].celular;
  let direccion = paciente[0].direccion;
  let tipo_documento= paciente[0].tipoDocumento;
  let peso = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(document.getElementById("peso").value)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let pesoseco=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(document.getElementById("pesoseco").value)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let ocupacion=paciente[0].ocupacion;
  let correo=paciente[0].correo;
  let fecha_registro=paciente[0].fechaRegistro;
  let cambiocontrasenia=paciente[0].cambioContrasenia;
  let estatura=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(document.getElementById("estatura").value)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let eps = paciente[0].eps.idEps;
  let diabetes = document.getElementById('diabetes').checked;
  let hipertension = document.getElementById('hipertension').checked;

  pacienteInDto = {
    direccion: direccion,
    fechaNacimiento: fechaNacimiento,
    peso:peso,
    pesoSeco:pesoseco,
    nombre: nombre,
    eps: eps,
    celular: telefono,
    ocupacion: ocupacion,
    cambioContrasenia:cambiocontrasenia,
    correo: correo,
    fechaRegistro:fecha_registro,
    activo:true,
    cedula:cedulaEncriptada,
    tipoSangre:paciente[0].tipoSangre,
    tipoDocumento:tipo_documento,
    rh:paciente[0].rh,
    contrasenia:paciente[0].contrasenia,
    altura:estatura,
    diabetes:diabetes,
    hipertension:hipertension, 
  };
  
}
  fetch(localStorage.getItem("servidorAPI") + "paciente/actualizar", {
    method: "PATCH",
    body: JSON.stringify(pacienteInDto),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": dato.token
    }
  })
    .then(response => {
      if (response.ok) {
        if (response.status === 200 || response.status === 204) {
          $('#successModal').modal('show');
          
            
        }
      } else {
      }
    })
    .catch(error => {
      console.error(error);
    });
    
}
function cerrarModal() {
  modal.style.display = 'none';
}

let eventoPerfil = () => {
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      await perfil();
    } catch (error) {
      console.error("Error in DOMContentLoaded:", error);
    }
  });
};
