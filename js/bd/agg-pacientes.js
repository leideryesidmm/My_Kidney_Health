//Ya
let listarEps = async () => {
  const peticion = await fetch(localStorage.getItem("servidorAPI") + "DatosMedicos/ListEps", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
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
//ya
let validarPaciente = async () => {
  let documento = document.getElementById('documento').value;
  console.log(documento);
  let paciente={
    cedula:documento
  }

  const peticion = await fetch(servidorAPI + 'paciente/findPacienteByCedula', {
    method: 'POST',
    body:JSON.stringify(paciente),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
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

//ya
let crearPaciente=async(event)=> {
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
     let  documentoEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(documento), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let  direccionEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(direccion), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let  ocupacionEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(ocupacion), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let  tipoSangreEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(tipoSangre), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let telefonoEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(telefono), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let nombreEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(nombre), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let correoEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(correo), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let  tipoDocumentoEncriptado = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(tipoDocumento), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let diabetes = document.getElementById('diabetes').checked;
     let hipertension = document.getElementById('hipertension').checked;
     let estaturaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(estatura), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let pesoEncriptado=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(peso), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let pesoSecoEncriptado=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(pesoSeco), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
     let rhEncriptado=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(rh), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
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
      let decryptedCedula = CryptoJS.AES.decrypt(pacienteInDto.cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),
      {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
console.log(decryptedCedula);
let decryptedNombre = CryptoJS.AES.decrypt(pacienteInDto.nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),
{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
console.log(decryptedNombre);

      fetch(servidorAPI+"paciente/crearPaciente", {
        method: 'POST',
        headers: {
          "Accept":"application/json",
      "Content-Type":"application/json"
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
//ya
let listarPacientes = async () => {let pac;
  try {    
    const peticion = await fetch(servidorAPI + 'Medico/findAllPacientes', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    if (peticion.ok) {
      if (peticion.status === 200 || peticion.status === 204) {
        const pacientes = await peticion.json();

        const pacientesDesencriptados = pacientes
        .filter(paciente => paciente.activo)
        .map(paciente => {pac=paciente;
          let cedulaDesencriptada = CryptoJS.AES.decrypt(paciente.cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
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
    console.log(pac);
    console.error("Error fetching patients:", error);
  }
};

//ya
let listarPacientesInactivos = async () => {
  try {
    const peticion = await fetch(servidorAPI + 'Medico/findAllPacientes', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    if (peticion.ok) {
      if (peticion.status === 200 || peticion.status === 204) {
        const pacientes = await peticion.json();

        // Map the patients array to decrypt each patient's cedula and nombre
        const pacientesDesencriptados = pacientes
        .filter(paciente => !paciente.activo)
        .map(paciente => {
          pac=paciente;
          let cedulaDesencriptada = CryptoJS.AES.decrypt(paciente.cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),
          {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
          let nombreDesencriptado = CryptoJS.AES.decrypt(paciente.nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),
          {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);

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

//aún no
let crearVisita = async (cedulaPaciente) => {
           
  console.log(cedulaPaciente);
  let ultCita=await ultimaCita(cedulaPaciente)
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

//aún no
let encriptarDatosChequeo=(chequeo)=>{
  let colesterolTotal=CryptoJS.AES.encrypt(chequeo.colesterolTotal, cajaNegra).toString();
  let fosforo=CryptoJS.AES.encrypt(chequeo.fosforo, cajaNegra).toString();
  let glicemia=CryptoJS.AES.encrypt(chequeo.glicemia, cajaNegra).toString();
  let hdl=CryptoJS.AES.encrypt(chequeo.hdl, cajaNegra).toString();
  let hemoglobina=CryptoJS.AES.encrypt(chequeo.hemoglobina, cajaNegra).toString();
  let ldh=CryptoJS.AES.encrypt(chequeo.ldh, cajaNegra).toString();
  let nitrogenoUreico=CryptoJS.AES.encrypt(chequeo.nitrogenoUreico, cajaNegra).toString();
  let potasio=CryptoJS.AES.encrypt(chequeo.potasio, cajaNegra).toString();
  let tensionArterial=CryptoJS.AES.encrypt(chequeo.tensionArterial, cajaNegra).toString();
  let trigliceridos=CryptoJS.AES.encrypt(chequeo.trigliceridos, cajaNegra).toString();
  let peso=CryptoJS.AES.encrypt(chequeo.peso, cajaNegra).toString();
  let pesoSeco=CryptoJS.AES.encrypt(chequeo.pesoSeco, cajaNegra).toString();
  let glucosa=CryptoJS.AES.encrypt(chequeo.glucosa, cajaNegra).toString();
  let creatinina=CryptoJS.AES.encrypt(chequeo.creatinina, cajaNegra).toString();
  let ktv=CryptoJS.AES.encrypt(chequeo.ktv, cajaNegra).toString();
  let cita=chequeo.cita;

  let chequeoMensualInDto={
    colesterolTotal:colesterolTotal, fosforo:fosforo, glicemia:glicemia, hdl:hdl, hemoglobina:hemoglobina, ldh:ldh, nitrogenoUreico:nitrogenoUreico, potasio:potasio, tensionArterial:tensionArterial, trigliceridos:trigliceridos, peso:peso, pesoSeco:
    pesoSeco, glucosa:glucosa, creatinina, creatinina, ktv:ktv, cita:cita
  }
  return chequeoMensualInDto;
}

//aún no
let crearChequeoMensual = async (cedulaPaciente) => {

  let ultCita=await ultimaCita(cedulaPaciente)
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

//aún no
let ultimaCita = async (cedulaPaciente) => {
  try {
    cedulaPac = await obtenerCedEncriptada(cedulaPaciente);
    console.log(cedulaPac);
    
    let paciente = {
      cedula: cedulaPac
    };
    
    let peticion = await fetch(localStorage.getItem("servidorAPI") + 'paciente/ultimaCita', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
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
      
      

  
  
