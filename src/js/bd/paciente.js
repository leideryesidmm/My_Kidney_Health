let servidorAPI="http://localhost:8081/";
const cedula="1193098419";
let listarPacientes= async()=>{
    const peticion= await fetch(servidorAPI+"paciente/findPacienteByCedula/"+cedula,{
      method:"GET",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
});
    const paciente=await peticion.json();
    document.getElementById("nombre").innerText=paciente.nombre;
    document.getElementById("fechaNacimiento").innerText=paciente.fechaNacimiento;
    document.getElementById("celular").innerText=paciente.celular;
    document.getElementById("direccion").innerText=paciente.direccion;
    document.getElementById("peso").innerText=paciente.peso;
    document.getElementById("altura").innerText=paciente.altura;
    document.getElementById("eps").innerText=paciente.eps;
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
