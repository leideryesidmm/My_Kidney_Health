(function(_0xb4a70e,_0x4ff8ef){const _0x14c284=_0x4441,_0x3374b8=_0xb4a70e();while(!![]){try{const _0x17305c=-parseInt(_0x14c284(0x115))/0x1+parseInt(_0x14c284(0xf4))/0x2*(parseInt(_0x14c284(0xfe))/0x3)+-parseInt(_0x14c284(0xfd))/0x4+parseInt(_0x14c284(0x11a))/0x5*(-parseInt(_0x14c284(0x113))/0x6)+parseInt(_0x14c284(0xd0))/0x7+-parseInt(_0x14c284(0xeb))/0x8+parseInt(_0x14c284(0xdd))/0x9;if(_0x17305c===_0x4ff8ef)break;else _0x3374b8['push'](_0x3374b8['shift']());}catch(_0x3506c5){_0x3374b8['push'](_0x3374b8['shift']());}}}(_0x27d4,0x605af));var cedulaEncriptada='';function passwordVisibilityActual(_0x1c3d7e,_0x258b52){const _0x710723=_0x4441;var _0xd11308=document['getElementById'](_0x1c3d7e),_0x34dd5b=document[_0x710723(0x10d)]('.'+_0x258b52);_0xd11308[_0x710723(0xde)]===_0x710723(0x108)?(_0xd11308[_0x710723(0xde)]='text',_0x34dd5b[_0x710723(0x10b)]['remove'](_0x710723(0x118)),_0x34dd5b[_0x710723(0x10b)][_0x710723(0xd8)](_0x710723(0xd3))):(_0xd11308[_0x710723(0xde)]=_0x710723(0x108),_0x34dd5b['classList'][_0x710723(0x107)](_0x710723(0xd3)),_0x34dd5b[_0x710723(0x10b)][_0x710723(0xd8)](_0x710723(0x118)));}function _0x4441(_0x452a65,_0x11e2c3){const _0x27d4df=_0x27d4();return _0x4441=function(_0x44414a,_0x1cff57){_0x44414a=_0x44414a-0xcc;let _0x374788=_0x27d4df[_0x44414a];return _0x374788;},_0x4441(_0x452a65,_0x11e2c3);}function _0x27d4(){const _0x4dd12a=['cedula\x20paciente\x20alergia','DatosMedicos/alergia/crear','DatosMedicos/alergia/inactivar','application/json','Utf8','medico','datos','2638944hmIwWq','18srpwYY','parse','getItem','nombre','guardarAlergia','Pkcs7','encrypt','alergia','#nuevacontrasenia','remove','password','hide','reload','classList','#contraseniacambiada','querySelector','log','json','enc','toString','getElementById','73224hMaTJR','value','178897fDdViM','newcontrasenia','pad','fa-eye','stringify','10FyPQgn','CBC','forEach','click','nombreCrear','118027IUfwEr','preventDefault','#errorModal','fa-eye-slash','disabeld','then','servidorAPI','push','add','show','status','AES','cedulaPaciente','9236493qAHwEG','type','#btnAceptar','gray','cedula','PATCH','contrasenia','background','usuario\x20de\x20backend','Usuario/cedula','#contraseniaerronea','#agregaralergia','error','decrypt','906992uRFjBC','POST','usuario','mode','catch','contraseniaanterior','modal','Usuario/cambiarContrasenia','Error:','109316PBTxhN','idAlergia'];_0x27d4=function(){return _0x4dd12a;};return _0x27d4();}let paciente=async _0x5f4622=>{const _0x5b06a7=_0x4441;usuario={'cedula':_0x5f4622};let _0x58d36c=await fetch(localStorage['getItem']('servidorAPI')+_0x5b06a7(0xe6),{'method':'POST','headers':{'Accept':'application/json','Content-Type':_0x5b06a7(0xf9)},'body':JSON['stringify'](usuario)});if(_0x58d36c[_0x5b06a7(0xda)]===0xc8){const _0x36b173=await _0x58d36c[_0x5b06a7(0x10f)]();return _0x36b173;}else return null;},cambioContrasenia=async _0x5f4bc2=>{const _0x210357=_0x4441;_0x5f4bc2['preventDefault']();let _0x542339=localStorage[_0x210357(0x100)](_0x210357(0xfc)),_0x2537c3=JSON[_0x210357(0xff)](_0x542339);console[_0x210357(0x10e)](_0x542339);let _0x4b8202=_0x2537c3[_0x210357(0xe1)];console[_0x210357(0x10e)](_0x4b8202);const _0x4f1698=await paciente(_0x4b8202);console['log'](_0x210357(0xe5)),console[_0x210357(0x10e)](_0x4f1698);let _0x446ee7='';_0x4f1698!=null&&(_0x446ee7=decodeURIComponent(CryptoJS[_0x210357(0xdb)]['decrypt'](_0x4f1698[_0x210357(0xe3)],CryptoJS[_0x210357(0x110)]['Utf8'][_0x210357(0xff)](cajaNegra2),{'iv':CryptoJS[_0x210357(0x110)][_0x210357(0xfa)][_0x210357(0xff)](iv),'mode':CryptoJS[_0x210357(0xee)]['CBC'],'padding':CryptoJS[_0x210357(0x117)][_0x210357(0x103)]})[_0x210357(0x111)](CryptoJS[_0x210357(0x110)]['Utf8'])));console[_0x210357(0x10e)]('contraseniaBD'),console[_0x210357(0x10e)](_0x446ee7);const _0x5e20c6=document[_0x210357(0x112)](_0x210357(0xf0))[_0x210357(0x114)],_0x2dd5e4=document[_0x210357(0x112)](_0x210357(0x116))[_0x210357(0x114)];let _0x2129fb=CryptoJS[_0x210357(0xdb)][_0x210357(0x104)](CryptoJS['enc'][_0x210357(0xfa)][_0x210357(0xff)](encodeURIComponent(_0x2dd5e4)),CryptoJS[_0x210357(0x110)]['Utf8'][_0x210357(0xff)](cajaNegra2),{'iv':CryptoJS[_0x210357(0x110)][_0x210357(0xfa)]['parse'](iv),'mode':CryptoJS['mode'][_0x210357(0xcc)],'padding':CryptoJS['pad']['Pkcs7']})[_0x210357(0x111)]();if(_0x5e20c6===_0x446ee7){let _0x86f9f9={'cedula':_0x4b8202,'contrasenia':_0x2129fb};await fetch(localStorage['getItem'](_0x210357(0xd6))+_0x210357(0xf2),{'method':'PATCH','headers':{'Accept':_0x210357(0xf9),'Content-Type':'application/json'},'body':JSON['stringify'](_0x86f9f9)})[_0x210357(0xd5)](_0x532df9=>{const _0x36ce89=_0x210357;if(_0x532df9['ok']){_0x2537c3[_0x36ce89(0xe3)]=_0x2129fb;const _0x5daa84=JSON['stringify'](_0x2537c3);localStorage['setItem'](_0x36ce89(0xfc),_0x5daa84),$(_0x36ce89(0x10c))[_0x36ce89(0xf1)](_0x36ce89(0xd9)),document[_0x36ce89(0x112)](_0x36ce89(0xf0))[_0x36ce89(0x114)]='',document['getElementById'](_0x36ce89(0x116))[_0x36ce89(0x114)]='',$(_0x36ce89(0x106))[_0x36ce89(0xf1)](_0x36ce89(0x109));}else alert('Error\x20al\x20cambiar\x20la\x20contraseña');})[_0x210357(0xef)](_0x4ec142=>{const _0x248cc0=_0x210357;console[_0x248cc0(0xe9)](_0x248cc0(0xf3),_0x4ec142),alert('Error\x20al\x20cambiar\x20la\x20contraseña');});}else $(_0x210357(0xe7))[_0x210357(0xf1)](_0x210357(0xd9)),document[_0x210357(0x112)](_0x210357(0xf0))[_0x210357(0x114)]='',document['getElementById'](_0x210357(0x116))[_0x210357(0x114)]='',$(_0x210357(0xdf))[_0x210357(0xce)](function(){const _0x54dd4e=_0x210357;$(_0x54dd4e(0xe7))[_0x54dd4e(0xf1)](_0x54dd4e(0x109));});},crearAlergia=async()=>{document['getElementById']('guardarAlergia')['addEventListener']('click',async function(_0x17a2e4){const _0x2a57ad=_0x4441;_0x17a2e4[_0x2a57ad(0xd1)]();const _0x188c0c=document[_0x2a57ad(0x112)](_0x2a57ad(0x102));_0x188c0c['style']['background']=_0x2a57ad(0xe0),_0x188c0c[_0x2a57ad(0xd4)]='true';let _0x57b5a5=localStorage['getItem']('datos'),_0x103cba=JSON[_0x2a57ad(0xff)](_0x57b5a5);console['log'](_0x57b5a5);let _0x5a44d4=_0x103cba[_0x2a57ad(0xed)];console[_0x2a57ad(0x10e)](_0x5a44d4);let _0x220dde=_0x103cba[_0x2a57ad(0xe1)],_0x27f7e5=localStorage[_0x2a57ad(0x100)](_0x2a57ad(0xdc));console[_0x2a57ad(0x10e)](_0x2a57ad(0xf6)),console[_0x2a57ad(0x10e)](_0x27f7e5);let _0x5e9f81=_0x5a44d4=_0x2a57ad(0xfb)?CryptoJS[_0x2a57ad(0xdb)]['encrypt'](CryptoJS[_0x2a57ad(0x110)][_0x2a57ad(0xfa)][_0x2a57ad(0xff)](encodeURIComponent(_0x27f7e5)),CryptoJS['enc'][_0x2a57ad(0xfa)]['parse'](cajaNegra2),{'iv':CryptoJS[_0x2a57ad(0x110)][_0x2a57ad(0xfa)][_0x2a57ad(0xff)](iv),'mode':CryptoJS[_0x2a57ad(0xee)][_0x2a57ad(0xcc)],'padding':CryptoJS[_0x2a57ad(0x117)][_0x2a57ad(0x103)]})[_0x2a57ad(0x111)]():_0x220dde,_0x4fd055=document[_0x2a57ad(0x112)](_0x2a57ad(0xcf))['value'],_0x13bd66=CryptoJS[_0x2a57ad(0xdb)][_0x2a57ad(0x104)](CryptoJS[_0x2a57ad(0x110)][_0x2a57ad(0xfa)]['parse'](encodeURIComponent(_0x4fd055)),CryptoJS[_0x2a57ad(0x110)][_0x2a57ad(0xfa)][_0x2a57ad(0xff)](cajaNegra2),{'iv':CryptoJS[_0x2a57ad(0x110)][_0x2a57ad(0xfa)][_0x2a57ad(0xff)](iv),'mode':CryptoJS[_0x2a57ad(0xee)][_0x2a57ad(0xcc)],'padding':CryptoJS['pad'][_0x2a57ad(0x103)]})[_0x2a57ad(0x111)](),_0x505cff={'nombre':_0x13bd66},_0x4e2cae={'cedula':_0x5e9f81},_0x4c51ae={'alergiaInDto':_0x505cff,'pacienteInDto':_0x4e2cae};fetch(localStorage[_0x2a57ad(0x100)](_0x2a57ad(0xd6))+_0x2a57ad(0xf7),{'method':'POST','body':JSON[_0x2a57ad(0x119)](_0x4c51ae),'headers':{'Accept':_0x2a57ad(0xf9),'Content-Type':_0x2a57ad(0xf9)}})[_0x2a57ad(0xd5)](_0xa0982d=>{const _0x319e6a=_0x2a57ad;console[_0x319e6a(0x10e)](_0xa0982d),_0xa0982d['ok']?($(_0x319e6a(0xe8))[_0x319e6a(0xf1)](_0x319e6a(0x109)),location[_0x319e6a(0x10a)]()):$(_0x319e6a(0xd2))[_0x319e6a(0xf1)](_0x319e6a(0xd9));})['catch'](_0xb2440c=>{console['error'](_0xb2440c);});});},listarAlergias=async()=>{const _0x1538c6=_0x4441;let _0x5a02fb=localStorage[_0x1538c6(0x100)](_0x1538c6(0xfc)),_0x4f8c38=JSON[_0x1538c6(0xff)](_0x5a02fb);console['log'](_0x5a02fb);let _0x4cc197=_0x4f8c38['usuario'],_0x2e639b=_0x4f8c38[_0x1538c6(0xe1)];console[_0x1538c6(0x10e)](_0x2e639b),console[_0x1538c6(0x10e)](_0x4cc197);let _0x2a17b0='';if(_0x4cc197==_0x1538c6(0xfb)){let _0x3360ab=localStorage[_0x1538c6(0x100)]('cedulaPaciente');_0x2a17b0=CryptoJS[_0x1538c6(0xdb)][_0x1538c6(0x104)](CryptoJS['enc'][_0x1538c6(0xfa)]['parse'](encodeURIComponent(_0x3360ab)),CryptoJS[_0x1538c6(0x110)][_0x1538c6(0xfa)]['parse'](cajaNegra2),{'iv':CryptoJS[_0x1538c6(0x110)][_0x1538c6(0xfa)][_0x1538c6(0xff)](iv),'mode':CryptoJS['mode'][_0x1538c6(0xcc)],'padding':CryptoJS['pad']['Pkcs7']})[_0x1538c6(0x111)]();}else _0x2a17b0=_0x2e639b;pacienteInDto={'cedula':_0x2a17b0};const _0x500c03=await fetch(localStorage[_0x1538c6(0x100)](_0x1538c6(0xd6))+'DatosMedicos/alergia/listByPaciente',{'method':_0x1538c6(0xec),'headers':{'Accept':_0x1538c6(0xf9),'Content-Type':_0x1538c6(0xf9)},'body':JSON[_0x1538c6(0x119)](pacienteInDto)}),_0x118bb6=await _0x500c03['json']();console['log'](_0x118bb6);let _0x3b3a2b=[];return _0x118bb6[_0x1538c6(0xcd)](_0x13e3e4=>{const _0xd6fe84=_0x1538c6;let _0x4f853c=decodeURIComponent(CryptoJS[_0xd6fe84(0xdb)][_0xd6fe84(0xea)](_0x13e3e4['alergia'][_0xd6fe84(0x101)],CryptoJS[_0xd6fe84(0x110)][_0xd6fe84(0xfa)]['parse'](cajaNegra2),{'iv':CryptoJS[_0xd6fe84(0x110)][_0xd6fe84(0xfa)][_0xd6fe84(0xff)](iv),'mode':CryptoJS[_0xd6fe84(0xee)][_0xd6fe84(0xcc)],'padding':CryptoJS[_0xd6fe84(0x117)][_0xd6fe84(0x103)]})[_0xd6fe84(0x111)](CryptoJS[_0xd6fe84(0x110)][_0xd6fe84(0xfa)])),_0x42c993={'idAlergia':_0x13e3e4[_0xd6fe84(0x105)][_0xd6fe84(0xf5)],'nombre':_0x4f853c};_0x3b3a2b[_0xd6fe84(0xd7)](_0x42c993);}),_0x3b3a2b;},editarAlergia=async _0x4a8ee6=>{const _0x5626ca=_0x4441;nombreInput=document[_0x5626ca(0x112)]('nombreEditar'+_0x4a8ee6)['value'],console[_0x5626ca(0x10e)](nombreInput);const _0x2a0227=document[_0x5626ca(0x112)]('editarAlergia');_0x2a0227['style'][_0x5626ca(0xe4)]=_0x5626ca(0xe0),_0x2a0227[_0x5626ca(0xd4)]='true';let _0x412809=CryptoJS['AES'][_0x5626ca(0x104)](CryptoJS[_0x5626ca(0x110)][_0x5626ca(0xfa)]['parse'](encodeURIComponent(nombreInput)),CryptoJS[_0x5626ca(0x110)]['Utf8'][_0x5626ca(0xff)](cajaNegra2),{'iv':CryptoJS[_0x5626ca(0x110)]['Utf8']['parse'](iv),'mode':CryptoJS['mode'][_0x5626ca(0xcc)],'padding':CryptoJS[_0x5626ca(0x117)][_0x5626ca(0x103)]})[_0x5626ca(0x111)]();fetch(localStorage[_0x5626ca(0x100)](_0x5626ca(0xd6))+'DatosMedicos/alergia/editar/'+_0x4a8ee6,{'method':_0x5626ca(0xe2),'body':JSON['stringify']({'nombre':_0x412809}),'headers':{'Accept':_0x5626ca(0xf9),'Content-Type':_0x5626ca(0xf9)}})[_0x5626ca(0xd5)](_0x505c46=>{const _0x148c92=_0x5626ca;console[_0x148c92(0x10e)](_0x505c46),_0x505c46['ok']?($('#editaralergia'+_0x4a8ee6)[_0x148c92(0xf1)](_0x148c92(0x109)),location[_0x148c92(0x10a)]()):$(_0x148c92(0xd2))[_0x148c92(0xf1)](_0x148c92(0xd9));})['catch'](_0x40dbb2=>{const _0x20ab22=_0x5626ca;console[_0x20ab22(0xe9)](_0x40dbb2);});},inhabilitarAlergia=async _0x5c83d5=>{const _0x59343b=_0x4441;let _0x3df60b=localStorage[_0x59343b(0x100)](_0x59343b(0xfc)),_0x353e75=JSON['parse'](_0x3df60b);console['log'](_0x3df60b);let _0x3ade4e=_0x353e75[_0x59343b(0xed)],_0x327f26=_0x353e75[_0x59343b(0xe1)];console[_0x59343b(0x10e)](_0x327f26),console['log'](_0x3ade4e);let _0x41ca98='';if(_0x3ade4e==_0x59343b(0xfb)){let _0x5e1fb=localStorage[_0x59343b(0x100)](_0x59343b(0xdc));cedEncriptada=CryptoJS[_0x59343b(0xdb)]['encrypt'](CryptoJS['enc']['Utf8']['parse'](encodeURIComponent(_0x5e1fb)),CryptoJS[_0x59343b(0x110)][_0x59343b(0xfa)]['parse'](cajaNegra2),{'iv':CryptoJS[_0x59343b(0x110)]['Utf8'][_0x59343b(0xff)](iv),'mode':CryptoJS['mode'][_0x59343b(0xcc)],'padding':CryptoJS[_0x59343b(0x117)][_0x59343b(0x103)]})[_0x59343b(0x111)]();}else _0x41ca98=_0x327f26;let _0x124c98={'cedula':_0x41ca98},_0x57542a={'alergiaInDto':{'idAlergia':_0x5c83d5},'pacienteInDto':_0x124c98};fetch(localStorage[_0x59343b(0x100)](_0x59343b(0xd6))+_0x59343b(0xf8),{'method':_0x59343b(0xe2),'headers':{'Accept':'application/json','Content-Type':_0x59343b(0xf9)},'body':JSON[_0x59343b(0x119)](_0x57542a)})['then'](_0x537a54=>{const _0x4bc4cf=_0x59343b;console[_0x4bc4cf(0x10e)](_0x537a54),_0x537a54['ok']&&($('#eliminaralergia'+_0x5c83d5)[_0x4bc4cf(0xf1)](_0x4bc4cf(0x109)),location[_0x4bc4cf(0x10a)]());})[_0x59343b(0xef)](_0x6832da=>{const _0x30bbc5=_0x59343b;console[_0x30bbc5(0xe9)](_0x6832da);});};