(function(_0x199655,_0x25b62b){const _0x2a6904=_0x32c9,_0x1c7edc=_0x199655();while(!![]){try{const _0x180f3d=-parseInt(_0x2a6904(0x8d))/0x1+-parseInt(_0x2a6904(0x9b))/0x2+-parseInt(_0x2a6904(0xab))/0x3+parseInt(_0x2a6904(0xc7))/0x4+-parseInt(_0x2a6904(0xc8))/0x5*(-parseInt(_0x2a6904(0xc3))/0x6)+-parseInt(_0x2a6904(0x85))/0x7+parseInt(_0x2a6904(0xc5))/0x8;if(_0x180f3d===_0x25b62b)break;else _0x1c7edc['push'](_0x1c7edc['shift']());}catch(_0x164b8e){_0x1c7edc['push'](_0x1c7edc['shift']());}}}(_0x40bd,0x7129c));function _0x40bd(){const _0x3e83c8=['#contraseniaerronea','Error\x20al\x20cambiar\x20la\x20contraseña','nombreCrear','add','CBC','decrypt','#agregaralergia','preventDefault','parse','6BKWesX','alergia','13139896vcxDiE','#btnAceptar','3702760zYDpBg','1582370CAlJgF','text','datos','Usuario/cambiarContrasenia','cedulaPaciente','reload','remove','value','medico','type','Pkcs7','#eliminaralergia','status','json','true','DatosMedicos/alergia/listByPaciente','usuario','classList','fa-eye','stringify','2272739VOXmHd','error','background','#nuevacontrasenia','cedula','#contraseniacambiada','gray','Utf8','831792oUaxHL','nombreEditar','catch','Usuario/cedula','Error:','enc','mode','idAlergia','getElementById','contrasenia','addEventListener','contraseniaBD','AES','application/json','1297388UnkJnC','toString','getItem','encrypt','#errorModal','newcontrasenia','show','disabeld','guardarAlergia','hide','push','style','querySelector','administrador','setItem','then','1847916EFFbrk','DatosMedicos/alergia/crear','token','DatosMedicos/alergia/editar/','nombre','PATCH','password','contraseniaanterior','click','modal','servidorAPI','editarAlergia','pad','POST','log'];_0x40bd=function(){return _0x3e83c8;};return _0x40bd();}function _0x32c9(_0x3c6990,_0x3b1db6){const _0x40bd0c=_0x40bd();return _0x32c9=function(_0x32c9e8,_0x6a4b0a){_0x32c9e8=_0x32c9e8-0x7e;let _0x2f85e2=_0x40bd0c[_0x32c9e8];return _0x2f85e2;},_0x32c9(_0x3c6990,_0x3b1db6);}var cedulaEncriptada='';function passwordVisibilityActual(_0x23b1a4,_0x5d94de){const _0x2b5572=_0x32c9;var _0x17d271=document[_0x2b5572(0x95)](_0x23b1a4),_0xbddf05=document[_0x2b5572(0xa7)]('.'+_0x5d94de);_0x17d271[_0x2b5572(0xd1)]==='password'?(_0x17d271['type']=_0x2b5572(0xc9),_0xbddf05[_0x2b5572(0x82)][_0x2b5572(0xce)](_0x2b5572(0x83)),_0xbddf05[_0x2b5572(0x82)][_0x2b5572(0xbd)]('fa-eye-slash')):(_0x17d271[_0x2b5572(0xd1)]=_0x2b5572(0xb1),_0xbddf05['classList']['remove']('fa-eye-slash'),_0xbddf05[_0x2b5572(0x82)][_0x2b5572(0xbd)]('fa-eye'));}let paciente=async _0x3e844f=>{const _0x215e1f=_0x32c9;let _0x4b023f=localStorage[_0x215e1f(0x9d)](_0x215e1f(0xca)),_0x314bde=JSON[_0x215e1f(0xc2)](_0x4b023f);usuario={'cedula':_0x3e844f};let _0xe55505=await fetch(localStorage[_0x215e1f(0x9d)]('servidorAPI')+_0x215e1f(0x90),{'method':_0x215e1f(0xb8),'headers':{'Accept':_0x215e1f(0x9a),'Content-Type':_0x215e1f(0x9a),'Authorization':_0x314bde[_0x215e1f(0xad)]},'body':JSON['stringify'](usuario)});if(_0xe55505[_0x215e1f(0xd4)]===0xc8){const _0x5b1d62=await _0xe55505[_0x215e1f(0x7e)]();return _0x5b1d62;}else return null;},cambioContrasenia=async _0x139ff6=>{const _0x3af6e5=_0x32c9;_0x139ff6['preventDefault'](),await obtenerClave(),await obtenerIv();let _0x2fb2c2=localStorage[_0x3af6e5(0x9d)](_0x3af6e5(0xca)),_0xd77ba7=JSON[_0x3af6e5(0xc2)](_0x2fb2c2);console['log'](_0x2fb2c2);let _0x2c48d0=_0xd77ba7['cedula'];console[_0x3af6e5(0xb9)](_0x2c48d0);const _0x77e6=await paciente(_0x2c48d0);console[_0x3af6e5(0xb9)]('usuario\x20de\x20backend'),console[_0x3af6e5(0xb9)](_0x77e6);let _0x2d2e66='';_0x77e6!=null&&(_0x2d2e66=decodeURIComponent(CryptoJS[_0x3af6e5(0x99)][_0x3af6e5(0xbf)](_0x77e6[_0x3af6e5(0x96)],CryptoJS[_0x3af6e5(0x92)][_0x3af6e5(0x8c)]['parse'](cajaNegra2),{'iv':CryptoJS[_0x3af6e5(0x92)][_0x3af6e5(0x8c)]['parse'](iv),'mode':CryptoJS['mode']['CBC'],'padding':CryptoJS[_0x3af6e5(0xb7)][_0x3af6e5(0xd2)]})['toString'](CryptoJS[_0x3af6e5(0x92)][_0x3af6e5(0x8c)])));console['log'](_0x3af6e5(0x98)),console['log'](_0x2d2e66);const _0x35a93e=document['getElementById'](_0x3af6e5(0xb2))['value'],_0x31ee0f=document['getElementById'](_0x3af6e5(0xa0))[_0x3af6e5(0xcf)];let _0x37ac61=CryptoJS[_0x3af6e5(0x99)]['encrypt'](CryptoJS[_0x3af6e5(0x92)][_0x3af6e5(0x8c)][_0x3af6e5(0xc2)](encodeURIComponent(_0x31ee0f)),CryptoJS['enc'][_0x3af6e5(0x8c)][_0x3af6e5(0xc2)](cajaNegra2),{'iv':CryptoJS[_0x3af6e5(0x92)][_0x3af6e5(0x8c)][_0x3af6e5(0xc2)](iv),'mode':CryptoJS[_0x3af6e5(0x93)]['CBC'],'padding':CryptoJS[_0x3af6e5(0xb7)][_0x3af6e5(0xd2)]})[_0x3af6e5(0x9c)]();if(_0x35a93e===_0x2d2e66){let _0x1e2744={'cedula':_0x2c48d0,'contrasenia':_0x37ac61};await fetch(localStorage[_0x3af6e5(0x9d)](_0x3af6e5(0xb5))+_0x3af6e5(0xcb),{'method':_0x3af6e5(0xb0),'headers':{'Accept':'application/json','Content-Type':_0x3af6e5(0x9a),'Authorization':_0xd77ba7[_0x3af6e5(0xad)]},'body':JSON['stringify'](_0x1e2744)})[_0x3af6e5(0xaa)](_0x435041=>{const _0x31a151=_0x3af6e5;if(_0x435041['ok']){_0xd77ba7[_0x31a151(0x96)]=_0x37ac61;const _0x97c361=JSON[_0x31a151(0x84)](_0xd77ba7);localStorage[_0x31a151(0xa9)]('datos',_0x97c361),$(_0x31a151(0x8a))['modal'](_0x31a151(0xa1)),document[_0x31a151(0x95)]('contraseniaanterior')[_0x31a151(0xcf)]='',document[_0x31a151(0x95)](_0x31a151(0xa0))['value']='',$(_0x31a151(0x88))[_0x31a151(0xb4)](_0x31a151(0xa4));}else alert(_0x31a151(0xbb));})[_0x3af6e5(0x8f)](_0x214ca8=>{const _0x260e94=_0x3af6e5;console[_0x260e94(0x86)](_0x260e94(0x91),_0x214ca8),alert(_0x260e94(0xbb));});}else $('#contraseniaerronea')[_0x3af6e5(0xb4)]('show'),document[_0x3af6e5(0x95)](_0x3af6e5(0xb2))[_0x3af6e5(0xcf)]='',document[_0x3af6e5(0x95)]('newcontrasenia')['value']='',$(_0x3af6e5(0xc6))[_0x3af6e5(0xb3)](function(){const _0x3ad450=_0x3af6e5;$(_0x3ad450(0xba))['modal'](_0x3ad450(0xa4));});},crearAlergia=async()=>{const _0x14c0d5=_0x32c9;await obtenerClave(),await obtenerIv(),document[_0x14c0d5(0x95)](_0x14c0d5(0xa3))[_0x14c0d5(0x97)](_0x14c0d5(0xb3),async function(_0x33f2de){const _0x3dd3d3=_0x14c0d5;_0x33f2de[_0x3dd3d3(0xc1)]();const _0x2e792e=document[_0x3dd3d3(0x95)](_0x3dd3d3(0xa3));_0x2e792e[_0x3dd3d3(0xa6)][_0x3dd3d3(0x87)]=_0x3dd3d3(0x8b),_0x2e792e['disabeld']=_0x3dd3d3(0x7f);let _0x442e4d=localStorage[_0x3dd3d3(0x9d)](_0x3dd3d3(0xca)),_0xb5e481=JSON['parse'](_0x442e4d);console[_0x3dd3d3(0xb9)](_0x442e4d);let _0x214c89=_0xb5e481[_0x3dd3d3(0x81)];console['log'](_0x214c89);let _0x9471a1=_0xb5e481[_0x3dd3d3(0x89)];nombreInput=document[_0x3dd3d3(0x95)](_0x3dd3d3(0xbc))[_0x3dd3d3(0xcf)];let _0x1b4fea=localStorage[_0x3dd3d3(0x9d)](_0x3dd3d3(0xcc)),_0x59188e=_0x214c89='medico'?CryptoJS[_0x3dd3d3(0x99)][_0x3dd3d3(0x9e)](CryptoJS[_0x3dd3d3(0x92)]['Utf8']['parse'](encodeURIComponent(_0x1b4fea)),CryptoJS[_0x3dd3d3(0x92)]['Utf8']['parse'](cajaNegra2),{'iv':CryptoJS[_0x3dd3d3(0x92)]['Utf8'][_0x3dd3d3(0xc2)](iv),'mode':CryptoJS['mode'][_0x3dd3d3(0xbe)],'padding':CryptoJS['pad'][_0x3dd3d3(0xd2)]})[_0x3dd3d3(0x9c)]():_0x9471a1,_0x5de4e6=CryptoJS['AES'][_0x3dd3d3(0x9e)](CryptoJS['enc'][_0x3dd3d3(0x8c)][_0x3dd3d3(0xc2)](encodeURIComponent(nombreInput)),CryptoJS['enc'][_0x3dd3d3(0x8c)]['parse'](cajaNegra2),{'iv':CryptoJS[_0x3dd3d3(0x92)][_0x3dd3d3(0x8c)][_0x3dd3d3(0xc2)](iv),'mode':CryptoJS[_0x3dd3d3(0x93)][_0x3dd3d3(0xbe)],'padding':CryptoJS['pad'][_0x3dd3d3(0xd2)]})[_0x3dd3d3(0x9c)](),_0x57fa91={'nombre':_0x5de4e6},_0x38b8a3={'cedula':_0x59188e},_0x43ff0f={'alergiaInDto':_0x57fa91,'pacienteInDto':_0x38b8a3};fetch(localStorage[_0x3dd3d3(0x9d)]('servidorAPI')+_0x3dd3d3(0xac),{'method':'POST','body':JSON['stringify'](_0x43ff0f),'headers':{'Accept':_0x3dd3d3(0x9a),'Content-Type':_0x3dd3d3(0x9a),'Authorization':_0xb5e481[_0x3dd3d3(0xad)]}})[_0x3dd3d3(0xaa)](_0x2b3ee0=>{const _0x5d3c92=_0x3dd3d3;console['log'](_0x2b3ee0),_0x2b3ee0['ok']?($(_0x5d3c92(0xc0))[_0x5d3c92(0xb4)](_0x5d3c92(0xa4)),location[_0x5d3c92(0xcd)]()):$(_0x5d3c92(0x9f))['modal'](_0x5d3c92(0xa1));})['catch'](_0x3f2ba4=>{const _0x21a2ff=_0x3dd3d3;console[_0x21a2ff(0x86)](_0x3f2ba4);});});},listarAlergias=async()=>{const _0x1d56ef=_0x32c9;await obtenerClave(),await obtenerIv();let _0x1533bd=localStorage['getItem'](_0x1d56ef(0xca)),_0x5627c8=JSON[_0x1d56ef(0xc2)](_0x1533bd);console[_0x1d56ef(0xb9)](_0x1533bd);let _0x47a997=_0x5627c8[_0x1d56ef(0x81)],_0x753bdf=_0x5627c8['cedula'];console[_0x1d56ef(0xb9)](_0x753bdf),console[_0x1d56ef(0xb9)](_0x47a997);let _0x3ab077='';if(_0x47a997==_0x1d56ef(0xd0)||_0x47a997==_0x1d56ef(0xa8)){let _0x27cb67=localStorage[_0x1d56ef(0x9d)]('cedulaPaciente');_0x3ab077=CryptoJS[_0x1d56ef(0x99)]['encrypt'](CryptoJS['enc'][_0x1d56ef(0x8c)][_0x1d56ef(0xc2)](encodeURIComponent(_0x27cb67)),CryptoJS[_0x1d56ef(0x92)][_0x1d56ef(0x8c)]['parse'](cajaNegra2),{'iv':CryptoJS[_0x1d56ef(0x92)][_0x1d56ef(0x8c)][_0x1d56ef(0xc2)](iv),'mode':CryptoJS['mode']['CBC'],'padding':CryptoJS[_0x1d56ef(0xb7)][_0x1d56ef(0xd2)]})[_0x1d56ef(0x9c)]();}else _0x3ab077=_0x753bdf;pacienteInDto={'cedula':_0x3ab077};const _0x45865c=await fetch(localStorage[_0x1d56ef(0x9d)]('servidorAPI')+_0x1d56ef(0x80),{'method':'POST','headers':{'Accept':_0x1d56ef(0x9a),'Content-Type':_0x1d56ef(0x9a),'Authorization':_0x5627c8[_0x1d56ef(0xad)]},'body':JSON['stringify'](pacienteInDto)}),_0x2b3efb=await _0x45865c['json']();console[_0x1d56ef(0xb9)](_0x2b3efb);let _0x35bc2b=[];return _0x2b3efb['forEach'](_0x58bb79=>{const _0x189f15=_0x1d56ef;let _0xd08922=decodeURIComponent(CryptoJS['AES']['decrypt'](_0x58bb79['alergia'][_0x189f15(0xaf)],CryptoJS[_0x189f15(0x92)]['Utf8']['parse'](cajaNegra2),{'iv':CryptoJS[_0x189f15(0x92)][_0x189f15(0x8c)][_0x189f15(0xc2)](iv),'mode':CryptoJS['mode']['CBC'],'padding':CryptoJS[_0x189f15(0xb7)][_0x189f15(0xd2)]})[_0x189f15(0x9c)](CryptoJS[_0x189f15(0x92)][_0x189f15(0x8c)])),_0x4878c4={'idAlergia':_0x58bb79[_0x189f15(0xc4)][_0x189f15(0x94)],'nombre':_0xd08922};_0x35bc2b[_0x189f15(0xa5)](_0x4878c4);}),_0x35bc2b;},editarAlergia=async _0x344bce=>{const _0x4f1d66=_0x32c9;await obtenerClave(),await obtenerIv();let _0x286f97=localStorage[_0x4f1d66(0x9d)](_0x4f1d66(0xca)),_0x574988=JSON['parse'](_0x286f97);nombreInput=document[_0x4f1d66(0x95)](_0x4f1d66(0x8e)+_0x344bce)[_0x4f1d66(0xcf)],console['log'](nombreInput);const _0x40907=document[_0x4f1d66(0x95)](_0x4f1d66(0xb6));_0x40907[_0x4f1d66(0xa6)][_0x4f1d66(0x87)]=_0x4f1d66(0x8b),_0x40907[_0x4f1d66(0xa2)]=_0x4f1d66(0x7f);let _0x134747=CryptoJS[_0x4f1d66(0x99)][_0x4f1d66(0x9e)](CryptoJS[_0x4f1d66(0x92)][_0x4f1d66(0x8c)][_0x4f1d66(0xc2)](encodeURIComponent(nombreInput)),CryptoJS[_0x4f1d66(0x92)][_0x4f1d66(0x8c)]['parse'](cajaNegra2),{'iv':CryptoJS[_0x4f1d66(0x92)][_0x4f1d66(0x8c)]['parse'](iv),'mode':CryptoJS[_0x4f1d66(0x93)][_0x4f1d66(0xbe)],'padding':CryptoJS[_0x4f1d66(0xb7)]['Pkcs7']})[_0x4f1d66(0x9c)]();fetch(localStorage[_0x4f1d66(0x9d)](_0x4f1d66(0xb5))+_0x4f1d66(0xae)+_0x344bce,{'method':_0x4f1d66(0xb0),'body':JSON[_0x4f1d66(0x84)]({'nombre':_0x134747}),'headers':{'Accept':_0x4f1d66(0x9a),'Content-Type':'application/json','Authorization':_0x574988[_0x4f1d66(0xad)]}})[_0x4f1d66(0xaa)](_0x3a4db1=>{const _0xc32023=_0x4f1d66;console[_0xc32023(0xb9)](_0x3a4db1),_0x3a4db1['ok']?($('#editaralergia'+_0x344bce)[_0xc32023(0xb4)](_0xc32023(0xa4)),location[_0xc32023(0xcd)]()):$(_0xc32023(0x9f))[_0xc32023(0xb4)]('show');})[_0x4f1d66(0x8f)](_0x5dec46=>{const _0x54d6cf=_0x4f1d66;console[_0x54d6cf(0x86)](_0x5dec46);});},inhabilitarAlergia=async _0x18dc6b=>{const _0xdf7adb=_0x32c9;await obtenerClave(),await obtenerIv();let _0x2505da=localStorage[_0xdf7adb(0x9d)](_0xdf7adb(0xca)),_0x25f3dc=JSON['parse'](_0x2505da);console[_0xdf7adb(0xb9)](_0x2505da);let _0x2c278f=_0x25f3dc['usuario'],_0x36772c=_0x25f3dc[_0xdf7adb(0x89)];console['log'](_0x36772c),console[_0xdf7adb(0xb9)](_0x2c278f);let _0x16ab0f='';if(_0x2c278f=='medico'||_0x2c278f=='administrador'){let _0x28da2b=localStorage[_0xdf7adb(0x9d)](_0xdf7adb(0xcc));_0x16ab0f=CryptoJS[_0xdf7adb(0x99)][_0xdf7adb(0x9e)](CryptoJS[_0xdf7adb(0x92)][_0xdf7adb(0x8c)][_0xdf7adb(0xc2)](encodeURIComponent(_0x28da2b)),CryptoJS['enc']['Utf8'][_0xdf7adb(0xc2)](cajaNegra2),{'iv':CryptoJS[_0xdf7adb(0x92)]['Utf8']['parse'](iv),'mode':CryptoJS[_0xdf7adb(0x93)][_0xdf7adb(0xbe)],'padding':CryptoJS[_0xdf7adb(0xb7)][_0xdf7adb(0xd2)]})['toString']();}else _0x16ab0f=_0x36772c;let _0x3e93d8={'cedula':_0x16ab0f},_0xd61f1c={'alergiaInDto':{'idAlergia':_0x18dc6b},'pacienteInDto':_0x3e93d8};fetch(localStorage[_0xdf7adb(0x9d)](_0xdf7adb(0xb5))+'DatosMedicos/alergia/inactivar',{'method':_0xdf7adb(0xb0),'headers':{'Accept':_0xdf7adb(0x9a),'Content-Type':_0xdf7adb(0x9a),'Authorization':_0x25f3dc[_0xdf7adb(0xad)]},'body':JSON[_0xdf7adb(0x84)](_0xd61f1c)})[_0xdf7adb(0xaa)](_0xc9b94=>{const _0x216923=_0xdf7adb;console[_0x216923(0xb9)](_0xc9b94),_0xc9b94['ok']&&($(_0x216923(0xd3)+_0x18dc6b)[_0x216923(0xb4)](_0x216923(0xa4)),location[_0x216923(0xcd)]());})[_0xdf7adb(0x8f)](_0xd335ef=>{const _0x493c50=_0xdf7adb;console[_0x493c50(0x86)](_0xd335ef);});};