let nombreNavBar = async () => {
    await obtenerClave();
    await obtenerIv();
    let data = localStorage.getItem("datos");
    let dato=JSON.parse(data);
        let usu = dato.usuario;
        let usuario= dato.cedula;
        let contrasenia=dato.contrasenia;
    const cedulaDecrypt = usuario;
    if(usu=="medico" || usu=="administrador"){
    let usuarioInDto = { cedula: cedulaDecrypt, contrasenia: contrasenia }
    try {
        const response = await fetch(localStorage.getItem("servidorAPI") + "Usuario/cedula", {
            method: "POST",
            body: JSON.stringify(usuarioInDto),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": dato.token
            }
        });
        if (response.ok) {
            const usuarioData = await response.json();

            let nombreDecrypt = decodeURIComponent(CryptoJS.AES.decrypt(
                usuarioData.nombre,
                CryptoJS.enc.Utf8.parse(cajaNegra2),
                {
                    iv: CryptoJS.enc.Utf8.parse(iv),
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                }
            ).toString(CryptoJS.enc.Utf8));
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
