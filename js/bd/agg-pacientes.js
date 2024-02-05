let listarEps = async () => {
  let data = localStorage.getItem("datos");
    let dato=JSON.parse(data);
  const peticion = await fetch(localStorage.getItem("servidorAPI") + "DatosMedicos/ListEps", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": dato.token
    }
  });

  const selectEps = document.getElementById('selectEps');

  if (selectEps.length === 0) {
    const epss = await peticion.json();
    const optionSeleccionar = document.createElement('option');
    optionSeleccionar.textContent = "Seleccione...";
    optionSeleccionar.selected=true;
    optionSeleccionar.disabled=true;
    selectEps.appendChild(optionSeleccionar);
    epss.forEach(eps => {
      const option = document.createElement('option');

      option.value = eps.idEps;
      option.textContent = eps.nombre;
      selectEps.appendChild(option);
    });
  }

}

let validarPaciente = async () => {
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  let documento = document.getElementById('documento').value;
  console.log(documento);
  let paciente={
    cedula:documento
  }
  
  const peticion = await fetch(servidorAPI + 'paciente/findPacienteByCedula/false', {
    method: 'POST',
    body:JSON.stringify(paciente),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": dato.token
    }
  });

  try {
    const pacienteBackend = await peticion.json();
    if(pacienteBackend!=null)
    return true;
  } catch (error) {
    return false;
  }

}


let crearPaciente=async(event)=> {
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  event.preventDefault();
  const btnGuardar=document.getElementById("guardarPaciente");
  btnGuardar.style.background="gray";
  btnGuardar.disabled=true;
  let  existe= await validarPaciente();
  console.log(existe);
      let nombre = document.getElementById('nombre').value;
      let documento = document.getElementById('documento').value;
      let fechaNacimiento = document.getElementById('fecha').value+'T02:45:05.101Z';
      let selectedOption = selectEps.options[selectEps.selectedIndex];
      let eps = selectedOption.value;
      let selectOptionDoc = selectTipo.options[selectTipo.selectedIndex];
      let tipoDocumento=selectOptionDoc.value;
      console.log(tipoDocumento);
      let estatura = document.getElementById('estatura').value;
      let tipoSangre = document.getElementById('tiposangre').value;
      let rh = document.getElementById('selectRh').value;
      let direccion = document.getElementById('direccion').value;
      let telefono = document.getElementById('telefono').value;
      let ocupacion = document.getElementById('ocupacion').value;
      let peso = document.getElementById('peso').value;
      let pesoSeco = document.getElementById('pesoseco').value;
      let correo= document.getElementById('correo').value;
     let  documentoEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(documento)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let  direccionEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(direccion)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let  ocupacionEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(ocupacion)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let  tipoSangreEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(tipoSangre)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let telefonoEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(telefono)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let nombreEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(nombre)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let correoEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(correo)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let  tipoDocumentoEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(tipoDocumento)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let diabetes = document.getElementById('diabetes').checked;
     let hipertension = document.getElementById('hipertension').checked;
     let estaturaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(estatura)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let pesoEncriptado=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(peso)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let pesoSecoEncriptado=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(pesoSeco)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let rhEncriptado=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(rh)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let fecha_registro = new Date();
//fecha_registro.setHours(fecha_registro.getHours() - 10);
      const pacienteInDto = {

       altura : estaturaEncriptada,
       cedula : documentoEncriptado,
       celular : telefonoEncriptado,
       contrasenia:documentoEncriptado,
       direccion : direccionEncriptado,
       eps : parseInt(eps,10),
       fechaNacimiento : fechaNacimiento,
       nombre : nombreEncriptado,
       ocupacion : ocupacionEncriptado,
       peso : pesoEncriptado,
       pesoSeco : pesoSecoEncriptado,   
       rh : rhEncriptado,
       tipoSangre : tipoSangreEncriptado,
       correo:correoEncriptado,
       diabetes:diabetes,
       hipertension:hipertension,
       tipoDocumento:tipoDocumentoEncriptado,
       activo:true,
       fechaRegistro:fecha_registro

      }

if(existe==false){
      let decryptedCedula = decodeURIComponent(CryptoJS.AES.decrypt(pacienteInDto.cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
console.log(decryptedCedula);
let decryptedNombre = decodeURIComponent(CryptoJS.AES.decrypt(pacienteInDto.nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));

      fetch(servidorAPI+"paciente/crearPaciente", {
        method: 'POST',
        headers: {
          "Accept":"application/json",
      "Content-Type":"application/json",
      "Authorization": dato.token
        },
        body: JSON.stringify(
          pacienteInDto
        )
      })
      .then(response => {
        if (response.ok) {
            $('#successModal').modal('show');
          }
      })
    }
      else{
        $('#modal3').modal('show');
      }
 }

let listarPacientes = async () => {
  try {
    let data = localStorage.getItem("datos");
    let dato=JSON.parse(data);
    const peticion = await fetch(servidorAPI + 'Medico/findAllPacientes', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": dato.token
      }
    });

    if (peticion.ok) {
      if (peticion.status === 200 || peticion.status === 204) {
        const pacientes = await peticion.json();
        console.log("he aqui los pacientes")
        console.log(pacientes);
        const pacientesDesencriptados = pacientes
        .filter(paciente => paciente.activo)
        .map(paciente => {
          let cedulaDesencriptada = decodeURIComponent(CryptoJS.AES.decrypt(paciente.cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
          let nombreDesencriptado = decodeURIComponent(CryptoJS.AES.decrypt(paciente.nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));

          return {
            nombre: nombreDesencriptado,
            cedula: cedulaDesencriptada
          };
        });

        return pacientesDesencriptados;
      }
    } else {
      console.error("Error fetching patients:", peticion.status);
    }
  } catch (error) {
    console.error("Error fetching patients:", error);
  }
};


let listarPacientesInactivos = async () => {
  try {
    let data = localStorage.getItem("datos");
    let dato=JSON.parse(data);
    const peticion = await fetch(servidorAPI + 'Medico/findAllPacientes', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": dato.token
      }
    });

    if (peticion.ok) {
      if (peticion.status === 200 || peticion.status === 204) {
        const pacientes = await peticion.json();

        // Map the patients array to decrypt each patient's cedula and nombre
        const pacientesDesencriptados = pacientes
        .filter(paciente => !paciente.activo)
        .map(paciente => {
          let cedulaDesencriptada = decodeURIComponent(CryptoJS.AES.decrypt(paciente.cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),
          {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
          let nombreDesencriptado = decodeURIComponent(CryptoJS.AES.decrypt(paciente.nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),
          {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));

          return {
            nombre: nombreDesencriptado,
            cedula: cedulaDesencriptada
          };
        });

        return pacientesDesencriptados; // Return the array of patients
      }
    } else {
      console.error("Error fetching patients:", peticion.status);
    }
  } catch (error) {
    console.error("Error fetching patients:", error);
  }
};



let ultimaCita = async (cedulaPaciente) => {
  try {
    let data = localStorage.getItem("datos");
    let dato=JSON.parse(data);
    cedulaPac = await obtenerCedEncriptada(cedulaPaciente);
    console.log(cedulaPac);
    
    let paciente = {
      cedula: cedulaPac
    };
    
    let peticion = await fetch(localStorage.getItem("servidorAPI") + 'paciente/ultimaCita', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": dato.token
      },
      body: JSON.stringify(paciente)
    });
    if(peticion.status === 200){
    let ultimaCita = await peticion.json();   
    return ultimaCita;
  }
  else{

  }
  } catch (error) {
    console.error("Error en encontrar Ultima Cita:", error);
    return null; 
  }
}; 
      
      

  
  
