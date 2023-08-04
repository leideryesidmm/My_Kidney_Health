let servidorAPI = "http://localhost:8081/";
const urlParams = new URLSearchParams(window.location.search);
    const cedulaEncript = urlParams.get('cedula');
    const cedula = CryptoJS.AES.decrypt(cedulaEncript, 'clave_secreta').toString(CryptoJS.enc.Utf8);
var cedulaEncriptada= "";

let obtenerCedulaEncriptada = async () => {
  const peticion = await fetch(servidorAPI + 'Medico/findAllPacientes', {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });

  const pacientes = await peticion.json();
  pacientes.forEach(paciente => {
    let decryptedCedula = CryptoJS.AES.decrypt(paciente.cedula, 'clave_secreta').toString(CryptoJS.enc.Utf8);
    const cedulaCodificado = encodeURIComponent(decryptedCedula);
    if (cedula === cedulaCodificado)
      cedulaEncriptada = paciente.cedula;
  })

  return cedulaEncriptada;
}


let crearAlergia = async () => {
  document.getElementById('guardarAlergia').addEventListener('click', async function (event) {
    event.preventDefault();

    let nombreInput = document.getElementById('nombreCrear').value;
    let encryptedNombre = CryptoJS.AES.encrypt(nombreInput, 'clave_secreta').toString();
    let alergia = { nombre: encryptedNombre };
    let paciente = { cedula: await obtenerCedulaEncriptada() };
    let unionPacienteAlergiaInDto = { alergiaInDto: alergia, pacienteInDto: paciente }

    fetch(servidorAPI + "paciente/alergia/crear", {
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
  cedulaEncriptada = await obtenerCedulaEncriptada();

  const peticion = await fetch(servidorAPI + "paciente/alergia/listByPaciente", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      cedula: cedulaEncriptada
    })
  });
  const alergias = await peticion.json();

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

  fetch(servidorAPI + "paciente/alergia/editar/" + id_alergia, {
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
  let paciente = { cedula: await obtenerCedulaEncriptada() };
  let unionPacienteAlergiaInDto = { alergiaInDto: { idAlergia: id_alergia }, pacienteInDto: paciente }

  fetch(servidorAPI + "paciente/alergia/inactivar", {
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

