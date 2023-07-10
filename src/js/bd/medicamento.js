

let servidorAPI="http://localhost:8081/";
const cedula="1193098419";
let listarMedicamentos= async()=>{
    const peticion= await fetch(servidorAPI+"paciente/medicamento/findMedicamentoByPaciente/"+cedula,{
      method:"GET",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
});
    const medicamentos=await peticion.json();
console.log(medicamentos);
return medicamentos;
}

let cuidadorActivo= async()=>{
    const peticion= await fetch(servidorAPI+"paciente/cuidador/findCuidadorActivo/"+cedula,{
      method:"GET",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    });

    const cuidador=await peticion.json();
   document.getElementById("nombreCuidador").innerText=cuidador.cuidador.nombre;
    document.getElementById("dataTelefonoCuidador").innerText=cuidador.cuidador.telefono;
    document.getElementById("dataDireccionCuidador").innerText=cuidador.cuidador.direccion;
    document.getElementById("dataParentescoCuidador").innerText=cuidador.cuidador.parentesco.descripcion;
}

let alergias= async()=>{
    const peticion= await fetch(servidorAPI+"paciente/alergia/listByPaciente/"+cedula,{
      method:"GET",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    });

    const alergias=await peticion.json();
    console.log(alergias);
    let msgalergias="";
    
    alergias.forEach(alergia => {
        console.log(msgalergias)
        msgalergias=msgalergias+alergia.alergia.nombre+", "
    });
    msgalergias = msgalergias.substring(0, msgalergias.length - 2);
    
   document.getElementById("dataAlergia").innerText=msgalergias;
}

let listarVias= async()=>{
  const peticion= await fetch(servidorAPI+"paciente/medicamento/viaAdministracion",{
    method:"GET",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  });
  const selectVias = document.getElementById('selectVias');
  const vias=await peticion.json();
  const optionSeleccionar = document.createElement('option');
  optionSeleccionar.textContent = "Seleccione";
  selectVias.appendChild(optionSeleccionar);
  vias.forEach(via=>{
    const option = document.createElement('option');
    option.value = via.idViaAdministracion;
    option.textContent = via.descripcion;
    selectVias.appendChild(option);
  })

  
}
