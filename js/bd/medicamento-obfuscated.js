(function(_0x40b79e,_0x375f11){const _0xd32fce=_0x18ac,_0x1a6bcb=_0x40b79e();while(!![]){try{const _0x1dde52=-parseInt(_0xd32fce(0x22d))/0x1+parseInt(_0xd32fce(0x1f0))/0x2*(-parseInt(_0xd32fce(0x219))/0x3)+parseInt(_0xd32fce(0x223))/0x4*(parseInt(_0xd32fce(0x1da))/0x5)+parseInt(_0xd32fce(0x1ce))/0x6+-parseInt(_0xd32fce(0x222))/0x7+parseInt(_0xd32fce(0x1e1))/0x8*(parseInt(_0xd32fce(0x1e4))/0x9)+parseInt(_0xd32fce(0x1dd))/0xa;if(_0x1dde52===_0x375f11)break;else _0x1a6bcb['push'](_0x1a6bcb['shift']());}catch(_0x31c58f){_0x1a6bcb['push'](_0x1a6bcb['shift']());}}}(_0x5788,0xe807a));function _0x18ac(_0xd3edef,_0x3ed247){const _0x578832=_0x5788();return _0x18ac=function(_0x18acf5,_0x402ba1){_0x18acf5=_0x18acf5-0x1c0;let _0x3fda37=_0x578832[_0x18acf5];return _0x3fda37;},_0x18ac(_0xd3edef,_0x3ed247);}var cedulaEncriptada='';function passwordVisibilityActual(_0x531d81,_0x5459df){const _0x568f33=_0x18ac;var _0x1d26c2=document[_0x568f33(0x226)](_0x531d81),_0x53be4e=document[_0x568f33(0x1e0)]('.'+_0x5459df);_0x1d26c2['type']===_0x568f33(0x20c)?(_0x1d26c2['type']=_0x568f33(0x1c7),_0x53be4e[_0x568f33(0x1c9)][_0x568f33(0x1de)](_0x568f33(0x22b)),_0x53be4e[_0x568f33(0x1c9)]['add']('fa-eye-slash')):(_0x1d26c2[_0x568f33(0x215)]=_0x568f33(0x20c),_0x53be4e['classList'][_0x568f33(0x1de)]('fa-eye-slash'),_0x53be4e[_0x568f33(0x1c9)][_0x568f33(0x1f2)](_0x568f33(0x22b)));}let paciente=async _0x336980=>{const _0x33fef5=_0x18ac;usuario={'cedula':_0x336980};let _0x3c4393=localStorage[_0x33fef5(0x202)](_0x33fef5(0x214)),_0x5a5410=JSON['parse'](_0x3c4393),_0x7c2263=await fetch(localStorage[_0x33fef5(0x202)](_0x33fef5(0x1f6))+_0x33fef5(0x22c),{'method':_0x33fef5(0x221),'headers':{'Accept':'application/json','Content-Type':'application/json','Authorization':_0x5a5410[_0x33fef5(0x1cd)]},'body':JSON[_0x33fef5(0x1e7)](usuario)});if(_0x7c2263[_0x33fef5(0x1f4)]===0xc8){const _0xf1eb72=await _0x7c2263[_0x33fef5(0x1fd)]();return _0xf1eb72;}else return null;},cambioContrasenia=async _0x135bf1=>{const _0x58d25f=_0x18ac;_0x135bf1[_0x58d25f(0x1eb)]();let _0x29d9cf=localStorage[_0x58d25f(0x202)](_0x58d25f(0x214)),_0x195797=JSON[_0x58d25f(0x1c1)](_0x29d9cf);console[_0x58d25f(0x1d0)](_0x29d9cf);let _0x28529f=_0x195797[_0x58d25f(0x1ee)];console[_0x58d25f(0x1d0)](_0x28529f);const _0x540d60=await paciente(_0x28529f);console[_0x58d25f(0x1d0)](_0x58d25f(0x224)),console[_0x58d25f(0x1d0)](_0x540d60);let _0x33aa10='';_0x540d60!=null&&(_0x33aa10=decodeURIComponent(CryptoJS[_0x58d25f(0x213)][_0x58d25f(0x1e2)](_0x540d60[_0x58d25f(0x1e3)],CryptoJS[_0x58d25f(0x1fb)][_0x58d25f(0x209)][_0x58d25f(0x1c1)](cajaNegra2),{'iv':CryptoJS['enc'][_0x58d25f(0x209)][_0x58d25f(0x1c1)](iv),'mode':CryptoJS['mode'][_0x58d25f(0x22f)],'padding':CryptoJS['pad'][_0x58d25f(0x1d8)]})['toString'](CryptoJS[_0x58d25f(0x1fb)][_0x58d25f(0x209)])));console['log'](_0x58d25f(0x203)),console['log'](_0x33aa10);const _0x464b56=document[_0x58d25f(0x226)]('contraseniaanterior')[_0x58d25f(0x1db)],_0x473ee7=document['getElementById']('newcontrasenia')[_0x58d25f(0x1db)];let _0x265c51=CryptoJS[_0x58d25f(0x213)][_0x58d25f(0x22a)](CryptoJS['enc'][_0x58d25f(0x209)][_0x58d25f(0x1c1)](encodeURIComponent(_0x473ee7)),CryptoJS['enc']['Utf8'][_0x58d25f(0x1c1)](cajaNegra2),{'iv':CryptoJS[_0x58d25f(0x1fb)]['Utf8'][_0x58d25f(0x1c1)](iv),'mode':CryptoJS[_0x58d25f(0x1d5)][_0x58d25f(0x22f)],'padding':CryptoJS[_0x58d25f(0x1cf)][_0x58d25f(0x1d8)]})[_0x58d25f(0x206)]();if(_0x464b56===_0x33aa10){let _0x2322bf={'cedula':_0x28529f,'contrasenia':_0x265c51};await fetch(localStorage[_0x58d25f(0x202)]('servidorAPI')+_0x58d25f(0x1c8),{'method':_0x58d25f(0x201),'headers':{'Accept':'application/json','Content-Type':_0x58d25f(0x220),'Authorization':_0x195797['token']},'body':JSON['stringify'](_0x2322bf)})['then'](_0x5be670=>{const _0x148af8=_0x58d25f;if(_0x5be670['ok']){_0x195797[_0x148af8(0x1e3)]=_0x265c51;const _0x217574=JSON[_0x148af8(0x1e7)](_0x195797);localStorage[_0x148af8(0x1d1)](_0x148af8(0x214),_0x217574),$(_0x148af8(0x1c2))[_0x148af8(0x228)](_0x148af8(0x20a)),document[_0x148af8(0x226)]('contraseniaanterior')['value']='',document[_0x148af8(0x226)](_0x148af8(0x1f9))[_0x148af8(0x1db)]='',$('#nuevacontrasenia')['modal'](_0x148af8(0x208));}else alert(_0x148af8(0x1f3));})['catch'](_0x36325c=>{const _0x154093=_0x58d25f;console[_0x154093(0x229)](_0x154093(0x1f5),_0x36325c),alert(_0x154093(0x1f3));});}else $(_0x58d25f(0x1df))[_0x58d25f(0x228)]('show'),document[_0x58d25f(0x226)](_0x58d25f(0x1c3))[_0x58d25f(0x1db)]='',document['getElementById'](_0x58d25f(0x1f9))[_0x58d25f(0x1db)]='',$('#btnAceptar')[_0x58d25f(0x1f1)](function(){const _0x28b220=_0x58d25f;$(_0x28b220(0x1df))['modal']('hide');});},listarMedicamentos=async()=>{const _0x1e0639=_0x18ac;let _0x8689e0=localStorage[_0x1e0639(0x202)]('datos'),_0x43a148=JSON['parse'](_0x8689e0);console['log'](_0x8689e0);let _0x297035=_0x43a148[_0x1e0639(0x207)],_0x50b91b=_0x43a148[_0x1e0639(0x1ee)];console['log'](_0x50b91b),console[_0x1e0639(0x1d0)](_0x297035);let _0xa2d81b='';if(_0x297035=='medico'||_0x297035==_0x1e0639(0x1c0)){let _0x371d95=localStorage[_0x1e0639(0x202)](_0x1e0639(0x1ed));_0xa2d81b=CryptoJS[_0x1e0639(0x213)][_0x1e0639(0x22a)](CryptoJS[_0x1e0639(0x1fb)][_0x1e0639(0x209)][_0x1e0639(0x1c1)](encodeURIComponent(_0x371d95)),CryptoJS[_0x1e0639(0x1fb)][_0x1e0639(0x209)]['parse'](cajaNegra2),{'iv':CryptoJS['enc']['Utf8']['parse'](iv),'mode':CryptoJS[_0x1e0639(0x1d5)][_0x1e0639(0x22f)],'padding':CryptoJS['pad'][_0x1e0639(0x1d8)]})[_0x1e0639(0x206)]();}else _0xa2d81b=_0x50b91b;const _0x4015f4=new Set();let _0x3df9e4={'cedula':_0xa2d81b};const _0x56983b=await fetch(localStorage[_0x1e0639(0x202)](_0x1e0639(0x1f6))+_0x1e0639(0x1c6),{'method':_0x1e0639(0x221),'headers':{'Accept':_0x1e0639(0x220),'Content-Type':_0x1e0639(0x220),'Authorization':_0x43a148[_0x1e0639(0x1cd)]},'body':JSON[_0x1e0639(0x1e7)](_0x3df9e4)}),_0x480ae5=await _0x56983b[_0x1e0639(0x1fd)]();_0x480ae5[_0x1e0639(0x1cc)](_0x11cf56=>{const _0xe4e2c9=_0x1e0639;let _0xe8194d=decodeURIComponent(CryptoJS['AES'][_0xe4e2c9(0x1e2)](_0x11cf56[_0xe4e2c9(0x22e)],CryptoJS[_0xe4e2c9(0x1fb)][_0xe4e2c9(0x209)][_0xe4e2c9(0x1c1)](cajaNegra2),{'iv':CryptoJS[_0xe4e2c9(0x1fb)][_0xe4e2c9(0x209)][_0xe4e2c9(0x1c1)](iv),'mode':CryptoJS['mode'][_0xe4e2c9(0x22f)],'padding':CryptoJS['pad'][_0xe4e2c9(0x1d8)]})[_0xe4e2c9(0x206)](CryptoJS['enc']['Utf8'])),_0x26b50b=decodeURIComponent(CryptoJS[_0xe4e2c9(0x213)]['decrypt'](_0x11cf56[_0xe4e2c9(0x21e)],CryptoJS[_0xe4e2c9(0x1fb)][_0xe4e2c9(0x209)][_0xe4e2c9(0x1c1)](cajaNegra2),{'iv':CryptoJS[_0xe4e2c9(0x1fb)][_0xe4e2c9(0x209)][_0xe4e2c9(0x1c1)](iv),'mode':CryptoJS['mode'][_0xe4e2c9(0x22f)],'padding':CryptoJS[_0xe4e2c9(0x1cf)][_0xe4e2c9(0x1d8)]})[_0xe4e2c9(0x206)](CryptoJS[_0xe4e2c9(0x1fb)][_0xe4e2c9(0x209)])),_0x436e17=_0x11cf56['dosis'],_0x523623=new Date(_0x11cf56[_0xe4e2c9(0x1e9)]),_0x1dcbca=_0x523623[_0xe4e2c9(0x21d)]()[_0xe4e2c9(0x21c)]('T')[0x0],_0x4088f9=_0x1dcbca;_0x523623=new Date(_0x11cf56[_0xe4e2c9(0x20d)]),_0x1dcbca=_0x523623[_0xe4e2c9(0x21d)]()[_0xe4e2c9(0x21c)]('T')[0x0];let _0x511627=_0x1dcbca,_0x3e33b5=_0x11cf56[_0xe4e2c9(0x20e)],_0x127031=decodeURIComponent(CryptoJS[_0xe4e2c9(0x213)][_0xe4e2c9(0x1e2)](_0x11cf56[_0xe4e2c9(0x20b)],CryptoJS[_0xe4e2c9(0x1fb)][_0xe4e2c9(0x209)][_0xe4e2c9(0x1c1)](cajaNegra2),{'iv':CryptoJS[_0xe4e2c9(0x1fb)]['Utf8']['parse'](iv),'mode':CryptoJS[_0xe4e2c9(0x1d5)][_0xe4e2c9(0x22f)],'padding':CryptoJS[_0xe4e2c9(0x1cf)][_0xe4e2c9(0x1d8)]})[_0xe4e2c9(0x206)](CryptoJS['enc'][_0xe4e2c9(0x209)])),_0x2bcfdd=decodeURIComponent(CryptoJS[_0xe4e2c9(0x213)]['decrypt'](_0x11cf56[_0xe4e2c9(0x21b)],CryptoJS[_0xe4e2c9(0x1fb)][_0xe4e2c9(0x209)][_0xe4e2c9(0x1c1)](cajaNegra2),{'iv':CryptoJS[_0xe4e2c9(0x1fb)]['Utf8'][_0xe4e2c9(0x1c1)](iv),'mode':CryptoJS[_0xe4e2c9(0x1d5)][_0xe4e2c9(0x22f)],'padding':CryptoJS[_0xe4e2c9(0x1cf)]['Pkcs7']})[_0xe4e2c9(0x206)](CryptoJS[_0xe4e2c9(0x1fb)][_0xe4e2c9(0x209)])),_0x43a848=_0x11cf56['viaAdministracion'][_0xe4e2c9(0x21e)],_0x3633cd=_0x11cf56[_0xe4e2c9(0x218)],_0x50b39e=_0x11cf56[_0xe4e2c9(0x1d9)];const _0x4d4919={'concentracion':_0xe8194d,'descripcion':_0x26b50b,'dosis':_0x436e17,'fechaIni':_0x4088f9,'fechaFin':_0x511627,'intervaloTiempo':_0x3e33b5,'nombre':_0x127031,'tomas':_0x2bcfdd,'viaAdministracion':_0x43a848,'idFormulaMedicamento':_0x3633cd,'recetado':_0x50b39e};_0x4015f4['add'](JSON[_0xe4e2c9(0x1e7)](_0x4d4919));});let _0x301537=Array['from'](_0x4015f4)[_0x1e0639(0x211)](_0x33eafa=>JSON['parse'](_0x33eafa));return console['log'](_0x301537),_0x301537;},alergias=async()=>{const _0x19c08f=_0x18ac;let _0x1f14fa=localStorage['getItem']('datos'),_0x41c017=JSON[_0x19c08f(0x1c1)](_0x1f14fa);const _0x2ed99f=await fetch(localStorage[_0x19c08f(0x202)](_0x19c08f(0x1f6))+_0x19c08f(0x1f7)+cedula,{'method':_0x19c08f(0x227),'headers':{'Accept':'application/json','Content-Type':_0x19c08f(0x220),'Authorization':_0x41c017[_0x19c08f(0x1cd)]}}),_0x4c0948=await _0x2ed99f['json']();console['log'](_0x4c0948);let _0x21f25c='';_0x4c0948[_0x19c08f(0x1cc)](_0x2782dd=>{const _0x48f2d1=_0x19c08f;console[_0x48f2d1(0x1d0)](_0x21f25c),_0x21f25c=_0x21f25c+_0x2782dd['alergia'][_0x48f2d1(0x20b)]+',\x20';}),_0x21f25c=_0x21f25c[_0x19c08f(0x1dc)](0x0,_0x21f25c['length']-0x2),document[_0x19c08f(0x226)](_0x19c08f(0x1d3))['innerText']=_0x21f25c;},listarVias=async()=>{const _0x2a0c25=_0x18ac;let _0x3ea031=localStorage[_0x2a0c25(0x202)](_0x2a0c25(0x214)),_0x1ce2f7=JSON['parse'](_0x3ea031);const _0xa5ea83=await fetch(localStorage['getItem']('servidorAPI')+_0x2a0c25(0x230),{'method':_0x2a0c25(0x227),'headers':{'Accept':_0x2a0c25(0x220),'Content-Type':'application/json','Authorization':_0x1ce2f7[_0x2a0c25(0x1cd)]}}),_0x1d0ed0=document[_0x2a0c25(0x226)](_0x2a0c25(0x1e5)),_0x4fe19e=await _0xa5ea83[_0x2a0c25(0x1fd)](),_0x3c12e9=document[_0x2a0c25(0x21f)](_0x2a0c25(0x1d6));_0x3c12e9[_0x2a0c25(0x212)]='Seleccione...',_0x1d0ed0['appendChild'](_0x3c12e9),_0x4fe19e[_0x2a0c25(0x1cc)](_0x138fda=>{const _0x3c866a=_0x2a0c25,_0x3a3bca=document['createElement'](_0x3c866a(0x1d6));_0x3a3bca[_0x3c866a(0x1db)]=_0x138fda[_0x3c866a(0x200)],_0x3a3bca[_0x3c866a(0x212)]=_0x138fda[_0x3c866a(0x21e)],_0x1d0ed0[_0x3c866a(0x1e8)](_0x3a3bca);});},encontrarMedicamento=async()=>{const _0x2ffef1=_0x18ac,_0x55acaf=new URLSearchParams(window[_0x2ffef1(0x1c5)][_0x2ffef1(0x1ea)][_0x2ffef1(0x1fa)](0x1)),_0x1bfaed=_0x55acaf[_0x2ffef1(0x205)](_0x2ffef1(0x218));console[_0x2ffef1(0x1d0)](_0x1bfaed);let _0x53037f=localStorage['getItem'](_0x2ffef1(0x214)),_0x297dd7=JSON['parse'](_0x53037f);const _0x275f58=await fetch(localStorage[_0x2ffef1(0x202)](_0x2ffef1(0x1f6))+'DatosMedicos/medicamento/findById/'+_0x1bfaed,{'method':_0x2ffef1(0x227),'headers':{'Accept':_0x2ffef1(0x220),'Content-Type':'application/json','Authorization':_0x297dd7['token']}}),_0x488b82=await _0x275f58[_0x2ffef1(0x1fd)]();console['log'](_0x488b82);let _0x244e4f=decodeURIComponent(CryptoJS[_0x2ffef1(0x213)][_0x2ffef1(0x1e2)](_0x488b82['concentracion'],CryptoJS['enc'][_0x2ffef1(0x209)][_0x2ffef1(0x1c1)](cajaNegra2),{'iv':CryptoJS['enc'][_0x2ffef1(0x209)]['parse'](iv),'mode':CryptoJS[_0x2ffef1(0x1d5)][_0x2ffef1(0x22f)],'padding':CryptoJS[_0x2ffef1(0x1cf)][_0x2ffef1(0x1d8)]})[_0x2ffef1(0x206)](CryptoJS[_0x2ffef1(0x1fb)][_0x2ffef1(0x209)])),_0x4f1b42=decodeURIComponent(CryptoJS[_0x2ffef1(0x213)][_0x2ffef1(0x1e2)](_0x488b82['descripcion'],CryptoJS[_0x2ffef1(0x1fb)][_0x2ffef1(0x209)]['parse'](cajaNegra2),{'iv':CryptoJS['enc'][_0x2ffef1(0x209)][_0x2ffef1(0x1c1)](iv),'mode':CryptoJS[_0x2ffef1(0x1d5)]['CBC'],'padding':CryptoJS[_0x2ffef1(0x1cf)][_0x2ffef1(0x1d8)]})[_0x2ffef1(0x206)](CryptoJS['enc'][_0x2ffef1(0x209)])),_0x4db906=decodeURIComponent(CryptoJS[_0x2ffef1(0x213)][_0x2ffef1(0x1e2)](_0x488b82['nombre'],CryptoJS[_0x2ffef1(0x1fb)]['Utf8'][_0x2ffef1(0x1c1)](cajaNegra2),{'iv':CryptoJS[_0x2ffef1(0x1fb)][_0x2ffef1(0x209)][_0x2ffef1(0x1c1)](iv),'mode':CryptoJS[_0x2ffef1(0x1d5)][_0x2ffef1(0x22f)],'padding':CryptoJS[_0x2ffef1(0x1cf)]['Pkcs7']})['toString'](CryptoJS['enc'][_0x2ffef1(0x209)])),_0x274b0f=decodeURIComponent(CryptoJS[_0x2ffef1(0x213)][_0x2ffef1(0x1e2)](_0x488b82[_0x2ffef1(0x21b)],CryptoJS[_0x2ffef1(0x1fb)]['Utf8']['parse'](cajaNegra2),{'iv':CryptoJS[_0x2ffef1(0x1fb)][_0x2ffef1(0x209)][_0x2ffef1(0x1c1)](iv),'mode':CryptoJS[_0x2ffef1(0x1d5)]['CBC'],'padding':CryptoJS[_0x2ffef1(0x1cf)]['Pkcs7']})[_0x2ffef1(0x206)](CryptoJS[_0x2ffef1(0x1fb)]['Utf8']));document['getElementById'](_0x2ffef1(0x1ff))[_0x2ffef1(0x1db)]=_0x488b82[_0x2ffef1(0x218)],document['getElementById'](_0x2ffef1(0x1fc))[_0x2ffef1(0x1db)]=_0x4db906,document['getElementById'](_0x2ffef1(0x21e))[_0x2ffef1(0x1db)]=_0x4f1b42,document['getElementById'](_0x2ffef1(0x22e))[_0x2ffef1(0x1db)]=_0x244e4f;let _0x289fdb=new Date(_0x488b82[_0x2ffef1(0x1e9)]),_0x362a94=_0x289fdb['toISOString']()['split']('T')[0x0];document[_0x2ffef1(0x226)]('fecha_inicio')[_0x2ffef1(0x1db)]=_0x362a94,_0x289fdb=new Date(_0x488b82[_0x2ffef1(0x20d)]),_0x362a94=_0x289fdb[_0x2ffef1(0x21d)]()['split']('T')[0x0],document[_0x2ffef1(0x226)]('fecha_fin')[_0x2ffef1(0x1db)]=_0x362a94,document[_0x2ffef1(0x226)](_0x2ffef1(0x21b))[_0x2ffef1(0x1db)]=_0x274b0f,document[_0x2ffef1(0x226)](_0x2ffef1(0x1d9))[_0x2ffef1(0x1db)]=_0x488b82[_0x2ffef1(0x1d9)],console[_0x2ffef1(0x1d0)](_0x488b82[_0x2ffef1(0x1cb)][_0x2ffef1(0x200)]);const _0x1a5f71=document['getElementById'](_0x2ffef1(0x1e5));console[_0x2ffef1(0x1d0)](_0x1a5f71),_0x1a5f71[_0x2ffef1(0x1db)]=_0x488b82[_0x2ffef1(0x1cb)][_0x2ffef1(0x200)];},actualizarMedicamento=async _0x2ce7e4=>{const _0x10d122=_0x18ac;_0x2ce7e4[_0x10d122(0x1eb)]();let _0x312748=localStorage[_0x10d122(0x202)](_0x10d122(0x214)),_0x5dadc5=JSON[_0x10d122(0x1c1)](_0x312748);console[_0x10d122(0x1d0)](_0x312748);let _0x2e7664=_0x5dadc5[_0x10d122(0x207)],_0x295589=_0x5dadc5[_0x10d122(0x1ee)];console['log'](_0x295589),console[_0x10d122(0x1d0)](_0x2e7664);let _0x3508bd='';if(_0x2e7664==_0x10d122(0x1e6)||_0x2e7664==_0x10d122(0x1c0)){let _0x7f04da=localStorage[_0x10d122(0x202)]('cedulaPaciente');_0x3508bd=CryptoJS[_0x10d122(0x213)][_0x10d122(0x22a)](CryptoJS['enc'][_0x10d122(0x209)][_0x10d122(0x1c1)](encodeURIComponent(_0x7f04da)),CryptoJS['enc'][_0x10d122(0x209)][_0x10d122(0x1c1)](cajaNegra2),{'iv':CryptoJS[_0x10d122(0x1fb)][_0x10d122(0x209)]['parse'](iv),'mode':CryptoJS[_0x10d122(0x1d5)][_0x10d122(0x22f)],'padding':CryptoJS['pad'][_0x10d122(0x1d8)]})['toString']();}else _0x3508bd=_0x295589;let _0x35d0d3=document[_0x10d122(0x226)](_0x10d122(0x1ff))['value'];console[_0x10d122(0x1d0)](_0x35d0d3);let _0x1228f2=document[_0x10d122(0x226)]('concentracion')[_0x10d122(0x1db)],_0xe370c7=document[_0x10d122(0x226)](_0x10d122(0x21e))['value'],_0x176f6b=document['getElementById'](_0x10d122(0x1fc))[_0x10d122(0x1db)],_0x3f99e0=document[_0x10d122(0x226)](_0x10d122(0x21b))[_0x10d122(0x1db)],_0x3f37ac=CryptoJS[_0x10d122(0x213)][_0x10d122(0x22a)](CryptoJS[_0x10d122(0x1fb)][_0x10d122(0x209)][_0x10d122(0x1c1)](encodeURIComponent(_0x1228f2)),CryptoJS[_0x10d122(0x1fb)][_0x10d122(0x209)][_0x10d122(0x1c1)](cajaNegra2),{'iv':CryptoJS['enc']['Utf8'][_0x10d122(0x1c1)](iv),'mode':CryptoJS[_0x10d122(0x1d5)][_0x10d122(0x22f)],'padding':CryptoJS[_0x10d122(0x1cf)]['Pkcs7']})[_0x10d122(0x206)](),_0x18f776=CryptoJS[_0x10d122(0x213)][_0x10d122(0x22a)](CryptoJS[_0x10d122(0x1fb)][_0x10d122(0x209)][_0x10d122(0x1c1)](encodeURIComponent(_0xe370c7)),CryptoJS[_0x10d122(0x1fb)][_0x10d122(0x209)][_0x10d122(0x1c1)](cajaNegra2),{'iv':CryptoJS['enc'][_0x10d122(0x209)][_0x10d122(0x1c1)](iv),'mode':CryptoJS[_0x10d122(0x1d5)]['CBC'],'padding':CryptoJS['pad']['Pkcs7']})['toString'](),_0x4f6c1d=CryptoJS[_0x10d122(0x213)][_0x10d122(0x22a)](CryptoJS[_0x10d122(0x1fb)][_0x10d122(0x209)][_0x10d122(0x1c1)](encodeURIComponent(_0x176f6b)),CryptoJS[_0x10d122(0x1fb)][_0x10d122(0x209)][_0x10d122(0x1c1)](cajaNegra2),{'iv':CryptoJS[_0x10d122(0x1fb)][_0x10d122(0x209)][_0x10d122(0x1c1)](iv),'mode':CryptoJS[_0x10d122(0x1d5)][_0x10d122(0x22f)],'padding':CryptoJS[_0x10d122(0x1cf)]['Pkcs7']})[_0x10d122(0x206)](),_0x39cef5=CryptoJS[_0x10d122(0x213)][_0x10d122(0x22a)](CryptoJS['enc'][_0x10d122(0x209)][_0x10d122(0x1c1)](encodeURIComponent(_0x3f99e0)),CryptoJS['enc'][_0x10d122(0x209)]['parse'](cajaNegra2),{'iv':CryptoJS[_0x10d122(0x1fb)][_0x10d122(0x209)][_0x10d122(0x1c1)](iv),'mode':CryptoJS[_0x10d122(0x1d5)][_0x10d122(0x22f)],'padding':CryptoJS[_0x10d122(0x1cf)][_0x10d122(0x1d8)]})[_0x10d122(0x206)](),_0x1dea50={'concentracion':_0x3f37ac,'descripcion':_0x18f776,'fechaFin':document['getElementById'](_0x10d122(0x20f))[_0x10d122(0x1db)]+_0x10d122(0x216),'fechaIni':document['getElementById'](_0x10d122(0x1d7))[_0x10d122(0x1db)]+_0x10d122(0x216),'nombre':_0x4f6c1d,'paciente':_0x3508bd,'tomas':_0x39cef5,'viaAdministracion':document[_0x10d122(0x226)](_0x10d122(0x1e5))[_0x10d122(0x1db)],'recetado':document[_0x10d122(0x226)]('recetado')[_0x10d122(0x1db)]};console[_0x10d122(0x1d0)](_0x1dea50),fetch(localStorage['getItem'](_0x10d122(0x1f6))+_0x10d122(0x217)+_0x35d0d3,{'method':_0x10d122(0x201),'body':JSON['stringify'](_0x1dea50),'headers':{'Accept':_0x10d122(0x220),'Content-Type':_0x10d122(0x220),'Authorization':_0x5dadc5['token']}})[_0x10d122(0x204)](_0x54e379=>{const _0x1dfb63=_0x10d122;if(_0x54e379['ok'])(_0x54e379[_0x1dfb63(0x1f4)]===0xc8||_0x54e379[_0x1dfb63(0x1f4)]===0xcc)&&$(_0x1dfb63(0x1d2))[_0x1dfb63(0x228)](_0x1dfb63(0x20a));else{}})[_0x10d122(0x1ec)](_0x317017=>{const _0x289083=_0x10d122;console[_0x289083(0x229)](_0x317017);});},eliminarMedicamento=async _0x3a2a3b=>{const _0x446b7a=_0x18ac;let _0x3ff173=localStorage[_0x446b7a(0x202)](_0x446b7a(0x214)),_0x585246=JSON[_0x446b7a(0x1c1)](_0x3ff173);fetch(localStorage[_0x446b7a(0x202)](_0x446b7a(0x1f6))+_0x446b7a(0x210)+_0x3a2a3b,{'method':'DELETE','headers':{'Accept':_0x446b7a(0x220),'Content-Type':'application/json','Authorization':_0x585246[_0x446b7a(0x1cd)]}})[_0x446b7a(0x204)](_0x1cf9c8=>{const _0x1bdbf0=_0x446b7a;console[_0x1bdbf0(0x1d0)](_0x1cf9c8),_0x1cf9c8['ok']?($('#inhabilitarMedicamento'+_0x3a2a3b)['modal'](_0x1bdbf0(0x208)),$(_0x1bdbf0(0x1d4))['modal'](_0x1bdbf0(0x20a))):$('#modal3')[_0x1bdbf0(0x228)](_0x1bdbf0(0x20a));})['catch'](_0x594122=>{const _0x81dec0=_0x446b7a;console[_0x81dec0(0x229)](_0x594122);});},crearMedicamento=async _0x521745=>{const _0x430d50=_0x18ac;_0x521745[_0x430d50(0x1eb)]();const _0x408331=document[_0x430d50(0x226)](_0x430d50(0x1ca));_0x408331[_0x430d50(0x1ef)][_0x430d50(0x225)]=_0x430d50(0x1c4),_0x408331[_0x430d50(0x1f8)]='true';let _0x371c7f=localStorage[_0x430d50(0x202)](_0x430d50(0x214)),_0x2567af=JSON[_0x430d50(0x1c1)](_0x371c7f);console['log'](_0x371c7f);let _0x26cc0c=_0x2567af[_0x430d50(0x207)],_0x365685=_0x2567af[_0x430d50(0x1ee)];console[_0x430d50(0x1d0)](_0x365685),console['log'](_0x26cc0c);let _0xb789e1='';if(_0x26cc0c=='medico'||_0x26cc0c=='administrador'){let _0x3be898=localStorage[_0x430d50(0x202)](_0x430d50(0x1ed));_0xb789e1=CryptoJS[_0x430d50(0x213)][_0x430d50(0x22a)](CryptoJS[_0x430d50(0x1fb)][_0x430d50(0x209)]['parse'](encodeURIComponent(_0x3be898)),CryptoJS[_0x430d50(0x1fb)][_0x430d50(0x209)]['parse'](cajaNegra2),{'iv':CryptoJS[_0x430d50(0x1fb)]['Utf8'][_0x430d50(0x1c1)](iv),'mode':CryptoJS[_0x430d50(0x1d5)][_0x430d50(0x22f)],'padding':CryptoJS[_0x430d50(0x1cf)][_0x430d50(0x1d8)]})[_0x430d50(0x206)]();}else _0xb789e1=_0x365685;let _0x51cfc5=document[_0x430d50(0x226)]('concentracion')[_0x430d50(0x1db)],_0x11b206=document[_0x430d50(0x226)](_0x430d50(0x21e))[_0x430d50(0x1db)],_0xf22fd9=document[_0x430d50(0x226)](_0x430d50(0x1fc))[_0x430d50(0x1db)];const _0x19333d=document[_0x430d50(0x1e0)](_0x430d50(0x21a));let _0x255259=document[_0x430d50(0x226)](_0x430d50(0x21b))[_0x430d50(0x1db)],_0x2653ab=![];_0x19333d[_0x430d50(0x1fe)]&&(_0x2653ab=!![]);console[_0x430d50(0x1d0)](_0x51cfc5);let _0xff0e58=CryptoJS[_0x430d50(0x213)][_0x430d50(0x22a)](CryptoJS['enc'][_0x430d50(0x209)]['parse'](encodeURIComponent(_0x51cfc5)),CryptoJS[_0x430d50(0x1fb)][_0x430d50(0x209)][_0x430d50(0x1c1)](cajaNegra2),{'iv':CryptoJS[_0x430d50(0x1fb)][_0x430d50(0x209)][_0x430d50(0x1c1)](iv),'mode':CryptoJS[_0x430d50(0x1d5)]['CBC'],'padding':CryptoJS[_0x430d50(0x1cf)][_0x430d50(0x1d8)]})[_0x430d50(0x206)](),_0x3c82a0=CryptoJS[_0x430d50(0x213)]['encrypt'](CryptoJS[_0x430d50(0x1fb)]['Utf8'][_0x430d50(0x1c1)](encodeURIComponent(_0x11b206)),CryptoJS['enc']['Utf8'][_0x430d50(0x1c1)](cajaNegra2),{'iv':CryptoJS[_0x430d50(0x1fb)][_0x430d50(0x209)]['parse'](iv),'mode':CryptoJS[_0x430d50(0x1d5)]['CBC'],'padding':CryptoJS[_0x430d50(0x1cf)][_0x430d50(0x1d8)]})[_0x430d50(0x206)](),_0xb3c051=CryptoJS['AES'][_0x430d50(0x22a)](CryptoJS[_0x430d50(0x1fb)][_0x430d50(0x209)][_0x430d50(0x1c1)](encodeURIComponent(_0xf22fd9)),CryptoJS[_0x430d50(0x1fb)]['Utf8'][_0x430d50(0x1c1)](cajaNegra2),{'iv':CryptoJS[_0x430d50(0x1fb)][_0x430d50(0x209)][_0x430d50(0x1c1)](iv),'mode':CryptoJS[_0x430d50(0x1d5)]['CBC'],'padding':CryptoJS[_0x430d50(0x1cf)][_0x430d50(0x1d8)]})['toString'](),_0x5b7cd7=CryptoJS[_0x430d50(0x213)][_0x430d50(0x22a)](CryptoJS[_0x430d50(0x1fb)]['Utf8'][_0x430d50(0x1c1)](encodeURIComponent(_0x255259)),CryptoJS['enc'][_0x430d50(0x209)][_0x430d50(0x1c1)](cajaNegra2),{'iv':CryptoJS[_0x430d50(0x1fb)][_0x430d50(0x209)][_0x430d50(0x1c1)](iv),'mode':CryptoJS['mode'][_0x430d50(0x22f)],'padding':CryptoJS[_0x430d50(0x1cf)][_0x430d50(0x1d8)]})[_0x430d50(0x206)]();console['log'](_0x430d50(0x21b)),console[_0x430d50(0x1d0)](_0x5b7cd7);let _0x192190={'concentracion':_0xff0e58,'descripcion':_0x3c82a0,'fechaFin':document['getElementById'](_0x430d50(0x20f))[_0x430d50(0x1db)]+_0x430d50(0x216),'fechaIni':document['getElementById'](_0x430d50(0x1d7))[_0x430d50(0x1db)]+_0x430d50(0x216),'nombre':_0xb3c051,'paciente':_0xb789e1,'tomas':_0x5b7cd7,'viaAdministracion':parseInt(document['getElementById'](_0x430d50(0x1e5))['value']),'recetado':_0x2653ab};console[_0x430d50(0x1d0)](_0x192190),fetch(localStorage[_0x430d50(0x202)](_0x430d50(0x1f6))+'DatosMedicos/Medicamento/crear',{'method':'POST','body':JSON[_0x430d50(0x1e7)](_0x192190),'headers':{'Accept':'application/json','Content-Type':_0x430d50(0x220),'Authorization':_0x2567af[_0x430d50(0x1cd)]}})[_0x430d50(0x204)](_0x2ac497=>{const _0x592193=_0x430d50;console['log'](_0x2ac497),_0x2ac497['ok']?$(_0x592193(0x1d2))['modal'](_0x592193(0x20a)):$('#errorModal')[_0x592193(0x228)]('show');})[_0x430d50(0x1ec)](_0x37f94c=>{console['error'](_0x37f94c);});};function _0x5788(){const _0x55bded=['GET','modal','error','encrypt','fa-eye','Usuario/cedula','792459zIEOnZ','concentracion','CBC','DatosMedicos/medicamento/viaAdministracion','administrador','parse','#contraseniacambiada','contraseniaanterior','gray','location','DatosMedicos/medicamento/findMedicamentoByPaciente','text','Usuario/cambiarContrasenia','classList','guardarmedicamento','viaAdministracion','forEach','token','7581720ETMBMK','pad','log','setItem','#successModal','dataAlergia','#modal2','mode','option','fecha_inicio','Pkcs7','recetado','5ncDyCb','value','substring','9174820IonPHL','remove','#contraseniaerronea','querySelector','1448ecALpp','decrypt','contrasenia','549KAORCD','selectVias','medico','stringify','appendChild','fechaIni','search','preventDefault','catch','cedulaPaciente','cedula','style','2rmRgHr','click','add','Error\x20al\x20cambiar\x20la\x20contraseña','status','Error:','servidorAPI','DatosMedicos/alergia/listByPaciente/','disabled','newcontrasenia','slice','enc','medicamento','json','checked','idMedicamento','idViaAdministracion','PATCH','getItem','contraseniaBD','then','get','toString','usuario','hide','Utf8','show','nombre','password','fechaFin','intervaloTiempo','fecha_fin','DatosMedicos/medicamento/eliminar/','map','textContent','AES','datos','type','T00:00:00.001Z','DatosMedicos/formulaMedicamento/actualizar/','idFormulaMedicamento','732387MGURKb','input[type=\x22radio\x22][name=\x22receta\x22]','tomas','split','toISOString','descripcion','createElement','application/json','POST','4590754DyXoKW','1802644SYMYJM','usuario\x20de\x20backend','background','getElementById'];_0x5788=function(){return _0x55bded;};return _0x5788();}