let servidorAPI="http://localhost:8081/";
const cedula="1193098419";

let crearRecambio = async () => {
    let imagenGuardada = "";
    var drenaje = document.getElementById('drenaje').value;
  
    var concentracionSelect = document.getElementById('selectConcentracion');
    var concentracion = concentracionSelect.value;
  
    var liquidoSelect = document.getElementById('selectLiquido');
    var liquido = liquidoSelect.value;
  
    const opcionesImagenes = document.getElementsByName("opcion");
    for (const opcion of opcionesImagenes) {
      if (opcion.checked) {
        imagenGuardada = opcion.value;
      } else {
        opcion.checked = false;
      }
    }
  
    console.log(drenaje, imagenGuardada, concentracion, liquido);
  }