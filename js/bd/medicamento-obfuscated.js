function _0x1552(_0x5704a2,_0x2f50f5){const _0x34e08c=_0x34e0();return _0x1552=function(_0x1552be,_0x3eba48){_0x1552be=_0x1552be-0x111;let _0x2a2cd6=_0x34e08c[_0x1552be];return _0x2a2cd6;},_0x1552(_0x5704a2,_0x2f50f5);}(function(_0x20f816,_0x43c7ea){const _0x384d2c=_0x1552,_0x2329a4=_0x20f816();while(!![]){try{const _0x48344f=-parseInt(_0x384d2c(0x11e))/0x1+-parseInt(_0x384d2c(0x175))/0x2*(-parseInt(_0x384d2c(0x16f))/0x3)+-parseInt(_0x384d2c(0x111))/0x4*(-parseInt(_0x384d2c(0x13d))/0x5)+-parseInt(_0x384d2c(0x15b))/0x6*(parseInt(_0x384d2c(0x117))/0x7)+parseInt(_0x384d2c(0x14c))/0x8+-parseInt(_0x384d2c(0x146))/0x9+parseInt(_0x384d2c(0x11c))/0xa;if(_0x48344f===_0x43c7ea)break;else _0x2329a4['push'](_0x2329a4['shift']());}catch(_0x5aebed){_0x2329a4['push'](_0x2329a4['shift']());}}}(_0x34e0,0x9f322));var cedulaEncriptada='';function _0x34e0(){const _0x50c845=['Utf8','Usuario/cambiarContrasenia','2RVGIgX','contrasenia','toISOString','guardarmedicamento','contraseniaanterior','newcontrasenia','dataAlergia','toString','fecha_fin','PATCH','slice','DatosMedicos/medicamento/findById/','true','1609588nUEjnS','mode','show','Error:','cedulaPaciente','T00:00:00.001Z','7rqtDBU','DatosMedicos/medicamento/eliminar/','password','split','#modal2','9535150thNtHP','CBC','678121DWTQga','location','Error\x20al\x20cambiar\x20la\x20contraseña','fechaFin','medico','parse','idFormulaMedicamento','option','getElementById','descripcion','#modal3','decrypt','search','add','#nuevacontrasenia','querySelector','error','usuario','fa-eye-slash','AES','from','hide','substring','textContent','style','text','catch','DatosMedicos/Medicamento/crear','modal','classList','Pkcs7','15azEuuA','forEach','alergia','#btnAceptar','type','log','gray','datos','tomas','9395388LPXtgC','pad','innerText','POST','createElement','enc','5668280oKXqLY','medicamento','json','getItem','viaAdministracion','administrador','#contraseniaerronea','stringify','DELETE','encrypt','appendChild','servidorAPI','then','remove','idViaAdministracion','6056604xkJpdo','fa-eye','intervaloTiempo','usuario\x20de\x20backend','token','#contraseniacambiada','selectVias','dosis','GET','idMedicamento','fecha_inicio','cedula','preventDefault','status','DatosMedicos/formulaMedicamento/actualizar/','concentracion','length','map','nombre','application/json','1542936uTXRpj','recetado','value','#successModal'];_0x34e0=function(){return _0x50c845;};return _0x34e0();}function passwordVisibilityActual(_0x14d1dd,_0x1e7951){const _0x674dc0=_0x1552;var _0x12d7fd=document[_0x674dc0(0x126)](_0x14d1dd),_0x390dcd=document['querySelector']('.'+_0x1e7951);_0x12d7fd[_0x674dc0(0x141)]===_0x674dc0(0x119)?(_0x12d7fd['type']=_0x674dc0(0x137),_0x390dcd[_0x674dc0(0x13b)][_0x674dc0(0x159)]('fa-eye'),_0x390dcd[_0x674dc0(0x13b)][_0x674dc0(0x12b)](_0x674dc0(0x130))):(_0x12d7fd[_0x674dc0(0x141)]=_0x674dc0(0x119),_0x390dcd[_0x674dc0(0x13b)][_0x674dc0(0x159)](_0x674dc0(0x130)),_0x390dcd[_0x674dc0(0x13b)][_0x674dc0(0x12b)](_0x674dc0(0x15c)));}let paciente=async _0x294e81=>{const _0x21d30a=_0x1552;usuario={'cedula':_0x294e81};let _0x2736a1=localStorage[_0x21d30a(0x14f)]('datos'),_0x409f3a=JSON[_0x21d30a(0x123)](_0x2736a1),_0x5e03d7=await fetch(localStorage[_0x21d30a(0x14f)](_0x21d30a(0x157))+'Usuario/cedula',{'method':_0x21d30a(0x149),'headers':{'Accept':_0x21d30a(0x16e),'Content-Type':'application/json','Authorization':_0x409f3a[_0x21d30a(0x15f)]},'body':JSON[_0x21d30a(0x153)](usuario)});if(_0x5e03d7[_0x21d30a(0x168)]===0xc8){const _0x51dac5=await _0x5e03d7['json']();return _0x51dac5;}else return null;},cambioContrasenia=async _0x33a5a5=>{const _0x230a9a=_0x1552;_0x33a5a5['preventDefault']();let _0x1c6162=localStorage['getItem']('datos'),_0x3e868b=JSON['parse'](_0x1c6162);console[_0x230a9a(0x142)](_0x1c6162);let _0x50ed76=_0x3e868b['cedula'];console[_0x230a9a(0x142)](_0x50ed76);const _0x264828=await paciente(_0x50ed76);console[_0x230a9a(0x142)](_0x230a9a(0x15e)),console[_0x230a9a(0x142)](_0x264828);let _0x47f59b='';_0x264828!=null&&(_0x47f59b=decodeURIComponent(CryptoJS[_0x230a9a(0x131)][_0x230a9a(0x129)](_0x264828[_0x230a9a(0x176)],CryptoJS['enc'][_0x230a9a(0x173)][_0x230a9a(0x123)](cajaNegra2),{'iv':CryptoJS[_0x230a9a(0x14b)]['Utf8'][_0x230a9a(0x123)](iv),'mode':CryptoJS['mode']['CBC'],'padding':CryptoJS[_0x230a9a(0x147)][_0x230a9a(0x13c)]})[_0x230a9a(0x17c)](CryptoJS[_0x230a9a(0x14b)][_0x230a9a(0x173)])));console[_0x230a9a(0x142)]('contraseniaBD'),console[_0x230a9a(0x142)](_0x47f59b);const _0x1ba572=document[_0x230a9a(0x126)](_0x230a9a(0x179))['value'],_0x527e59=document['getElementById']('newcontrasenia')[_0x230a9a(0x171)];let _0x1bedf3=CryptoJS[_0x230a9a(0x131)][_0x230a9a(0x155)](CryptoJS[_0x230a9a(0x14b)][_0x230a9a(0x173)][_0x230a9a(0x123)](encodeURIComponent(_0x527e59)),CryptoJS[_0x230a9a(0x14b)][_0x230a9a(0x173)][_0x230a9a(0x123)](cajaNegra2),{'iv':CryptoJS[_0x230a9a(0x14b)][_0x230a9a(0x173)][_0x230a9a(0x123)](iv),'mode':CryptoJS['mode'][_0x230a9a(0x11d)],'padding':CryptoJS[_0x230a9a(0x147)]['Pkcs7']})[_0x230a9a(0x17c)]();if(_0x1ba572===_0x47f59b){let _0x5c3f06={'cedula':_0x50ed76,'contrasenia':_0x1bedf3};await fetch(localStorage[_0x230a9a(0x14f)](_0x230a9a(0x157))+_0x230a9a(0x174),{'method':_0x230a9a(0x17e),'headers':{'Accept':_0x230a9a(0x16e),'Content-Type':_0x230a9a(0x16e),'Authorization':_0x3e868b[_0x230a9a(0x15f)]},'body':JSON[_0x230a9a(0x153)](_0x5c3f06)})[_0x230a9a(0x158)](_0x4da4ea=>{const _0xc4a589=_0x230a9a;if(_0x4da4ea['ok']){_0x3e868b['contrasenia']=_0x1bedf3;const _0x3cadaa=JSON['stringify'](_0x3e868b);localStorage['setItem'](_0xc4a589(0x144),_0x3cadaa),$(_0xc4a589(0x160))[_0xc4a589(0x13a)](_0xc4a589(0x113)),document['getElementById'](_0xc4a589(0x179))['value']='',document[_0xc4a589(0x126)](_0xc4a589(0x17a))['value']='',$(_0xc4a589(0x12c))[_0xc4a589(0x13a)]('hide');}else alert(_0xc4a589(0x120));})[_0x230a9a(0x138)](_0x463869=>{const _0x5de97e=_0x230a9a;console[_0x5de97e(0x12e)](_0x5de97e(0x114),_0x463869),alert(_0x5de97e(0x120));});}else $(_0x230a9a(0x152))['modal']('show'),document[_0x230a9a(0x126)](_0x230a9a(0x179))[_0x230a9a(0x171)]='',document['getElementById']('newcontrasenia')[_0x230a9a(0x171)]='',$(_0x230a9a(0x140))['click'](function(){const _0x332350=_0x230a9a;$(_0x332350(0x152))[_0x332350(0x13a)](_0x332350(0x133));});},listarMedicamentos=async()=>{const _0x5db21c=_0x1552;let _0x89e833=localStorage['getItem'](_0x5db21c(0x144)),_0x23008e=JSON[_0x5db21c(0x123)](_0x89e833);console[_0x5db21c(0x142)](_0x89e833);let _0x42f821=_0x23008e[_0x5db21c(0x12f)],_0x45abcb=_0x23008e[_0x5db21c(0x166)];console[_0x5db21c(0x142)](_0x45abcb),console[_0x5db21c(0x142)](_0x42f821);let _0x347182='';if(_0x42f821=='medico'||_0x42f821==_0x5db21c(0x151)){let _0x159327=localStorage[_0x5db21c(0x14f)]('cedulaPaciente');_0x347182=CryptoJS['AES'][_0x5db21c(0x155)](CryptoJS['enc'][_0x5db21c(0x173)][_0x5db21c(0x123)](encodeURIComponent(_0x159327)),CryptoJS[_0x5db21c(0x14b)]['Utf8'][_0x5db21c(0x123)](cajaNegra2),{'iv':CryptoJS[_0x5db21c(0x14b)]['Utf8'][_0x5db21c(0x123)](iv),'mode':CryptoJS[_0x5db21c(0x112)][_0x5db21c(0x11d)],'padding':CryptoJS[_0x5db21c(0x147)][_0x5db21c(0x13c)]})['toString']();}else _0x347182=_0x45abcb;const _0x187ff1=new Set();let _0x52ef80={'cedula':_0x347182};const _0x24c6b0=await fetch(localStorage[_0x5db21c(0x14f)](_0x5db21c(0x157))+'DatosMedicos/medicamento/findMedicamentoByPaciente',{'method':_0x5db21c(0x149),'headers':{'Accept':_0x5db21c(0x16e),'Content-Type':_0x5db21c(0x16e),'Authorization':_0x23008e['token']},'body':JSON[_0x5db21c(0x153)](_0x52ef80)}),_0xe95b1a=await _0x24c6b0[_0x5db21c(0x14e)]();_0xe95b1a['forEach'](_0x261e9b=>{const _0x19ad43=_0x5db21c;let _0x41b445=decodeURIComponent(CryptoJS[_0x19ad43(0x131)]['decrypt'](_0x261e9b[_0x19ad43(0x16a)],CryptoJS[_0x19ad43(0x14b)][_0x19ad43(0x173)][_0x19ad43(0x123)](cajaNegra2),{'iv':CryptoJS[_0x19ad43(0x14b)][_0x19ad43(0x173)]['parse'](iv),'mode':CryptoJS[_0x19ad43(0x112)][_0x19ad43(0x11d)],'padding':CryptoJS[_0x19ad43(0x147)][_0x19ad43(0x13c)]})['toString'](CryptoJS[_0x19ad43(0x14b)][_0x19ad43(0x173)])),_0x10e505=decodeURIComponent(CryptoJS[_0x19ad43(0x131)][_0x19ad43(0x129)](_0x261e9b[_0x19ad43(0x127)],CryptoJS[_0x19ad43(0x14b)][_0x19ad43(0x173)][_0x19ad43(0x123)](cajaNegra2),{'iv':CryptoJS[_0x19ad43(0x14b)]['Utf8'][_0x19ad43(0x123)](iv),'mode':CryptoJS['mode'][_0x19ad43(0x11d)],'padding':CryptoJS[_0x19ad43(0x147)][_0x19ad43(0x13c)]})[_0x19ad43(0x17c)](CryptoJS[_0x19ad43(0x14b)][_0x19ad43(0x173)])),_0x362a64=_0x261e9b[_0x19ad43(0x162)],_0x22e06e=new Date(_0x261e9b['fechaIni']),_0x20d967=_0x22e06e[_0x19ad43(0x177)]()[_0x19ad43(0x11a)]('T')[0x0],_0x2aeffd=_0x20d967;_0x22e06e=new Date(_0x261e9b[_0x19ad43(0x121)]),_0x20d967=_0x22e06e[_0x19ad43(0x177)]()[_0x19ad43(0x11a)]('T')[0x0];let _0x557ad5=_0x20d967,_0x1cc5da=_0x261e9b[_0x19ad43(0x15d)],_0x12afe5=decodeURIComponent(CryptoJS['AES'][_0x19ad43(0x129)](_0x261e9b[_0x19ad43(0x16d)],CryptoJS['enc'][_0x19ad43(0x173)][_0x19ad43(0x123)](cajaNegra2),{'iv':CryptoJS['enc'][_0x19ad43(0x173)][_0x19ad43(0x123)](iv),'mode':CryptoJS[_0x19ad43(0x112)][_0x19ad43(0x11d)],'padding':CryptoJS[_0x19ad43(0x147)][_0x19ad43(0x13c)]})[_0x19ad43(0x17c)](CryptoJS[_0x19ad43(0x14b)]['Utf8'])),_0x52170a=decodeURIComponent(CryptoJS[_0x19ad43(0x131)]['decrypt'](_0x261e9b['tomas'],CryptoJS[_0x19ad43(0x14b)]['Utf8'][_0x19ad43(0x123)](cajaNegra2),{'iv':CryptoJS[_0x19ad43(0x14b)][_0x19ad43(0x173)]['parse'](iv),'mode':CryptoJS[_0x19ad43(0x112)][_0x19ad43(0x11d)],'padding':CryptoJS['pad'][_0x19ad43(0x13c)]})['toString'](CryptoJS[_0x19ad43(0x14b)][_0x19ad43(0x173)])),_0x484665=_0x261e9b[_0x19ad43(0x150)][_0x19ad43(0x127)],_0x2449e2=_0x261e9b[_0x19ad43(0x124)],_0x3068ab=_0x261e9b[_0x19ad43(0x170)];const _0x5849d7={'concentracion':_0x41b445,'descripcion':_0x10e505,'dosis':_0x362a64,'fechaIni':_0x2aeffd,'fechaFin':_0x557ad5,'intervaloTiempo':_0x1cc5da,'nombre':_0x12afe5,'tomas':_0x52170a,'viaAdministracion':_0x484665,'idFormulaMedicamento':_0x2449e2,'recetado':_0x3068ab};_0x187ff1['add'](JSON[_0x19ad43(0x153)](_0x5849d7));});let _0xa2b2a4=Array[_0x5db21c(0x132)](_0x187ff1)[_0x5db21c(0x16c)](_0x1039a8=>JSON[_0x5db21c(0x123)](_0x1039a8));return console[_0x5db21c(0x142)](_0xa2b2a4),_0xa2b2a4;},alergias=async()=>{const _0xa9aec4=_0x1552;let _0x999ce7=localStorage[_0xa9aec4(0x14f)](_0xa9aec4(0x144)),_0x51f583=JSON[_0xa9aec4(0x123)](_0x999ce7);const _0x2bbdba=await fetch(localStorage[_0xa9aec4(0x14f)](_0xa9aec4(0x157))+'DatosMedicos/alergia/listByPaciente/'+cedula,{'method':'GET','headers':{'Accept':'application/json','Content-Type':_0xa9aec4(0x16e),'Authorization':_0x51f583[_0xa9aec4(0x15f)]}}),_0x13937f=await _0x2bbdba[_0xa9aec4(0x14e)]();console[_0xa9aec4(0x142)](_0x13937f);let _0x22a7e0='';_0x13937f[_0xa9aec4(0x13e)](_0x438efb=>{const _0x5cb21d=_0xa9aec4;console['log'](_0x22a7e0),_0x22a7e0=_0x22a7e0+_0x438efb[_0x5cb21d(0x13f)]['nombre']+',\x20';}),_0x22a7e0=_0x22a7e0[_0xa9aec4(0x134)](0x0,_0x22a7e0[_0xa9aec4(0x16b)]-0x2),document['getElementById'](_0xa9aec4(0x17b))[_0xa9aec4(0x148)]=_0x22a7e0;},listarVias=async()=>{const _0x5ae716=_0x1552;let _0x1240b9=localStorage[_0x5ae716(0x14f)](_0x5ae716(0x144)),_0x751801=JSON['parse'](_0x1240b9);const _0x54338b=await fetch(localStorage['getItem']('servidorAPI')+'DatosMedicos/medicamento/viaAdministracion',{'method':_0x5ae716(0x163),'headers':{'Accept':'application/json','Content-Type':_0x5ae716(0x16e),'Authorization':_0x751801[_0x5ae716(0x15f)]}}),_0xe6a77d=document[_0x5ae716(0x126)]('selectVias'),_0x33b97e=await _0x54338b[_0x5ae716(0x14e)](),_0xc8f846=document[_0x5ae716(0x14a)](_0x5ae716(0x125));_0xc8f846[_0x5ae716(0x135)]='Seleccione...',_0xe6a77d['appendChild'](_0xc8f846),_0x33b97e[_0x5ae716(0x13e)](_0x1fca83=>{const _0x4cb2bc=_0x5ae716,_0x79247d=document[_0x4cb2bc(0x14a)](_0x4cb2bc(0x125));_0x79247d[_0x4cb2bc(0x171)]=_0x1fca83[_0x4cb2bc(0x15a)],_0x79247d[_0x4cb2bc(0x135)]=_0x1fca83[_0x4cb2bc(0x127)],_0xe6a77d[_0x4cb2bc(0x156)](_0x79247d);});},encontrarMedicamento=async()=>{const _0x517608=_0x1552,_0x4031cf=new URLSearchParams(window[_0x517608(0x11f)][_0x517608(0x12a)][_0x517608(0x17f)](0x1)),_0x3ae1d4=_0x4031cf['get'](_0x517608(0x124));console[_0x517608(0x142)](_0x3ae1d4);let _0xa6d3e=localStorage[_0x517608(0x14f)]('datos'),_0x2bd906=JSON[_0x517608(0x123)](_0xa6d3e);const _0x59b12b=await fetch(localStorage[_0x517608(0x14f)]('servidorAPI')+_0x517608(0x180)+_0x3ae1d4,{'method':'GET','headers':{'Accept':_0x517608(0x16e),'Content-Type':_0x517608(0x16e),'Authorization':_0x2bd906[_0x517608(0x15f)]}}),_0x554ecf=await _0x59b12b[_0x517608(0x14e)]();console[_0x517608(0x142)](_0x554ecf);let _0x16c5ba=decodeURIComponent(CryptoJS[_0x517608(0x131)][_0x517608(0x129)](_0x554ecf['concentracion'],CryptoJS[_0x517608(0x14b)][_0x517608(0x173)][_0x517608(0x123)](cajaNegra2),{'iv':CryptoJS['enc'][_0x517608(0x173)][_0x517608(0x123)](iv),'mode':CryptoJS[_0x517608(0x112)][_0x517608(0x11d)],'padding':CryptoJS[_0x517608(0x147)]['Pkcs7']})[_0x517608(0x17c)](CryptoJS[_0x517608(0x14b)][_0x517608(0x173)])),_0x50fa40=decodeURIComponent(CryptoJS[_0x517608(0x131)][_0x517608(0x129)](_0x554ecf[_0x517608(0x127)],CryptoJS[_0x517608(0x14b)][_0x517608(0x173)]['parse'](cajaNegra2),{'iv':CryptoJS['enc']['Utf8'][_0x517608(0x123)](iv),'mode':CryptoJS[_0x517608(0x112)][_0x517608(0x11d)],'padding':CryptoJS[_0x517608(0x147)][_0x517608(0x13c)]})[_0x517608(0x17c)](CryptoJS[_0x517608(0x14b)][_0x517608(0x173)])),_0x11c10f=decodeURIComponent(CryptoJS['AES'][_0x517608(0x129)](_0x554ecf[_0x517608(0x16d)],CryptoJS[_0x517608(0x14b)][_0x517608(0x173)][_0x517608(0x123)](cajaNegra2),{'iv':CryptoJS[_0x517608(0x14b)][_0x517608(0x173)][_0x517608(0x123)](iv),'mode':CryptoJS[_0x517608(0x112)]['CBC'],'padding':CryptoJS[_0x517608(0x147)][_0x517608(0x13c)]})[_0x517608(0x17c)](CryptoJS[_0x517608(0x14b)][_0x517608(0x173)])),_0x9d8910=decodeURIComponent(CryptoJS['AES']['decrypt'](_0x554ecf['tomas'],CryptoJS[_0x517608(0x14b)][_0x517608(0x173)][_0x517608(0x123)](cajaNegra2),{'iv':CryptoJS[_0x517608(0x14b)][_0x517608(0x173)]['parse'](iv),'mode':CryptoJS['mode'][_0x517608(0x11d)],'padding':CryptoJS[_0x517608(0x147)]['Pkcs7']})[_0x517608(0x17c)](CryptoJS['enc'][_0x517608(0x173)]));document[_0x517608(0x126)](_0x517608(0x164))[_0x517608(0x171)]=_0x554ecf['idFormulaMedicamento'],document[_0x517608(0x126)](_0x517608(0x14d))[_0x517608(0x171)]=_0x11c10f,document['getElementById']('descripcion')[_0x517608(0x171)]=_0x50fa40,document[_0x517608(0x126)](_0x517608(0x16a))[_0x517608(0x171)]=_0x16c5ba;let _0x46518c=new Date(_0x554ecf['fechaIni']),_0x156349=_0x46518c[_0x517608(0x177)]()[_0x517608(0x11a)]('T')[0x0];document[_0x517608(0x126)](_0x517608(0x165))[_0x517608(0x171)]=_0x156349,_0x46518c=new Date(_0x554ecf[_0x517608(0x121)]),_0x156349=_0x46518c[_0x517608(0x177)]()['split']('T')[0x0],document[_0x517608(0x126)](_0x517608(0x17d))[_0x517608(0x171)]=_0x156349,document[_0x517608(0x126)](_0x517608(0x145))[_0x517608(0x171)]=_0x9d8910,document[_0x517608(0x126)](_0x517608(0x170))[_0x517608(0x171)]=_0x554ecf[_0x517608(0x170)],console[_0x517608(0x142)](_0x554ecf['viaAdministracion'][_0x517608(0x15a)]);const _0x369476=document[_0x517608(0x126)](_0x517608(0x161));console[_0x517608(0x142)](_0x369476),_0x369476['value']=_0x554ecf[_0x517608(0x150)][_0x517608(0x15a)];},actualizarMedicamento=async _0xda7e20=>{const _0x45623b=_0x1552;_0xda7e20[_0x45623b(0x167)]();let _0xc4ef1b=localStorage[_0x45623b(0x14f)]('datos'),_0x17e522=JSON[_0x45623b(0x123)](_0xc4ef1b);console['log'](_0xc4ef1b);let _0x5a7881=_0x17e522['usuario'],_0x44fbd7=_0x17e522['cedula'];console['log'](_0x44fbd7),console['log'](_0x5a7881);let _0x4a7598='';if(_0x5a7881==_0x45623b(0x122)||_0x5a7881==_0x45623b(0x151)){let _0x3dc019=localStorage[_0x45623b(0x14f)](_0x45623b(0x115));_0x4a7598=CryptoJS[_0x45623b(0x131)][_0x45623b(0x155)](CryptoJS[_0x45623b(0x14b)][_0x45623b(0x173)][_0x45623b(0x123)](encodeURIComponent(_0x3dc019)),CryptoJS[_0x45623b(0x14b)][_0x45623b(0x173)]['parse'](cajaNegra2),{'iv':CryptoJS[_0x45623b(0x14b)][_0x45623b(0x173)][_0x45623b(0x123)](iv),'mode':CryptoJS[_0x45623b(0x112)]['CBC'],'padding':CryptoJS[_0x45623b(0x147)]['Pkcs7']})['toString']();}else _0x4a7598=_0x44fbd7;let _0x21cf03=document[_0x45623b(0x126)]('idMedicamento')[_0x45623b(0x171)];console[_0x45623b(0x142)](_0x21cf03);let _0x2bd826=document[_0x45623b(0x126)](_0x45623b(0x16a))['value'],_0x70172c=document[_0x45623b(0x126)]('descripcion')[_0x45623b(0x171)],_0xf7ed0c=document[_0x45623b(0x126)](_0x45623b(0x14d))[_0x45623b(0x171)],_0x5d8732=document[_0x45623b(0x126)](_0x45623b(0x145))[_0x45623b(0x171)],_0x26f16e=CryptoJS[_0x45623b(0x131)][_0x45623b(0x155)](CryptoJS['enc'][_0x45623b(0x173)]['parse'](encodeURIComponent(_0x2bd826)),CryptoJS[_0x45623b(0x14b)][_0x45623b(0x173)][_0x45623b(0x123)](cajaNegra2),{'iv':CryptoJS[_0x45623b(0x14b)]['Utf8'][_0x45623b(0x123)](iv),'mode':CryptoJS[_0x45623b(0x112)][_0x45623b(0x11d)],'padding':CryptoJS[_0x45623b(0x147)]['Pkcs7']})[_0x45623b(0x17c)](),_0x707daf=CryptoJS[_0x45623b(0x131)][_0x45623b(0x155)](CryptoJS['enc']['Utf8']['parse'](encodeURIComponent(_0x70172c)),CryptoJS[_0x45623b(0x14b)][_0x45623b(0x173)]['parse'](cajaNegra2),{'iv':CryptoJS[_0x45623b(0x14b)]['Utf8'][_0x45623b(0x123)](iv),'mode':CryptoJS[_0x45623b(0x112)][_0x45623b(0x11d)],'padding':CryptoJS['pad'][_0x45623b(0x13c)]})[_0x45623b(0x17c)](),_0x3eb62a=CryptoJS[_0x45623b(0x131)][_0x45623b(0x155)](CryptoJS[_0x45623b(0x14b)][_0x45623b(0x173)][_0x45623b(0x123)](encodeURIComponent(_0xf7ed0c)),CryptoJS[_0x45623b(0x14b)]['Utf8'][_0x45623b(0x123)](cajaNegra2),{'iv':CryptoJS[_0x45623b(0x14b)]['Utf8']['parse'](iv),'mode':CryptoJS[_0x45623b(0x112)][_0x45623b(0x11d)],'padding':CryptoJS[_0x45623b(0x147)][_0x45623b(0x13c)]})[_0x45623b(0x17c)](),_0x5f5cb1=CryptoJS[_0x45623b(0x131)][_0x45623b(0x155)](CryptoJS[_0x45623b(0x14b)]['Utf8']['parse'](encodeURIComponent(_0x5d8732)),CryptoJS[_0x45623b(0x14b)][_0x45623b(0x173)][_0x45623b(0x123)](cajaNegra2),{'iv':CryptoJS[_0x45623b(0x14b)]['Utf8'][_0x45623b(0x123)](iv),'mode':CryptoJS[_0x45623b(0x112)][_0x45623b(0x11d)],'padding':CryptoJS[_0x45623b(0x147)][_0x45623b(0x13c)]})['toString'](),_0x948c9c={'concentracion':_0x26f16e,'descripcion':_0x707daf,'fechaFin':document[_0x45623b(0x126)](_0x45623b(0x17d))[_0x45623b(0x171)]+_0x45623b(0x116),'fechaIni':document[_0x45623b(0x126)](_0x45623b(0x165))[_0x45623b(0x171)]+_0x45623b(0x116),'nombre':_0x3eb62a,'paciente':_0x4a7598,'tomas':_0x5f5cb1,'viaAdministracion':document['getElementById'](_0x45623b(0x161))[_0x45623b(0x171)],'recetado':document[_0x45623b(0x126)](_0x45623b(0x170))[_0x45623b(0x171)]};console['log'](_0x948c9c),fetch(localStorage[_0x45623b(0x14f)](_0x45623b(0x157))+_0x45623b(0x169)+_0x21cf03,{'method':_0x45623b(0x17e),'body':JSON[_0x45623b(0x153)](_0x948c9c),'headers':{'Accept':_0x45623b(0x16e),'Content-Type':'application/json','Authorization':_0x17e522[_0x45623b(0x15f)]}})['then'](_0x1ba347=>{const _0x384af8=_0x45623b;if(_0x1ba347['ok'])(_0x1ba347[_0x384af8(0x168)]===0xc8||_0x1ba347[_0x384af8(0x168)]===0xcc)&&$(_0x384af8(0x172))[_0x384af8(0x13a)](_0x384af8(0x113));else{}})[_0x45623b(0x138)](_0x16dce9=>{const _0x542dcf=_0x45623b;console[_0x542dcf(0x12e)](_0x16dce9);});},eliminarMedicamento=async _0x43d69d=>{const _0x2bdf80=_0x1552;let _0x299847=localStorage[_0x2bdf80(0x14f)]('datos'),_0x257d7d=JSON['parse'](_0x299847);fetch(localStorage[_0x2bdf80(0x14f)](_0x2bdf80(0x157))+_0x2bdf80(0x118)+_0x43d69d,{'method':_0x2bdf80(0x154),'headers':{'Accept':'application/json','Content-Type':_0x2bdf80(0x16e),'Authorization':_0x257d7d[_0x2bdf80(0x15f)]}})[_0x2bdf80(0x158)](_0x40babd=>{const _0x1d60c7=_0x2bdf80;console[_0x1d60c7(0x142)](_0x40babd),_0x40babd['ok']?($('#inhabilitarMedicamento'+_0x43d69d)[_0x1d60c7(0x13a)](_0x1d60c7(0x133)),$(_0x1d60c7(0x11b))[_0x1d60c7(0x13a)](_0x1d60c7(0x113))):$(_0x1d60c7(0x128))[_0x1d60c7(0x13a)](_0x1d60c7(0x113));})[_0x2bdf80(0x138)](_0x2b2fce=>{console['error'](_0x2b2fce);});},crearMedicamento=async _0x1dd8fd=>{const _0xa74bc7=_0x1552;_0x1dd8fd['preventDefault']();const _0x43bb0c=document[_0xa74bc7(0x126)](_0xa74bc7(0x178));_0x43bb0c[_0xa74bc7(0x136)]['background']=_0xa74bc7(0x143),_0x43bb0c['disabled']=_0xa74bc7(0x181);let _0x1e87c7=localStorage['getItem']('datos'),_0xa4532d=JSON[_0xa74bc7(0x123)](_0x1e87c7);console['log'](_0x1e87c7);let _0x56edd8=_0xa4532d['usuario'],_0x2d1fd6=_0xa4532d[_0xa74bc7(0x166)];console[_0xa74bc7(0x142)](_0x2d1fd6),console[_0xa74bc7(0x142)](_0x56edd8);let _0x6557f8='';if(_0x56edd8==_0xa74bc7(0x122)||_0x56edd8==_0xa74bc7(0x151)){let _0x59649c=localStorage[_0xa74bc7(0x14f)](_0xa74bc7(0x115));_0x6557f8=CryptoJS['AES'][_0xa74bc7(0x155)](CryptoJS[_0xa74bc7(0x14b)]['Utf8'][_0xa74bc7(0x123)](encodeURIComponent(_0x59649c)),CryptoJS[_0xa74bc7(0x14b)][_0xa74bc7(0x173)]['parse'](cajaNegra2),{'iv':CryptoJS[_0xa74bc7(0x14b)][_0xa74bc7(0x173)][_0xa74bc7(0x123)](iv),'mode':CryptoJS[_0xa74bc7(0x112)]['CBC'],'padding':CryptoJS[_0xa74bc7(0x147)][_0xa74bc7(0x13c)]})[_0xa74bc7(0x17c)]();}else _0x6557f8=_0x2d1fd6;let _0x55cfe3=document[_0xa74bc7(0x126)](_0xa74bc7(0x16a))['value'],_0x1bbe31=document[_0xa74bc7(0x126)]('descripcion')[_0xa74bc7(0x171)],_0x1e65c8=document[_0xa74bc7(0x126)]('medicamento')[_0xa74bc7(0x171)];const _0x24853e=document[_0xa74bc7(0x12d)]('input[type=\x22radio\x22][name=\x22receta\x22]');let _0x44531f=document[_0xa74bc7(0x126)]('tomas')[_0xa74bc7(0x171)],_0x477824=![];_0x24853e['checked']&&(_0x477824=!![]);console[_0xa74bc7(0x142)](_0x55cfe3);let _0x29ab8e=CryptoJS[_0xa74bc7(0x131)][_0xa74bc7(0x155)](CryptoJS[_0xa74bc7(0x14b)]['Utf8']['parse'](encodeURIComponent(_0x55cfe3)),CryptoJS[_0xa74bc7(0x14b)][_0xa74bc7(0x173)][_0xa74bc7(0x123)](cajaNegra2),{'iv':CryptoJS[_0xa74bc7(0x14b)][_0xa74bc7(0x173)]['parse'](iv),'mode':CryptoJS[_0xa74bc7(0x112)][_0xa74bc7(0x11d)],'padding':CryptoJS[_0xa74bc7(0x147)][_0xa74bc7(0x13c)]})['toString'](),_0x77c1e4=CryptoJS[_0xa74bc7(0x131)][_0xa74bc7(0x155)](CryptoJS[_0xa74bc7(0x14b)][_0xa74bc7(0x173)][_0xa74bc7(0x123)](encodeURIComponent(_0x1bbe31)),CryptoJS[_0xa74bc7(0x14b)][_0xa74bc7(0x173)][_0xa74bc7(0x123)](cajaNegra2),{'iv':CryptoJS['enc'][_0xa74bc7(0x173)]['parse'](iv),'mode':CryptoJS[_0xa74bc7(0x112)][_0xa74bc7(0x11d)],'padding':CryptoJS[_0xa74bc7(0x147)][_0xa74bc7(0x13c)]})[_0xa74bc7(0x17c)](),_0x500994=CryptoJS['AES'][_0xa74bc7(0x155)](CryptoJS[_0xa74bc7(0x14b)][_0xa74bc7(0x173)]['parse'](encodeURIComponent(_0x1e65c8)),CryptoJS[_0xa74bc7(0x14b)]['Utf8'][_0xa74bc7(0x123)](cajaNegra2),{'iv':CryptoJS[_0xa74bc7(0x14b)][_0xa74bc7(0x173)][_0xa74bc7(0x123)](iv),'mode':CryptoJS[_0xa74bc7(0x112)][_0xa74bc7(0x11d)],'padding':CryptoJS['pad']['Pkcs7']})[_0xa74bc7(0x17c)](),_0x521486=CryptoJS['AES']['encrypt'](CryptoJS[_0xa74bc7(0x14b)][_0xa74bc7(0x173)][_0xa74bc7(0x123)](encodeURIComponent(_0x44531f)),CryptoJS['enc'][_0xa74bc7(0x173)][_0xa74bc7(0x123)](cajaNegra2),{'iv':CryptoJS[_0xa74bc7(0x14b)]['Utf8'][_0xa74bc7(0x123)](iv),'mode':CryptoJS['mode'][_0xa74bc7(0x11d)],'padding':CryptoJS[_0xa74bc7(0x147)][_0xa74bc7(0x13c)]})[_0xa74bc7(0x17c)]();console[_0xa74bc7(0x142)](_0xa74bc7(0x145)),console[_0xa74bc7(0x142)](_0x521486);let _0x5da107={'concentracion':_0x29ab8e,'descripcion':_0x77c1e4,'fechaFin':document[_0xa74bc7(0x126)](_0xa74bc7(0x17d))[_0xa74bc7(0x171)]+'T00:00:00.001Z','fechaIni':document[_0xa74bc7(0x126)]('fecha_inicio')[_0xa74bc7(0x171)]+'T00:00:00.001Z','nombre':_0x500994,'paciente':_0x6557f8,'tomas':_0x521486,'viaAdministracion':parseInt(document[_0xa74bc7(0x126)](_0xa74bc7(0x161))[_0xa74bc7(0x171)]),'recetado':_0x477824};console[_0xa74bc7(0x142)](_0x5da107),fetch(localStorage[_0xa74bc7(0x14f)](_0xa74bc7(0x157))+_0xa74bc7(0x139),{'method':'POST','body':JSON[_0xa74bc7(0x153)](_0x5da107),'headers':{'Accept':_0xa74bc7(0x16e),'Content-Type':'application/json','Authorization':_0xa4532d[_0xa74bc7(0x15f)]}})['then'](_0x19f634=>{const _0x19b79b=_0xa74bc7;console[_0x19b79b(0x142)](_0x19f634),_0x19f634['ok']?$(_0x19b79b(0x172))['modal'](_0x19b79b(0x113)):$('#errorModal')[_0x19b79b(0x13a)](_0x19b79b(0x113));})[_0xa74bc7(0x138)](_0x9b591=>{console['error'](_0x9b591);});};