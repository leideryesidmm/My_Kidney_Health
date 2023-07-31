let listAlergias = async (alergias) => {
    alergias = await alergias;
    let msg = "";
    let cont = 1;
    alergias.forEach((paciente) => {
      msg +=
          '<tr>'+
              '<td>'+ paciente +'</td>'+
              '<td>'+
                  '<a href="" data-bs-toggle="modal" data-bs-target="#editaralergia'+cont+'"><img src="../img/editaraler.png"  alt="" id="inhabilitar"></a>'+
                  '<a href="" data-bs-toggle="modal" data-bs-target="#eliminaralergia'+cont+'"><img src="../img/inhabilitar.png" alt="" id="inhabilitar"></a>'+
                  
              '</td>'+
          '</tr>'+
          
          '<div>'+
          '<div class="modal" tabindex="-1" id="eliminaralergia' +cont +'">'+
              '<div class="modal-dialog">'+
                  '<div class="modal-content">'+
                      '<div class="modal-header">'+
                          '<h5 class="modal-title">Eliminar Alergia</h5>'+
                          '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
                      '</div>'+
                      '<div class="modal-body">'+
                          '<p>¿Está seguro(a) de eliminar esta alergia?</p>'+
                          '<label class="nombreAlergia" id="nombreAlergia">'+paciente.alergia.nombre+'</label>'+
                      '</div>'+
                      '<div class="modal-footer">'+
                          '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>'+
                          '<a href="../html/alergias.html"><button type="submit"  onclick="inhabilitarAlergia('+paciente.alergia.idAlergia+')" class="btn btn-danger">Eliminar</button></a>'+
                      '</div>'+
                  '</div>'+
              '</div>'+
          '</div>'+
      '</div>'+
      '<div>'+
        '<div class="modal" tabindex="-1" id="editaralergia'+cont+'">'+
            '<div class="modal-dialog">'+
                '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<h5 class="modal-title">Editar Alergia</h5>'+
                        '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
                    '</div>'+
                    '<div class="modal-body">'+
                        '<p>Nombre Actual: '+paciente.alergia.nombre+'</p>'+
                        '<input type="text" id="nombreEditar'+paciente.alergia.idAlergia+'" class="form-control" placeholder="Inserte nuevo nombre de alergia">'+
                    '</div>'+
                    '<div class="modal-footer">'+
                        '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>'+
                        '<button type="submit" id="editarAlergia" onclick="editarAlergia('+paciente.alergia.idAlergia+')" class="btn btn-primary">Guardar</button>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>'          ;
      cont++;
    });
    document.getElementById("tablaAlergias").innerHTML = msg;
  };



  