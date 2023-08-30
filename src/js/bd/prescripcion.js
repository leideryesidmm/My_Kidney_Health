
var cedulaEncriptada= "";

let prescripciones= async()=>{

  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);
      let cedEncriptada="";
      let cedulaEncriptada="";
      if(usuario=="medico"){
       cedulaEncriptada = await obtenerCedulaEncriptada(CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
      ;}
      else{
        cedulaEncriptada=cedul;
      }
    const peticion= await fetch(localStorage.getItem("servidorAPI")+"paciente/prescripcion/prescripcionActual",{
      method:"POST",
      body:JSON.stringify({cedula:cedulaEncriptada}),
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
});
    const prescripcion=await peticion.json();
    console.log(prescripcion.unionPrescripcionDiasRecambios)
return prescripcion;
}

let obtenerCedulaEncriptada=async(cedula)=>{
  const peticion= await fetch(localStorage.getItem("servidorAPI")+'Medico/findAllPacientes',{
    method:'GET',
    headers:{
      "Accept":"application/json",
      "Content-Type": "application/json"
    }
      });
      const pacientes=await peticion.json();
      pacientes.forEach(paciente=>{
        let decryptedCedula = CryptoJS.AES.decrypt(paciente.cedula, 'clave_secreta').toString(CryptoJS.enc.Utf8);
        if(cedula===decryptedCedula)
        cedulaEncriptada=paciente.cedula;
        
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

    let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);
      let cedEncriptada="";
      let cedulaEncriptada="";
      if(usuario=="medico"){
       cedEncriptada = await obtenerCedulaEncriptada(CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
      }
      else{
        cedEncriptada=cedul;
      }

    let paciente={
      cedula:cedulaEncriptada
    }

    let pacienteRecambio={
      recambioInDto:recambioUnitario,
      pacienteInDto:paciente
    }

    fetch (localStorage.getItem("servidorAPI")+"paciente/prescripcion/crearRecambio",{
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



  let guardarRecambio=async(event)=>{
    event.preventDefault();
    let orificio;
    document.getElementsByName("opcion").forEach(opcion => {
      if(opcion.checked==true){
        orificio= opcion.value}
    })
    let fecha_real=new Date(localStorage.getItem("fecha_real"));
    console.log(fecha_real)
    var drenaje = document.getElementById('drenaje').value;
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var concentracionSelect = urlParams.get('idRecambio');
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
      "fecha_real":`${fecha_real.getFullYear()}-${(fecha_real.getMonth() + 1).toString().padStart(2, '0')}-${fecha_real.getDate().toString().padStart(2, '0')}T${fecha_real.getHours().toString().padStart(2, '0')}:${fecha_real.getMinutes().toString().padStart(2, '0')}`,
      "hora_ini":fechayhoraIni,
      "hora_fin":fechayhoraFin
    };
    console.log("este es el recambio que se hizo:")
    console.log(recambioHechoInDto)
    fetch (localStorage.getItem("servidorAPI")+"paciente/recambio/crearRecambioHecho",{
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

  let llenarFormEditarRecambio=async()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const idRecambioHecho = urlParams.get('idRecambioHecho');
    console.log(idRecambioHecho);
    const peticion= await fetch (localStorage.getItem("servidorAPI")+"paciente/prescripcion/findRecambioHechoById/"+idRecambioHecho,{
      method: 'POST',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
    let recambioHecho=await peticion.json()
    console.log(recambioHecho)
    document.getElementById("drenaje").value=CryptoJS.AES.decrypt(recambioHecho.drenajeDialisis, "clave_secreta").toString(CryptoJS.enc.Utf8); 
    document.getElementById("fechaHoraIni").value=recambioHecho.hora_ini;
    document.getElementById("fechaHoraFin").value=recambioHecho.hora_fin;
    const caracteristicaLiquido=CryptoJS.AES.decrypt(recambioHecho.caracteristicaLiquido, 'clave_secreta').toString(CryptoJS.enc.Utf8);
    const orificioSalida=CryptoJS.AES.decrypt(recambioHecho.orificioSalida, 'clave_secreta').toString(CryptoJS.enc.Utf8);
    const selectLiquido = document.getElementById("selectLiquido");

for (let i = 0; i < selectLiquido.options.length; i++) {
    if (selectLiquido.options[i].value === caracteristicaLiquido) {
        selectLiquido.options[i].selected = true;
        break;
    }
}
const inputRadios = document.querySelectorAll('input[type="radio"][name="opcion"]');

for (let i = 0; i < inputRadios.length; i++) {
    if (inputRadios[i].value === orificioSalida) {
        inputRadios[i].checked = true;
        break;
    }
}
  }
  



  let editarRecambio=async()=>{
    let orificio;
    document.getElementsByName("opcion").forEach(opcion => {
      if(opcion.checked==true){
        orificio= opcion.value}
    })
    
    let fecha_real=new Date(localStorage.getItem("fecha_real"));
    var drenaje = document.getElementById('drenaje').value;
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var idRecambioHecho = urlParams.get('idRecambioHecho');
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
      "fecha_real":`${fecha_real.getFullYear()}-${(fecha_real.getMonth() + 1).toString().padStart(2, '0')}-${fecha_real.getDate().toString().padStart(2, '0')}T${fecha_real.getHours().toString().padStart(2, '0')}:${fecha_real.getMinutes().toString().padStart(2, '0')}`,
      "hora_ini":fechayhoraIni,
      "hora_fin":fechayhoraFin
    };
    fetch (localStorage.getItem("servidorAPI")+"paciente/recambio/editarRecambioHecho/"+idRecambioHecho,{
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

  let recambiosHechos=async()=>{
    let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);
      let cedEncriptada="";
      let cedulaEncriptada="";
      if(usuario=="medico"){
       ced = await obtenerCedulaEncriptada(CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
      }
      else{
        ced=cedul;
      }

      let pacienteInDto={
        cedula:ced
      }
    const peticion= await fetch (localStorage.getItem("servidorAPI")+"paciente/recambio/findRecambioHechoByPaciente",{
      method: 'POST',
      body: JSON.stringify(pacienteInDto),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
    let recambiosHechos2=await peticion.json()
        return recambiosHechos2
  }

  let recambiosPorFecha=async(recambios,fecha)=>{
    recambios=await recambios;
    if(recambios==undefined){
      return null
    }
    recambios=recambios.recambios;
    console.log(recambios)
    let user=JSON.parse(localStorage.getItem("datos"))
    let cedula=""
            if(user.usuario=="medico"){
              console.log(localStorage.getItem("cedulaPaciente"))
                 cedula=localStorage.getItem("cedulaPaciente");
            }else{
                 cedula=user.cedula;
            }
    const peticion= await fetch (localStorage.getItem("servidorAPI")+"paciente/recambio/findRecambioHechosByPrescripcionDiaAndFecha/"+fecha,{
      method: 'POST',
      body: JSON.stringify(recambios),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
    let recambioshechos=await peticion.json()
    console.log(recambioshechos);
        return recambioshechos
  }
