var cedulaEncriptada= "";

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




let listarMedicamentos= async()=>{


  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);
      console.log(cedul);
      console.log(usuario);
      let cedEncriptada="";
      let cedulaEncriptada="";
      if(usuario=="medico"){
       cedEncriptada = await obtenerCedulasUsuarios(0, CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
      console.log(cedulaEncriptada);}
      else{
        cedEncriptada=cedul;
      }

  const medDesencriptados = new Set();
  let pacienteInDto={
    cedula:cedEncriptada
  }
    const peticion= await fetch(localStorage.getItem("servidorAPI")+"paciente/medicamento/findMedicamentoByPaciente",{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(pacienteInDto)
});
    const medicamentos=await peticion.json();

    medicamentos.forEach(medicamento=>{
      let concentracionDesencriptada=CryptoJS.AES.decrypt(medicamento.concentracion, "clave_secreta").toString(CryptoJS.enc.Utf8);
      let descripcionDesencriptada=CryptoJS.AES.decrypt(medicamento.descripcion, "clave_secreta").toString(CryptoJS.enc.Utf8);
      let dosis=medicamento.dosis;
      let fechaIni= medicamento.fechaIni.split("T");
      let fechaInicial=fechaIni[0];
      let fechaInicio=new Date(fechaInicial).toLocaleDateString();
      let fechaFin= medicamento.fechaFin.split("T");
      let fechaFinalizacion=new Date(fechaFin).toLocaleDateString();
      let intervaloDesencriptado=medicamento.intervaloTiempo;
      let nombreDesencriptado=CryptoJS.AES.decrypt(medicamento.nombre, "clave_secreta").toString(CryptoJS.enc.Utf8);
      let tomasDesencriptadas=medicamento.tomas;
      let viaAdministracionDesencriptada=medicamento.viaAdministracion.descripcion;
      let idFormulaMedicamento=medicamento.idFormulaMedicamento;
      let recetado=medicamento.recetado;

      const medicamentosDesencriptados={
        concentracion:concentracionDesencriptada,
        descripcion:descripcionDesencriptada,
        dosis:dosis,
        fechaIni:fechaInicio,
        fechaFin:fechaFinalizacion,
        intervaloTiempo:intervaloDesencriptado,
        nombre:nombreDesencriptado,
        tomas:tomasDesencriptadas,
        via_Administracion:viaAdministracionDesencriptada,
        idFormulaMedicamento:idFormulaMedicamento,
        recetado:recetado
      }

      medDesencriptados.add(JSON.stringify(medicamentosDesencriptados));
      })
      let medicamentosArreglo=Array.from(medDesencriptados).map(medicamento => JSON.parse(medicamento));

  
console.log(medicamentosArreglo);
return medicamentosArreglo;
}

let cuidadorActivo= async()=>{
    const peticion= await fetch(localStorage.getItem("servidorAPI")+"paciente/cuidador/findCuidadorActivo/"+cedula,{
      method:"GET",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    });

    const cuidador=await peticion.json();
   document.getElementById("nombreCuidador").innerText=cuidador.cuidador.nombre;
    document.getElementById("dataTelefonoCuidador").innerText=cuidador.cuidador.telefono;
    document.getElementById("dataDireccionCuidador").innerText=cuidador.cuidador.direccion;
    document.getElementById("dataParentescoCuidador").innerText=cuidador.cuidador.parentesco.descripcion;
}

let alergias= async()=>{
    const peticion= await fetch(localStorage.getItem("servidorAPI")+"paciente/alergia/listByPaciente/"+cedula,{
      method:"GET",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    });

    const alergias=await peticion.json();
    console.log(alergias);
    let msgalergias="";
    
    alergias.forEach(alergia => {
        console.log(msgalergias)
        msgalergias=msgalergias+alergia.alergia.nombre+", "
    });
    msgalergias = msgalergias.substring(0, msgalergias.length - 2);
    
   document.getElementById("dataAlergia").innerText=msgalergias;
}

let listarVias= async()=>{
  const peticion= await fetch(localStorage.getItem("servidorAPI")+"paciente/medicamento/viaAdministracion",{
    method:"GET",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  });
  const selectVias = document.getElementById('selectVias');
  const vias=await peticion.json();
  const optionSeleccionar = document.createElement('option');
  optionSeleccionar.textContent = "Seleccione...";
  selectVias.appendChild(optionSeleccionar);
  vias.forEach(via=>{
    const option = document.createElement('option');
    option.value = via.idViaAdministracion;
    option.textContent = via.descripcion;
    selectVias.appendChild(option);
  })

  
}
let encontrarMedicamento=async()=>{
  const params = new URLSearchParams(window.location.search.slice(1));
  const idFormulaMedicamento = params.get('idFormulaMedicamento');
  console.log(idFormulaMedicamento);

  const peticion= await fetch(localStorage.getItem("servidorAPI")+"paciente/medicamento/findById/"+idFormulaMedicamento,{
    method:"GET",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  });

  

  const medicamento=await peticion.json();
  console.log(medicamento);

  let concentracionDesencriptada=CryptoJS.AES.decrypt(medicamento.concentracion, "clave_secreta").toString(CryptoJS.enc.Utf8);
  let descripcionDesencriptada=CryptoJS.AES.decrypt(medicamento.descripcion, "clave_secreta").toString(CryptoJS.enc.Utf8);
  let nombreDesencriptado=CryptoJS.AES.decrypt(medicamento.nombre, "clave_secreta").toString(CryptoJS.enc.Utf8);


  document.getElementById("idMedicamento").value=medicamento.idFormulaMedicamento;
  document.getElementById("medicamento").value=nombreDesencriptado;
  document.getElementById("descripcion").value=descripcionDesencriptada;
  document.getElementById("concentracion").value=concentracionDesencriptada;
  let fechaDefecto = new Date(medicamento.fechaIni);
  let fechaFormateada = fechaDefecto.toISOString().split('T')[0];
  document.getElementById("fecha_inicio").value=fechaFormateada;
  fechaDefecto = new Date(medicamento.fechaFin);
  fechaFormateada = fechaDefecto.toISOString().split('T')[0];
  document.getElementById("fecha_fin").value=fechaFormateada;
  document.getElementById("tomas").value=medicamento.tomas;
  document.getElementById("recetado").value=medicamento.recetado;
  console.log(medicamento.viaAdministracion.idViaAdministracion);
  const selectVias = document.getElementById("selectVias");
  selectVias.value = medicamento.viaAdministracion.idViaAdministracion;


}
//formulaMedicamento/actualizar/{id_formula_medicamento}
let actualizarMedicamento=async ()=> {
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);
      console.log(cedul);
      console.log(usuario);
      let cedEncriptada="";
      let cedulaEncriptada="";
      if(usuario=="medico"){
       cedEncriptada = await obtenerCedulasUsuarios(0, CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
      console.log(cedulaEncriptada);}
      else{
        cedEncriptada=cedul;
      }
  let idFormulaMedicamento=document.getElementById("idMedicamento").value
  console.log(idFormulaMedicamento);

  let concentracion=document.getElementById("concentracion").value;
  let descripcion=document.getElementById("descripcion").value;
  let nombre=document.getElementById("medicamento").value;

  let concentracionEncriptada=CryptoJS.AES.encrypt(concentracion, "clave_secreta").toString();
  let descripcionEncriptada=CryptoJS.AES.encrypt(descripcion, "clave_secreta").toString();
  let nombreEncriptado=CryptoJS.AES.encrypt(nombre, "clave_secreta").toString();
  let formulamedicamento={
      "concentracion": concentracionEncriptada,
      "descripcion": descripcionEncriptada,
      "fechaFin": document.getElementById("fecha_fin").value+"T00:00:00.001Z",
      "fechaIni": document.getElementById("fecha_inicio").value+"T00:00:00.001Z",
      "nombre": nombreEncriptado,
      "paciente": cedEncriptada,
      "tomas": document.getElementById("tomas").value,
      "via_Administracion": document.getElementById("selectVias").value,
      "recetado":document.getElementById("recetado").value
  }
  console.log(formulamedicamento)

  fetch(localStorage.getItem("servidorAPI")+"paciente/formulaMedicamento/actualizar/"+idFormulaMedicamento,{
    method:"PATCH",
    body: JSON.stringify(formulamedicamento),
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })
  
.then(response => {
  if (response.ok) {
    // La solicitud fue exitosa (código de estado 2xx)
    if (response.status === 200 || response.status === 204 ) {
      $('#successModal').modal('show');
    }
  } else {
    // La solicitud no fue exitosa (código de estado no 2xx)
    // Realiza acciones para manejar la respuesta no exitosa
  }
})
.catch(error => {
  console.error(error);
  // Mostrar mensaje de error en la consola o en la interfaz de usuario
})
}

let eliminarMedicamento=async (idMedicamento)=> {
  fetch(localStorage.getItem("servidorAPI")+"paciente/medicamento/eliminar/"+idMedicamento,{
    method:"DELETE",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })
   
.then(response => {
  console.log(response)
  if (response.ok) {
    // La solicitud fue exitosa (código de estado 2xx)
      $('#inhabilitarMedicamento'+idMedicamento).modal('hide');
      $('#modal2').modal('show');
  } else {
    // La solicitud no fue exitosa (código de estado no 2xx)
    // Realiza acciones para manejar la respuesta no exitosa
    $('#modal3').modal('show');
  }
})
.catch(error => {
  console.error(error);
  // Mostrar mensaje de error en la consola o en la interfaz de usuario
})
}

let crearMedicamento=async ()=> {
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);
      console.log(cedul);
      console.log(usuario);
      let cedEncriptada="";
      let cedulaEncriptada="";
      if(usuario=="medico"){
       cedEncriptada = await obtenerCedulasUsuarios(0, CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
      console.log(cedulaEncriptada);}
      else{
        cedEncriptada=cedul;
      }
  let concentracion=document.getElementById("concentracion").value;
  let descripcion=document.getElementById("descripcion").value;
  let nombre=document.getElementById("medicamento").value;
  const receta = document.querySelector('input[type="radio"][name="receta"]');
  let recetado=false;
  if(receta.checked){
   recetado=true;
  }
 
console.log(concentracion);
  let concentracionEncriptada=CryptoJS.AES.encrypt(concentracion,"clave_secreta").toString();
  let descripcionEncriptada=CryptoJS.AES.encrypt(descripcion,"clave_secreta").toString();
  let nombreEncriptado=CryptoJS.AES.encrypt(nombre,"clave_secreta").toString();
  
  let formulamedicamento={
      "concentracion": concentracionEncriptada,
      "descripcion": descripcionEncriptada,
      "fechaFin": document.getElementById("fecha_fin").value+"T00:00:00.001Z",
      "fechaIni": document.getElementById("fecha_inicio").value+"T00:00:00.001Z",
      "nombre": nombreEncriptado,
      "paciente": cedEncriptada,
      "tomas": document.getElementById("tomas").value,
      "via_Administracion": document.getElementById("selectVias").value,
      "recetado": recetado
  }
  console.log(formulamedicamento)
  fetch(localStorage.getItem("servidorAPI")+"paciente/Medicamento/crear/",{
    method:"POST",
    body: JSON.stringify(formulamedicamento),
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })
  .then(response => {
    console.log(response)
    if (response.ok) {
      // La solicitud fue exitosa (código de estado 2xx)
        $('#successModal').modal('show');
    } else {
      // La solicitud no fue exitosa (código de estado no 2xx)
      // Realiza acciones para manejar la respuesta no exitosa
      $('#errorModal').modal('show');
    }
  })
  .catch(error => {
    console.error(error);
    // Mostrar mensaje de error en la consola o en la interfaz de usuario
  })
}