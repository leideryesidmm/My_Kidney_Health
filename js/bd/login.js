let servidorAPI = "http://localhost:8104/";
let iv = "vuens_soha=6jh36";
let iv2= "bs72/=a12dx=o=pl";
let cajaNegra2="vfjdnjefh37/ps=3";
let cajaNegra="clave_secreta";
let backend="y362_02j=27w/=42";
function isAuthenticated() {
  return localStorage.getItem("authenticated") === "true";
}

function crearAdmin(){
  
  let cedulaEncriptada=CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse("22222222"),
  CryptoJS.enc.Utf8.parse(backend),
  {
      iv: CryptoJS.enc.Utf8.parse(iv2),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
  }).toString();
  let contraseniaEncriptada=cedulaEncriptada;
  let nombreEncriptado=CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse("Wilson Flórez"),
    CryptoJS.enc.Utf8.parse(backend),
      {
      iv: CryptoJS.enc.Utf8.parse(iv2),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
      }).toString();
  let celularEncriptado=CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse("32314412"),
    CryptoJS.enc.Utf8.parse(backend),
    {
      iv: CryptoJS.enc.Utf8.parse(iv2),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString();
  let correoEncriptado=CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse("wilsonF@gmail.com"),
    CryptoJS.enc.Utf8.parse(backend),
  {
    iv: CryptoJS.enc.Utf8.parse(iv2),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }).toString();
  let tipoDocumentoEncriptado=CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse("Cédula de ciudadanía"),
  CryptoJS.enc.Utf8.parse(backend),
  {
    iv: CryptoJS.enc.Utf8.parse(iv2),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }).toString();

  let tipoDocumentoDesencriptado = CryptoJS.AES.decrypt(
    tipoDocumentoEncriptado,
    CryptoJS.enc.Utf8.parse(backend),
    {
        iv: CryptoJS.enc.Utf8.parse(iv2),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }
).toString(CryptoJS.enc.Utf8);

    
    console.log("cedula "+cedulaEncriptada);
    console.log("contraseña: "+contraseniaEncriptada);
    console.log("nombre: "+nombreEncriptado);
    console.log("celular: "+celularEncriptado);
    console.log("correo: "+correoEncriptado);
    console.log("tipo documento: "+tipoDocumentoEncriptado);
    console.log("tipo doc. desencriptado" + tipoDocumentoDesencriptado);


}

let login = async (event) => {
  let esAdmin=false;
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  let userEncrypt=CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(username),
  CryptoJS.enc.Utf8.parse(cajaNegra2),
  {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }).toString();

  let passEncrypt=CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(password),
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
  document.getElementById("log-in").disabled=true;
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
  console.log(administrador);

      localStorage.setItem("authenticated", "true");
      const cedula = encodeURIComponent(administrador.cedula);
      let usuario="administrador";
      datos={
      cedula:cedula, usuario:usuario, contrasenia:administrador.contrasenia
      }
      const data = JSON.stringify(datos);
      localStorage.setItem("datos", data);
      localStorage.setItem("servidorAPI", servidorAPI);
      location.href="administrador.html";
      esAdmin=true;
      return;
    }
  if(esAdmin==true){
    return;
  }
  let decryptedCedula = null;
  let contrasenia = null;
  const peticion = await fetch(servidorAPI + 'Medico/findAllPacientes', {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  });

  const pacientes = await peticion.json();
  console.log(pacientes);

  const peticion2 = await fetch(servidorAPI + 'Usuario/findMedicoByCedula', {
    method: 'POST',
    body:JSON.stringify(usuario),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
  const medico = await peticion2.json();
  console.log("medico:");
  console.log(medico);
let pacienteEncontrado=false;
let medicoEncontrado=false;
  pacientes.forEach(async paciente => {
    if(paciente.activo==true){
    decryptedCedula = CryptoJS.AES.decrypt(paciente.cedula, cajaNegra).toString(CryptoJS.enc.Utf8);
    console.log(decryptedCedula);
    contrasenia = CryptoJS.AES.decrypt(paciente.contrasenia, cajaNegra).toString(CryptoJS.enc.Utf8);
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
      console.log(localStorage.setItem("datos", data))
      let cambiado=paciente.cambioContrasenia;
      localStorage.setItem("cambiado", cambiado);
      console.log(cambiado);
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
    }}
  });
    if(!pacienteEncontrado){
        if(medico.activo==true){
      decryptedCedula = CryptoJS.AES.decrypt(medico.cedula,CryptoJS.enc.Utf8.parse(cajaNegra2),
      {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
      contrasenia = CryptoJS.AES.decrypt(medico.contrasenia,CryptoJS.enc.Utf8.parse(cajaNegra2),
      {iv: CryptoJS.enc.Utf8.parse(iv),mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8);
      console.log("contrasenia"+contrasenia);
      if (username === decryptedCedula && password === contrasenia) {
        console.log("paso la comparación de login");
        localStorage.setItem("authenticated", "true");
        const cedulaMedico = encodeURIComponent(medico.cedula);
        const contraseniaMedico = encodeURIComponent(medico.contrasenia);
        let usuario="medico"
        datos={
        cedula:cedulaMedico, usuario:usuario, contrasenia:contraseniaMedico
        }
        const data = JSON.stringify(datos);
        localStorage.setItem("datos", data);
        console.log(data)
        localStorage.setItem("servidorAPI", servidorAPI);
        location.href = "pacientes.html";
        medicoEncontrado=true;
        
        return username;
      }
    }
    }
    if(!pacienteEncontrado && !medicoEncontrado && !esAdmin){
      $('#errorDatosModal').modal('show');
     crearAdmin();
      document.getElementById("log-in").disabled=false;
    }
}
      
// Función para manejar el cierre de sesión
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
  
  if (isAuthenticated()) {
    let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
  console.log(data);
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
