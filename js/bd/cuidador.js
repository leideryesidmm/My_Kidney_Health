
var cedulaEncriptada= "";

let obtenerCedulaEncriptada=async(cedula)=>{
  await obtenerClave();
  await obtenerIv();
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  const peticion= await fetch(localStorage.getItem("servidorAPI")+'Medico/findAllPacientes',{
    method:'GET',
    headers:{
      "Accept":"application/json",
      "Content-Type": "application/json",
      "Authorization": dato.token
    }
    });
      const pacientes=await peticion.json();
      pacientes.forEach(paciente=>{
        let decryptedCedula = CryptoJS.AES.decrypt(paciente.cedula, cajaNegra).toString(CryptoJS.enc.Utf8);
        const cedulaCodificado = encodeURIComponent(decryptedCedula);
        if(cedula===cedulaCodificado)
        cedulaEncriptada=paciente.cedula;
        
      })   
      return cedulaEncriptada;
}


let crearCuidador = async () => {
  await obtenerClave();
  await obtenerIv();
  document.getElementById('agregarCuidador').addEventListener('submit', async function(event) {
    event.preventDefault();

    var botonActualizar = document.getElementById("guardarCuidador");
          botonActualizar.style.background = "gray";
          botonActualizar.disabled = true;
    let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let cedul= dato.cedula;
    let cuidadores = await cuidadorPorPaciente();
    var cedula_cuidador = document.getElementById('cedula_cuidador').value;
    var nombre = document.getElementById('nombre').value;
    var selectedOption = selectedParentesco.options[selectedParentesco.selectedIndex];
    var parentesco = selectedOption.value;
    var direccion = document.getElementById('direccion').value;
    var telefono = document.getElementById('telefono').value;

    if (cuidadores.includes(cedula_cuidador)) {
      var avisoMensaje = document.getElementById('avisoMensaje');
  avisoMensaje.innerText = 'El cuidador ya está registrado, si no está como su cuidador actual debe cambiarlo en el apartado de cuidador';

  $('#avisoModal').modal('show');
      
    } else {
      var encryptedCedulaC = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedula_cuidador)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      var encryptedNombre = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(nombre)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      var encryptedDireccion = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(direccion)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      var encryptedTelefono = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(telefono)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      let cuidador={
        
        cedulaCuidador: encryptedCedulaC,
        nombre: encryptedNombre,
        parentesco: parseInt(parentesco,10),
        direccion: encryptedDireccion,
        telefono: encryptedTelefono
      }
      let paciente={
        cedula:cedul
      }
      let unionCuidadorPacienteInDto={
        cuidadorInDto:cuidador,
        pacienteInDto:paciente
      }
      fetch(localStorage.getItem("servidorAPI") + 'paciente/cuidador/crear', {
        method: 'POST',
        headers: {
          "Accept":"application/json",
      "Content-Type":"application/json",
      "Authorization": dato.token
        },
        body: JSON.stringify(
          unionCuidadorPacienteInDto
        )
      })
      
      .then(response => {
        if(response.status===200){
          
          $("#successModal").modal("show");
        }
      })
      .catch(error => {
        console.error(error);
      });


    }
  });
}

let cuidadorPorPaciente=async()=>{
  await obtenerClave();
  await obtenerIv();
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let usuario = dato.usuario;
      let cedul= dato.cedula;

      let cedulaEncriptada="";
      if(usuario=="medico"){
       cedulaEncriptada = await obtenerCedulaEncriptada(0,CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
      }
      else{
        cedulaEncriptada=cedul;
      }
  const peticion= await fetch(localStorage.getItem("servidorAPI")+'paciente/cuidador/listCuidadorPacienteByPaciente',{
    method:'POST',
    headers:{
      "Accept":"application/json",
      "Content-Type": "application/json",
      "Authorization": dato.token
    },
    body:JSON.stringify({
      cedula:cedulaEncriptada
    })
      });
      
      const cuidadores=await peticion.json();
      let decryptedCedulas = [];
      cuidadores.forEach(cuidador=>{
        let decryptedCedula = decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cuidador.cedulaCuidador, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
        decryptedCedulas.push(decryptedCedula);
        
      })
      return decryptedCedulas;
    }


  let cuidadoresAntiguos = async () => {
  await obtenerClave();
  await obtenerIv();
      const cuidadoresDesencriptados = new Set();
      let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let usuario = dato.usuario;
      let cedul= dato.cedula;

      let cedulaEncriptada="";
      if(usuario=="medico"){
        cedulaEncriptada = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(localStorage.getItem("cedulaPaciente"))), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      }
      else{
        cedulaEncriptada=cedul;
      }
      const peticion= await fetch(localStorage.getItem("servidorAPI")+'paciente/cuidador/listCuidadorPacienteByPaciente',{
        method:'POST',
        headers:{
          "Accept":"application/json",
          "Content-Type": "application/json",
          "Authorization": dato.token
        },
        body:JSON.stringify({
          cedula:cedulaEncriptada
        })
          });
    
      if (peticion.status === 204) {
        return null;
      } else {
        const cuidadores = await peticion.json();
        const peticion2 = await fetch(localStorage.getItem("servidorAPI") + "paciente/cuidador/findCuidadorActivo", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": dato.token
          },
          body:JSON.stringify({
            cedula:cedulaEncriptada
          })
        });
    
        if (peticion2.status === 204) {
          cuidadores.forEach(cuidador => {
            var cedulaCuidador = decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cuidador.cedulaCuidador, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));

            var nombre = decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cuidador.nombre, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));

            var direccion = decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cuidador.direccion, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));

            var telefono = decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cuidador.telefono, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));

            var activo=cuidador.activo;
            const cuidadorDesencriptado = {
              cedulaCuidador: cedulaCuidador,
              nombre: nombre,
              direccion: direccion,
              telefono: telefono,
              activo: activo
            };
    
            cuidadoresDesencriptados.add(JSON.stringify(cuidadorDesencriptado));
          });
        } else {
          const cuidadorActivo = await peticion2.json();
    
          // Si hay un cuidador activo, desencripta su cédula y guárdala en una variable
          let cedCuidadorActivo = decodeURIComponent(CryptoJS.AES.decrypt(cuidadorActivo.cuidador.cedulaCuidador, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    
          cuidadores.forEach(cuidador => {
            let cedAntiguo = cuidador.cuidador.cedulaCuidador;
            // Compara la cédula del cuidador actual con la cédula del cuidador activo
            if (cedAntiguo !== cedCuidadorActivo) {
              // Si no son iguales, añade el cuidador a la lista de desencriptados
              let cedulaCuidador =  decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cuidador.cedulaCuidador, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));

              let nombre = decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cuidador.nombre, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));

              let direccion = decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cuidador.direccion, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));

              let telefono = decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cuidador.telefono, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));

              let activo = cuidador.activo;

              const cuidadorDesencriptado = {
                cedulaCuidador: cedulaCuidador,
                nombre: nombre,
                direccion: direccion,
                telefono: telefono,
                activo: activo
              };
    
              cuidadoresDesencriptados.add(JSON.stringify(cuidadorDesencriptado));
            }
          });
        }        
  
  const listaFiltrada = Array.from(cuidadoresDesencriptados).filter(filtrarLista);

        const CuidadoresDesencriptadosSinRepetir = Array.from(cuidadoresDesencriptados).map(cuidador => JSON.parse(cuidador));
        return CuidadoresDesencriptadosSinRepetir;
      }
    };

    function filtrarLista(objeto, index, self) {
      const primeraAparicionIndex = self.findIndex((obj) => obj.cedulaCuidador === objeto.cedulaCuidador);
  
      const cedulaCuidadorNoRepetida = index === primeraAparicionIndex;
  
      if (!cedulaCuidadorNoRepetida) {
          return objeto.activo; 
      }
  
      return objeto.activo;
  }

    let listaParentesco = async () => {
      let data = localStorage.getItem("datos");
      let dato=JSON.parse(data);
      const peticion = await fetch(localStorage.getItem("servidorAPI") + "paciente/ListParentesco", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": dato.token
        }
      });
      
      const selectParentesco = document.getElementById('selectedParentesco');
      
      
      if (selectParentesco.length === 0) {
        const parentescos = await peticion.json();
        const optionSeleccionar = document.createElement('option');
        optionSeleccionar.textContent = "Seleccione...";
        selectParentesco.appendChild(optionSeleccionar);
        parentescos.forEach(parentesco => {
          const option = document.createElement('option');
          option.value = parentesco.idParentesco;
          option.textContent = parentesco.descripcion;
          selectParentesco.appendChild(option);
        });
      }
    }
    

    let listarParentesco = async () => {
      let data = localStorage.getItem("datos");
      let dato=JSON.parse(data);
      const peticion = await fetch(localStorage.getItem("servidorAPI") + "paciente/ListParentesco", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": dato.token
        }
      });
      
      const selectParentesco = document.getElementById('selectedParentesco');
      
      
      if (selectParentesco.length === 0) {
        const parentescos = await peticion.json();
        const optionSeleccionar = document.createElement('option');
        optionSeleccionar.textContent = "Seleccione...";
        selectParentesco.appendChild(optionSeleccionar);
        parentescos.forEach(parentesco => {
          const option = document.createElement('option');
          option.value = parentesco.idParentesco;
          option.textContent = parentesco.descripcion;
          selectParentesco.appendChild(option);
        });
      }
      
      encontrarCuidador();
    }
    

let cuidadorActivo= async()=>{
  await obtenerClave();
  await obtenerIv();
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let usuario = dato.usuario;
      let cedul= dato.cedula;
  
      let cedulaEncriptada="";
      if(usuario=="medico"||usuario=="administrador"){
        cedulaEncriptada = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(localStorage.getItem("cedulaPaciente"))), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        }
      else{
        cedulaEncriptada=cedul;
      }
  const peticion = await fetch(localStorage.getItem("servidorAPI") + "paciente/cuidador/findCuidadorActivo", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": dato.token
    },
    body:JSON.stringify({
      cedula:cedulaEncriptada
    })
  });
  let cuidadorDesencriptado={}
  if(peticion.status===204){
    return null;
  }
    else{
    const cuidador=await peticion.json();
  var decryptedCedula = decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cuidador.cedulaCuidador, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  var decryptedNombre = decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cuidador.nombre, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  var decryptedDireccion = decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cuidador.direccion, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  var decryptedTelefono = decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cuidador.telefono, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  var parentesco=cuidador.cuidador.parentesco.descripcion;

  cuidadorDesencriptado.cedula=decryptedCedula;
  cuidadorDesencriptado.nombre=decryptedNombre;
  cuidadorDesencriptado.direccion=decryptedDireccion;
  cuidadorDesencriptado.telefono=decryptedTelefono;
  cuidadorDesencriptado.parentesco=parentesco;
  }
  return cuidadorDesencriptado;
}

    let encontrarCuidador = async () => {
      await obtenerClave();
  await obtenerIv();
      let data = localStorage.getItem("datos");
      let dato=JSON.parse(data);
          let usuario = dato.usuario;
          let cedul= dato.cedula;
    
          let cedulaEncriptada="";
          if(usuario=="medico"||usuario=="administrador"){
            cedulaEncriptada = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(localStorage.getItem("cedulaPaciente"))), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
            }
          else{
            cedulaEncriptada=cedul;
          }
      const peticion = await fetch(localStorage.getItem("servidorAPI") + "paciente/cuidador/findCuidadorActivo", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": dato.token
        },
        body:JSON.stringify({
          cedula:cedulaEncriptada
        })
      });
    
      const cuidador = await peticion.json();
    
      var decryptedCedula = decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cuidador.cedulaCuidador, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
      var decryptedNombre = decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cuidador.nombre, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
      var decryptedDireccion =  decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cuidador.direccion, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
      var decryptedTelefono = decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cuidador.telefono, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
      
      document.getElementById("cedulaCuidador").value = decryptedCedula;
      document.getElementById("name").value = decryptedNombre;
      document.getElementById("telf").value = decryptedTelefono;
      document.getElementById("address").value = decryptedDireccion;
    
      const selectParentesco = document.getElementById('selectedParentesco');
      const descripcionParentesco = cuidador.cuidador.parentesco.descripcion;
    
      
      Array.from(selectParentesco.options).forEach((option, index) => {
        if (option.textContent === descripcionParentesco) {
          selectParentesco.selectedIndex = index;
        }
      });
      return cuidador;
    }
    

let actualizarCuidador = async () => {
  await obtenerClave();
  await obtenerIv();
  var botonActualizar = document.getElementById("actCuid");
  botonActualizar.style.background = "gray";
  botonActualizar.disabled = true;
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let usuario = dato.usuario;
      let cedul= dato.cedula;

      let cedulaEncriptada="";
      if(usuario=="medico"||usuario=="administrador"){
        cedulaEncriptada = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(localStorage.getItem("cedulaPaciente"))), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        }
      else{
        cedulaEncriptada=cedul;
      }
      const peticion = await fetch(localStorage.getItem("servidorAPI") + "paciente/cuidador/findCuidadorActivo", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": dato.token
        },
        body:JSON.stringify({
          cedula:cedulaEncriptada
        })
      });
  let cuidadorDesencriptado={}

  const cuid = await peticion.json();
  const decryptedCedula = cuid.cuidador.cedulaCuidador;
  
  let direccion = document.getElementById("address").value;
  
  let nombre = document.getElementById("name").value;
  let parentesco = document.getElementById("selectedParentesco").value;
  let telefono = document.getElementById("telf").value;
 let cuidador = {
    direccion:  CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(direccion)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(),
    nombre: CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(nombre)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(),
    parentesco: parseInt(parentesco,10),
    telefono: CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(telefono)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(),
    cedulaCuidador: decryptedCedula
  };

  fetch(localStorage.getItem("servidorAPI") + "paciente/cuidador/actualizar", {
    method: "PATCH",
    body: JSON.stringify(cuidador),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": dato.token
    }
  })
    .then(response => {
      if (response.ok) {
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

let cuidAntiguos = async () => {
  await obtenerClave();
  await obtenerIv();
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let usuario = dato.usuario;
      let cedul= dato.cedula;

      let cedulaEncriptada="";
      if(usuario=="medico"){
        cedulaEncriptada = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(localStorage.getItem("cedulaPaciente"))), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      }
      else{
        cedulaEncriptada=cedul;
      }
  const peticion= await fetch(localStorage.getItem("servidorAPI")+'paciente/cuidador/listCuidadorPacienteByPaciente',{
    method:'POST',
    headers:{
      "Accept":"application/json",
      "Content-Type": "application/json",
      "Authorization": dato.token
    },
    body:JSON.stringify({
      cedula:cedulaEncriptada
    })
      });
if(peticion.status===204){
  return null;
}
else{
  const cuidadores = await peticion.json();
  const cuidAntSinRep= await cuidadoresAntiguos();
  const cuidadoresAnt = new Map();
  
if(cuidAntSinRep.length>0){
  cuidadores.forEach(cuidador => {
    if (cuidador.activo === false) {
      const cedulaCuidador = cuidador.cuidador.cedulaCuidador;
      const cuidadorAnt = {
        cedulaCuidador: cedulaCuidador,
        nombre: cuidador.cuidador.nombre,
        direccion: cuidador.cuidador.direccion,
        telefono: cuidador.cuidador.telefono,
        activo: cuidador.activo,
        idCuidadorPaciente: cuidador.idCuidadorPaciente
      };
      cuidadoresAnt.set(cedulaCuidador, cuidadorAnt);
    }
  });
}
else{
  return 0;
}
  return Array.from(cuidadoresAnt.values());
}
  
};

let reactivarCuidador = async (cedulaCuidador, cont) => {
  await obtenerClave();
  await obtenerIv();
  const btnreactivar=document.getElementById("reactivarCuidador"+cont);
  btnreactivar.style.filter= "grayscale(1)";
  btnreactivar.disabled = true;
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let usuario = dato.usuario;
      let cedul= dato.cedula;

      let cedulaEncriptada="";
      if(usuario=="medico"){
        cedulaEncriptada = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(localStorage.getItem("cedulaPaciente"))), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      }
      else{
        cedulaEncriptada=cedul;
      }
  let cuidadoresAntiguos = await cuidAntiguos();
  cuidadoresAntiguos.forEach((cuidadorAntiguo) => {
    let cedCuidador = decodeURIComponent(CryptoJS.AES.decrypt(cuidadorAntiguo.cedulaCuidador, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    let cedulaDesencriptada = parseInt(cedCuidador, 10);
    if (cedulaDesencriptada == cedulaCuidador) {
     
      let paciente={
        cedula:cedulaEncriptada
      }
    let cuidAntiguo={
      cedulaCuidador:cuidadorAntiguo.cedulaCuidador
    }

    let cuidadorPaciente={
      pacienteInDto:paciente,
      cuidadorInDto:cuidAntiguo
    }
      fetch(localStorage.getItem("servidorAPI") + "paciente/cuidador/reactivarCuidador", {
        method: "PATCH",
        body: JSON.stringify(
          cuidadorPaciente
        ),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": dato.token
        }
      })
        .then(response => {
          if (response.ok) {
            if (response.status === 200 || response.status === 204) {
              $('#successModalReactivar').modal('show');
            }
          } else {
            fetch(localStorage.getItem("servidorAPI") + "paciente/cuidador/ReactivarCuidadorAntiguoSinActivo", {
              method: "PATCH",
              body: JSON.stringify(
                cuidAntiguo
              ),
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": dato.token
              }
            })
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  });
}

let inhabilitarCuidador=async()=>{
  await obtenerClave();
  await obtenerIv();
  var botonActualizar = document.getElementById("inhabilitar");
            botonActualizar.style.background = "gray";
            botonActualizar.disabled = true;
            if(document.getElementById("cambiar")!=null){
            var botonCambiar = document.getElementById("cambiar");
            botonCambiar.style.background = "gray";
            botonCambiar.disabled = true;}
            var botonNuevo = document.getElementById("nuevo");
            botonNuevo.style.background = "gray";
            botonNuevo.disabled = true;
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let usuario = dato.usuario;
      let cedul= dato.cedula;

      let cedulaEncriptada="";
      if(usuario=="medico"){
        cedulaEncriptada = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(localStorage.getItem("cedulaPaciente"))), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();      console.log(cedulaEncriptada);}
      else{
        cedulaEncriptada=cedul;
      }
      const peticion = await fetch(localStorage.getItem("servidorAPI") + "paciente/cuidador/findCuidadorActivo", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": dato.token
        },
        body:JSON.stringify({
          cedula:cedulaEncriptada
        })
      });

  const cuidadorActivo = await peticion.json();
  let cedCuidador = decodeURIComponent(CryptoJS.AES.decrypt(cuidadorActivo.cuidador.cedulaCuidador, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  let cuidador={
    cedulaCuidador:cedCuidador,
    idCuidadorPaciente:cuidadorActivo.idCuidadorPaciente
  }
  let paciente={
    cedula:cedulaEncriptada
  }

  let cuidadorPaciente={
    cuidadorInDto:cuidador,
    pacienteInDto:paciente
  }
  await fetch(localStorage.getItem("servidorAPI") + "paciente/cuidador/inhabilitarCuidadorActivo",{
    method: "PATCH",
              body: JSON.stringify(
                cuidadorPaciente
              ),
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": dato.token
              }
  })
  .then(response => {
    if (response.ok) {
      if (response.status === 200 || response.status === 204) {
        $('#successModal').modal('show');
      }
    }
  })
}
