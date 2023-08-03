let servidorAPI="http://localhost:8081/";

function isAuthenticated() {
    return localStorage.getItem("authenticated") === "true";
  }
  
  let login = async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username);
    let decryptedCedula = null;
    let contrasenia= null;
    
    const peticion = await fetch(servidorAPI + 'Usuario/findAllUsuarios', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
  
    const pacientes = await peticion.json();
    console.log(pacientes);
  
    pacientes.forEach(paciente=>{
      decryptedCedula = CryptoJS.AES.decrypt(paciente.cedula, 'clave_secreta').toString(CryptoJS.enc.Utf8);
      console.log(decryptedCedula);
      contrasenia = CryptoJS.AES.decrypt(paciente.contrasenia, 'clave_secreta').toString(CryptoJS.enc.Utf8);
      console.log(contrasenia);
      console.log(username === decryptedCedula && password === contrasenia);
      if (username === decryptedCedula && password === contrasenia) {
        
        // Inicio de sesión exitoso, guardar el estado de autenticación en el almacenamiento local
        localStorage.setItem("authenticated", "true");
        location.href="principal.html?cedula=" + paciente.cedula;
    console.log(username);
        return username; // Salir del bucle si se encontró una coincidencia
      }
      
    })
  
    // Si el bucle termina sin encontrar una coincidencia, muestra el mensaje de credenciales incorrectas
    
  }
  
  // Función para manejar el cierre de sesión
  let logout=()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const cedula = urlParams.get('cedula');
    location.href="login.html";

    const logoutURL = "login.html" + (cedula ? "?cedula=" + cedula : "");

  location.href = logoutURL;
  }
  
  let onload = async () => {
    if (!isAuthenticated()) {
      const urlParams = new URLSearchParams(window.location.search);
      const cedula = urlParams.get('cedula');
  
      const loginURL = "login.html" + (cedula ? "?cedula=" + cedula : "");
      location.href = loginURL;
    }
  }