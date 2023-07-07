
 let listMedicamentos= async(medicamentos) => {
    medicamentos=await medicamentos;
    let msg=""
    let cont=1;
    medicamentos.forEach(medicamento => {
        msg+='<div class="accordion accordion-flush" id="accordionFlushExample">'+
             '       <div class="accordion-item">'+
             '         <h2 class="accordion-header">'+
             '          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse'+cont+'" aria-expanded="false" aria-controls="flush-collapse'+cont+'" class="nombre">'+
             medicamento.medicamento.nombre+
             '          </button>'+
             '         </h2>'+
             '         <div id="flush-collapse'+cont+'" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">'+
             '           <div class="accordion-body">'+
             '               <div class="descrp-med">'+
             '                   <p><strong>Descripción:</strong></p>'+
             '                  <p class="descripcion" id="descripcion">'+
             medicamento.medicamento.descripcion+
             '               </div>'+
             '               <div class="via">'+
             '                   <p><strong>Vía administración:</strong></p>'+
             '                   <p class="via_administracion" id="via_administracion">'+
             medicamento.medicamento.viaAdministracion.descripcion+
             '               </div>'+
             '               <div class="concentration">'+
             '                   <p><strong>Concentración:</strong></p>'+
             '                   <p class="concentracion" id="concentracion">'+
             medicamento.medicamento.concentracion+'                       </p>'+
             '               </div>'+
             '                   '+
             '               <div class="fechaIni">'+
             '                   <p><strong>Fecha inicio:</strong></p>'+
             '                   <p class="fecha_inicio" id="fecha_inicio">'+
             '                       <!--Fecha inicio de la toma del medicamento en programar medicamento--></p>'+
             '               </div> '+
             '                   <div class="fechaFin">'+
             '                   <p><strong>Fecha Finalización:</strong></p>'+
             '                   <p class="fecha_fin" id="fecha_fin">'+
             '                       <!--Fecha final de la toma del medicamento en programar medicamento--></p>'+
             '               </div>'+
             '               <div class="dos">'+
             '                   <p><strong>Dosis:</strong></p>'+
             '                   <p class="dosis" id="dosis">'+
             medicamento.dosis+'                       </p>'+
             '               </div>'+
             '               <div class="toma">'+
             '                   <p><strong>Tomas:</strong></p>'+
             '                   <p class="tomas" id="tomas">'+
             medicamento.tomas+'                       </p>'+
             '               </div>'+
             '               <div class="tiempo">'+
             '                   <p><strong>Intervalo de Horas:</strong></p>'+
             '                   <p class="intervalo_tiempo" id="intervalo_tiempo">'+
             medicamento.intervaloTiempo+'                       </p>'+
             '               </div>'+
             '               <div class="btn-editar-container">'+
             '<a href="editarMedicamento.html" class="btn-editar"><img src="../img/editaraler.png"></a>'+
             '<a href="medicamento.html" class="btn-inhabilitar" data-bs-toggle="modal"'+
             '    data-bs-target="#inhabiltarMedicamento" id="btn-inhabilitar"><img src="../img/inhabilitarMed.png" alt=""></a></div>'+
             '           </div>'+
             '         </div>'+
             '       </div>'+
             '     </div>';
             cont++;
    });
    document.getElementById("acordeon1").innerHTML=msg;
  }