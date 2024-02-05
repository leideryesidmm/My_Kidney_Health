var cedulaEncriptada = "";
var contraseniaEncriptada;

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
  let data = localStorage.getItem("datos");
    let dato=JSON.parse(data);
  let peticion=await fetch(localStorage.getItem("servidorAPI")+"Usuario/cedula", {
    method:"POST",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json",
      "Authorization": dato.token
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
      "Content-Type":"application/json",
      "Authorization": dato.token
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

let listarMedicos = async () => {
  try {
    let data = localStorage.getItem("datos");
    let dato=JSON.parse(data);
    const peticion = await fetch(servidorAPI + 'Medico/findAll', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": dato.token
      }
    });

    if (peticion.ok) {
      if (peticion.status === 200) {
        const medicos = await peticion.json();
        console.log(medicos)

        const medicosDesencriptados = medicos.filter(medico => medico.activo).map(medico => {
          console.log(medico)
          let cedulaDesencriptada = decodeURIComponent(CryptoJS.AES.decrypt(medico.cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),
            {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
          let nombreDesencriptado = decodeURIComponent(CryptoJS.AES.decrypt(medico.nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),
            {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
          let celularDesencriptado = decodeURIComponent(CryptoJS.AES.decrypt(medico.celular,CryptoJS.enc.Utf8.parse(cajaNegra2),
            {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
          let correoDesencriptado = decodeURIComponent(CryptoJS.AES.decrypt(medico.correo,CryptoJS.enc.Utf8.parse(cajaNegra2),
            {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
          let profesionDesencriptada=decodeURIComponent(CryptoJS.AES.decrypt(medico.profesion,CryptoJS.enc.Utf8.parse(cajaNegra2),
            {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
          

          return {
            nombre: nombreDesencriptado,
            cedula: cedulaDesencriptada,
            celular: celularDesencriptado,
            correo: correoDesencriptado,
            profesion: profesionDesencriptada,
            especialidad: medico.especialidad.descripcion
          };
        });

        return medicosDesencriptados;
      }
    } else {
      console.error("Error fetching doctors:", peticion.status);
    }
  } catch (error) {
    console.error("Error fetching doctors:", error);
  }
};


let listarMedicosInactivos = async () => {
  try {
    let data = localStorage.getItem("datos");
    let dato=JSON.parse(data);
    const peticion = await fetch(servidorAPI + 'Medico/findAll', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": dato.token
      }
    });

    if (peticion.ok) {
      if (peticion.status === 200) {
        const medicosInactivos = await peticion.json();

        // Map the patients array to decrypt each patient's cedula and nombre
        const medicosDesencriptados = medicosInactivos
        .filter(medico => !medico.activo)
        .map(medico => {
          let cedulaDesencriptada = decodeURIComponent(CryptoJS.AES.decrypt(medico.cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),
          {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
          let nombreDesencriptado = decodeURIComponent(CryptoJS.AES.decrypt(medico.nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),
          {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));

          return {
            nombre: nombreDesencriptado,
            cedula: cedulaDesencriptada
          };
        });

        return medicosDesencriptados; // Return the array of patients
      }
    } else {
      console.error("Error fetching doctors:", peticion.status);
    }
  } catch (error) {
    console.error("Error fetching doctors:", error);
  }
};

let listarEspecialidad = async () => {
  let data = localStorage.getItem("datos");
    let dato=JSON.parse(data);
  const peticion = await fetch(localStorage.getItem("servidorAPI") + "Medico/findAllEspecialidad", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": dato.token
    }
  });
  
  const selectEspecialidad = document.getElementById('selectedEspecialidad');
  console.log(selectEspecialidad);
  const especialidades = await peticion.json();
    console.log(especialidades);
  
  if (selectEspecialidad.length === 0) {
    
    const optionSeleccionar = document.createElement('option');
    optionSeleccionar.textContent = "Seleccione...";
    selectEspecialidad.appendChild(optionSeleccionar);
    especialidades.forEach(especialidad => {
      const option = document.createElement('option');
      option.value = especialidad.idEspecialidad;
      option.textContent = especialidad.descripcion;
      selectEspecialidad.appendChild(option);
    });
  }
}

  let validarMedico = async () => {
    let cedulaMedico = document.getElementById('documento').value;
    console.log(cedulaMedico);
    let data = localStorage.getItem("datos");
    let dato=JSON.parse(data);
    let  cedula = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedulaMedico)),CryptoJS.enc.Utf8.parse(cajaNegra2),
    {iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
    console.log(cedula);
    const peticion = await fetch(localStorage.getItem("servidorAPI") + 'Medico/findByCedula/'+cedula, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": dato.token
      },
      body: JSON.stringify(
        {cedula:cedula}
      )
    });
    try {
  const medico = await peticion.json();
  if(medico!=null)
  return true;
} catch (error) {
  return false;
}
  }

  let crearMedico=async(event)=> {
    event.preventDefault();
    const  btnMedico=document.getElementById("guardarMedico");
    btnMedico.style.background="gray";
    btnMedico.disabled="true";
    var  existe= await validarMedico();
    if(existe){
      $("#errorModal").modal("show");
      btnMedico.style.background="#00FBFF";
      btnMedico.disabled="false";
    }
    else{
        var nombre = document.getElementById('nombre').value;
        var documento = document.getElementById('documento').value;
        const selectEspecialidad = document.getElementById('selectEspecialidad');
        var selectedOption = selectEspecialidad.options[selectEspecialidad.selectedIndex];
        var especialidad=selectedOption.value;
        var selectOptionDoc = selectTipo.options[selectTipo.selectedIndex];
        var tipoDocumento=selectOptionDoc.value;
        var correo= document.getElementById('correo').value;
        var telefono = document.getElementById('telefono').value;
        const selectProfesion = document.getElementById('selectProfesion');
        var selectedOption = selectProfesion.options[selectProfesion.selectedIndex];
        var profesion=selectedOption.value;
        var profesionEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(profesion)),CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
       var  documentoEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(documento)),CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
       var telefonoEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(telefono)),CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
       var nombreEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(nombre)),CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
       var correo = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(correo)),CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
       var  tipoDocumentoEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(tipoDocumento)),CryptoJS.enc.Utf8.parse(cajaNegra2),
       {iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
       
        const medicoInDto = {
  
        nombre : nombreEncriptado,
        tipoDocumento:tipoDocumentoEncriptado,
        cedula : documentoEncriptado,
        celular : telefonoEncriptado,
        contrasenia:documentoEncriptado,
        correo:correo,
        profesion:profesionEncriptada,
        especialidad:parseInt(especialidad),
        activo:true
  
        }
        console.log(medicoInDto);
  
        let data = localStorage.getItem("datos");
        let dato=JSON.parse(data);
  
        let peticion=fetch(servidorAPI+"Usuario/crearMedico", {
          method: 'POST',
          headers: {
            "Accept":"application/json",
        "Content-Type":"application/json",
        "Authorization": dato.token
          },
          body: JSON.stringify(
            medicoInDto
          )
        })
        if((await peticion).ok)
        $("#successModal").modal("show");
   }
}
let inhabilitarMedico = async (ced) => {
  let cedula = ced.toString();
     let cedulaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedula)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  console.log(cedulaEncriptada);
  try {
    const medicoInDto = { cedula: cedulaEncriptada };
    let data = localStorage.getItem("datos");
    let dato=JSON.parse(data);
    const response = await fetch(servidorAPI + 'Usuario/inhabilitarMedico', {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": dato.token
      },
      body: JSON.stringify(medicoInDto)
    });

    if (response.ok) {
      $('#inhabilitarmedico').modal('hide');
      location.reload();
    }
    else {
      console.error("Error al inhabilitar médico:", response.status);
    }
  }
  catch (error) {
    console.error("Error al inhabilitar médico:", error);
  }
};


let habilitarMedico = async (ced) => {
  let cedula = ced.toString();
    let cedulaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedula)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      
  try {
    const medicoInDto = { cedula: cedulaEncriptada };
    let data = localStorage.getItem("datos");
    let dato=JSON.parse(data);
    const response = await fetch(servidorAPI + 'Usuario/reactivarMedico', {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": dato.token
      },
      body: JSON.stringify(medicoInDto)
    });

    if (response.ok) {
      location.reload();
    }
    else {
      console.error("Error al habilitar médico:", response.status);
    }
  }
  catch (error) {
    console.error("Error al habilitar médico:", error);
  }
};

let encontrarMedico = async () => {
        let cedula=localStorage.getItem("cedulaMedico");
     let cedulaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedula)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      let medicoInDto={
        cedula:cedulaEncriptada
      }
      let data = localStorage.getItem("datos");
    let dato=JSON.parse(data);
  const peticion = await fetch(localStorage.getItem("servidorAPI") + "Usuario/findMedicoByCedula/false", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": dato.token
    },
    body:JSON.stringify(medicoInDto)
  });

  const medico = await peticion.json();
  console.log("medico del backend");
  console.log(medico);

  
    var decryptedNombre = decodeURIComponent(CryptoJS.AES.decrypt(medico.nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),
    {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  document.getElementById("nombre").value = decryptedNombre;

  var decryptedCedula = decodeURIComponent(CryptoJS.AES.decrypt(medico.cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),
    {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  document.getElementById("documento").value = decryptedCedula;

  var telefono = decodeURIComponent(CryptoJS.AES.decrypt(medico.celular,CryptoJS.enc.Utf8.parse(cajaNegra2),
    {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  document.getElementById("telefono").value = telefono;
  


  const selectDocumento = document.getElementById('selectedDocumento');
  const descripcionDocumento= decodeURIComponent(CryptoJS.AES.decrypt(medico.tipoDocumento,CryptoJS.enc.Utf8.parse(cajaNegra2),
    {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  console.log(descripcionDocumento);
  
  Array.from(selectDocumento.options).forEach((option, index) => {
    if (option.textContent === descripcionDocumento) {
      selectDocumento.selectedIndex = index;
    }
  })
  
  const selectEspecialidad = document.getElementById('selectedEspecialidad');
  console.log(medico.especialidad.descripcion);

  especialidad=medico.especialidad.descripcion;
  console.log(selectEspecialidad.options);
  console.log("especialidad 1");
    console.log(Array.from(selectEspecialidad.options));

  Array.from(selectEspecialidad.options).forEach((option, index) => {
    console.log("especialidad");
    console.log(especialidad);
    console.log("option text");
    console.log(option.text);
    if (option.text === especialidad) {
      console.log("entro al if de especialidad");
      selectEspecialidad.selectedIndex = index;
    }
  })

  const selectProfesion = document.getElementById('selectedProfesion');
  const profesion= decodeURIComponent(CryptoJS.AES.decrypt(
    medico.profesion,
    CryptoJS.enc.Utf8.parse(cajaNegra2),
    {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }
).toString(CryptoJS.enc.Utf8));
  
console.log(Array.from(selectProfesion.options));
  Array.from(selectProfesion.options).forEach((option, index) => {
    if (option.textContent === profesion) {
      selectProfesion.selectedIndex = index;
    }
  })

  var correo = decodeURIComponent(CryptoJS.AES.decrypt(medico.correo,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  document.getElementById("correo").value=correo;
 
}

function cancelar(){
  location.href="administrador.html";
}

let restaurarContrasenia=async(ced, cont)=>{
  let cedula = ced.toString();
 let cedulaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedula)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  try {
    const usuarioInDto = { cedula: cedulaEncriptada };
    let data = localStorage.getItem("datos");
    let dato=JSON.parse(data);
    const response = await fetch(servidorAPI + 'Usuario/restaurarContrasenia', {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": dato.token
      },
      body: JSON.stringify(usuarioInDto)
    });
   if(response.ok){
      $('#restaurarContrasenia'+cont).modal('hide');
      $('#restaurarContraseniaPaciente').modal('show');
   }
}
catch (error) {
  console.error("Error al restaurar contraseña:", error);
}
}

let actualizarMedico = async(event) => {
  event.preventDefault();
  let cedula=localStorage.getItem("cedulaMedico");
     let cedulaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedula)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  
  let medicoInDto = {
    cedula: cedulaEncriptada
  }
  let data = localStorage.getItem("datos");
    let dato=JSON.parse(data);
  const peticion = await fetch(localStorage.getItem("servidorAPI") + "Usuario/findMedicoByCedula/false", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": dato.token
    },
    body: JSON.stringify(medicoInDto)
  });

  const medico = await peticion.json();
  console.log("medico de findMedico");
  console.log(medico);
  let selectDocumento = document.getElementById("selectedDocumento");
  let selectEspecialidad = document.getElementById("selectedEspecialidad"); 
  let selectProfesion = document.getElementById("selectedProfesion");
  let nombre = document.getElementById("nombre").value;
  let telefono = document.getElementById("telefono").value;
  let correo = document.getElementById("correo").value;
  
  let selectTipoDocumento = selectDocumento.options[selectDocumento.selectedIndex];
  let tipo_documento = selectTipoDocumento.value;

  let selectedOptionProfesion = selectProfesion.options[selectProfesion.selectedIndex]; 
  let profesion = selectedOptionProfesion.value;
  var selectedOption = selectEspecialidad.options[selectEspecialidad.selectedIndex];
        var especialidadSeleccionada=selectedOption.value;
        switch(especialidadSeleccionada){
          case "Nefrólogo":
            especialidad=1;
            break;
          case "Médico general":
            especialidad=2;
            break;
          case "Enfermera de diálisis":
            especialidad=3;
            break;
          case "Otro":
            especialidad=4;
            break;
          default:
            especialidad=0;
            break;
        }
  
  let documento = medico.cedula;
  let activo = medico.activo;
  let contrasenia = medico.contrasenia;

  
  let profesionEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(profesion)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let telefonoEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(telefono)),CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let nombreEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(nombre)),CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let correoEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(correo)),CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  let  tipo_documentoEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(tipo_documento)),CryptoJS.enc.Utf8.parse(cajaNegra2),
  {iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  medicoInDto={
    nombre:nombreEncriptado, 
    cedula:documento,
    celular:telefonoEncriptado, 
    contrasenia:contrasenia,
    correo:correoEncriptado,
    tipoDocumento:tipo_documentoEncriptado,
    especialidad:parseInt(especialidad),
     profesion:profesionEncriptada, 
     activo:activo
  }

  console.log(medicoInDto)

  fetch(localStorage.getItem("servidorAPI") + "Usuario/actualizarMedico", {
    method: "PATCH",
    body: JSON.stringify(medicoInDto),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": dato.token
    }
  })
    .then(response => {
      console.log(response)
      if (response.ok) {
        if (response.status === 200 || response.status === 204) {
          $('#successModal').modal('show');
        }
      } else {
        $('#errorModal').modal('show');
      }
    })
    .catch(error => {
      console.error(error);
    });
}


