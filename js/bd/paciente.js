
var cedulaEncriptada = "";
var contraseniaEncriptada;
let dat= localStorage.getItem("datos");

//ya
let cambioContraseniaAlIniciar=async(event)=>{
  event.preventDefault();
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let cedul= decodeURIComponent(dato.cedula);
  event.preventDefault();
    const newcontrasenia = document.getElementById("newcontrasenia").value;
    console.log(cedul);
    if (newcontrasenia === "" ) {
      document.getElementById("errorMensaje").innerText = "Por favor ingrese una nueva contraseña.";
  }

  let nuevaContrasenia=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(newcontrasenia), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let  usuarioInDto={
    cedula:cedul, contrasenia:nuevaContrasenia
  }
  if (newcontrasenia !== "") {
    fetch(localStorage.getItem("servidorAPI") + "Usuario/cambioContraseniaPrimeraVez", {
      method: "PATCH",
      body: JSON.stringify(usuarioInDto),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
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
//ya
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

//ya
let cambioContrasenia = async (event) => {
  event.preventDefault();

  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let cedula= decodeURIComponent(dato.cedula);
      let contrasenia=decodeURIComponent(dato.contrasenia);
      let contraseniaBD=CryptoJS.AES.decrypt(contrasenia, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);

const contraseniaAnterior = document.getElementById("contraseniaanterior").value;
const nuevaContrasenia = document.getElementById("newcontrasenia").value;
let contraseniaNueva=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(nuevaContrasenia), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

if (contraseniaAnterior === contraseniaBD) {
  let usuarioInDto = { cedula: cedula, contrasenia: contraseniaNueva };


  await fetch(localStorage.getItem("servidorAPI")+"Usuario/cambiarContrasenia", {
    method:"PATCH",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
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
    console.error("Error:", error);
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
//ya, por revisar
let listaPacientes = async () => {
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);
      console.log(cedul);
      console.log(usuario);

      let cedulaEncriptada="";
      if(usuario=="medico" || usuario=="administrador"){
        let cedulaDesencriptada = localStorage.getItem("cedulaPaciente");
        cedulaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(cedulaDesencriptada), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      }
      else{
        cedulaEncriptada=cedul;
      }
  let pacienteInDto = {
    cedula: cedulaEncriptada
  }
    const peticion= await fetch(localStorage.getItem("servidorAPI")+"paciente/findPacienteByCedula",{
      method:"POST",
      headers: {
        "Accept":"application/json",
    "Content-Type":"application/json"
      },
      body: JSON.stringify(pacienteInDto)
});
let pacienteAct={}
    const paciente=await peticion.json();
console.log(paciente)
    let nombreDesencriptado= CryptoJS.AES.decrypt(paciente.nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
    let cedulaDesencriptado= CryptoJS.AES.decrypt(paciente.cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
    let celularDesencriptado= CryptoJS.AES.decrypt(paciente.celular,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
    let direccionDesencriptada= CryptoJS.AES.decrypt(paciente.direccion,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
    let ocupacionDesencriptada= CryptoJS.AES.decrypt(paciente.ocupacion,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
    let correoDesencriptada= CryptoJS.AES.decrypt(paciente.correo,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
    let tipoDocumentoDesencriptada= CryptoJS.AES.decrypt(paciente.tipoDocumento,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
    let epsDesencriptada= paciente.eps.nombre;
    let peso= CryptoJS.AES.decrypt(paciente.peso,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
    let pesoSeco=CryptoJS.AES.decrypt(paciente.pesoSeco,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
    let tiposangre=CryptoJS.AES.decrypt(paciente.tipoSangre,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
    let rh=CryptoJS.AES.decrypt(paciente.rh,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
    let altura=CryptoJS.AES.decrypt(paciente.altura,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
    let nacimiento=paciente.fechaNacimiento.split('T');
    let fechaNacimiento=nacimiento[0];
    let fecha=new Date(fechaNacimiento);
    let fechaRegistro=paciente.fechaRegistro.split('T');
    let fecha_registro=fechaRegistro[0];
    let fecha_registrado=new Date(fecha_registro);
    let diabetes=paciente.diabetes;
    let hipertension=paciente.hipertension;
    let cedula=cedulaDesencriptado;
    let ocupacion=ocupacionDesencriptada;
    let correo=correoDesencriptada;
    let tipo_documento=tipoDocumentoDesencriptada;

  pacienteAct = {
    nombre: nombreDesencriptado, cedula:cedula, celular: celularDesencriptado, direccion: direccionDesencriptada, eps: epsDesencriptada, peso: peso, pesoSeco: pesoSeco, tiposangre: tiposangre, rh: rh, altura: altura, nacimiento: fecha, diabetes: diabetes, hipertension: hipertension, ocupacion:ocupacion, correo:correo, tipoDocumento:tipo_documento, fecha_registro:fecha_registrado

  }
  return pacienteAct;
}
//ya, por revisar
let cuidadorActivo = async () => {
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);
      console.log(cedul);
      console.log(usuario);

      let cedulaEncriptada="";
      if(usuario=="medico"){
        let cedulaDesencriptada = localStorage.getItem("cedulaPaciente");
        cedulaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(cedulaDesencriptada), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
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
      "Content-Type": "application/json"
    },
    body: JSON.stringify(pacienteInDto)
  });
  let cuidadorAct = {}
  if (peticion.status === 200) {
    const cuidadores = await peticion.json();
    let nombreDesencriptado = CryptoJS.AES.decrypt(cuidadores.cuidador.nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
    let celularDesencriptado = CryptoJS.AES.decrypt(cuidadores.cuidador.telefono,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
    let direccionDesencriptada = CryptoJS.AES.decrypt(cuidadores.cuidador.direccion,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
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
//ya por revisar
let alergias = async () => {
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);
      console.log(cedul);
      console.log(usuario);

      let cedulaEncriptada="";
      if(usuario=="medico"){
        let cedulaDesencriptada = localStorage.getItem("cedulaPaciente");
        cedulaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(cedulaDesencriptada), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
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
        "Content-Type":"application/json"
      },
      body:JSON.stringify(pacienteInDto)
    });
    if (peticion.status === 200) {
    const alergias=await peticion.json();   
    
    
    alergias.forEach(alergia => {
      let alergiaEncriptada = CryptoJS.AES.decrypt(alergia.alergia.nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
      msgalergias = msgalergias + alergiaEncriptada + ", "
    });
    msgalergias = msgalergias.substring(0, msgalergias.length - 2);
  }
  return msgalergias;
}


//ya
let encontrarPaciente = async () => {
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  let usuario = decodeURIComponent(dato.usuario);
  let cedul= decodeURIComponent(dato.cedula);
  let cedulaEncriptada="";
  if(usuario==="medico"){
    let cedulaDesencriptada = localStorage.getItem("cedulaPaciente");
    cedulaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(cedulaDesencriptada), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  }
      else{
        cedulaEncriptada=cedul;
      }    
  const peticion = await fetch(localStorage.getItem("servidorAPI") + "paciente/findPacienteByCedula", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body:JSON.stringify({
      cedula:cedulaEncriptada
    })
  });

  const paciente = await peticion.json();
console.log(paciente);
  let pacienteActual={
    cedula:paciente.cedula, contrasenia:paciente.contrasenia, rh:paciente.rh,
    tipoSangre:paciente.tipoSangre
  }
  console.log(paciente);
  if(usuario=="paciente"){
  var decryptedNombre = CryptoJS.AES.decrypt(paciente.nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),
  {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
  document.getElementById("nombre").value = decryptedNombre;
  var fechaNacimiento = paciente.fechaNacimiento.split("T")[0];
  document.getElementById("fecha").value = fechaNacimiento;
  var decryptedDireccion = CryptoJS.AES.decrypt(paciente.direccion,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
  document.getElementById("direccion").value = decryptedDireccion;
  console.log(decryptedDireccion);
  var decryptedTelefono = CryptoJS.AES.decrypt(paciente.celular,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);;
  console.log(decryptedTelefono);
  document.getElementById("telefono").value = decryptedTelefono;
  if(paciente.ocupacion!=""){
    var decryptedOcupacion = CryptoJS.AES.decrypt(paciente.ocupacion,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
    document.getElementById("ocupacion").value = decryptedOcupacion;
    }
    if(paciente.correo!=""){
      var decryptedCorreo = CryptoJS.AES.decrypt(paciente.correo,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
      document.getElementById("correo").value = decryptedCorreo;
    }
    const selectEps = document.getElementById('selectedEps');
  const descripcionEps= paciente.eps.nombre;
  console.log(descripcionEps);
  
  Array.from(selectEps.options).forEach((option, index) => {
    if (option.textContent === descripcionEps) {
      selectEps.selectedIndex = index;
    }
  })
    console.log(paciente.foto);
  if (paciente.foto!=null) {
    const binaryString = window.atob(paciente.foto);
  const byteArray = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    byteArray[i] = binaryString.charCodeAt(i);
  }
 
  }
  
  }
  else{
    var decryptedNombre = CryptoJS.AES.decrypt(paciente.nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),
    {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
  document.getElementById("nombre").value = decryptedNombre;

  var decryptedCedula = CryptoJS.AES.decrypt(paciente.cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),
  {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
  document.getElementById("documento").value = decryptedCedula;
  if(paciente.hipertension==true){
    console.log(paciente.hipertension);
  document.getElementById("hipertension").checked=true;
  }
  if(paciente.diabetes==true){
  document.getElementById("diabetes").checked=true;
  }
  var peso = CryptoJS.AES.decrypt(paciente.peso,CryptoJS.enc.Utf8.parse(cajaNegra2),
  {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
  document.getElementById("peso").value = peso;
  var pesoseco=CryptoJS.AES.decrypt(paciente.pesoSeco,CryptoJS.enc.Utf8.parse(cajaNegra2),
  {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
  document.getElementById("pesoseco").value = pesoseco;
  var decryptedEstatura = CryptoJS.AES.decrypt(paciente.altura,CryptoJS.enc.Utf8.parse(cajaNegra2),
  {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
  document.getElementById("estatura").value=decryptedEstatura;
}
console.log(pacienteActual);
  return pacienteActual;
  
}

//ya
let listaEps = async () => {
  const peticion = await fetch(localStorage.getItem("servidorAPI") + "DatosMedicos/ListEps", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });

  const selectEps = document.getElementById('selectedEps');
  console.log(selectEps);

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

//ya
let actualizarPaciente = async (event) => {  
  event.preventDefault();
  var botonActualizar = document.getElementById("actualizarPerfil");
            botonActualizar.style.background = "gray";
            botonActualizar.disabled = true;
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);
  if(usuario=="paciente"){
  let foto= document.getElementById("imageFile").files.length;
  console.log(foto);
  if(foto>0){
  subirFoto();
  }
}
      let cedulaEncriptada="";
      if(usuario=="medico"){
       let cedulaDesencriptada = localStorage.getItem("cedulaPaciente");
       cedulaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(cedulaDesencriptada), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      }
      else{
        cedulaEncriptada=cedul;
      }
  var pacienteInDto = {
    cedula: cedulaEncriptada
  }
    const peticion= await fetch(localStorage.getItem("servidorAPI")+"paciente/findPacienteByCedula",{
      method:"POST",
      headers: {
        "Accept":"application/json",
    "Content-Type":"application/json"
      },
      body: JSON.stringify(pacienteInDto)
});
    const paciente=await peticion.json();
    console.log("paciente del backend");
    console.log(paciente);
  
  if(usuario=="paciente"){

  let nombre = document.getElementById("nombre").value;
  let fechaNacimiento= document.getElementById("fecha").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let foto=document.getElementById("imageFile").value;
  let selectTipoDocumento = selectedDocumento.options[selectedDocumento.selectedIndex];
  let tipo_documento = selectTipoDocumento.value;
  let peso = paciente.peso;
  let pesoseco=paciente.pesoSeco;
  let ocupacion=document.getElementById("ocupacion").value;
  let correo=document.getElementById("correo").value;
  let estatura=paciente.altura;
  var diabetes = paciente.diabetes;
  var fecha_registro=paciente.fechaRegistro;
  let hipertension = paciente.hipertension;
  let selectedOption = selectedEps.options[selectedEps.selectedIndex];
  let eps = selectedOption.value;
      

  pacienteInDto = {
    direccion: CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(direccion), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(),
    fechaNacimiento: fechaNacimiento+"T00:00:00.000Z",
    peso:peso,
    pesoSeco:pesoseco,
    nombre: CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(nombre), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(),
    eps: parseInt(eps,10),
    celular: CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(telefono), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(),
    ocupacion: CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(ocupacion), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(),
    correo: CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(correo), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(),
    activo:true,
    cedula:cedulaEncriptada,
    tipoSangre:paciente.tipoSangre,
    tipoDocumento:CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(tipo_documento), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(),
    rh:paciente.rh,
    contrasenia:paciente.contrasenia,
    altura:estatura,
    cambio_contrasenia:paciente.cambioContrasenia,
    diabetes:diabetes,
    fechaRegistro:fecha_registro,
    hipertension:hipertension,
    foto:foto
  };
}
else{
  let nombre = paciente.nombre;
  let fechaNacimiento=paciente.fechaNacimiento;
  let telefono = paciente.celular;
  let direccion = paciente.direccion;
  let tipo_documento= paciente.tipoDocumento;
  let peso = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(document.getElementById("peso").value), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let pesoseco=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(document.getElementById("pesoseco").value), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let ocupacion=paciente.ocupacion;
  let correo=paciente.correo;
  let fecha_registro=paciente.fechaRegistro;
  let cambiocontrasenia=paciente.cambioContrasenia;
  let estatura=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(document.getElementById("estatura").value), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let eps = paciente.eps.idEps;
  var diabetes = document.getElementById('diabetes').checked;
  var hipertension = document.getElementById('hipertension').checked;


  pacienteInDto = {
    direccion: direccion,
    fechaNacimiento: fechaNacimiento,
    peso:peso,
    pesoSeco:pesoseco,
    nombre: nombre,
    eps: eps,
    celular: telefono,
    ocupacion: ocupacion,
    cambio_contrasenia:cambiocontrasenia,
    correo: correo,
    fechaRegistro:fecha_registro,
    activo:true,
    cedula:cedulaEncriptada,
    tipoSangre:paciente.tipoSangre,
    tipoDocumento:tipo_documento,
    rh:paciente.rh,
    contrasenia:paciente.contrasenia,
    altura:estatura,
    diabetes:diabetes,
    hipertension:hipertension
  };
  console.log("paciente a editar");
  console.log(pacienteInDto);
}


  fetch(localStorage.getItem("servidorAPI") + "paciente/actualizar", {
    method: "PATCH",
    body: JSON.stringify(pacienteInDto),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) {
          $('#successModal').modal('show');
        
      } else {
        $('#errorModal').modal('show');
      }
    })
    .catch(error => {
      console.error(error);
    });
}
function cerrarModal() {
  modal.style.display = 'none';
}
//creo que no se cambia nada
let subirFoto = async () => {
   let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let cedul= decodeURIComponent(dato.cedula);
console.log(cedul);
  const formData = new FormData();
  const imageFile = document.getElementById("imageFile").files[0];
  formData.append("foto", imageFile);
  formData.append("cedula", cedul);
console.log(formData);
  fetch(localStorage.getItem("servidorAPI") + "Usuario/upload-image", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
    } else {
    }
  });
}
//creo que no se cambia nada
let eventoPerfil=async()=>{
document.addEventListener("DOMContentLoaded", async () => {
  try {
    await perfil();

    const mostrarFoto = async () => {
      let data = localStorage.getItem("datos");
      let dato=JSON.parse(data);
          let cedul= decodeURIComponent(dato.cedula);
    const usuarioInDto = {
      cedula: cedul
    };

    fetch(localStorage.getItem("servidorAPI") + "Usuario/imagen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(usuarioInDto)
    })
      .then(response => response.blob())
      .then(blob => {
        const imgElement=document.getElementById("imagen");
        if (blob.size!=0) {
          const imageUrl = URL.createObjectURL(blob);
          imgElement.src = imageUrl;
        } else {
          imgElement.style.display = "none";
        }
      });
  };
  mostrarFoto();
} catch (error) {
  console.error("Error in DOMContentLoaded:", error);
}
});
}
