let servidorAPI="http://localhost:8081/";
    const cedulaEncript = decodeURIComponent(localStorage.getItem("cedula"));
    const contraseniaEncript = decodeURIComponent(localStorage.getItem("contrasenia"));

    console.log(cedulaEncript);

    console.log(contraseniaEncript);
    const cedula = CryptoJS.AES.decrypt(cedulaEncript, 'clave_secreta').toString(CryptoJS.enc.Utf8);
    const contrasenia = CryptoJS.AES.decrypt(contraseniaEncript, 'clave_secreta').toString(CryptoJS.enc.Utf8);
var cedulaEncriptada= "";

const contraseña = CryptoJS.AES.decrypt(contraseniaEncript, 'clave_secreta').toString(CryptoJS.enc.Utf8);
console.log(contraseña);

var contraseniaEncriptada;

let obtenerCedulaEncriptada=async()=>{
  const peticion= await fetch(servidorAPI+'Medico/findAllPacientes',{
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
        const cedulaCodificado = encodeURIComponent(decryptedCedula);
        console.log(decryptedCedula);
        if(cedula===cedulaCodificado)
        cedulaEncriptada=paciente.cedula;
        
      })   
      console.log(cedulaEncriptada);
      return cedulaEncriptada;
}

let obtenerContraseniaEncriptada=async()=>{
  const peticion= await fetch(servidorAPI+'Usuario/findAllUsuarios',{
    method:'GET',
    headers:{
      "Accept":"application/json",
      "Content-Type": "application/json"
    }
      });
      const usuarios=await peticion.json();
      console.log(usuarios);
      usuarios.forEach(usuario=>{
        let decryptedContrasenia = CryptoJS.AES.decrypt(usuario.contrasenia, 'clave_secreta').toString(CryptoJS.enc.Utf8);
        console.log(usuario.contrasenia);
        const contraseniaCodificado = encodeURIComponent(decryptedContrasenia);
        console.log(contrasenia);
        if(contrasenia===contraseniaCodificado)
        console.log("pasa")
        contraseniaEncriptada=usuario.contrasenia;        
      })   
      console.log(contraseniaEncriptada);
      return contraseniaEncriptada;
}



let listarPacientes= async()=>{
  let cedulaEncriptada= await obtenerCedulaEncriptada();
  let pacienteInDto={
    cedula:cedulaEncriptada
  }
    const peticion= await fetch(servidorAPI+"paciente/findPacienteByCedula",{
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
    console.log(nombreDesencriptado);
    let celularDesencriptado= CryptoJS.AES.decrypt(paciente.nombre,'clave_secreta').toString(CryptoJS.enc.Utf8);
    let direccionDesencriptada= CryptoJS.AES.decrypt(paciente.nombre,'clave_secreta').toString(CryptoJS.enc.Utf8);
    let epsDesencriptada= CryptoJS.AES.decrypt(paciente.nombre,'clave_secreta').toString(CryptoJS.enc.Utf8);
    let peso= paciente.peso;
    let pesoSeco=paciente.pesoSeco;
    let tiposangre=CryptoJS.AES.decrypt(paciente.tipoSangre,'clave_secreta').toString(CryptoJS.enc.Utf8);
    let rh=paciente.rh;
    let altura=paciente.altura;
    let nacimiento=paciente.fechaNacimiento.split('T');
    let fecha=nacimiento[0];
    let diabetes=paciente.diabetes;
    let hipertension=paciente.hipertension;
    console.log(hipertension);

    pacienteAct={
      nombre:nombreDesencriptado, celular:celularDesencriptado, direccion:direccionDesencriptada, eps:epsDesencriptada, peso:peso,pesoSeco:pesoSeco, tiposangre:tiposangre, rh:rh, altura:altura, nacimiento:fecha, diabetes:diabetes, hipertension:hipertension

    }
    return pacienteAct;
}

let cuidadorActivo= async()=>{
  cedulaEncriptada= await obtenerCedulaEncriptada();
  let pacienteInDto={
    cedula:cedulaEncriptada
  }
  const peticion = await fetch(servidorAPI + "paciente/cuidador/findCuidadorActivo", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body:JSON.stringify(pacienteInDto)
  });
  let cuidadorAct={}
  if (peticion.status === 200) {
    const cuidadores=await peticion.json();
    console.log(cuidadores);
    let nombreDesencriptado= CryptoJS.AES.decrypt(cuidadores.cuidador.nombre,'clave_secreta').toString(CryptoJS.enc.Utf8);
    let celularDesencriptado= CryptoJS.AES.decrypt(cuidadores.cuidador.telefono,'clave_secreta').toString(CryptoJS.enc.Utf8);
    let direccionDesencriptada= CryptoJS.AES.decrypt(cuidadores.cuidador.direccion,'clave_secreta').toString(CryptoJS.enc.Utf8);
    let parentescoDesencriptado= cuidadores.cuidador.parentesco.descripcion;
    console.log(nombreDesencriptado);

    cuidadorAct={
      nombre:nombreDesencriptado, celular:celularDesencriptado, direccion:direccionDesencriptada, parentesco:parentescoDesencriptado
    }
    return cuidadorAct;
}
else{
  return null;
}


}

let alergias= async()=>{
  let cedulaEncriptada= await obtenerCedulaEncriptada();
  let pacienteInDto= {
    cedula:cedulaEncriptada
  }
  let msgalergias="";
    const peticion= await fetch(servidorAPI+"paciente/alergia/listByPaciente",{
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
      let alergiaEncriptada=CryptoJS.AES.decrypt(alergia.alergia.nombre, 'clave_secreta').toString(CryptoJS.enc.Utf8);
        console.log(msgalergias)
        msgalergias=msgalergias+alergiaEncriptada+", "
    });
    msgalergias = msgalergias.substring(0, msgalergias.length - 2);
  }
  console.log(msgalergias);
    return msgalergias;
}



let cambioContrasenia= async()=> {
  const cedulaEncriptada= await obtenerCedulaEncriptada();
  const contraseniaEncriptadaBD= await obtenerContraseniaEncriptada();
  const contraseniaAnterior = document.getElementById("contraseniaanterior").value;
  const nuevaContrasenia = document.getElementById("nuevacontrasenia").value;

  const contraseniaAnteriorEncriptada = CryptoJS.AES.encrypt(contraseniaAnterior, 'clave_secreta').toString();
  const contraseniaEncriptada = CryptoJS.AES.encrypt(nuevaContrasenia, 'clave_secreta').toString();

  fetch(servidorAPI + "Usuario/cambiar_contrasenia", {
      method: "PATCH",
      body: JSON.stringify({ cedula: cedulaEncriptada, contrasenia: contraseniaEncriptada }),
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      }
  })
  .then(response => {
      if (response.ok) {
          alert("Contraseña cambiada exitosamente");
          // Reset input fields
          document.getElementById("contraseniaanterior").value = "";
          document.getElementById("nuevacontrasenia").value = "";
          // Close the modal
          const modal = new bootstrap.Modal(document.getElementById("nuevacontrasenia"));
          modal.hide();
      } else {
          alert("Error al cambiar la contraseña");
      }
  })
  .catch(error => {
      console.error("Error:", error);
      alert("Error al cambiar la contraseña");
  });
}

