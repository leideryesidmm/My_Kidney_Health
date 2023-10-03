
var cedulaEncriptada = "";
var contraseniaEncriptada;
let dat= localStorage.getItem("datos");

let obtenerCedulasUsuarios=async(id, cedula)=>{
  let result = "";
  console.log(cedula);
  const peticion= await fetch(localStorage.getItem("servidorAPI")+'Usuario/findAllUsuarios',{
    method:'GET',
    headers:{
      "Accept":"application/json",
      "Content-Type": "application/json"
    }
      });
      const pacientes=await peticion.json();
      console.log(pacientes);
      pacientes.forEach(paciente=>{
        let decryptedCedula = CryptoJS.AES.decrypt(paciente.cedula, 'clave_secreta').toString(CryptoJS.enc.Utf8);
        console.log(decryptedCedula);
        if(cedula===decryptedCedula){   
        console.log("ENTRO");
      if(id == 0){
        result = paciente.cedula;
      }
      if(id == 1){
        result = paciente.contrasenia;
      }
    }
    })
    console.log(result)
  return result;
}

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

  let nuevaContrasenia=CryptoJS.AES.encrypt(newcontrasenia, 'clave_secreta').toString();
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


let cambioContrasenia = async (event) => {
  event.preventDefault();

let data = localStorage.getItem("datos");
let dato=JSON.parse(data);
console.log(data);
    let cedul= decodeURIComponent(dato.cedula);
    console.log(cedul);

    let cedulaEncriptada="";
    let contraseniaEncriptadaBD="";
    let decryptedCedula = CryptoJS.AES.decrypt(cedul, 'clave_secreta').toString(CryptoJS.enc.Utf8);
     cedulaEncriptada = await obtenerCedulasUsuarios(0,decryptedCedula);
    console.log(decryptedCedula);

      contraseniaEncriptadaBD = await obtenerCedulasUsuarios(1,decryptedCedula);
    console.log(contraseniaEncriptadaBD);


let contraseniaBD = CryptoJS.AES.decrypt(contraseniaEncriptadaBD, 'clave_secreta').toString(CryptoJS.enc.Utf8);
console.log(contraseniaBD);

const contraseniaAnterior = document.getElementById("contraseniaanterior").value;
const nuevaContrasenia = document.getElementById("newcontrasenia").value;
console.log(nuevaContrasenia)

if (contraseniaAnterior === contraseniaBD) {
  const contraseniaEncriptada = CryptoJS.AES.encrypt(nuevaContrasenia, 'clave_secreta').toString();

  let usuarioInDto = { cedula: cedulaEncriptada, contrasenia: contraseniaEncriptada };
  console.log(usuarioInDto);

  const peticion= await fetch(localStorage.getItem("servidorAPI")+"Usuario/cambiarContrasenia", {
    method:"PATCH",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    },
    body:JSON.stringify(usuarioInDto)
  })
  .then(response => {
    if (response.ok) {
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




let listaPacientes = async () => {
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);
      console.log(cedul);
      console.log(usuario);

      let cedulaEncriptada="";
      if(usuario=="medico"){
       cedulaEncriptada = await obtenerCedulasUsuarios(0,CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
      console.log(cedulaEncriptada);}
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
    let nombreDesencriptado= CryptoJS.AES.decrypt(paciente.nombre,'clave_secreta').toString(CryptoJS.enc.Utf8);
    let cedulaDesencriptado= CryptoJS.AES.decrypt(paciente.cedula,'clave_secreta').toString(CryptoJS.enc.Utf8);
    let celularDesencriptado= CryptoJS.AES.decrypt(paciente.celular,'clave_secreta').toString(CryptoJS.enc.Utf8);
    let direccionDesencriptada= CryptoJS.AES.decrypt(paciente.direccion,'clave_secreta').toString(CryptoJS.enc.Utf8);
    let ocupacionDesencriptada= CryptoJS.AES.decrypt(paciente.ocupacion,'clave_secreta').toString(CryptoJS.enc.Utf8);
    let correoDesencriptada= CryptoJS.AES.decrypt(paciente.correo,'clave_secreta').toString(CryptoJS.enc.Utf8);
    let tipoDocumentoDesencriptada= CryptoJS.AES.decrypt(paciente.tipo_documento,'clave_secreta').toString(CryptoJS.enc.Utf8);
    let epsDesencriptada= paciente.eps.nombre;
    let peso= paciente.peso;
    let pesoSeco=paciente.pesoSeco;
    let tiposangre=CryptoJS.AES.decrypt(paciente.tipoSangre,'clave_secreta').toString(CryptoJS.enc.Utf8);
    let rh=paciente.rh;
    let altura=paciente.altura;
    let nacimiento=paciente.fechaNacimiento.split('T');
    let fechaNacimiento=nacimiento[0];
    let fecha=new Date(fechaNacimiento);

    let diabetes=paciente.diabetes;
    let hipertension=paciente.hipertension;
    let cedula=cedulaDesencriptado;
    let ocupacion=ocupacionDesencriptada;
    let correo=correoDesencriptada;
    let tipo_documento=tipoDocumentoDesencriptada;

  pacienteAct = {
    nombre: nombreDesencriptado, cedula:cedula, celular: celularDesencriptado, direccion: direccionDesencriptada, eps: epsDesencriptada, peso: peso, pesoSeco: pesoSeco, tiposangre: tiposangre, rh: rh, altura: altura, nacimiento: fecha, diabetes: diabetes, hipertension: hipertension, ocupacion:ocupacion, correo:correo, tipo_documento:tipo_documento

  }
  return pacienteAct;
}

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
       cedulaEncriptada = await obtenerCedulasUsuarios(0,CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
      console.log(cedulaEncriptada);}
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
    let nombreDesencriptado = CryptoJS.AES.decrypt(cuidadores.cuidador.nombre, 'clave_secreta').toString(CryptoJS.enc.Utf8);
    let celularDesencriptado = CryptoJS.AES.decrypt(cuidadores.cuidador.telefono, 'clave_secreta').toString(CryptoJS.enc.Utf8);
    let direccionDesencriptada = CryptoJS.AES.decrypt(cuidadores.cuidador.direccion, 'clave_secreta').toString(CryptoJS.enc.Utf8);
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
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);
      console.log(cedul);
      console.log(usuario);

      let cedulaEncriptada="";
      if(usuario=="medico"){
       cedulaEncriptada = await obtenerCedulasUsuarios(0,CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
      console.log(cedulaEncriptada);}
      else{
        cedulaEncriptada=cedul;
      }
  let pacienteInDto = {
    cedula: cedulaEncriptada
  }
  let msgalergias="";
    const peticion= await fetch(localStorage.getItem("servidorAPI")+"paciente/alergia/listByPaciente",{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(pacienteInDto)
    });
    if (peticion.status === 204 || peticion.status === 200) {
    const alergias=await peticion.json();

    console.log(alergias);

    
    
    
    alergias.forEach(alergia => {
      let alergiaEncriptada = CryptoJS.AES.decrypt(alergia.alergia.nombre, 'clave_secreta').toString(CryptoJS.enc.Utf8);
      msgalergias = msgalergias + alergiaEncriptada + ", "
    });
    msgalergias = msgalergias.substring(0, msgalergias.length - 2);
  }
  return msgalergias;
}




let encontrarPaciente = async () => {
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);
      console.log(cedul);
      console.log(usuario);

      let cedulaEncriptada="";
      if(usuario=="medico"){
       cedulaEncriptada = await obtenerCedulasUsuarios(0,CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
      console.log(cedulaEncriptada);}
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
  var decryptedNombre = CryptoJS.AES.decrypt(paciente.nombre, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  document.getElementById("nombre").value = decryptedNombre;
  var fechaNacimiento = paciente.fechaNacimiento.split("T")[0];
  document.getElementById("fecha").value = fechaNacimiento;
  var decryptedDireccion = CryptoJS.AES.decrypt(paciente.direccion, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  document.getElementById("direccion").value = decryptedDireccion;
  console.log(decryptedDireccion);
  var decryptedTelefono = CryptoJS.AES.decrypt(paciente.celular, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  console.log(decryptedTelefono);
  document.getElementById("telefono").value = decryptedTelefono;
  if(paciente.ocupacion!=""){
    var decryptedOcupacion = CryptoJS.AES.decrypt(paciente.ocupacion, 'clave_secreta').toString(CryptoJS.enc.Utf8);
    document.getElementById("ocupacion").value = decryptedOcupacion;
    }
    if(paciente.correo!=""){
      var decryptedCorreo = CryptoJS.AES.decrypt(paciente.correo, 'clave_secreta').toString(CryptoJS.enc.Utf8);
      document.getElementById("correo").value = decryptedCorreo;
    }
    const selectEps = document.getElementById('selectedEps');
  const descripcionEps= paciente.eps.nombre;
  console.log(descripcionEps);
  
  Array.from(selectEps.options).forEach((option, index) => {
    if (option.textContent === descripcionEps) {
      console.log("ENTRO AL IF DE SELECT EPS");
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
  const blob = new Blob([byteArray], { type: 'image/jpeg' });

  const imageUrl = URL.createObjectURL(blob);
  console.log(imageUrl);
  document.getElementById("imageFile").value = imageUrl;
  }
  
  }
  else{
    var decryptedNombre = CryptoJS.AES.decrypt(paciente.nombre, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  document.getElementById("nombre").value = decryptedNombre;

  var decryptedCedula = CryptoJS.AES.decrypt(paciente.cedula, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  document.getElementById("documento").value = decryptedCedula;


  if(paciente.hipertension==true){
    console.log(paciente.hipertension);
  document.getElementById("hipertension").checked=true;
  }
  if(paciente.diabetes==true){
  document.getElementById("diabetes").checked=true;
  }
  var peso = paciente.peso;
  document.getElementById("peso").value = peso;
  var pesoseco=paciente.pesoSeco;
  document.getElementById("pesoseco").value = pesoseco;
  

  
  var decryptedEstatura = paciente.altura;
  document.getElementById("estatura").value=decryptedEstatura;
}
console.log(pacienteActual);
  return pacienteActual;
  
}

let listaEps = async () => {
  const peticion = await fetch(localStorage.getItem("servidorAPI") + "Prueba/ListEps", {
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
    optionSeleccionar.textContent = "Seleccione";
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
  location.href=localStorage.getItem("url");
}

let actualizarPaciente = async (event) => {  
  event.preventDefault();
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
       cedulaEncriptada = await obtenerCedulasUsuarios(0,CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
      console.log(cedulaEncriptada);}
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
    
  
  if(usuario=="paciente"){

  let nombre = document.getElementById("nombre").value;
  let fechaNacimiento= document.getElementById("fecha").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;

  let selectTipoDocumento = selectedDocumento.options[selectedDocumento.selectedIndex];
  let tipo_documento = selectTipoDocumento.value;
  let peso = paciente.peso;
  let pesoseco=paciente.pesoSeco;
  let ocupacion=document.getElementById("ocupacion").value;
  let correo=document.getElementById("correo").value;
  let estatura=paciente.altura;
  var diabetes = paciente.diabetes;
     var hipertension = paciente.hipertension;
     let selectedOption = selectedEps.options[selectedEps.selectedIndex];
  let eps = selectedOption.value;
      

  pacienteInDto = {
    direccion: CryptoJS.AES.encrypt(direccion, 'clave_secreta').toString(),
    fechaNacimiento: fechaNacimiento+"T00:00:00.000Z",
    peso:parseInt(peso,10),
    pesoSeco:parseInt(pesoseco,10),
    nombre: CryptoJS.AES.encrypt(nombre, 'clave_secreta').toString(),
    eps: parseInt(eps,10),
    celular: CryptoJS.AES.encrypt(telefono, 'clave_secreta').toString(),
    ocupacion: CryptoJS.AES.encrypt(ocupacion, 'clave_secreta').toString(),
    correo: CryptoJS.AES.encrypt(correo, 'clave_secreta').toString(),
    activo:true,
    cedula:cedulaEncriptada,
    tipoSangre:paciente.tipoSangre,
    tipo_documento:CryptoJS.AES.encrypt(tipo_documento, 'clave_secreta').toString(),
    rh:paciente.rh,
    contrasenia:paciente.contrasenia,
    altura:estatura,
    diabetes:diabetes,
    hipertension:hipertension,
    eps: parseInt(eps,10)
  };
}
else{
  let nombre = paciente.nombre;
  let fechaNacimiento=paciente.fechaNacimiento;
  let telefono = paciente.celular;
  let direccion = paciente.direccion;
  let tipo_documento= paciente.tipo_documento;
  let peso = document.getElementById("peso").value;
  let pesoseco=document.getElementById("pesoseco").value;
  let ocupacion=paciente.ocupacion;
  let correo=paciente.correo;
  let estatura=document.getElementById("estatura").value;
  let eps = paciente.eps.idEps;
  var diabetes = document.getElementById('diabetes').checked;
  var hipertension = document.getElementById('hipertension').checked;


  pacienteInDto = {
    direccion: direccion,
    fechaNacimiento: fechaNacimiento,
    peso:parseInt(peso,10),
    pesoSeco:parseInt(pesoseco,10),
    nombre: nombre,
    eps: eps,
    celular: telefono,
    ocupacion: ocupacion,
    correo: correo,
    activo:true,
    cedula:cedulaEncriptada,
    tipoSangre:paciente.tipoSangre,
    tipo_documento:tipo_documento,
    rh:paciente.rh,
    contrasenia:paciente.contrasenia,
    altura:parseInt(estatura,10),
    diabetes:diabetes,
    hipertension:hipertension
  };
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

let subirFoto = async () => {
  console.log("ENTRO AL METODO DE SUBIR FOTO");
  let dato = JSON.parse(dat);
  let cedul = decodeURIComponent(dato.cedula);
console.log(cedul);
  const formData = new FormData();
  const imageFile = document.getElementById("imageFile").files[0];
  formData.append("foto", imageFile);
  formData.append("cedula", cedul);
console.log(formData);
  fetch(localStorage.getItem("servidorAPI") + "paciente/upload-image", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      console.log("ENTRO AL IF DE SUBIR FOTO");
      alert("Imagen subida exitosamente");
    } else {
      console.log("ENTRO AL ELSE DE SUBIR FOTO");
      alert("Error al subir la imagen");
    }
  });
}

let eventoPerfil=async()=>{
document.addEventListener("DOMContentLoaded", async () => {
  try {
    await perfil();

    const mostrarFoto = async () => {
    let ced = JSON.parse(dat);
    let cedul = decodeURIComponent(ced.cedula);
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