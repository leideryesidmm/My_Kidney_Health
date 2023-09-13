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

let encontrarMedico = async () => {
  let data = localStorage.getItem("cedulaMedico");
  let dato=JSON.parse(data);
      let cedul= decodeURIComponent(dato.cedula);
      console.log(cedul);
      console.log(usuario);

      let cedulaEncriptada="";
      
       cedulaEncriptada = await obtenerCedulasUsuarios(0,CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaMedico")), "clave_secreta").toString(CryptoJS.enc.Utf8));
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
  let medicoActual={
    cedula:medico.cedula, especialidad:medico.especialidad, aniosExperiencia:medico.aniosExperiencia
  }
  console.log(medico);
    var decryptedNombre = CryptoJS.AES.decrypt(medico.nombre, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  document.getElementById("nombre").value = decryptedNombre;

  var decryptedCedula = CryptoJS.AES.decrypt(medico.cedula, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  document.getElementById("documento").value = decryptedCedula;

  var telefono = CryptoJS.AES.decrypt(medico.telefono, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  document.getElementById("telefono").value = telefono;
  var aniosExperiencia = CryptoJS.AES.decrypt(medico.aniosExperiencia, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  document.getElementById("aniosExperiencia").value = aniosExperiencia;
  


  const selectDocumento = document.getElementById('selectedDocumento');
  const descripcionDocumento= paciente.medico.descripcion;
  console.log(descripcionDocumento);
  
  Array.from(selectDocumento.options).forEach((option, index) => {
    if (option.textContent === descripcionDocumento) {
      selectDocumento.selectedIndex = index;
    }
  })
  var correo = CryptoJS.AES.decrypt(medico.correo, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  document.getElementById("correo").value=correo;
  return pacienteActual;
 
}
