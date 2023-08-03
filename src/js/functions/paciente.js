let perfil=async()=>{
        try {
          const paciente = await listarPacientes();
          const alergia = await alergias();
          const cuidador = await cuidadorActivo();
        
    let msg="";
if(paciente!=null){
    msg+=
    '<div class="navbar" name="navbar" id="navbar">'+
            '<a href="principal.html?cedula=' + cedulaEncript + '" " class="devolverse"><img src="../img/devolverseColor.png" alt="" id="icono"></a>'+
            '<h1 class="title">Mi Perfil</h1>'+
            
        '</div>'+ 
    '<div class="container">'+
    '<div class="name">'+

'<h1 class="nombre" id="nombre" name="nombre">'+paciente.nombre+
'</h1>'+

'<div class="primerosDatos">'+
'<div class="row">'+
        '<div class="col">'+
    '<div class="dataPeso">'+
        '<b><p class="valor">Peso:</p></b>'+
        '<p class="peso" id="peso">'+paciente.peso+'</p>'+
        '<p for="med-peso">Kgs</p>'+
    '</div>'+
    '</div>'+
    '<div class="col">'+
'<div class="dataAltura">'+
    '<b><p class="valor"> Altura: </p></b>'+
        '<p class="altura" id="altura">'+paciente.altura+'</p>'+
       '<p for="med-altura" class="cms">Cms</p>'+
    '</div>'+
    '</div>'+
    '</div>'+
'</div>'+
'<div class="checks">'+
    '<div class="row">'+
        '<div class="col">';
        if(paciente.diabetes!=false){
            msg+='<input type="checkbox" name="diabetes" id="diabetesTrue" class="styled-checkbox" checked disabled>'+
            '<label for="diabetes">Diabetes</label>'+
            '<br>';}
        else{
            msg+='<input type="checkbox" name="diabetes" id="diabetesTrue" disabled>'+
            '<label for="diabetes">Diabetes</label>'+
        '<br>';}
        if(paciente.hipertension!=false){
            msg+='<input type="checkbox" name="hipertension" id="hipertensionTrue" class="styled-checkbox" checked disabled>'+
            '<label for="hipertension">Hipertensión</label>';}
        else{
            msg+='<input type="checkbox" name="hipertension" id="hipertensionFalse" disabled>'+
            '<label for="hipertension">Hipertensión</label>';  
        }
        msg+='</div>'+
        '<div class="col">'+
        '<b><label for="sangre" id="sangre" class="sangre">'+
                    'Sangre:'+
                '</label></b>'+
            '<label for="tiposangre" class="tipo_sangre" id="tipo_sangre">'+paciente.tiposangre+
            '</label>'+
            '<label for="rh" class="rh" id="rh">'+paciente.rh+
            '</label>'+
        '</div>'+
    '</div>'+
'</div>'+

'<div class="segundosDatos">'+
    '<div class="row">'+
        '<div class="col">'+
            '<b><label for="nacimiento" id="nacimiento" class="nacimiento">'+
                    'Nacimiento:'+
                '</label>'+
            '</b>'+
            '<br>'+
            '<label for="fechaNacimiento" id="fechaNacimiento" class="fechaNacimiento">'+paciente.nacimiento+
            '</label>'+
        '</div>'+
        '<div class="col">'+
            '<b><label for="celular" id="tlf" class="telefono">'+
                    'Celular:'+
                '</label>'+
            '</b>'+
            '<br>'+
            '<label for="celular" id="celular" class="celular">'+paciente.celular+
            '</label>'+
        '</div>'+
    '</div>'+
'</div>'+
'</div>'+
    '<div class="direction">'+
        '<b><label for="dataDireccion" class="dataDireccion" id="dataDireccion">'+
            'Dirección:'+
        '</label></b>'+
        '<label for="direccion" class="direccion" id="direccion">'+paciente.direccion+
        '</label>'+
    '</div>'+
    '<div class="eps-nav">'+
        '<h2 class="eps" id="eps" name="eps">'+paciente.eps+'</h2>'+
    '</div>';
}
if(alergia!=null && alergia !== ""){
    msg+='<br>'+
    '<div class="alergiasPac">'+
            '<h6 class="titleAlergia">'+
                'Alérgico a:'+
            '</h6>'+
            '<p class="dataAlergia" id="dataAlergia" name="dataAlergia">'+alergia+
            '</p>'+ 
            '<a href=""'
    '</div>'+
    '<br>';
}
else{

}
if(cuidador!=null && cuidador !== ""){
   msg+='<div class="dataCuidador">'+
    '<div class="nav-cuidador">'+
        '<div class="row">'+
            '<div class="col">'+
        '<b><p class="nombreCuidador" id="nombreCuidador" name="nombreCuidador">'+cuidador.nombre+
            '<br>'+
        '</p>'+
        '<p class="cuidador"></b>'+
            'Cuidador'+
        '</p>'+
    '</div>'+
    '<div class="col">'+
        '<div class="addCuidador">'+
        '<a href="cuidador.html"><img src="../img/irCuidador.png" alt="Agregar Cuidador" /></a>'+
    '</div>'+
        '</div>'+
    '</div>'+
'</div>'+
'<br>'+
    '<div class="dataCuidador">'+
        '<div class="info-cuidador">'+
        '<p class="direccion-cuidador"><strong>Dirección:</strong></p>'+
        '<p class="dataDireccionCuidador" id="dataDireccionCuidador" name="dataDireccionCuidador">'+cuidador.direccion+'</p>'+
        '</div>'+
        '<div class="info-cuidador">'+
        '<p class="telefono-cuidador"><strong>Teléfono de Contacto:</strong></p>'+
        '<p class="dataTelefonoCuidador" id="dataTelefonoCuidador" name="dataTelefonoCuidador">'+cuidador.celular+'</p>'+
        '</div>'+
        '<div class="info-cuidador">'+
        '<p class="parentesco-cuidador"><strong>Parentesco:</strong></p>'+
        '<p class="dataParentescoCuidador" id="dataParentescoCuidador" name="dataParentescoCuidador">'+cuidador.parentesco+'</p>'+
        '</div>'+
        '<br>'+
    '</div>'+
'</div>'+
'</div>';
}
document.getElementById("perfil").innerHTML = msg;
}
catch (error) {
    console.error("Error in perfil():", error);
}
}