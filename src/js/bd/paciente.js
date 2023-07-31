let servidorAPI="http://localhost:8081/";
const cedula="1193098419";
var cedulaEncriptada= "";

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
  let cedulaEncriptada= await obtenerCedulaEncriptada()
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
    let nacimiento=paciente.fechaNacimiento;
    pacienteAct={
      nombre:nombreDesencriptado, celular:celularDesencriptado, direccion:direccionDesencriptada, eps:epsDesencriptada, peso:peso,pesoSeco:pesoSeco, tiposangre:tiposangre, rh:rh, altura:altura, nacimiento:nacimiento

    }

    return pacienteAct;
}

let cuidadorActivo= async()=>{
  cedulaEncriptada= await obtenerCedulaEncriptada();
  const peticion = await fetch(servidorAPI + "paciente/cuidador/findCuidadorActivo", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body:JSON.stringify({
      cedula:cedulaEncriptada
    })
  });
  let cuidadorAct={}

  if (peticion.status === 204) {
    const cuidadores=await peticion.json();
    console.log(cuidador);
    cuidadores.forEach(cuidador => {
    let nombreDesencriptado= Crypto.AES.decrypt(cuidador.cuidador.nombre,'clave_secreta').toString(CryptoJS.enc.Utf8);
    let celularDesencriptado= Crypto.AES.decrypt(cuidador.cuidador.telefono,'clave_secreta').toString(CryptoJS.enc.Utf8);
    let direccionDesencriptada= Crypto.AES.decrypt(cuidador.cuidador.direccion,'clave_secreta').toString(CryptoJS.enc.Utf8);
    let parentescoDesencriptado= Crypto.AES.decrypt(cuidador.cuidador.parentesco.descripcion,'clave_secreta').toString(CryptoJS.enc.Utf8);
    console.log(nombreDesencriptado);

    cuidadorAct={
      nombre:nombreDesencriptado, celular:celularDesencriptado, direccion:direccionDesencriptada, parentesco:parentescoDesencriptado
    }
    })
}
return cuidadorAct;
}

let alergias= async()=>{
  let cedulaEncriptada= await obtenerCedulaEncriptada();
  let pacienteInDto= {
    cedula:cedulaEncriptada
  }
    const peticion= await fetch(servidorAPI+"paciente/alergia/listByPaciente",{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(pacienteInDto)
    });

    const alergias=await peticion.json();
    console.log(alergias);

    
    let msgalergias="";
    
    alergias.forEach(alergia => {
      let alergiaEncriptada=CryptoJS.AES.decrypt(alergia.alergia.nombre, 'clave_secreta').toString(CryptoJS.enc.Utf8);
        console.log(msgalergias)
        msgalergias=msgalergias+alergiaEncriptada+", "
    });
    msgalergias = msgalergias.substring(0, msgalergias.length - 2);
    
    return msgalergias;
}