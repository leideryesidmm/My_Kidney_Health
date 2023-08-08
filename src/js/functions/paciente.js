let perfil=async()=>{
        try {
          const paciente = await listarPacientes();
          const alergia = await alergias();
          const cuidador = await cuidadorActivo();
        
    let msg="";
if(paciente!=null){
    msg+=
   
    '<div class="container">'+
    '<div class="name">'+
'<div class="row">'+
'<div class="col-1"></div>'+

'<div class="col-10 d-flex align-items-center justify-content-center"><h1 class="nombre" id="nombre" name="nombre">'+paciente.nombre+
'</h1></div>'+
'<div class="col-1"></div>'+
'</div>'+
'</div>'+
'<div class="primerosDatos">'+
  '<div class="row">'+
    '<div class="col-1"></div>'+
    '<div class="col-5 d-flex align-items-center justify-content-center">'+
      '<div class="dataPeso">'+
        '<b><p class="valor">Peso:</p></b>'+
        '<p class="peso" id="peso">'+paciente.peso+'</p>'+
        '<p for="med-peso">Kgs</p>'+
      '</div>'+
    '</div>'+
    '<div class="col-5 d-flex align-items-center justify-content-center">'+
      '<div class="dataAltura">'+
        '<b><p class="valor">Altura:</p></b>'+
        '<p class="altura" id="altura">'+paciente.altura+'</p>'+
        '<p for="med-altura" class="cms">Cms</p>'+
      '</div>'+
    '</div>'+
    '<div class="col-1"></div>'+
  '</div>'+
  '<div class="checks">'+
    '<div class="row">'+
      '<div class="col-1"></div>'+
      '<div class="col-5 d-flex flex-column align-items-center justify-content-center">'+
        '<label>'+
          '<input type="checkbox" name="diabetes" id="diabetesTrue" class="styled-checkbox" '+ (paciente.diabetes ? 'checked disabled' : 'disabled')+'>'+
          '<span for="diabetes">Diabetes</span>'+
        '</label>'+
        '<label>'+
          '<input type="checkbox" name="hipertension" id="hipertensionTrue" class="styled-checkbox" '+ (paciente.hipertension ? 'checked disabled' : 'disabled')+'>'+
          '<span for="hipertension">Hipertensión</span>'+
        '</label>'+
      '</div>'+
      '<div class="col-5 d-flex align-items-center justify-content-center">'+
        '<b><label for="sangre" id="sangre" class="sangre">Sangre:</label></b>'+
        '<label for="tiposangre" class="tipo_sangre" id="tipo_sangre">'+paciente.tiposangre+'</label>'+
        '<label for="rh" class="rh" id="rh">'+paciente.rh+'</label>'+
      '</div>'+
      '<div class="col-1"></div>'+
    '</div>'+
  '</div>'+
'</div>'+

'<div class="segundosDatos">'+
    '<div class="row">'+
        '<div class="col-1"></div>'+
        '<div class="col-5 d-flex flex-column align-items-center justify-content-center">'+
            '<b><label for="nacimiento" id="nacimiento" class="nacimiento">'+
                    'Nacimiento:'+
                '</label>'+
            '</b>'+
            '<label for="fechaNacimiento" id="fechaNacimiento" class="fechaNacimiento">'+paciente.nacimiento+
            '</label>'+
            '</div>'+
        
        '<div class="col-5 d-flex flex-column align-items-center justify-content-center">'+
            '<b><label for="celular" id="tlf" class="telefono">'+
                    'Celular:'+
                '</label>'+
            '</b>'+
            '<label for="celular" id="celular" class="celular">'+paciente.celular+
            '</label>'+
        '</div>'+
        '<div class="col-2"></div>'+
        '</div>'+
   
'</div>'+
    '<div class="direction">'+
    '<div class="row">'+
    '<div class="col-1"></div>'+
    '<div class="col-10 d-flex flex-column align-items-center justify-content-center">'+
        '<b><label for="dataDireccion" class="dataDireccion" id="dataDireccion">'+
            'Dirección:'+
        '</label></b>'+
        '<label for="direccion" class="direccion" id="direccion">'+paciente.direccion+
        '</label>'+
        '</div>'+
        '<div class="col-1"></div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '<div class="eps-nav">'+
        '<h2 class="eps" id="eps" name="eps">'+paciente.eps+'</h2>'+
    '</div>';
}
if(alergia!=null && alergia !== ""){
    msg+=
    '<br>'+
    '<div class="alergiasPac">'+
            '<h6 class="titleAlergia">'+
                'Alérgico a:'+
            '</h6>'+
            '<p class="dataAlergia" id="dataAlergia" name="dataAlergia">'+alergia+
            '</p>'+ 
    '</div>'+
    '<br>'+
    '<a href="alergias.html"class="alerg-nueva" >Agregar Alergia</a>'+
    '<br>';
}
else{
    msg+='<br><a href="alergias.html"class="alerg-nueva" >Agregar Alergia</a>'+
    '<br>';
}
if(cuidador!=null && cuidador !== ""){
   msg+=
   '<br>'+
   '<div class="dataCuidadorUp">'+
    '<div class="nav-cuidador">'+
    '<div class="row">'+
            '<div class="col-10  align-items-center justify-content-center">'+
            '<div class="row">'+
        '<b><p class="nombreCuidador" id="nombreCuidador" name="nombreCuidador">'+cuidador.nombre+
            '<br>'+
        '</p>'+
        '</div>'+
        '<div class="row">'+
        '<p class="cuidador"></b>'+
            'Cuidador'+
        '</p>'+
    '</div>'+
    '</div>'+
    '<div class="col-2">'+
        '<div class="addCuidador">'+
        '<a href="cuidador.html"><img src="../img/irCuidador.png" alt="Agregar Cuidador" /></a>'+
    '</div>'+
        '</div>'+
        '</div>'+
    '</div>'+
'</div>'+
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
else{
    msg+='<br><a href="cuidador.html"class="alerg-nueva" >Agregar Cuidador</a>';
}
document.getElementById("perfil").innerHTML = msg;
}
catch (error) {
    console.error("Error in perfil():", error);
}
}