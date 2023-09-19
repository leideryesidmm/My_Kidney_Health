var cedulaEncriptada = "";
var contraseniaEncriptada;
let dat= localStorage.getItem("datos");

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

let listarMedicos = async () => {
  try {
    const peticion = await fetch(servidorAPI + 'Medico/findAll', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    if (peticion.ok) {
      if (peticion.status === 200 || peticion.status === 204) {
        const medicos = await peticion.json();
        console.log(medicos)

        const medicosDesencriptados = medicos
        .filter(medico => medico.activo)
        .map(medico => {
          console.log(medico)
          let cedulaDesencriptada = CryptoJS.AES.decrypt(medico.cedula, 'clave_secreta').toString(CryptoJS.enc.Utf8);
          let nombreDesencriptado = CryptoJS.AES.decrypt(medico.nombre, 'clave_secreta').toString(CryptoJS.enc.Utf8);
          let celularDesencriptado = CryptoJS.AES.decrypt(medico.celular, 'clave_secreta').toString(CryptoJS.enc.Utf8);
          let correoDesencriptado = CryptoJS.AES.decrypt(medico.correo, 'clave_secreta').toString(CryptoJS.enc.Utf8);
          

          return {
            nombre: nombreDesencriptado,
            cedula: cedulaDesencriptada,
            celular: celularDesencriptado,
            correo: correoDesencriptado,
            aniosExperiencia: medico.aniosExperiencia,
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
    const peticion = await fetch(servidorAPI + 'Medico/findAll', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    if (peticion.ok) {
      if (peticion.status === 200 || peticion.status === 204) {
        const medicosInactivos = await peticion.json();

        // Map the patients array to decrypt each patient's cedula and nombre
        const medicosDesencriptados = medicosInactivos
        .filter(medico => !medico.activo)
        .map(medico => {
          let cedulaDesencriptada = CryptoJS.AES.decrypt(medico.cedula, 'clave_secreta').toString(CryptoJS.enc.Utf8);
          let nombreDesencriptado = CryptoJS.AES.decrypt(medico.nombre, 'clave_secreta').toString(CryptoJS.enc.Utf8);

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
    const peticion = await fetch(localStorage.getItem("servidorAPI") + "Medico/findAllEspecialidad", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
    
    const selectEspecialidad = document.getElementById('selectEspecialidad');
    console.log(selectEspecialidad);
    const especialidades = await peticion.json();
      console.log(especialidades);
    
    if (selectEspecialidad.length === 0) {
      
      const optionSeleccionar = document.createElement('option');
      optionSeleccionar.textContent = "Seleccione..";
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
    let documento = document.getElementById('documento').value;
    console.log(documento);
  
    const peticion = await fetch(localStorage.getItem("servidorAPI") + 'Medico/findAll', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
  
    const medicos = await peticion.json();
   console.log(medicos);
  
    for (const medico of medicos) {
      let decryptedCedula = CryptoJS.AES.decrypt(medico.cedula, 'clave_secreta').toString(CryptoJS.enc.Utf8);
      const cedulaCodificado = decodeURIComponent(decryptedCedula);
      console.log(cedulaCodificado);
      console.log(decryptedCedula);
      if (documento === cedulaCodificado) {
        return true;
      }
    }
  
    return false;
  }

  let crearMedico=async(event)=> {
    event.preventDefault();
    var  existe= await validarMedico();
 
        var nombre = document.getElementById('nombre').value;
        var documento = document.getElementById('documento').value;
        const selectEspecialidad = document.getElementById('selectEspecialidad');
        var selectedOption = selectEspecialidad.options[selectEspecialidad.selectedIndex];
        var especialidad=selectedOption.value;
        var selectOptionDoc = selectTipo.options[selectTipo.selectedIndex];
        var tipoDocumento=selectOptionDoc.value;
        console.log(tipoDocumento);
        var aniosExperiencia = document.getElementById('aniosExperiencia').value;
        var correo= document.getElementById('correo').value;
        var telefono = document.getElementById('telefono').value;
       
       var  documentoEncriptado = CryptoJS.AES.encrypt(documento, 'clave_secreta').toString();
       var telefonoEncriptado = CryptoJS.AES.encrypt(telefono, 'clave_secreta').toString();
       var nombreEncriptado = CryptoJS.AES.encrypt(nombre, 'clave_secreta').toString();
       var correo = CryptoJS.AES.encrypt(correo, 'clave_secreta').toString();
       var  tipoDocumentoEncriptado = CryptoJS.AES.encrypt(tipoDocumento, 'clave_secreta').toString();
       
        const medicoInDto = {
  
        nombre : nombreEncriptado,
        tipo_documento:tipoDocumentoEncriptado,
        cedula : documentoEncriptado,
        celular : telefonoEncriptado,
        contrasenia:documentoEncriptado,
        correo:correo,
        especialidad:parseInt(especialidad),
        aniosExperiencia:parseInt(aniosExperiencia),
        activo:true
  
        }
        console.log(medicoInDto);
  
  if(existe==false){
        let decryptedCedula = CryptoJS.AES.decrypt(medicoInDto.nombre, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  console.log(decryptedCedula);
  let decryptedNombre = CryptoJS.AES.decrypt(medicoInDto.cedula, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  console.log(decryptedNombre);
  
        fetch(servidorAPI+"Usuario/crearMedico", {
          method: 'POST',
          headers: {
            "Accept":"application/json",
        "Content-Type":"application/json"
          },
          body: JSON.stringify(
            medicoInDto
          )
        })
        $("#successModal").modal("show");
   }
}
let inhabilitarMedico = async (ced) => {
  let cedula = ced.toString();
  let cedulaEncriptada = await obtenerCedulasUsuarios(0, cedula);
  console.log(cedulaEncriptada);
  try {
    const medicoInDto = { cedula: cedulaEncriptada };

    const response = await fetch(servidorAPI + 'Usuario/inhabilitarMedico', {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
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
  let cedulaEncriptada = await obtenerCedulasUsuarios(0, cedula);

  try {
    const medicoInDto = { cedula: cedulaEncriptada };

    const response = await fetch(servidorAPI + 'Usuario/reactivarMedico', {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
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
        let cedulaEncriptada="";
      
       cedulaEncriptada = await obtenerCedulasUsuarios(0,localStorage.getItem("cedulaMedico"));
      console.log(cedulaEncriptada);
      
      let medicoInDto={
        cedula:cedulaEncriptada
      }
  const peticion = await fetch(localStorage.getItem("servidorAPI") + "Usuario/findMedicoByCedula", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body:JSON.stringify(medicoInDto)
  });

  const medico = await peticion.json();
console.log(medico);
  
    var decryptedNombre = CryptoJS.AES.decrypt(medico.nombre, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  document.getElementById("nombre").value = decryptedNombre;

  var decryptedCedula = CryptoJS.AES.decrypt(medico.cedula, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  document.getElementById("documento").value = decryptedCedula;

  var telefono = CryptoJS.AES.decrypt(medico.celular, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  document.getElementById("telefono").value = telefono;
  document.getElementById("aniosExperiencia").value = medico.aniosExperiencia;
  


  const selectDocumento = document.getElementById('selectedDocumento');
  const descripcionDocumento= CryptoJS.AES.decrypt(medico.tipo_documento, 'clave_secreta').toString(CryptoJS.enc.Utf8);;
  console.log(descripcionDocumento);
  
  Array.from(selectDocumento.options).forEach((option, index) => {
    if (option.textContent === descripcionDocumento) {
      selectDocumento.selectedIndex = index;
    }
  })
  var correo = CryptoJS.AES.decrypt(medico.correo, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  document.getElementById("correo").value=correo;
 
}

function cancelar(){
  location.href="administrador.html";
}

let listaEspecialidad = async () => {
  const peticion = await fetch(localStorage.getItem("servidorAPI") + "Medico/findAllEspecialidad", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });

  const selectEspecialidad = document.getElementById('selectedEspecialidad');
  

  if (selectEspecialidad.length === 0) {
    const especialidades = await peticion.json();
    const optionSeleccionar = document.createElement('option');
    optionSeleccionar.textContent = "Seleccione";
    selectEspecialidad.appendChild(optionSeleccionar);
    especialidades.forEach(especialidad => {
      const option = document.createElement('option');
      option.value = especialidad.idEspecialidad;
      option.textContent = especialidad.descripcion;
      selectEspecialidad.appendChild(option);
      Array.from(selectEspecialidad.options).forEach((option, index) => {
        if (option.textContent === especialidad.descripcion) {
          selectEspecialidad.selectedIndex = index;
        }
      })
    });
    
  }
}

let actualizarMedico=async(event)=>{
event.preventDefault();
cedulaEncriptada = await obtenerCedulasUsuarios(0,localStorage.getItem("cedulaMedico"));
      console.log(cedulaEncriptada);
      
      let medicoInDto={
        cedula:cedulaEncriptada
      }
  const peticion = await fetch(localStorage.getItem("servidorAPI") + "Usuario/findMedicoByCedula", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body:JSON.stringify(medicoInDto)
  });

  const medico = await peticion.json();
  console.log(medico);
let selectDocumento=document.getElementById("selectedDocumento");

let selectedEspecialidad=document.getElementById("selectedEspecialidad");
  let nombre = document.getElementById("nombre").value;
  let telefono = document.getElementById("telefono").value;
  let correo=document.getElementById("correo").value;
  let selectTipoDocumento = selectDocumento.options[selectDocumento.selectedIndex];
  let tipo_documento = selectTipoDocumento.value;
  let selectEspecialidad = selectedEspecialidad.options[selectedEspecialidad.selectedIndex];
  let especialidad = parseInt(selectEspecialidad.value);
  let documento=medico.cedula;
  let aniosExperiencia=parseInt(document.getElementById("aniosExperiencia").value);
  let activo=medico.activo;
  let contrasenia=medico.contrasenia;
  let foto=medico.foto;
  let tipoUsuario=medico.tipoUsuario;

  let nombreEncriptado=CryptoJS.AES.encrypt(nombre,"clave_secreta").toString();
  let telefonoEncriptado=CryptoJS.AES.encrypt(telefono,"clave_secreta").toString();
  let correoEncriptado=CryptoJS.AES.encrypt(correo,"clave_secreta").toString();
  let tipo_documentoEncriptado=CryptoJS.AES.encrypt(tipo_documento,"clave_secreta").toString();


  medicoInDto={
    nombre:nombreEncriptado, celular:telefonoEncriptado, correo:correoEncriptado,tipo_documento:tipo_documentoEncriptado,especialidad:especialidad,
    cedula:documento, aniosExperiencia:aniosExperiencia, activo:activo, contrasenia:contrasenia,foto:foto,tipoUsuario:tipoUsuario
  }

  console.log(medicoInDto)

  fetch(localStorage.getItem("servidorAPI") + "Usuario/actualizarMedico", {
    method: "PATCH",
    body: JSON.stringify(medicoInDto),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
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


