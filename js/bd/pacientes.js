
var cedulaEncriptada = "";
let dat= localStorage.getItem("datos");

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



let cambioContrasenia = async (event) => {
  event.preventDefault();

  let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
      let cedula= decodeURIComponent(dato.cedula);
      let contrasenia=decodeURIComponent(dato.contrasenia);
      console.log("contrasenia de data");
      console.log(contrasenia);
      let contraseniaBD=CryptoJS.AES.decrypt(contrasenia, CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);

const contraseniaAnterior = document.getElementById("contraseniaanterior").value;
const nuevaContrasenia = document.getElementById("newcontrasenia").value;
let contraseniaNueva=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(nuevaContrasenia), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

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


let restaurarContrasenia=async(ced, cont)=>{
  let cedula = ced.toString();
  let cedulaEncriptada=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(cedula), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  try {
    const usuarioInDto = { cedula: cedulaEncriptada };

    const response = await fetch(servidorAPI + 'Usuario/restaurarContrasenia', {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(usuarioInDto)
    });
   if(response.ok){
      $('#restaurarContrasenia'+cont).modal('hide');
      $('#restaurarContraseniaPaciente').modal('show');
      
   }
}
catch (error) {
  console.error("Error al restaurar contraseña:", error);
}
}


let inhabilitarPaciente = async (ced) => {
  let cedula = ced.toString();
  
  let  cedulaEncriptada = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(cedula),CryptoJS.enc.Utf8.parse(cajaNegra2),
    {iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
  console.log(cedulaEncriptada);

  try {
    const pacienteInDto = { cedula: cedulaEncriptada };

    const response = await fetch(servidorAPI + 'Medico/inhabilitarPaciente', {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pacienteInDto)
    });

    if (response.ok) {
      $('#inhabilitarpaciente').modal('hide');
      location.reload();
    }
    else {
      console.error("Error al inhabilitar paciente:", response.status);
    }
  }
  catch (error) {
    console.error("Error al inhabilitar paciente:", error);
  }
};


let habilitarPaciente = async (ced) => {
  let cedula = ced.toString();
  let  cedulaEncriptada = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(cedula),CryptoJS.enc.Utf8.parse(cajaNegra2),
    {iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

  try {
    const pacienteInDto = { cedula: cedulaEncriptada };

    const response = await fetch(servidorAPI + 'Medico/reactivarPaciente', {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pacienteInDto)
    });

    if (response.ok) {
      location.reload();
    }
    else {
      console.error("Error al habilitar paciente:", response.status);
    }
  }
  catch (error) {
    console.error("Error al habilitar paciente:", error);
  }
};
