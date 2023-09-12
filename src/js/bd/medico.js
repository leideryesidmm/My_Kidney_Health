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

        const medicosDesencriptados = medicos
        .filter(medico => medico.activo)
        .map(medico => {
          let cedulaDesencriptada = CryptoJS.AES.decrypt(medico.cedula, 'clave_secreta').toString(CryptoJS.enc.Utf8);
          let nombreDesencriptado = CryptoJS.AES.decrypt(medico.nombre, 'clave_secreta').toString(CryptoJS.enc.Utf8);

          return {
            nombre: nombreDesencriptado,
            cedula: cedulaDesencriptada
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
        aniosExperiencia:parseInt(aniosExperiencia)
  
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