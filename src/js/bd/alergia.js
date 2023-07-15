let servidorAPI="http://localhost:8081/";
const cedula="1193098419";
const alergia="7";

let listarAlergias= async()=>{
    const peticion= await fetch(servidorAPI+"paciente/alergia/listByPaciente/"+cedula,{
        method:"GET",
        headers:{
          "Accept":"application/json",
          "Content-Type":"application/json"
        }
      });
  
      const alergias=await peticion.json();
      console.log(alergias);
      return alergias;     
  }

  let crearAlergia = async () => {
    document.getElementById('guardarAlergia').addEventListener('submit', async function(event) {
      event.preventDefault();
  
  
      var nombre = document.getElementById('nombre').value;
      
  
    //   if (cuidadores.includes(cedula_cuidador)) {
    //     var avisoMensaje = document.getElementById('avisoMensaje');
    // avisoMensaje.innerText = 'El cuidador ya está registrado, si no está como su cuidador actual debe cambiarlo en el apartado de cuidador';
  
    // $('#avisoModal').modal('show');
        
    //   } else {
    //     var encryptedCedula = CryptoJS.AES.encrypt(cedula, 'clave_secreta').toString();
    //     var encryptedCedulaC = CryptoJS.AES.encrypt(cedula_cuidador, 'clave_secreta').toString();
    //     var encryptedNombre = CryptoJS.AES.encrypt(nombre, 'clave_secreta').toString();
    //     var encryptedDireccion = CryptoJS.AES.encrypt(direccion, 'clave_secreta').toString();
    //     var encryptedTelefono = CryptoJS.AES.encrypt(telefono, 'clave_secreta').toString();
  
        fetch(servidorAPI + '/alergia/crear/' + cedula,alergia, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              nombre
            })
        })
        .then(response => response.json())
        .then(data => {
          
        })
        .catch(error => {
          // Maneja el error de la petición
        });
        location.href = 'alergias.html';
  
      });
  }