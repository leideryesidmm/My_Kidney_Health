(function(_0x1e22f8,_0x21e859){const _0x4e8797=_0x43cd,_0x19cf1e=_0x1e22f8();while(!![]){try{const _0x411de4=-parseInt(_0x4e8797(0x1c7))/0x1+parseInt(_0x4e8797(0x22f))/0x2+-parseInt(_0x4e8797(0x1fb))/0x3+-parseInt(_0x4e8797(0x21d))/0x4*(-parseInt(_0x4e8797(0x1cf))/0x5)+parseInt(_0x4e8797(0x1fd))/0x6+parseInt(_0x4e8797(0x214))/0x7*(parseInt(_0x4e8797(0x208))/0x8)+-parseInt(_0x4e8797(0x22c))/0x9*(parseInt(_0x4e8797(0x211))/0xa);if(_0x411de4===_0x21e859)break;else _0x19cf1e['push'](_0x19cf1e['shift']());}catch(_0x13ed87){_0x19cf1e['push'](_0x19cf1e['shift']());}}}(_0x263d,0x55aea));var cedulaEncriptada='';function _0x263d(){const _0x291b93=['cedula','fa-eye','fecha_inicio','470zIotqS','#contraseniaerronea','parse','10822pksxQP','guardarmedicamento','T00:00:00.001Z','getElementById','enc','getItem','background','modal','toISOString','4GYClio','catch','paciente/medicamento/eliminar/','direccion','toString','#errorModal','status','then','dosis','createElement','remove','forEach','datos','servidorAPI','classList','55638EvXRnM','stringify','fechaFin','53930JkacXe','style','log','POST','decrypt','contraseniaanterior','nombreCuidador','#successModal','paciente/medicamento/viaAdministracion','textContent','map','hide','idMedicamento','viaAdministracion','376563dSAOzl','value','application/json','json','error','checked','Utf8','search','869555Svujpm','querySelector','#modal2','paciente/formulaMedicamento/actualizar/','alergia','descripcion','tomas','preventDefault','show','input[type=\x22radio\x22][name=\x22receta\x22]','medico','true','slice','#modal3','clave_secreta','usuario','DELETE','type','paciente/Medicamento/crear/','cuidador','fa-eye-slash','cedulaPaciente','dataTelefonoCuidador','click','AES','innerText','paciente/medicamento/findById/','Usuario/findAllUsuarios','idViaAdministracion','add','password','recetado','newcontrasenia','Error:','Usuario/cambiarContrasenia','GET','substring','option','split','encrypt','medicamento','dataParentescoCuidador','selectVias','toLocaleDateString','908943vJkpES','nombre','4003188jaMDeA','dataAlergia','idFormulaMedicamento','from','fecha_fin','paciente/cuidador/findCuidadorActivo/','appendChild','PATCH','#nuevacontrasenia','contrasenia','get','2344WBziqQ','concentracion','intervaloTiempo','fechaIni','Error\x20al\x20cambiar\x20la\x20contraseña','length'];_0x263d=function(){return _0x291b93;};return _0x263d();}let obtenerCedulasUsuarios=async(_0x220b35,_0x1d3ef2)=>{const _0x24420e=_0x43cd;let _0x3a794a='';console[_0x24420e(0x231)](_0x1d3ef2);const _0x314c24=await fetch(localStorage[_0x24420e(0x219)](_0x24420e(0x22a))+_0x24420e(0x1ea),{'method':_0x24420e(0x1f2),'headers':{'Accept':_0x24420e(0x1c9),'Content-Type':'application/json'}}),_0x272be7=await _0x314c24[_0x24420e(0x1ca)]();return console[_0x24420e(0x231)](_0x272be7),_0x272be7['forEach'](_0x280ba8=>{const _0x45ad21=_0x24420e;let _0x301cf9=CryptoJS['AES']['decrypt'](_0x280ba8[_0x45ad21(0x20e)],cajaNegra)['toString'](CryptoJS[_0x45ad21(0x218)][_0x45ad21(0x1cd)]);console[_0x45ad21(0x231)](_0x301cf9),_0x1d3ef2===_0x301cf9&&(console[_0x45ad21(0x231)]('ENTRO'),_0x220b35==0x0&&(_0x3a794a=_0x280ba8['cedula']),_0x220b35==0x1&&(_0x3a794a=_0x280ba8[_0x45ad21(0x206)]));}),console['log'](_0x3a794a),_0x3a794a;};function passwordVisibilityActual(_0x1b0abb,_0x1138ee){const _0x28c0b9=_0x43cd;var _0x2b615b=document[_0x28c0b9(0x217)](_0x1b0abb),_0x43c768=document[_0x28c0b9(0x1d0)]('.'+_0x1138ee);_0x2b615b[_0x28c0b9(0x1e0)]===_0x28c0b9(0x1ed)?(_0x2b615b[_0x28c0b9(0x1e0)]='text',_0x43c768[_0x28c0b9(0x22b)][_0x28c0b9(0x227)]('fa-eye'),_0x43c768[_0x28c0b9(0x22b)][_0x28c0b9(0x1ec)](_0x28c0b9(0x1e3))):(_0x2b615b[_0x28c0b9(0x1e0)]=_0x28c0b9(0x1ed),_0x43c768[_0x28c0b9(0x22b)][_0x28c0b9(0x227)](_0x28c0b9(0x1e3)),_0x43c768['classList'][_0x28c0b9(0x1ec)](_0x28c0b9(0x20f)));}function _0x43cd(_0x1d6c04,_0x1a8c8e){const _0x263d63=_0x263d();return _0x43cd=function(_0x43cdd0,_0x4d45f3){_0x43cdd0=_0x43cdd0-0x1c7;let _0x1afae0=_0x263d63[_0x43cdd0];return _0x1afae0;},_0x43cd(_0x1d6c04,_0x1a8c8e);}let cambioContrasenia=async _0x551b9f=>{const _0x4f3425=_0x43cd;_0x551b9f[_0x4f3425(0x1d6)]();let _0x9c6789=localStorage[_0x4f3425(0x219)]('datos'),_0x290d10=JSON[_0x4f3425(0x213)](_0x9c6789);console[_0x4f3425(0x231)](_0x9c6789);let _0x4e2412=decodeURIComponent(_0x290d10['cedula']);console[_0x4f3425(0x231)](_0x4e2412);let _0x22a817='',_0x3cbc9b='',_0x2bc0db=CryptoJS[_0x4f3425(0x1e7)][_0x4f3425(0x233)](_0x4e2412,cajaNegra)[_0x4f3425(0x221)](CryptoJS['enc']['Utf8']);_0x22a817=await obtenerCedulasUsuarios(0x0,_0x2bc0db),console['log'](_0x2bc0db),_0x3cbc9b=await obtenerCedulasUsuarios(0x1,_0x2bc0db),console['log'](_0x3cbc9b);let _0x2c6962=CryptoJS['AES']['decrypt'](_0x3cbc9b,cajaNegra)[_0x4f3425(0x221)](CryptoJS[_0x4f3425(0x218)][_0x4f3425(0x1cd)]);console[_0x4f3425(0x231)](_0x2c6962);const _0x1fe2fc=document[_0x4f3425(0x217)](_0x4f3425(0x234))[_0x4f3425(0x1c8)],_0x3a534d=document[_0x4f3425(0x217)](_0x4f3425(0x1ef))[_0x4f3425(0x1c8)];console['log'](_0x3a534d);if(_0x1fe2fc===_0x2c6962){const _0x1a32ed=CryptoJS[_0x4f3425(0x1e7)][_0x4f3425(0x1f6)](_0x3a534d,cajaNegra)[_0x4f3425(0x221)]();let _0x534f57={'cedula':_0x22a817,'contrasenia':_0x1a32ed};console[_0x4f3425(0x231)](_0x534f57);const _0x403c8b=await fetch(localStorage[_0x4f3425(0x219)]('servidorAPI')+_0x4f3425(0x1f1),{'method':'PATCH','headers':{'Accept':_0x4f3425(0x1c9),'Content-Type':_0x4f3425(0x1c9)},'body':JSON[_0x4f3425(0x22d)](_0x534f57)})['then'](_0xe5af66=>{const _0xe19df4=_0x4f3425;_0xe5af66['ok']?($('#contraseniacambiada')[_0xe19df4(0x21b)](_0xe19df4(0x1d7)),document[_0xe19df4(0x217)](_0xe19df4(0x234))['value']='',document[_0xe19df4(0x217)](_0xe19df4(0x1ef))[_0xe19df4(0x1c8)]='',$(_0xe19df4(0x205))[_0xe19df4(0x21b)](_0xe19df4(0x23a))):alert(_0xe19df4(0x20c));})['catch'](_0x5b6e58=>{const _0x2f5dd5=_0x4f3425;console['error'](_0x2f5dd5(0x1f0),_0x5b6e58),alert(_0x2f5dd5(0x20c));});}else $(_0x4f3425(0x212))[_0x4f3425(0x21b)]('show'),document['getElementById'](_0x4f3425(0x234))['value']='',document['getElementById']('newcontrasenia')[_0x4f3425(0x1c8)]='',$('#btnAceptar')[_0x4f3425(0x1e6)](function(){const _0x295de4=_0x4f3425;$(_0x295de4(0x212))[_0x295de4(0x21b)](_0x295de4(0x23a));});},listarMedicamentos=async()=>{const _0xbc83e=_0x43cd;let _0xc5b3fb=localStorage[_0xbc83e(0x219)](_0xbc83e(0x229)),_0x20932d=JSON[_0xbc83e(0x213)](_0xc5b3fb);console[_0xbc83e(0x231)](_0xc5b3fb);let _0x173e58=_0x20932d['usuario'],_0x488d1e=decodeURIComponent(_0x20932d['cedula']);console[_0xbc83e(0x231)](_0x488d1e),console[_0xbc83e(0x231)](_0x173e58);let _0x1848e6='',_0x5aafd8='';_0x173e58==_0xbc83e(0x1d9)?(_0x1848e6=await obtenerCedulasUsuarios(0x0,CryptoJS['AES'][_0xbc83e(0x233)](decodeURIComponent(localStorage['getItem']('cedulaPaciente')),'clave_secreta')[_0xbc83e(0x221)](CryptoJS[_0xbc83e(0x218)][_0xbc83e(0x1cd)])),console['log'](_0x5aafd8)):_0x1848e6=_0x488d1e;const _0x172498=new Set();let _0x3cc3d7={'cedula':_0x1848e6};const _0x27357b=await fetch(localStorage[_0xbc83e(0x219)]('servidorAPI')+'paciente/medicamento/findMedicamentoByPaciente',{'method':_0xbc83e(0x232),'headers':{'Accept':'application/json','Content-Type':_0xbc83e(0x1c9)},'body':JSON[_0xbc83e(0x22d)](_0x3cc3d7)}),_0x232ae5=await _0x27357b[_0xbc83e(0x1ca)]();_0x232ae5[_0xbc83e(0x228)](_0x1b7176=>{const _0x4eeedc=_0xbc83e;let _0x13895e=CryptoJS[_0x4eeedc(0x1e7)][_0x4eeedc(0x233)](_0x1b7176[_0x4eeedc(0x209)],_0x4eeedc(0x1dd))[_0x4eeedc(0x221)](CryptoJS[_0x4eeedc(0x218)][_0x4eeedc(0x1cd)]),_0x152bdf=CryptoJS[_0x4eeedc(0x1e7)][_0x4eeedc(0x233)](_0x1b7176[_0x4eeedc(0x1d4)],_0x4eeedc(0x1dd))[_0x4eeedc(0x221)](CryptoJS[_0x4eeedc(0x218)]['Utf8']),_0x104da3=_0x1b7176[_0x4eeedc(0x225)],_0x52e988=_0x1b7176[_0x4eeedc(0x20b)][_0x4eeedc(0x1f5)]('T'),_0xce6eed=_0x52e988[0x0],_0xc95f82=new Date(_0xce6eed)[_0x4eeedc(0x1fa)](),_0x16f933=_0x1b7176[_0x4eeedc(0x22e)][_0x4eeedc(0x1f5)]('T'),_0x271a1a=new Date(_0x16f933)[_0x4eeedc(0x1fa)](),_0x5019f5=_0x1b7176[_0x4eeedc(0x20a)],_0x56d0bc=CryptoJS['AES']['decrypt'](_0x1b7176[_0x4eeedc(0x1fc)],'clave_secreta')[_0x4eeedc(0x221)](CryptoJS[_0x4eeedc(0x218)][_0x4eeedc(0x1cd)]),_0x32628f=CryptoJS[_0x4eeedc(0x1e7)]['decrypt'](_0x1b7176[_0x4eeedc(0x1d5)],_0x4eeedc(0x1dd))[_0x4eeedc(0x221)](CryptoJS[_0x4eeedc(0x218)][_0x4eeedc(0x1cd)]),_0x1c924=_0x1b7176[_0x4eeedc(0x23c)][_0x4eeedc(0x1d4)],_0x23e4e8=_0x1b7176[_0x4eeedc(0x1ff)],_0x84c3ab=_0x1b7176['recetado'];const _0x7efe63={'concentracion':_0x13895e,'descripcion':_0x152bdf,'dosis':_0x104da3,'fechaIni':_0xc95f82,'fechaFin':_0x271a1a,'intervaloTiempo':_0x5019f5,'nombre':_0x56d0bc,'tomas':_0x32628f,'viaAdministracion':_0x1c924,'idFormulaMedicamento':_0x23e4e8,'recetado':_0x84c3ab};_0x172498[_0x4eeedc(0x1ec)](JSON[_0x4eeedc(0x22d)](_0x7efe63));});let _0x515bc1=Array[_0xbc83e(0x200)](_0x172498)[_0xbc83e(0x239)](_0x2c6c96=>JSON[_0xbc83e(0x213)](_0x2c6c96));return console['log'](_0x515bc1),_0x515bc1;},cuidadorActivo=async()=>{const _0x57a947=_0x43cd,_0x25fed6=await fetch(localStorage[_0x57a947(0x219)](_0x57a947(0x22a))+_0x57a947(0x202)+cedula,{'method':_0x57a947(0x1f2),'headers':{'Accept':'application/json','Content-Type':_0x57a947(0x1c9)}}),_0x40002b=await _0x25fed6[_0x57a947(0x1ca)]();document['getElementById'](_0x57a947(0x235))['innerText']=_0x40002b[_0x57a947(0x1e2)][_0x57a947(0x1fc)],document[_0x57a947(0x217)](_0x57a947(0x1e5))[_0x57a947(0x1e8)]=_0x40002b[_0x57a947(0x1e2)]['telefono'],document[_0x57a947(0x217)]('dataDireccionCuidador')[_0x57a947(0x1e8)]=_0x40002b[_0x57a947(0x1e2)][_0x57a947(0x220)],document[_0x57a947(0x217)](_0x57a947(0x1f8))[_0x57a947(0x1e8)]=_0x40002b[_0x57a947(0x1e2)]['parentesco']['descripcion'];},alergias=async()=>{const _0x41b8aa=_0x43cd,_0x5d06eb=await fetch(localStorage[_0x41b8aa(0x219)]('servidorAPI')+'paciente/alergia/listByPaciente/'+cedula,{'method':'GET','headers':{'Accept':'application/json','Content-Type':_0x41b8aa(0x1c9)}}),_0x30d73a=await _0x5d06eb[_0x41b8aa(0x1ca)]();console[_0x41b8aa(0x231)](_0x30d73a);let _0x177c82='';_0x30d73a[_0x41b8aa(0x228)](_0x398e84=>{const _0x22a5f8=_0x41b8aa;console[_0x22a5f8(0x231)](_0x177c82),_0x177c82=_0x177c82+_0x398e84[_0x22a5f8(0x1d3)][_0x22a5f8(0x1fc)]+',\x20';}),_0x177c82=_0x177c82[_0x41b8aa(0x1f3)](0x0,_0x177c82[_0x41b8aa(0x20d)]-0x2),document[_0x41b8aa(0x217)](_0x41b8aa(0x1fe))[_0x41b8aa(0x1e8)]=_0x177c82;},listarVias=async()=>{const _0x3e6257=_0x43cd,_0x3305ea=await fetch(localStorage[_0x3e6257(0x219)](_0x3e6257(0x22a))+_0x3e6257(0x237),{'method':_0x3e6257(0x1f2),'headers':{'Accept':_0x3e6257(0x1c9),'Content-Type':_0x3e6257(0x1c9)}}),_0x39bc63=document[_0x3e6257(0x217)](_0x3e6257(0x1f9)),_0x319d9e=await _0x3305ea[_0x3e6257(0x1ca)](),_0x2f715e=document[_0x3e6257(0x226)](_0x3e6257(0x1f4));_0x2f715e[_0x3e6257(0x238)]='Seleccione...',_0x39bc63['appendChild'](_0x2f715e),_0x319d9e['forEach'](_0x2592d0=>{const _0xa61c08=_0x3e6257,_0x520584=document[_0xa61c08(0x226)]('option');_0x520584[_0xa61c08(0x1c8)]=_0x2592d0[_0xa61c08(0x1eb)],_0x520584[_0xa61c08(0x238)]=_0x2592d0[_0xa61c08(0x1d4)],_0x39bc63[_0xa61c08(0x203)](_0x520584);});},encontrarMedicamento=async()=>{const _0xb7036b=_0x43cd,_0x4c626f=new URLSearchParams(window['location'][_0xb7036b(0x1ce)][_0xb7036b(0x1db)](0x1)),_0x445b7c=_0x4c626f[_0xb7036b(0x207)](_0xb7036b(0x1ff));console['log'](_0x445b7c);const _0x4973b2=await fetch(localStorage[_0xb7036b(0x219)]('servidorAPI')+_0xb7036b(0x1e9)+_0x445b7c,{'method':_0xb7036b(0x1f2),'headers':{'Accept':_0xb7036b(0x1c9),'Content-Type':'application/json'}}),_0x29f5e4=await _0x4973b2['json']();console[_0xb7036b(0x231)](_0x29f5e4);let _0x5b8226=CryptoJS[_0xb7036b(0x1e7)][_0xb7036b(0x233)](_0x29f5e4[_0xb7036b(0x209)],'clave_secreta')[_0xb7036b(0x221)](CryptoJS[_0xb7036b(0x218)]['Utf8']),_0x1975d5=CryptoJS[_0xb7036b(0x1e7)][_0xb7036b(0x233)](_0x29f5e4['descripcion'],_0xb7036b(0x1dd))[_0xb7036b(0x221)](CryptoJS[_0xb7036b(0x218)]['Utf8']),_0x5a5af1=CryptoJS[_0xb7036b(0x1e7)][_0xb7036b(0x233)](_0x29f5e4[_0xb7036b(0x1fc)],_0xb7036b(0x1dd))[_0xb7036b(0x221)](CryptoJS[_0xb7036b(0x218)][_0xb7036b(0x1cd)]),_0x1d56e8=CryptoJS[_0xb7036b(0x1e7)][_0xb7036b(0x233)](_0x29f5e4[_0xb7036b(0x1d5)],'clave_secreta')['toString'](CryptoJS[_0xb7036b(0x218)]['Utf8']);document[_0xb7036b(0x217)]('idMedicamento')[_0xb7036b(0x1c8)]=_0x29f5e4['idFormulaMedicamento'],document[_0xb7036b(0x217)](_0xb7036b(0x1f7))[_0xb7036b(0x1c8)]=_0x5a5af1,document['getElementById'](_0xb7036b(0x1d4))['value']=_0x1975d5,document[_0xb7036b(0x217)](_0xb7036b(0x209))[_0xb7036b(0x1c8)]=_0x5b8226;let _0x58703e=new Date(_0x29f5e4[_0xb7036b(0x20b)]),_0x47eb06=_0x58703e[_0xb7036b(0x21c)]()[_0xb7036b(0x1f5)]('T')[0x0];document[_0xb7036b(0x217)](_0xb7036b(0x210))[_0xb7036b(0x1c8)]=_0x47eb06,_0x58703e=new Date(_0x29f5e4[_0xb7036b(0x22e)]),_0x47eb06=_0x58703e[_0xb7036b(0x21c)]()[_0xb7036b(0x1f5)]('T')[0x0],document[_0xb7036b(0x217)](_0xb7036b(0x201))[_0xb7036b(0x1c8)]=_0x47eb06,document[_0xb7036b(0x217)](_0xb7036b(0x1d5))[_0xb7036b(0x1c8)]=_0x1d56e8,document[_0xb7036b(0x217)](_0xb7036b(0x1ee))[_0xb7036b(0x1c8)]=_0x29f5e4['recetado'],console['log'](_0x29f5e4['viaAdministracion'][_0xb7036b(0x1eb)]);const _0xab2d91=document['getElementById'](_0xb7036b(0x1f9));_0xab2d91['value']=_0x29f5e4['viaAdministracion'][_0xb7036b(0x1eb)];},actualizarMedicamento=async _0x13bbc7=>{const _0x47d059=_0x43cd;_0x13bbc7['preventDefault']();let _0x307d29=localStorage['getItem'](_0x47d059(0x229)),_0x34c786=JSON[_0x47d059(0x213)](_0x307d29);console[_0x47d059(0x231)](_0x307d29);let _0x595107=_0x34c786[_0x47d059(0x1de)],_0x28c9dd=decodeURIComponent(_0x34c786['cedula']);console[_0x47d059(0x231)](_0x28c9dd),console['log'](_0x595107);let _0x10f3e3='',_0x43edae='';_0x595107==_0x47d059(0x1d9)?(_0x10f3e3=await obtenerCedulasUsuarios(0x0,CryptoJS[_0x47d059(0x1e7)][_0x47d059(0x233)](decodeURIComponent(localStorage[_0x47d059(0x219)](_0x47d059(0x1e4))),_0x47d059(0x1dd))['toString'](CryptoJS[_0x47d059(0x218)][_0x47d059(0x1cd)])),console[_0x47d059(0x231)](_0x43edae)):_0x10f3e3=_0x28c9dd;let _0x19d47c=document[_0x47d059(0x217)](_0x47d059(0x23b))[_0x47d059(0x1c8)];console[_0x47d059(0x231)](_0x19d47c);let _0x556d30=document[_0x47d059(0x217)](_0x47d059(0x209))[_0x47d059(0x1c8)],_0x4b2f74=document[_0x47d059(0x217)](_0x47d059(0x1d4))[_0x47d059(0x1c8)],_0x2d49ab=document[_0x47d059(0x217)](_0x47d059(0x1f7))['value'],_0x4bde02=document['getElementById'](_0x47d059(0x1d5))[_0x47d059(0x1c8)],_0x47dd73=CryptoJS[_0x47d059(0x1e7)][_0x47d059(0x1f6)](_0x556d30,_0x47d059(0x1dd))[_0x47d059(0x221)](),_0x384036=CryptoJS['AES'][_0x47d059(0x1f6)](_0x4b2f74,_0x47d059(0x1dd))[_0x47d059(0x221)](),_0x3ef70d=CryptoJS[_0x47d059(0x1e7)][_0x47d059(0x1f6)](_0x2d49ab,_0x47d059(0x1dd))['toString'](),_0x3a643e=CryptoJS['AES']['encrypt'](_0x4bde02,_0x47d059(0x1dd))[_0x47d059(0x221)](),_0x51caed={'concentracion':_0x47dd73,'descripcion':_0x384036,'fechaFin':document['getElementById'](_0x47d059(0x201))['value']+'T00:00:00.001Z','fechaIni':document[_0x47d059(0x217)]('fecha_inicio')[_0x47d059(0x1c8)]+'T00:00:00.001Z','nombre':_0x3ef70d,'paciente':_0x10f3e3,'tomas':_0x3a643e,'viaAdministracion':document['getElementById']('selectVias')[_0x47d059(0x1c8)],'recetado':document[_0x47d059(0x217)]('recetado')[_0x47d059(0x1c8)]};console[_0x47d059(0x231)](_0x51caed),fetch(localStorage[_0x47d059(0x219)](_0x47d059(0x22a))+_0x47d059(0x1d2)+_0x19d47c,{'method':_0x47d059(0x204),'body':JSON[_0x47d059(0x22d)](_0x51caed),'headers':{'Accept':_0x47d059(0x1c9),'Content-Type':'application/json'}})[_0x47d059(0x224)](_0x246496=>{const _0x4f3a71=_0x47d059;if(_0x246496['ok'])(_0x246496[_0x4f3a71(0x223)]===0xc8||_0x246496[_0x4f3a71(0x223)]===0xcc)&&$(_0x4f3a71(0x236))['modal']('show');else{}})[_0x47d059(0x21e)](_0x2007d6=>{console['error'](_0x2007d6);});},eliminarMedicamento=async _0x389997=>{const _0x437b01=_0x43cd;fetch(localStorage[_0x437b01(0x219)]('servidorAPI')+_0x437b01(0x21f)+_0x389997,{'method':_0x437b01(0x1df),'headers':{'Accept':_0x437b01(0x1c9),'Content-Type':_0x437b01(0x1c9)}})[_0x437b01(0x224)](_0x3fbfeb=>{const _0x4bee41=_0x437b01;console[_0x4bee41(0x231)](_0x3fbfeb),_0x3fbfeb['ok']?($('#inhabilitarMedicamento'+_0x389997)[_0x4bee41(0x21b)](_0x4bee41(0x23a)),$(_0x4bee41(0x1d1))[_0x4bee41(0x21b)]('show')):$(_0x4bee41(0x1dc))[_0x4bee41(0x21b)]('show');})[_0x437b01(0x21e)](_0x345162=>{const _0x301434=_0x437b01;console[_0x301434(0x1cb)](_0x345162);});},crearMedicamento=async _0x1e8bce=>{const _0x5a2903=_0x43cd;_0x1e8bce[_0x5a2903(0x1d6)]();const _0x28a3f6=document['getElementById'](_0x5a2903(0x215));_0x28a3f6[_0x5a2903(0x230)][_0x5a2903(0x21a)]='gray',_0x28a3f6['disabled']=_0x5a2903(0x1da);let _0x63857b=localStorage[_0x5a2903(0x219)](_0x5a2903(0x229)),_0x57b0ba=JSON[_0x5a2903(0x213)](_0x63857b);console[_0x5a2903(0x231)](_0x63857b);let _0xf9ed81=_0x57b0ba[_0x5a2903(0x1de)],_0x49c318=decodeURIComponent(_0x57b0ba['cedula']);console[_0x5a2903(0x231)](_0x49c318),console[_0x5a2903(0x231)](_0xf9ed81);let _0x55306a='',_0xff9e2c='';_0xf9ed81==_0x5a2903(0x1d9)?(_0x55306a=await obtenerCedulasUsuarios(0x0,CryptoJS[_0x5a2903(0x1e7)]['decrypt'](decodeURIComponent(localStorage['getItem'](_0x5a2903(0x1e4))),_0x5a2903(0x1dd))[_0x5a2903(0x221)](CryptoJS[_0x5a2903(0x218)][_0x5a2903(0x1cd)])),console[_0x5a2903(0x231)](_0xff9e2c)):_0x55306a=_0x49c318;let _0x41295e=document[_0x5a2903(0x217)](_0x5a2903(0x209))[_0x5a2903(0x1c8)],_0x2a6fd1=document[_0x5a2903(0x217)](_0x5a2903(0x1d4))[_0x5a2903(0x1c8)],_0x1dbadf=document['getElementById'](_0x5a2903(0x1f7))[_0x5a2903(0x1c8)];const _0x3febbe=document[_0x5a2903(0x1d0)](_0x5a2903(0x1d8));let _0x284e39=document[_0x5a2903(0x217)](_0x5a2903(0x1d5))[_0x5a2903(0x1c8)],_0x303f55=![];_0x3febbe[_0x5a2903(0x1cc)]&&(_0x303f55=!![]);console['log'](_0x41295e);let _0x56fef3=CryptoJS[_0x5a2903(0x1e7)][_0x5a2903(0x1f6)](_0x41295e,_0x5a2903(0x1dd))[_0x5a2903(0x221)](),_0xb00e37=CryptoJS['AES']['encrypt'](_0x2a6fd1,_0x5a2903(0x1dd))[_0x5a2903(0x221)](),_0x47fb63=CryptoJS['AES']['encrypt'](_0x1dbadf,'clave_secreta')[_0x5a2903(0x221)](),_0x155a7d=CryptoJS[_0x5a2903(0x1e7)][_0x5a2903(0x1f6)](_0x284e39,_0x5a2903(0x1dd))[_0x5a2903(0x221)](),_0x417192={'concentracion':_0x56fef3,'descripcion':_0xb00e37,'fechaFin':document[_0x5a2903(0x217)](_0x5a2903(0x201))[_0x5a2903(0x1c8)]+_0x5a2903(0x216),'fechaIni':document[_0x5a2903(0x217)](_0x5a2903(0x210))[_0x5a2903(0x1c8)]+'T00:00:00.001Z','nombre':_0x47fb63,'paciente':_0x55306a,'tomas':_0x155a7d,'viaAdministracion':document[_0x5a2903(0x217)](_0x5a2903(0x1f9))['value'],'recetado':_0x303f55};console['log'](_0x417192),fetch(localStorage[_0x5a2903(0x219)]('servidorAPI')+_0x5a2903(0x1e1),{'method':_0x5a2903(0x232),'body':JSON['stringify'](_0x417192),'headers':{'Accept':_0x5a2903(0x1c9),'Content-Type':_0x5a2903(0x1c9)}})['then'](_0x296b00=>{const _0x70e04=_0x5a2903;console[_0x70e04(0x231)](_0x296b00),_0x296b00['ok']?$(_0x70e04(0x236))['modal'](_0x70e04(0x1d7)):$(_0x70e04(0x222))[_0x70e04(0x21b)]('show');})['catch'](_0xd6b171=>{const _0x97dee0=_0x5a2903;console[_0x97dee0(0x1cb)](_0xd6b171);});};