let listRecambios = async (recambios) => {
    recambios = await recambios;
    let msg = "";
    let cont = 1;

    

    recambios.forEach((recambio) => {
      msg +='<div class="accordion-item">'
      +'<h2 class="accordion-header" id="flush-heading'+cont+'">'
      +'    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"'
      +'        data-bs-target="#collapseOne'+cont+'" aria-expanded="false" aria-controls="collapseOne'+cont+'" id="nombre">'
      +'        Recambio 07/07/2023-1'
      +'    </button>'
      +'</h2>'
      +'<div id="collapseOne'+cont+'" class="accordion-collapse collapse show" aria-labelledby="headingOne'+cont+'"'
      +'    data-bs-parent="#accordionExample">'
      +'    <div class="accordion-body">'
      +'        <div class="horaDren">'
      +'            <p><strong>Hora drenaje:</strong></p>'
      +'            <p class="hora" id="hora">'
      +'                00:00:00'
      +'            </p>'
      +'        </div>'
      +'        <div class="concentr">'
      +'            <p><strong>Concentración:</strong></p>'
      +'            <p class="concentracion" id="concentracion">'
      +'                <!--concentracion-->'
      +'            </p>'
      +'        </div>'
      +'        <div class="vol">'
      +'            <p><strong>Volumen:</strong></p>'
      +'            <p class="volumen" id="volumen">'
      +'                <!--volumen-->'
      +'            </p>'
      +'        </div>'
      +'        <div class="drenaj">'
      +'            <p><strong>Drenaje:</strong></p>'
      +'            <p class="drenaje" id="drenaje">'
      +'               <!--drenaje-->'
      +'            </p>'
      +'        </div>'
      +'        <div class="balan">'
      +'            <p><strong>Balance:</strong></p>'
      +'            <p class="balance" id="balance">'
      +'                <!--balance-->'
      +'            </p>'
      +'        </div>'
      +'        <div class="liquid">'
      +'            <p><strong>Características del líquido:</strong></p>'
      +'            <p class="liquido" id="liquido">'
      +'                <!--liquido-->'
      +'            </p>'
      +'        </div>'
      +'        <div class="orif">'
      +'            <p><strong>Estado del orificio:</strong></p>'
      +'            <p class="orificio" id="orificio">'
      +'                <!--orificio-->'
      +'            </p>'
      +'        </div>'
      +'        <div class="btn-editar-container">'
      +'            <a href="editarRecambio.html" class="btn-editar"><img src="../img/editaraler.png"></a>'
      +'            <div>'
      +'                <a href="" class="btn-inhabilitar" data-bs-toggle="modal"'
      +'                    data-bs-target="#eliminarrecambio"><img src="../img/inhabilitar.png" alt=""'
      +'                        id="inhabilitar-rec"></a>'
      +'            </div>'
      +'        </div>'
      +'    </div>'
      +'    <div class="accordion-item" id="acordeon1">'
      +'        <h2 class="accordion-header" id="headingTwo">'
      +'        </h2>'
      +'    </div>'
      +'</div>'
      +'</div>';
      cont++;
    });
    document.getElementById("accordionExample").innerHTML = msg;
  
  }

  let concentraciones= async () => {
    let cardinalidad=["Primer Recambio","Segundo Recambio", "Tercer Recambio", "Cuarto Recambio", "Quinto Recambio"]
    let cont=0;
    prescripcionDia=JSON.parse(localStorage.getItem('prescripcionActual'));
    let msg="";
    msg+="<select  id='selectConcentracion' class='custom-select' required>"
         +"<option value=''>Seleccione...</option>";
         prescripcionDia.recambios.forEach(recambio => {
          msg+="<option value='"+recambio.idRecambio+"'>"+cardinalidad[cont]+' ('+recambio.concentracion+"%)</option>";
          cont++;
    });
       msg+="</select>";
    document.getElementById("concentra").innerHTML=msg;
  }