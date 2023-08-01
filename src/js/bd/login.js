function isAuthenticated() {
    return localStorage.getItem("authenticated") === "true";
  }
  
  let login=async(event)=> {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const cedulaCodificado=null;
    const peticion= await fetch(servidorAPI+'Medico/findAllPacientes',{
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
            cedulaCodificado = encodeURIComponent(decryptedCedula);
           })   
  
    // Realizar la lógica de autenticación aquí (puedes usar Ajax para enviar la información al servidor)
  
    // Ejemplo básico de autenticación (¡NO es seguro! Es solo para propósitos de demostración)
    if (username === cedulaCodificado && password === cedulaCodificado) {
      // Inicio de sesión exitoso, guardar el estado de autenticación en el almacenamiento local
      localStorage.setItem("authenticated", "true");
      alert("Inicio de sesión exitoso");
     location.href("principal.html");
    } else {
      alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }

  }
  
  // Función para manejar el cierre de sesión
  function logout() {
    // Eliminar el estado de autenticación del almacenamiento local
    localStorage.removeItem("authenticated");
    // Aquí puedes redirigir a la página de inicio de sesión o a otra página de tu elección
    alert("Has cerrado sesión");
  }
  
  // Verificar si el usuario está autenticado al cargar la página
  window.onload = function() {
    if (isAuthenticated()) {
      // El usuario está autenticado, muestra el contenido protegido o redirige a otra página
      alert("Bienvenido/a. Ya estás autenticado/a.");
    } else {
      // El usuario no está autenticado, se muestra el formulario de inicio de sesión
      alert("Por favor, inicia sesión para acceder.");
    }
  }