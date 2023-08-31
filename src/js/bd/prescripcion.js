
var cedulaEncriptada= "";

let prescripciones= async()=>{

  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);
      let cedEncriptada="";
      let cedulaEncriptada="";
      if(usuario=="medico"){
       cedulaEncriptada = await obtenerCedulaEncriptada(0, CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
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

let obtenerCedulaEncriptada=async(id, cedula)=>{
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
    
  return result;
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
       cedEncriptada = await obtenerCedulaEncriptada(0, CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
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
    console.error(error)
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
       ced = await obtenerCedulaEncriptada(0, CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
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


  let obtenerDatosCita=async(event)=>{
    event.preventDefault();
    let data = localStorage.getItem("datos");
    let dato=JSON.parse(data);
      let cedulaMedico= decodeURIComponent(dato.cedula);
    var orificio = CryptoJS.AES.encrypt(document.getElementById("selectedOrificio").value,"clave_secreta").toString();
    var pac=decodeURIComponent(localStorage.getItem("cedulaPaciente"));
    var fechaFin = document.getElementById("fechaFin").value+"T00:00:00.001Z";
    console.log(localStorage.getItem("cedulaPaciente"));
    let cita={
      orificioSalida:orificio,
      fechaFin:fechaFin,
      medico:cedulaMedico,
      paciente: await obtenerCedulaEncriptada(CryptoJS.AES.decrypt(pac,"clave_secreta").toString(CryptoJS.enc.Utf8))
    }
    console.log(pac);
    return cita;
  }

  let obtenerDatosPrescripcionDia=async(event)=>{
    event.preventDefault();
    let cantidad = parseInt(document.getElementById("selectCantidad").value);
    let nochesSecas=[];
    const daysForCycle=[];
    const prescipcionDia=[];
    for(let i=0;i<cantidad;i++){
      let nocheSeca=document.getElementById("nocheSeca"+(i+1)).checked?true:false;
      if(cantidad>1){
      var dias={
        lunes: document.getElementById("lunes"+(i+1)).checked?true:false,
        martes: document.getElementById("martes"+(i+1)).checked?true:false,
        miercoles: document.getElementById("miercoles"+(i+1)).checked?true:false,
        jueves: document.getElementById("jueves"+(i+1)).checked?true:false,
        viernes : document.getElementById("viernes"+(i+1)).checked?true:false,
        sabado : document.getElementById("sabado"+(i+1)).checked?true:false,
        domingo : document.getElementById("domingo"+(i+1)).checked?true:false}
      }
      else{
        var dias={
        lunes:true,
        martes:true,
        miercoles:true,
        jueves:true,
        viernes:true,
        sabado:true, 
        domingo:true
        }
      }
        daysForCycle.push(dias);
        nochesSecas.push(nocheSeca);  
    }
    prescipcionDia.push(daysForCycle);
    prescipcionDia.push(nochesSecas);
    prescipcionDia.push(cantidad);
    console.log(prescipcionDia);
    return prescipcionDia;
  }

  let obtenerValoresDePrescripcion=async(event)=>{
    event.preventDefault();
    await crearCita(event);
    await crearPrescripcionDia(event);
    await crearRecambios(event);
    location.href="examenesYVisita.html"
  }

  let crearCita=async(event)=>{
    event.preventDefault();
    let citaInDto=await obtenerDatosCita(event);
      await fetch(localStorage.getItem("servidorAPI") + 'Prueba/Cita', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(citaInDto)
      });
      return null;
  }

  let crearPrescripcionDia=async(event)=>{
    event.preventDefault();
    let prescripcionDia= await obtenerDatosPrescripcionDia(event);
    let ultimaCita=await encontrarUltimaCita(event);
    let idCita=ultimaCita.idCita;
    let cantidad=prescripcionDia[2];
    let nochesSecas=prescripcionDia[1];
    
    for(let i=0;i<cantidad;i++){
      let nocheSeca=nochesSecas[i];
      let dias=prescripcionDia[0][i];
      
      let prescripcionDiaInDto={
        cita:idCita,
        nocheSeca:nocheSeca,
        lunes:dias.lunes,
        martes:dias.martes,
        miercoles:dias.miercoles,
        jueves:dias.jueves,
        viernes:dias.viernes,
        sabado:dias.sabado,
        domingo:dias.domingo
      }
      console.log(prescripcionDiaInDto);
      await fetch(localStorage.getItem("servidorAPI") + 'paciente/crear/prescripcionDia', {
        method: 'POST',
        headers: {
          "Accept":"application/json",
      "Content-Type":"application/json"
        },
        body: JSON.stringify(prescripcionDiaInDto)
      })
    }
    return null;
  }

  let encontrarUltimaCita=async(event)=>{
    event.preventDefault();
    var pac=decodeURIComponent(localStorage.getItem("cedulaPaciente"));
    cedulaPaciente= await obtenerCedulaEncriptada(CryptoJS.AES.decrypt(pac,"clave_secreta").toString(CryptoJS.enc.Utf8));
    paciente={
      cedula:cedulaPaciente
    }
    let peticion= await fetch(localStorage.getItem("servidorAPI") + 'paciente/ultimaCita', {
      method: 'POST',
      headers: {
        "Accept":"application/json",
    "Content-Type":"application/json"
      },
      body: JSON.stringify(paciente)
    })
    

    let ultimaCita=await peticion.json();
    console.log(ultimaCita);
    return ultimaCita;
  }

  let crearRecambios=async(event)=>{
    event.preventDefault();
    let datosRecambio= await obtenerDatosRecambio(event);
    let prescipcionesDia=await prescripcionesDia(event);
    let cantidad=datosRecambio[datosRecambio.length-1];
    console.log(cantidad);
    for(let i=0; i<cantidad;i++){
      let prescrionDia= prescipcionesDia[i].idPrescripcionDia;
      console.log(prescrionDia);
      let dataRecambio=datosRecambio[i];
      console.log(dataRecambio);
      let cantRecambios=datosRecambio[datosRecambio.length-2][i];
      console.log(cantRecambios);
      let cont=0;
      for(let j=0;j<cantRecambios;j++){

        let recambioInDto={
          prescripcionDia:prescrionDia,
          concentracion:parseFloat(dataRecambio[cont].split("%")[0]),
          intervaloTiempo:parseInt(dataRecambio[cont+1])
        }
        console.log(recambioInDto);
        cont=cont+2;
        await fetch(localStorage.getItem("servidorAPI") + 'paciente/prescripcion/crearRecambio', {
          method: 'POST',
          headers: {
            "Accept":"application/json",
        "Content-Type":"application/json"
          },
          body: JSON.stringify(recambioInDto)
        })
      }
    }
  }

  let prescripcionesDia=async(event)=>{
    event.preventDefault();
    let cita=await encontrarUltimaCita(event);
    let idCita=cita.idCita;
        let peticion=await fetch(localStorage.getItem("servidorAPI") + 'paciente/prescripcionDia/findByCita/'+ idCita, {
          method: 'POST',
          headers: {
            "Accept":"application/json",
        "Content-Type":"application/json"
          }
        })
        let prescipcionDia=await peticion.json();
        console.log(prescipcionDia);
        return prescipcionDia;
      }

      let obtenerDatosRecambio=async(event)=>{
        event.preventDefault();
        var cantidad = parseInt(document.getElementById("selectCantidad").value);
        let cantidadRecambio=[];
        const datosRecambio=[];
        for(let i=0;i<cantidad;i++){
          const concentrationsForCycle = [];
            var selectPrescripciones= parseInt(document.getElementById("selectedCantidad"+(i+1)).value);
            for(let j=0;j<selectPrescripciones;j++){
              var concentraciones = document.getElementById("concentracion"+(j+1)+""+(i+1)).value;
              var rangos = document.getElementById("rangoconcentracion"+(j+1)+""+(i+1)).value;
              
              concentrationsForCycle.push(concentraciones);
              concentrationsForCycle.push(rangos);
                  
            }
            
            cantidadRecambio.push(selectPrescripciones);
            datosRecambio.push(concentrationsForCycle); 
            
            
          }
          datosRecambio.push(cantidadRecambio);
          datosRecambio.push(cantidad);
          console.log(datosRecambio);
          return datosRecambio;
          }
