let cuidadorPrincipal=async(cuidadores)=>{
cuidadores=await cuidadores;
let msg="";


if(cuidadores>0){
    msg+

    '<div class="container">' +
        '<div class="navbar" name="navbar" id="navbar">' +
            '<h1 class="title">Cuidador</h1>' +
            '<a href="editarCuidador.html"><img src="../img/editarPerfil.png" alt="editar"></a>' +
        '</div>' +
'<h3>Cuidador Actual</h3>' +
'<div class="cuidadores">' +
    '<label for="varCuidador" class="varCuidador"><strong>Cuidador:</strong></label>' +
            '<br>' +
            '<label for="nombre" id="nombre" class="nombre"></label>' +
        '</div>' +

      '<br>' +
    '<div class="row">' +
        '<div class="col-6 d-flex">' +
            '<label for="cedCuidador" class="cedCuidador"><strong>Cédula:</strong></label>' +
        '<br>' +
        '<label for="cedula_cuidador" id="cedula_cuidador" class="cedula_cuidador"></label>' +
        '</div>' +
        '<div class="col-6 d-flex">' +
            '<label for="varParentesco"><strong>Parentesco:</strong></label>' +
            '<br>' +
                '<label for="parentesco" id="parentesco" class="parentesco"></label>' +
        '</div>' +
        '</div>' +
        '<br>' +
        '<div class="row">' +
            '<div class="col-6 d-flex" id="tlf">' +
                '<label for="varTelefono"><strong>Teléfono:</strong></label>' +
                '<br>' +
                '<label for="telefono" id="telefono" class="telefono"></label>' +
            '</div>' +
            '<div class="col-6 d-flex" id="address">' +
                '<label for="varDirección"><strong>Dirección:</strong></label>' +
                '<br>' +
                    '<label for="direccion" id="direccion" class="direccion"></label>' +
            '</div>' +
            '</div>' +
            

'</div>' +

    '<div class="btn-container">' +
        '<button type="submit" id="cambiarCuidador" class="cambiarCuidador">Cambiar</button>' +
        '<a href="agregarCuidador.html" class="btn-nuevo">Nuevo</a>' +
        
    '</div>';
}else{
    msg+=
    '<div class="container">' +
        '<div class="navbar" name="navbar" id="navbar">' +
            '<h1 class="title">Cuidador</h1>' +
        '</div>' +
        '<h3>Cuidador Actual</h3>' +

        '<div class="btn-container">' +
        '<a href="agregarCuidador.html" class="btn-nuevo">Nuevo</a>' +
        
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
      '</tr>'
      ;
  
    cuidadores.forEach((cuidador) => {
      if (cuidador.activo === false) {
        msg +=
          '<tr>' +
          '<td>' + cuidador.cedulaCuidador + '</td>' +
          '<td>' + cuidador.nombre + '</td>' +
          '<td>' +
          '<button type="button">' +
          '<img src="" />' +
          '</button>' +
          '</td>' +
          '</tr>';
      }
    });
  
    msg += '</table>';
  
    document.getElementById("cuidadoresAntiguos").innerHTML = msg;
  };