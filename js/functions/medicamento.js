  let usuario = JSON.parse(localStorage.getItem("datos")).usuario;
let NavBarMedicamento = () => {
  let ms = "";
  
  if (usuario == "paciente") {
      ms +=          
      '<nav class="navbar" id="bann" style="padding:0"><div class="col-2"><a href="principal.html" class="devolverse"><img src="../img/devolverseColor.png" alt="Ir atrás"></a></div>'+
      '<div class="col-8"><h1 class="title-principal-app">Medicamentos</h1></div>'+
      '<div class="col-2"></div></nav>';
  }
  else {
      ms +=`<nav id="nav" class=" navbar-expand-lg navbar-light">
      <div class="row">
          <div class="col-1 sinlogomovil" style="padding: 0,0,0,0;">
              <a href="principal.html" class="devolverse"><img src="../img/devolverseColor.png" alt="Ir atrás" id="icono"></a>
          </div>
          <div class="col-3 sinlogomovil2" style="padding: 0,0,0,0;">
              <a href="principal.html" class="devolverse"><img src="../img/devolverseColor.png" alt="Ir atrás" id="icono"></a>
          </div> 
          <div class="col-2 sinlogomovil">
              <div class="logo"><img src="../img/logo3.png" alt="Logo app"></div>
          </div>
          <div class="col-6">
              <div class="title">
                <h1>Medicamentos</h1>
              </div>
          </div>
          <div class="col-3" style="padding: 0,0,0,0; text-align: right;">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" style="padding-right: 0px; text-align: right;" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto align-items-center ">
                <li class="nav-item active">
                  <a id="text" class="nav-link" href="pacientes.html">Pacientes<span class="sr-only"></span></a>
                </li>
                ${usuario=='administrador'?'<li class="nav-item active"><a id="text" class="nav-link" href="administrador.html">Profesionales<span class="sr-only"></span></a></li>':''}

                <div class="d-flex align-items-center">
                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />'+
                </svg></li>
                <li class="nav-item ml-1 active">
                  
                    <button class="btn btn dropdown-toggle" type="button" id="nombreUsuario" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                    </button>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#nuevacontrasenia">Cambiar 
                        Contraseña</a>
                      <a class="dropdown-item" href="login.html" onclick="logout()">Cerrar sesión</a>
                    </div>
                  </li></div>
              </ul>
            </div>

          </div>
      </div>    
      
        
          

    </nav>`;
  }
  document.getElementById("banner").innerHTML = ms;
}

let listMedicamentos = async (medicamentos) => {
  
if(usuario=="paciente"){
  let msge="";
  msge+=
  ' <a class="btn-flotante" href="addMedicamento.html"><button id="redondo" class="btn text-white"><h3>+</h3></button></a>';
  document.getElementById("flotante").innerHTML=msge;
  }
  medicamentos = await medicamentos;
  let msg = "";
  let ms="";
  let cont = 1;
  

      if(medicamentos!=null && medicamentos.length>0){
        let medicamentosRecetadosHTML = ""; 
        let medicamentosNoRecetadosHTML = ""; 
  medicamentos.forEach((medicamento) => {
     let medicamentoHTML  =
     '<div class="accordion" id="accordionExample">'+
      '<div class="accordion-item">' +
      '<h2 class="accordion-header" id="flush-heading' + cont + '">' +
      '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse' +
      cont +
      '" aria-expanded="false" aria-controls="flush-collapse' +
      cont +
      '">' +
      medicamento.nombre +
      "</button>" +
      "</h2>" +
      '<div id="flush-collapse' +
      cont +
      '" class="accordion-collapse collapse" aria-labelledby="flush-heading' + cont + '" data-bs-parent="#acordeon1">' +
      '<div class="accordion-body">' +
      '<div class="descrp-med">' +
      "<p><strong>Descripción:</strong></p>" +
      '<p class="descripcion" id="descripcion">' +
      medicamento.descripcion +
      "</div>" +
      '<div class="via">' +
      "<p><strong>Vía administración:</strong></p>" +
      '<p class="via_administracion" id="via_administracion">' +
      medicamento.viaAdministracion +
      "</div>" +
      '<div class="concentration">' +
      "<p><strong>Concentración:</strong></p>" +
      '<p class="concentracion" id="concentracion">' +
      medicamento.concentracion +
      "</p>" +
      "</div>" +
      '<div class="fechaIni">' +
      "<p><strong>Fecha inicio: </strong></p> " +
      '<p class="fecha_inicio" id="fecha_inicio">' +
      " " + medicamento.fechaIni+"</p>" +
      "</div> " +
      '<div class="fechaFin">' +
      "<p><strong>Fecha Finalización: </strong></p> " +
      '<p class="fecha_fin" id="fecha_fin">' + 
      " " + medicamento.fechaFin+"</p>" +
      "</div>" +
      '<div class="toma">' +
      "<p><strong>Tomas:</strong></p>" +
      '<p class="tomas" id="tomas">' +
      medicamento.tomas +
      "</p>" +
      "</div>";
      if(usuario==="paciente"){
        medicamentoHTML+='<div class="btn-editar-container">' +
      '<a href="editarMedicamento.html?idFormulaMedicamento='+medicamento.idFormulaMedicamento+'" class="btn-editar"><img src="../img/editaraler.png" alt="Editar Medicamento" class="imagen-crecible-iconos"></a>' +
      '<div><a href="" class="btn-inhabilitar" data-bs-toggle="modal" data-bs-target="#inhabilitarMedicamento' +
      cont +
      '" ><img src="../img/inhabilitar.png" alt="Inhabilitar Medicamentos" id="inhabilitar" class="btn-inhabilitar imagen-crecible-iconos"></a></div>' +
      "</div>" +
      '<div class="modal" tabindex="-1" id="inhabilitarMedicamento' +
      cont +
      '">' +
      '<div class="modal-dialog">' +
      '<div class="modal-content">' +
      '<div class="modal-header">' +
      '<h5 class="modal-title">Eliminar Medicamento</h5>' +
      '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
      "</div>" +
      '<div class="modal-body">' +
      "<p>¿Está seguro(a) de eliminar este medicamento?</p>" +
      '<label  class="medicamento" id="medicamento">'+medicamento.nombre+'</label>' +
      "</div>" +
      '<div class="modal-footer">' +
      '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>' +
      '<button type="submit" onclick="eliminarMedicamento('+medicamento.idFormulaMedicamento+')" class="btn btn-danger">Eliminar</button>' +
      "</div>" +
      "</div>";}
      medicamentoHTML+="</div>"+
      "</div>"+
      "</div>"+ 
      "</div>" +
      "</div>";
    
      if (medicamento.recetado == true) {
        medicamentosRecetadosHTML += medicamentoHTML;
      } else {
        medicamentosNoRecetadosHTML += medicamentoHTML;
      }
      cont++;
    });
    console.log(medicamentosRecetadosHTML);
    console.log(medicamentosNoRecetadosHTML);
    if (medicamentosRecetadosHTML !== "") {
      msg += '<h2>Medicamentos Recetados</h2><br>' + medicamentosRecetadosHTML;
    }
    if (medicamentosNoRecetadosHTML !== "") {
      msg +=
        '<br><h2>Otros Medicamentos</h2><br>' + medicamentosNoRecetadosHTML;
    }
  } else {
    msg +=
      '<b><h3 class="sinMedicamentos">No tiene medicamentos registrados. <h3></b>';
  }

  ms += msg + "</div>";


  document.getElementById("acordeon1").innerHTML = ms;
};

let formatearFechas= function(fechaOriginal){

// Convertir la fecha a un objeto Date
const fecha = new Date(fechaOriginal);

// Obtener los componentes de la fecha
const year = fecha.getFullYear();
const month = ('0' + (fecha.getMonth() + 1)).slice(-2);
const day = ('0' + fecha.getDate()).slice(-2);

// Crear la fecha formateada
const fechaFormateada = `${year}-${month}-${day}`;
return fechaFormateada;
}

      


  
