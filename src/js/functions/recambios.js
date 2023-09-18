let NavBarRecambios = () => {
  let ms = "";
  let usuario = JSON.parse(localStorage.getItem("datos")).usuario;
  if (usuario == "paciente") {
      ms +=          
      '<div class="navbar" id="bann" style="padding:0"><div class="col-2"><a href="principal.html" class="devolverse"><img src="../img/devolverseColor.png" alt="" id="icono"></a></div>'+
      '<div class="col-8"><h1 class="title-principal-app">Mis Recambios</h1></div>'+
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
            '<h1>Historial de Recambios</h1>'+
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

let listRecambios = async (recambios) => {
    recambios = await recambios;
    let msg = "";
    let cont = 1;

    let data = localStorage.getItem("datos");
  let dato=JSON.parse(data);
      let usuario = dato.usuario;


    recambios.forEach((recambio) => {
      fecha=recambio.fecha.split("T");
      msg +='<div class="accordion-item">'
      +'<h2 class="accordion-header" id="flush-heading'+cont+'">'
      +'    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"'
      +'        data-bs-target="#collapseOne'+cont+'" aria-expanded="false" aria-controls="collapseOne'+cont+'" id="nombre">'
      +'        Recambio '+fecha[0]
      +'    </button>'
      +'</h2>'
      +'<div id="collapseOne'+cont+'" class="accordion-collapse collapse" aria-labelledby="headingOne'+cont+'"'
      +'    data-bs-parent="#accordionExample">'
      +'    <div class="accordion-body">'
      +'        <div class="horaDren">'
      +'            <p><strong>Hora drenaje:</strong></p>'
      +'            <p class="hora" id="hora">'
      +'                '+fecha[1]
      +'            </p>'
      +'        </div>'
      +'        <div class="concentr">'
      +'            <p><strong>Concentración:</strong></p>'
      +'            <p class="concentracion" id="concentracion">'
      +'                '+recambio.recambio.concentracion+' %'
      +'            </p>'
      +'        </div>'
      +'        <div class="vol">'
      +'            <p><strong>Volumen:</strong></p>'
      +'            <p class="volumen" id="volumen">'
      +'               2.000 ml'
      +'            </p>'
      +'        </div>'
      +'        <div class="drenaj">'
      +'            <p><strong>Drenaje:</strong></p>'
      +'            <p class="drenaje" id="drenaje">'
      +'            '+(CryptoJS.AES.decrypt(decodeURIComponent(recambio.drenajeDialisis), "clave_secreta").toString(CryptoJS.enc.Utf8))
      +'            </p>'
      +'        </div>'
      +'        <div class="balan">'
      +'            <p><strong>Balance:</strong></p>'
      +'            <p class="balance" id="balance">'
      +'                '+(parseInt(CryptoJS.AES.decrypt(decodeURIComponent(recambio.drenajeDialisis), "clave_secreta").toString(CryptoJS.enc.Utf8),10)-2000)
      +'            </p>'
      +'        </div>'
      +'        <div class="liquid">'
      +'            <p><strong>Características del líquido:</strong></p>'
      +'            <p class="liquido" id="liquido">'
      +'                '+CryptoJS.AES.decrypt(decodeURIComponent(recambio.caracteristicaLiquido), "clave_secreta").toString(CryptoJS.enc.Utf8)

      +'            </p>'
      +'        </div>'
      +'        <div class="orif">'
      +'            <p><strong>Estado del orificio:</strong></p>'
      +'            <p class="orificio" id="orificio">'
      +'                '+CryptoJS.AES.decrypt(decodeURIComponent(recambio.orificioSalida), "clave_secreta").toString(CryptoJS.enc.Utf8)
      +'            </p>'
      +'        </div>';
          if(usuario=="paciente"){
              msg+='<div class="btn-editar-container">'
      +'            <a href="editarRecambio.html" class="btn-editar"><img src="../img/editaraler.png"></a>'
      +'            <div>'
      +'                <a href="" class="btn-inhabilitar" data-bs-toggle="modal"'
      +'                    data-bs-target="#eliminarrecambio"><img src="../img/inhabilitar.png" alt=""'
      +'                        id="inhabilitar-rec"></a>'
      +'            </div>'
      +'        </div>';
              }
              msg+='</div>'
      +'    <div class="accordion-item" id="acordeon1">'
      +'        <h2 class="accordion-header" id="headingTwo">'
      +'        </h2>'
      +'    </div>'
      +'</div>'
      +'</div>';
      cont++;
    });
    document.getElementById("accordionExample").innerHTML = msg;
  
    let ms="";
    if(usuario=="paciente"){
      ms+='<div class="row">'+
      '<div class="col-10"></div>'+
      '<div class="col-2">'+
          '<a href="agregarRecambio.html"><img src="../img/nuevo.png" alt="" id="icono"></a>'+
      '</div>'+
  '</div>';
  document.getElementById("agregar").innerHTML=ms;
    }
  }

  let mostrarRecambios=async(recambiosHechos)=>{
    recambiosHechos=await recambiosHechos;
    prescripcion=JSON.parse(localStorage.getItem("selectPrescripcion"));
    console.log(recambiosHechos)
    let fechas=[];
    if(new Date(recambiosHechos[0].recambio.prescripcionDia.cita.fechaFin)>new Date()){
      fechas=obtenerFechas(new Date(recambiosHechos[0].recambio.prescripcionDia.cita.fecha), new Date(),recambiosHechos,prescripcion)
    }else{
      fechas=obtenerFechas(new Date(recambiosHechos[0].recambio.prescripcionDia.cita.fecha), new Date(recambiosHechos[0].recambio.prescripcionDia.cita.fechaFin),recambiosHechos,prescripcion)
    }
      console.log(fechas);
      let msg=`<table id="tableRecambios" name="tableRecambios" style="border:2px solid">
      <thead>
        <th style="border:2px solid">Fecha</th>
        <th style="border:2px solid">Hora</th>
        <th style="border:2px solid">Concentación</th>
        <th style="border:2px solid">Drenaje</th>
        <th style="border:2px solid">Balance</th>
        <th style="border:2px solid">Total Ultrafiltrado</th>
      </thead>
      <tbody>
      `
      let cont=0;
      fechas.forEach(fecha => {
        if(true){
        let ultrafiltrado=0;
        let ciclo=0;
        if(fecha.prescripOriginal==undefined||fecha.prescripOriginal==null){
        }else{
        msg+=`
        <tr style="border-top:2px solid">
          <td style="border:2px solid;background-color:#B2EAF2" rowspan="${fecha.prescripOriginal.recambios.length}">
          <b>${fecha.date}</b>
          </td>
        `
        fecha.prescripOriginal.recambios.forEach(recambiod => {
          
          console.log(fecha)
          
          if(fecha.recambios.length>0){
            let hecho=false;
            fecha.recambios.forEach(recam=>{
              ultrafiltrado+=decodeURIComponent(CryptoJS.AES.decrypt(recam.drenajeDialisis, 'clave_secreta').toString(CryptoJS.enc.Utf8))-2000;
            })
            fecha.recambios.forEach(recam=>{
              
              console.log("id recambio hecho"+recam.recambio.idRecambio)
              console.log("id recambio prescrito"+recambiod.idRecambio)
              if(recam.recambio.idRecambio==recambiod.idRecambio){
                hecho=true;
                msg+=`
              <td style="border:1px solid;background-color:#53DA44">${new Date(recam.fecha_real).toLocaleTimeString()}</td>
              <td style="border:1px solid;background-color:#53DA44">${recambiod.concentracion}</td>
              <td style="border:1px solid;background-color:#53DA44">${decodeURIComponent(CryptoJS.AES.decrypt(recam.drenajeDialisis, 'clave_secreta').toString(CryptoJS.enc.Utf8))}</td>
              <td style="border:1px solid;background-color:#53DA44">${decodeURIComponent(CryptoJS.AES.decrypt(recam.drenajeDialisis, 'clave_secreta').toString(CryptoJS.enc.Utf8))-2000}</td>
              `
              }
              
              })
              if(hecho==false){
                msg+=`
                <td style="border:1px solid;" colspan="4"><h5 id="sinHacer"><i>Sin hacer.</i></h5></td>
                `
              }
          }else{
            msg+=`
                <td style="border:1px solid;" colspan="4"><h5 id="sinHacer"><i>Sin hacer.</i></h5></td>
                `
          }
         
        
        if(ciclo==0)msg+=`<td rowspan="${fecha.prescripOriginal.recambios.length}" style="border:2px solid">${ultrafiltrado}</td>
        `
        
        ciclo++;
        msg+="</tr>"
        });}} cont++
      }); 
      msg+=`</tbody>
      </table>`;
      document.getElementById("recambios").innerHTML=msg;
      exportarTabla();
      var tableData = [
        {
            fecha: "2023-08-26",
            hora: "2023-08-26T03:24:00",
            concentracion: 2.5,
            drenaje: 2300,
            balance: 300,
            totalUltrafiltrado: 300
        },
        // Agrega más filas de datos según sea necesario
    ];
    // Configura Tabulator
    

  }
function obtenerFechas(fechaIni,fechaFin,recambios,prescripcion){
  var datesArray = [];
  var currentDate = new Date(fechaIni);
  console.log(prescripcion)
  var days = ["domingo","lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];

  while (currentDate <= fechaFin) {
    var dateObj = {
      date: currentDate.toISOString().slice(0, 10), // Formato yyyy-mm-dd
      dayOfWeek: days[currentDate.getDay()] // Obtener el día de la semana
    };
    
    prescripcion.unionPrescripcionDiasRecambios.forEach(prescripcionDia => {
      if(prescripcionDia.prescripcionDia[days[currentDate.getDay()]]==true){
        dateObj.prescripOriginal=prescripcionDia;
      }
    });
    let recamb=[];
    recambios.forEach(recambio => {
      let fecha_real=new Date(recambio.fecha_real)
      fecha_real.setHours(0,0,0,0)
      currentDate.setHours(0,0,0,0)
      if(currentDate.getTime()===fecha_real.getTime()){
        recamb.push(recambio)
      }
    });
    dateObj.recambios=recamb;



    datesArray.push(dateObj);

    // Avanzar al siguiente día
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return datesArray;
}

function exportarTabla() {
  const table = document.getElementById('tableRecambios');
  const exportButton = document.getElementById('exportarBoton');

  exportButton.addEventListener('click', () => {
    const wb = XLSX.utils.table_to_book(table, { sheet: 'Recambios' });

    

    // Verificar si la hoja de cálculo contiene celdas
    if (wb.Sheets && wb.Sheets['Recambios']) {
      // Obtener el rango de celdas
      const range = XLSX.utils.decode_range(wb.Sheets['Recambios']['!ref']);

      // Aplicar el estilo a todas las celdas
      for (let R = range.s.r; R <= range.e.r; ++R) {
        for (let C = range.s.c; C <= range.e.c; ++C) {
          const cell_address = { r: R, c: C };
          const cell = wb.Sheets['Recambios'][XLSX.utils.encode_cell(cell_address)];
        }
      }

      XLSX.writeFile(wb, 'Recambios.xlsx');
    } else {
      console.error('La hoja de cálculo está vacía o no contiene la celda A1');
    }
  });
}

