var fs=require("fs")

var jsObfuscator=require("javascript-obfuscator")



//---bd/

fs.readFile('bd/agg-pacientes.js','UTF-8',function(error,code){
    if(error){
        throw error;
    }var obfuscateResult=jsObfuscator.obfuscate(code);
    fs.writeFile('bd/agg-pacientes-obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError){
            return console.log(fsError);
        }
        console.log("El codigo de agg-pacientes.js fue ofuscado");
    })
})

fs.readFile('bd/alergia.js','UTF-8',function(error,code){
    if(error){
        throw error;
    }var obfuscateResult=jsObfuscator.obfuscate(code);
    fs.writeFile('bd/alergia-obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError){
            return console.log(fsError);
        }
        console.log("El codigo de alergia.js fue ofuscado");
    })
})

fs.readFile('bd/cambioContrasenia.js','UTF-8',function(error,code){
    if(error){
        throw error;
    }var obfuscateResult=jsObfuscator.obfuscate(code);
    fs.writeFile('bd/cambioContrasenia-obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError){
            return console.log(fsError);
        }
        console.log("El codigo de cambioContrasenia.js fue ofuscado");
    })
})

fs.readFile('bd/cuidador.js','UTF-8',function(error,code){
    if(error){
        throw error;
    }var obfuscateResult=jsObfuscator.obfuscate(code);
    fs.writeFile('bd/cuidador-obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError){
            return console.log(fsError);
        }
        console.log("El codigo de cuidador.js fue ofuscado");
    })
})

fs.readFile('bd/login.js','UTF-8',function(error,code){
    if(error){
        throw error;
    }var obfuscateResult=jsObfuscator.obfuscate(code);
    fs.writeFile('bd/login-obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError){
            return console.log(fsError);
        }
        console.log("El codigo de login.js fue ofuscado");
    })
})

fs.readFile('bd/medicamento.js','UTF-8',function(error,code){
    if(error){
        throw error;
    }var obfuscateResult=jsObfuscator.obfuscate(code);
    fs.writeFile('bd/medicamento-obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError){
            return console.log(fsError);
        }
        console.log("El codigo de medicamento.js fue ofuscado");
    })
})

fs.readFile('bd/medico.js','UTF-8',function(error,code){
    if(error){
        throw error;
    }var obfuscateResult=jsObfuscator.obfuscate(code);
    fs.writeFile('bd/medico-obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError){
            return console.log(fsError);
        }
        console.log("El codigo de medico.js fue ofuscado");
    })
})

fs.readFile('bd/nombreNavBar.js','UTF-8',function(error,code){
    if(error){
        throw error;
    }var obfuscateResult=jsObfuscator.obfuscate(code);
    fs.writeFile('bd/nombreNavBar-obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError){
            return console.log(fsError);
        }
        console.log("El codigo de nombreNavBar.js fue ofuscado");
    })
})


fs.readFile('bd/paciente.js','UTF-8',function(error,code){
    if(error){
        throw error;
    }var obfuscateResult=jsObfuscator.obfuscate(code);
    fs.writeFile('bd/paciente-obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError){
            return console.log(fsError);
        }
        console.log("El codigo de paciente.js fue ofuscado");
    })
})

fs.readFile('bd/pacientes.js','UTF-8',function(error,code){
    if(error){
        throw error;
    }var obfuscateResult=jsObfuscator.obfuscate(code);
    fs.writeFile('bd/pacientes-obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError){
            return console.log(fsError);
        }
        console.log("El codigo de pacientes.js fue ofuscado");
    })
})

fs.readFile('bd/prescripcion.js','UTF-8',function(error,code){
    if(error){
        throw error;
    }var obfuscateResult=jsObfuscator.obfuscate(code);
    fs.writeFile('bd/prescripcion-obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError){
            return console.log(fsError);
        }
        console.log("El codigo de prescripcion.js fue ofuscado");
    })
})



//---functions/

fs.readFile('functions/alergia.js','UTF-8',function(error,code){
    if(error){
        throw error;
    }var obfuscateResult=jsObfuscator.obfuscate(code);
    fs.writeFile('functions/alergia-obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError){
            return console.log(fsError);
        }
        console.log("El codigo de alergia.js fue ofuscado");
    })
})


fs.readFile('functions/calendar.js','UTF-8',function(error,code){
    if(error){
        throw error;
    }var obfuscateResult=jsObfuscator.obfuscate(code);
    fs.writeFile('functions/calendar-obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError){
            return console.log(fsError);
        }
        console.log("El codigo de calendar.js fue ofuscado");
    })
})

fs.readFile('functions/cuidadorActivo.js','UTF-8',function(error,code){
    if(error){
        throw error;
    }var obfuscateResult=jsObfuscator.obfuscate(code);
    fs.writeFile('functions/cuidadorActivo-obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError){
            return console.log(fsError);
        }
        console.log("El codigo de cuidadorActivo.js fue ofuscado");
    })
})

fs.readFile('functions/medicamento.js','UTF-8',function(error,code){
    if(error){
        throw error;
    }var obfuscateResult=jsObfuscator.obfuscate(code);
    fs.writeFile('functions/medicamento-obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError){
            return console.log(fsError);
        }
        console.log("El codigo de medicamento.js fue ofuscado");
    })
})

fs.readFile('functions/medico.js','UTF-8',function(error,code){
    if(error){
        throw error;
    }var obfuscateResult=jsObfuscator.obfuscate(code);
    fs.writeFile('functions/medico-obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError){
            return console.log(fsError);
        }
        console.log("El codigo de medico.js fue ofuscado");
    })
})

fs.readFile('functions/paciente.js','UTF-8',function(error,code){
    if(error){
        throw error;
    }var obfuscateResult=jsObfuscator.obfuscate(code);
    fs.writeFile('functions/paciente-obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError){
            return console.log(fsError);
        }
        console.log("El codigo de paciente.js fue ofuscado");
    })
})

fs.readFile('functions/pacientes.js','UTF-8',function(error,code){
    if(error){
        throw error;
    }var obfuscateResult=jsObfuscator.obfuscate(code);
    fs.writeFile('functions/pacientes-obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError){
            return console.log(fsError);
        }
        console.log("El codigo de pacientes.js fue ofuscado");
    })
})

fs.readFile('functions/prescripcion.js','UTF-8',function(error,code){
    if(error){
        throw error;
    }var obfuscateResult=jsObfuscator.obfuscate(code);
    fs.writeFile('functions/prescripcion-obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError){
            return console.log(fsError);
        }
        console.log("El codigo de prescripcion.js fue ofuscado");
    })
})


fs.readFile('functions/principal.js','UTF-8',function(error,code){
    if(error){
        throw error;
    }var obfuscateResult=jsObfuscator.obfuscate(code);
    fs.writeFile('functions/principal-obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError){
            return console.log(fsError);
        }
        console.log("El codigo de principal.js fue ofuscado");
    })
})

fs.readFile('functions/recambios.js','UTF-8',function(error,code){
    if(error){
        throw error;
    }var obfuscateResult=jsObfuscator.obfuscate(code);
    fs.writeFile('functions/recambios-obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError){
            return console.log(fsError);
        }
        console.log("El codigo de recambios.js fue ofuscado");
    })
})

fs.readFile('functions/script.js','UTF-8',function(error,code){
    if(error){
        throw error;
    }var obfuscateResult=jsObfuscator.obfuscate(code);
    fs.writeFile('functions/script-obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError){
            return console.log(fsError);
        }
        console.log("El codigo de script.js fue ofuscado");
    })
})