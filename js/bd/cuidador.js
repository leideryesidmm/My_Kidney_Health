
var cedulaEncriptada= "";

let obtenerCedulaEncriptada=async(cedula)=>{
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
      console.log(pacientes);
      pacientes.forEach(paciente=>{
        let decryptedCedula = CryptoJS.AES.decrypt(paciente.cedula, cajaNegra).toString(CryptoJS.enc.Utf8);
        const cedulaCodificado = encodeURIComponent(decryptedCedula);
        console.log(decryptedCedula);
        if(cedula===cedulaCodificado)
        cedulaEncriptada=paciente.cedula;
        
      })   
      return cedulaEncriptada;
}


let crearCuidador = async () => {
  document.getElementById('agregarCuidador').addEventListener('submit', async function(event) {
    event.preventDefault();

    var botonActualizar = document.getElementById("guardarCuidador");
          botonActualizar.style.background = "gray";
          botonActualizar.disabled = true;
    let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let cedul= dato.cedula;
    let cuidadores = await cuidadorPorPaciente();
    console.log(cuidadores);
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
      console.log(cuidador);
      console.log(paciente);
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
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let usuario = dato.usuario;
      let cedul= dato.cedula;
      console.log(cedul);
      console.log(usuario);

      let cedulaEncriptada="";
      if(usuario=="medico"){
       cedulaEncriptada = await obtenerCedulaEncriptada(0,CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
      console.log(cedulaEncriptada);}
      else{
        cedulaEncriptada=cedul;
      }
  console.log(cedulaEncriptada);
  const peticion= await fetch(localStorage.getItem("servidorAPI")+'/paciente/cuidador/listCuidadorPacienteByPaciente',{
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
      console.log(cuidadores);
      let decryptedCedulas = [];
      cuidadores.forEach(cuidador=>{
        let decryptedCedula = decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cuidador.cedulaCuidador, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
        decryptedCedulas.push(decryptedCedula);
        
      })
      return decryptedCedulas;
    }

    /*let cuidadorPorPaciente=async()=>{
      let data = localStorage.getItem("datos");
      let dato=JSON.parse(data);
      console.log(data);
          let usuario = dato.usuario;
          let cedul= dato.cedula;
          console.log(cedul);
          console.log(usuario);
    
          let cedulaEncriptada="";
          if(usuario=="medico"){
           cedulaEncriptada = await obtenerCedulaEncriptada(0,CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
          console.log(cedulaEncriptada);}
          else{
            cedulaEncriptada=cedul;
          }
      console.log(cedulaEncriptada);
      const peticion= await fetch(localStorage.getItem("servidorAPI")+'/paciente/cuidador/listCuidadorPacienteByPaciente',{
        method:'POST',
        headers:{
          "Accept":"application/json",
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          cedula:cedulaEncriptada
        })
          });
          
          const cuidadores=await peticion.json();
          console.log(cuidadores);
          let decryptedCedulas = [];
          cuidadores.forEach(cuidador=>{
            let decryptedCedula = CryptoJS.AES.decrypt(cuidador.cuidador.cedulaCuidador, cajaNegra).toString(CryptoJS.enc.Utf8);
            decryptedCedulas.push(decryptedCedula);
            
          })
          return decryptedCedulas;
        }*/


    let cuidadoresAntiguos = async () => {
      const cuidadoresDesencriptados = new Set();
      let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let usuario = dato.usuario;
      let cedul= dato.cedula;
      console.log(cedul);
      console.log(usuario);

      let cedulaEncriptada="";
      if(usuario=="medico"){
        cedulaEncriptada = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(localStorage.getItem("cedulaPaciente"))), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      console.log(cedulaEncriptada);}
      else{
        cedulaEncriptada=cedul;
      }
      const peticion= await fetch(localStorage.getItem("servidorAPI")+'/paciente/cuidador/listCuidadorPacienteByPaciente',{
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
    console.log(cuidadores)
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
            console.log("esta:" + activo)
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
            console.log(cuidador);
            // Compara la cédula del cuidador actual con la cédula del cuidador activo
            if (cedAntiguo !== cedCuidadorActivo) {
              // Si no son iguales, añade el cuidador a la lista de desencriptados
              let cedulaCuidador =  decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cuidador.cedulaCuidador, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));

              let nombre = decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cuidador.nombre, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));

              let direccion = decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cuidador.direccion, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));

              let telefono = decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cuidador.telefono, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));

              let activo = cuidador.activo;
              console.log("esta:" + activo)

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
  
  // Aplicar el filtro a la lista
  const listaFiltrada = Array.from(cuidadoresDesencriptados).filter(filtrarLista);

  // Mostrar el resultado
  console.log(listaFiltrada);
        const CuidadoresDesencriptadosSinRepetir = Array.from(cuidadoresDesencriptados).map(cuidador => JSON.parse(cuidador));
        console.log(CuidadoresDesencriptadosSinRepetir)
        return CuidadoresDesencriptadosSinRepetir;
      }
    };

    function filtrarLista(objeto, index, self) {
      // Buscar el índice de la primera aparición del objeto con la misma cedulaCuidador
      const primeraAparicionIndex = self.findIndex((obj) => obj.cedulaCuidador === objeto.cedulaCuidador);
  
      // Verificar si la cedulaCuidador no está repetida
      const cedulaCuidadorNoRepetida = index === primeraAparicionIndex;
  
      // Si la cedulaCuidador está repetida, comparar el activo para seleccionar el objeto correcto
      if (!cedulaCuidadorNoRepetida) {
          return objeto.activo; // Solo mantener el objeto si activo es true
      }
  
      // Si la cedulaCuidador no está repetida, mantener el objeto si activo es true
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
  console.log("SI ENTRO A CUIDADORACTIVO")
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log("AES");
      let usuario = dato.usuario;
      let cedul= dato.cedula;
      console.log(cedul);
      console.log(usuario);
  
      let cedulaEncriptada="";
      if(usuario=="medico"||usuario=="administrador"){
        cedulaEncriptada = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(localStorage.getItem("cedulaPaciente"))), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        console.log(cedulaEncriptada);}
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
    console.log("no")
    return null;
  }
    else{
    const cuidador=await peticion.json();
    console.log(cuidador);
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
  /*document.getElementById("cedula_cuidador").innerText = decryptedCedula;
  document.getElementById("nombre").innerText = decryptedNombre;
  document.getElementById("telefono").innerText = decryptedTelefono;
  document.getElementById("direccion").innerText = decryptedDireccion;
  document.getElementById("parentesco").innerText = cuidador.cuidador.parentesco.descripcion;*/
  return cuidadorDesencriptado;
}

    let encontrarCuidador = async () => {
      let data = localStorage.getItem("datos");
      let dato=JSON.parse(data);
      console.log(data);
          let usuario = dato.usuario;
          let cedul= dato.cedula;
          console.log(cedul);
          console.log(usuario);
    
          let cedulaEncriptada="";
          if(usuario=="medico"||usuario=="administrador"){
            cedulaEncriptada = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(localStorage.getItem("cedulaPaciente"))), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
            console.log(cedulaEncriptada);}
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
    

/*let encontrarCuidador = async () => {
  const peticion = await fetch(servidorAPI + "paciente/cuidador/findCuidadorActivo/" + cedula, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });

  const cuidador = await peticion.json();

  var decryptedCedula = CryptoJS.AES.decrypt(cuidador.cuidador.cedulaCuidador, cajaNegra).toString(CryptoJS.enc.Utf8);
  var decryptedNombre = CryptoJS.AES.decrypt(cuidador.cuidador.nombre, cajaNegra).toString(CryptoJS.enc.Utf8);
  var decryptedDireccion = CryptoJS.AES.decrypt(cuidador.cuidador.direccion, cajaNegra).toString(CryptoJS.enc.Utf8);
  var decryptedTelefono = CryptoJS.AES.decrypt(cuidador.cuidador.telefono, cajaNegra).toString(CryptoJS.enc.Utf8);

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

    var encryptedCedulaC = CryptoJS.AES.encrypt(cedulaCuidador, cajaNegra).toString();
    var encryptedNombre = CryptoJS.AES.encrypt(nombre, cajaNegra).toString();
    var encryptedDireccion = CryptoJS.AES.encrypt(direccion, cajaNegra).toString();
    var encryptedTelefono = CryptoJS.AES.encrypt(telefono, cajaNegra).toString();

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
  var botonActualizar = document.getElementById("actCuid");
  botonActualizar.style.background = "gray";
  botonActualizar.disabled = true;
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let usuario = dato.usuario;
      let cedul= dato.cedula;
      console.log(cedul);
      console.log(usuario);

      let cedulaEncriptada="";
      if(usuario=="medico"||usuario=="administrador"){
        cedulaEncriptada = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(localStorage.getItem("cedulaPaciente"))), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        console.log(cedulaEncriptada);}
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
  console.log(direccion, nombre, parentesco,telefono);
  //cedula: decryptedCedula;
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
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let usuario = dato.usuario;
      let cedul= dato.cedula;
      console.log(cedul);
      console.log(usuario);

      let cedulaEncriptada="";
      if(usuario=="medico"){
        cedulaEncriptada = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(localStorage.getItem("cedulaPaciente"))), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      console.log(cedulaEncriptada);}
      else{
        cedulaEncriptada=cedul;
      }
  const peticion= await fetch(localStorage.getItem("servidorAPI")+'/paciente/cuidador/listCuidadorPacienteByPaciente',{
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
  const btnreactivar=document.getElementById("reactivarCuidador"+cont);
  btnreactivar.style.filter= "grayscale(1)";
  btnreactivar.disabled = true;
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let usuario = dato.usuario;
      let cedul= dato.cedula;
      console.log(cedul);
      console.log(usuario);

      let cedulaEncriptada="";
      if(usuario=="medico"){
        cedulaEncriptada = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(localStorage.getItem("cedulaPaciente"))), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      console.log(cedulaEncriptada);}
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
    console.log("cuidador que quiero reactivar:");
    console.log(cuidadorPaciente);
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
  console.log(data);
      let usuario = dato.usuario;
      let cedul= dato.cedula;
      console.log(cedul);
      console.log(usuario);

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
  console.log(cuidadorActivo);
  let cedCuidador = CryptoJS.AES.decrypt(cuidadorActivo.cuidador.cedulaCuidador, cajaNegra).toString(CryptoJS.enc.Utf8);
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
