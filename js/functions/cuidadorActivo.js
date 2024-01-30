let cuidadorPrincipal=async(cuidadores, cuidAntiguos)=>{
    cuidadores = await cuidadores;
    cuidAntiguos=await cuidAntiguos;
    let msg="";
    if(cuidadores==null){
        msg+=
            '<h3 id="sinCuidador"><i>"No hay un cuidador activo"</i></h3>'+
            '<div class="btn-container">' ;
            if(cuidAntiguos.length>=1){
                msg+=
            '<button class="cambiarCuidador" type="submit" id="cambiar" onclick="cuidadoresInactivos'+ '(cuidadoresAntiguos())" "class="cambiarCuidador">Cambiar</button>';
        }
            msg+='<a href="agregarCuidador.html" type="submit" class="btn-nuevo" id="nuevo">Nuevo</a>' +
        '</div>';   
    }
    else{
        document.getElementById("img-editar").innerHTML='<a href="editarCuidador.html"><img src="../img/'+'editarPerfil.png" alt="editar Cuidador"></a>';
    msg+=

    '<br><div class="container">' +
'<h3>Cuidador Actual</h3>' +
'<div class="cuidadores">' +


'<main id="cuidadorActivo" class="cuidadorActivo">'+
    '<div class="row">'+
        '<div class="col nombreCuidador">'+
            '<label for="nombre"><b>Nombre:</b></label><br>'+
            '<label>'+cuidadores.nombre+'</label>'+
        '</div>'+
    '</div>'+
    '<div class="row">'+
        '<div class="col-6">'+
            '<label for="nombre"><b>Cédula:</b></label><br>'+
            '<label>'+cuidadores.cedula+'</label>'+
        '</div>'+
        '<div class="col-6">'+
            '<label for="nombre"><b>Parentesco:</b></label><br>'+
            '<label>'+cuidadores.parentesco+'</label>'+
        '</div>'+
    '</div>'+
    '<div class="row">'+
        '<div class="col-6">'+
            '<label for="nombre"><b>Teléfono:</b></label><br>'+
            '<label>'+cuidadores.telefono+'</label>'+
        '</div>'+
        '<div class="col-6">'+
            '<label for="nombre"><b>Dirección:</b></label><br>'+
            '<label>'+cuidadores.direccion+'</label>'+
        '</div>'+
    '</div>'+
'</main>'+
        '</div>' +
        
        
'</div>' +
    '<div class="btn-container">';
    if(cuidAntiguos.length>=1){
       msg+= '<button class="cambiarCuidador" type="submit" id="cambiar" onclick="cuidadoresInactivos(cuidadoresAntiguos())" "class="cambiarCuidador">Cambiar</button>'};
        msg+= '<a href="agregarCuidador.html" class="btn-nuevo" id="nuevo">Nuevo</a>' +
        '<button class="inhabilitarCuidador" data-toggle="modal" data-target="#successModal" type="submit" id="inhabilitar"' + 'onclick="inhabilitarCuidador()" "class="inhabilitarCuidador">Inhabilitar</button>'
    '</div>';
}
    document.getElementById("agregarCuidador").innerHTML = msg;
};

let cuidadoresInactivos = async (cuidadores) => {
    cuidadores = await cuidadores;
    let activo=await cuidadorActivo();
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
        let cont=0;
    cuidadores.forEach((cuidador) => {
        console.log(activo);
      if(activo!=null){
        if (cuidador.activo === false&&parseInt(activo.cedula)!=parseInt(cuidador.cedulaCuidador)) {
        msg +=
          '<tr>' +
          '<td>' + cuidador.cedulaCuidador + '</td>' +
          '<td>' + cuidador.nombre + '</td>' +
          '<td>' +
          '<button onclick="reactivarCuidador(\'' + cuidador.cedulaCuidador + '\', \''+cont+'\')" type="button" id="reactivarCuidador'+cont+'" class="reactivarCuidador" data-toggle="modal" data-target="#successModalReactivar">' +
          '<img src="../img/actualizar.png" class="actualizar imagen-crecible-iconos" alt="actualizar Cuidador"/>' +
          '</button>' +
          '</td>' +
          '</tr>';
          cont++;
      }
    }else{
        if (cuidador.activo === false) {
            msg +=
              '<tr>' +
              '<td>' + cuidador.cedulaCuidador + '</td>' +
              '<td>' + cuidador.nombre + '</td>' +
              '<td>' +
              '<button onclick="reactivarCuidador(\'' + cuidador.cedulaCuidador + '\', \''+cont+'\')" type="button" id="reactivarCuidador'+cont+'" class="reactivarCuidador" data-toggle="modal" data-target="#successModalReactivar">' +
              '<img src="../img/actualizar.png" class="actualizar imagen-crecible-iconos" alt="actualizar Cuidador"/>' +
              '</button>' +
              '</td>' +
              '</tr>';
              cont++;
          }
    }
      
    });}
    msg += '</table>';
    msg += '<button class="cerrarInactivos" onclick="cerrarCuidAnt()" type="submit" id="inhabilitar"' + '" "class="cerrarCambiarCuidador">Cerrar</button>'
    document.getElementById("cuidadoresAntiguos").innerHTML = msg;
  };

  let cerrarCuidAnt=async()=>{
    location.reload();
  }
  

