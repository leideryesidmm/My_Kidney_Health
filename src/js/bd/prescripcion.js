let servidorAPI="http://localhost:8081/";
const urlParams = new URLSearchParams(window.location.search);
    var cedulaEncript = urlParams.get('cedula');
    cedulaEncript=decodeURIComponent(cedulaEncript)
    console.log(cedulaEncript)
    const cedula = CryptoJS.AES.decrypt(cedulaEncript, 'clave_secreta').toString(CryptoJS.enc.Utf8);
    
    console.log(cedula)
    var cedulaEncriptada= "";

let prescripciones= async()=>{
    const peticion= await fetch(servidorAPI+"paciente/prescripcion/prescripcionActual",{
      method:"POST",
      body:JSON.stringify({cedula:await obtenerCedulaEncriptada(cedula)}),
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
});
    const prescripcion=await peticion.json();
    
    console.log(prescripcion)
return prescripcion;
}

let obtenerCedulaEncriptada=async()=>{
  const peticion= await fetch(servidorAPI+'Medico/findAllPacientes',{
    method:'GET',
    headers:{
      "Accept":"application/json",
      "Content-Type": "application/json"
}
      });
      const pacientes=await peticion.json();
      pacientes.forEach(paciente=>{
        let decryptedCedula = CryptoJS.AES.decrypt(paciente.cedula, 'clave_secreta').toString(CryptoJS.enc.Utf8);
        const cedulaCodificado = encodeURIComponent(decryptedCedula);
        if(cedula===decryptedCedula){
        cedulaEncriptada=paciente.cedula;
        }
      })   
      return cedulaEncriptada;
}

let crearRecambio = async () => {
    let imagenGuardada = "";
    var drenaje = document.getElementById('drenaje').value;
  
    var concentracionSelect = document.getElementById('selectConcentracion');
    var concentracion = concentracionSelect.value;
  
    var liquidoSelect = document.getElementById('selectLiquido');
    var liquido = liquidoSelect.value;
  
    const opcionesImagenes = document.getElementsByName("opcion");
    for (const opcion of opcionesImagenes) {
      if (opcion.checked) {
        imagenGuardada = opcion.value;
      } else {
        opcion.checked = false;
      }
    }

    let drenajeEncriptado=CryptoJS.AES.encrypt(drenaje, 'clave_secreta').toString();
    let concentracionEncriptada=CryptoJS.AES.encrypt(concentracion, 'clave_secreta').toString();
    let liquidoEncriptado=CryptoJS.AES.encrypt(liquido, 'clave_secreta').toString();
    let imagenEncriptada=CryptoJS.AES.encrypt(imagenGuardada, 'clave_secreta').toString();

    let recambioUnitario={
      drenajeDialisis:drenajeEncriptado,
      concentracion:concentracionEncriptada,
      estadoLiquido:liquidoEncriptado,
      orificioSalida:imagenEncriptada
    }
    cedulaEncriptada=obtenerCedulaEncriptada();

    let paciente={
      cedula:cedulaEncriptada
    }

    let pacienteRecambio={
      recambioInDto:recambioUnitario,
      pacienteInDto:paciente
    }

    fetch (servidorAPI+"paciente/prescripcion/crearRecambio",{
      method: 'POST',
      headers: {
        "Accept":"application/json",
    "Content-Type":"application/json"
      }
    });
    body: JSON.stringify(pacienteRecambio)
  .then(response => response.json())
  .then(data => {
    
  })
  .catch(error => {
    
  });

  if(drenaje<2000){
    $('#successModal').modal('show');
  }
  }



  let guardarRecambio=async()=>{
    let orificio;
    document.getElementsByName("opcion").forEach(opcion => {
      if(opcion.checked==true){
        orificio= opcion.value}
    })
    var drenaje = document.getElementById('drenaje').value;
    var concentracionSelect = document.getElementById("selectConcentracion").value;
    var liquidoSelect = document.getElementById('selectLiquido').value;
    var fechayhoraIni=document.getElementById("fechaHoraIni").value;
    var fechayhoraFin=document.getElementById("fechaHoraFin").value;

    let drenajeEncriptado=CryptoJS.AES.encrypt(drenaje, 'clave_secreta').toString();
    let liquidoEncriptado=CryptoJS.AES.encrypt(liquidoSelect, 'clave_secreta').toString();
    let orificioEncriptada=CryptoJS.AES.encrypt(orificio, 'clave_secreta').toString();

    let recambioHechoInDto={
      "caracteristicaLiquido": liquidoEncriptado,
      "drenajeDialisis": drenajeEncriptado,
      "orificioSalida": orificioEncriptada,
      "recambio": concentracionSelect,
      "fecha":fechayhoraIni,
      "hora":fechayhoraFin
    };
    fetch (servidorAPI+"paciente/recambio/crearRecambioHecho",{
      method: 'POST',
      body: JSON.stringify(recambioHechoInDto),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
    .then(response => {
      if (response.ok) {
      if(drenaje<2000){
         $('#modal2').modal('show');
      }else
      $('#successModal').modal('show');

      } else {
        $('#modal3').modal('show');
      }
    })
    .catch(error => {
      console.error(error);
      // Mostrar mensaje de error en la consola o en la interfaz de usuario
    })
     
  }

  /*let recambiosHechos=async()=>{
    const peticion= await fetch (servidorAPI+"paciente/recambio/findRecambioHechoByPaciente",{
      method: 'POST',
      body: JSON.stringify({"cedula":obtenerCedulaEncriptada()}),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
    let recambiosHechos2=await peticion.json()
        return recambiosHechos2
  }*/


