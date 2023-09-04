let NavBarPrescripcion = () => {
    let ms = "";
    let usuario = JSON.parse(localStorage.getItem("datos")).usuario;
    if (usuario == "paciente") {
        ms +=
        '<div class="navbar" id="bann" style="padding:0"><div class="col-2"><a href="principal.html" class="devolverse"><img src="../img/devolverseColor.png" alt="" id="icono"></a></div>'+
        '<div class="col-8"><h1 class="title-principal-app">Prescripciones</h1></div>'+
        '<div class="col-2"></div></div>';
    }
    else {
        ms +=
        '<nav id="nav" class=" navbar-expand-lg navbar-light">'+
        '<div class="row">'+
        '<div class="col-1 no-effect"><a href="principal.html" class="devolverse"><img src="../img/devolverseColor.png" alt="" id="icono"></a></div>'+  
        '<div class="col-1">'+
            '<div class="logo"><img src="../img/logo3.png" alt=""></div>'+
          '</div>'+
          '<div class="col-8">'+
            '<div class="title">'+
              '<h1>Prescripciones</h1>'+
            '</div>'+
          '</div>'+
          '<div class="col-2">'+
            '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"'+
              'aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">'+
              '<span class="navbar-toggler-icon"></span>'+
            '</button>'+
            '<div class="collapse navbar-collapse" id="navbarSupportedContent">'+
              '<ul class="navbar-nav mr-auto align-items-center ">'+
                '<li class="nav-item active">'+
                  '<a id="text" class="nav-link" href="pacientes.html">Pacientes<span class="sr-only"></span></a>'+
                '</li>'+
                '<div class="d-flex align-items-center">'+
                '<li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"'+
                  'class="bi bi-person-circle" viewBox="0 0 16 16">'+
                  '<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />'+
                  '<path fill-rule="evenodd"'+
                    'd="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />'+
                '</svg></li>'+
                '<li class="nav-item ml-1 active">'+
                  
                    '<button class="btn btn dropdown-toggle" type="button" id="nombreUsuario" data-toggle="dropdown"'+
                      'aria-haspopup="true" aria-expanded="false">'+
                    '</button>'+
                    '<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">'+
                      '<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#nuevacontrasenia">Cambiar '+
                        'Contraseña</a>'+
                      '<a class="dropdown-item" href="login.html" onclick="logout()">Cerrar sesión</a>'+
                    '</div>'+
                  '</li></div>'+
              '</ul>'+
            '</div>'+
      '</nav>';
    }
    document.getElementById("banner").innerHTML = ms;
}

let agregarPrescripcion = async () => {
    let ms = "";

    ms += '<div class="form-container">' +
        '<h2>Agregar Prescripción</h2>' +
        '<p id="campos">Selecciona la cantidad de prescripciones</p>'+
        '<form id="paciente-form" onsubmit="obtenerValoresDePrescripcion(event)">';
    ms +=
        '<div class="form-row">' +
        '<div class="form-column">' +
        '<select  id="selectCantidad" onchange="generarPrescripciones()" required>'+
        '<option value="0">0</option>'+
                '<option value="1">1</option>'+
                '<option value="2">2</option>'+
                '<option value="3">3</option>'+
                '<option value="4">4</option>'+
                '<option value="5">5</option>'+
                '<option value="6">6</option>'+
                '<option value="7">7</option>'+
              '</select>'+
        '</div>' +
        
        '</div>'+
        '<div id="containerExtra"></div>'+
        '<div id="botones"></div>';
    document.getElementById("container").innerHTML = ms;
}
let checkboxesSeleccionados = {};

function generarPrescripciones(){
    var cantidad=document.getElementById("selectCantidad").value;
    let containerExtra = document.getElementById("containerExtra");
    containerExtra.innerHTML = "";
    let msg="";
    const diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
    
    if(cantidad>0){
    msg+=
    '<div class="form-row">'+
    '<div class="form-column">' +
    '<label for="orificio" id="data">Orificio:</label>' +
    '<br>' +
          '<select id="selectedOrificio" required>'+
            '<option value="">Seleccione...</option>'+
            '<option value="perfecto">Perfecto</option>'+
            '<option value="bueno">Bueno</option>'+
            '<option value="equivoco">Equívoco</option>'+
            '<option value="infeccionAguda">Infección Aguda</option>'+
            '<option value="infeccionCronica">Infeccion Crónica</option>'+
            '<option value="trauma">Trauma</option>'+
          '</select>'+
          
    '</div>'+
    '<div class="form-column">' +
        '<label id="fechaF">Fecha Final de la prescripción:</label>'+
        '<input type="date" class="fechaFin" id="fechaFin" required>'+
        '</div>' +
        '</div>' +
    '<hr>';
    }
    for(var i=0;i<cantidad;i++){
        let idCantidad = i + 1;
        msg+=
        '</div>' +
        '<div class="form-row" >' +
        '<div class="form-column" id="">' +
        '<div class="nocheSeca">' +
        '<label for="nocheSeca" id="data2">Noche Seca: &nbsp</label>' +
        '<input type="checkbox" id="nocheSeca'+idCantidad+'" name="nocheSeca">' +
        '</div>' +    
        '</div>' +             
        '<div class="form-column">' +
        '<label for="recambios" id="data">Cantidad de Recambios:<label id="asq">*</label></label>' +
        '<br>' +
        '<select  id="selectedCantidad' + idCantidad + '" required onchange="generarSelects(' + idCantidad + ' )" >'+
                '<option value="">Seleccione...</option>'+
                '<option value="1">1</option>'+
                '<option value="2">2</option>'+
                '<option value="3">3</option>'+
                '<option value="4">4</option>'+
                '<option value="5">5</option>'+
              '</select>'+
        '</div>' +        
        '</div>' +  
        '<div class="form-column" id="prescrip">' +
        '<div id="selectContainer' + idCantidad + '" class="margentop"></div>'+
        '</div>'+
        '</div>';
        
        msg+='<div class="form-row">' +
        '<div class="nocheSeca">' +
        '<label for="nocheSeca" id="data2">Lunes:&nbsp</label>' +
        '<input type="checkbox" id="lunes'+idCantidad+'" name="lunes'+idCantidad+'">&nbsp' +
        '<label for="nocheSeca" id="data2">Martes: &nbsp</label>' +
        '<input type="checkbox" id="martes'+idCantidad+'" name="martes'+idCantidad+'">&nbsp' +
        '<label for="nocheSeca" id="data2">Miercoles: &nbsp</label>' +
        '<input type="checkbox" id="miercoles'+idCantidad+'" name="miercoles'+idCantidad+'">&nbsp' +
        '<label for="nocheSeca" id="data2">Jueves: &nbsp</label>' +
        '<input type="checkbox" id="jueves'+idCantidad+'" name="jueves'+idCantidad+'">&nbsp' +
        '<label for="nocheSeca" id="data2">Viernes: &nbsp</label>' +
        '<input type="checkbox" id="viernes'+idCantidad+'" name="viernes'+idCantidad+'">&nbsp' +
        '<label for="nocheSeca" id="data2">Sábado: &nbsp</label>' +
        '<input type="checkbox" id="sabado'+idCantidad+'" name="sabado'+idCantidad+'">&nbsp' +
        '<label for="nocheSeca" id="data2">Domingo: &nbsp</label>&nbsp' +
        '<input type="checkbox" id="domingo'+idCantidad+'" name="domingo'+idCantidad+'">&nbsp' +
        '</div>' +              
        '</div>'+
        '<hr>'; 
        
      
    }
    
    containerExtra.innerHTML += msg;

    

    let ms="";
    if(cantidad>0){
    ms+=
    '<div class="buttons">' +
    '<div class="btn-save">' +
    '<a type="button" href="prescripcionesM.html" class="cancelar">Cancelar</a>' +
    '</div>' +
    '<div class="btn-save">' +
    '<button type="submit" class="guardarPac">Guardar</button>' +
    '</div>' +
    '</div>'+
    '</form>';
    }
    document.getElementById("botones").innerHTML = ms;  

    for (var i = 0; i < cantidad; i++) {
        let idCantidad = i + 1;
        
        diasSemana.forEach(dia => {
            const checkbox = document.getElementById(`${dia}${idCantidad}`);
            checkbox.addEventListener('change', function () {
              checkboxesSeleccionados[`${dia}`] = checkboxesSeleccionados[`${dia}`] || {};
              checkboxesSeleccionados[`${dia}`][idCantidad] = this.checked;
              habilitaDeshabilitaDias(dia, cantidad);
            });
          });
      }
    
}


function habilitaDeshabilitaDias(dia, cantidad) {
    const checkedCycles = [];

    for (let i = 1; i <= cantidad; i++) {
        const checkbox = document.getElementById(`${dia}${i}`);
        if (checkbox && checkbox.checked) {
            checkedCycles.push(i);
        }
    }
    for (let i = 1; i <= cantidad; i++) {
        const checkbox = document.getElementById(`${dia}${i}`);
    
        if (checkbox) {
            if (checkedCycles.length > 0 && checkedCycles.includes(i)) {
                checkbox.disabled = false;
            } else if (checkedCycles.length > 0 && !checkedCycles.includes(i)) {
                checkbox.disabled = true;
            } else {
                checkbox.disabled = false;
            }
        }
    }
}

function generarSelects(idCantidad) {
  var select = document.getElementById("selectedCantidad" + idCantidad);

  if (select.value !== "") {
    var cantidad = document.getElementById("selectedCantidad" + idCantidad).value;
    var container = document.getElementById("selectContainer" + idCantidad);
    container.innerHTML = ""; 

    var row = document.createElement("div");
    row.className = "row";

    for (var i = 0; i < cantidad; i++) {
        var idConcentracion = "concentracion" + (i + 1)+""+idCantidad; 

        var col = document.createElement("div");
        col.className = "col-12 col-md-6 col-lg-4 col-xl-3"; 

        var selectContainer = document.createElement("div");
        selectContainer.className = "form-group";

        var label = document.createElement("label");
        label.className = "form-label";
        label.id = "labelContrasentacion";
        label.for = idConcentracion;
        label.innerText = "Concentración " + (i + 1) + ":"; 
        

        var select = document.createElement("select");
        select.className = "form-control";
        select.id = idConcentracion;
        select.setAttribute("required", "true");

        var opciones = ["Seleccione...", "1.5%", "2.5%", "4.25%"];

        var rang = document.createElement("label");
        rang.id="data";
        rang.for="rangoH";

        var textRango = document.createElement("label");
        textRango.id="textRango";
        textRango.for="";
        textRango.innerText ="Rango de Horas:";
        
        var asquer = document.createElement("label");
        asquer.id="asq";
        asquer.innerText="*";

        var rangoH=document.createElement("input");
        rangoH.type="text";
        rangoH.className="rango";
        rangoH.id = "rango"+idConcentracion;
        rangoH.setAttribute("required", "true");

        for (var j = 0; j < opciones.length; j++) {
            var option = document.createElement("option");
            if(j==0){
              option.value = opciones[j];
              option.value="";
              select.appendChild(option);
            }
            else{
            option.value = opciones[j];
            option.text = opciones[j];
            select.appendChild(option);
            }
        }

        selectContainer.appendChild(label);
        selectContainer.appendChild(select);
        selectContainer.appendChild(rang);
        selectContainer.appendChild(textRango);
        selectContainer.appendChild(asquer);
        selectContainer.appendChild(rangoH);
        

        col.appendChild(selectContainer);
        row.appendChild(col);
    }

    container.appendChild(row);
  }
}

  let cargar=async (prescripcion)=>{
    prescripcion=await prescripcion;
    document.getElementById("fechaP").innerText=prescripcion.cita.fecha.split("T")[0]
}
let mostrarPrescripcion2= async (prescripcion) => {
    localStorage.setItem('prescripcionActual', JSON.stringify(prescripcionDiaHoy(prescripcion)));
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
function formatearFecha(fecha) {
    var dia = fecha.getDate().toString().padStart(2, '0');
    var mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    var año = fecha.getFullYear();
  
    return `${dia}-${mes}-${año}`;
  }

let mostrarPrescripcion= async (prescripcion, fecha, recambios) => {
    recambios=await recambios;
    if(recambios==null){
        let msg="";
        msg+='<h3>No hay recambios prescritos para la fecha seleccionada</h3>';
        document.getElementById("recambios").innerHTML=msg;
        return;
    }
    localStorage.setItem("recambios",JSON.stringify(recambios));
    let prescripcionDiaHoy1=await prescripcionDiaFecha(prescripcion, fecha)
    localStorage.setItem('prescripcionActual', JSON.stringify(prescripcionDiaHoy1));
    prescripcion=await prescripcion;
    let msg="";
    let accion="";
    let estado="";
    let hoy=new Date()
    let datos1=await datos();
    let cont=0;
    prescripcionDiaHoy1.recambios.forEach(recambio => {
      accion="";
        msg+='<div class="col-lg-5 card card-menor">'
        +'<div class="row">'
        +`    <div class="col-2 estado" style="`;
        if(recambios[cont]!=null){
          estado="H";
            msg+='background-color:rgb(11, 158, 11);">';
            if(fecha.getFullYear() === hoy.getFullYear() &&
            fecha.getMonth() === hoy.getMonth() &&
            (fecha.getDate() === hoy.getDate()||fecha.getDate() === hoy.getDate()-1)){
                accion='<a type="button" onclick="verRecambio('+cont+')"  style="background-color: rgba(0,0,0,0);;border: none;">'
                +'<svg class="icon-hover" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">'
                +'<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>'
                +'<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>'
                +'</svg></a>'
                +'<a style="color:black" href="editarRecambio.html?idRecambioHecho='+recambios[cont].idRecambioHecho+'">'
                +'<svg class="icon-hover"xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">'
                +'<path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>'
                +'</svg></a>';
            }
            else{
                if(fecha.getFullYear() < hoy.getFullYear() ||
                (fecha.getFullYear() === hoy.getFullYear() &&
                  fecha.getMonth() < hoy.getMonth()) ||
                (fecha.getFullYear() === hoy.getFullYear() &&
                  fecha.getMonth() === hoy.getMonth() &&
                  fecha.getDate() < (hoy.getDate()-1))){
                accion='<button type="button" onclick="verRecambio('+cont+')" style="background-color: rgba(0,0,0,0);;border: none;">'
                +'<svg class="icon-hover" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">'
                +'<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>'
                +'<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>'
                +'</svg></button>';
            }
            }
        }else{
            if(fecha.getFullYear() === hoy.getFullYear() &&
            fecha.getMonth() === hoy.getMonth() &&
            fecha.getDate() === hoy.getDate()){
              estado="P";
                msg+='background-color:#e6b216;">';
                accion='<a style="color:black" href="agregarRecambio.html?idRecambio='+recambio.idRecambio+'">'
                    +'<svg class="icon-hover" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">'
                    +'<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'
                    +'<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>'
                    +'</svg></a>';
          }else{
            if(fecha.getFullYear() < hoy.getFullYear() ||
            (fecha.getFullYear() === hoy.getFullYear() &&
              fecha.getMonth() < hoy.getMonth()) ||
            (fecha.getFullYear() === hoy.getFullYear() &&
              fecha.getMonth() === hoy.getMonth() &&
              fecha.getDate() < (hoy.getDate()-1))){
                estado="SH"
                msg+='background-color:#f73c3c;">';
            }else{
                if(fecha.getFullYear() === hoy.getFullYear() &&
                fecha.getMonth() === hoy.getMonth() &&
                fecha.getDate() === (hoy.getDate()-1)){
                    estado="P";
                    msg+='background-color:rgb(252, 130, 59);">';
                    accion='<a style="color:black" href="agregarRecambio.html?idRecambio='+recambio.idRecambio+'">'
                    +'<svg class="icon-hover" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">'
                    +'<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'
                    +'<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>'
                    +'</svg></a>';
                } else{
                  estado="F"
                    msg+='background-color:slategray;">';
                }
            }
          }
        }
        'background-color:#e6b216;">'
        
        
        msg+='        <div class="text-center">'
        +'            <h6 id="vertical">'
        +estado
        +'            </h6>'
        +'            <div class="tooltip-container">'+
        '<span class="tooltip-text" data-toggle="tooltip" data-placement="top" title="H: Hecho&#10;P: Pendiente&#10;SH: Sin hacer&#10;F: Futuro">'+
      '<svg class="icon-hover" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">'
        +'                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'
        +'                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>'
        +'              </svg></span></div>'
        +'        </div>'   
        +'    </div>'
        msg+=datos1[cont];

        msg+= '   <div id="acciones" class="col-2  acciones">';
        msg+=accion;
        msg+='</div>'
            +'</div>'
            +'</div>'
    cont++;});
    
    
    msg+='</div>';
    document.getElementById("recambios").innerHTML=msg;
}

let verRecambio=async(idRecambio)=>{
  try {
  let recambio=JSON.parse(localStorage.getItem("recambios"))[idRecambio];

  document.getElementById("inicio").innerText=recambio.hora_ini.replace("T", " ");
  document.getElementById("final").innerText=recambio.hora_fin.replace("T", " ");
  document.getElementById("drenaje").innerText=decodeURIComponent(CryptoJS.AES.decrypt(recambio.drenajeDialisis, 'clave_secreta').toString(CryptoJS.enc.Utf8));
  document.getElementById("concentracion").innerText=recambio.recambio.concentracion+"%";
  document.getElementById("estadoOrificio").innerText=decodeURIComponent(CryptoJS.AES.decrypt(recambio.orificioSalida, 'clave_secreta').toString(CryptoJS.enc.Utf8));
  document.getElementById("caracteristicaliquido").innerText=decodeURIComponent(CryptoJS.AES.decrypt(recambio.caracteristicaLiquido, 'clave_secreta').toString(CryptoJS.enc.Utf8));
  
    
  $('#verRecambio').modal('show');
  } catch (error) {
  }
}

let prescripcionDiaFecha= async (prescripcion,fecha) =>{
    prescripcion=await prescripcion;
    let dias=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]
    let prescripcionDiaHoy1;
    prescripcion.unionPrescripcionDiasRecambios.forEach(prescripcionDia => {
        if(prescripcionDia.prescripcionDia[dias[fecha.getDay()-1]]==true){
            prescripcionDiaHoy1= prescripcionDia;
        }
    });
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
    +'    <td style="font-size:70%">'+recambio.hora_ini.split("T")[0]+' \n '+recambio.fecha.split("T")[1]+'</th>'
    +'    <td style="font-size:70%">'+recambio.hora_fin.split("T")[0]+' \n '+recambio.fecha.split("T")[1]+'</th>'
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

  let datos= async () => {
    let data=new Array();
    let cardinalidad=["Primer Recambio","Segundo Recambio", "Tercer Recambio", "Cuarto Recambio", "Quinto Recambio"];
    let cont=0;
    prescripcionDia=JSON.parse(localStorage.getItem('prescripcionActual'));
    let msg="";
    prescripcionDia.recambios.forEach(recambio => {
        msg='<div class="col-8">'
        +'        <div class="datos">'
        +'<h5>'+cardinalidad[cont]+'</h5>'
        +'        <h6>Concentración: '+recambio.concentracion+'%</h6>'
        +'        <h6>Tiempo: '+recambio.intervaloTiempo+'h</h6>'
        +'    </div>'
        +'</div>';
        data.push(msg);
          cont++;
    });
    return data;
  }

let mostrarPrecripcionMedico=async (prescripcion) => {
  prescripcion=await prescripcion
  let msg="";
  let ordinal=["Primer","Segundo", "Tercer", "Cuarto", "Quinto"];
  document.getElementById("actual").classList.add("active");
  document.getElementById("historico").classList.remove("active");
  msg+=`
  <h4>Prescripcion actual</h4><br>
                <div class="row">
                    <div class="col-sm-6">
                        <h6><b>Fecha inicial:</b> ${prescripcion.cita.fecha==undefined||prescripcion.cita.fecha==null?"Sin fecha de Inicio":formatDate(new Date(prescripcion.cita.fecha))} </h6>
                    </div>
                    <div class="col-sm-6">
                        <h6><b>Fecha final:</b> ${prescripcion.cita.fechaFin==undefined||prescripcion.cita.fechaFin==null?"Sin fecha de fin":formatDate(new Date(prescripcion.cita.fechaFin))} </h6>
                    </div>
                  </div><br>
                  <div id="prescripcionesDia">
                    `;


                    prescripcion.unionPrescripcionDiasRecambios.forEach(prescripcionDia => {
                      
                      msg+=`<div class="row">
                      <div class="col"><h6>Dias: ${obtenerDias(prescripcionDia.prescripcionDia)}</h6></div>
                      <div class="col-12 table-responsive">
                          <table class="table">
                              <thead>
                                <tr>
                                  <th>Recambio</th>
                                  <th>Concentración</th>
                                  <th>Duración</th>
                                </tr>
                              </thead>
                              <tbody>`
                              let cont=0;
                    prescripcionDia.recambios.forEach(recambio => {
                      msg+=`<tr>
                      <td>${ordinal[cont]+" recambio"}</td>
                      <td>${recambio.concentracion}</td>
                      <td>${recambio.intervaloTiempo}</td>
                    </tr>`
                    cont++;
                    });
                                
                      msg+=        `
                              </tbody>
                            </table>
                      </div>
                      
                    </div>`
                    });

                    msg+=`
                  </div>
                  
    
                  <div class="text-right">
                  <a href="#" class="btn btn-primary">Recambios</a>
                  <a href="#" class="btn btn-primary">Finalizar</a>
                  </div>
  `;
  
  document.getElementById("cardBody").innerHTML=msg;
}
let mostrarHistoricoMedico=async (prescripcion) => {

  document.getElementById("historico").classList.add("active");
  document.getElementById("actual").classList.remove("active");
  document.getElementById("cardBody").innerHTML="";
}

function obtenerDias(prescripcionDia) {
  let dias2=["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
  let diasP="";
  let cont=0;
  let ultimo=0;
 while(cont<dias2.length){
    if(prescripcionDia[dias2[cont]]){
      ultimo=cont;
      if(cont+1==dias2.length){
        if(diasP[diasP.length-1]=" ")diasP=diasP.substring(0,diasP.length-2)
        diasP+=" y "+dias2[cont];return diasP;
      }diasP+=dias2[cont]+", ";
    }
    cont++
    if(cont==dias2.length){
      if(diasP[diasP.length-1]=" "){
        diasP=diasP.substring(0,diasP.length-(4+dias2[ultimo].length))
        diasP+=" y "+dias2[ultimo]
      }
      
    }
  };
  return diasP;
}
function formatDate(date) {
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear() % 100;

  // Asegurarse de que el día y el mes tengan dos dígitos
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return `${day}/${month}/${year}`;
}


let editarPrescripcion = async () => {
  let datos = await datosEditarPrescripcion();
  let prescripcionesHechas = datos.prescipcionDia.length;
  let ms = "";

  ms += '<div class="form-container">' +
      '<h2>Editar Prescripción</h2>' +
      '<p id="campos">Selecciona la cantidad de prescripciones</p>' +
      '<form id="paciente-form" onsubmit="obtenerDatosParaEditar(event)">';
  ms +=
      '<div class="form-row">' +
      '<div class="form-column">' +
      '<select  id="selectCantidad">' +
      '<option value="0">0</option>' +
      '<option value="1">1</option>' +
      '<option value="2">2</option>' +
      '<option value="3">3</option>' +
      '<option value="4">4</option>' +
      '<option value="5">5</option>' +
      '<option value="6">6</option>' +
      '<option value="7">7</option>' +
      '</select>' +
      '</div>' +
      '</div>' +
      '<div id="containerExtra"></div>' +
      '<div id="botones"></div>';
  document.getElementById("container").innerHTML = ms;
  let selectCantidad = document.getElementById("selectCantidad");
  selectCantidad.value = prescripcionesHechas;

  generarPrescripcionesLlenados();

  selectCantidad.addEventListener("change", function() {
    const cantidadSeleccionada = parseInt(selectCantidad.value);
    if (cantidadSeleccionada !== 0) {
      generarPrescripcionesLlenados(cantidadSeleccionada);
    }
  });
}


let checkboxsSeleccionados = {};
let rec=[];
let generarPrescripcionesLlenados=async()=>{
  let datos = await datosEditarPrescripcion();
  let orificio=CryptoJS.AES.decrypt(datos.cita.orificioSalida, "clave_secreta").toString(CryptoJS.enc.Utf8);
  let fechaFin=datos.cita.fechaFin.split("T")[0];
  let prescripcionesDia=datos.prescipcionDia;
  let recambios=datos.recambios;
  var cantidad=document.getElementById("selectCantidad").value;
  let containerExtra = document.getElementById("containerExtra");
  containerExtra.innerHTML = "";
  let msg="";
  
  
  if(cantidad>0){
  msg+=
  '<div class="form-row">'+
  '<div class="form-column">' +
  '<label for="orificio" id="data">Orificio:</label>' +
  '<br>' +
        '<select id="selectedOrificio" required>'+
          '<option value="">Seleccione...</option>'+
          '<option value="perfecto">Perfecto</option>'+
          '<option value="bueno">Bueno</option>'+
          '<option value="equivoco">Equívoco</option>'+
          '<option value="infeccionAguda">Infección Aguda</option>'+
          '<option value="infeccionCronica">Infeccion Crónica</option>'+
          '<option value="trauma">Trauma</option>'+
        '</select>'+
        
  '</div>'+
  '<div class="form-column">' +
      '<label id="data">Fecha Final de la prescripción:</label>'+
      '<input type="date" class="fechaFin" id="fechaFin" required>'+
      '</div>' +
      '</div>' +
  '<hr>';
  }
  
  for(var i=0;i<cantidad;i++){
    if(i<recambios.length){
    rec[i]=recambios[i].length;
    }
      let idCantidad = i + 1;
      msg+=
      '</div>' +
      '<div class="form-row" >' +
      '<div class="form-column" id="">' +
      '<div class="nocheSeca">' +
      '<label for="nocheSeca" id="data2">Noche Seca: &nbsp</label>' +
      '<input type="checkbox" id="nocheSeca'+idCantidad+'" name="nocheSeca">' +
      '</div>' +    
      '</div>' +             
      '<div class="form-column">' +
      '<label for="recambios" id="data">Cantidad de Recambios:<label id="asq">*</label></label>' +
      '<br>' +
      '<select id="selectedCantidad' + idCantidad + '" required>'+
              '<option value="">0</option>'+
              '<option value="1">1</option>'+
              '<option value="2">2</option>'+
              '<option value="3">3</option>'+
              '<option value="4">4</option>'+
              '<option value="5">5</option>'+
            '</select>'+
      '</div>' +        
      '</div>' +  
      '<div class="form-column" id="prescrip">' +
      '<div id="selectContainer' + idCantidad + '" class="margentop"></div>'+
      '</div>'+
      '</div>';
    
        
      msg+='<div class="form-row">' +
      '<div class="nocheSeca">' +
      '<label for="nocheSeca" id="data2">Lunes:&nbsp</label>' +
      '<input type="checkbox" id="lunes'+idCantidad+'" name="lunes'+idCantidad+'">&nbsp' +
      '<label for="nocheSeca" id="data2">Martes: &nbsp</label>' +
      '<input type="checkbox" id="martes'+idCantidad+'" name="martes'+idCantidad+'">&nbsp' +
      '<label for="nocheSeca" id="data2">Miercoles: &nbsp</label>' +
      '<input type="checkbox" id="miercoles'+idCantidad+'" name="miercoles'+idCantidad+'">&nbsp' +
      '<label for="nocheSeca" id="data2">Jueves: &nbsp</label>' +
      '<input type="checkbox" id="jueves'+idCantidad+'" name="jueves'+idCantidad+'">&nbsp' +
      '<label for="nocheSeca" id="data2">Viernes: &nbsp</label>' +
      '<input type="checkbox" id="viernes'+idCantidad+'" name="viernes'+idCantidad+'">&nbsp' +
      '<label for="nocheSeca" id="data2">Sábado: &nbsp</label>' +
      '<input type="checkbox" id="sabado'+idCantidad+'" name="sabado'+idCantidad+'">&nbsp' +
      '<label for="nocheSeca" id="data2">Domingo: &nbsp</label>&nbsp' +
      '<input type="checkbox" id="domingo'+idCantidad+'" name="domingo'+idCantidad+'">&nbsp' +
      '</div>' +              
      '</div>'+
      '<hr>'; 
      
      
  }
  
  containerExtra.innerHTML += msg;
  
  for(var i=0;i<cantidad;i++){
    let nocheSec = i < prescripcionesDia.length ? prescripcionesDia[i].nocheSeca : false;
      let idCantidad = i + 1;
  let checkboxNocheSeca = document.getElementById("nocheSeca" + idCantidad);
  checkboxNocheSeca.checked = nocheSec;
  }


  document.getElementById("fechaFin").value = fechaFin;
  let selecorificio = document.getElementById("selectedOrificio");
  selecorificio.value = orificio;
  

  let ms="";
  if(cantidad>0){
  ms+=
  '<div class="buttons">' +
  '<div class="btn-save">' +
  '<a type="button" href="prescripcionesM.html" class="cancelar">Cancelar</a>' +
  '</div>' +
  '<div class="btn-save">' +
  '<button type="submit" class="guardarPac">Actualizar</button>' +
  '</div>' +
  '</div>'+
  '</form>';
  }
  document.getElementById("botones").innerHTML = ms;  
  
  for (var i = 0; i < cantidad; i++) {
      let idCantidad = i + 1;
      
      
        if(i<recambios.length){
          document.querySelector("#selectedCantidad" + idCantidad).value = rec[i];
        }
       
    }
  
  for(var i=0; i<cantidad;i++){
    let idCantidad=i+1;
    let selCantidad = document.getElementById("selectedCantidad"+idCantidad);
   
    if(i<recambios.length){
  selCantidad.value = recambios[i].length;
    

  selCantidad.addEventListener("change", function() {
    const cantidadSeleccionada = parseInt(selCantidad.value);
   
    if (cantidadSeleccionada !== 0) {
      generarSelectsLlenados(idCantidad, document.getElementById("selectedCantidad" + idCantidad).value);    }
    
  });
}
   
    generarSelectsLlenados(idCantidad, document.getElementById("selectedCantidad" + idCantidad).value);
   
  }
}


let generarSelectsLlenados = async (idCantidad, cantidadSeleccionada) => {
 
  var container = document.getElementById("selectContainer" + idCantidad);
  container.innerHTML = "";

  var row = document.createElement("div");
  row.className = "row";

  for (var i = 0; i < cantidadSeleccionada; i++) {
    var idConcentracion = "concentracion" + (i + 1)+""+idCantidad; 

    var col = document.createElement("div");
    col.id = "selectsPrescripcion";
    col.className = "col-12 col-md-6 col-lg-4 col-xl-3"; 
    
    var selectContainer = document.createElement("div");
    selectContainer.className = "form-group";

    var label = document.createElement("label");
    label.className = "form-label";
    label.id = "labelConcentracion";
    label.for = idConcentracion;
    label.innerText = "Concentración " + (i + 1) + ":"; 
    

    var select = document.createElement("select");
    select.className = "form-control";
    select.id = idConcentracion;
    select.setAttribute("required", "true");

    var opciones = ["Seleccione...", "1.5%", "2.5%", "4.25%"];

    var rang = document.createElement("label");
    rang.id="data";
    rang.for="rangoH";

    var textRango = document.createElement("label");
    textRango.id="data";
    textRango.for="";
    textRango.innerText ="Rango de Horas: " ;
    
    var asquer = document.createElement("label");
    asquer.id="asq";
    asquer.innerText= " *";

    var rangoH=document.createElement("input");
    rangoH.type="number";
    rangoH.className="rango";
    rangoH.id = "rango"+idConcentracion;
    rangoH.setAttribute("required", "true");

    for (var j = 0; j < opciones.length; j++) {
        var option = document.createElement("option");
        if(j==0){
          option.value = opciones[j];
          option.value="";
          select.appendChild(option);
        }
        else{
        option.value = opciones[j];
        option.text = opciones[j];
        select.appendChild(option);
        }
    }

    selectContainer.appendChild(label);
    selectContainer.appendChild(select);
    selectContainer.appendChild(rang);
    selectContainer.appendChild(textRango);
    selectContainer.appendChild(asquer);
    selectContainer.appendChild(rangoH);
    

    col.appendChild(selectContainer);
    row.appendChild(col);
}
  container.appendChild(row);

  let datos = await datosEditarPrescripcion();
  var cantidad=document.getElementById("selectCantidad").value;
 
  let recambios=datos.recambios;
  let prescipcionesDia=datos.prescipcionDia;

  await new Promise((resolve) => setTimeout(resolve, 0));
  for(var i=0;i<recambios.length;i++){
    let idCantidad = i+1;
    let recambio=recambios[i];
    let prescipcionDia=prescipcionesDia[i];
    for(var j=0;j<recambio.length;j++){
      document.getElementById("concentracion"+(j+1)+idCantidad).value=recambio[j].concentracion+"%";
      document.getElementById("rangoconcentracion"+(j+1)+idCantidad).value=recambio[j].intervaloTiempo;
    }
    const diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
    diasSemana.forEach(dia => {
      const checkbox = document.getElementById(`${dia}${idCantidad}`);
      checkbox.checked = prescipcionDia[dia];
      habilitaDeshabilitDias(dia, cantidad);
      habilitarDeshabilitarDias(dia, cantidad); 
      
      checkbox.addEventListener('change', function () {
        checkboxsSeleccionados[`${dia}`] = checkboxsSeleccionados[`${dia}`] || {};
        checkboxsSeleccionados[`${dia}`][idCantidad] = this.checked;
        habilitaDeshabilitDias(dia, cantidad);
        habilitarDeshabilitarDias(dia, cantidad);
        

      });
    });
  }
  
};
function habilitarDeshabilitarDias(dia, cantidad) {
  const checkboxes = [];

  // Obtener todos los checkboxes para el día
  for (let i = 1; i <= cantidad; i++) {
    const checkbox = document.getElementById(`${dia}${i}`);
    if (checkbox) {
      checkboxes.push(checkbox);
    }
  }

  const anyCheckboxChecked = checkboxes.some((checkbox) => checkbox.checked);

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.disabled = false; // Habilitar los checkboxes marcados
    } else {
      checkbox.disabled = anyCheckboxChecked; // Deshabilitar los demás si hay alguno marcado
    }
  });
}

function habilitaDeshabilitDias(dia, cantidad) {
  const checkboxes = [];

  // Obtener todos los checkboxes para el día
  for (let i = 1; i <= cantidad; i++) {
    const checkbox = document.getElementById(`${dia}${i}`);
    if (checkbox) {
      checkboxes.push(checkbox);
    }
  }

  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
      checkboxes.forEach((otherCheckbox, otherIndex) => {
        if (otherIndex !== index) {
          otherCheckbox.disabled = checkbox.checked;
        }
      });
    });
  });
}

