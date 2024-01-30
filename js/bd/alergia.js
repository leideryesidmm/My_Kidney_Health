var cedulaEncriptada= "";

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

let paciente=async(cedula)=>{
  usuario={
    cedula:cedula
  }
  let peticion=await fetch(localStorage.getItem("servidorAPI")+"Usuario/cedula", {
    method:"POST",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    },
    body:JSON.stringify(usuario)
  })
    if (peticion.status===200) {
      const usuario=await peticion.json();
      return usuario;
    }
    else{
      return null;
    }
}

//ya
let cambioContrasenia = async (event) => {
  event.preventDefault();

  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let cedula= (dato.cedula);
      console.log(cedula);
      const usuario=await paciente(cedula);
      console.log("usuario de backend");
      console.log(usuario);
      let contraseniaBD="";
      if(usuario!=null){
      contraseniaBD=decodeURIComponent(CryptoJS.AES.decrypt(usuario.contrasenia, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
      }
      console.log("contraseniaBD");
      console.log(contraseniaBD);
const contraseniaAnterior = document.getElementById("contraseniaanterior").value;
const nuevaContrasenia = document.getElementById("newcontrasenia").value;
let contraseniaNueva=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(nuevaContrasenia)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      
if (contraseniaAnterior === contraseniaBD) {
  let usuarioInDto = { cedula: cedula, contrasenia: contraseniaNueva };


  await fetch(localStorage.getItem("servidorAPI")+"Usuario/cambiarContrasenia", {
    method:"PATCH",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    },
    body:JSON.stringify(usuarioInDto)
  })
  .then(response => {
    if (response.ok) {
      dato.contrasenia=contraseniaNueva;
      const nuevaData = JSON.stringify(dato);
      localStorage.setItem("datos", nuevaData);
      $('#contraseniacambiada').modal('show');

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
$('#contraseniaerronea').modal('show');
document.getElementById("contraseniaanterior").value = "";
document.getElementById("newcontrasenia").value = "";
$('#btnAceptar').click(function() {
  $('#contraseniaerronea').modal('hide');
});
}
};


let crearAlergia = async () => {

  
  document.getElementById('guardarAlergia').addEventListener('click', async function (event) {
    event.preventDefault();
    const btnAlergia=document.getElementById("guardarAlergia");
    btnAlergia.style.background="gray";
    btnAlergia.disabeld="true";
    let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let usuario = dato.usuario;
      console.log(usuario);
      let cedul= dato.cedula;

      let cedulaDesencriptada = localStorage.getItem("cedulaPaciente");
      console.log("cedula paciente alergia");
      console.log(cedulaDesencriptada);
      let cedulaEncriptada = usuario="medico"?CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedulaDesencriptada)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString():cedul;

    let nombreInput = document.getElementById('nombreCrear').value;
    let encryptedNombre = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(nombreInput)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
    let alergia = { nombre: encryptedNombre };
    let paciente = { cedula: cedulaEncriptada };
    let unionPacienteAlergiaInDto = { alergiaInDto: alergia, pacienteInDto: paciente }
    
    fetch(localStorage.getItem("servidorAPI") + "DatosMedicos/alergia/crear", {
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
//ya
let listarAlergias = async () => {
  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let usuario = dato.usuario;
      let cedul= dato.cedula;
      console.log(cedul);
      console.log(usuario);

      let cedulaEncriptada="";
      if(usuario=="medico"){
        let cedulaDesencriptada = localStorage.getItem("cedulaPaciente");
        cedulaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedulaDesencriptada)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();}
      else{
        cedulaEncriptada=cedul;
      }
      

      pacienteInDto={
        cedula:cedulaEncriptada
      }

  const peticion = await fetch(localStorage.getItem("servidorAPI") + "DatosMedicos/alergia/listByPaciente", {
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
    let decryptedNombre = decodeURIComponent(CryptoJS.AES.decrypt(nombres.alergia.nombre,CryptoJS.enc.Utf8.parse(cajaNegra2),
    {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    let objetoAlergia = { idAlergia: nombres.alergia.idAlergia, nombre: decryptedNombre }
    listAlergias.push(objetoAlergia);
  })

  return listAlergias;
}

let editarAlergia = async (id_alergia) => {
 
  nombreInput = document.getElementById('nombreEditar' + id_alergia).value;
  console.log(nombreInput)
  const btnAlergia=document.getElementById("editarAlergia");
    btnAlergia.style.background="gray";
    btnAlergia.disabeld="true";
  let encryptedNombre = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(nombreInput)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString()

  fetch(localStorage.getItem("servidorAPI") + "DatosMedicos/alergia/editar/" + id_alergia, {
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
      let cedul= dato.cedula;
      console.log(cedul);
      console.log(usuario);

      let cedulaEncriptada="";
      if(usuario=="medico"){
        let cedulaDesencriptada = localStorage.getItem("cedulaPaciente");
        cedEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedulaDesencriptada)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();}
      else{
        cedulaEncriptada=cedul;
      }
  let paciente = { cedula: cedulaEncriptada };
  let unionPacienteAlergiaInDto = { alergiaInDto: { idAlergia: id_alergia }, pacienteInDto: paciente }

  fetch(localStorage.getItem("servidorAPI") + "DatosMedicos/alergia/inactivar", {
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

