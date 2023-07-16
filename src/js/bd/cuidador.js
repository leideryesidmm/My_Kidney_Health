let servidorAPI="http://localhost:8081/";
const cedula="1193098419";

let crearCuidador = async () => {
  document.getElementById('agregarCuidador').addEventListener('submit', async function(event) {
    event.preventDefault();
    let cuidadores = await cuidadorPorPaciente();
    console.log(cuidadores);

    var cedula_cuidador = document.getElementById('cedula_cuidador').value;
    var nombre = document.getElementById('nombre').value;
    var parentesc = document.getElementById('parentesco');
    var selectedOption = selectParentesco.options[selectParentesco.selectedIndex];
    var parentesco = selectedOption.value;
    var direccion = document.getElementById('direccion').value;
    var telefono = document.getElementById('telefono').value;
    console.log(cedula_cuidador, nombre, parentesco, direccion, telefono);

    if (cuidadores.includes(cedula_cuidador)) {
      var avisoMensaje = document.getElementById('avisoMensaje');
  avisoMensaje.innerText = 'El cuidador ya está registrado, si no está como su cuidador actual debe cambiarlo en el apartado de cuidador';

  $('#avisoModal').modal('show');
      
    } else {
      var encryptedCedula = CryptoJS.AES.encrypt(cedula, 'clave_secreta').toString();
      var encryptedCedulaC = CryptoJS.AES.encrypt(cedula_cuidador, 'clave_secreta').toString();
      var encryptedNombre = CryptoJS.AES.encrypt(nombre, 'clave_secreta').toString();
      var encryptedDireccion = CryptoJS.AES.encrypt(direccion, 'clave_secreta').toString();
      var encryptedTelefono = CryptoJS.AES.encrypt(telefono, 'clave_secreta').toString();

      fetch(servidorAPI + 'paciente/cuidador/crear/' + cedula, {
        method: 'POST',
        headers: {
          "Accept":"application/json",
      "Content-Type":"application/json"
        },
        body: JSON.stringify({
          cedula: encryptedCedula,
          cedulaCuidador: encryptedCedulaC,
          nombre: encryptedNombre,
          parentesco: parentesco,
          direccion: encryptedDireccion,
          telefono: encryptedTelefono
        })
      })
      .then(response => response.json())
      .then(data => {
        
      })
      .catch(error => {
        // Maneja el error de la petición
      });
      location.href = 'cuidador.html';

    }
  });
}

let cuidadorPorPaciente=async()=>{
  const peticion= await fetch(servidorAPI+'paciente/cuidador/listCuidadorPacienteByPaciente/'+cedula,{
    method:'GET',
    headers:{
      "Accept":"application/json",
      "Content-Type": "application/json"
    }
      });
      const cuidadores=await peticion.json();
      let decryptedCedulas = [];
      cuidadores.forEach(cuidador=>{
        let decryptedCedula = CryptoJS.AES.decrypt(cuidador.cuidador.cedulaCuidador, 'clave_secreta').toString(CryptoJS.enc.Utf8);
        decryptedCedulas.push(decryptedCedula);
        
      })
      return decryptedCedulas;
    }


    let cuidadoresAntiguos = async () => {
  const peticion = await fetch(servidorAPI + 'paciente/cuidador/listCuidadorPacienteByPaciente/' + cedula, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  const cuidadores = await peticion.json();
  const cuidadoresDesencriptados = [];

  cuidadores.forEach(cuidador => {
    
      let cedulaCuidador = CryptoJS.AES.decrypt(cuidador.cuidador.cedulaCuidador, 'clave_secreta').toString(CryptoJS.enc.Utf8);
      let nombre = CryptoJS.AES.decrypt(cuidador.cuidador.nombre, 'clave_secreta').toString(CryptoJS.enc.Utf8);
      let direccion = CryptoJS.AES.decrypt(cuidador.cuidador.direccion, 'clave_secreta').toString(CryptoJS.enc.Utf8);
      let telefono = CryptoJS.AES.decrypt(cuidador.cuidador.telefono, 'clave_secreta').toString(CryptoJS.enc.Utf8);
      let activo=cuidador.activo;

      const cuidadorDesencriptado = {
        cedulaCuidador: cedulaCuidador,
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        activo:activo
      };

      cuidadoresDesencriptados.push(cuidadorDesencriptado);
    
  });

  return cuidadoresDesencriptados;
};
    



let listaParentesco= async()=>{
  const peticion= await fetch(servidorAPI+"Prueba/ListParentesco",{
    
    method:"GET",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  });
  console.log(peticion);
  const selectParentesco = document.getElementById('selectParentesco');
  const parentescos=await peticion.json();
  const optionSeleccionar = document.createElement('option');
  optionSeleccionar.textContent = "Seleccione";
  selectParentesco.appendChild(optionSeleccionar);
  parentescos.forEach(parentesco=>{
    const option = document.createElement('option');
    option.value = parentesco.idParentesco;
    option.textContent = parentesco.descripcion;
    selectParentesco.appendChild(option);
  });

}

let listarParentesco = async () => {
  const peticion = await fetch(servidorAPI + "Prueba/ListParentesco", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });

  const selectParentesco = document.getElementById('selectedParentesco');
  
  // Verificar si el select ya tiene opciones
  if (selectParentesco.length === 0) {
    const parentescos = await peticion.json();
    const optionSeleccionar = document.createElement('option');
    optionSeleccionar.textContent = "Seleccione";
    selectParentesco.appendChild(optionSeleccionar);
    parentescos.forEach(parentesco => {
      const option = document.createElement('option');
      option.value = parentesco.idParentesco;
      option.textContent = parentesco.descripcion;
      selectParentesco.appendChild(option);
    });
  }

  // Llamar a encontrarCuidador después de verificar y agregar las opciones
  encontrarCuidador();
}

let cuidadorActivo= async()=>{
  const peticion= await fetch(servidorAPI+"paciente/cuidador/findCuidadorActivo/"+cedula,{
    method:"GET",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  });
  if (peticion!=null) {
    
    const cuidador=await peticion.json();
    if (cuidador !== null) {

  var decryptedCedula = CryptoJS.AES.decrypt(cuidador.cuidador.cedulaCuidador, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  var decryptedNombre = CryptoJS.AES.decrypt(cuidador.cuidador.nombre, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  var decryptedDireccion = CryptoJS.AES.decrypt(cuidador.cuidador.direccion, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  var decryptedTelefono = CryptoJS.AES.decrypt(cuidador.cuidador.telefono, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  
  document.getElementById("cedula_cuidador").innerText = decryptedCedula;
  document.getElementById("nombre").innerText = decryptedNombre;
  document.getElementById("telefono").innerText = decryptedTelefono;
  document.getElementById("direccion").innerText = decryptedDireccion;
  document.getElementById("parentesco").innerText = cuidador.cuidador.parentesco.descripcion;
}
else{
  document.getElementById("cedula_cuidador").innerText = "No hay registros";
  document.getElementById("nombre").innerText = "No hay registros";
  document.getElementById("telefono").innerText = "No hay registros";
  document.getElementById("direccion").innerText = "No hay registros";
  document.getElementById("parentesco").innerText = "No hay registros";
}
}
    }
  

    let encontrarCuidador = async () => {
      const peticion = await fetch(servidorAPI + "paciente/cuidador/findCuidadorActivo/" + cedula, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
    
      const cuidador = await peticion.json();
    
      var decryptedCedula = CryptoJS.AES.decrypt(cuidador.cuidador.cedulaCuidador, 'clave_secreta').toString(CryptoJS.enc.Utf8);
      var decryptedNombre = CryptoJS.AES.decrypt(cuidador.cuidador.nombre, 'clave_secreta').toString(CryptoJS.enc.Utf8);
      var decryptedDireccion = CryptoJS.AES.decrypt(cuidador.cuidador.direccion, 'clave_secreta').toString(CryptoJS.enc.Utf8);
      var decryptedTelefono = CryptoJS.AES.decrypt(cuidador.cuidador.telefono, 'clave_secreta').toString(CryptoJS.enc.Utf8);
    
      document.getElementById("cedulaCuidador").value = decryptedCedula;
      document.getElementById("name").value = decryptedNombre;
      document.getElementById("telf").value = decryptedTelefono;
      document.getElementById("address").value = decryptedDireccion;
    
      const selectParentesco = document.getElementById('selectedParentesco');
      const descripcionParentesco = cuidador.cuidador.parentesco.descripcion;
    
      // Establecer el valor del select en base al parentesco del cuidador
      Array.from(selectParentesco.options).forEach((option, index) => {
        if (option.textContent === descripcionParentesco) {
          selectParentesco.selectedIndex = index;
        }
      });
    }
    

/*let encontrarCuidador = async () => {
  const peticion = await fetch(servidorAPI + "paciente/cuidador/findCuidadorActivo/" + cedula, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });

  const cuidador = await peticion.json();

  var decryptedCedula = CryptoJS.AES.decrypt(cuidador.cuidador.cedulaCuidador, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  var decryptedNombre = CryptoJS.AES.decrypt(cuidador.cuidador.nombre, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  var decryptedDireccion = CryptoJS.AES.decrypt(cuidador.cuidador.direccion, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  var decryptedTelefono = CryptoJS.AES.decrypt(cuidador.cuidador.telefono, 'clave_secreta').toString(CryptoJS.enc.Utf8);

  document.getElementById("cedula_cuidador").value = decryptedCedula;
  document.getElementById("nombre").value = decryptedNombre;
  document.getElementById("telefono").value = decryptedTelefono;
  document.getElementById("direccion").value = decryptedDireccion;
  
  document.getElementById("selectParentesco").selectedIndex=cuidador.cuidador.parentesco.idParentesco;
}
  /*const selectParentesco = document.getElementById('selectParentesco');
  const valorParentesco = cuidador.cuidador.parentesco.idParentesco;

  // Verificar si ya existe una opción con el mismo valor antes de agregarla nuevamente
  const existingOption = selectParentesco.querySelector(`option[value="${valorParentesco}"]`);
  if (existingOption) {
    selectParentesco.removeChild(existingOption);
  }

  // Crear un nuevo elemento option con el parentesco obtenido y colocarlo como el primer hijo del select
  const option = document.createElement('option');
  option.value = valorParentesco;
  option.textContent = valorParentesco;
  selectParentesco.insertBefore(option, selectParentesco.firstChild);
}*/
  
/*
    var cedulaCuidador = document.getElementById('cedula_cuidador').value;
    var nombre = document.getElementById('nombre').value;
    var parentesco = document.getElementById('parentesco').value;
    var direccion = document.getElementById('direccion').value;
    var telefono = document.getElementById('telefono').value;

    var encryptedCedulaC = CryptoJS.AES.encrypt(cedulaCuidador, 'clave_secreta').toString();
    var encryptedNombre = CryptoJS.AES.encrypt(nombre, 'clave_secreta').toString();
    var encryptedDireccion = CryptoJS.AES.encrypt(direccion, 'clave_secreta').toString();
    var encryptedTelefono = CryptoJS.AES.encrypt(telefono, 'clave_secreta').toString();

    fetch(servidorAPI + 'paciente/cuidador/actualizar/' + cedula, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cedulaCuidador: encryptedCedulaC,
        nombre: encryptedNombre,
        parentesco: parentesco,
        direccion: encryptedDireccion,
        telefono: encryptedTelefono
      })
    })
    .then(response => response.json())
    .then(data => {
      // Manejar la respuesta de la API después de la edición
      console.log(data);
      // Redireccionar a la página de cuidador o realizar otras acciones necesarias
      location.href = 'cuidador.html';
    })
    .catch(error => {
      // Manejar el error de la petición
      console.error(error);
    });
  });
}
}
*/


  

let actualizarCuidador = async () => {

  const peticion = await fetch(servidorAPI + "paciente/cuidador/findCuidadorActivo/" + cedula, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });

  const cuid = await peticion.json();

  const decryptedCedula = cuid.cuidador.cedulaCuidador;
  
  console.log(decryptedCedula)
  const valorCodificado = encodeURIComponent(decryptedCedula);
  let cedulaCuidador=document.getElementById("cedulaCuidador").value;
  let direccion = document.getElementById("address").value;
  let nombre = document.getElementById("name").value;
  let parentesco = document.getElementById("selectedParentesco").value;
  let telefono = document.getElementById("telf").value;

  //cedula: decryptedCedula;
  let cuidador = {
    direccion: CryptoJS.AES.encrypt(direccion, 'clave_secreta').toString(),
    nombre: CryptoJS.AES.encrypt(nombre, 'clave_secreta').toString(),
    parentesco: parseInt(parentesco,10),
    
    telefono: CryptoJS.AES.encrypt(telefono, 'clave_secreta').toString()
  };
  console.log(cedulaCuidador)
  console.log(cuidador);
  console.log(servidorAPI + "paciente/cuidador/actualizar/" + valorCodificado);

  fetch(servidorAPI + "paciente/cuidador/actualizar/" + valorCodificado, {
    method: "PATCH",
    body: JSON.stringify(cuidador),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.ok) {
        console.log("ENTRO");
        if (response.status === 200 || response.status === 204) {
          $('#successModal').modal('show');
        }
      } else {
      }
    })
    .catch(error => {
      console.error(error);
    });
}

let reactivarCuidador=async()=>{

}