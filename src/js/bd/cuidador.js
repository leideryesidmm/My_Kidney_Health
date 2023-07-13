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
          'Content-Type': 'application/json'
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



let listarParentesco= async()=>{
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
  })
}

let cuidadorActivo= async()=>{
  const peticion= await fetch(servidorAPI+"paciente/cuidador/findCuidadorActivo/"+cedula,{
    method:"GET",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  });

  const cuidador=await peticion.json();

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


  