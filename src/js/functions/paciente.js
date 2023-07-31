let perfil=async(paciente,alergia,cuidador)=>{

    paciente = await paciente;
    console.log(paciente);
    alergia = await alergia;
    cuidador = await cuidador;
    console.log(cuidador);
        
    let msg="";
if(paciente!=null && alergia!=null && cuidador!=null){
    msg+='<h1 class="nombre" id="nombre" name="nombre">'+paciente.nombre+ 
'</h1>'+

'<div class="primerosDatos">'+
    '<div class="dataPeso">'
        '<b><p class="valor">Peso:</p></b>'+
        '<p class="peso" id="peso">'+paciente.peso+'</p>'+
        '<p for="med-peso">Kgs</p>'+
    '</div>'+
'<div class="dataAltura">'+
    '<b><p class="valor"> Altura: </p></b>'+
        '<p class="altura" id="altura">'+paciente.altura+'</p>'+
       '<p for="med-altura">Cms</p>'+
    '</div>'+
'</div>'+
'<div class="checks">'+
    '<div class="row">'+
        '<div class="col">'+
            '<input type="checkbox" name="diabetes" id="diabetes">'+
            '<label for="diabetes">diabetes</label>'+
        '<br>'+
            '<input type="checkbox" name="hipertension" id="hipertension">'+
            '<label for="hipertension">hipertension</label>'+
        
        '</div>'+
        '<div class="col">'+
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
            '<b><label for="tlf" id="tlf" class="tlf">'+
                    'Teléfono:'+
                '</label>'+
            '</b>'+
            '<br>'+
            '<label for="celular" id="celular" class="celular">'+paciente.telefono+
                '<!--Contenido Telefono-->'+
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
            '<!--Contenido dirección-->'+
        '</label>'+
    '</div>'+
    '<div class="eps-nav">'+
        '<h3 class="eps" id="eps" name="eps">'+paciente.eps+
        '</h3>'+
    '</div>'+
    '<br>'+
    '<div class="alergias">'+
            '<h6 class="titleAlergia">'+
                'Alérgico a:'+
            '</h6>'+
            '<p class="dataAlergia" id="dataAlergia" name="dataAlergia">'+
                '<!--Contenido alergias-->'+
            '</p>'+
    '</div>'+
    '<br>'+
    '<div class="dataCuidador">'+
    '<div class="nav-cuidador">'+
        '<div class="row">'+
            '<div class="col">'+
        '<p class="nombreCuidador" id="nombreCuidador" name="nombreCuidador">'+
            '<!--Contenido nombre cuidador-->'+
            '<br>'+
        '</p>'+
        '<p class="cuidador">'+
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
    '<div class="dataCuidador">'+
        '<p class="direccion-cuidador"><strong>Dirección:</strong></p>'+
        '<p class="dataDireccionCuidador" id="dataDireccionCuidador" name="dataDireccionCuidador"></p>'+
        '<p class="telefono-cuidador"><strong>Teléfono de Contacto:</strong></p>'+
        '<p class="dataTelefonoCuidador" id="dataTelefonoCuidador" name="dataTelefonoCuidador"></p>'+
        '<p class="parentesco-cuidador"><strong>Parentesco:</strong></p>'+
        '<p class="dataParentescoCuidador" id="dataParentescoCuidador" name="dataParentescoCuidador"></p>'+
    '</div>'+
'</div>';}
if(paciente!=null && alergia!=null && cuidador==null){
    msg+='<h1 class="nombre" id="nombre" name="nombre">'+paciente.nombre+ 
'</h1>'+

'<div class="primerosDatos">'+
    '<div class="dataPeso">'
        '<b><p class="valor">Peso:</p></b>'+
        '<p class="peso" id="peso">'+paciente.peso+'</p>'+
        '<p for="med-peso">Kgs</p>'+
    '</div>'+
'<div class="dataAltura">'+
    '<b><p class="valor"> Altura: </p></b>'+
        '<p class="altura" id="altura">'+paciente.altura+'</p>'+
       '<p for="med-altura">Cms</p>'+
    '</div>'+
'</div>'+
'<div class="checks">'+
    '<div class="row">'+
        '<div class="col">'+
            '<input type="checkbox" name="diabetes" id="diabetes">'+
            '<label for="diabetes">diabetes</label>'+
        '<br>'+
            '<input type="checkbox" name="hipertension" id="hipertension">'+
            '<label for="hipertension">hipertension</label>'+
        
        '</div>'+
        '<div class="col">'+
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
            '<b><label for="tlf" id="tlf" class="tlf">'+
                    'Teléfono:'+
                '</label>'+
            '</b>'+
            '<br>'+
            '<label for="celular" id="celular" class="celular">'+paciente.telefono+
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
        '<h3 class="eps" id="eps" name="eps">'+paciente.eps+
        '</h3>'+
    '</div>'+
        '<br>'+
        '<div class="alergias">'+
            '<h6 class="titleAlergia">'+
                'Alérgico a:'+
            '</h6>'+
            '<p class="dataAlergia" id="dataAlergia" name="dataAlergia">'+
                '<!--Contenido alergias-->'+
            '</p>'+
    '</div>';
}
if(paciente!=null && alergia==null && cuidador!=null){
    msg+='<h1 class="nombre" id="nombre" name="nombre">'+paciente.nombre+ 
'</h1>'+

'<div class="primerosDatos">'+
    '<div class="dataPeso">'
        '<b><p class="valor">Peso:</p></b>'+
        '<p class="peso" id="peso">'+paciente.peso+'</p>'+
        '<p for="med-peso">Kgs</p>'+
    '</div>'+
'<div class="dataAltura">'+
    '<b><p class="valor"> Altura: </p></b>'+
        '<p class="altura" id="altura">'+paciente.altura+'</p>'+
       '<p for="med-altura">Cms</p>'+
    '</div>'+
'</div>'+
'<div class="checks">'+
    '<div class="row">'+
        '<div class="col">'+
            '<input type="checkbox" name="diabetes" id="diabetes">'+
            '<label for="diabetes">diabetes</label>'+
        '<br>'+
            '<input type="checkbox" name="hipertension" id="hipertension">'+
            '<label for="hipertension">hipertension</label>'+
        
        '</div>'+
        '<div class="col">'+
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
            '<b><label for="tlf" id="tlf" class="tlf">'+
                    'Teléfono:'+
                '</label>'+
            '</b>'+
            '<br>'+
            '<label for="celular" id="celular" class="celular">'+paciente.telefono+
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
        '<h3 class="eps" id="eps" name="eps">'+paciente.eps+
        '</h3>'+
    '</div>'+
    '<br>'+
        '<div class="dataCuidador">'+
    '<div class="nav-cuidador">'+
        '<div class="row">'+
            '<div class="col">'+
        '<p class="nombreCuidador" id="nombreCuidador" name="nombreCuidador">'+
            '<!--Contenido nombre cuidador-->'+
            '<br>'+
        '</p>'+
        '<p class="cuidador">'+
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
    '<div class="dataCuidador">'+
        '<p class="direccion-cuidador"><strong>Dirección:</strong></p>'+
        '<p class="dataDireccionCuidador" id="dataDireccionCuidador" name="dataDireccionCuidador"></p>'+
        '<p class="telefono-cuidador"><strong>Teléfono de Contacto:</strong></p>'+
        '<p class="dataTelefonoCuidador" id="dataTelefonoCuidador" name="dataTelefonoCuidador"></p>'+
        '<p class="parentesco-cuidador"><strong>Parentesco:</strong></p>'+
        '<p class="dataParentescoCuidador" id="dataParentescoCuidador" name="dataParentescoCuidador"></p>'+
    '</div>'+
'</div>';
}

if(paciente!=null && alergia==null && cuidador==null){
    msg+='<h1 class="nombre" id="nombre" name="nombre">'+paciente.nombre+ 
'</h1>'+

'<div class="primerosDatos">'+
    '<div class="dataPeso">'
        '<b><p class="valor">Peso:</p></b>'+
        '<p class="peso" id="peso">'+paciente.peso+'</p>'+
        '<p for="med-peso">Kgs</p>'+
    '</div>'+
'<div class="dataAltura">'+
    '<b><p class="valor"> Altura: </p></b>'+
        '<p class="altura" id="altura">'+paciente.altura+'</p>'+
       '<p for="med-altura">Cms</p>'+
    '</div>'+
'</div>'+
'<div class="checks">'+
    '<div class="row">'+
        '<div class="col">'+
            '<input type="checkbox" name="diabetes" id="diabetes">'+
            '<label for="diabetes">diabetes</label>'+
        '<br>'+
            '<input type="checkbox" name="hipertension" id="hipertension">'+
            '<label for="hipertension">hipertension</label>'+
        '</div>'+
        '<div class="col">'+
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
            '<b><label for="tlf" id="tlf" class="tlf">'+
                    'Teléfono:'+
                '</label>'+
            '</b>'+
            '<br>'+
            '<label for="celular" id="celular" class="celular">'+paciente.telefono+
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
        '<h3 class="eps" id="eps" name="eps">'+paciente.eps+
        '</h3>'+
    '</div>';
}
document.getElementById("perfil").innerHTML = msg;
}