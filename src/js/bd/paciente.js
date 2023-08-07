let servidorAPI="http://localhost:8081/";
    const cedulaEncript = decodeURIComponent(localStorage.getItem("cedula"));
    const contraseniaEncript = decodeURIComponent(localStorage.getItem("contrasenia"));
    console.log(cedulaEncript);
    console.log(contraseniaEncript);
    const cedula = CryptoJS.AES.decrypt(cedulaEncript, 'clave_secreta').toString(CryptoJS.enc.Utf8);
var cedulaEncriptada= "";
const contraseña = CryptoJS.AES.decrypt(contraseniaEncript, 'clave_secreta').toString(CryptoJS.enc.Utf8);
console.log(contraseña);

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