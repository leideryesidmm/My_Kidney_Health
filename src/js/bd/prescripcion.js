let servidorAPI="http://localhost:8081/";
const cedula="1193098419";

let prescripciones= async()=>{
    const peticion= await fetch(servidorAPI+"paciente/prescripcion/prescripcionActual",{
      method:"POST",
      body:JSON.stringify({cedula:cedula}),
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
});
    const prescripcion=await peticion.json();
console.log(prescripcion);
return prescripcion;
}

