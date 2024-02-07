let servidorAPI = "http://localhost:8104/";
let iv;
let cajaNegra2;

var requestOptions = {
  method: 'GET',
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  redirect: 'follow'
};

let obtenerClave = async () => {
  try {
    const response = await fetch(servidorAPI + "Usuario/claveFrontend", requestOptions);
    const result = await response.text();
    cajaNegra2= result; 
  } catch (error) {
    console.log('error', error);
    return null; 
  }
}

let obtenerIv = async () => {
  try {
    const response = await fetch(servidorAPI + "Usuario/ivFrontend", requestOptions);
    const result = await response.text();
    iv= result; 
  } catch (error) {
    console.log('error', error);
    return null; 
  }
}

function isAuthenticated() {
  return localStorage.getItem("authenticated") === "true";
}

let login = async (event) => {
  let esAdmin=false;
  event.preventDefault();
  await obtenerClave();
  await obtenerIv();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  let userEncrypt=CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(encodeURIComponent(username)),
  CryptoJS.enc.Utf8.parse(cajaNegra2),
  {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }).toString();

  let passEncrypt=CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(encodeURIComponent(password)),
  CryptoJS.enc.Utf8.parse(cajaNegra2),
  {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }).toString();
  let usuario={
    cedula:userEncrypt,
    contrasenia:passEncrypt
  }
  const peticion3 = await fetch(servidorAPI + 'Usuario/findAdmin', {
    method: 'POST',
    body:JSON.stringify(usuario),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });
 
  if(peticion3.status!=204){
  const administrador = await peticion3.json();
  let cedulaDesencriptada=decodeURIComponent(CryptoJS.AES.decrypt(administrador[0].cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  let contraseniaDesencriptada=decodeURIComponent(CryptoJS.AES.decrypt(administrador[0].contrasenia,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
if(cedulaDesencriptada===username && contraseniaDesencriptada===password){
      localStorage.setItem("authenticated", "true");
      let usuario="administrador";
      datos={
      cedula:administrador[0].cedula, contrasenia:administrador[0].contrasenia, usuario:usuario, token:administrador[1]}
      const data = JSON.stringify(datos);
      localStorage.setItem("datos", data);
      localStorage.setItem("servidorAPI", servidorAPI);
      location.href="administrador.html";
      esAdmin=true;
      return;
    }
    }
  if(esAdmin==true){
    return;
  }
  const peticion = await fetch(servidorAPI + 'paciente/findPacienteByCedula/true', {
    method: 'POST',
    body:JSON.stringify(usuario),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });

  
  
let pacienteEncontrado=false;
let medicoEncontrado=false;
    if(peticion.status!==204){
    const paciente = await peticion.json();
    if(paciente[0].activo==true){
      let cedulaDesencriptada=decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
      let contraseniaDesencriptada=decodeURIComponent(CryptoJS.AES.decrypt(paciente[0].contrasenia,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
    if(cedulaDesencriptada===username && contraseniaDesencriptada===password){
      localStorage.setItem("authenticated", "true");
      let usuario="paciente";
      
      datos={
      cedula:paciente[0].cedula, contrasenia:paciente[0].contrasenia, usuario:usuario,token:paciente[1]
      }
      const data = JSON.stringify(datos);
      localStorage.setItem("datos", data);
      localStorage.setItem("servidorAPI", servidorAPI);
      let cambiado=paciente[0].cambioContrasenia;
      localStorage.setItem("cambiado", cambiado);
      if(!cambiado){
        location.href="cambiarContrasenia.html"
        pacienteEncontrado=true;
      return cambiado;
      }
      else{
      location.href = "principal.html";
      pacienteEncontrado=true;
      return cambiado;
      }
    }
  }
  };
  
    if(!pacienteEncontrado){
      const peticion2 = await fetch(servidorAPI + 'Usuario/findMedicoByCedula/true', {
        method: 'POST',
        body:JSON.stringify(usuario),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })
      if(peticion2.status!=204){
        const medico = await peticion2.json();
        if(medico[0].activo==true){
          let cedulaDesencriptada=decodeURIComponent(CryptoJS.AES.decrypt(medico[0].cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
  let contraseniaDesencriptada=decodeURIComponent(CryptoJS.AES.decrypt(medico[0].contrasenia,CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8));
if(cedulaDesencriptada===username && contraseniaDesencriptada===password){
        localStorage.setItem("authenticated", "true");
        let usuario="medico"
        datos={
        cedula:medico[0].cedula, contrasenia:medico[0].contrasenia, usuario:usuario, token:medico[1]}
        const data = JSON.stringify(datos);
        localStorage.setItem("datos", data);
        localStorage.setItem("servidorAPI", servidorAPI);
        location.href = "pacientes.html";
        medicoEncontrado=true;
        
        return username;
      
    }
  }
  }
    }
    if(!pacienteEncontrado && !medicoEncontrado && !esAdmin){
      $('#errorDatosModal').modal('show');
     crearAdmin();
      document.getElementById("log-in").disabled=false;
    }
}
      
let logout = () => {
  localStorage.removeItem("authenticated")
  localStorage.removeItem("servidorAPI");
  localStorage.removeItem("datos");
  localStorage.removeItem("cedulaPaciente");
  localStorage.removeItem("url");
  localStorage.removeItem("documento");
  localStorage.removeItem("cedulaPacienteEditar");
  localStorage.clear();
  location.href = "login.html";
  
}

let onload = async () => {
  let pathname = window.location.pathname
  await obtenerClave();
  await obtenerIv();
  
  if (isAuthenticated()) {
    
    
    let data = localStorage.getItem("datos");
    let dato=JSON.parse(data);
    const peticion = await fetch(servidorAPI + 'Usuario/tokenValido', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": dato.token
      }
    })
    if(peticion.status===401||peticion.status===403){
      logout();
    }
   
      let usuario = dato.usuario;
    if (pathname.includes("login.html") || pathname.includes("index.html") ) {
      if(usuario=="medico"){
        location.href="pacientes.html";
      }
      else{
        if(usuario=="administrador"){
          location.href="administrador.html"
        }else{
          if(localStorage.getItem("cambiado")=="true"){
            location.href = "principal.html";}
          else{
            location.href="cambiarContrasenia.html"
          }
        }
        
      }
    }
  } else {
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