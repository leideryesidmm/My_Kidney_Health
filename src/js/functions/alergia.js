let listAlergias = async (alergias) => {
    alergias = await alergias;
    let msg = "";
    let cont = 1;
    alergias.forEach((paciente) => {
      msg +=
          '<tr>'+
              '<td>'+ paciente.alergia.nombre +'</td>'+
              '<td>'+
                  '<a href="" data-bs-toggle="modal" data-bs-target="#editaralergia"><img src="../img/editaraler.png"  alt="" id="inhabilitar"></a>'+
                  '<a href="" data-bs-toggle="modal" data-bs-target="#eliminaralergia"><img src="../img/inhabilitar.png" alt="" id="inhabilitar"></a>'+
              '</td>'+
          '</tr>';
      cont++;
    });
    document.getElementById("tablaAlergias").innerHTML = msg;
  };



  