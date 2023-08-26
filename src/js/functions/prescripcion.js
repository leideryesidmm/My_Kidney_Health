let NavBarPrescripcion = () => {
    let ms = "";
    let usuario = JSON.parse(localStorage.getItem("datos")).usuario;
    if (usuario == "paciente") {
        ms +=          
        '<div class="col-2"><a href="principal.html" class="devolverse"><img src="../img/devolverseColor.png" alt="" id="icono"></a></div>'+
        '<div class="col-8"><h1 class="title-principal-app">Prescripciones</h1></div>'+
        '<div class="col-2"></div>';
    }
    else {
        ms +=
            '<header>' +
            '<div class="row">' +
            '<div class="col-md-4 logo" align="left"><img src="../img/logo3.png" alt=""></div>' +
            '<div class="col-md-4 text-center"><h1>Prescripciones</h1></div>' +
            '<div class="col-md-4" id="navPacientes">' +
            '<nav><ul>' +
            '<li><a href="pacientes.html">Pacientes</a></li>' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">' +
            '<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>' +
            '<path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>' +
            '</svg>' +
            '<li>'+
            '<div class="dropdown">'+
            '<button class="btn btn dropdown-toggle" type="button" id="nombreUsuario" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>'+
            '<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">'+
            '<a class="dropdown-item" href="#">Cambiar Contraseña</a>'+
            '<a class="dropdown-item" onclick="logout()">Cerrar sesión</a>'+
            '</div></div>'+
            '</li>' +
            '</ul></nav>' +
            '</div>' +
            '</div>' +
            '</header>';
    }
    document.getElementById("navbar").innerHTML = ms;
  }

let mostrarPrescripcion= async (prescripcion) => {
    localStorage.setItem('prescripcionActual', JSON.stringify(await prescripcionDiaHoy(prescripcion)));
    prescripcion=await prescripcion;
    let msg="";
     
    if(prescripcion.unionPrescripcionDiasRecambios.length==1){
    
     msg+='<div id="prescontainer">'
    +'<div class="row">'
    +'<label for="cantidad">N° recambios: '+ prescripcion.unionPrescripcionDiasRecambios[0].recambios.length +'</label>'

    +'<label for="concentracion">Concentraciones: ';
    let msg2=""
    prescripcion.unionPrescripcionDiasRecambios[0].recambios.forEach(recambio => {
    msg+=recambio.concentracion+' - ';
    msg2+=recambio.intervaloTiempo+' - ';selectConcentracion
    });
    msg=msg.substring(0, msg.length - 3);
    msg2=msg2.substring(0, msg2.length - 3);
    msg+='</label>'
    +'<label for="intervaloTiempo">Intervalos de tiempo: '
    +msg2
    +'</label>'
    +'</div></div>';
    document.getElementById("prescri").innerHTML=msg;
    }
    if(prescripcion.unionPrescripcionDiasRecambios.length>1){
    let msg="";
    prescripcion.unionPrescripcionDiasRecambios.forEach((dias)=>{
        msg+='<div class="container">'
        +'<div class="row text-center">';
         msg += `<div class="col-2"><span class="badge ${dias.prescripcionDia.lunes ? 'bg-success' : 'bg-secondary'}">Lu</span></div>`
        + `<div class="col-2"><span class="badge ${dias.prescripcionDia.martes ? 'bg-success' : 'bg-secondary'}">Ma</span></div>`
        + `<div class="col-2"><span class="badge ${dias.prescripcionDia.miercoles ? 'bg-success' : 'bg-secondary'}">Mi</span></div>`
        + `<div class="col-2"><span class="badge ${dias.prescripcionDia.jueves ? 'bg-success' : 'bg-secondary'}">Ju</span></div>`
        + `<div class="col-2"><span class="badge ${dias.prescripcionDia.viernes ? 'bg-success' : 'bg-secondary'}">Vi</span></div>`
        + `<div class="col-2"><span class="badge ${dias.prescripcionDia.sabado ? 'bg-success' : 'bg-secondary'}">Sá</span></div>`
        + '</div> <br>'
        +'<table class="table table-bordered" id="prescripcionTable">'
        +'<thead>'
        +'  <tr>'
        +'    <th>Recambio</th>'
        +'    <th>Concentración</th>'
        +'    <th>Tiempo</th>'
        +'  </tr>'
        +'</thead>'
        +'<tbody id="seguimientoData">';
        let cont=1;
        dias.recambios.forEach(recambio => {
        msg+='  <tr>'
        +'    <td>'+cont+'</th>'
        +'    <td>'+recambio.concentracion+'</th>'
        +'    <td>'+recambio.intervaloTiempo+'</th>'
        +'  </tr>'
        });
        msg+='</tbody>'
        +'</table>'
        +'</div> <br>';
    
    })
    document.getElementById("prescri").innerHTML=msg;
    }
}
let prescripcionDiaHoy= async (prescripcion) =>{
    prescripcion=await prescripcion;
    let dias=["lunes","martes","miercoles","jueves","viernes","sabado"]
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    let prescripcionDiaHoy1;
    prescripcion.unionPrescripcionDiasRecambios.forEach(prescripcionDia => {
        if(prescripcionDia.prescripcionDia[dias[hoy.getDay()-1]]==true){
            prescripcionDiaHoy1= prescripcionDia;
        }
    });
    document.getElementById("fechaP").innerText=prescripcion.cita.fecha.split("T")[0]
    return prescripcionDiaHoy1

}

let tablaRecambios=async(recambios)=>{
    recambios=await recambios;
    
    let msg='<table class="table table-bordered" id="recambioTable">'
    +'<thead>'
    +'  <tr>'
    +'    <th>Inicio</th>'
    +'    <th>Final</th>'
    +'    <th>Concentración</th>'
    +'    <th>Drenaje</th>'
    +'  </tr>'
    +'</thead>'
    +'<tbody id="seguimientoData">';
    recambios.forEach(recambio => {
    msg+='  <tr>'
    +'    <td style="font-size:70%">'+recambio.fecha.split("T")[0]+' \n '+recambio.fecha.split("T")[1]+'</th>'
    +'    <td style="font-size:70%">'+recambio.hora.split("T")[0]+' \n '+recambio.fecha.split("T")[1]+'</th>'
    +'    <td style="font-size:90%">'+recambio.recambio.concentracion+'</th>'
    +'    <td style="font-size:90%">'+CryptoJS.AES.decrypt(recambio.drenajeDialisis, 'clave_secreta').toString(CryptoJS.enc.Utf8);+'</th>'
    +'  </tr>';
    });
    
    msg+='</tbody>'
    +'</table>';
    document.getElementById("recamTable").innerHTML=msg;
    new DataTable('#recambioTable', {
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
        },
    })
  }