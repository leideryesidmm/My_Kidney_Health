let servidorAPI="http://localhost:8081/";
const urlParams = new URLSearchParams(window.location.search);
    const cedulaEncript = urlParams.get('cedula');
    const cedula = CryptoJS.AES.decrypt(cedulaEncript, 'clave_secreta').toString(CryptoJS.enc.Utf8);
var cedulaEncriptada= "";

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

