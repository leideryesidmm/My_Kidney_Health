    const cedulaEncript = decodeURIComponent(localStorage.getItem("cedula"));
    const contraseniaEncript = decodeURIComponent(localStorage.getItem("contrasenia"));

const cedula = CryptoJS.AES.decrypt(cedulaEncript, 'clave_secreta').toString(CryptoJS.enc.Utf8);
const contrasenia = CryptoJS.AES.decrypt(contraseniaEncript, 'clave_secreta').toString(CryptoJS.enc.Utf8);
var cedulaEncriptada = "";
var contraseniaEncriptada;

let obtenerCedulaEncriptada=async(id)=>{
  let result = null ;
  const peticion= await fetch(localStorage.getItem("servidorAPI")+'Medico/findAllPacientes',{
    method:'GET',
    headers:{
      "Accept":"application/json",
      "Content-Type": "application/json"
    }
  });
  const pacientes = await peticion.json();
  console.log(pacientes)
  pacientes.forEach(paciente => {
    let decryptedCedula = CryptoJS.AES.decrypt(paciente.cedula, 'clave_secreta').toString(CryptoJS.enc.Utf8);
    const cedulaCodificado = encodeURIComponent(decryptedCedula);
    if (cedula === cedulaCodificado){   
      console.log(id)   
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


let listarPacientes = async () => {
  let cedulaEncriptada = await obtenerCedulaEncriptada(0);
  console.log(cedulaEncriptada)
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
    let cedula=cedulaDesencriptado;

  pacienteAct = {
    nombre: nombreDesencriptado, cedula:cedula, celular: celularDesencriptado, direccion: direccionDesencriptada, eps: epsDesencriptada, peso: peso, pesoSeco: pesoSeco, tiposangre: tiposangre, rh: rh, altura: altura, nacimiento: fecha, diabetes: diabetes, hipertension: hipertension

  }
  return pacienteAct;
}

let cuidadorActivo = async () => {
  cedulaEncriptada = await obtenerCedulaEncriptada(0);
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
  let cedulaEncriptada = await obtenerCedulaEncriptada(0);
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
  const cedulaEncriptada = await obtenerCedulaEncriptada(0);
  const contraseniaEncriptadaBD = await obtenerCedulaEncriptada(1);

  let contraseniaBD = CryptoJS.AES.decrypt(contraseniaEncriptadaBD, 'clave_secreta').toString(CryptoJS.enc.Utf8);

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




