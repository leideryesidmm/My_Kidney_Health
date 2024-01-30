
var cedulaEncriptada= "";

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

let paciente=async(cedula)=>{
  usuario={
    cedula:cedula
  }
  let peticion=await fetch(localStorage.getItem("servidorAPI")+"Usuario/cedula", {
    method:"POST",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    },
    body:JSON.stringify(usuario)
  })
    if (peticion.status===200) {
      const usuario=await peticion.json();
      return usuario;
    }
    else{
      return null;
    }
}

let cambioContrasenia = async (event) => {
  event.preventDefault();

  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let cedula= (dato.cedula);
      console.log(cedula);
      const usuario=await paciente(cedula);
      console.log("usuario de backend");
      console.log(usuario);
      let contraseniaBD="";
      if(usuario!=null){
      contraseniaBD=decodeURIComponent(CryptoJS.AES.decrypt(usuario.contrasenia, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
      }
      console.log("contraseniaBD");
      console.log(contraseniaBD);
const contraseniaAnterior = document.getElementById("contraseniaanterior").value;
const nuevaContrasenia = document.getElementById("newcontrasenia").value;
let contraseniaNueva=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(nuevaContrasenia)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      
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

let prescripciones= async()=>{

  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);
      let cedulaEncriptada="";
      if(usuario=="medico" || usuario=="administrador"){
        let cedulaDesencriptada = localStorage.getItem("cedulaPaciente");
        cedulaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedulaDesencriptada)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      }
      else{
        cedulaEncriptada=cedul;
      }
    const peticion= await fetch(localStorage.getItem("servidorAPI")+"Prescripcion/prescripcion/prescripcionActual",{
      method:"POST",
      body:JSON.stringify({cedula:cedulaEncriptada}),
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
});
if(peticion.status===200){
    const prescripcion=await peticion.json();
return prescripcion;}
}

let visitas= async()=>{
  let cedulaDesencriptada = localStorage.getItem("cedulaPaciente");
  let cedulaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedulaDesencriptada)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      const pacienteInDto={
        cedula:cedulaEncriptada
       }
    const peticion= await fetch(localStorage.getItem("servidorAPI")+"Prescripcion/prescripcion/visitas",{
      method:"POST",
      body:JSON.stringify(pacienteInDto),
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
});
if(peticion.status===200){
    const visitas=await peticion.json();
return visitas;}
if(peticion.status===204){
  let array=[];
  return array;
}
}

let chequeos= async()=>{
  let cedulaDesencriptada = localStorage.getItem("cedulaPaciente");
  cedulaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedulaDesencriptada)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
 const pacienteInDto={
  cedula:cedulaEncriptada
 }
const peticion= await fetch(localStorage.getItem("servidorAPI")+"Prescripcion/prescripcion/chequeos",{
 method:"POST",
 body:JSON.stringify(pacienteInDto),
 headers:{
   "Accept":"application/json",
   "Content-Type":"application/json"
 }
});
if(peticion.status===200){
const chequeos=await peticion.json();
return chequeos;}
if(peticion.status===204){
  let array=[];
  return array;
}

}

let crearRecambio = async () => {
    let imagenGuardada = "";
    var liquidoEntrante = document.getElementById('liquidoEntrante').value;
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

    let liquidoEntranteEncriptado=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(liquidoEntrante)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

    let drenajeEncriptado=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(drenaje)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

    let concentracionEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(concentracion)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

    let liquidoEncriptado=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(liquido)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
    
    let imagenEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(imagenGuardada)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

    let recambioUnitario={
      liquidoEntrante:liquidoEntranteEncriptado,
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
      if(usuario=="medico" || usuario=="administrador"){
        let cedulaDesencriptada = localStorage.getItem("cedulaPaciente");
        cedEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedulaDesencriptada)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      }
      else{
        cedEncriptada=cedul;
      }

    let paciente={
      cedula:cedEncriptada
    }

    let pacienteRecambio={
      recambioInDto:recambioUnitario,
      pacienteInDto:paciente
    }

    fetch (localStorage.getItem("servidorAPI")+"Recambio/prescripcion/crearRecambio",{
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
if(drenaje<liquidoEntrante && liquido=="Turbio"){
  document.getElementById("urgente").innerText="Está drenando menos líquido de lo debido y el líquido tiene una característica turbia, ¡por favor consulte un profesional de la salud!";
  $('#successModal').modal('show');
}
else{
  if(drenaje<liquidoEntrante){
    document.getElementById("urgente").innerText="Está drenando menos líquido de lo debido, ¡por favor consulte un profesional de la salud!";
    $('#successModal').modal('show');
  }
  if(liquido=="Turbio"){
  document.getElementById("urgente").innerText="El líquido tiene una característica turbia, ¡por favor consulte un profesional de la salud!";
  $('#successModal').modal('show');}
  }
}

let guardarRecambio=async(event)=>{
    event.preventDefault();
    const btnRecambio=document.getElementById("agregRecam");
    btnRecambio.style.background="gray";
    btnRecambio.disabled="true";
    let orificio;
    document.getElementsByName("opcion").forEach(opcion => {
      if(opcion.checked==true){
        orificio= opcion.value}
    })
    let fecha_real=new Date(localStorage.getItem("fecha_real"));
    console.log(fecha_real)
    var liquidoEntrante = document.getElementById('liquidoEntrante').value;
    var drenaje = document.getElementById('drenaje').value;
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var concentracionSelect = urlParams.get('idRecambio');
    var liquidoSelect = document.getElementById('selectLiquido').value;
    var fechayhoraIni=document.getElementById("fechaHoraIni").value;
    var fechayhoraFin=document.getElementById("fechaHoraFin").value;

    let liquidoEntranteEncriptado=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(liquidoEntrante)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
    let drenajeEncriptado=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(drenaje)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
    let liquidoEncriptado=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(liquidoSelect)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
    let orificioEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(orificio)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

    let recambioHechoInDto={
      "liquidoEntrante": liquidoEntranteEncriptado,
      "caracteristicaLiquido": liquidoEncriptado,
      "drenajeDialisis": drenajeEncriptado,
      "orificioSalida": orificioEncriptada,
      "recambio": concentracionSelect,
      "fechaReal":`${fecha_real.getFullYear()}-${(fecha_real.getMonth() + 1).toString().padStart(2, '0')}-${fecha_real.getDate().toString().padStart(2, '0')}T${fecha_real.getHours().toString().padStart(2, '0')}:${fecha_real.getMinutes().toString().padStart(2, '0')}`,
      "horaIni":fechayhoraIni,
      "horaFin":fechayhoraFin
    };
    console.log("este es el recambio que se hizo:")
    console.log(recambioHechoInDto)
    fetch (localStorage.getItem("servidorAPI")+"Recambio/recambio/crearRecambioHecho",{
      method: 'POST',
      body: JSON.stringify(recambioHechoInDto),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        if(drenaje<liquidoEntrante || liquidoSelect=="Turbio"){
          console.log(drenaje<liquidoEntrante && liquidoSelect=="Turbio");
          if(drenaje<liquidoEntrante && liquidoSelect=="Turbio"){
            
            document.getElementById("urgente").innerText="Está drenando menos líquido de lo debido y el líquido tiene una característica turbia, ¡por favor consulte un profesional de la salud!";
            $('#modal2').modal('show');
          }
          else{
            if(drenaje<liquidoEntrante){
              document.getElementById("urgente").innerText="Está drenando menos líquido de lo debido, ¡por favor consulte un profesional de la salud!";
              $('#modal2').modal('show');
            }
            if(liquidoSelect=="Turbio"){
            document.getElementById("urgente").innerText="El líquido tiene una característica turbia, ¡por favor consulte un profesional de la salud!";
            $('#modal2').modal('show');}
            }
        }
     else{
      $('#successModal').modal('show');}

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
    
    const peticion= await fetch (localStorage.getItem("servidorAPI")+"Recambio/prescripcion/findRecambioHechoById/"+idRecambioHecho,{
      method: 'POST',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
    if(peticion.status===200){
    let recambioHecho=await peticion.json()
    console.log(recambioHecho)
    document.getElementById("liquidoEntrante").value=decodeURIComponent(CryptoJS.AES.decrypt(recambioHecho.liquidoEntrante,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    document.getElementById("drenaje").value=decodeURIComponent(CryptoJS.AES.decrypt(recambioHecho.drenajeDialisis,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    document.getElementById("fechaHoraIni").value=recambioHecho.horaIni;
    document.getElementById("fechaHoraFin").value=recambioHecho.horaFin;
    const caracteristicaLiquido=decodeURIComponent(CryptoJS.AES.decrypt(recambioHecho.caracteristicaLiquido,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    const orificioSalida=decodeURIComponent(CryptoJS.AES.decrypt(recambioHecho.orificioSalida,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
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
}

let editarRecambio=async(event)=>{
    event.preventDefault();
    let orificio;

    document.getElementsByName("opcion").forEach(opcion => {
      if(opcion.checked==true){
        orificio= opcion.value}
    })
    
    let fecha_real=new Date(localStorage.getItem("fecha_real"));
    var liquidoEntrante = document.getElementById('liquidoEntrante').value;
    var drenaje = document.getElementById('drenaje').value;
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var idRecambioHecho = urlParams.get('idRecambioHecho');
    var liquidoSelect = document.getElementById('selectLiquido').value;
    var fechayhoraIni=document.getElementById("fechaHoraIni").value;
    var fechayhoraFin=document.getElementById("fechaHoraFin").value;

    let liquidoEntranteEncriptado=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(liquidoEntrante)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
    let drenajeEncriptado=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(drenaje)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
    let liquidoEncriptado=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(liquidoSelect)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
    let orificioEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(orificio)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

    let recambioHechoInDto={
      "liquidoEntrante": liquidoEntranteEncriptado,
      "caracteristicaLiquido": liquidoEncriptado,
      "drenajeDialisis": drenajeEncriptado,
      "orificioSalida": orificioEncriptada,
      "fechaReal":`${fecha_real.getFullYear()}-${(fecha_real.getMonth() + 1).toString().padStart(2, '0')}-${fecha_real.getDate().toString().padStart(2, '0')}T${fecha_real.getHours().toString().padStart(2, '0')}:${fecha_real.getMinutes().toString().padStart(2, '0')}`,
      "horaIni":fechayhoraIni,
      "horaFin":fechayhoraFin
    };
    fetch (localStorage.getItem("servidorAPI")+"Recambio/recambio/editarRecambioHecho/"+idRecambioHecho,{
      method: 'POST',
      body: JSON.stringify(recambioHechoInDto),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        if(drenaje<liquidoEntrante || liquidoSelect=="Turbio"){
          if(drenaje<liquidoEntrante && liquidoSelect=="Turbio"){
            document.getElementById("urgente").innerText="Está drenando menos líquido de lo debido y el líquido tiene una característica turbia, ¡por favor consulte un profesional de la salud!";
            $('#modal2').modal('show');
          }
          else{
            if(drenaje<liquidoEntrante){
              document.getElementById("urgente").innerText="Está drenando menos líquido de lo debido, ¡por favor consulte un profesional de la salud!";
              $('#modal2').modal('show');
            }
            if(liquidoSelect=="Turbio"){
            document.getElementById("urgente").innerText="El líquido tiene una característica turbia, ¡por favor consulte un profesional de la salud!";
            $('#modal2').modal('show');}
            }
        }else
      $('#successModal').modal('show');

      } else {
        $('#modal3').modal('show');
      }
    })
    .catch(error => {
      console.error(error);
      
    })
     
}

let recambiosHechos=async()=>{
    let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);
      if(usuario=="medico" || usuario=="administrador"){
        let cedulaDesencriptada = localStorage.getItem("cedulaPaciente");
        ced=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedulaDesencriptada)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      }
      else{
        ced=cedul;
      }

      let pacienteInDto={
        cedula:ced
      }
    const peticion= await fetch (localStorage.getItem("servidorAPI")+"Recambio/recambio/findRecambioHechoByPaciente",{
      method: 'POST',
      body: JSON.stringify(pacienteInDto),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
    if(peticion.status===200){
    let recambiosHechos2=await peticion.json()
        return recambiosHechos2;
      }
        else{return [];}
}

let recambiosPorFecha=async(recambios,fecha)=>{
    recambios=await recambios;
    if(recambios==undefined){
      return null
    }
    recambios=recambios.recambios;
    const peticion= await fetch (localStorage.getItem("servidorAPI")+"Recambio/recambio/findRecambioHechosByPrescripcionDiaAndFecha/"+fecha,{
      method: 'POST',
      body: JSON.stringify(recambios),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    });
    if(peticion.status===200){
    let recambioshechos=await peticion.json();
    return recambioshechos;
    }
    else{

    }
}

let cedEncriptada=async(cedula)=>{
   
  usuario={
    cedula:cedula
  }
  let peticion=await fetch(localStorage.getItem("servidorAPI")+"Usuario/cedula", {
    method:"POST",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    },
    body:JSON.stringify(usuario)
  })
    if (peticion.status===200) {
      const usuario=await peticion.json();
      return usuario.cedula;
    }
    else{
      return null;
    }
}

let obtenerDatosCita=async(event)=>{
    event.preventDefault();
    let data = localStorage.getItem("datos");
    let dato=JSON.parse(data);
      let cedulaMedico= dato.cedula;
    var orificio = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(document.getElementById("selectedOrificio").value)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
    var pac=localStorage.getItem("cedulaPaciente");
    pacient=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(pac)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
    
    let pacienteEncriptado= await cedEncriptada(pacient);
    var fechaFin = document.getElementById("fechaFin").value+"T00:00:00.001Z";
    
    let cita={
      orificioSalida:orificio,
      fechaFin:fechaFin,
      medico:cedulaMedico,
      paciente: pacienteEncriptado
    }
    
    return cita;
}

function validarCeckbox(){
     let cantidad = parseInt(document.getElementById("selectCantidad").value);
     let checks=[];
     for(let i=0;i<cantidad;i++){
      
      var dias={
        lunes: document.getElementById("lunes"+(i+1)).checked?true:false,
        martes: document.getElementById("martes"+(i+1)).checked?true:false,
        miercoles: document.getElementById("miercoles"+(i+1)).checked?true:false,
        jueves: document.getElementById("jueves"+(i+1)).checked?true:false,
        viernes : document.getElementById("viernes"+(i+1)).checked?true:false,
        sabado : document.getElementById("sabado"+(i+1)).checked?true:false,
        domingo : document.getElementById("domingo"+(i+1)).checked?true:false}
      
      if(dias.lunes==true || dias.martes==true || dias.miercoles==true || dias.jueves==true || dias.viernes==true || dias.sabado==true || dias.domingo==true){
        checks[i]=true;
      }
      else{
        checks[i]=false;
      }
     }
     for(let j=0;j<cantidad;j++){
      if(checks[j]==false)
      return false;
     }
     return true;
}

let obtenerDatosPrescripcionDia=async(event)=>{
    event.preventDefault();
    let cantidad = parseInt(document.getElementById("selectCantidad").value);
    let nochesSecas=[];
    const daysForCycle=[];
    const prescipcionDia=[];
    for(let i=0;i<cantidad;i++){
      let nocheSeca=document.getElementById("nocheSeca"+(i+1)).checked?true:false;
      var dias={
        lunes: document.getElementById("lunes"+(i+1)).checked?true:false,
        martes: document.getElementById("martes"+(i+1)).checked?true:false,
        miercoles: document.getElementById("miercoles"+(i+1)).checked?true:false,
        jueves: document.getElementById("jueves"+(i+1)).checked?true:false,
        viernes : document.getElementById("viernes"+(i+1)).checked?true:false,
        sabado : document.getElementById("sabado"+(i+1)).checked?true:false,
        domingo : document.getElementById("domingo"+(i+1)).checked?true:false}
     
        
        daysForCycle.push(dias);
      
        nochesSecas.push(nocheSeca); 
    
  }
  prescipcionDia.push(daysForCycle);
    prescipcionDia.push(nochesSecas);
  prescipcionDia.push(cantidad);
    
    return prescipcionDia;
}

function errorDia(){
  
       const btnGuardarPrescripcion=document.getElementById("agregarPrescripcion");
      btnGuardarPrescripcion.style.background="#04BAFC";
      btnGuardarPrescripcion.disabled=false;
      $('#errorModal').modal('hide');
}

function errorDiaEditar(){
  
  const btnPrescripcion=document.getElementById("editarPrescripcion");
      btnPrescripcion.style.background="#04BAFC";
      btnPrescripcion.disabled=false;
      $('#errorModal').modal('hide');
}

let obtenerValoresDePrescripcion=async(event)=>{
    event.preventDefault();

let validacirChecks=validarCeckbox();
    if(validacirChecks==true){
      const btnPrescripcion=document.getElementById("agregarPrescripcion");
    btnPrescripcion.style.background="gray";
    btnPrescripcion.disabled="true"
    await crearCita(event);
    await crearPrescripcionDia(event);
    await crearRecambios(event);
    $('#successModal').modal('show');
  }
    else{
      $('#errorModal').modal('show');
      const btnPrescripcion=document.getElementById("agregarPrescripcion");
      btnPrescripcion.style.background="gray";
      btnPrescripcion.disabled="true"
    }
}

let crearCita=async(event)=>{
    event.preventDefault();
    let citaInDto=await obtenerDatosCita(event);
      await fetch(localStorage.getItem("servidorAPI") + 'Prescripcion/Cita', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(citaInDto)
      });
}

let crearPrescripcionDia=async(event)=>{
    event.preventDefault();
    
    let prescripcionDia= await obtenerDatosPrescripcionDia(event);
    
    let ultimaCita=await encontrarUltimaCita(event);
    if(ultimaCita!=null){
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
    
      await fetch(localStorage.getItem("servidorAPI") + 'Prescripcion/crear/prescripcionDia', {
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
}

let encontrarUltimaCita=async(event)=>{
    if(event!=undefined){
    event.preventDefault();
    }
    var pac=decodeURIComponent(localStorage.getItem("cedulaPaciente"));
    let paciente=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(pac)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
    cedulaPaciente= await cedEncriptada(paciente);
    
    paciente={
      cedula:cedulaPaciente
    }
    let peticion= await fetch(localStorage.getItem("servidorAPI") + 'Prescripcion/ultimaCita', {
      method: 'POST',
      headers: {
        "Accept":"application/json",
    "Content-Type":"application/json"
      },
      body: JSON.stringify(paciente)
    })
    
    if(peticion.status===200){
    let ultimaCita=await peticion.json();
   
    return ultimaCita;}
    else{
      return null;
    }

}

let crearVisita = async (cedulaPaciente) => {
           
  let ultCita=await encontrarUltimaCita();
  let idCita=ultCita.idCita;
  console.log(idCita);
  let checkboxes = document.querySelectorAll("input[name='visita']:checked");
  let visitaEspecialistaDto = {
    cita: idCita
  };

  Array.from(checkboxes).forEach(function (checkbox) {
    visitaEspecialistaDto[checkbox.value] = true;
  });

  console.log(visitaEspecialistaDto);

  if (Object.keys(visitaEspecialistaDto).length > 0) {
    await fetch(localStorage.getItem("servidorAPI") + 'Medico/visitaEspecialista', {
      method: "POST",
      body: JSON.stringify(visitaEspecialistaDto),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response);
        if (response.ok) {
          $('#visita').modal('hide');
          $('#successModalVisitaAgg').modal('show');
          
        } else {
          $('#errorModal').modal('show');
        }
      })
      .catch(error => {
        console.error(error);
      });
  } else {
    alert("Selecciona al menos un checkbox para guardar.");
  }
};

let crearChequeoMensual = async (cedulaPaciente) => {

  let ultCita=await encontrarUltimaCita();
  console.log(ultCita);
  let idCita=ultCita.idCita;
  let inputs = document.querySelectorAll("input[name='chequeo']");
  let chequeoMensual = {
    cita: idCita 
  };

  Array.from(inputs).forEach(function (input) {
    if (input.value.trim() !== "") {
      chequeoMensual[input.id] = input.value;
    }
  });

  let chequeoMensualInDto= encriptarDatosChequeo(chequeoMensual);
  console.log(chequeoMensual);
  console.log(chequeoMensualInDto);

  if (Object.keys(chequeoMensualInDto).length > 1) { 
    const response = await fetch(localStorage.getItem("servidorAPI") + 'Medico/chequeoMensual', {
      method: "POST",
      body: JSON.stringify(chequeoMensualInDto),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    try {
      if (response.ok) {
        $('#agregarChequeo').modal('hide');
        $('#successModalChequeoAgg').modal('show');
        
      } else {
        $('#errorModal').modal('show');
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    alert("Completa al menos un campo de entrada para guardar.");
  }
};

let encriptarDatosChequeo=(chequeo)=>{
  let colesterolTotal=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeo.colesterolTotal)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let fosforo=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeo.fosforo)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let glicemia=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeo.glicemia)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let hdl=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeo.hdl)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let hemoglobina=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeo.hemoglobina)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let ldh=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeo.ldh)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let nitrogenoUreico=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeo.nitrogenoUreico)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let potasio=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeo.potasio)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let tensionArterial=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeo.tensionArterial)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let trigliceridos=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeo.trigliceridos)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let peso=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeo.peso)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let pesoSeco=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeo.pesoSeco)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let glucosa=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeo.glucosa)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let creatinina=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeo.creatinina)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let ktv=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeo.ktv)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let cita=chequeo.cita;

  let chequeoMensualInDto={
    colesterolTotal:colesterolTotal, fosforo:fosforo, glicemia:glicemia, hdl:hdl, hemoglobina:hemoglobina, ldh:ldh, nitrogenoUreico:nitrogenoUreico, potasio:potasio, tensionArterial:tensionArterial, trigliceridos:trigliceridos, peso:peso, pesoSeco:
    pesoSeco, glucosa:glucosa, creatinina, creatinina, ktv:ktv, cita:cita
  }
  return chequeoMensualInDto;
}

let crearRecambios=async(event)=>{
    event.preventDefault();
    let datosRecambio= await obtenerDatosRecambio(event);
    let prescipcionesDia=await prescripcionesDia(event);
    let cantidad=datosRecambio[datosRecambio.length-1];
   
    for(let i=0; i<cantidad;i++){
      let prescrionDia= prescipcionesDia[i].idPrescripcionDia;
    
      let dataRecambio=datosRecambio[i];
     
      let cantRecambios=datosRecambio[datosRecambio.length-2][i];
     
      let cont=0;
      for(let j=0;j<cantRecambios;j++){

        
        
        let recambioInDto={
          prescripcionDia:prescrionDia,
          concentracion:CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(dataRecambio[cont].split("%")[0])), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(),
          intervaloTiempo:CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(dataRecambio[cont+1])), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString()
        }
        console.log(recambioInDto);
       
        cont=cont+2;
        await fetch(localStorage.getItem("servidorAPI") + 'Recambio/prescripcion/crearRecambio', {
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
    if(cita!=null){
    let idCita=cita.idCita;
        let peticion=await fetch(localStorage.getItem("servidorAPI") + 'Prescripcion/prescripcionDia/findByCita/'+ idCita, {
          method: 'POST',
          headers: {
            "Accept":"application/json",
        "Content-Type":"application/json"
          }
        })
        let prescipcionDia=await peticion.json();
        
        return prescipcionDia;
      }
      return null;
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
          
          return datosRecambio;
}

let datosEditarPrescripcion=async(event)=>{

              let recambio="";
              let recambios=[];
            let cita=await encontrarUltimaCita();
            if(cita!=null){
            let idCita=cita.idCita
            let prescipcionDia=await encontrarPrescripcionDiaPorCita(event, idCita);
            for(let i=0;i<prescipcionDia.length;i++){
              let idPrescripcionDia=prescipcionDia[i].idPrescripcionDia;
              recambio=await encontrarRecambioPorPrescripcionDia(event,idPrescripcionDia);
                recambios[i]=recambio;
            }
            

            let datosEditar={
              cita:cita,
              prescipcionDia:prescipcionDia,
              recambios:recambios
            }
            return datosEditar;
          }
          else{
            return null;
          }

}

let encontrarPrescripcionDiaPorCita=async(event,cita)=>{
            if(event!=undefined){
              event.preventDefault();
            }
                  let peticion=await fetch(localStorage.getItem("servidorAPI") + 'Prescripcion/prescripcionDia/findByCita/'+ cita, {
                    method: 'POST',
                    headers: {
                      "Accept":"application/json",
                  "Content-Type":"application/json"
                    }
                  })
                  if(peticion.status===200){
                  let prescipcionDia=await peticion.json();
                  return prescipcionDia;
                  }
                  else{
                    return null;
                  }
}
//ya, revisar
let  encontrarRecambioPorPrescripcionDia=async(event, prescripcionDia)=>{
            if(event!=undefined){
              event.preventDefault();
            }
            let peticion= await fetch(localStorage.getItem("servidorAPI") + 'Recambio/recambio/findRecambioByPrescripcion/'+prescripcionDia,{
              method: 'POST',
                    headers: {
                      "Accept":"application/json",
                  "Content-Type":"application/json"
                    }
            })
            if(peticion.status===200){
            let recambio=await peticion.json();
            console.log(recambio);
            return recambio;}
            else{return null;}
}
//ya, no se modificó
let obtenerDatosParaEditar=async(event)=>{
    event.preventDefault();
    let checks=validarCeckbox();
    if(checks==true){
      const btnPrescripcion=document.getElementById("editarPrescripcion");
      btnPrescripcion.style.background="gray";
      btnPrescripcion.disabled="true";
    await cambiarCitaEnVisitaYchequeo(event);
    await crearPrescripcionDia(event);
    await crearRecambios(event);
    $('#successModal').modal('show');
  }
    else{
      $('#errorModal').modal('show');
      const btnPrescripcion=document.getElementById("editarPrescripcion");
      btnPrescripcion.style.background="gray";
      btnPrescripcion.disabled="true"
    }
}   

let cambiarCitaEnVisitaYchequeo=async(event)=>{
    let visitaEspecialistaDto=await obtenerUltimaVisita();
    let chequeoMensualInDto=await obtenerUltimoChequeo();
    console.log(visitaEspecialistaDto);
    if(visitaEspecialistaDto!=null){
    delete visitaEspecialistaDto.cita;}
    if(chequeoMensualInDto!=null){
    delete chequeoMensualInDto.cita;}
    await eliminarCita();
    await crearCita(event);
    let ultimaCita=await encontrarUltimaCita();
    let idCita=ultimaCita.idCita;
    if(visitaEspecialistaDto!=null || visitaEspecialistaDto!=undefined){
      visitaEspecialistaDto.cita=idCita;
    await fetch(localStorage.getItem("servidorAPI") + 'Medico/visitaEspecialista',{
      method: 'POST',
          headers: {
            "Accept":"application/json",
        "Content-Type":"application/json"
          },
          body: JSON.stringify(visitaEspecialistaDto)
    })
  }
  if(chequeoMensualInDto!=null || chequeoMensualInDto!=undefined){
    chequeoMensualInDto.cita=idCita;
    await fetch(localStorage.getItem("servidorAPI") + 'Medico/chequeoMensual',{
      method: 'POST',
          headers: {
            "Accept":"application/json",
        "Content-Type":"application/json"
          },
          body: JSON.stringify(chequeoMensualInDto)
    })
  }


    //4. obtener el id de la nueva cita
    //5. Crear visita y chequeo con id de la cita
    
}

let eliminarCita=async()=>{
    let cita=await encontrarUltimaCita()
    let id_cita=cita.idCita
    console.log(id_cita);
    fetch(localStorage.getItem("servidorAPI")+"Prescripcion/EliminarCita/"+id_cita,{
      method:"DELETE",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
});
}

let obtenerUltimaVisita=async()=>{
    try{
    let cita=await encontrarUltimaCita();
    if(cita!=null){
    let id_cita=cita.idCita;
    let peticion=await fetch(localStorage.getItem("servidorAPI")+"Medico/encontrarVisita/"+id_cita,{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
      if (peticion.status===200) {
        let visita= await peticion.json();
        return visita;
        }
   else{
      return null;
    }
  }
}
  catch (error) {
    console.error(error);
    return null;
  }
}

let obtenerUltimoChequeo = async () => {
    try {
      let cita = await encontrarUltimaCita();
      if(cita!=null){
      let id_cita = cita.idCita;
  
      let peticion = await fetch(localStorage.getItem("servidorAPI") + "Medico/encontrarChequeo/" + id_cita, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
  
      if (peticion.status===200) {
        let chequeo = await peticion.json();
        console.log("chequeo de la petición");
        console.log(chequeo);
        return chequeo;
      } else {
        
        return null;
      }
    }
    } catch (error) {
      console.error(error);
      return null;
    }
}

let encontrarPaciente = async () => {
  let cedulaDesencriptada = localStorage.getItem("cedulaPaciente");
  let cedulaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedulaDesencriptada)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
 
  let pacienteInDto={
    cedula:cedulaEncriptada
  }
    
  const peticion = await fetch(localStorage.getItem("servidorAPI") + "paciente/findPacienteByCedula", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body:JSON.stringify(pacienteInDto)
  });
if(peticion.status===200){
  const paciente = await peticion.json();
  return paciente;
}
else{return null;}
}

function cerrarEditarChequeo(){
  $("#editarChequeo").modal("hide");
  $("#mostrarChequeo").modal("show");
}

function cerrarEditarVisita(){
  $("#editarVisita").modal("hide");
  $("#mostrarVisitaEspecialista").modal("show");
}

function cerrarChequeo(){
  $("#mostrarChequeo").modal("hide");
}

function cerrarVisita(){
  $("#mostrarVisitaEspecialista").modal("hide");
}

function cerrarAgregarVisita(){
  $("#visita").modal("hide");
}

function cerrarAgregarChequeo(){
  $("#agregarChequeo").modal("hide");
}

function cerrarChequeoVacio(){
  $("#errorModalChequeo").modal("hide");
}

function cerrarVisitaVacia(){
  $("#errorModalVisita").modal("hide");
}

let actualizarChequeo=async()=>{
  let idChequeo=parseInt(document.getElementById("editarIdChequeo").value);
  let idCita=parseInt(document.getElementById("idCita").value);

  let tensionArterial= CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(document.getElementById("editarTensionArterial").value)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

  let colesterolTotal= CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(document.getElementById("editarColesterolTotal").value)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

  let glicemia= CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(document.getElementById("editarGlicemia").value)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

  let trigliceridos= CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(document.getElementById("editarTrigliceridos").value)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

  let ldh= CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(document.getElementById("editarLdh").value)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

  let hemoglobina= CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(document.getElementById("editarHemoglobina").value)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

  let fosforo= CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(document.getElementById("editarFosforo").value)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

  let potasio= CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(document.getElementById("editarPotasio").value)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

  let nitrogenoUreico= CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(document.getElementById("editarNitrogenoUreico").value)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

  let hdl= CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(document.getElementById("editarHdl").value)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

  let peso= CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(document.getElementById("editarPeso").value)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

  let pesoSeco= CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(document.getElementById("editarPesoSeco").value)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

  let glucosa= CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(document.getElementById("editarGlucosa").value)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

  let creatinina= CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(document.getElementById("editarCreatinina").value)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

  let ktv= CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(document.getElementById("editarKtv").value)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

  let chequeoInDto={
    cita:idCita, tensionArterial:tensionArterial, colesterolTotal:colesterolTotal,
    glicemia:glicemia, trigliceridos:trigliceridos, ldh:ldh, hemoglobina:hemoglobina, fosforo:fosforo, potasio:potasio, nitrogenoUreico:nitrogenoUreico, hdl:hdl, glucosa:glucosa, creatinina:creatinina, ktv:ktv, peso:peso, pesoSeco:pesoSeco
  }
  console.log(chequeoInDto);

  await fetch(localStorage.getItem("servidorAPI")+"Prescripcion/ActualizarChequeo/"+idChequeo,{
    method:"PATCH",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    },
    body: JSON.stringify(chequeoInDto)
  })
  .then(response => {
    if (response.ok) {
      $("#editarChequeo").modal("hide");
        $('#successModalChequeo').modal('show');
      }
  })

}

let actualizarVisita=async()=>{
  let idVisita=parseInt(document.getElementById("idVisita").value);
  let idCita=parseInt(document.getElementById("idCita").value);
  let farmacia=document.getElementById("editarFarmacia").checked?true:false;
  let nefrologia=document.getElementById("editarNefrologia").checked?true:false;
  let psicologia=document.getElementById("editarPsicologia").checked?true:false;
  let enfermeria=document.getElementById("editarEnfermeria").checked?true:false;
  let nutricion=document.getElementById("editarNutricion").checked?true:false;
  let trabajoSocial=document.getElementById("editarTrabajoSocial").checked?true:false;
  let auxiliarAdmisiones=document.getElementById("editarAuxiliarAdmisiones").checked?true:false;
  let entrenamiento=document.getElementById("editarEntrenamiento").checked?true:false;
  let reentrenamiento=document.getElementById("editarReentrenamiento").checked?true:false;
  let visitadomiciliaria=document.getElementById("editarVisitaDomiciliaria").checked?true:false;
  console.log(visitadomiciliaria);
  let visitaEspecialistaInDto={ cita:idCita, farmacia:farmacia, nefrologia:nefrologia, psicologia:psicologia, enfermeria:enfermeria, nutricion:nutricion, trabajoSocial:trabajoSocial, auxiliarAdmisiones:auxiliarAdmisiones, entrenamiento:entrenamiento, reentrenamiento:reentrenamiento, visitaDomiciliaria:visitadomiciliaria
  }
  

  await fetch(localStorage.getItem("servidorAPI")+"Prescripcion/ActualizarVisita/"+idVisita,{
    method:"PATCH",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    },
    body: JSON.stringify(visitaEspecialistaInDto)
  })
  .then(response => {
    if (response.ok) {
      $("#editarVisita").modal("hide");
        $('#successModal').modal('show');
      }
  })
}

let findUsuario= async () => {
  let cedulaDesencriptada = localStorage.getItem("cedulaPaciente");
        cedula=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedulaDesencriptada)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let usuarioInDto = {cedula : cedula}
  console.log(usuarioInDto)
  try {
      const response = await fetch(localStorage.getItem("servidorAPI") + "Usuario/cedula", {
        method: "POST",
        body: JSON.stringify(usuarioInDto),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });    
      if (response.ok) {
        const usuarioData = await response.json();
        console.log(usuarioData)
        const nombreUsuario = usuarioData.nombre; 
        nombreDecrypt =decodeURIComponent(CryptoJS.AES.decrypt(nombreUsuario,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
        document.getElementById("title").innerText="Prescripciones del paciente: "+nombreDecrypt
      }
    } catch (error) {
      console.error(error);
    }
}

let finAllRecambiosHechos= async(idCita)=>{
    const response = await fetch(localStorage.getItem("servidorAPI") + "Recambio/findAllRecambiosHechos/"+idCita, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
    if (response.ok) {
      const recambios = await response.json();
      console.log(recambios);
      return recambios;
    }else{
      console.log("no paso respuesta ok");
      console.log(response);
    }
}

let findAllPrescripciones=async()=>{
  let cedulaDesencriptada = localStorage.getItem("cedulaPaciente");
  cedula=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedulaDesencriptada)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
    paciente={
      cedula:cedula
    }
    const response = await fetch(localStorage.getItem("servidorAPI") + "Prescripcion/prescripcionesByPaciente", {
      method: "POST",
      body:JSON.stringify(paciente),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
    if (response.ok) {
      const recambios = await response.json();
      return recambios;
    }else{
      console.log("no paso respuesta ok");
      console.log(response);
    }
}

let finalizar=async(idCita)=>{
    fetch(localStorage.getItem("servidorAPI") + "Prescripcion/finalizarPrescripcion/"+idCita, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response=>{
      if(response.ok)
      location.reload();}) 
}
