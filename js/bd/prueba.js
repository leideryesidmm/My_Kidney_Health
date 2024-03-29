var CryptoJS = require("crypto-js");


let servidorAPI = "http://localhost:8104/";
let iv = "vuens_soha=6jh36";
let iv2= "bs72/=a12dx=o=pl";
let cajaNegra2="vfjdnjefh37/ps=3";
let cajaNegra="clave_secreta";
let backend="y362_02j=27w/=42";
let alergias = async () => {
    const peticion = await fetch(servidorAPI + 'desencriptarBD/getAlergias', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    const alergias = await peticion.json();
    console.log(alergias);
    let alergias2=new Array();
    alergias.forEach(alergia => {
        alergia.nombre=decodeURIComponent(CryptoJS.AES.decrypt(alergia.nombre, "clave_secreta").toString(CryptoJS.enc.Utf8));
        if(alergia.idAlergia===10)alergia.nombre="Fósforo";
        alergia.nombre=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(alergia.nombre)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        alergias2.push(alergia);
    });
    console.log(alergias2);

    const peticion2 = await fetch(servidorAPI + 'desencriptarBD/encriptarAlergias', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body:JSON.stringify(alergias2)
    });
  
  }

  let pacientes = async () => {
    try {
      const peticion = await fetch(servidorAPI + 'desencriptarBD/getPacientes', {
        method: 'GET',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
  
      const pacientes = await peticion.json();
      console.log("Datos antes de desencriptar:", pacientes);
  
      let pacientes2 = new Array();
      pacientes.forEach(paciente => {
        try {
          paciente.nombre = decodeURIComponent(CryptoJS.AES.decrypt(paciente.nombre, "clave_secreta").toString(CryptoJS.enc.Utf8));
          //paciente.altura = CryptoJS.AES.decrypt(paciente.altura, "clave_secreta").toString(CryptoJS.enc.Utf8);
          paciente.direccion=decodeURIComponent(CryptoJS.AES.decrypt(paciente.direccion, "clave_secreta").toString(CryptoJS.enc.Utf8));
          paciente.ocupacion=decodeURIComponent(CryptoJS.AES.decrypt(paciente.ocupacion, "clave_secreta").toString(CryptoJS.enc.Utf8));
          //paciente.peso=CryptoJS.AES.decrypt(paciente.peso, "clave_secreta").toString(CryptoJS.enc.Utf8);
          //paciente.pesoSeco=CryptoJS.AES.decrypt(paciente.pesoSeco, "clave_secreta").toString(CryptoJS.enc.Utf8);
          //paciente.rh=CryptoJS.AES.decrypt(paciente.rh, "clave_secreta").toString(CryptoJS.enc.Utf8);
          paciente.tipoSangre=decodeURIComponent(CryptoJS.AES.decrypt(paciente.tipoSangre, "clave_secreta").toString(CryptoJS.enc.Utf8));
          paciente.cedula=decodeURIComponent(CryptoJS.AES.decrypt(paciente.cedula, "clave_secreta").toString(CryptoJS.enc.Utf8));
          paciente.contrasenia=decodeURIComponent(CryptoJS.AES.decrypt(paciente.contrasenia, "clave_secreta").toString(CryptoJS.enc.Utf8));
          paciente.celular=decodeURIComponent(CryptoJS.AES.decrypt(paciente.celular, "clave_secreta").toString(CryptoJS.enc.Utf8));
          paciente.correo=decodeURIComponent(CryptoJS.AES.decrypt(paciente.correo, "clave_secreta").toString(CryptoJS.enc.Utf8));
          paciente.tipoDocumento=decodeURIComponent(CryptoJS.AES.decrypt(paciente.tipoDocumento, "clave_secreta").toString(CryptoJS.enc.Utf8));
  
          pacientes2.push(paciente);
          } catch (error) {
          console.error("Error en desencriptación:", error);
          console.log("Datos problemáticos:", paciente);
        }
      });
  
      console.log("Datos después de desencriptar:", pacientes2);
      let pacientes3 = new Array();
      pacientes2.forEach(paciente => {
        paciente.nombre= CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(paciente.nombre)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
          paciente.altura = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(paciente.altura)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
          paciente.direccion=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(decodeURIComponent(paciente.direccion)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
          paciente.ocupacion=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(paciente.ocupacion)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
          paciente.peso=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(paciente.peso)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
          paciente.pesoSeco=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(paciente.pesoSeco)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
          paciente.rh=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(paciente.rh)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
          paciente.tipoSangre=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(paciente.tipoSangre)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
          paciente.cedula=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(paciente.cedula)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
          paciente.contrasenia=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(paciente.contrasenia)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
          paciente.celular=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(paciente.celular)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
          paciente.correo=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(paciente.correo)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
          paciente.tipoDocumento=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(paciente.tipoDocumento)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
          pacientes3.push(paciente);
      });
  
      const peticion2 = await fetch(servidorAPI + 'desencriptarBD/encriptarPacientes', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pacientes3)
      });
    } catch (error) {
      console.error("Error general:", error);
    }
  }
  let medicos = async () => {
    const peticion = await fetch(servidorAPI + 'desencriptarBD/getMedicos', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    const medicos = await peticion.json();
    console.log(medicos);
    let medicos2=new Array();
    medicos.forEach(medico => {
        medico.nombre=decodeURIComponent(CryptoJS.AES.decrypt(medico.nombre, "clave_secreta").toString(CryptoJS.enc.Utf8));
        medico.nombre=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(medico.nombre)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        
        medico.profesion=decodeURIComponent(CryptoJS.AES.decrypt(medico.profesion, "clave_secreta").toString(CryptoJS.enc.Utf8));
        medico.profesion=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(medico.profesion)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

        medico.cedula=decodeURIComponent(CryptoJS.AES.decrypt(medico.cedula, "clave_secreta").toString(CryptoJS.enc.Utf8));
        medico.cedula=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(medico.cedula)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        
        medico.contrasenia=decodeURIComponent(CryptoJS.AES.decrypt(medico.contrasenia, "clave_secreta").toString(CryptoJS.enc.Utf8));
        medico.contrasenia=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(medico.contrasenia)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        
        medico.celular=decodeURIComponent(CryptoJS.AES.decrypt(medico.celular, "clave_secreta").toString(CryptoJS.enc.Utf8));
        medico.celular=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(medico.celular)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        
        medico.correo=decodeURIComponent(CryptoJS.AES.decrypt(medico.correo, "clave_secreta").toString(CryptoJS.enc.Utf8));
        medico.correo=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(medico.correo)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        
        medico.tipoDocumento=decodeURIComponent(CryptoJS.AES.decrypt(medico.tipoDocumento, "clave_secreta").toString(CryptoJS.enc.Utf8));
        medico.tipoDocumento=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(medico.tipoDocumento)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        medicos2.push(medico);
    });
    console.log(medicos2);

    const peticion2 = await fetch(servidorAPI + 'desencriptarBD/encriptarMedicos', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body:JSON.stringify(medicos2)
    });
  
  }

  let citas = async () => {
    const peticion = await fetch(servidorAPI + 'desencriptarBD/getCitas', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    const citas = await peticion.json();
    console.log(citas);
    let citas2=new Array();
    citas.forEach(cita => {
        cita.orificioSalida=decodeURIComponent(CryptoJS.AES.decrypt(cita.orificioSalida, "clave_secreta").toString(CryptoJS.enc.Utf8));
        cita.orificioSalida=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cita.orificioSalida)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        let cedula=cita.paciente.cedula;
        cita.paciente={};
        cita.paciente.cedula=decodeURIComponent(CryptoJS.AES.decrypt(cedula, "clave_secreta").toString(CryptoJS.enc.Utf8));
        cita.paciente.cedula=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cita.paciente.cedula)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        cedula=cita.medico.cedula;
        cita.medico={};
        cita.medico.cedula=decodeURIComponent(CryptoJS.AES.decrypt(cedula, "clave_secreta").toString(CryptoJS.enc.Utf8));
        cita.medico.cedula=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cita.medico.cedula)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        
        citas2.push(cita);
    });
    console.log(citas2);

    const peticion2 = await fetch(servidorAPI + 'desencriptarBD/encriptarCitas', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body:JSON.stringify(citas2)
    });
  
  }

  let cuidadores = async () => {
    const peticion = await fetch(servidorAPI + 'desencriptarBD/getCuidadores', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    const cuidadores = await peticion.json();
    console.log(cuidadores);
    let cuidadores2=new Array();
    cuidadores.forEach(cuidador => {
      try{
        cuidador.cedulaCuidador=decodeURIComponent(CryptoJS.AES.decrypt(cuidador.cedulaCuidador, "clave_secreta").toString(CryptoJS.enc.Utf8));
        cuidador.cedulaCuidador=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cuidador.cedulaCuidador)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        
        cuidador.direccion=decodeURIComponent(CryptoJS.AES.decrypt(cuidador.direccion, "clave_secreta").toString(CryptoJS.enc.Utf8));
        cuidador.direccion=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cuidador.direccion)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        
        cuidador.nombre=decodeURIComponent(CryptoJS.AES.decrypt(cuidador.nombre, "clave_secreta").toString(CryptoJS.enc.Utf8));
        cuidador.nombre=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cuidador.nombre)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        
        cuidador.telefono=decodeURIComponent(CryptoJS.AES.decrypt(cuidador.telefono, "clave_secreta").toString(CryptoJS.enc.Utf8));
        cuidador.telefono=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cuidador.telefono)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        
        cuidadores2.push(cuidador);}
        catch(error){console.log(error + paciente.cedula);}
    });
    console.log(cuidadores2);

    const peticion2 = await fetch(servidorAPI + 'desencriptarBD/encriptarCuidadores', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body:JSON.stringify(cuidadores2)
    });
  
  }

  let cuidadorPacientes = async () => {
    const peticion = await fetch(servidorAPI + 'desencriptarBD/getCuidadorPacientes', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    const cuidadorPacientes = await peticion.json();
    console.log(cuidadorPacientes);
    let cuidadorPacientes2=new Array();
    cuidadorPacientes.forEach(cuidadorPaciente => {
        let cedula=cuidadorPaciente.cuidador.cedulaCuidador;
        cuidadorPaciente.cuidador={};
        cuidadorPaciente.cuidador.cedulaCuidador=decodeURIComponent(CryptoJS.AES.decrypt(cedula, "clave_secreta").toString(CryptoJS.enc.Utf8));
        cuidadorPaciente.cuidador.cedulaCuidador=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cuidadorPaciente.cuidador.cedulaCuidador)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
    
        cedula=cuidadorPaciente.paciente.cedula;
        cuidadorPaciente.paciente={};
        cuidadorPaciente.paciente.cedula=decodeURIComponent(CryptoJS.AES.decrypt(cedula, "clave_secreta").toString(CryptoJS.enc.Utf8));
        cuidadorPaciente.paciente.cedula=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cuidadorPaciente.paciente.cedula)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        
        cuidadorPacientes2.push(cuidadorPaciente);
    });
    console.log(cuidadorPacientes2);

    const peticion2 = await fetch(servidorAPI + 'desencriptarBD/encriptarCuidadorPacientes', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body:JSON.stringify(cuidadorPacientes2)
    });
  
  }
  let recambios = async () => {
    const peticion = await fetch(servidorAPI + 'desencriptarBD/getRecambios', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    const recambios = await peticion.json();
    console.log(recambios);
    let recambios2=new Array();
    recambios.forEach(recambio => {
      recambio.concentracion=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(recambio.concentracion)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        
      recambio.intervaloTiempo=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(recambio.intervaloTiempo)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
      let prescripcionDia=recambio.prescripcionDia.idPrescripcionDia;
      recambio.prescripcionDia={}
      recambio.prescripcionDia.idPrescripcionDia=prescripcionDia;
      recambios2.push(recambio);
    });

    const peticion2 = await fetch(servidorAPI + 'desencriptarBD/encriptarRecambios', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body:JSON.stringify(recambios2)
    });
  
  }

  let recambiosHechos = async () => {
    const peticion = await fetch(servidorAPI + 'desencriptarBD/getRecambiosHechos', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    const recambiosHechos = await peticion.json();
    console.log(recambiosHechos);
    let recambiosHechos2=new Array();
    recambiosHechos.forEach(recambioHecho => {
        recambioHecho.drenajeDialisis=decodeURIComponent(CryptoJS.AES.decrypt(recambioHecho.drenajeDialisis, "clave_secreta").toString(CryptoJS.enc.Utf8));
        recambioHecho.drenajeDialisis=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(recambioHecho.drenajeDialisis)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        
        recambioHecho.orificioSalida=decodeURIComponent(CryptoJS.AES.decrypt(recambioHecho.orificioSalida, "clave_secreta").toString(CryptoJS.enc.Utf8));
        recambioHecho.orificioSalida=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(recambioHecho.orificioSalida)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        
        recambioHecho.caracteristicaLiquido=decodeURIComponent(CryptoJS.AES.decrypt(recambioHecho.caracteristicaLiquido, "clave_secreta").toString(CryptoJS.enc.Utf8));
        recambioHecho.caracteristicaLiquido=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(recambioHecho.caracteristicaLiquido)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        
        recambioHecho.liquidoEntrante=decodeURIComponent(CryptoJS.AES.decrypt(recambioHecho.liquidoEntrante, "clave_secreta").toString(CryptoJS.enc.Utf8));
        recambioHecho.liquidoEntrante=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(recambioHecho.liquidoEntrante)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        
        recambiosHechos2.push(recambioHecho);
    });
    console.log(recambiosHechos2);

    const peticion2 = await fetch(servidorAPI + 'desencriptarBD/encriptarRecambiosHechos', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body:JSON.stringify(recambiosHechos2)
    });
  
  }
  
  let chequeosMensuales = async () => {
    const peticion = await fetch(servidorAPI + 'desencriptarBD/getChequeosMensuales', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    const chequeosMensuales = await peticion.json();
    console.log(chequeosMensuales);
    let chequeosMensuales2=new Array();
    chequeosMensuales.forEach(chequeoMensual => {
        chequeoMensual.colesterolTotal=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeoMensual.colesterolTotal)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        chequeoMensual.fosforo=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeoMensual.fosforo)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        chequeoMensual.glicemia=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeoMensual.glicemia)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        chequeoMensual.hdl=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeoMensual.hdl)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        chequeoMensual.hemoglobina=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeoMensual.hemoglobina)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        chequeoMensual.ldh=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeoMensual.ldh)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        chequeoMensual.nitrogenoUreico=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeoMensual.nitrogenoUreico)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        chequeoMensual.potasio=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeoMensual.potasio)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        chequeoMensual.tensionArterial=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeoMensual.tensionArterial)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        chequeoMensual.trigliceridos=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeoMensual.trigliceridos)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        chequeoMensual.peso=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeoMensual.peso)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        chequeoMensual.pesoSeco=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeoMensual.pesoSeco)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        chequeoMensual.glucosa=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeoMensual.glucosa)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        chequeoMensual.creatinina=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeoMensual.creatinina)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        chequeoMensual.ktv=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(chequeoMensual.ktv)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        chequeosMensuales2.push(chequeoMensual);
    });
    console.log(chequeosMensuales2);

    const peticion2 = await fetch(servidorAPI + 'desencriptarBD/encriptarChequeosMensuales', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body:JSON.stringify(chequeosMensuales2)
    });
  
  }

  let formulasMedicamentos = async () => {
    const peticion = await fetch(servidorAPI + 'desencriptarBD/getFormulasMedicamentos', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    const formulasMedicamentos = await peticion.json();
    console.log(formulasMedicamentos);

    let formulasMedicamentos2=new Array();
    formulasMedicamentos.forEach(formulaMedicamento => {
        //formulaMedicamento.tomas=CryptoJS.AES.decrypt(formulaMedicamento.tomas, "clave_secreta").toString(CryptoJS.enc.Utf8);
        formulaMedicamento.tomas=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(formulaMedicamento.tomas)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

        formulaMedicamento.concentracion=decodeURIComponent(CryptoJS.AES.decrypt(formulaMedicamento.concentracion, "clave_secreta").toString(CryptoJS.enc.Utf8));
        formulaMedicamento.concentracion=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(formulaMedicamento.concentracion)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        
        formulaMedicamento.descripcion=decodeURIComponent(CryptoJS.AES.decrypt(formulaMedicamento.descripcion, "clave_secreta").toString(CryptoJS.enc.Utf8));
        formulaMedicamento.descripcion=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(formulaMedicamento.descripcion)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        
        formulaMedicamento.nombre=decodeURIComponent(CryptoJS.AES.decrypt(formulaMedicamento.nombre, "clave_secreta").toString(CryptoJS.enc.Utf8));
        formulaMedicamento.nombre=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(formulaMedicamento.nombre)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        let cedula=formulaMedicamento.paciente.cedula;
        formulaMedicamento.paciente={};
        formulaMedicamento.paciente.cedula=decodeURIComponent(CryptoJS.AES.decrypt(cedula, "clave_secreta").toString(CryptoJS.enc.Utf8));
        formulaMedicamento.paciente.cedula=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(formulaMedicamento.paciente.cedula)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        
        formulasMedicamentos2.push(formulaMedicamento);
    });
    console.log(formulasMedicamentos2);

    const peticion2 = await fetch(servidorAPI + 'desencriptarBD/encriptarFormulasMedicamentos', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body:JSON.stringify(formulasMedicamentos2)
    });
  
  }
  let pacienteAlergias = async () => {
    const peticion = await fetch(servidorAPI + 'desencriptarBD/getPacientesAlergias', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    const pacienteAlergias = await peticion.json();
    console.log(pacienteAlergias);
    let pacienteAlergias2=new Array();
    pacienteAlergias.forEach(pacienteAlergia => {
        let id=pacienteAlergia.alergia.idAlergia;
        pacienteAlergia.alergia={};
        pacienteAlergia.alergia.idAlergia=id;
        pacienteAlergia.paciente.cedula=decodeURIComponent(CryptoJS.AES.decrypt(pacienteAlergia.paciente.cedula, "clave_secreta").toString(CryptoJS.enc.Utf8));
        let cedula=pacienteAlergia.paciente.cedula;
        pacienteAlergia.paciente={};
        pacienteAlergia.paciente.cedula=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(cedula)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();
        pacienteAlergias2.push(pacienteAlergia);
    });
    console.error("pacientes",pacienteAlergias2);

    const peticion2 = await fetch(servidorAPI + 'desencriptarBD/encriptarPacientesAlergias', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body:JSON.stringify(pacienteAlergias2)
    });
  
  }
  let admins = async () => {
    const peticion = await fetch(servidorAPI + 'desencriptarBD/findAdmins', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });

    const admins = await peticion.json();
    console.log(admins);
    let admins2=new Array();
    admins.forEach(admin => {
        admin.cedula=decodeURIComponent(CryptoJS.AES.decrypt(admin.cedula, "clave_secreta").toString(CryptoJS.enc.Utf8));
        admin.cedula=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(admin.cedula)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

        admin.celular=decodeURIComponent(CryptoJS.AES.decrypt(admin.celular, "clave_secreta").toString(CryptoJS.enc.Utf8));
        admin.celular=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(admin.celular)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

        admin.contrasenia=decodeURIComponent(CryptoJS.AES.decrypt(admin.contrasenia, "clave_secreta").toString(CryptoJS.enc.Utf8));
        admin.contrasenia=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(admin.contrasenia)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

        admin.nombre=decodeURIComponent(CryptoJS.AES.decrypt(admin.nombre, "clave_secreta").toString(CryptoJS.enc.Utf8));
        admin.nombre=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(admin.nombre)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

        admin.correo=decodeURIComponent(CryptoJS.AES.decrypt(admin.correo, "clave_secreta").toString(CryptoJS.enc.Utf8));
        admin.correo=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(admin.correo)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

        admin.tipoDocumento=decodeURIComponent(CryptoJS.AES.decrypt(admin.tipoDocumento, "clave_secreta").toString(CryptoJS.enc.Utf8));
        admin.tipoDocumento=CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(encodeURIComponent(admin.tipoDocumento)), CryptoJS.enc.Utf8.parse(cajaNegra2),{iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7}).toString();

        admins2.push(admin);
    });
    console.log("pacientes",admins2);

    const peticion2 = await fetch(servidorAPI + 'desencriptarBD/encriptarAdmins', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body:JSON.stringify(admins2)
    });
  
  }
  
  let enc=async()=>{
try{
  //await alergias();
  //console.log("listo");
  //await pacientes();
  //console.log("listo");
  //await medicos();
  //console.log("listo");
  //await citas();
  //console.log("listo");
  //await cuidadores();
  //console.log("listo");
  //await cuidadorPacientes();
  //console.log("listo");
  //await recambios();
  //console.log("listo");
  //await recambiosHechos();
  //console.log("listo");
  //await chequeosMensuales();
  //console.log("listo");
  //await formulasMedicamentos();
  //console.log("listo");
  //await pacienteAlergias();
  //console.log("listo");
  await admins();
}catch(error){
    console.log(error)
}

}
    /*function enc(){
        cuidadores();
    }*/
  eval(enc());