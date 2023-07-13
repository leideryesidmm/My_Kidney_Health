

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
let encontrarMedicamento=async()=>{
  const params = new URLSearchParams(window.location.search.slice(1));
  const idFormulaMedicamento = params.get('idFormulaMedicamento');
  console.log(idFormulaMedicamento);

  const peticion= await fetch(servidorAPI+"paciente/medicamento/findById/"+idFormulaMedicamento,{
    method:"GET",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  });

  const medicamento=await peticion.json();
  console.log(medicamento);
  document.getElementById("idMedicamento").value=medicamento.idFormulaMedicamento;
  document.getElementById("medicamento").value=medicamento.nombre;
  document.getElementById("descripcion").value=medicamento.descripcion;
  document.getElementById("concentracion").value=medicamento.concentracion;
  let fechaDefecto = new Date(medicamento.fechaIni);
  let fechaFormateada = fechaDefecto.toISOString().split('T')[0];
  document.getElementById("fecha_inicio").value=fechaFormateada;
  fechaDefecto = new Date(medicamento.fechaFin);
  fechaFormateada = fechaDefecto.toISOString().split('T')[0];
  document.getElementById("fecha_fin").value=fechaFormateada;
  document.getElementById("tomas").value=medicamento.tomas;
  document.getElementById("dosis").value=medicamento.dosis;
  document.getElementById("intervalos_tiempo").value=medicamento.intervaloTiempo;
  document.getElementById("selectVias").selectedIndex=medicamento.viaAdministracion.idViaAdministracion;


}
//formulaMedicamento/actualizar/{id_formula_medicamento}
let actualizarMedicamento=async ()=> {
  let idFormulaMedicamento=document.getElementById("idMedicamento").value
  console.log(idFormulaMedicamento)
  let formulamedicamento={
      "concentracion": document.getElementById("concentracion").value,
      "descripcion": document.getElementById("descripcion").value,
      "dosis": document.getElementById("dosis").value,
      "fechaFin": document.getElementById("fecha_fin").value+"T00:00:00.001Z",
      "fechaIni": document.getElementById("fecha_inicio").value+"T00:00:00.001Z",
      "intervaloTiempo": document.getElementById("intervalos_tiempo").value,
      "nombre": document.getElementById("medicamento").value,
      "paciente": cedula,
      "tomas": document.getElementById("tomas").value,
      "via_Administracion": document.getElementById("selectVias").value
  }
  console.log(formulamedicamento)

  fetch(servidorAPI+"paciente/formulaMedicamento/actualizar/"+idFormulaMedicamento,{
    method:"PATCH",
    body: JSON.stringify(formulamedicamento),
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })
  
.then(response => {
  if (response.ok) {
    // La solicitud fue exitosa (código de estado 2xx)
    if (response.status === 200 || response.status === 204 ) {
      $('#successModal').modal('show');
    }
  } else {
    // La solicitud no fue exitosa (código de estado no 2xx)
    // Realiza acciones para manejar la respuesta no exitosa
  }
})
.catch(error => {
  console.error(error);
  // Mostrar mensaje de error en la consola o en la interfaz de usuario
})
}

let eliminarMedicamento=async (idMedicamento)=> {
  fetch(servidorAPI+"paciente/medicamento/eliminar/"+idMedicamento,{
    method:"DELETE",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })
   
.then(response => {
  console.log(response)
  if (response.ok) {
    // La solicitud fue exitosa (código de estado 2xx)
      $('#inhabilitarMedicamento'+idMedicamento).modal('hide');
      $('#modal2').modal('show');
  } else {
    // La solicitud no fue exitosa (código de estado no 2xx)
    // Realiza acciones para manejar la respuesta no exitosa
    $('#modal3').modal('show');
  }
})
.catch(error => {
  console.error(error);
  // Mostrar mensaje de error en la consola o en la interfaz de usuario
})

}
