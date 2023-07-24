let mostrarPrescripcion= async (prescripcion) => {
    prescripcion=await prescripcion;
    if(prescripcion.unionPrescripcionDiasRecambios.length==1){
    let msg='<div id="prescontainer">'
    +'<div class="row">'
    +'<label for="cantidad">N° recambios: 4</label>'
    +'<label for="volumen">Volumen: 2000cc</label>'
    +'<label for="concentracion">Concentracion: 1.25%, 2.50%, 1.25%, 2.50%</label>'
    +'</div></div>';
    document.getElementById("prescri").innerHTML=msg;
    }
    if(prescripcion.unionPrescripcionDiasRecambios.length>1){
    let msg="";
    prescripcion.unionPrescripcionDiasRecambios.forEach((dias)=>{
        msg+='<div class="container">'
        +'<div class="row">';
console.log(dias)
         msg += `<div class="col-2"><span class="badge ${dias.prescripcionDia.lunes ? 'bg-success' : 'bg-secondary'}">Lu</span></div>`
        + `<div class="col-2"><span class="badge ${dias.prescripcionDia.martes ? 'bg-success' : 'bg-secondary'}">Ma</span></div>`
        + `<div class="col-2"><span class="badge ${dias.prescripcionDia.miercoles ? 'bg-success' : 'bg-secondary'}">Mi</span></div>`
        + `<div class="col-2"><span class="badge ${dias.prescripcionDia.jueves ? 'bg-success' : 'bg-secondary'}">Ju</span></div>`
        + `<div class="col-2"><span class="badge ${dias.prescripcionDia.viernes ? 'bg-success' : 'bg-secondary'}">Vi</span></div>`
        + `<div class="col-2"><span class="badge ${dias.prescripcionDia.sabado ? 'bg-success' : 'bg-secondary'}">Sá</span></div>`
        + '</div> <br>'
        +'<table class="table table-bordered" id="prescripcionTable">'
        +'<thead>'
        +'  <tr>'
        +'    <th>Recambio</th>'
        +'    <th>Concentrasión</th>'
        +'    <th>Tiempo</th>'
        +'  </tr>'
        +'</thead>'
        +'<tbody id="seguimientoData">'
        +'  <tr>'
        +'    <td>1</th>'
        +'    <td>4.5</th>'
        +'    <td>6 horas</th>'
        +'  </tr>'
        +'  <tr>'
        +'    <td>1</th>'
        +'    <td>4.5</th>'
        +'    <td>6 horas</th>'
        +'  </tr>'
        +'  <tr>'
        +'    <td>1</th>'
        +'    <td>4.5</th>'
        +'    <td>6 horas</th>'
        +'  </tr>'
        +'  <tr>'
        +'    <td>1</th>'
        +'    <td>4.5</th>'
        +'    <td>6 horas</th>'
        +'  </tr>'
        +'</tbody>'
        +'</table>'
        +'</div> <br>';
    })
    document.getElementById("prescri").innerHTML=msg;
    }
}