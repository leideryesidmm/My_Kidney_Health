let NavBarPrescripcion = () => {
    let ms = "";
    let usuario = JSON.parse(localStorage.getItem("datos")).usuario;
    if (usuario == "paciente") {
        ms +=
        '<div class="navbar" id="bann" style="padding:0"><div class="col-2"><a href="principal.html" class="devolverse"><img src="../img/devolverseColor.png" alt=""></a></div>'+
        '<div class="col-8"><h1 class="title-presc">Prescripciones</h1></div>'+
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
        '<select  id="selectCantidad" onchange="generarPrescripciones()"  required>'+
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
        '<label id="data">Fecha Final de la prescripción:</label>'+
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
        col.id = "selectsPrescripcion";
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
        textRango.id="data";
        textRango.for="";
        textRango.innerText ="Rango de Horas:";
        
        var asquer = document.createElement("label");
        asquer.id="data";
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
      if(prescripcionDiaHoy1.recambios.length==2&&(cont==0||cont==2)){
        msg+='<div class=col-lg-1></div>'
      }
      if(prescripcionDiaHoy1.recambios.length==4&&(cont==0||cont==2)){
        msg+='<div class=col-lg-1></div>'
      }
      if(prescripcionDiaHoy1.recambios.length==3){
        msg+='<div class=col-lg-2></div>'
      }
        msg+=`<div class="col-lg-${prescripcionDiaHoy1.recambios.length==1?'12':prescripcionDiaHoy1.recambios.length==3?'8':'5'} card card-menor">`
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
    cont++;
  }
    );
    
    
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
    console.log("llego aqui")
    new DataTable('#recambioTable', {
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
        },
    })
  }

  let datos= async () => {
    let data=new Array();
    let cardinalidad=["Primer Recambio","Segundo Recambio", "Tercer Recambio", "Cuarto Recambio", "Quinto Recambio", "Sexto Recambio"];
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
  document.getElementById("actual").classList.add("active");
  document.getElementById("historico").classList.remove("active");
  prescripcion=await prescripcion
  let recambiosHechos=await finAllRecambiosHechos(prescripcion.cita.idCita);
  console.log("DSc")
  console.log(prescripcion)
  localStorage.setItem("selectPrescripcion", JSON.stringify(prescripcion))
  if(prescripcion.cita==undefined||new Date(prescripcion.cita.fechaFin)<new Date()){
    console.log("no hay prescriocion");
    let msg='<h3>No hay prescripción activa a la fecha</h3><br>'+
    '<a href="agregarPrescripcion.html" class="btn btn-primary">Nueva</a>';
    document.getElementById("cardBody").innerHTML=msg;
    return;
  }
  console.log(await prescripcion)
  let msg="";
  let ordinal=["Primer","Segundo", "Tercer", "Cuarto", "Quinto"];
  
  msg+=`
  <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="btnChequeo">Chequeo Mensual
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" onclick="agregarVisita()">Agregar visita especialista</a></li>
    <li><a class="dropdown-item" onclick="mostrarVisita()">Ver información visita especialista</a></li>
    <li><a class="dropdown-item" onclick="agregarChequeo()">Agregar chequeo mensual</a></li>
    <li><a class="dropdown-item" onclick="mostrarChequeo()">Ver información chequeo mensual</a></li>
  </ul>
</div>
<br>
<br>
  <h4>Prescripcion actual</h4><br>
                <div class="row">
                    <div class="col-sm-6">
                        <h6><b>Fecha inicial:</b> ${prescripcion.cita.fecha==undefined||prescripcion.cita.fecha==null?"Sin fecha de Inicio":formatDate(new Date(prescripcion.cita.fecha))} </h6>
                    </div>
                    <div class="col-sm-6">
                        <h6><b>Fecha final:</b> ${prescripcion.cita.fechaFin==undefined||prescripcion.cita.fechaFin==null?"Sin fecha de fin":formatDate(new Date(prescripcion.cita.fechaFin))} </h6>
                    </div>
                  </div>
                  <div id="prescripcionesDia">
                    `;


                    prescripcion.unionPrescripcionDiasRecambios.forEach(prescripcionDia => {
                      console.log(prescripcionDia)
                      msg+=`<br><div class="row" style="margin:0 auto;">
                      <div class="col"><h6><b>Dias:</b> ${obtenerDias(prescripcionDia.prescripcionDia)}</h6></div>
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
                  
    
                  <div class="row" style="margin:0 auto;">
                  <div class="text-end">
                  ${recambiosHechos==null||recambiosHechos==undefined || recambiosHechos.length==0?'<a href="editarPrescripcion.html" class="btn btn-primary">Editar</a>':""}
                  <a href="recambiosPaciente.html?idCita=${prescripcion.cita.idCita}" class="btn btn-primary">Recambios</a>
                  <a onclick="finalizar(${prescripcion.cita.idCita})" class="btn btn-primary">Finalizar</a>
                  </div>
                  </div>
  `;
  console.log(recambiosHechos);
  document.getElementById("cardBody").innerHTML=msg;
}

let mostrarHistoricoMedico=async (prescripciones) => {
  prescripciones=await prescripciones;
  console.log(prescripciones);
  console.log(localStorage.length);
  let totalSize = 0;

  localStorage.setItem("prescripcionesT",JSON.stringify(prescripciones));
  let msg=`<div class='row' style="margin: 0 auto">
  <table id="historialTable" style="margin: 0 auto" width="100%" >
  <thead>
    <tr>
      <th>#</th>
      <th>Fecha inicico</th>
      <th>Fecha fin</th>
      <th>Orificio de Salida</th>
      <th>Acciones</th>
    </tr>
  </thead>`
    let cont=1;
    msg+="<tbody>"
  prescripciones.forEach(prescripcion => {
      msg+=`<tr>
        <td>${cont}</td>
        <td>${prescripcion.cita.fecha==undefined||prescripcion.cita.fecha==null?"Sin fecha de Inicio":formatDate(new Date(prescripcion.cita.fecha))}</td>
        <td>${prescripcion.cita.fechaFin==undefined||prescripcion.cita.fechaFin==null?"Sin fecha de fin":formatDate(new Date(prescripcion.cita.fechaFin))}</td>
        <td>${CryptoJS.AES.decrypt(prescripcion.cita.orificioSalida,"clave_secreta").toString(CryptoJS.enc.Utf8)}</td>
        <td>
        <a class="icon-link" onclick="antigua(${prescripcion.cita.idCita})"> 
        <img src="../img/ver.png" class="ver"/>
        </a>
        </td>
      </tr>`
  cont++});
  msg+=`</tbody>
  </table>
  </div>
  `;
  
  console.log(await prescripciones)
  document.getElementById("historico").classList.add("active");
  document.getElementById("actual").classList.remove("active");
  document.getElementById("cardBody").innerHTML=msg;
  new DataTable('#historialTable', {
    "order": [[0, 'desc']],
    language: {
        url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
    },
})
}
 function  antigua (idCita) {
  let prescripciones=JSON.parse(localStorage.getItem("prescripcionesT"))
  console.log(prescripciones);
  prescripciones.forEach(prescripcion => {
    console.log(prescripcion)
    if(prescripcion.cita.idCita==idCita)
    mostrarPrescripcionAntiguaMedico(prescripcion)
  });

}
function volver() {
  let prescripciones=JSON.parse(localStorage.getItem("prescripcionesT"))
  mostrarHistoricoMedico(prescripciones)
}
let mostrarPrescripcionAntiguaMedico=async(prescripcion)=>{
  localStorage.setItem("selectPrescripcion", JSON.stringify(prescripcion));
  let ordinal=["Primer","Segundo", "Tercer", "Cuarto", "Quinto"];
  let msg=`<div class="row" style="display:flex">
  <div class="col-2"><a onclick="volver()" class="btn btn-primary">Volver</a></div>
  <div class="col-8"><h4 style="text-align:center">Prescripción antigua</h4></div></div><br>
                <div class="row" style="margin:0 auto;">
                    <div class="col-sm-6">
                        <h6><b>Fecha inicial:</b> ${prescripcion.cita.fecha==undefined||prescripcion.cita.fecha==null?"Sin fecha de Inicio":formatDate(new Date(prescripcion.cita.fecha))} </h6>
                    </div>
                    <div class="col-sm-6">
                        <h6><b>Fecha final:</b> ${prescripcion.cita.fechaFin==undefined||prescripcion.cita.fechaFin==null?"Sin fecha de fin":formatDate(new Date(prescripcion.cita.fechaFin))} </h6>
                    </div>
                  </div>
                  <div id="prescripcionesDia">
                    `;


                    prescripcion.unionPrescripcionDiasRecambios.forEach(prescripcionDia => {
                      console.log(prescripcionDia)
                      msg+=`<br><div class="row" style="margin:0 auto;">
                      <div class="col"><h6><b>Dias:</b> ${obtenerDias(prescripcionDia.prescripcionDia)}</h6></div>
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
                  
    
                  <div class="row" style="margin:0 auto;">
                  <div class="text-end">
                  ${finAllRecambiosHechos(prescripcion.cita.idCita)==null||finAllRecambiosHechos(prescripcion.cita.idCita)==undefined?'<a href="editarPrescripcion.html" class="btn btn-primary">Finalizar</a>':""}
                  <a href="recambiosPaciente.html?idCita=${prescripcion.cita.idCita}" class="btn btn-primary">Recambios</a>
                  </div>
                  </div>
  `;
  document.getElementById("cardBody").innerHTML=msg;
}


function obtenerDias(prescripcionDia) {
  let dias2=["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
  let diasP="";
  let cont=0;
  let cantidad=0;
  let ultimo=0;
 while(cont<dias2.length){
    if(prescripcionDia[dias2[cont]]){
      ultimo=cont;
      if(cont+1==dias2.length){
        if(cantidad==0){return dias2[cont]}
        if(diasP[diasP.length-1]=" ")diasP=diasP.substring(0,diasP.length-2)
        diasP+=" y "+dias2[cont];return diasP;
      }switch (dias2[cont]) {
        case "miercoles":
          diasP+="miércoles, "
          break;          
        case "sabado":
          diasP+="sábado, "
          break;      
        default:
          diasP+=dias2[cont]+", ";
      }
      
      
      cantidad++;
    }
    cont++
    if(cont==dias2.length){
      if(diasP[diasP.length-1]=" "){
        if(cantidad==1){return dias2[ultimo]}
        diasP=diasP.substring(0,diasP.length-(4+dias2[ultimo].length))
        switch (dias2[ultimo]) {
          case "miercoles":
            diasP+=" y "+"miércoles"
            break;          
          case "sabado":
            diasP+=" y "+"sábado"
            break;      
          default:
            diasP+=" y "+dias2[ultimo];
        }
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

let mostrarRecambiosHechosMedico=async()=>{

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

let mostrarChequeo=async()=>{
  let msg="";
  let chequeo=await obtenerUltimoChequeo();
  if(chequeo!=null){
  let nombrePaciente=CryptoJS.AES.decrypt(chequeo.cita.paciente.nombre,"clave_secreta").toString(CryptoJS.enc.Utf8);
  let cedulaPaciente=CryptoJS.AES.decrypt(chequeo.cita.paciente.cedula,"clave_secreta").toString(CryptoJS.enc.Utf8);
  msg +=
          `<div class="modal-dialog modal-lg">
          <div class="modal-content">
          <div class="modal-header">
          <h5 class="modal-title">Seguimiento Mensual</h5>
          <button type="button" class="close" aria-label="Close" onclick="cerrarChequeo()"><span aria-hidden="true" >&times;</span></button>
          </div>
          <div class="modal-body">
          <label class="cedulaPaciente" id="cedulaPaciente"><b>Cédula: </b>`+cedulaPaciente+`</label>&nbsp&nbsp&nbsp&nbsp&nbsp
          <label class="cedulaPaciente" id="cedulaPaciente"><b>Nombre: </b>`+nombrePaciente+`</label>
          <div class="">
          <div class="row">
          <div class="col-6 p-3">
          <div class="row border p-2">
          <div class="centrar-label col-6"><label class="form-label" for="tensionArterial">Tension Arterial</label></div>
          <div class="col-6"><input class="form-control" type="number" name="chequeo" id="tensionArterial" disabled value="`+chequeo.tensionArterial+`"></input></div>
          </div>
          <div class="row mt-2 border p-2">
          <div class="centrar-label col-6"><label class="form-label" for="colesterolTotal">Colesterol Total</label></div>
          <div class="col-6"><input class="form-control" type="number" name="chequeo" id="colesterolTotal" disabled value="`+chequeo.colesterolTotal+`"></input></div>
          </div>
          <div class="row mt-2 border p-2">
          <div class="centrar-label col-6"><label class="form-label" for="glicemia"> Glicemia</label></div>
          <div class="col-6"><input class="form-control" type="number" name="chequeo" id="glicemia" disabled value="`+chequeo.glicemia+`"></input></div>
          </div>
          <div class="row mt-2 border p-2">
          <div class="centrar-label col-6"><label class="form-label" for="triglicerios">Triglicerios:</label></div>
          <div class="col-6"><input class="form-control" type="number" name="chequeo" id="triglicerios" disabled value="`+chequeo.trigliceridos+`"></input></div>
          </div>
          <div class="row mt-2 border p-2">
          <div class="centrar-label col-6"><label class="form-label" for="ldh">LDH:</label></div>
          <div class="col-6"><input class="form-control" type="number" name="chequeo" id="ldh" disabled value="`+chequeo.ldh+`"></input></div>
          </div>
          </div>
          <div class="col-6 p-3">
          <div class="row border p-2">
          <div class="centrar-label col-6"><label class="form-label" for="hemoglobina"> Hemoglobina</label></div>
          <div class="col-6"><input class="form-control" type="number" name="chequeo" id="hemoglobina" disabled value="`+chequeo.hemoglobina+`"></input></div>
          </div>
          <div class="row mt-2 border p-2">
          <div class="centrar-label col-6"><label class="form-label" for="fosforo">Fósforo:</label></div>
          <div class="col-6"><input class="form-control" type="number" name="chequeo" id="fosforo" disabled value="`+chequeo.fosforo+`"></input></div>
          </div>
          <div class="row mt-2 border p-2">
          <div class="centrar-label col-6"><label class="form-label" for="potasio">Potasio:</label></div>
          <div class="col-6"><input class="form-control" type="number" name="chequeo" id="potasio" disabled value="`+chequeo.potasio+`"></input></div>
          </div>
          <div class="row mt-2 border p-2">
          <div class="centrar-label col-6"><label class="form-label" for="nitrogenoUreico">Nitrógeno Uréico:</label></div>
          <div class="col-6"><input class="form-control" type="number" name="chequeo" id="nitrogenoUreico" disabled value="`+chequeo.nitrogenoUreico+`"></input></div>
          </div>
          <div class="row mt-2 border p-2">
          <div class="centrar-label col-6"><label class="form-label" for="hdl">HDL:</label></div>
          <div class="col-6"><input class="form-control" type="number" name="chequeo" id="hdl" disabled value="`+chequeo.hdl+`"></input></div>
          </div>
          </div>
           </div>
          </div>
          </div>
          <div class="modal-footer">
          <button type="button" class="btn btn-warning" onclick="editarChequeo()"data-bs-dismiss="modal">Editar</button>
          <button type="submit" onclick="cerrarChequeo()" class="btn btn-secondary">Cerrar</button>
          </div>
          </div>
          </div>`;

          document.getElementById("mostrarChequeo").innerHTML=msg;
          $("#mostrarChequeo").modal("show");
  }
}


let mostrarVisita=async()=>{
  let msg="";
  let visita=await obtenerUltimaVisita();
  if(visita!=null){
  console.log(visita);
  let nombrePaciente=CryptoJS.AES.decrypt(visita.cita.paciente.nombre,"clave_secreta").toString(CryptoJS.enc.Utf8);
  let cedulaPaciente=CryptoJS.AES.decrypt(visita.cita.paciente.cedula,"clave_secreta").toString(CryptoJS.enc.Utf8);
  let nefrologia=visita.nefrologia;
  let enfermeria=visita.enfermeria;
  let nutricion=visita.nutricion;
  let psicologia=visita.psicologia;
  let trabajoSocial=visita.trabajoSocial;
  let auxiliarAdmisiones=visita.auxiliarAdmisiones;
  let farmacia=visita.farmacia;
  msg +=
          `<div class="modal-dialog">
          <div class="modal-content">
          <div class="modal-header">
          <h5 class="modal-title" >Visitas a Especialista</h5>
          <button type="button" class="close" aria-label="Close" onclick="cerrarVisita()"><span aria-hidden="true" >&times;</span></button>
          </div>
          <div class="modal-body">
          <label class="cedulaPaciente" id="cedulaPaciente"><b>Cédula: </b>` + cedulaPaciente + `</label><br>
          <label class="cedulaPaciente" id="cedulaPaciente"><b>Nombre: </b>` + nombrePaciente + `</label><br>
          <div class="especialistas"><br><form id="checkboxForm">
          <div class="row">
          <div class="col-6"><img src="../img/nefrologo.png" alt="" width="50" height="55" />&nbsp
          ${nefrologia?
            `<input class="form-check-input" type="checkbox" name="visita" value="nefrologia" id="nefrologia" checked disabled>`:`<input class="form-check-input" type="checkbox" name="visita" value="nefrologia" id="nefrologia" disabled>`}
            <label class="form-check-label" for="flexCheckDefault">
              Nefrólogo
            </label>
          </div>
           <div class="col-6"><img src="../img/enfermera.png" alt="" width="50" height="55" />&nbsp 
          ${enfermeria?
          `<input class="form-check-input" type="checkbox" name="visita" value="enfermeria" id="enfermeria" checked disabled>`:`<input class="form-check-input" type="checkbox" name="visita" value="enfermeria" id="enfermeria" disabled>`}
            <label class="form-check-label" for="flexCheckDefault">
              Enfermera
            </label>
          </div>
          </div><br>
          <div class="row">
          <div class="col-6"><img src="../img/nutricion.png" alt="" width="50" height="55" />&nbsp
          ${nutricion?
          `<input class="form-check-input" type="checkbox" name="visita" value="nutricion" id="nutricion" checked disabled>`:`<input class="form-check-input" type="checkbox" name="visita" value="nutricion" id="nutricion" disabled>`}
            <label class="form-check-label" for="flexCheckDefault">
              Nutricionista
            </label>
          </div>
          <div class="col-6"><img src="../img/psicologo.png" alt="" width="50" height="55" />&nbsp
          ${psicologia?
            `<input class="form-check-input" type="checkbox" name="visita" value="psicologia" id="psicologia" checked disabled>`:`<input class="form-check-input" type="checkbox" name="visita" value="psicologia" id="psicologia" disabled>`}
            <label class="form-check-label" for="flexCheckDefault">
              Psicólogo
            </label>
          </div>
          </div><br>
          <div class="row">
          <div class="col-6"><img src="../img/asistencia.png" alt="" width="50" height="55" />&nbsp
          ${trabajoSocial?
            `<input class="form-check-input" type="checkbox" name="visita" value="trabajoSocial" id="trabajoSocial" checked disabled>`:`<input class="form-check-input" type="checkbox" name="visita" value="trabajoSocial" id="trabajoSocial" disabled>`}
            <label class="form-check-label" for="flexCheckDefault">
              Trabajador Social
            </label>
          </div>
          <div class="col-6"><img src="../img/admision.png" alt="" width="50" height="55" />&nbsp
          ${auxiliarAdmisiones?
            `<input class="form-check-input" type="checkbox" name="visita" value="auxiliarAdmisiones" id="auxiliarAdmisiones" checked disabled>`:`<input class="form-check-input" type="checkbox" name="visita" value="auxiliarAdmisiones" id="auxiliarAdmisiones" disabled>`}
            <label class="form-check-label" for="flexCheckDefault">
              Aux. de Admisiones
            </label>
          </div>
          </div><br>
          <div class="row text-center">
          <div class="col-12"><img src="../img/Farmacia.png" alt="" width="50" height="55" />&nbsp
          ${farmacia?
            `<input class="form-check-input" type="checkbox" name="visita" value="farmacia" id="farmacia" checked disabled>`:`<input class="form-check-input" type="checkbox" name="visita" value="farmacia" id="farmacia" disabled>`}
            <label class="form-check-label" for="flexCheckDefault">
              Farmacia
            </label>
          </div>
          </div></form>
          </div>
          </div>
          <div class="modal-footer">
          <button type="button" class="btn btn-warning" onclick="editarVisita()" data-bs-dismiss="modal">Editar</button>
          <button type="button" onclick="cerrarModalMostrarVisita()" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          
          </div>
          </div>
          </div>`;
          document.getElementById("mostrarVisitaEspecialista").innerHTML=msg;
          
          $("#mostrarVisitaEspecialista").modal("show");
  }
}

let agregarVisita=async()=>{
  let msg="";
  let paciente= await encontrarPaciente();
  let cedula=CryptoJS.AES.decrypt(paciente.cedula, "clave_secreta").toString(CryptoJS.enc.Utf8);
  let nombre=CryptoJS.AES.decrypt(paciente.nombre, "clave_secreta").toString(CryptoJS.enc.Utf8);
  console.log(paciente);
  msg+='<div class="modal-dialog">' +
          '<div class="modal-content">' +
          '<div class="modal-header">' +
          '<h5 class="modal-title" >Agregar Visitas a Especialista</h5>' +
          '<button type="button" class="close" aria-label="Close" onclick="cerrarAgregarVisita()">'+
          '<span aria-hidden="true" >&times;</span></button>'+
          '</div>' +
          '<div class="modal-body">' +
          '<label class="cedulaPaciente" id="cedulaPaciente"><b>Cédula: </b>' + cedula + '</label><br>' +
          '<label class="cedulaPaciente" id="cedulaPaciente"><b>Nombre: </b>' + nombre + '</label><br>' +
          '<div class="especialistas"><br><form id="checkboxForm">' +
          '<div class="row">' +
          '<div class="col-6"><img src="../img/nefrologo.png" alt="" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="nefrologia" id="nefrologia">' +
          '  <label class="form-check-label" for="flexCheckDefault">' +
          '    Nefrólogo' +
          '  </label>' +
          '</div>' +
          '<div class="col-6"><img src="../img/enfermera.png" alt="" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="enfermeria" id="enfermeria">' +
          '  <label class="form-check-label" for="flexCheckDefault">' +
          '    Enfermera' +
          '  </label>' +
          '</div>' +
          '</div><br>' +
          '<div class="row">' +
          '<div class="col-6"><img src="../img/nutricion.png" alt="" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="nutricion" id="nutricion">' +
          '  <label class="form-check-label" for="flexCheckDefault">' +
          '    Nutricionista' +
          '  </label>' +
          '</div>' +
          '<div class="col-6"><img src="../img/psicologo.png" alt="" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="psicologia" id="psicologia">' +
          '  <label class="form-check-label" for="flexCheckDefault">' +
          '    Psicólogo' +
          '  </label>' +
          '</div>' +
          '</div><br>' +
          '<div class="row">' +
          '<div class="col-6"><img src="../img/asistencia.png" alt="" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="trabajoSocial" id="trabajoSocial">' +
          '  <label class="form-check-label" for="flexCheckDefault">' +
          '    Trabajador Social' +
          '  </label>' +
          '</div>' +
          '<div class="col-6"><img src="../img/admision.png" alt="" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="auxiliarAdmisiones" id="auxiliarAdmisiones">' +
          '  <label class="form-check-label" for="flexCheckDefault">' +
          '    Aux. de Admisiones' +
          '  </label>' +
          '</div>' +
          '</div><br>' +
          '<div class="row text-center">' +
          '<div class="col-12"><img src="../img/Farmacia.png" alt="" width="50" height="55" />&nbsp<input class="form-check-input" type="checkbox" name="visita" value="farmacia" id="farmacia">' +
          '  <label class="form-check-label" for="flexCheckDefault">' +
          '    Farmacia' +
          '  </label>' +
          '</div>' +
          '</div></form>' +
          '</div>' +
          '</div>' +
          '<div class="modal-footer">' +
          '<button type="button" class="btn btn-secondary" href="prescripcionesM.html" data-bs-dismiss="modal">Cancelar</button>' +
          '<button type="submit"  id="guardarVisita" onclick="crearVisita('+cedula+')" class="btn btn-primary">Guardar</button>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>';
          document.getElementById("visita").innerHTML=msg;
          $("#visita").modal("show");
}

let agregarChequeo=async()=>{
  let msg="";
  let paciente= await encontrarPaciente();
  let cedula=CryptoJS.AES.decrypt(paciente.cedula, "clave_secreta").toString(CryptoJS.enc.Utf8);
  let nombre=CryptoJS.AES.decrypt(paciente.nombre, "clave_secreta").toString(CryptoJS.enc.Utf8);
  msg +=
  '<div class="modal-dialog modal-lg">' +
  '<div class="modal-content">' +
  '<div class="modal-header">' +
  '<h5 class="modal-title">Agregar Seguimiento Mensual</h5>' +
  '<button type="button" class="close" aria-label="Close" onclick="cerrarAgregarChequeo()">'+
  '<span aria-hidden="true" >&times;</span></button>' +
  '</div>' +
  '<div class="modal-body">' +
  '<label class="cedulaPaciente" id="cedulaPaciente"><b>Cédula: </b>' + cedula + '</label>&nbsp&nbsp&nbsp&nbsp&nbsp' +
  '<label class="cedulaPaciente" id="cedulaPaciente"><b>Nombre: </b>' + nombre + '</label>' +
  '<div class="">' +
  '<div class="row">' +
  '<div class="col-6 p-3">' +
  '<div class="row border p-2">' +
  '<div class="centrar-label col-6"><label class="form-label" for="tensionArterial">Tension Arterial</label></div>' +
  '<div class="col-6"><input class="form-control" type="number" name="chequeo" id="tensionArterial" /></div>' +
  '</div>' +
  '<div class="row mt-2 border p-2">' +
  '<div class="centrar-label col-6"><label class="form-label" for="colesterolTotal">Colesterol Total</label></div>' +
  '<div class="col-6"><input class="form-control" type="number" name="chequeo" id="colesterolTotal" /></div>' +
  '</div>' +
  '<div class="row mt-2 border p-2">' +
  '<div class="centrar-label col-6"><label class="form-label" for="glicemia"> Glicemia</label></div>' +
  '<div class="col-6"><input class="form-control" type="number" name="chequeo" id="glicemia" /></div>' +
  '</div>' +
  '<div class="row mt-2 border p-2">' +
  '<div class="centrar-label col-6"><label class="form-label" for="trigliceridos">Trigliceridos:</label></div>' +
  '<div class="col-6"><input class="form-control" type="number" name="chequeo" id="trigliceridos" /></div>' +
  '</div>' +
  '<div class="row mt-2 border p-2">' +
  '<div class="centrar-label col-6"><label class="form-label" for="ldh">LDH:</label></div>' +
  '<div class="col-6"><input class="form-control" type="number" name="chequeo" id="ldh" /></div>' +
  '</div>' +
  '</div>' +
  '<div class="col-6 p-3">' +
  '<div class="row border p-2">' +
  '<div class="centrar-label col-6"><label class="form-label" for="hemoglobina"> Hemoglobina</label></div>' +
  '<div class="col-6"><input class="form-control" type="number" name="chequeo" id="hemoglobina" /></div>' +
  '</div>' +
  '<div class="row mt-2 border p-2">' +
  '<div class="centrar-label col-6"><label class="form-label" for="fosforo">Fósforo:</label></div>' +
  '<div class="col-6"><input class="form-control" type="number" name="chequeo" id="fosforo" /></div>' +
  '</div>' +
  '<div class="row mt-2 border p-2">' +
  '<div class="centrar-label col-6"><label class="form-label" for="potasio">Potasio:</label></div>' +
  '<div class="col-6"><input class="form-control" type="number" name="chequeo" id="potasio" /></div>' +
  '</div>' +
  '<div class="row mt-2 border p-2">' +
  '<div class="centrar-label col-6"><label class="form-label" for="nitrogenoUreico">Nitrógeno Uréico:</label></div>' +
  '<div class="col-6"><input class="form-control" type="number" name="chequeo" id="nitrogenoUreico" /></div>' +
  '</div>' +
  '<div class="row mt-2 border p-2">' +
  '<div class="centrar-label col-6"><label class="form-label" for="hdl">HDL:</label></div>' +
  '<div class="col-6"><input class="form-control" type="number" name="chequeo" id="hdl" /></div>' +
  '</div>' +
  '</div>' +
  ' </div>' +
  '</div>' +
  '</div>' +
  '<div class="modal-footer">' +
  '<button type="button" class="btn btn-secondary" href="prescripcionesM.html" data-bs-dismiss="modal">Cancelar</button>' +
  '<button type="submit" onclick="crearChequeoMensual(' + cedula + ')"" class="btn btn-primary">Guardar</button>' +
  '</div>' +
  '</div>' +
  '</div>';
          document.getElementById("agregarChequeo").innerHTML=msg;
          $("#agregarChequeo").modal("show");
}

let editarChequeo=async()=>{
  let msg="";
  let chequeo=await obtenerUltimoChequeo();
  console.log(chequeo);
  let nombrePaciente=CryptoJS.AES.decrypt(chequeo.cita.paciente.nombre,"clave_secreta").toString(CryptoJS.enc.Utf8);
  let cedulaPaciente=CryptoJS.AES.decrypt(chequeo.cita.paciente.cedula,"clave_secreta").toString(CryptoJS.enc.Utf8);
  msg +=
          `
          <div class="modal-dialog modal-lg">
          <div class="modal-content">
          <div class="modal-header">
          <h5 class="modal-title">Editar Seguimiento Mensual</h5>
          <button type="button" class="close" aria-label="Close" onclick="cerrarEditarChequeo()">
                <span aria-hidden="true" >&times;</span></button>
          </div>
          <div class="modal-body">
          <label class="cedulaPaciente" id="cedulaPaciente"><b>Cédula: </b>`+cedulaPaciente+`</label>&nbsp&nbsp&nbsp&nbsp&nbsp
          <label class="cedulaPaciente" id="cedulaPaciente"><b>Nombre: </b>`+nombrePaciente+`</label>
          <input class="form-control" type="number" name="idChequeo" id="editarIdChequeo" value="`+chequeo.idChequeoMensual+ `" hidden>
          <input class="form-control" type="number" name="idCita" id="idCita" value="`+chequeo.cita.idCita+`" hidden>          
          <div class="">
          <div class="row">
          <div class="col-6 p-3">
          <div class="row border p-2">
          <div class="centrar-label col-6"><label class="form-label" for="tensionArterial">Tension Arterial</label></div>
          <div class="col-6"><input class="form-control" type="number" name="chequeo" id="editarTensionArterial" value="`+chequeo.tensionArterial+`"></input></div>
          </div>
          <div class="row mt-2 border p-2">
          <div class="centrar-label col-6"><label class="form-label" for="colesterolTotal">Colesterol Total</label></div>
          <div class="col-6"><input class="form-control" type="number" name="chequeo" id="editarColesterolTotal" value="`+chequeo.colesterolTotal+`"></input></div>
          </div>
          <div class="row mt-2 border p-2">
          <div class="centrar-label col-6"><label class="form-label" for="glicemia"> Glicemia</label></div>
          <div class="col-6"><input class="form-control" type="number" name="chequeo" id="editarGlicemia" value="`+chequeo.glicemia+`"></input></div>
          </div>
          <div class="row mt-2 border p-2">
          <div class="centrar-label col-6"><label class="form-label" for="triglicerios">Triglicerios:</label></div>
          <div class="col-6"><input class="form-control" type="number" name="chequeo" id="editarTrigliceridos" value="`+chequeo.trigliceridos+`"></input></div>
          </div>
          <div class="row mt-2 border p-2">
          <div class="centrar-label col-6"><label class="form-label" for="ldh">LDH:</label></div>
          <div class="col-6"><input class="form-control" type="number" name="chequeo" id="editarLdh" value="`+chequeo.ldh+`"></input></div>
          </div>
          </div>
          <div class="col-6 p-3">
          <div class="row border p-2">
          <div class="centrar-label col-6"><label class="form-label" for="hemoglobina"> Hemoglobina</label></div>
          <div class="col-6"><input class="form-control" type="number" name="chequeo" id="editarHemoglobina" value="`+chequeo.hemoglobina+`"></input></div>
          </div>
          <div class="row mt-2 border p-2">
          <div class="centrar-label col-6"><label class="form-label" for="fosforo">Fósforo:</label></div>
          <div class="col-6"><input class="form-control" type="number" name="chequeo" id="editarFosforo" value="`+chequeo.fosforo+`"></input></div>
          </div>
          <div class="row mt-2 border p-2">
          <div class="centrar-label col-6"><label class="form-label" for="potasio">Potasio:</label></div>
          <div class="col-6"><input class="form-control" type="number" name="chequeo" id="editarPotasio" value="`+chequeo.potasio+`"></input></div>
          </div>
          <div class="row mt-2 border p-2">
          <div class="centrar-label col-6"><label class="form-label" for="nitrogenoUreico">Nitrógeno Uréico:</label></div>
          <div class="col-6"><input class="form-control" type="number" name="chequeo" id="editarNitrogenoUreico" value="`+chequeo.nitrogenoUreico+`"></input></div>
          </div>
          <div class="row mt-2 border p-2">
          <div class="centrar-label col-6"><label class="form-label" for="hdl">HDL:</label></div>
          <div class="col-6"><input class="form-control" type="number" name="chequeo" id="editarHdl" value="`+chequeo.hdl+`"></input></div>
          </div>
          </div>
           </div>
          </div>
          </div>
          <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="cerrarEditarChequeo()">Cancelar</button>
          <button type="submit" onclick="actualizarChequeo()" class="btn btn-primary">Guardar</button>
          </div>
          </div>
          </div>`;

          document.getElementById("editarChequeo").innerHTML=msg;
          $("#editarChequeo").modal("show");
}


let editarVisita=async()=>{
  let msg="";
  let visita=await obtenerUltimaVisita();
  
  let nombrePaciente=CryptoJS.AES.decrypt(visita.cita.paciente.nombre,"clave_secreta").toString(CryptoJS.enc.Utf8);
  let cedulaPaciente=CryptoJS.AES.decrypt(visita.cita.paciente.cedula,"clave_secreta").toString(CryptoJS.enc.Utf8);
  let nefrologia=visita.nefrologia;
  let enfermeria=visita.enfermeria;
  let nutricion=visita.nutricion;
  let psicologia=visita.psicologia;
  let trabajoSocial=visita.trabajoSocial;
  let auxiliarAdmisiones=visita.auxiliarAdmisiones;
  let farmacia=visita.farmacia;
  msg +=
          `<div class="modal-dialog">
          <div class="modal-content">
          <div class="modal-header">
          <h5 class="modal-title" >Editar Visitas a Especialista</h5>
          <button type="button" class="close" aria-label="Close" onclick="cerrarEditarVisita()"><span aria-hidden="true" >&times;</span></button>
          </div>
          <div class="modal-body">
          <label class="cedulaPaciente" id="cedulaPaciente"><b>Cédula: </b>` + cedulaPaciente + `</label><br>
          <label class="cedulaPaciente" id="cedulaPaciente"><b>Nombre: </b>` + nombrePaciente + `</label><br>
          <input class="form-control" type="number" name="idVisita" id="idVisita" value="`+visita.idVistaEspecialista + `" hidden>
          <input class="form-control" type="number" name="idCita" id="idCita" value="`+visita.cita.idCita+`" hidden>          
          <div class="especialistas"><br><form id="checkboxForm">
          <div class="row">
          <div class="col-6"><img src="../img/nefrologo.png" alt="" width="50" height="55" />&nbsp
          ${nefrologia?
            `<input class="form-check-input" type="checkbox" name="visita" value="nefrologia" id="editarNefrologia" checked >`:`<input class="form-check-input" type="checkbox" name="visita" value="nefrologia" id="editarNefrologia" >`}
            <label class="form-check-label" for="flexCheckDefault">
              Nefrólogo
            </label>
          </div>
           <div class="col-6"><img src="../img/enfermera.png" alt="" width="50" height="55" />&nbsp 
          ${enfermeria?
          `<input class="form-check-input" type="checkbox" name="visita" value="enfermeria" id="editarEnfermeria" checked>`:`<input class="form-check-input" type="checkbox" name="visita" value="enfermeria" id="editarEnfermeria" >`}
            <label class="form-check-label" for="flexCheckDefault">
              Enfermera
            </label>
          </div>
          </div><br>
          <div class="row">
          <div class="col-6"><img src="../img/nutricion.png" alt="" width="50" height="55" />&nbsp
          ${nutricion?
          `<input class="form-check-input" type="checkbox" name="visita" value="nutricion" id="editarNutricion" checked>`:`<input class="form-check-input" type="checkbox" name="visita" value="nutricion" id="editarNutricion" >`}
            <label class="form-check-label" for="flexCheckDefault">
              Nutricionista
            </label>
          </div>
          <div class="col-6"><img src="../img/psicologo.png" alt="" width="50" height="55" />&nbsp
          ${psicologia?
            `<input class="form-check-input" type="checkbox" name="visita" value="psicologia" id="editarPsicologia" checked>`:`<input class="form-check-input" type="checkbox" name="visita" value="psicologia" id="editarPsicologia">`}
            <label class="form-check-label" for="flexCheckDefault">
              Psicólogo
            </label>
          </div>
          </div><br>
          <div class="row">
          <div class="col-6"><img src="../img/asistencia.png" alt="" width="50" height="55" />&nbsp
          ${trabajoSocial?
            `<input class="form-check-input" type="checkbox" name="visita" value="trabajoSocial" id="editarTrabajoSocial" checked>`:`<input class="form-check-input" type="checkbox" name="visita" value="trabajoSocial" id="editarTrabajoSocial">`}
            <label class="form-check-label" for="flexCheckDefault">
              Trabajador Social
            </label>
          </div>
          <div class="col-6"><img src="../img/admision.png" alt="" width="50" height="55" />&nbsp
          ${auxiliarAdmisiones?
            `<input class="form-check-input" type="checkbox" name="visita" value="auxiliarAdmisiones" id="editarAuxiliarAdmisiones" checked>`:`<input class="form-check-input" type="checkbox" name="visita" value="auxiliarAdmisiones" id="editarAuxiliarAdmisiones">`}
            <label class="form-check-label" for="flexCheckDefault">
              Aux. de Admisiones
            </label>
          </div>
          </div><br>
          <div class="row text-center">
          <div class="col-12"><img src="../img/Farmacia.png" alt="" width="50" height="55" />&nbsp
          ${farmacia?
            `<input class="form-check-input" type="checkbox" name="visita" value="farmacia" id="editarFarmacia" checked >`:`<input class="form-check-input" type="checkbox" name="visita" value="farmacia" id="editarFarmacia">`}
            <label class="form-check-label" for="flexCheckDefault">
              Farmacia
            </label>
          </div>
          </div></form>
          </div>
          </div>
          <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="submit"  id="guardarVisita" onclick="actualizarVisita()" class="btn btn-primary">Guardar</button>
          </div>
          </div>
          </div>`;

          document.getElementById("editarVisita").innerHTML=msg;
          $("#editarVisita").modal("show");
}

