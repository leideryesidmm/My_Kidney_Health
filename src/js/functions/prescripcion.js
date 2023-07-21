let mostrarPrescripcion= async (prescripcion) => {
    if(prescripcion.length==1){
    let msg='<div id="prescontainer">'
    +'<div class="row">'
    +'<label for="cantidad">N° recambios: 4</label>'
    +'<label for="volumen">Volumen: 2000cc</label>'
    +'<label for="concentracion">Concentracion: 1.25%, 2.50%, 1.25%, 2.50%</label>'
    +'</div></div>';
    document.getElementById("prescri").innerHTML=msg;
    }
    if(prescripcion.length>1){
    let msg="";
    prescripcion.forEach((dias)=>{
        msg+='<div class="container">'
        +'<div class="row">'
        +'  <div class="col-2"><span class="badge bg-success">Lu</span></div>'
        +'  <div class="col-2"><span class="badge bg-secondary">Ma</span></div>'
        +'  <div class="col-2"><span class="badge bg-success">Mi</span></div>'
        +'  <div class="col-2"><span class="badge bg-success">Ju</span></div>'
        +'  <div class="col-2"><span class="badge bg-success">Vi</span></div>'
        +'  <div class="col-2"><span class="badge bg-secondary">Sá</span></div>'
        +'</div> <br>'
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