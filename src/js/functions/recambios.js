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
  console.log(data);
      let usuario = dato.usuario;
      console.log(usuario);

    console.log(recambios);

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
      console.log(usuario);
      ms+='<div class="row">'+
      '<div class="col-10"></div>'+
      '<div class="col-2">'+
          '<a href="agregarRecambio.html"><img src="../img/nuevo.png" alt="" id="icono"></a>'+
      '</div>'+
  '</div>';
  document.getElementById("agregar").innerHTML=ms;
    }
  }
