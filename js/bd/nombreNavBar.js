let nombreNavBar = async () => {
    let data = localStorage.getItem("datos");
    let dato=JSON.parse(data);
    console.log(dato);
        let usu = dato.usuario;
        let usuario= decodeURIComponent(dato.cedula);
        let contrasenia=decodeURIComponent(dato.contrasenia);
    const cedulaDecrypt = decodeURIComponent(usuario);
    console.log(cedulaDecrypt)
    if(usu=="medico" || usu=="administrador"){
    let usuarioInDto = { cedula: cedulaDecrypt, contrasenia: contrasenia }
    console.log(usuarioInDto)
    try {
        const response = await fetch(localStorage.getItem("servidorAPI") + "Usuario/findAdmin", {
            method: "POST",
            body: JSON.stringify(usuarioInDto),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
        if (response.ok) {
            const usuarioData = await response.json();
            console.log("todo ok");
            console.log(usuarioData)

            let nombreDecrypt = CryptoJS.AES.decrypt(
                usuarioData.nombre,
                CryptoJS.enc.Utf8.parse(cajaNegra2),
                {
                    iv: CryptoJS.enc.Utf8.parse(iv),
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                }
            ).toString(CryptoJS.enc.Utf8);
            console.log(nombreDecrypt);
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
