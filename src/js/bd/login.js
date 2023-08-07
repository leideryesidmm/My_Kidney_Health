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
     
        localStorage.setItem("authenticated", "true");
        const cedula= encodeURIComponent(paciente.cedula)
        const contrasenia= encodeURIComponent(paciente.contrasenia)
        localStorage.setItem("contrasenia", contrasenia);
        localStorage.setItem("cedula", cedula);
        location.href="principal.html?cedula=" + cedula;
    console.log(username);
        return username;
      }
      
    })
  
    // Si el bucle termina sin encontrar una coincidencia, muestra el mensaje de credenciales incorrectas
    
  }
  
  // Función para manejar el cierre de sesión
  let logout=()=>{
    localStorage.removeItem("authenticated");
    location.href="login.html";

   

  location.href ="login.html";
  }
  
  let onload = async () => {
    if (isAuthenticated()) { 
      location.href = "principal.html";
    }
    else{
      
    }
  }