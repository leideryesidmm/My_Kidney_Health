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
