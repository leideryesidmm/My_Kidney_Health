const _0x44c2e9=_0x5323;(function(_0x42abb9,_0x5e674d){const _0x35d81d=_0x5323,_0x87d432=_0x42abb9();while(!![]){try{const _0x3b1f20=parseInt(_0x35d81d(0x1e5))/0x1*(parseInt(_0x35d81d(0x1e0))/0x2)+parseInt(_0x35d81d(0x20d))/0x3*(-parseInt(_0x35d81d(0x203))/0x4)+parseInt(_0x35d81d(0x1de))/0x5+-parseInt(_0x35d81d(0x205))/0x6+-parseInt(_0x35d81d(0x1f8))/0x7+-parseInt(_0x35d81d(0x202))/0x8*(parseInt(_0x35d81d(0x1ef))/0x9)+parseInt(_0x35d81d(0x217))/0xa;if(_0x3b1f20===_0x5e674d)break;else _0x87d432['push'](_0x87d432['shift']());}catch(_0x2cac76){_0x87d432['push'](_0x87d432['shift']());}}}(_0x276e,0x8462a));function _0x5323(_0x32c8e0,_0x125ca9){const _0x276ebc=_0x276e();return _0x5323=function(_0x532310,_0x338130){_0x532310=_0x532310-0x1d3;let _0x3223f5=_0x276ebc[_0x532310];return _0x3223f5;},_0x5323(_0x32c8e0,_0x125ca9);}var cedulaEncriptada='';let dat=localStorage[_0x44c2e9(0x1d8)](_0x44c2e9(0x1dd));function passwordVisibilityActual(_0x18a699,_0x918986){const _0x8d1a87=_0x44c2e9;var _0x4fb963=document['getElementById'](_0x18a699),_0x384a9a=document['querySelector']('.'+_0x918986);_0x4fb963[_0x8d1a87(0x1db)]==='password'?(_0x4fb963[_0x8d1a87(0x1db)]=_0x8d1a87(0x208),_0x384a9a[_0x8d1a87(0x214)][_0x8d1a87(0x1f4)](_0x8d1a87(0x1f3)),_0x384a9a['classList'][_0x8d1a87(0x1e3)](_0x8d1a87(0x1d3))):(_0x4fb963[_0x8d1a87(0x1db)]=_0x8d1a87(0x1f0),_0x384a9a[_0x8d1a87(0x214)][_0x8d1a87(0x1f4)](_0x8d1a87(0x1d3)),_0x384a9a[_0x8d1a87(0x214)][_0x8d1a87(0x1e3)](_0x8d1a87(0x1f3)));}function _0x276e(){const _0x4f3814=['datos','676170OdzENl','Utf8','58DfgRBW','reload','log','add','value','28353fRYOKd','#btnAceptar','AES','toString','POST','then','newcontrasenia','#contraseniaerronea','#contraseniacambiada','Pkcs7','9cgUJoZ','password','modal','preventDefault','fa-eye','remove','Usuario/restaurarContrasenia','encrypt','Error:','3667272cVwjXH','Usuario/cambiarContrasenia','show','usuario\x20de\x20backend','Error\x20al\x20restaurar\x20contraseña:','token','catch','servidorAPI','Medico/inhabilitarPaciente','CBC','8587064mFVicR','8400KelZmA','PATCH','4656438jbVyjo','json','contraseniaanterior','text','mode','#restaurarContrasenia','Usuario/cedula','stringify','510XgGkZR','pad','Error\x20al\x20inhabilitar\x20paciente:','error','hide','decrypt','contraseniaBD','classList','Error\x20al\x20cambiar\x20la\x20contraseña','status','23151310QzTGiK','Error\x20al\x20habilitar\x20paciente:','enc','fa-eye-slash','cedula','getElementById','application/json','parse','getItem','contrasenia','#restaurarContraseniaPaciente','type','#inhabilitarpaciente'];_0x276e=function(){return _0x4f3814;};return _0x276e();}let paciente=async _0x26ca17=>{const _0x27b4c1=_0x44c2e9;usuario={'cedula':_0x26ca17};let _0x5d2df7=localStorage[_0x27b4c1(0x1d8)]('datos'),_0x235864=JSON['parse'](_0x5d2df7),_0x3881ba=await fetch(localStorage[_0x27b4c1(0x1d8)]('servidorAPI')+_0x27b4c1(0x20b),{'method':_0x27b4c1(0x1e9),'headers':{'Accept':_0x27b4c1(0x1d6),'Content-Type':_0x27b4c1(0x1d6),'Authorization':_0x235864[_0x27b4c1(0x1fd)]},'body':JSON[_0x27b4c1(0x20c)](usuario)});if(_0x3881ba[_0x27b4c1(0x216)]===0xc8){const _0x506847=await _0x3881ba[_0x27b4c1(0x206)]();return _0x506847;}else return null;},cambioContrasenia=async _0x31d4b4=>{const _0x495e6a=_0x44c2e9;_0x31d4b4[_0x495e6a(0x1f2)]();let _0x4061c6=localStorage[_0x495e6a(0x1d8)](_0x495e6a(0x1dd)),_0x1a2662=JSON[_0x495e6a(0x1d7)](_0x4061c6);console[_0x495e6a(0x1e2)](_0x4061c6);let _0x4f357f=_0x1a2662[_0x495e6a(0x1d4)];console[_0x495e6a(0x1e2)](_0x4f357f);const _0x300258=await paciente(_0x4f357f);console[_0x495e6a(0x1e2)](_0x495e6a(0x1fb)),console['log'](_0x300258);let _0x1b25ea='';_0x300258!=null&&(_0x1b25ea=decodeURIComponent(CryptoJS[_0x495e6a(0x1e7)][_0x495e6a(0x212)](_0x300258['contrasenia'],CryptoJS[_0x495e6a(0x219)][_0x495e6a(0x1df)][_0x495e6a(0x1d7)](cajaNegra2),{'iv':CryptoJS[_0x495e6a(0x219)][_0x495e6a(0x1df)][_0x495e6a(0x1d7)](iv),'mode':CryptoJS[_0x495e6a(0x209)][_0x495e6a(0x201)],'padding':CryptoJS[_0x495e6a(0x20e)][_0x495e6a(0x1ee)]})[_0x495e6a(0x1e8)](CryptoJS[_0x495e6a(0x219)][_0x495e6a(0x1df)])));console[_0x495e6a(0x1e2)](_0x495e6a(0x213)),console[_0x495e6a(0x1e2)](_0x1b25ea);const _0x2936b5=document[_0x495e6a(0x1d5)](_0x495e6a(0x207))['value'],_0x191025=document[_0x495e6a(0x1d5)]('newcontrasenia')['value'];let _0x1b6be9=CryptoJS[_0x495e6a(0x1e7)][_0x495e6a(0x1f6)](CryptoJS['enc'][_0x495e6a(0x1df)][_0x495e6a(0x1d7)](encodeURIComponent(_0x191025)),CryptoJS['enc'][_0x495e6a(0x1df)]['parse'](cajaNegra2),{'iv':CryptoJS[_0x495e6a(0x219)]['Utf8'][_0x495e6a(0x1d7)](iv),'mode':CryptoJS[_0x495e6a(0x209)][_0x495e6a(0x201)],'padding':CryptoJS[_0x495e6a(0x20e)][_0x495e6a(0x1ee)]})[_0x495e6a(0x1e8)]();if(_0x2936b5===_0x1b25ea){let _0x496153={'cedula':_0x4f357f,'contrasenia':_0x1b6be9};await fetch(localStorage[_0x495e6a(0x1d8)](_0x495e6a(0x1ff))+_0x495e6a(0x1f9),{'method':_0x495e6a(0x204),'headers':{'Accept':_0x495e6a(0x1d6),'Content-Type':_0x495e6a(0x1d6),'Authorization':_0x1a2662[_0x495e6a(0x1fd)]},'body':JSON[_0x495e6a(0x20c)](_0x496153)})[_0x495e6a(0x1ea)](_0x1574d7=>{const _0x12a385=_0x495e6a;if(_0x1574d7['ok']){_0x1a2662[_0x12a385(0x1d9)]=_0x1b6be9;const _0x593049=JSON['stringify'](_0x1a2662);localStorage['setItem'](_0x12a385(0x1dd),_0x593049),$(_0x12a385(0x1ed))[_0x12a385(0x1f1)]('show'),document['getElementById'](_0x12a385(0x207))['value']='',document[_0x12a385(0x1d5)](_0x12a385(0x1eb))[_0x12a385(0x1e4)]='',$('#nuevacontrasenia')[_0x12a385(0x1f1)]('hide');}else alert(_0x12a385(0x215));})[_0x495e6a(0x1fe)](_0x4da957=>{const _0x146384=_0x495e6a;console[_0x146384(0x210)](_0x146384(0x1f7),_0x4da957),alert('Error\x20al\x20cambiar\x20la\x20contraseña');});}else $(_0x495e6a(0x1ec))[_0x495e6a(0x1f1)]('show'),document['getElementById'](_0x495e6a(0x207))[_0x495e6a(0x1e4)]='',document[_0x495e6a(0x1d5)](_0x495e6a(0x1eb))[_0x495e6a(0x1e4)]='',$(_0x495e6a(0x1e6))['click'](function(){const _0x5a12d5=_0x495e6a;$(_0x5a12d5(0x1ec))[_0x5a12d5(0x1f1)](_0x5a12d5(0x211));});},restaurarContrasenia=async(_0x1faf5f,_0x2fc926)=>{const _0x1cb566=_0x44c2e9;let _0x3e39ec=_0x1faf5f[_0x1cb566(0x1e8)](),_0x2aec40=CryptoJS['AES']['encrypt'](CryptoJS['enc'][_0x1cb566(0x1df)][_0x1cb566(0x1d7)](encodeURIComponent(_0x3e39ec)),CryptoJS['enc']['Utf8'][_0x1cb566(0x1d7)](cajaNegra2),{'iv':CryptoJS[_0x1cb566(0x219)]['Utf8'][_0x1cb566(0x1d7)](iv),'mode':CryptoJS[_0x1cb566(0x209)][_0x1cb566(0x201)],'padding':CryptoJS['pad'][_0x1cb566(0x1ee)]})['toString']();try{const _0x2126f0={'cedula':_0x2aec40};let _0x53162c=localStorage[_0x1cb566(0x1d8)](_0x1cb566(0x1dd)),_0x423025=JSON[_0x1cb566(0x1d7)](_0x53162c);const _0x36b681=await fetch(servidorAPI+_0x1cb566(0x1f5),{'method':_0x1cb566(0x204),'headers':{'Accept':_0x1cb566(0x1d6),'Content-Type':_0x1cb566(0x1d6),'Authorization':_0x423025['token']},'body':JSON[_0x1cb566(0x20c)](_0x2126f0)});_0x36b681['ok']&&($(_0x1cb566(0x20a)+_0x2fc926)[_0x1cb566(0x1f1)](_0x1cb566(0x211)),$(_0x1cb566(0x1da))[_0x1cb566(0x1f1)](_0x1cb566(0x1fa)));}catch(_0x3764e0){console[_0x1cb566(0x210)](_0x1cb566(0x1fc),_0x3764e0);}},inhabilitarPaciente=async _0x2b8ee2=>{const _0x407d8a=_0x44c2e9;let _0x1474a4=_0x2b8ee2[_0x407d8a(0x1e8)](),_0x2a6334=CryptoJS['AES'][_0x407d8a(0x1f6)](CryptoJS[_0x407d8a(0x219)][_0x407d8a(0x1df)][_0x407d8a(0x1d7)](encodeURIComponent(_0x1474a4)),CryptoJS[_0x407d8a(0x219)][_0x407d8a(0x1df)][_0x407d8a(0x1d7)](cajaNegra2),{'iv':CryptoJS[_0x407d8a(0x219)][_0x407d8a(0x1df)][_0x407d8a(0x1d7)](iv),'mode':CryptoJS['mode'][_0x407d8a(0x201)],'padding':CryptoJS[_0x407d8a(0x20e)][_0x407d8a(0x1ee)]})['toString']();console[_0x407d8a(0x1e2)](_0x2a6334);try{const _0xa498b6={'cedula':_0x2a6334};let _0x4a0119=localStorage[_0x407d8a(0x1d8)](_0x407d8a(0x1dd)),_0x1f1167=JSON[_0x407d8a(0x1d7)](_0x4a0119);const _0xce7a89=await fetch(servidorAPI+_0x407d8a(0x200),{'method':_0x407d8a(0x204),'headers':{'Accept':_0x407d8a(0x1d6),'Content-Type':_0x407d8a(0x1d6),'Authorization':_0x1f1167[_0x407d8a(0x1fd)]},'body':JSON[_0x407d8a(0x20c)](_0xa498b6)});_0xce7a89['ok']?($(_0x407d8a(0x1dc))['modal'](_0x407d8a(0x211)),location['reload']()):console[_0x407d8a(0x210)]('Error\x20al\x20inhabilitar\x20paciente:',_0xce7a89[_0x407d8a(0x216)]);}catch(_0xc61041){console['error'](_0x407d8a(0x20f),_0xc61041);}},habilitarPaciente=async _0x27657b=>{const _0x488f06=_0x44c2e9;let _0x57da14=_0x27657b[_0x488f06(0x1e8)](),_0x17d9ad=CryptoJS[_0x488f06(0x1e7)][_0x488f06(0x1f6)](CryptoJS[_0x488f06(0x219)][_0x488f06(0x1df)][_0x488f06(0x1d7)](encodeURIComponent(_0x57da14)),CryptoJS['enc'][_0x488f06(0x1df)][_0x488f06(0x1d7)](cajaNegra2),{'iv':CryptoJS[_0x488f06(0x219)][_0x488f06(0x1df)][_0x488f06(0x1d7)](iv),'mode':CryptoJS[_0x488f06(0x209)][_0x488f06(0x201)],'padding':CryptoJS['pad'][_0x488f06(0x1ee)]})[_0x488f06(0x1e8)]();try{const _0x34a691={'cedula':_0x17d9ad};let _0x179b6f=localStorage['getItem']('datos'),_0x51449d=JSON[_0x488f06(0x1d7)](_0x179b6f);const _0x489fe8=await fetch(servidorAPI+'Medico/reactivarPaciente',{'method':_0x488f06(0x204),'headers':{'Accept':'application/json','Content-Type':_0x488f06(0x1d6),'Authorization':_0x51449d['token']},'body':JSON[_0x488f06(0x20c)](_0x34a691)});_0x489fe8['ok']?location[_0x488f06(0x1e1)]():console['error'](_0x488f06(0x218),_0x489fe8[_0x488f06(0x216)]);}catch(_0x54a90b){console[_0x488f06(0x210)](_0x488f06(0x218),_0x54a90b);}};