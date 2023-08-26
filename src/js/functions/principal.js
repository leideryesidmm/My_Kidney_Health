let principal = () => {
    let ms = "";
    let usuario = JSON.parse(localStorage.getItem("datos")).usuario;
    if (usuario == "paciente") {
        ms +=
            '<div class="col-2"><input type="image" class="logo-principal" src="../img/logo3.png"></div>' +
            '<div class="col-8"><h1 class="title-principal-app">Mi Salud Renal</h1></div>' +
            '<div class="col-2"><input type="image" class="logout" src="../img/log-out-white.png" onclick="logout()"></div>';
    }
    else {
        ms +=
            '<header>' +
            '<div class="row">' +
            '<div class="col-md-4 logo" align="left"><img src="../img/logo3.png" alt=""></div>' +
            '<div class="col-md-4 text-center"><h1>Mi Salud Renal</h1></div>' +
            '<div class="col-md-4" id="navPacientes">' +
            '<nav><ul>' +
            '<li><a href="pacientes.html">Pacientes</a></li>' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">' +
            '<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>' +
            '<path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>' +
            '</svg>' +
            '<li>'+
            '<div class="dropdown">'+
            '<button class="btn btn dropdown-toggle" type="button" id="nombreUsuario" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>'+
            '<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">'+
            '<a class="dropdown-item" href="#">Cambiar Contraseña</a>'+
            '<a class="dropdown-item" onclick="logout()">Cerrar sesión</a>'+
            '</div></div>'+
            '</li>' +
            '</ul></nav>' +
            '</div>' +
            '</div>' +
            '</header>';
    }
    document.getElementById("navbar").innerHTML = ms;


    let msg = "";


    
        msg +=
            '<br>' +
            '<div>' +
            '<div class="row">' +
            '<div class="col-md-6 col-12 my-sm-2 d-flex flex-column align-items-center">' +
            '<div class="grid-item">' +
            '<div id="container">' +
            '<a href="perfil.html"><img src="../img/perfil.png" width="160px" height="160px" alt=""></a>' +
            '</div>' +
            '<div class="grid-item-content" class="col-md-6 col-12  text-center" id="textcontainer">' +
            '<h5><b>Mi Perfil</b></h5>' +
            '</div>' +
            '<div class="description" class="col-md-6 col-12 text-center" >' +
            '<p>En esta sección podrá ver su información personal y médica<p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col-md-6 col-12 my-sm-2 d-flex flex-column align-items-center">' +
            '<div class="grid-item">' +
            '<div id="container">' +
            '<a href="prescripciones.html"><img src="../img/prescripcion.png" width="230px" height="230px"  alt=""></a>' +
            '</div>' +
            '<div class="grid-item-content" class="col-md-6 col-12 text-center"  id="textcontainer">' +
            '<h5><b>Prescripciones</b></h5>' +
            '</div>' +
            '<div class="description" class="col-md-6 col-12 text-center" >' +
            '<p>En esta sección podrá ver la prescipción actual agregar recambios<p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +


            '<div class="row">' +
            '<div class="col-md-6 col-12 my-sm-2 d-flex flex-column align-items-center">' +
            '<div class="grid-item">' +
            '<div id="container">' +
            '<a href="medicamento.html"><img src="../img/medicamentos.png" width="230px" height="230px" alt=""></a>' +
            '</div>' +
            '<div class="grid-item-content" class="col-md-6 col-12  text-center" id="textcontainer">' +
            '<h5><b>Medicamentos</b></h5>' +
            '</div>' +
            '<div class="description" class="col-md-6 col-12 text-center" >' +
            '<p>En esta sección podrá ver, agregar o modificar los medicamentos<p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col-md-6 col-12 my-sm-2 d-flex flex-column align-items-center">' +
            '<div class="grid-item">' +
            '<div id="container">' +
            '<a href="recambiosguardados.html"><img src="../img/recambios.png" width="230px" height="230px" alt=""></a>' +
            '</div>' +
            '<div class="grid-item-content" class="col-md-6 col-12 text-center"  id="textcontainer" >' +
            '<h5><b>Historial</b></h5>' +
            '</div>' +
            '<div class="description" class="col-md-6 col-12 text-center" >' +
            '<p>En esta sección podrá ver el historial de recambios<p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
    

    document.getElementById("cont-principal").innerHTML = msg;
}

let nombreNavBar = async () => {
    let data = localStorage.getItem("datos");
    let dato=JSON.parse(data);
        let usu = dato.usuario;
        let usuario= decodeURIComponent(dato.cedula);
    const cedulaDecrypt = decodeURIComponent(usuario);
    console.log(cedulaDecrypt)
    if(usu=="medico"){
    let usuarioInDto = { cedula: cedulaDecrypt }
    console.log(usuarioInDto)
    try {
        const response = await fetch(localStorage.getItem("servidorAPI") + "Usuario/cedula", {
            method: "POST",
            body: JSON.stringify(usuarioInDto),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
        if (response.ok) {
            const usuarioData = await response.json();
            console.log(usuarioData)
            const nombreUsuario = usuarioData.nombre;
            nombreDecrypt = CryptoJS.AES.decrypt(nombreUsuario, 'clave_secreta').toString(CryptoJS.enc.Utf8);
            actualizarNombreEnNavbar(nombreDecrypt);
        }
    } catch (error) {
        console.error(error);
    }
}
};

function actualizarNombreEnNavbar(nombre) {
    document.getElementById("nombreUsuario").textContent = nombre;
}

nombreNavBar(); 