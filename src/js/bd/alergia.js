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

  let crearAlergia=async ()=> {
    document.getElementById('guardarAlergia').addEventListener('click', async function(event) {
           event.preventDefault();        
    
           console.log(document.getElementById('nombreCrear').value)
    fetch(servidorAPI+"paciente/alergia/crear/"+cedula,{
      method:"POST",
      body: JSON.stringify({nombre : document.getElementById('nombreCrear').value}),
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
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

  let editarAlergia=async (id_alergia)=> {
 
           console.log(document.getElementById('nombreEditar'+id_alergia).value)
    fetch(servidorAPI+"paciente/alergia/editar/"+id_alergia,{
      method:"PATCH",
      body: JSON.stringify({nombre : document.getElementById('nombreEditar'+id_alergia).value}),
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
    .then(response => {
      console.log(response)
      if (response.ok) {
          $('#editaralergia'+id_alergia).modal('hide');
      } else {
        $('#errorModal').modal('show');
      }
    })
    .catch(error => {
      console.error(error);
    }
    );  
    location.href = 'alergias.html';  
  }


  let inhabilitarAlergia=async (id_alergia)=> {
    fetch(servidorAPI+"paciente/alergia/inactivar/"+cedula+"/"+id_alergia,{
      method:"PATCH",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
     
  .then(response => {
    console.log(response)
    if (response.ok) {
      // La solicitud fue exitosa (código de estado 2xx)
        $('#eliminaralergia'+id_alergia).modal('hide');
        // $('#modal2').modal('show');
    } else {
      // La solicitud no fue exitosa (código de estado no 2xx)
      // Realiza acciones para manejar la respuesta no exitosa
      // $('#modal3').modal('show');
    }
  })
  .catch(error => {
    console.error(error);
    // Mostrar mensaje de error en la consola o en la interfaz de usuario
  })
  
  location.href = 'alergias.html';
  }

  