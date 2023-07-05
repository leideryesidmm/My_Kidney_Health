let servidorAPI="http://localhost:8081/"
let listarPacientes= async()=>{
    cedula="1193098419";
    const peticion= await fetch(servidorAPI+"paciente/findPacienteByCedula/"+cedula,{
      method:"GET",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    });
    const paciente=await peticion.json();
    console.log(paciente);
    document.getElementById("nombre").innerText=paciente.nombre;
    document.getElementById("fechaNacimiento").innerText=paciente.fechaNacimiento;
    document.getElementById("celular").innerText=paciente.celular;
    document.getElementById("direccion").innerText=paciente.direccion;
    document.getElementById("peso").innerText=paciente.peso;
    document.getElementById("altura").innerText=paciente.altura;
}

listarPacientes()