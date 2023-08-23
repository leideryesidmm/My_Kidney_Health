let listMedicamentos = async (medicamentos) => {
  medicamentos = await medicamentos;
  let msg = "";
  let ms="";
  let cont = 1;
  

      if(medicamentos!=null && medicamentos.length>0){
        let medicamentosRecetadosHTML = ""; 
        let medicamentosNoRecetadosHTML = ""; 
  medicamentos.forEach((medicamento) => {
     let medicamentoHTML  =
     '<div class="accordion" id="accordionExample">'+
      '<div class="accordion-item">' +
      '<h2 class="accordion-header" id="flush-heading' + cont + '">' +
      '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse' +
      cont +
      '" aria-expanded="false" aria-controls="flush-collapse' +
      cont +
      '">' +
      medicamento.nombre +
      "</button>" +
      "</h2>" +
      '<div id="flush-collapse' +
      cont +
      '" class="accordion-collapse collapse" aria-labelledby="flush-heading' + cont + '" data-bs-parent="#acordeon1">' +
      '<div class="accordion-body">' +
      '<div class="descrp-med">' +
      "<p><strong>Descripción:</strong></p>" +
      '<p class="descripcion" id="descripcion">' +
      medicamento.descripcion +
      "</div>" +
      '<div class="via">' +
      "<p><strong>Vía administración:</strong></p>" +
      '<p class="via_administracion" id="via_administracion">' +
      medicamento.via_Administracion +
      "</div>" +
      '<div class="concentration">' +
      "<p><strong>Concentración:</strong></p>" +
      '<p class="concentracion" id="concentracion">' +
      medicamento.concentracion +
      "</p>" +
      "</div>" +
      '<div class="fechaIni">' +
      "<p><strong>Fecha inicio: </strong></p>" +
      '<p class="fecha_inicio" id="fecha_inicio">' +
      " " + formatearFechas(medicamento.fechaIni)+"</p>" +
      "</div> " +
      '<div class="fechaFin">' +
      "<p><strong>Fecha Finalización: </strong></p>" +
      '<p class="fecha_fin" id="fecha_fin">' + 
      " " + formatearFechas(medicamento.fechaFin)+"</p>" +
      "</div>" +
      '<div class="dos">' +
      "<p><strong>Dosis:</strong></p>" +
      '<p class="dosis" id="dosis">' +
      medicamento.dosis +
      "</p>" +
      "</div>" +
      '<div class="toma">' +
      "<p><strong>Tomas:</strong></p>" +
      '<p class="tomas" id="tomas">' +
      medicamento.tomas +
      "</p>" +
      "</div>" +
      '<div class="tiempo">' +
      "<p><strong>Intervalo de Horas:</strong></p>" +
      '<p class="intervalo_tiempo" id="intervalo_tiempo">' +
      medicamento.intervaloTiempo +
      "</p>" +
      "</div>" +
      '<div class="btn-editar-container">' +
      '<a href="editarMedicamento.html?idFormulaMedicamento='+medicamento.idFormulaMedicamento+'" class="btn-editar"><img src="../img/editaraler.png"></a>' +
      '<div><a href="" class="btn-inhabilitar" data-bs-toggle="modal" data-bs-target="#inhabilitarMedicamento' +
      cont +
      '" ><img src="../img/inhabilitar.png" alt="" id="inhabilitar" class="btn-inhabilitar"></a></div>' +
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
      "<p>¿Está seguro(a) de eliminar este medicamento?</p>" +
      '<label  class="medicamento" id="medicamento">'+medicamento.nombre+'</label>' +
      "</div>" +
      '<div class="modal-footer">' +
      '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>' +
      '<button type="submit" onclick="eliminarMedicamento('+medicamento.idFormulaMedicamento+')" class="btn btn-danger">Eliminar</button>' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
    
      if (medicamento.recetado == true) {
        medicamentosRecetadosHTML += medicamentoHTML;
      } else {
        medicamentosNoRecetadosHTML += medicamentoHTML;
      }
      cont++;
    });
    console.log(medicamentosRecetadosHTML);
    console.log(medicamentosNoRecetadosHTML);
    if (medicamentosRecetadosHTML !== "") {
      msg += '<h2>Medicamentos Recetados</h2><br>' + medicamentosRecetadosHTML;
    }
    if (medicamentosNoRecetadosHTML !== "") {
      msg +=
        '<br><h2>Medicamentos No Recetados</h2><br>' + medicamentosNoRecetadosHTML;
    }
  } else {
    msg +=
      '<b><p class="sinMedicamentos">No tiene medicamentos registrados<p></b>';
  }

  ms += msg + "</div><br>";

  document.getElementById("acordeon1").innerHTML = ms;
};

let formatearFechas= function(fechaOriginal){

// Convertir la fecha a un objeto Date
const fecha = new Date(fechaOriginal);

// Obtener los componentes de la fecha
const year = fecha.getFullYear();
const month = ('0' + (fecha.getMonth() + 1)).slice(-2);
const day = ('0' + fecha.getDate()).slice(-2);

// Crear la fecha formateada
const fechaFormateada = `${year}-${month}-${day}`;
return fechaFormateada;
}


  