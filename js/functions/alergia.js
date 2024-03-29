let listAlergias = async (alergias) => {
    alergias = await alergias;
    let msg = "";
    let cont = 1;
  
    
    if (alergias.length == 0) {
        msg += '<tr><td colspan="2"><h3 id="sinAlergias"><i>No hay alergias activas.</i></h3></td></tr>';
    }
  
    else {
        alergias.forEach((alergia) => {
            msg +=
                '<tr>' +
                '<td>' + alergia.nombre + '</td>' +
                '<td>' +
                '<a href="" data-bs-toggle="modal" data-bs-target="#editaralergia' + cont + '" data-toggle="tooltip" data-placement="bottom" title="Editar Alergia"><img src="../img/editaraler.png" class="imagen-crecible-iconos"  alt="Editar Alergia" id="inhabilitar"></a>' +
                '<a href="" data-bs-toggle="modal" data-bs-target="#eliminaralergia' + cont + '" data-toggle="tooltip" data-placement="bottom" title="Eliminar Alergia"><img src="../img/inhabilitar.png" class="imagen-crecible-iconos" alt="Inhabilitar Alergía" id="inhabilitar"></a>' +
  
                '</td>' +
                '</tr>' +
  
                '<div>' +
                '<div class="modal" tabindex="-1" id="eliminaralergia' + cont + '">' +
                '<div class="modal-dialog">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<h5 class="modal-title">Eliminar Alergia</h5>' +
                '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
                '</div>' +
                '<div class="modal-body">' +
                '<p>¿Está seguro(a) de eliminar esta alergia?</p>' +
                '<label class="nombreAlergia" id="nombreAlergia">' + alergia.nombre + '</label>' +
                '</div>' +
                '<div class="modal-footer">' +
                '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>' +
  
                '<button type="submit"   onclick="inhabilitarAlergia(' + alergia.idAlergia + ')" data-toggle="tooltip" data-placement="bottom" title="Eliminar Alergia" class="btn btn-danger">Eliminar</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div>' +
                '<div class="modal" tabindex="-1" id="editaralergia' + cont + '">' +
                '<div class="modal-dialog">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<h5 class="modal-title">Editar Alergia</h5>' +
                '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
                '</div>' +
                '<div class="modal-body">' +
                '<p>Nombre Actual: ' + alergia.nombre + '</p>' +
                '<input type="text" id="nombreEditar' + alergia.idAlergia + '"  placeholder="Inserte nuevo nombre de alergia" required">' +
                '</div>' +
                '<div class="modal-footer">' +
                '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>' +
                '<button type="submit" id="editarAlergia"  onclick="editarAlergia(' + alergia.idAlergia + ')" class="btn btn-primary" data-toggle="tooltip" data-placement="bottom" title="Actualizar Alergia">Actualizar</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
            cont++;
        })
        
    };
    document.getElementById("tablaAlergias").innerHTML = msg;
  };
