let principal =()=>{
    let ms="";
    let usuario = JSON.parse(localStorage.getItem("datos")).usuario;
    if(usuario=="paciente"){
        ms+=
        '<div class="col-2"><input type="image" class="logo-principal" src="../img/logo3.png"></div>'+
        '<div class="col-8"><h1 class="title-principal-app">Mi Salud Renal</h1></div>'+
        '<div class="col-2"><input type="image" class="logout" src="../img/log-out-white.png" onclick="logout()"></div>';
    }
    else{
        ms+=
        '<div class="col-2"><a href="pacientes.html" class="atras"><img src="../img/devolverseColor.png" alt="" id="icono"></a></div>'+
        '<div class="col-8"><h1 class="title-principal-app">Mi Salud Renal</h1></div>'+
        '<div class="col-2"><input type="image" class="logout" src="../img/log-out-white.png" onclick="logout()"></div>';
    }
    document.getElementById("navbar").innerHTML=ms;


        let msg="";

        
if(usuario=="paciente"){
    msg+=   
  '<br>'+
  '<div>'+
  '<div class="row">'+
  '<div class="col-md-6 col-12 my-sm-2 d-flex flex-column align-items-center">'+
  '<div class="grid-item">'+
      '<div class="d-flex justify-content-center align-items-center" id="container">'+
          '<a href="perfil.html"><img src="../img/perfil.png" alt=""></a>'+
      '</div>'+
      '<div class="grid-item-content" class="col-md-6 col-12  text-center" id="textcontainer">'+
          '<h5><b>Mi Perfil</b></h5>'+
      '</div>'+
      '<div class="description" class="col-md-6 col-12 text-center" >'+
      '<p>En esta sección podrá ver su información personal y médica<p>'+
      '</div>'+
      '</div>'+
  '</div>'+
  '<div class="col-md-6 col-12 my-sm-2 d-flex flex-column align-items-center">'+
  '<div class="grid-item">'+
      '<div class="d-flex justify-content-center align-items-center" id="container">'+
          '<a href="prescripciones.html"><img src="../img/prescripcion.png" alt=""></a>'+
      '</div>'+
      '<div class="grid-item-content" class="col-md-6 col-12 text-center"  id="textcontainer">'+
          '<h5><b>Prescripciones</b></h5>'+
      '</div>'+
      '<div class="description" class="col-md-6 col-12 text-center" >'+
      '<p>En esta sección podrá ver la prescipción actual agregar recambios<p>'+
      '</div>'+
      '</div>'+
  '</div>'+
'</div>'+


'<div class="row">'+
  '<div class="col-md-6 col-12 my-sm-2 d-flex flex-column align-items-center">'+
  '<div class="grid-item">'+
      '<div class="d-flex justify-content-center align-items-center" id="container">'+
          '<a href="medicamento.html"><img src="../img/medicamentos.png" alt=""></a>'+
      '</div>'+
      '<div class="grid-item-content" class="col-md-6 col-12  text-center" id="textcontainer">'+
          '<h5><b>Medicamentos</b></h5>'+
      '</div>'+
      '<div class="description" class="col-md-6 col-12 text-center" >'+
      '<p>En esta sección podrá ver, agregar o modificar los medicamentos<p>'+
      '</div>'+
      '</div>'+
  '</div>'+
  '<div class="col-md-6 col-12 my-sm-2 d-flex flex-column align-items-center">'+
  '<div class="grid-item">'+
      '<div class="d-flex justify-content-center align-items-center" id="container">'+
          '<a href="recambios.html"><img src="../img/recambios.png" alt=""></a>'+
      '</div>'+
      '<div class="grid-item-content" class="col-md-6 col-12 text-center"  id="textcontainer" >'+
          '<h5><b>Historial</b></h5>'+
      '</div>'+
      '<div class="description" class="col-md-6 col-12 text-center" >'+
      '<p>En esta sección podrá ver el historial de recambios<p>'+
      '</div>'+
  '</div>'+
  '</div>'+
'</div>';
}else{
    msg+=   
    '<br>'+
    '<div>'+
    '<div class="row">'+
    '<div class="col-md-6 col-12 my-sm-2 d-flex flex-column align-items-center">'+
        '<div class="d-flex justify-content-center align-items-center" id="container2">'+
            '<a href="perfil.html"><img src="../img/perfil.png" alt=""></a>'+
        '</div>'+
        '<div class="col-md-6 col-12  text-center" id="textcontainer2">'+
            '<h5><b>Información del paciente</b></h5>'+
        '</div>'+
    '</div>'+
    '<div class="col-md-6 col-12 my-sm-2 d-flex flex-column align-items-center">'+
        '<div class="d-flex justify-content-center align-items-center" id="container2">'+
            '<a href="prescripciones.html"><img src="../img/prescripcion.png" alt=""></a>'+
        '</div>'+
        '<div class="col-md-6 col-12 text-center"  id="textcontainer2">'+
            '<h5><b>Prescripciones</b></h5>'+
        '</div>'+
    '</div>'+
  '</div>'+
  
  
  '<div class="row">'+
    '<div class="col-md-6 col-12 my-sm-2 d-flex flex-column align-items-center">'+
        '<div class="d-flex justify-content-center align-items-center" id="container2">'+
            '<a href="medicamento.html"><img src="../img/medicamentos.png" alt=""></a>'+
        '</div>'+
        '<div class="col-md-6 col-12  text-center" id="textcontainer2">'+
            '<h5><b>Medicamentos</b></h5>'+
        '</div>'+
    '</div>'+
    '<div class="col-md-6 col-12 my-sm-2 d-flex flex-column align-items-center">'+
        '<div class="d-flex justify-content-center align-items-center" id="container2">'+
            '<a href="recambios.html"><img src="../img/recambios.png" alt=""></a>'+
        '</div>'+
        '<div class="col-md-6 col-12 text-center"  id="textcontainer2">'+
            '<h5><b>Historial</b></h5>'+
        '</div>'+
    '</div>'+
  '</div>';
}

  document.getElementById("cont-principal").innerHTML = msg;
}