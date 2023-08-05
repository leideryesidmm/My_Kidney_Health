let principal =()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const cedulaEncript = urlParams.get('cedula');
    //console.log(cedulaEncript);
        let msg="";

    msg+=   
  '<br>'+
  '<div>'+
    '<div class="row">'+        
        '<div class="col-6">'+
            '<div id="container">'+
                '<a href="perfil.html?cedula='+encodeURIComponent(cedulaEncript)+'"><img src="../img/perfil.png" alt=""></a>'+
            '</div>'+
        '</div>'+
    
        '<div class="col-6">'+
            '<div id="container"><a href="prescripciones.html?cedula='+encodeURIComponent(cedulaEncript)+'""><img src="../img/prescripcion.png" alt=""></a></div>'+
            
        '</div>'+
    '</div>'+ 
    '<div class="row">'+
        '<div class="col-6"><div  id="textcontainer"><h5>Mi Perfil</h5></div></div>'+
        '<div class="col-6"><div  id="textcontainer"><h5>Prescripción</h5></div></div>'+
    '</div>'+ 
    '<br>'+
    '<div class="row">'+
        '<div class="col-6">'+
            '<div id="container"><a href="medicamento.html?cedula='+encodeURIComponent(cedulaEncript)+'""><img src="../img/medicamentos.png" alt=""></a></div>'+
            
        '</div>'+
        '<div class="col-6">'+
            '<div id="container">'+
                '<a href="misRecambios.html?cedula='+encodeURIComponent(cedulaEncript)+'""><img src="../img/recambios.png" alt=""></a>'+
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