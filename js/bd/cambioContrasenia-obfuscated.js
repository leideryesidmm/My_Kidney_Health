const _0x15773e=_0xe316;(function(_0x1f2c3a,_0x17933a){const _0x25e90f=_0xe316,_0x5ee8fc=_0x1f2c3a();while(!![]){try{const _0x23ad08=-parseInt(_0x25e90f(0x90))/0x1*(-parseInt(_0x25e90f(0x7e))/0x2)+parseInt(_0x25e90f(0x8a))/0x3*(parseInt(_0x25e90f(0xa6))/0x4)+parseInt(_0x25e90f(0x9e))/0x5*(-parseInt(_0x25e90f(0x96))/0x6)+parseInt(_0x25e90f(0xb2))/0x7+parseInt(_0x25e90f(0x9f))/0x8+parseInt(_0x25e90f(0x93))/0x9+parseInt(_0x25e90f(0x85))/0xa;if(_0x23ad08===_0x17933a)break;else _0x5ee8fc['push'](_0x5ee8fc['shift']());}catch(_0x48e463){_0x5ee8fc['push'](_0x5ee8fc['shift']());}}}(_0x2c52,0x68ffd));function _0xe316(_0x7f23b3,_0x5b4fc1){const _0x2c52d0=_0x2c52();return _0xe316=function(_0xe3162d,_0x408d4a){_0xe3162d=_0xe3162d-0x78;let _0x3de8a2=_0x2c52d0[_0xe3162d];return _0x3de8a2;},_0xe316(_0x7f23b3,_0x5b4fc1);}function _0x2c52(){const _0x1bda7d=['log','cedula','contraseniaanterior','stringify','AES','POST','Usuario/cedula','1083145dcRsnb','fa-eye','decrypt','parse','then','text','mode','1385806ZwiTLY','fa-eye-slash','servidorAPI','Usuario/cambiarContrasenia','enc','click','add','2534390STzvra','setItem','datos','type','#contraseniaerronea','18yNFqfo','encrypt','getItem','token','PATCH','value','1iBGSXG','json','application/json','3636bnuquq','catch','password','198cPMDhL','Error\x20al\x20cambiar\x20la\x20contraseña','modal','Pkcs7','#nuevacontrasenia','remove','Utf8','toString','120805iAUrmE','495736YtobLR','newcontrasenia','CBC','preventDefault','contraseniaBD','pad','hide','42628fZrRlU','#btnAceptar','classList','getElementById','#contraseniacambiada'];_0x2c52=function(){return _0x1bda7d;};return _0x2c52();}var cedulaEncriptada='',contraseniaEncriptada;let dat=localStorage[_0x15773e(0x8c)](_0x15773e(0x87));function passwordVisibilityActual(_0x269558,_0x2afba6){const _0x4b8023=_0x15773e;var _0x32cc77=document[_0x4b8023(0xa9)](_0x269558),_0xf14c44=document['querySelector']('.'+_0x2afba6);_0x32cc77[_0x4b8023(0x88)]===_0x4b8023(0x95)?(_0x32cc77[_0x4b8023(0x88)]=_0x4b8023(0x7c),_0xf14c44[_0x4b8023(0xa8)][_0x4b8023(0x9b)](_0x4b8023(0x78)),_0xf14c44['classList'][_0x4b8023(0x84)](_0x4b8023(0x7f))):(_0x32cc77[_0x4b8023(0x88)]=_0x4b8023(0x95),_0xf14c44[_0x4b8023(0xa8)][_0x4b8023(0x9b)](_0x4b8023(0x7f)),_0xf14c44['classList'][_0x4b8023(0x84)](_0x4b8023(0x78)));}let paciente=async _0x32cb0e=>{const _0x2c96a2=_0x15773e;let _0x4762f9=localStorage['getItem']('datos'),_0x27ea41=JSON[_0x2c96a2(0x7a)](_0x4762f9);usuario={'cedula':_0x32cb0e};let _0x22e247=await fetch(localStorage['getItem'](_0x2c96a2(0x80))+_0x2c96a2(0xb1),{'method':_0x2c96a2(0xb0),'headers':{'Accept':'application/json','Content-Type':_0x2c96a2(0x92),'Authorization':_0x27ea41[_0x2c96a2(0x8d)]},'body':JSON[_0x2c96a2(0xae)](usuario)});if(_0x22e247['status']===0xc8){const _0x13c4f2=await _0x22e247[_0x2c96a2(0x91)]();return _0x13c4f2;}else return null;},cambioContrasenia=async _0x568e41=>{const _0x5afa77=_0x15773e;_0x568e41[_0x5afa77(0xa2)](),await obtenerClave(),await obtenerIv();let _0x1edeb0=localStorage[_0x5afa77(0x8c)](_0x5afa77(0x87)),_0x5d1432=JSON[_0x5afa77(0x7a)](_0x1edeb0);console[_0x5afa77(0xab)](_0x1edeb0);let _0x1dacff=_0x5d1432[_0x5afa77(0xac)];console[_0x5afa77(0xab)](_0x1dacff);const _0x4d0b15=await paciente(_0x1dacff);console['log']('usuario\x20de\x20backend'),console['log'](_0x4d0b15);let _0x529fe7='';_0x4d0b15!=null&&(_0x529fe7=decodeURIComponent(CryptoJS['AES'][_0x5afa77(0x79)](_0x4d0b15['contrasenia'],CryptoJS[_0x5afa77(0x82)]['Utf8'][_0x5afa77(0x7a)](cajaNegra2),{'iv':CryptoJS[_0x5afa77(0x82)][_0x5afa77(0x9c)][_0x5afa77(0x7a)](iv),'mode':CryptoJS[_0x5afa77(0x7d)]['CBC'],'padding':CryptoJS[_0x5afa77(0xa4)]['Pkcs7']})[_0x5afa77(0x9d)](CryptoJS[_0x5afa77(0x82)][_0x5afa77(0x9c)])));console[_0x5afa77(0xab)](_0x5afa77(0xa3)),console[_0x5afa77(0xab)](_0x529fe7);const _0x3bb109=document[_0x5afa77(0xa9)]('contraseniaanterior')[_0x5afa77(0x8f)],_0x166ba1=document['getElementById'](_0x5afa77(0xa0))[_0x5afa77(0x8f)];let _0xe9bba5=CryptoJS[_0x5afa77(0xaf)][_0x5afa77(0x8b)](CryptoJS[_0x5afa77(0x82)][_0x5afa77(0x9c)][_0x5afa77(0x7a)](encodeURIComponent(_0x166ba1)),CryptoJS[_0x5afa77(0x82)][_0x5afa77(0x9c)][_0x5afa77(0x7a)](cajaNegra2),{'iv':CryptoJS[_0x5afa77(0x82)]['Utf8'][_0x5afa77(0x7a)](iv),'mode':CryptoJS[_0x5afa77(0x7d)][_0x5afa77(0xa1)],'padding':CryptoJS[_0x5afa77(0xa4)][_0x5afa77(0x99)]})[_0x5afa77(0x9d)]();if(_0x3bb109===_0x529fe7){let _0x5839d8={'cedula':_0x1dacff,'contrasenia':_0xe9bba5};await fetch(localStorage['getItem'](_0x5afa77(0x80))+_0x5afa77(0x81),{'method':_0x5afa77(0x8e),'headers':{'Accept':_0x5afa77(0x92),'Content-Type':_0x5afa77(0x92),'Authorization':_0x5d1432[_0x5afa77(0x8d)]},'body':JSON[_0x5afa77(0xae)](_0x5839d8)})[_0x5afa77(0x7b)](_0x54fe3a=>{const _0x399fbb=_0x5afa77;if(_0x54fe3a['ok']){_0x5d1432['contrasenia']=_0xe9bba5;const _0x4ef9e5=JSON[_0x399fbb(0xae)](_0x5d1432);localStorage[_0x399fbb(0x86)](_0x399fbb(0x87),_0x4ef9e5),$(_0x399fbb(0xaa))[_0x399fbb(0x98)]('show'),document[_0x399fbb(0xa9)](_0x399fbb(0xad))['value']='',document[_0x399fbb(0xa9)](_0x399fbb(0xa0))[_0x399fbb(0x8f)]='',$(_0x399fbb(0x9a))['modal']('hide');}else alert('Error\x20al\x20cambiar\x20la\x20contraseña');})[_0x5afa77(0x94)](_0x2517b2=>{const _0x5f5a92=_0x5afa77;console['error']('Error:',_0x2517b2),alert(_0x5f5a92(0x97));});}else $('#contraseniaerronea')[_0x5afa77(0x98)]('show'),document['getElementById'](_0x5afa77(0xad))[_0x5afa77(0x8f)]='',document['getElementById'](_0x5afa77(0xa0))[_0x5afa77(0x8f)]='',$(_0x5afa77(0xa7))[_0x5afa77(0x83)](function(){const _0x86f7c9=_0x5afa77;$(_0x86f7c9(0x89))[_0x86f7c9(0x98)](_0x86f7c9(0xa5));});};