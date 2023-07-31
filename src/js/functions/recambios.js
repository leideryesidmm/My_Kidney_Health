let listRecambios = async (recambios) => {
    recambios = await recambios;
    let msg = "";
    let cont = 1;
    recambios.forEach((recambio) => {
      msg +=
        '<div class="accordion-item">' +
        '<h2 class="accordion-header" id="flush-heading' + cont + '">' +
        '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse' +
        cont +
        '" aria-expanded="false" aria-controls="flush-collapse' +
        cont +
        '">' +
        'Recambio '+formatearFechas(recambio.fecha) + " 1,2,3"
        "</button>" +
        "</h2>" +
        '<div id="flush-collapse' +
        cont +
        '" class="accordion-collapse collapse" aria-labelledby="flush-heading' + cont + '" data-bs-parent="#acordeon1">' +
        '<div class="accordion-body">' +
        '<div class="descrp-med">' +
        "<p><strong>Descripción:</strong></p>" +
        '<p class="descripcion" id="descripcion">' +
        recambio.hora +
        "</div>" +
        '<div class="via">' +
        "<p><strong>Vía administración:</strong></p>" +
        '<p class="via_administracion" id="via_administracion">' +
        recambio.concentracio +
        "</div>" +
        '<div class="concentration">' +
        "<p><strong>Concentración:</strong></p>" +
        '<p class="concentracion" id="concentracion">' +
        recambio.volumen +
        "</p>" +
        "</div>" +
        '<div class="fechaIni">' +
        "<p><strong>Fecha inicio:</strong></p>" +
        '<p class="fecha_inicio" id="fecha_inicio">' +
        " "+recambio.drenajeDialisis+"</p>" +
        "</div> " +
        '<div class="fechaFin">' +
        "<p><strong>Fecha Finalización:</strong></p>" +
        '<p class="fecha_fin" id="fecha_fin">' +
        " "+recambio.balance+"</p>" +
        "</div>" +
        '<div class="dos">' +
        "<p><strong>Dosis:</strong></p>" +
        '<p class="dosis" id="dosis">' +
        recambio.estadoLiquido +
        "</p>" +
        "</div>" +
        '<div class="toma">' +
        "<p><strong>Tomas:</strong></p>" +
        '<p class="tomas" id="tomas">' +
        prescripcion.orificio +
        "</p>" +
        "</div>" +
        '<div class="btn-editar-container">' +
        '<a href="editarMedicamento.html?idFormulaMedicamento='+medicamento.idFormulaMedicamento+'" class="btn-editar"><img src="../img/editaraler.png"></a>' +
        '<div><a href="" class="btn-inhabilitar" data-bs-toggle="modal" data-bs-target="#inhabilitarMedicamento' +
        cont +
        '" ><img src="../img/inhabilitar.png" alt="" id="inhabilitar"></a></div>' +
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
        "<p>¿Está seguro(a) de eliminar este Recambio?</p>" +
        '<label  class="medicamento" id="medicamento">'+recambio.fecha+'</label>' +
        "</div>" +
        '<div class="modal-footer">' +
        '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>' +
        '<button type="submit" onclick="eliminarRecambio('+recambio.idRecambio+')" class="btn btn-danger">Eliminar</button>' +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";
      cont++;
    });
    document.getElementById("acordeon1").innerHTML = msg;
  
  }