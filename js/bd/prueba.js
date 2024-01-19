var CryptoJS = require("crypto-js");


let servidorAPI = "http://localhost:8104/";
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
        alergia.nombre=CryptoJS.AES.decrypt(alergia.nombre, "clave_secreta").toString(CryptoJS.enc.Utf8);
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
          paciente.nombre = CryptoJS.AES.decrypt(paciente.nombre, "clave_secreta").toString(CryptoJS.enc.Utf8);
          //paciente.altura = CryptoJS.AES.decrypt(paciente.altura, "clave_secreta").toString(CryptoJS.enc.Utf8);
          paciente.direccion=CryptoJS.AES.decrypt(paciente.direccion, "clave_secreta").toString(CryptoJS.enc.Utf8);
          paciente.ocupacion=CryptoJS.AES.decrypt(paciente.ocupacion, "clave_secreta").toString(CryptoJS.enc.Utf8);
          //paciente.peso=CryptoJS.AES.decrypt(paciente.peso, "clave_secreta").toString(CryptoJS.enc.Utf8);
          //paciente.pesoSeco=CryptoJS.AES.decrypt(paciente.pesoSeco, "clave_secreta").toString(CryptoJS.enc.Utf8);
          //paciente.rh=CryptoJS.AES.decrypt(paciente.rh, "clave_secreta").toString(CryptoJS.enc.Utf8);
          paciente.tipoSangre=CryptoJS.AES.decrypt(paciente.tipoSangre, "clave_secreta").toString(CryptoJS.enc.Utf8);
          paciente.cedula=CryptoJS.AES.decrypt(paciente.cedula, "clave_secreta").toString(CryptoJS.enc.Utf8);
          paciente.contrasenia=CryptoJS.AES.decrypt(paciente.contrasenia, "clave_secreta").toString(CryptoJS.enc.Utf8);
          paciente.celular=CryptoJS.AES.decrypt(paciente.celular, "clave_secreta").toString(CryptoJS.enc.Utf8);
          paciente.correo=CryptoJS.AES.decrypt(paciente.correo, "clave_secreta").toString(CryptoJS.enc.Utf8);
          paciente.tipoDocumento=CryptoJS.AES.decrypt(paciente.tipoDocumento, "clave_secreta").toString(CryptoJS.enc.Utf8);
  
          pacientes2.push(paciente);
          } catch (error) {
          console.error("Error en desencriptación:", error);
          console.log("Datos problemáticos:", paciente);
        }
      });
  
      console.log("Datos después de desencriptar:", pacientes2);
  
      const peticion2 = await fetch(servidorAPI + 'desencriptarBD/encriptarPacientes', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pacientes2)
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
        medico.nombre=CryptoJS.AES.decrypt(medico.nombre, "clave_secreta").toString(CryptoJS.enc.Utf8);
        medico.profesion=CryptoJS.AES.decrypt(medico.profesion, "clave_secreta").toString(CryptoJS.enc.Utf8);
        medico.cedula=CryptoJS.AES.decrypt(medico.cedula, "clave_secreta").toString(CryptoJS.enc.Utf8);
        medico.contrasenia=CryptoJS.AES.decrypt(medico.contrasenia, "clave_secreta").toString(CryptoJS.enc.Utf8);
        medico.celular=CryptoJS.AES.decrypt(medico.celular, "clave_secreta").toString(CryptoJS.enc.Utf8);
        medico.correo=CryptoJS.AES.decrypt(medico.correo, "clave_secreta").toString(CryptoJS.enc.Utf8);
        medico.tipoDocumento=CryptoJS.AES.decrypt(medico.tipoDocumento, "clave_secreta").toString(CryptoJS.enc.Utf8);

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
        cita.orificioSalida=CryptoJS.AES.decrypt(cita.orificioSalida, "clave_secreta").toString(CryptoJS.enc.Utf8);
        cita.paciente.cedula=CryptoJS.AES.decrypt(cita.paciente.cedula, "clave_secreta").toString(CryptoJS.enc.Utf8);
        cita.medico.cedula=CryptoJS.AES.decrypt(cita.medico.cedula, "clave_secreta").toString(CryptoJS.enc.Utf8);
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
        cuidador.cedulaCuidador=CryptoJS.AES.decrypt(cuidador.cedulaCuidador, "clave_secreta").toString(CryptoJS.enc.Utf8);
        cuidador.direccion=CryptoJS.AES.decrypt(cuidador.direccion, "clave_secreta").toString(CryptoJS.enc.Utf8);
        cuidador.nombre=CryptoJS.AES.decrypt(cuidador.nombre, "clave_secreta").toString(CryptoJS.enc.Utf8);
        cuidador.telefono=CryptoJS.AES.decrypt(cuidador.telefono, "clave_secreta").toString(CryptoJS.enc.Utf8);
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
        cuidadorPaciente.cuidador.cedulaCuidador=CryptoJS.AES.decrypt(cuidadorPaciente.cuidador.cedulaCuidador, "clave_secreta").toString(CryptoJS.enc.Utf8);
        cuidadorPaciente.paciente.cedula=CryptoJS.AES.decrypt(cuidadorPaciente.paciente.cedula, "clave_secreta").toString(CryptoJS.enc.Utf8);
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

    const peticion2 = await fetch(servidorAPI + 'desencriptarBD/encriptarRecambios', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body:JSON.stringify(recambios)
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
        recambioHecho.drenajeDialisis=CryptoJS.AES.decrypt(recambioHecho.drenajeDialisis, "clave_secreta").toString(CryptoJS.enc.Utf8);
        recambioHecho.orificioSalida=CryptoJS.AES.decrypt(recambioHecho.orificioSalida, "clave_secreta").toString(CryptoJS.enc.Utf8);
        recambioHecho.caracteristicaLiquido=CryptoJS.AES.decrypt(recambioHecho.caracteristicaLiquido, "clave_secreta").toString(CryptoJS.enc.Utf8);
        recambioHecho.liquidoEntrante=CryptoJS.AES.decrypt(recambioHecho.liquidoEntrante, "clave_secreta").toString(CryptoJS.enc.Utf8);
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
    /*chequeosMensuales.forEach(chequeoMensual => {
        chequeoMensual.colesterolTotal=CryptoJS.AES.decrypt(chequeoMensual.colesterolTotal, "clave_secreta").toString(CryptoJS.enc.Utf8);
        chequeoMensual.fosforo=CryptoJS.AES.decrypt(chequeoMensual.fosforo, "clave_secreta").toString(CryptoJS.enc.Utf8);
        chequeoMensual.glicemia=CryptoJS.AES.decrypt(chequeoMensual.glicemia, "clave_secreta").toString(CryptoJS.enc.Utf8);
        chequeoMensual.hdl=CryptoJS.AES.decrypt(chequeoMensual.hdl, "clave_secreta").toString(CryptoJS.enc.Utf8);
        chequeoMensual.hemoglobina=CryptoJS.AES.decrypt(chequeoMensual.hemoglobina, "clave_secreta").toString(CryptoJS.enc.Utf8);
        chequeoMensual.ldh=CryptoJS.AES.decrypt(chequeoMensual.ldh, "clave_secreta").toString(CryptoJS.enc.Utf8);
        chequeoMensual.nitrogenoUreico=CryptoJS.AES.decrypt(chequeoMensual.nitrogenoUreico, "clave_secreta").toString(CryptoJS.enc.Utf8);
        chequeoMensual.potasio=CryptoJS.AES.decrypt(chequeoMensual.potasio, "clave_secreta").toString(CryptoJS.enc.Utf8);
        chequeoMensual.tensionArterial=CryptoJS.AES.decrypt(chequeoMensual.tensionArterial, "clave_secreta").toString(CryptoJS.enc.Utf8);
        chequeoMensual.trigliceridos=CryptoJS.AES.decrypt(chequeoMensual.trigliceridos, "clave_secreta").toString(CryptoJS.enc.Utf8);
        chequeoMensual.peso=CryptoJS.AES.decrypt(chequeoMensual.peso, "clave_secreta").toString(CryptoJS.enc.Utf8);
        chequeoMensual.pesoSeco=CryptoJS.AES.decrypt(chequeoMensual.pesoSeco, "clave_secreta").toString(CryptoJS.enc.Utf8);
        chequeoMensual.glucosa=CryptoJS.AES.decrypt(chequeoMensual.glucosa, "clave_secreta").toString(CryptoJS.enc.Utf8);
        chequeoMensual.creatinina=CryptoJS.AES.decrypt(chequeoMensual.creatinina, "clave_secreta").toString(CryptoJS.enc.Utf8);
        chequeoMensual.ktv=CryptoJS.AES.decrypt(chequeoMensual.ktv, "clave_secreta").toString(CryptoJS.enc.Utf8);
        chequeosMensuales2.push(chequeoMensual);
    });*/
    console.log(chequeosMensuales);

    const peticion2 = await fetch(servidorAPI + 'desencriptarBD/encriptarChequeosMensuales', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body:JSON.stringify(chequeosMensuales)
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
        formulaMedicamento.tomas=CryptoJS.AES.decrypt(formulaMedicamento.tomas, "clave_secreta").toString(CryptoJS.enc.Utf8);
        formulaMedicamento.concentracion=CryptoJS.AES.decrypt(formulaMedicamento.concentracion, "clave_secreta").toString(CryptoJS.enc.Utf8);
        formulaMedicamento.descripcion=CryptoJS.AES.decrypt(formulaMedicamento.descripcion, "clave_secreta").toString(CryptoJS.enc.Utf8);
        formulaMedicamento.nombre=CryptoJS.AES.decrypt(formulaMedicamento.nombre, "clave_secreta").toString(CryptoJS.enc.Utf8);
        formulaMedicamento.paciente.cedula=CryptoJS.AES.decrypt(formulaMedicamento.paciente.cedula, "clave_secreta").toString(CryptoJS.enc.Utf8);
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
        pacienteAlergia.paciente.cedula=CryptoJS.AES.decrypt(pacienteAlergia.paciente.cedula, "clave_secreta").toString(CryptoJS.enc.Utf8);
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
        admin.cedula=CryptoJS.AES.decrypt(admin.cedula, "clave_secreta").toString(CryptoJS.enc.Utf8);
        admin.celular=CryptoJS.AES.decrypt(admin.celular, "clave_secreta").toString(CryptoJS.enc.Utf8);
        admin.contrasenia=CryptoJS.AES.decrypt(admin.contrasenia, "clave_secreta").toString(CryptoJS.enc.Utf8);
        admin.nombre=CryptoJS.AES.decrypt(admin.nombre, "clave_secreta").toString(CryptoJS.enc.Utf8);
        admin.correo=CryptoJS.AES.decrypt(admin.correo, "clave_secreta").toString(CryptoJS.enc.Utf8);
        admin.tipoDocumento=CryptoJS.AES.decrypt(admin.tipoDocumento, "clave_secreta").toString(CryptoJS.enc.Utf8);

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
  /*await alergias();
  console.log("listo");
  await pacientes();
  console.log("listo");
  await medicos();
  console.log("listo");
  await citas();
  console.log("listo");
  await cuidadores();
  console.log("listo");
  await cuidadorPacientes();
  console.log("listo");
  await recambios();
  console.log("listo");
  await recambiosHechos();
  console.log("listo");
  await chequeosMensuales();
  console.log("listo");
  await formulasMedicamentos();
  console.log("listo");
  await pacienteAlergias();
  console.log("listo");
  await admins();*/  await chequeosMensuales();

}catch(error){
    console.log(error)
}

}
    /*function enc(){
        cuidadores();
    }*/
  eval(enc());