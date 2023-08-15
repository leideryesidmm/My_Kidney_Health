let principal =()=>{
    const cedulaEncript = decodeURIComponent(localStorage.getItem("cedula"));
    console.log(cedulaEncript);
        let msg="";

    msg+=   
  '<br>'+
  '<div>'+
    '<div class="row">'+        
        '<div class="col-6">'+
            '<div id="container">'+
                '<a href="perfil.html"><img src="../img/perfil.png" alt=""></a>'+
            '</div>'+
        '</div>'+
    
        '<div class="col-6">'+
            '<div id="container"><a href="prescripciones.html"><img src="../img/prescripcion.png" alt=""></a></div>'+
            
        '</div>'+
    '</div>'+ 
    '<div class="row">'+
        '<div class="col-6"><div  id="textcontainer"><h5>Mi Perfil</h5></div></div>'+
        '<div class="col-6"><div  id="textcontainer"><h5>Prescripción</h5></div></div>'+
    '</div>'+ 
    '<br>'+
    '<div class="row">'+
        '<div class="col-6">'+
            '<div id="container"><a href="medicamento.html"><img src="../img/medicamentos.png" alt=""></a></div>'+
            
        '</div>'+
        '<div class="col-6">'+
            '<div id="container">'+
                '<a href="recambiosguardados.html"><img src="../img/recambios.png" alt=""></a>'+
            '</div>'+  
        '</div>'+
    '</div>'+
    '<div class="row">'+
        '<div class="col-6"><div  id="textcontainer"><h5>Medicamentos</h5></div></div>'+
        '<div class="col-6"><div  id="textcontainer"><h5>Recambios</h5></div></div>'+
    '</div>'+     
  '</div>';

  document.getElementById("cont-principal").innerHTML = msg;
}