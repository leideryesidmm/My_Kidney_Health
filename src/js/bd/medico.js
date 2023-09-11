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