let NavBarPrescripcion = () => {
    let ms = "";
    let usuario = JSON.parse(localStorage.getItem("datos")).usuario;
    if (usuario == "paciente") {
        ms +=
            '<div class="col-2"><a href="principal.html" class="devolverse"><img src="../img/devolverseColor.png" alt="" id="icono"></a></div>' +
            '<div class="col-8"><h1 class="title-principal-app">Prescripciones</h1></div>' +
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
            '<li>' +
            '<div class="dropdown">' +
            '<button class="btn btn dropdown-toggle" type="button" id="nombreUsuario" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>' +
            '<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">' +
            '<a class="dropdown-item" href="#">Cambiar Contraseña</a>' +
            '<a class="dropdown-item" onclick="logout()">Cerrar sesión</a>' +
            '</div></div>' +
            '</li>' +
            '</ul></nav>' +
            '</div>' +
            '</div>' +
            '</header>';
    }
    document.getElementById("navbar").innerHTML = ms;
}

let agregarPrescripcion = async () => {
    let msg = "";

    msg += '<div class="form-container">' +
        '<h2>Agregar Prescripción</h2>' +
        '<p id="campos"><b>*</b> Campos requeridos</p>' +
        '<form id="paciente-form" onsubmit="actualizarPaciente(event)">';
    msg +=
        '<div class="form-row">' +
        '<div class="form-column">' +
        '<label for="cantidad" id="data">Cantidad de Prescripciones:</label>' +
        '<br>' +
        '<input type="text" class="cantidad" id="cantidad" name="cantidad" placeholder="Digite la cantidad de prescripciones">' +
        '</div>' +
        
        '</div>' +
        '<div class="form-row">' +
        '<div class="form-column">' +
        '<label for="recambios" id="data">Cantidad de Recambios:<label id="asq">*</label></label>' +
        '<br>' +
        '<select class="custom-select" id="selectedCantidad" onchange="generarSelects()" >'+
                '<option value="0">0</option>'+
                '<option value="1">1</option>'+
                '<option value="2">2</option>'+
                '<option value="3">3</option>'+
                '<option value="4">4</option>'+
                '<option value="5">5</option>'+
              '</select>'+
        '</div>' +
        '<div class="form-column">' +
        '<label for="rango" id="data">Rango de Recambios:<label id="asq">*</label></label>' +
        '<br>' +
        '<input type="text" class="rango" id="rango" name="rango" placeholder="Horas" required>' +
        '</div>' +

        '</div>' +
        '<div class="form-row">' +
        '<div class="form-column">' +
        '<div id="selectContainer" class="margentop"></div>'+
        '</div>' +
        '<div class="form-column">' +
        '<label for="orificio" id="data">Orificio:</label>' +
        '<br>' +
              '<select id="selectedOrificio" class="custom-select">'+
                '<option value="">Seleccione...</option>'+
                '<option value="perfecto">Perfecto</option>'+
                '<option value="bueno">Bueno</option>'+
                '<option value="equivoco">Equívoco</option>'+
                '<option value="infeccionAguda">Infección Aguda</option>'+
                '<option value="infeccionCronica">Infeccion Crónica</option>'+
                '<option value="trauma">Trauma</option>'+
              '</select>'+
        '</div>' +
        '<div class="form-column" id="enf">' +
        '<div class="nocheSeca">' +
        '<label for="nocheSeca" id="data2">Noche Seca: &nbsp</label>' +
        '<input type="checkbox" id="nocheSeca" name="nocheSeca">' +
        '</div>' +               
        
        '</div>' + 
        '<div class="form-column" id="enf">' +
        '<div class="nocheSeca">' +
        '<label for="nocheSeca" id="data2"> &nbsp</label>' +
        '</div>' +                      
        
        '</div>' + 
        '<div class="form-row">' +
        '<div class="nocheSeca">' +
        '<label for="nocheSeca" id="data2">Lunes:&nbsp</label>' +
        '<input type="checkbox" id="lunes" name="dias">&nbsp' +
        '<label for="nocheSeca" id="data2">Martes: &nbsp</label>' +
        '<input type="checkbox" id="martes" name="dias">&nbsp' +
        '<label for="nocheSeca" id="data2">Miercoles: &nbsp</label>' +
        '<input type="checkbox" id="miercoles" name="dias">&nbsp' +
        '<label for="nocheSeca" id="data2">Jueves: &nbsp</label>' +
        '<input type="checkbox" id="jueves" name="dias">&nbsp' +
        '<label for="nocheSeca" id="data2">Viernes: &nbsp</label>' +
        '<input type="checkbox" id="viernes" name="dias">&nbsp' +
        '<label for="nocheSeca" id="data2">Sábado: &nbsp</label>' +
        '<input type="checkbox" id="sabado" name="dias">&nbsp' +
        '<label for="nocheSeca" id="data2">Domingo: &nbsp</label>&nbsp' +
        '<input type="checkbox" id="domingo" name="dias">&nbsp' +
        '</div>' +              
        
        '</div>' + 
        
        '<div class="buttons">' +
        '<div class="btn-save">' +
        '<button onclick="cancelar()" class="cancelar">Cancelar</button>' +
        '</div>' +
        '<div class="btn-save">' +
        '<button type="submit" class="guardarPac">Actualizar</button>' +
        '</div>' +
        '</div>';


msg +=
    '</form>';

document.getElementById("container").innerHTML = msg;
           
  }


  function generarSelects() {
    var cantidad = document.getElementById("selectedCantidad").value;
    var container = document.getElementById("selectContainer");
    container.className = "row";
    container.innerHTML = ""; // Limpiar el contenedor antes de generar nuevos selects

    for (var i = 0; i < cantidad; i++) {
      var labelContainer = document.createElement("div");
      labelContainer.className = "select-container";
      labelContainer.className = "";
      labelContainer.className = "col-5 centrar-label mt-2";

      var selectContainer = document.createElement("div");
      selectContainer.className = "select-container";
      selectContainer.className = "col-3";

      var select = document.createElement("select");
      select.className = "form-control";
      var id = "concentracion" + (i + 1); // ID único para el select
      select.id = id;

      var opciones = ["Seleccione...", "1.25%", "2.5%", "4.25%"];

      for (var j = 0; j < opciones.length; j++) {
        var option = document.createElement("option");
        option.value = opciones[j];
        option.text = opciones[j];
        select.appendChild(option);
      }

      var label = document.createElement("label");
      label.className = "form-label";

      label.for = id;
      label.innerText = "Concentración " + (i + 1) + ":"; // Texto del label

      labelContainer.appendChild(label);
      selectContainer.appendChild(select);

      container.appendChild(labelContainer);
      container.appendChild(selectContainer);
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

let mostrarPrescripcion= async (prescripcion, fecha, recambios) => {
    recambios=await recambios;
    if(recambios==null){
        let msg="";
        msg+='<h3>No hay recambios prescritos para la fecha: '+new Date(fecha).toLocaleDateString()+'</h3>';
        document.getElementById("recambios").innerHTML=msg;
    }
    let prescripcionDiaHoy1=await prescripcionDiaFecha(prescripcion, fecha)
    localStorage.setItem('prescripcionActual', JSON.stringify(prescripcionDiaHoy1));
    prescripcion=await prescripcion;
    let msg="";
    let accion="";
    let hoy=new Date()
    let datos1=await datos();
    msg+='<div class="row align-items-center">';
    let cont=0;
    prescripcionDiaHoy1.recambios.forEach(recambio => {
        msg+='<div class="col-lg-5 card card-menor">'
        +'<div class="row">'
        +`    <div class="col-2 estado" style="`;
        if(recambios[cont]!=null){
            msg+='background-color:rgb(11, 158, 11);">';
            if(fecha.getFullYear() === hoy.getFullYear() &&
            fecha.getMonth() === hoy.getMonth() &&
            (fecha.getDate() === hoy.getDate()||fecha.getDate() === hoy.getDate()-1)){
                accion='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">'
                +'<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>'
                +'<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>'
                +'</svg>'
                +'<a style="color:black" href="editarRecambio.html?idRecambioHecho='+recambios[cont].idRecambioHecho+'"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">'
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
                accion='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">'
                +'<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>'
                +'<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>'
                +'</svg>';
            }
            }
        }else{
            if(fecha.getFullYear() === hoy.getFullYear() &&
            fecha.getMonth() === hoy.getMonth() &&
            fecha.getDate() === hoy.getDate()){
                msg+='background-color:#e6b216;">';
                accion='<a style="color:black" href="agregarRecambio.html?idRecambio='+recambio.idRecambio+'"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">'
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
                msg+='background-color:#f73c3c;">';
            }else{
                if(fecha.getFullYear() === hoy.getFullYear() &&
                fecha.getMonth() === hoy.getMonth() &&
                fecha.getDate() === (hoy.getDate()-1)){
                    msg+='background-color:rgb(252, 168, 59);">';
                    accion='<a style="color:black" href="agregarRecambio.html?idRecambio='+recambio.idRecambio+'"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">'
                    +'<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'
                    +'<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>'
                    +'</svg></a>';
                } else{
                    msg+='background-color:slategray;">';
                }
            }
          }
        }
        'background-color:#e6b216;">'
        
        
        msg+='        <div class="text-center">'
        +'            <h6 id="vertical">'
        +'                H'
        +'            </h6>'
        +'            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">'
        +'                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'
        +'                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>'
        +'              </svg>'
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

