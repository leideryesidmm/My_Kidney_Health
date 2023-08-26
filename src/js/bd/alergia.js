var cedulaEncriptada= "";

let obtenerCedulaEncriptada = async (cedula) => {
  console.log(cedula);
  const peticion = await fetch(localStorage.getItem("servidorAPI") + 'Medico/findAllPacientes', {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });

  const pacientes = await peticion.json();
  pacientes.forEach(paciente => {
    let decryptedCedula = CryptoJS.AES.decrypt(paciente.cedula, 'clave_secreta').toString(CryptoJS.enc.Utf8);
    if (cedula === decryptedCedula){
      cedulaEncriptada = paciente.cedula;
    }
  })

  return cedulaEncriptada;
}


let crearAlergia = async () => {
  document.getElementById('guardarAlergia').addEventListener('click', async function (event) {
    event.preventDefault();

    let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let usuario = dato.usuario;
      console.log(usuario);
      let cedul= dato.cedula;

      let cedulaEncriptada = usuario="medico"?await obtenerCedulaEncriptada(CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8)):cedul;

    let nombreInput = document.getElementById('nombreCrear').value;
    let encryptedNombre = CryptoJS.AES.encrypt(nombreInput, 'clave_secreta').toString();
    let alergia = { nombre: encryptedNombre };
    let paciente = { cedula: cedulaEncriptada };
    let unionPacienteAlergiaInDto = { alergiaInDto: alergia, pacienteInDto: paciente }

    fetch(localStorage.getItem("servidorAPI") + "paciente/alergia/crear", {
      method: "POST",
      body: JSON.stringify(unionPacienteAlergiaInDto),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response)
        if (response.ok) {
          $('#agregaralergia').modal('hide');
          location.reload();
        } else {
          $('#errorModal').modal('show');
        }
      })
      .catch(error => {
        console.error(error);
      })
  });
}

let listarAlergias = async () => {
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);
      console.log(cedul);
      console.log(usuario);

      let cedulaEncriptada="";
      if(usuario=="medico"){
       cedulaEncriptada = await obtenerCedulaEncriptada(CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
      console.log(cedulaEncriptada);}
      else{
        cedulaEncriptada=cedul;
      }
      console.log(cedulaEncriptada);
      pacienteInDto={
        cedula:cedulaEncriptada
      }

  const peticion = await fetch(localStorage.getItem("servidorAPI") + "paciente/alergia/listByPaciente", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(pacienteInDto)
  });
  const alergias = await peticion.json();
  console.log(alergias);
  let listAlergias = [];

  alergias.forEach(nombres => {
    let decryptedNombre = CryptoJS.AES.decrypt(nombres.alergia.nombre, 'clave_secreta').toString(CryptoJS.enc.Utf8);
    let objetoAlergia = { idAlergia: nombres.alergia.idAlergia, nombre: decryptedNombre }
    listAlergias.push(objetoAlergia);
  })

  return listAlergias;
}

let editarAlergia = async (id_alergia) => {
  nombreInput = document.getElementById('nombreEditar' + id_alergia).value;
  let encryptedNombre = CryptoJS.AES.encrypt(nombreInput, 'clave_secreta').toString();

  fetch(localStorage.getItem("servidorAPI") + "paciente/alergia/editar/" + id_alergia, {
    method: "PATCH",
    body: JSON.stringify({ nombre: encryptedNombre }),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      console.log(response)
      if (response.ok) {
        $('#editaralergia' + id_alergia).modal('hide');
        location.reload();
      } else {
        $('#errorModal').modal('show');
      }
    })
    .catch(error => {
      console.error(error);
    });
}




let inhabilitarAlergia = async (id_alergia) => {

  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let usuario = dato.usuario;
      let cedul= decodeURIComponent(dato.cedula);
      console.log(cedul);
      console.log(usuario);

      let cedulaEncriptada="";
      if(usuario=="medico"){
       cedulaEncriptada = await obtenerCedulaEncriptada(0,CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
      console.log(cedulaEncriptada);}
      else{
        cedulaEncriptada=cedul;
      }
  let paciente = { cedula: cedulaEncriptada };
  let unionPacienteAlergiaInDto = { alergiaInDto: { idAlergia: id_alergia }, pacienteInDto: paciente }

  fetch(localStorage.getItem("servidorAPI") + "paciente/alergia/inactivar", {
    method: "PATCH",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(unionPacienteAlergiaInDto)
  })

    .then(response => {
      console.log(response)
      if (response.ok) {
        $('#eliminaralergia' + id_alergia).modal('hide');
        location.reload();
      }
    })
    .catch(error => {
      console.error(error);
    })

}

