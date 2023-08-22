let servidorAPI = "http://localhost:8081/";

function isAuthenticated() {
  return localStorage.getItem("authenticated") === "true";
}

let login = async (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
 

  let decryptedCedula = null;
  let contrasenia = null;

  const peticion = await fetch(servidorAPI + '/Medico/findAllPacientes', {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });

  const pacientes = await peticion.json();
  console.log(pacientes);

  const peticion2 = await fetch(servidorAPI + '/Medico/findAll', {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
  const medicos = await peticion2.json();
  console.log(medicos);
let pacienteEncontrado=false;
let medicoEncontrado=false;
  pacientes.forEach(paciente => {
    decryptedCedula = CryptoJS.AES.decrypt(paciente.cedula, 'clave_secreta').toString(CryptoJS.enc.Utf8);
    console.log(decryptedCedula);
    contrasenia = CryptoJS.AES.decrypt(paciente.contrasenia, 'clave_secreta').toString(CryptoJS.enc.Utf8);
    console.log(contrasenia);
    console.log(username === decryptedCedula && password === contrasenia);
    if (username === decryptedCedula && password === contrasenia) {
      localStorage.setItem("authenticated", "true");
      const cedula = encodeURIComponent(paciente.cedula)
      let usuario="paciente"
      datos={
      cedula:cedula, usuario:usuario
      }
      const data = JSON.stringify(datos);
      localStorage.setItem("datos", data);
      localStorage.setItem("servidorAPI", servidorAPI);
      location.href = "principal.html";
      pacienteEncontrado=true;
      return username;
    }
  });
    if(!pacienteEncontrado){
      medicos.forEach(medico => {
      decryptedCedula = CryptoJS.AES.decrypt(medico.cedula, 'clave_secreta').toString(CryptoJS.enc.Utf8);
      console.log(decryptedCedula);
      contrasenia = CryptoJS.AES.decrypt(medico.contrasenia, 'clave_secreta').toString(CryptoJS.enc.Utf8);
      console.log(contrasenia);
      if (username === decryptedCedula && password === contrasenia) {
        localStorage.setItem("authenticated", "true");
        const cedulaMedico = encodeURIComponent(medico.cedula)
        let usuario="medico"
        datos={
        cedula:cedulaMedico, usuario:usuario
        }
        const data = JSON.stringify(datos);
        localStorage.setItem("datos", data);
        localStorage.setItem("servidorAPI", servidorAPI);
        location.href = "pacientes.html";
        medicoEncontrado=true;
        return username;
      }
      })
    }
    if(!pacienteEncontrado && !medicoEncontrado){
      let msg="";
      msg+='<p class="error">¡Datos Incorrectos!</p>';
      document.getElementById("datosIncorrectos").innerHTML=msg;
    }

}

// Función para manejar el cierre de sesión
let logout = () => {
  localStorage.removeItem("authenticated")
  localStorage.removeItem("servidorAPI");
  localStorage.removeItem("datos");
  localStorage.removeItem("cedulaPaciente");
  location.href = "login.html";



  location.href = "login.html";
}

let onload = async () => {

  let pathname = window.location.pathname
  if (isAuthenticated()) {
    console.log("yesAuthenticated")
    if (pathname.includes("login.html")) {
      location.href = "principal.html";
    }
  } else {
    console.log("noAuthenticated")
    if (!pathname.includes("login.html")) {
      location.href = "login.html";
    }

  }
}

function passwordVisibility() {
  var passwordInput = document.getElementById("password");
  var icon = document.querySelector(".toggle-password");
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