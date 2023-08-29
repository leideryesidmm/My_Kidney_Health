var cedulaEncriptada= "";

let obtenerCedulasUsuarios=async(id, cedula)=>{
  let result = "";
  console.log(cedula);
  const peticion= await fetch(localStorage.getItem("servidorAPI")+'Usuario/findAllUsuarios',{
    method:'GET',
    headers:{
      "Accept":"application/json",
      "Content-Type": "application/json"
    }
      });
      const pacientes=await peticion.json();
      console.log(pacientes);
      pacientes.forEach(paciente=>{
        let decryptedCedula = CryptoJS.AES.decrypt(paciente.cedula, 'clave_secreta').toString(CryptoJS.enc.Utf8);
        console.log(decryptedCedula);
        if(cedula===decryptedCedula){   
        console.log("ENTRO");
      if(id == 0){
        result = paciente.cedula;
      }
      if(id == 1){
        result = paciente.contrasenia;
      }
    }
    })
    console.log(result)
  return result;
}

function passwordVisibilityActual(inputId, iconClass) {
  var passwordInput = document.getElementById(inputId);
  var icon = document.querySelector("." + iconClass);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

let cambioContrasenia = async () => {
  
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let cedul= decodeURIComponent(dato.cedula);
      console.log(cedul);

      let cedulaEncriptada="";
      let contraseniaEncriptadaBD="";
      let decryptedCedula = CryptoJS.AES.decrypt(cedul, 'clave_secreta').toString(CryptoJS.enc.Utf8);
       cedulaEncriptada = await obtenerCedulasUsuarios(0,decryptedCedula);
      console.log(decryptedCedula);

        contraseniaEncriptadaBD = await obtenerCedulasUsuarios(1,decryptedCedula);
      console.log(contraseniaEncriptadaBD);


  let contraseniaBD = CryptoJS.AES.decrypt(contraseniaEncriptadaBD, 'clave_secreta').toString(CryptoJS.enc.Utf8);
  console.log(contraseniaBD);

  const contraseniaAnterior = document.getElementById("contraseniaanterior").value;
  const nuevaContrasenia = document.getElementById("newcontrasenia").value;
  console.log(nuevaContrasenia)

  if (contraseniaAnterior === contraseniaBD) {
    const contraseniaEncriptada = CryptoJS.AES.encrypt(nuevaContrasenia, 'clave_secreta').toString();

    let usuarioInDto = { cedula: cedulaEncriptada, contrasenia: contraseniaEncriptada };
    console.log(usuarioInDto);

    const peticion= await fetch(localStorage.getItem("servidorAPI")+"Usuario/cambiarContrasenia", {
      method:"PATCH",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(usuarioInDto)
    })
      .then(response => {
        if (response.ok) {
          alert("Contraseña cambiada exitosamente");

          document.getElementById("contraseniaanterior").value = "";
          document.getElementById("newcontrasenia").value = "";
          $('#nuevacontrasenia').modal('hide');
        } else {
          alert("Error al cambiar la contraseña");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Error al cambiar la contraseña");
      });
  }
  else {
    alert("La contraseña actual ingresada no es correcta. Intentelo nuevamente");
    document.getElementById("contraseniaanterior").value = "";
    document.getElementById("newcontrasenia").value = "";
  }
};


let crearAlergia = async () => {
  document.getElementById('guardarAlergia').addEventListener('click', async function (event) {
    event.preventDefault();

    let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let usuario = dato.usuario;
      console.log(usuario);
      let cedul= dato.cedula;

      let cedulaEncriptada = usuario="medico"?await obtenerCedulasUsuarios(0, CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8)):cedul;

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
       cedulaEncriptada = await obtenerCedulasUsuarios(0, CryptoJS.AES.decrypt(decodeURIComponent(localStorage.getItem("cedulaPaciente")), "clave_secreta").toString(CryptoJS.enc.Utf8));
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

