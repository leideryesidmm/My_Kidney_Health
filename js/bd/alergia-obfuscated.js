function _0x56d5(){const _0x429a0d=['addEventListener','cedula','pad','catch','730328Wqobqc','administrador','15UlWSaz','#contraseniaerronea','DatosMedicos/alergia/inactivar','querySelector','newcontrasenia','medico','json','266776vQVApt','mode','nombre','fa-eye-slash','error','Pkcs7','enc','Usuario/cambiarContrasenia','reload','preventDefault','true','alergia','12204783EIEywO','application/json','forEach','setItem','decrypt','85Lnchld','usuario','password','Utf8','background','hide','#eliminaralergia','cedulaPaciente','1217334YUGWRE','usuario\x20de\x20backend','#btnAceptar','disabeld','show','154308xyIahE','nombreCrear','contraseniaanterior','stringify','DatosMedicos/alergia/editar/','classList','add','contrasenia','type','parse','servidorAPI','Error:','1128jKxplv','431108CzRLaY','AES','log','getItem','#errorModal','PATCH','getElementById','click','style','DatosMedicos/alergia/crear','datos','guardarAlergia','DatosMedicos/alergia/listByPaciente','modal','Error\x20al\x20cambiar\x20la\x20contraseña','remove','editarAlergia','fa-eye','then','CBC','encrypt','POST','#contraseniacambiada','text','toString','value'];_0x56d5=function(){return _0x429a0d;};return _0x56d5();}(function(_0x1ce44e,_0x4e0373){const _0x5deedf=_0x557b,_0x2caf4b=_0x1ce44e();while(!![]){try{const _0xb18f73=parseInt(_0x5deedf(0x1fa))/0x1+-parseInt(_0x5deedf(0x213))/0x2+-parseInt(_0x5deedf(0x1f3))/0x3*(parseInt(_0x5deedf(0x1d3))/0x4)+parseInt(_0x5deedf(0x20b))/0x5*(-parseInt(_0x5deedf(0x1d2))/0x6)+parseInt(_0x5deedf(0x1c6))/0x7+-parseInt(_0x5deedf(0x1f1))/0x8+parseInt(_0x5deedf(0x206))/0x9;if(_0xb18f73===_0x4e0373)break;else _0x2caf4b['push'](_0x2caf4b['shift']());}catch(_0x6b5cf7){_0x2caf4b['push'](_0x2caf4b['shift']());}}}(_0x56d5,0x625b4));var cedulaEncriptada='';function passwordVisibilityActual(_0x326c13,_0x104c15){const _0x1d8e28=_0x557b;var _0x4b808a=document[_0x1d8e28(0x1d9)](_0x326c13),_0x25fcba=document[_0x1d8e28(0x1f6)]('.'+_0x104c15);_0x4b808a[_0x1d8e28(0x1ce)]===_0x1d8e28(0x20d)?(_0x4b808a[_0x1d8e28(0x1ce)]=_0x1d8e28(0x1ea),_0x25fcba[_0x1d8e28(0x1cb)]['remove'](_0x1d8e28(0x1e4)),_0x25fcba[_0x1d8e28(0x1cb)][_0x1d8e28(0x1cc)](_0x1d8e28(0x1fd))):(_0x4b808a[_0x1d8e28(0x1ce)]=_0x1d8e28(0x20d),_0x25fcba[_0x1d8e28(0x1cb)][_0x1d8e28(0x1e2)](_0x1d8e28(0x1fd)),_0x25fcba[_0x1d8e28(0x1cb)][_0x1d8e28(0x1cc)](_0x1d8e28(0x1e4)));}function _0x557b(_0x4670aa,_0x43550d){const _0x56d55f=_0x56d5();return _0x557b=function(_0x557bfc,_0x52fa8b){_0x557bfc=_0x557bfc-0x1c6;let _0x5f06e5=_0x56d55f[_0x557bfc];return _0x5f06e5;},_0x557b(_0x4670aa,_0x43550d);}let paciente=async _0x380e19=>{const _0x1d49da=_0x557b;usuario={'cedula':_0x380e19};let _0x36ee7f=await fetch(localStorage[_0x1d49da(0x1d6)](_0x1d49da(0x1d0))+'Usuario/cedula',{'method':_0x1d49da(0x1e8),'headers':{'Accept':_0x1d49da(0x207),'Content-Type':'application/json'},'body':JSON[_0x1d49da(0x1c9)](usuario)});if(_0x36ee7f['status']===0xc8){const _0x241d8a=await _0x36ee7f[_0x1d49da(0x1f9)]();return _0x241d8a;}else return null;},cambioContrasenia=async _0x56d67a=>{const _0x3da278=_0x557b;_0x56d67a[_0x3da278(0x203)]();let _0x35199c=localStorage[_0x3da278(0x1d6)](_0x3da278(0x1dd)),_0x6364fa=JSON[_0x3da278(0x1cf)](_0x35199c);console[_0x3da278(0x1d5)](_0x35199c);let _0x5ca08f=_0x6364fa['cedula'];console[_0x3da278(0x1d5)](_0x5ca08f);const _0x34d4ea=await paciente(_0x5ca08f);console['log'](_0x3da278(0x214)),console[_0x3da278(0x1d5)](_0x34d4ea);let _0xdb7cfd='';_0x34d4ea!=null&&(_0xdb7cfd=decodeURIComponent(CryptoJS['AES'][_0x3da278(0x20a)](_0x34d4ea[_0x3da278(0x1cd)],CryptoJS['enc'][_0x3da278(0x20e)][_0x3da278(0x1cf)](cajaNegra2),{'iv':CryptoJS[_0x3da278(0x200)][_0x3da278(0x20e)][_0x3da278(0x1cf)](iv),'mode':CryptoJS[_0x3da278(0x1fb)]['CBC'],'padding':CryptoJS[_0x3da278(0x1ef)]['Pkcs7']})[_0x3da278(0x1eb)](CryptoJS['enc']['Utf8'])));console[_0x3da278(0x1d5)]('contraseniaBD'),console[_0x3da278(0x1d5)](_0xdb7cfd);const _0xbf3951=document[_0x3da278(0x1d9)]('contraseniaanterior')[_0x3da278(0x1ec)],_0x38d109=document[_0x3da278(0x1d9)](_0x3da278(0x1f7))['value'];let _0x232fff=CryptoJS[_0x3da278(0x1d4)][_0x3da278(0x1e7)](CryptoJS['enc']['Utf8'][_0x3da278(0x1cf)](encodeURIComponent(_0x38d109)),CryptoJS[_0x3da278(0x200)][_0x3da278(0x20e)]['parse'](cajaNegra2),{'iv':CryptoJS['enc']['Utf8'][_0x3da278(0x1cf)](iv),'mode':CryptoJS[_0x3da278(0x1fb)][_0x3da278(0x1e6)],'padding':CryptoJS[_0x3da278(0x1ef)]['Pkcs7']})[_0x3da278(0x1eb)]();if(_0xbf3951===_0xdb7cfd){let _0x132e5f={'cedula':_0x5ca08f,'contrasenia':_0x232fff};await fetch(localStorage[_0x3da278(0x1d6)](_0x3da278(0x1d0))+_0x3da278(0x201),{'method':_0x3da278(0x1d8),'headers':{'Accept':'application/json','Content-Type':_0x3da278(0x207)},'body':JSON[_0x3da278(0x1c9)](_0x132e5f)})[_0x3da278(0x1e5)](_0x5e10d5=>{const _0x56f798=_0x3da278;if(_0x5e10d5['ok']){_0x6364fa['contrasenia']=_0x232fff;const _0xc0238d=JSON[_0x56f798(0x1c9)](_0x6364fa);localStorage[_0x56f798(0x209)]('datos',_0xc0238d),$(_0x56f798(0x1e9))['modal'](_0x56f798(0x217)),document[_0x56f798(0x1d9)](_0x56f798(0x1c8))[_0x56f798(0x1ec)]='',document[_0x56f798(0x1d9)]('newcontrasenia')[_0x56f798(0x1ec)]='',$('#nuevacontrasenia')['modal'](_0x56f798(0x210));}else alert(_0x56f798(0x1e1));})['catch'](_0x29bc3d=>{const _0x47e758=_0x3da278;console['error'](_0x47e758(0x1d1),_0x29bc3d),alert('Error\x20al\x20cambiar\x20la\x20contraseña');});}else $(_0x3da278(0x1f4))['modal'](_0x3da278(0x217)),document[_0x3da278(0x1d9)](_0x3da278(0x1c8))['value']='',document['getElementById'](_0x3da278(0x1f7))[_0x3da278(0x1ec)]='',$(_0x3da278(0x215))[_0x3da278(0x1da)](function(){const _0x1028ea=_0x3da278;$(_0x1028ea(0x1f4))[_0x1028ea(0x1e0)](_0x1028ea(0x210));});},crearAlergia=async()=>{const _0x32e9ce=_0x557b;document[_0x32e9ce(0x1d9)](_0x32e9ce(0x1de))[_0x32e9ce(0x1ed)](_0x32e9ce(0x1da),async function(_0x5046b6){const _0x272202=_0x32e9ce;_0x5046b6[_0x272202(0x203)]();const _0x503611=document[_0x272202(0x1d9)]('guardarAlergia');_0x503611[_0x272202(0x1db)][_0x272202(0x20f)]='gray',_0x503611[_0x272202(0x216)]=_0x272202(0x204);let _0x5d8beb=localStorage[_0x272202(0x1d6)](_0x272202(0x1dd)),_0x2708e4=JSON['parse'](_0x5d8beb);console[_0x272202(0x1d5)](_0x5d8beb);let _0x11d671=_0x2708e4['usuario'];console['log'](_0x11d671);let _0x5563b5=_0x2708e4[_0x272202(0x1ee)];nombreInput=document['getElementById'](_0x272202(0x1c7))['value'];let _0x52592e=localStorage[_0x272202(0x1d6)](_0x272202(0x212)),_0x587fb8=_0x11d671=_0x272202(0x1f8)?CryptoJS[_0x272202(0x1d4)][_0x272202(0x1e7)](CryptoJS['enc'][_0x272202(0x20e)][_0x272202(0x1cf)](encodeURIComponent(_0x52592e)),CryptoJS[_0x272202(0x200)][_0x272202(0x20e)][_0x272202(0x1cf)](cajaNegra2),{'iv':CryptoJS[_0x272202(0x200)]['Utf8'][_0x272202(0x1cf)](iv),'mode':CryptoJS[_0x272202(0x1fb)][_0x272202(0x1e6)],'padding':CryptoJS[_0x272202(0x1ef)][_0x272202(0x1ff)]})[_0x272202(0x1eb)]():_0x5563b5,_0x5502bd=CryptoJS[_0x272202(0x1d4)][_0x272202(0x1e7)](CryptoJS[_0x272202(0x200)]['Utf8']['parse'](encodeURIComponent(nombreInput)),CryptoJS[_0x272202(0x200)]['Utf8'][_0x272202(0x1cf)](cajaNegra2),{'iv':CryptoJS['enc'][_0x272202(0x20e)]['parse'](iv),'mode':CryptoJS[_0x272202(0x1fb)]['CBC'],'padding':CryptoJS[_0x272202(0x1ef)][_0x272202(0x1ff)]})['toString'](),_0x15fb75={'nombre':_0x5502bd},_0x328f81={'cedula':_0x587fb8},_0x29a2e0={'alergiaInDto':_0x15fb75,'pacienteInDto':_0x328f81};fetch(localStorage['getItem'](_0x272202(0x1d0))+_0x272202(0x1dc),{'method':'POST','body':JSON[_0x272202(0x1c9)](_0x29a2e0),'headers':{'Accept':_0x272202(0x207),'Content-Type':_0x272202(0x207)}})['then'](_0x1b36c4=>{const _0x5e9022=_0x272202;console[_0x5e9022(0x1d5)](_0x1b36c4),_0x1b36c4['ok']?($('#agregaralergia')[_0x5e9022(0x1e0)](_0x5e9022(0x210)),location['reload']()):$(_0x5e9022(0x1d7))[_0x5e9022(0x1e0)](_0x5e9022(0x217));})['catch'](_0x2d1a4f=>{const _0x2d6225=_0x272202;console[_0x2d6225(0x1fe)](_0x2d1a4f);});});},listarAlergias=async()=>{const _0x3db3c8=_0x557b;let _0x5d2f5c=localStorage[_0x3db3c8(0x1d6)](_0x3db3c8(0x1dd)),_0xa44a05=JSON[_0x3db3c8(0x1cf)](_0x5d2f5c);console[_0x3db3c8(0x1d5)](_0x5d2f5c);let _0x59965d=_0xa44a05[_0x3db3c8(0x20c)],_0x3ae3c8=_0xa44a05[_0x3db3c8(0x1ee)];console[_0x3db3c8(0x1d5)](_0x3ae3c8),console['log'](_0x59965d);let _0x2fc26c='';if(_0x59965d==_0x3db3c8(0x1f8)||_0x59965d==_0x3db3c8(0x1f2)){let _0x2dd17c=localStorage[_0x3db3c8(0x1d6)](_0x3db3c8(0x212));_0x2fc26c=CryptoJS[_0x3db3c8(0x1d4)]['encrypt'](CryptoJS[_0x3db3c8(0x200)]['Utf8']['parse'](encodeURIComponent(_0x2dd17c)),CryptoJS[_0x3db3c8(0x200)][_0x3db3c8(0x20e)][_0x3db3c8(0x1cf)](cajaNegra2),{'iv':CryptoJS['enc'][_0x3db3c8(0x20e)]['parse'](iv),'mode':CryptoJS[_0x3db3c8(0x1fb)][_0x3db3c8(0x1e6)],'padding':CryptoJS['pad']['Pkcs7']})['toString']();}else _0x2fc26c=_0x3ae3c8;pacienteInDto={'cedula':_0x2fc26c};const _0x35fe25=await fetch(localStorage['getItem'](_0x3db3c8(0x1d0))+_0x3db3c8(0x1df),{'method':_0x3db3c8(0x1e8),'headers':{'Accept':_0x3db3c8(0x207),'Content-Type':'application/json'},'body':JSON['stringify'](pacienteInDto)}),_0x2f9039=await _0x35fe25[_0x3db3c8(0x1f9)]();console[_0x3db3c8(0x1d5)](_0x2f9039);let _0x50c873=[];return _0x2f9039[_0x3db3c8(0x208)](_0x32b1f4=>{const _0x30b81b=_0x3db3c8;let _0x3ed9d5=decodeURIComponent(CryptoJS[_0x30b81b(0x1d4)]['decrypt'](_0x32b1f4[_0x30b81b(0x205)][_0x30b81b(0x1fc)],CryptoJS[_0x30b81b(0x200)]['Utf8'][_0x30b81b(0x1cf)](cajaNegra2),{'iv':CryptoJS['enc'][_0x30b81b(0x20e)][_0x30b81b(0x1cf)](iv),'mode':CryptoJS[_0x30b81b(0x1fb)][_0x30b81b(0x1e6)],'padding':CryptoJS[_0x30b81b(0x1ef)][_0x30b81b(0x1ff)]})[_0x30b81b(0x1eb)](CryptoJS[_0x30b81b(0x200)]['Utf8'])),_0x5227d8={'idAlergia':_0x32b1f4[_0x30b81b(0x205)]['idAlergia'],'nombre':_0x3ed9d5};_0x50c873['push'](_0x5227d8);}),_0x50c873;},editarAlergia=async _0x578d3d=>{const _0x3e8a24=_0x557b;nombreInput=document['getElementById']('nombreEditar'+_0x578d3d)[_0x3e8a24(0x1ec)],console['log'](nombreInput);const _0x5cb437=document['getElementById'](_0x3e8a24(0x1e3));_0x5cb437[_0x3e8a24(0x1db)]['background']='gray',_0x5cb437[_0x3e8a24(0x216)]=_0x3e8a24(0x204);let _0x5dfc3c=CryptoJS['AES']['encrypt'](CryptoJS[_0x3e8a24(0x200)][_0x3e8a24(0x20e)][_0x3e8a24(0x1cf)](encodeURIComponent(nombreInput)),CryptoJS[_0x3e8a24(0x200)][_0x3e8a24(0x20e)][_0x3e8a24(0x1cf)](cajaNegra2),{'iv':CryptoJS['enc'][_0x3e8a24(0x20e)][_0x3e8a24(0x1cf)](iv),'mode':CryptoJS[_0x3e8a24(0x1fb)][_0x3e8a24(0x1e6)],'padding':CryptoJS[_0x3e8a24(0x1ef)][_0x3e8a24(0x1ff)]})[_0x3e8a24(0x1eb)]();fetch(localStorage['getItem'](_0x3e8a24(0x1d0))+_0x3e8a24(0x1ca)+_0x578d3d,{'method':_0x3e8a24(0x1d8),'body':JSON[_0x3e8a24(0x1c9)]({'nombre':_0x5dfc3c}),'headers':{'Accept':_0x3e8a24(0x207),'Content-Type':_0x3e8a24(0x207)}})['then'](_0x53e8d3=>{const _0x263adc=_0x3e8a24;console['log'](_0x53e8d3),_0x53e8d3['ok']?($('#editaralergia'+_0x578d3d)[_0x263adc(0x1e0)]('hide'),location[_0x263adc(0x202)]()):$('#errorModal')[_0x263adc(0x1e0)](_0x263adc(0x217));})[_0x3e8a24(0x1f0)](_0x31873b=>{const _0x37a79d=_0x3e8a24;console[_0x37a79d(0x1fe)](_0x31873b);});},inhabilitarAlergia=async _0x30c68c=>{const _0x126279=_0x557b;let _0x5a45d5=localStorage[_0x126279(0x1d6)](_0x126279(0x1dd)),_0x10427c=JSON[_0x126279(0x1cf)](_0x5a45d5);console[_0x126279(0x1d5)](_0x5a45d5);let _0x4a3846=_0x10427c[_0x126279(0x20c)],_0x522e91=_0x10427c[_0x126279(0x1ee)];console['log'](_0x522e91),console[_0x126279(0x1d5)](_0x4a3846);let _0x12f80d='';if(_0x4a3846=='medico'||_0x4a3846=='administrador'){let _0x46b48b=localStorage[_0x126279(0x1d6)](_0x126279(0x212));_0x12f80d=CryptoJS[_0x126279(0x1d4)][_0x126279(0x1e7)](CryptoJS[_0x126279(0x200)][_0x126279(0x20e)][_0x126279(0x1cf)](encodeURIComponent(_0x46b48b)),CryptoJS[_0x126279(0x200)][_0x126279(0x20e)][_0x126279(0x1cf)](cajaNegra2),{'iv':CryptoJS['enc']['Utf8'][_0x126279(0x1cf)](iv),'mode':CryptoJS['mode'][_0x126279(0x1e6)],'padding':CryptoJS[_0x126279(0x1ef)][_0x126279(0x1ff)]})[_0x126279(0x1eb)]();}else _0x12f80d=_0x522e91;let _0x50192d={'cedula':_0x12f80d},_0x2d5205={'alergiaInDto':{'idAlergia':_0x30c68c},'pacienteInDto':_0x50192d};fetch(localStorage[_0x126279(0x1d6)]('servidorAPI')+_0x126279(0x1f5),{'method':_0x126279(0x1d8),'headers':{'Accept':_0x126279(0x207),'Content-Type':_0x126279(0x207)},'body':JSON[_0x126279(0x1c9)](_0x2d5205)})['then'](_0x592ad0=>{const _0x1093ab=_0x126279;console['log'](_0x592ad0),_0x592ad0['ok']&&($(_0x1093ab(0x211)+_0x30c68c)['modal'](_0x1093ab(0x210)),location['reload']());})[_0x126279(0x1f0)](_0x50a90a=>{const _0x38f758=_0x126279;console[_0x38f758(0x1fe)](_0x50a90a);});};