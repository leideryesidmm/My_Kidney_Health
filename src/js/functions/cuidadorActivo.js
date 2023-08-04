let cuidadorPrincipal=async(cuidadores, cuidAntiguos)=>{
    cuidadores = await cuidadores;
    console.log(cuidadores);
    cuidAntiguos=await cuidAntiguos;
    let msg="";
    let ms='<a href="perfil.html?cedula='+encodeURIComponent(cedulaEncript)+'" class="devolverse"><img src="../img/devolverseColor.png" alt="" id="icono"></a>'+
    '<h1 class="title">Cuidador</h1>'+
    '<div id="img-editar">'+

    '</div>';
    document.getElementById("navbar").innerHTML=ms;
    if(cuidadores==null){
        msg+=
            '<h3 id="sinCuidador"><i>"No hay un cuidador activo"</i></h3>'+
            '<div class="btn-container">' ;
            if(cuidAntiguos.length>=1){
                msg+=
            '<button class="cambiarCuidador" type="submit" id="cambiar" onclick="cuidadoresInactivos'+ '(cuidadoresAntiguos())" "class="cambiarCuidador">Cambiar</button>';
        }
            msg+='<a href="agregarCuidador.html" class="btn-nuevo" id="nuevo">Nuevo</a>' +
        '</div>';   
    }
    else{
        document.getElementById("img-editar").innerHTML='<a href="editarCuidador.html"><img src="../img/'+'editarPerfil.png" alt="editar"></a>';
    msg+=
    '<div class="container">' +
'<h3>Cuidador Actual</h3>' +
'<div class="cuidadores">' +
    '<label for="varCuidador" class="varCuidador"><strong>Nombre:</strong></label>' +
            '<br>' +
            '<label for="nombre" id="nombre" class="nombre">'+cuidadores.nombre+'</label>' +
        '</div>' +
      '<br>' +
    '<div class="row">' +
        '<div class="col-3 d-flex">' +
            '<label for="cedCuidador" class="cedCuidador"><strong>Cédula:</strong></label>' +
        '<br>' +
        '<label for="cedula_cuidador" id="cedula_cuidador" class="cedula_cuidador">'+cuidadores.cedula+'</label>' +
        '</div>' +
        '<div class="col-9 d-flex">' +
            '<label for="varParentesco"><strong>Parentesco:</strong></label>' +
            '<br>' +
                '<label for="parentesco" id="parentesco" class="parentesco">'+cuidadores.parentesco+'</label>' +
        '</div>' +
        '</div>' +
        '<br>' +
        '<div class="row">' +
            '<div class="col-3 d-flex" id="tlf">' +
                '<label for="varTelefono"><strong>Teléfono:</strong></label>' +
                '<br>' +
                '<label for="telefono" id="telefono" class="telefono">'+cuidadores.telefono+'</label>' +
            '</div>' +
            '<div class="col-9 d-flex" id="address">' +
                '<label for="varDirección"><strong>Dirección:</strong></label>' +
                '<br>' +
                    '<label for="direccion" id="direccion" class="direccion">'+cuidadores.direccion+'</label>' +
            '</div>' +
            '</div>' +
'</div>' +

    '<div class="btn-container">';
    if(cuidAntiguos.length>=1){
       msg+= '<button class="cambiarCuidador" type="submit" id="cambiar" onclick="cuidadoresInactivos(cuidadoresAntiguos())" "class="cambiarCuidador">Cambiar</button>'};
        msg+= '<a href="agregarCuidador.html" class="btn-nuevo" id="nuevo">Nuevo</a>' +
        '<button class="inhabilitarCuidador" type="submit" id="inhabilitar"' + 'onclick="inhabilitarCuidador()" "class="inhabilitarCuidador">Inhabilitar</button>'
    '</div>';
}
    document.getElementById("agregarCuidador").innerHTML = msg;
};

let cuidadoresInactivos = async (cuidadores) => {
    cuidadores = await cuidadores;
    let msg = "";
    document.getElementById("cambiar").style.display = "none";
    document.getElementById("nuevo").style.marginLeft = "200px";
    msg += '<br>' +
      '<h3 class="msg-reactivar">Seleccione un cuidador antiguo para reactivarlo</h3>';
    msg += '<table class="cuidadoresInactivos">' +
      '<tr>' +
      '<th>Cédula Cuidador</th>' +
      '<th>Nombre</th>' +
      '<th>Acciones</th>' +
      '</tr>';
      if(cuidadores!=null){
    cuidadores.forEach((cuidador) => {
      if (cuidador.activo === false) {
        msg +=
          '<tr>' +
          '<td>' + cuidador.cedulaCuidador + '</td>' +
          '<td>' + cuidador.nombre + '</td>' +
          '<td>' +
          '<button onclick="reactivarCuidador(\'' + cuidador.cedulaCuidador + '\')" type="button">' +
          '<img src="../img/actualizar.png" class="actualizar"/>' +
          '</button>' +
          '</td>' +
          '</tr>';
      }
    });}
    msg += '</table>';
    msg += '<button class="inhabilitarCuidador" onclick="cerrarCuidAnt()" type="submit" id="inhabilitar"' + '" "class="cerrarCambiarCuidador">Cerrar</button>'
    document.getElementById("cuidadoresAntiguos").innerHTML = msg;
  };

  let cerrarCuidAnt=async()=>{
    location.reload();
  }

