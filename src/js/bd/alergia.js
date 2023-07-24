let servidorAPI="http://localhost:8081/";
const cedula="1193098419";
var cedulaEncriptada= "";

let obtenerCedulaEncriptada=async()=>{
  const peticion= await fetch(servidorAPI+'Medico/findAllPacientes',{
    method:'GET',
    headers:{
      "Accept":"application/json",
      "Content-Type": "application/json"
    }
      });

      const pacientes=await peticion.json();
      //console.log(pacientes);
      pacientes.forEach(paciente=>{
        let decryptedCedula = CryptoJS.AES.decrypt(paciente.cedula, 'clave_secreta').toString(CryptoJS.enc.Utf8);
        const cedulaCodificado = encodeURIComponent(decryptedCedula);
        console.log(decryptedCedula);
        if(cedula===cedulaCodificado)
        cedulaEncriptada=paciente.cedula;
        
      })   
      
      return cedulaEncriptada;
}
var cedulaEncriptada=  obtenerCedulaEncriptada();

  let crearAlergia=async ()=> {    
    let nombre= document.getElementById('nombreCrear').value;
    let encryptedNombre = CryptoJS.AES.encrypt(nombre, 'clave_secreta').toString();
    let alergia= {nombre: encryptedNombre};
    let paciente= {cedula : await obtenerCedulaEncriptada()};
    let unionPacienteAlergia= {alergiaInDto: alergia, pacienteInDto: paciente}
    document.getElementById('guardarAlergia').addEventListener('click', async function(event) {
           event.preventDefault();        
    
           console.log(document.getElementById('nombreCrear').value)
    fetch(servidorAPI+"paciente/alergia/crear",{
      method:"POST",
      body: JSON.stringify(unionPacienteAlergia),
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

  let listarAlergias= async()=>{
    cedulaEncriptada=await obtenerCedulaEncriptada();
    
      
      const peticion= await fetch(servidorAPI+"paciente/alergia/listByPaciente",{
    
          method:"POST",
          headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            cedula:cedulaEncriptada
          })        
        });        
        const alergias=await peticion.json();
  
        // let listAlergias = [];
        // console.log(alergias);
  
        // alergias.forEach(nombres=>{    
        //   let decryptedNombre = CryptoJS.AES.decrypt(nombres.alergia.nombre, 'clave_secreta').toString(CryptoJS.enc.Utf8);
        //   console.log(nombres.alergia.nombre)
        //   listAlergias.push(decryptedNombre);      
        // })

        return alergias;     
    }
    
  let editarAlergia=async (id_alergia)=> {
 
    let nombre= document.getElementById('nombreEditar').value;
   
    let encryptedNombre = CryptoJS.AES.encrypt(nombre, 'clave_secreta').toString();
    let alergia= {nombre: encryptedNombre};
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
          location.reload();
      } else {
        $('#errorModal').modal('show');
      }
    })
    .catch(error => {
      console.error(error);
    }
    );  
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
        location.reload();
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
  
  }

  