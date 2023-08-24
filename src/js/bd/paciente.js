
var cedulaEncriptada = "";
var contraseniaEncriptada;
dat= localStorage.getItem("datos");

let obtenerCedulaEncriptada=async(id, cedula)=>{
  let result = "";
  console.log(cedula);
  const peticion= await fetch(localStorage.getItem("servidorAPI")+'Medico/findAllPacientes',{
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
       cedulaEncriptada = await obtenerCedulaEncriptada(0,CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
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
    let fecha=new Date(fechaNacimiento).toLocaleDateString();

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
       cedulaEncriptada = await obtenerCedulaEncriptada(0,CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
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
       cedulaEncriptada = await obtenerCedulaEncriptada(0,CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
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



let cambioContrasenia = async () => {
  
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let cedul= decodeURIComponent(dato.cedula);
      console.log(cedul);

      let cedulaEncriptada="";
      let contraseniaEncriptadaBD="";
      let decryptedCedula = CryptoJS.AES.decrypt(cedul, 'clave_secreta').toString(CryptoJS.enc.Utf8);
       cedulaEncriptada = await obtenerCedulaEncriptada(0,decryptedCedula);
      console.log(decryptedCedula);

        contraseniaEncriptadaBD = await obtenerCedulaEncriptada(1,decryptedCedula);
      console.log(cedulaEncriptada);


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
          alert("Contraseña cambiada exitosamente");

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
    alert("La contraseña actual ingresada no es correcta. Intentelo nuevamente");
    document.getElementById("contraseniaanterior").value = "";
    document.getElementById("newcontrasenia").value = "";
  }
};

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
       cedulaEncriptada = await obtenerCedulaEncriptada(0,CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
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
  

  const selectEps = document.getElementById('selectedEps');
  const descripcionEps= paciente.eps.nombre;
  console.log(descripcionEps);
  
  Array.from(selectEps.options).forEach((option, index) => {
    if (option.textContent === descripcionEps) {
      selectEps.selectedIndex = index;
    }
  })
  var decryptedEstatura = paciente.altura;
  document.getElementById("estatura").value=decryptedEstatura;
}
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
  

  if (selectEps.length === 0) {
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
  console.log(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);
      console.log(cedul);
      console.log(usuario);

      let cedulaEncriptada="";
      if(usuario=="medico"){
       cedulaEncriptada = await obtenerCedulaEncriptada(0,CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
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
    
  
  console.log(paciente);
  if(usuario=="paciente"){

  let nombre = document.getElementById("nombre").value;
  let fechaNacimiento= document.getElementById("fecha").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let eps = paciente.eps.idEps;
  let selectTipoDocumento = selectedDocumento.options[selectedDocumento.selectedIndex];
  let tipo_documento = selectTipoDocumento.value;
  let peso = paciente.peso;
  let pesoseco=paciente.pesoSeco;
  let ocupacion=document.getElementById("ocupacion").value;
  let correo=document.getElementById("correo").value;
  let estatura=paciente.altura;
  var diabetes = paciente.diabetes;
     var hipertension = paciente.hipertension;
      

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
    hipertension:hipertension
  };
}
else{
  let nombre = paciente.nombre;
  let fechaNacimiento=paciente.fechaNacimiento;
  let telefono = paciente.celular;
  let direccion = paciente.direccion;
  let tipo_documento= paciente.tipo_documento;
  let selectedOption = selectedEps.options[selectedEps.selectedIndex];
  let eps = selectedOption.value;
  let peso = document.getElementById("peso").value;
  let pesoseco=document.getElementById("pesoseco").value;
  let ocupacion=paciente.ocupacion;
  let correo=paciente.correo;
  let estatura=document.getElementById("estatura").value;;
  var diabetes = document.getElementById('diabetes').checked;
  var hipertension = document.getElementById('hipertension').checked;

  pacienteInDto = {
    direccion: direccion,
    fechaNacimiento: fechaNacimiento,
    peso:parseInt(peso,10),
    pesoSeco:parseInt(pesoseco,10),
    nombre: nombre,
    eps: parseInt(eps,10),
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
