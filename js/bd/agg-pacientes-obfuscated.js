(function(_0x28aaa7,_0x5a2140){const _0x2dd43a=_0x1092,_0x40537c=_0x28aaa7();while(!![]){try{const _0x926dc5=parseInt(_0x2dd43a(0x16e))/0x1*(-parseInt(_0x2dd43a(0x165))/0x2)+-parseInt(_0x2dd43a(0x16f))/0x3*(parseInt(_0x2dd43a(0x19f))/0x4)+parseInt(_0x2dd43a(0x18e))/0x5+-parseInt(_0x2dd43a(0x197))/0x6*(-parseInt(_0x2dd43a(0x183))/0x7)+-parseInt(_0x2dd43a(0x191))/0x8+parseInt(_0x2dd43a(0x16d))/0x9+parseInt(_0x2dd43a(0x193))/0xa;if(_0x926dc5===_0x5a2140)break;else _0x40537c['push'](_0x40537c['shift']());}catch(_0x33c98f){_0x40537c['push'](_0x40537c['shift']());}}}(_0x5055,0xdca8f));let listarEps=async()=>{const _0x3a695c=_0x1092;let _0x3d756f=localStorage[_0x3a695c(0x161)](_0x3a695c(0x154)),_0x49440d=JSON['parse'](_0x3d756f);const _0x2f8036=await fetch(localStorage[_0x3a695c(0x161)](_0x3a695c(0x196))+_0x3a695c(0x15c),{'method':'GET','headers':{'Accept':_0x3a695c(0x186),'Content-Type':'application/json','Authorization':_0x49440d['token']}}),_0x819de1=document[_0x3a695c(0x164)](_0x3a695c(0x195));if(_0x819de1[_0x3a695c(0x18d)]===0x0){const _0x4cb100=await _0x2f8036[_0x3a695c(0x184)](),_0x7d44af=document[_0x3a695c(0x17d)](_0x3a695c(0x173));_0x7d44af[_0x3a695c(0x17c)]='Seleccione...',_0x7d44af[_0x3a695c(0x160)]=!![],_0x7d44af[_0x3a695c(0x16b)]=!![],_0x819de1[_0x3a695c(0x171)](_0x7d44af),_0x4cb100[_0x3a695c(0x172)](_0x47d796=>{const _0x2595a4=_0x3a695c,_0x4de6e7=document[_0x2595a4(0x17d)](_0x2595a4(0x173));_0x4de6e7['value']=_0x47d796[_0x2595a4(0x177)],_0x4de6e7[_0x2595a4(0x17c)]=_0x47d796['nombre'],_0x819de1[_0x2595a4(0x171)](_0x4de6e7);});}},validarPaciente=async()=>{const _0x157a3b=_0x1092;let _0x525e17=localStorage[_0x157a3b(0x161)](_0x157a3b(0x154)),_0x5981f5=JSON[_0x157a3b(0x199)](_0x525e17),_0xd253b9=document[_0x157a3b(0x164)]('documento')['value'];console[_0x157a3b(0x15d)](_0xd253b9);let _0x441d77={'cedula':_0xd253b9};const _0x1b669c=await fetch(servidorAPI+_0x157a3b(0x15b),{'method':_0x157a3b(0x18a),'body':JSON[_0x157a3b(0x192)](_0x441d77),'headers':{'Accept':_0x157a3b(0x186),'Content-Type':_0x157a3b(0x186),'Authorization':_0x5981f5['token']}});try{const _0x52e4b7=await _0x1b669c[_0x157a3b(0x184)]();if(_0x52e4b7!=null)return!![];}catch(_0x391ff1){return![];}},crearPaciente=async _0x57dd11=>{const _0x5eeef8=_0x1092;let _0x412bdb=localStorage[_0x5eeef8(0x161)](_0x5eeef8(0x154)),_0x3f91e1=JSON[_0x5eeef8(0x199)](_0x412bdb);_0x57dd11[_0x5eeef8(0x17a)]();const _0x3ef6b2=document['getElementById']('guardarPaciente');_0x3ef6b2['style'][_0x5eeef8(0x15a)]='gray',_0x3ef6b2[_0x5eeef8(0x16b)]=!![];let _0xe9b9b6=await validarPaciente();console['log'](_0xe9b9b6);let _0x19f99f=document[_0x5eeef8(0x164)](_0x5eeef8(0x180))['value'],_0x5f1816=document['getElementById'](_0x5eeef8(0x19c))[_0x5eeef8(0x174)],_0x275b5a=document['getElementById'](_0x5eeef8(0x182))[_0x5eeef8(0x174)],_0x12ecbf=_0x275b5a[_0x5eeef8(0x150)]();if(typeof _0x5f1816===_0x5eeef8(0x16a)&&(_0x12ecbf==='a'||_0x12ecbf==='o',_0x12ecbf==='b',_0x12ecbf==='ab')){let _0x4be315=document[_0x5eeef8(0x164)](_0x5eeef8(0x15f))[_0x5eeef8(0x174)]+'T02:45:05.101Z',_0xedc724=selectEps['options'][selectEps[_0x5eeef8(0x198)]],_0x5136be=_0xedc724['value'],_0x23df64=selectTipo[_0x5eeef8(0x185)][selectTipo[_0x5eeef8(0x198)]],_0x2c4c48=_0x23df64['value'];console['log'](_0x2c4c48);let _0x55978d=document['getElementById'](_0x5eeef8(0x190))[_0x5eeef8(0x174)],_0x69c8b7=document[_0x5eeef8(0x164)](_0x5eeef8(0x17b))[_0x5eeef8(0x174)],_0x1da3e9=document[_0x5eeef8(0x164)](_0x5eeef8(0x152))['value'],_0x251704=document[_0x5eeef8(0x164)](_0x5eeef8(0x19b))['value'],_0x1474db=document[_0x5eeef8(0x164)](_0x5eeef8(0x19d))[_0x5eeef8(0x174)],_0x3a396d=document[_0x5eeef8(0x164)](_0x5eeef8(0x17e))['value'],_0x17921a=document['getElementById']('pesoseco')['value'],_0x31a867=document[_0x5eeef8(0x164)](_0x5eeef8(0x162))[_0x5eeef8(0x174)],_0x446c28=CryptoJS['AES'][_0x5eeef8(0x19a)](CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)][_0x5eeef8(0x199)](encodeURIComponent(_0x5f1816)),CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)][_0x5eeef8(0x199)](cajaNegra2),{'iv':CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)][_0x5eeef8(0x199)](iv),'mode':CryptoJS[_0x5eeef8(0x155)]['CBC'],'padding':CryptoJS['pad']['Pkcs7']})['toString'](),_0x166d3d=CryptoJS[_0x5eeef8(0x181)]['encrypt'](CryptoJS['enc'][_0x5eeef8(0x168)][_0x5eeef8(0x199)](encodeURIComponent(_0x1da3e9)),CryptoJS['enc']['Utf8']['parse'](cajaNegra2),{'iv':CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)][_0x5eeef8(0x199)](iv),'mode':CryptoJS[_0x5eeef8(0x155)]['CBC'],'padding':CryptoJS['pad']['Pkcs7']})['toString'](),_0x1fc1df=CryptoJS[_0x5eeef8(0x181)]['encrypt'](CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)]['parse'](encodeURIComponent(_0x1474db)),CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)][_0x5eeef8(0x199)](cajaNegra2),{'iv':CryptoJS['enc'][_0x5eeef8(0x168)][_0x5eeef8(0x199)](iv),'mode':CryptoJS['mode'][_0x5eeef8(0x1a0)],'padding':CryptoJS[_0x5eeef8(0x178)][_0x5eeef8(0x14f)]})['toString'](),_0x4c4b81=CryptoJS[_0x5eeef8(0x181)][_0x5eeef8(0x19a)](CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)]['parse'](encodeURIComponent(_0x275b5a)),CryptoJS[_0x5eeef8(0x187)]['Utf8']['parse'](cajaNegra2),{'iv':CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)]['parse'](iv),'mode':CryptoJS[_0x5eeef8(0x155)][_0x5eeef8(0x1a0)],'padding':CryptoJS[_0x5eeef8(0x178)][_0x5eeef8(0x14f)]})[_0x5eeef8(0x153)](),_0x78a86c=CryptoJS['AES']['encrypt'](CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)][_0x5eeef8(0x199)](encodeURIComponent(_0x251704)),CryptoJS[_0x5eeef8(0x187)]['Utf8'][_0x5eeef8(0x199)](cajaNegra2),{'iv':CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)]['parse'](iv),'mode':CryptoJS[_0x5eeef8(0x155)]['CBC'],'padding':CryptoJS[_0x5eeef8(0x178)][_0x5eeef8(0x14f)]})[_0x5eeef8(0x153)](),_0xc44e6f=CryptoJS[_0x5eeef8(0x181)][_0x5eeef8(0x19a)](CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)][_0x5eeef8(0x199)](encodeURIComponent(_0x19f99f)),CryptoJS['enc'][_0x5eeef8(0x168)][_0x5eeef8(0x199)](cajaNegra2),{'iv':CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)][_0x5eeef8(0x199)](iv),'mode':CryptoJS['mode'][_0x5eeef8(0x1a0)],'padding':CryptoJS[_0x5eeef8(0x178)][_0x5eeef8(0x14f)]})[_0x5eeef8(0x153)](),_0x102166=CryptoJS[_0x5eeef8(0x181)][_0x5eeef8(0x19a)](CryptoJS['enc']['Utf8']['parse'](encodeURIComponent(_0x31a867)),CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)][_0x5eeef8(0x199)](cajaNegra2),{'iv':CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)][_0x5eeef8(0x199)](iv),'mode':CryptoJS[_0x5eeef8(0x155)][_0x5eeef8(0x1a0)],'padding':CryptoJS[_0x5eeef8(0x178)]['Pkcs7']})[_0x5eeef8(0x153)](),_0x276b35=CryptoJS['AES'][_0x5eeef8(0x19a)](CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)]['parse'](encodeURIComponent(_0x2c4c48)),CryptoJS[_0x5eeef8(0x187)]['Utf8'][_0x5eeef8(0x199)](cajaNegra2),{'iv':CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)]['parse'](iv),'mode':CryptoJS['mode'][_0x5eeef8(0x1a0)],'padding':CryptoJS['pad'][_0x5eeef8(0x14f)]})[_0x5eeef8(0x153)](),_0x282bce=document[_0x5eeef8(0x164)](_0x5eeef8(0x151))[_0x5eeef8(0x18b)],_0x3b9bca=document[_0x5eeef8(0x164)](_0x5eeef8(0x158))['checked'],_0x44d473=CryptoJS[_0x5eeef8(0x181)][_0x5eeef8(0x19a)](CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)][_0x5eeef8(0x199)](encodeURIComponent(_0x55978d)),CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)][_0x5eeef8(0x199)](cajaNegra2),{'iv':CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)][_0x5eeef8(0x199)](iv),'mode':CryptoJS[_0x5eeef8(0x155)][_0x5eeef8(0x1a0)],'padding':CryptoJS['pad'][_0x5eeef8(0x14f)]})[_0x5eeef8(0x153)](),_0x5c2805=CryptoJS[_0x5eeef8(0x181)]['encrypt'](CryptoJS[_0x5eeef8(0x187)]['Utf8'][_0x5eeef8(0x199)](encodeURIComponent(_0x3a396d)),CryptoJS[_0x5eeef8(0x187)]['Utf8'][_0x5eeef8(0x199)](cajaNegra2),{'iv':CryptoJS['enc'][_0x5eeef8(0x168)]['parse'](iv),'mode':CryptoJS[_0x5eeef8(0x155)][_0x5eeef8(0x1a0)],'padding':CryptoJS['pad'][_0x5eeef8(0x14f)]})[_0x5eeef8(0x153)](),_0x156ca1=CryptoJS[_0x5eeef8(0x181)]['encrypt'](CryptoJS[_0x5eeef8(0x187)]['Utf8']['parse'](encodeURIComponent(_0x17921a)),CryptoJS['enc'][_0x5eeef8(0x168)]['parse'](cajaNegra2),{'iv':CryptoJS['enc'][_0x5eeef8(0x168)][_0x5eeef8(0x199)](iv),'mode':CryptoJS[_0x5eeef8(0x155)][_0x5eeef8(0x1a0)],'padding':CryptoJS[_0x5eeef8(0x178)]['Pkcs7']})[_0x5eeef8(0x153)](),_0x2b2d7f=CryptoJS[_0x5eeef8(0x181)]['encrypt'](CryptoJS['enc'][_0x5eeef8(0x168)][_0x5eeef8(0x199)](encodeURIComponent(_0x69c8b7)),CryptoJS['enc'][_0x5eeef8(0x168)][_0x5eeef8(0x199)](cajaNegra2),{'iv':CryptoJS[_0x5eeef8(0x187)]['Utf8'][_0x5eeef8(0x199)](iv),'mode':CryptoJS[_0x5eeef8(0x155)][_0x5eeef8(0x1a0)],'padding':CryptoJS[_0x5eeef8(0x178)]['Pkcs7']})[_0x5eeef8(0x153)](),_0x43fb36=new Date();const _0xe369b5={'altura':_0x44d473,'cedula':_0x446c28,'celular':_0x78a86c,'contrasenia':_0x446c28,'direccion':_0x166d3d,'eps':parseInt(_0x5136be,0xa),'fechaNacimiento':_0x4be315,'nombre':_0xc44e6f,'ocupacion':_0x1fc1df,'peso':_0x5c2805,'pesoSeco':_0x156ca1,'rh':_0x2b2d7f,'tipoSangre':_0x4c4b81,'correo':_0x102166,'diabetes':_0x282bce,'hipertension':_0x3b9bca,'tipoDocumento':_0x276b35,'activo':!![],'fechaRegistro':_0x43fb36};if(_0xe9b9b6==![]){let _0x1d9c99=decodeURIComponent(CryptoJS['AES'][_0x5eeef8(0x19e)](_0xe369b5['cedula'],CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)]['parse'](cajaNegra2),{'iv':CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)][_0x5eeef8(0x199)](iv),'mode':CryptoJS['mode'][_0x5eeef8(0x1a0)],'padding':CryptoJS['pad'][_0x5eeef8(0x14f)]})[_0x5eeef8(0x153)](CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)]));console[_0x5eeef8(0x15d)](_0x1d9c99);let _0x959fee=decodeURIComponent(CryptoJS[_0x5eeef8(0x181)][_0x5eeef8(0x19e)](_0xe369b5[_0x5eeef8(0x180)],CryptoJS['enc'][_0x5eeef8(0x168)][_0x5eeef8(0x199)](cajaNegra2),{'iv':CryptoJS[_0x5eeef8(0x187)][_0x5eeef8(0x168)]['parse'](iv),'mode':CryptoJS['mode'][_0x5eeef8(0x1a0)],'padding':CryptoJS[_0x5eeef8(0x178)][_0x5eeef8(0x14f)]})[_0x5eeef8(0x153)](CryptoJS[_0x5eeef8(0x187)]['Utf8']));fetch(servidorAPI+_0x5eeef8(0x18f),{'method':_0x5eeef8(0x18a),'headers':{'Accept':'application/json','Content-Type':_0x5eeef8(0x186),'Authorization':_0x3f91e1[_0x5eeef8(0x188)]},'body':JSON[_0x5eeef8(0x192)](_0xe369b5)})[_0x5eeef8(0x166)](_0x1757b2=>{const _0x311ca5=_0x5eeef8;_0x1757b2['ok']&&$(_0x311ca5(0x175))[_0x311ca5(0x16c)]('show');});}else $(_0x5eeef8(0x194))[_0x5eeef8(0x16c)](_0x5eeef8(0x157));}else{$('#datosErroneos')[_0x5eeef8(0x16c)]('show');const _0x16062c=document[_0x5eeef8(0x164)](_0x5eeef8(0x17f));_0x16062c['style'][_0x5eeef8(0x15a)]=_0x5eeef8(0x179),_0x16062c['disabled']=![];}},listarPacientes=async()=>{const _0x4ad962=_0x1092;try{let _0x41a567=localStorage[_0x4ad962(0x161)]('datos'),_0x3b24f5=JSON['parse'](_0x41a567);const _0x122e7e=await fetch(servidorAPI+_0x4ad962(0x1a1),{'method':_0x4ad962(0x170),'headers':{'Accept':_0x4ad962(0x186),'Content-Type':_0x4ad962(0x186),'Authorization':_0x3b24f5[_0x4ad962(0x188)]}});if(_0x122e7e['ok']){if(_0x122e7e[_0x4ad962(0x189)]===0xc8||_0x122e7e[_0x4ad962(0x189)]===0xcc){const _0x406cbf=await _0x122e7e[_0x4ad962(0x184)]();console['log']('he\x20aqui\x20los\x20pacientes'),console[_0x4ad962(0x15d)](_0x406cbf);const _0x30187f=_0x406cbf['filter'](_0x53c5fc=>_0x53c5fc[_0x4ad962(0x18c)])[_0x4ad962(0x176)](_0x2f7047=>{const _0x526220=_0x4ad962;let _0x17d322=decodeURIComponent(CryptoJS['AES'][_0x526220(0x19e)](_0x2f7047[_0x526220(0x169)],CryptoJS[_0x526220(0x187)]['Utf8']['parse'](cajaNegra2),{'iv':CryptoJS[_0x526220(0x187)][_0x526220(0x168)]['parse'](iv),'mode':CryptoJS['mode'][_0x526220(0x1a0)],'padding':CryptoJS[_0x526220(0x178)][_0x526220(0x14f)]})[_0x526220(0x153)](CryptoJS[_0x526220(0x187)][_0x526220(0x168)])),_0x55b039=decodeURIComponent(CryptoJS[_0x526220(0x181)][_0x526220(0x19e)](_0x2f7047['nombre'],CryptoJS['enc'][_0x526220(0x168)]['parse'](cajaNegra2),{'iv':CryptoJS[_0x526220(0x187)][_0x526220(0x168)]['parse'](iv),'mode':CryptoJS[_0x526220(0x155)][_0x526220(0x1a0)],'padding':CryptoJS[_0x526220(0x178)][_0x526220(0x14f)]})['toString'](CryptoJS[_0x526220(0x187)][_0x526220(0x168)]));return{'nombre':_0x55b039,'cedula':_0x17d322};});return _0x30187f;}}else console[_0x4ad962(0x156)](_0x4ad962(0x163),_0x122e7e['status']);}catch(_0x41392c){console['error']('Error\x20fetching\x20patients:',_0x41392c);}},listarPacientesInactivos=async()=>{const _0x3ccf86=_0x1092;try{let _0x59284b=localStorage[_0x3ccf86(0x161)](_0x3ccf86(0x154)),_0x1c03e7=JSON[_0x3ccf86(0x199)](_0x59284b);const _0x27c1a9=await fetch(servidorAPI+_0x3ccf86(0x1a1),{'method':'GET','headers':{'Accept':'application/json','Content-Type':_0x3ccf86(0x186),'Authorization':_0x1c03e7[_0x3ccf86(0x188)]}});if(_0x27c1a9['ok']){if(_0x27c1a9[_0x3ccf86(0x189)]===0xc8||_0x27c1a9[_0x3ccf86(0x189)]===0xcc){const _0x20130a=await _0x27c1a9['json'](),_0x5c801a=_0x20130a['filter'](_0x2e69aa=>!_0x2e69aa[_0x3ccf86(0x18c)])['map'](_0x123840=>{const _0x26781e=_0x3ccf86;let _0x433205=decodeURIComponent(CryptoJS[_0x26781e(0x181)]['decrypt'](_0x123840[_0x26781e(0x169)],CryptoJS['enc'][_0x26781e(0x168)][_0x26781e(0x199)](cajaNegra2),{'iv':CryptoJS[_0x26781e(0x187)][_0x26781e(0x168)][_0x26781e(0x199)](iv),'mode':CryptoJS[_0x26781e(0x155)][_0x26781e(0x1a0)],'padding':CryptoJS[_0x26781e(0x178)][_0x26781e(0x14f)]})[_0x26781e(0x153)](CryptoJS[_0x26781e(0x187)]['Utf8'])),_0x41b301=decodeURIComponent(CryptoJS['AES'][_0x26781e(0x19e)](_0x123840[_0x26781e(0x180)],CryptoJS[_0x26781e(0x187)][_0x26781e(0x168)]['parse'](cajaNegra2),{'iv':CryptoJS[_0x26781e(0x187)][_0x26781e(0x168)][_0x26781e(0x199)](iv),'mode':CryptoJS[_0x26781e(0x155)][_0x26781e(0x1a0)],'padding':CryptoJS[_0x26781e(0x178)][_0x26781e(0x14f)]})[_0x26781e(0x153)](CryptoJS[_0x26781e(0x187)][_0x26781e(0x168)]));return{'nombre':_0x41b301,'cedula':_0x433205};});return _0x5c801a;}}else console[_0x3ccf86(0x156)](_0x3ccf86(0x163),_0x27c1a9['status']);}catch(_0x231fbc){console[_0x3ccf86(0x156)](_0x3ccf86(0x163),_0x231fbc);}},ultimaCita=async _0x5919c8=>{const _0x72e439=_0x1092;try{let _0x5b383a=localStorage[_0x72e439(0x161)](_0x72e439(0x154)),_0x255a73=JSON[_0x72e439(0x199)](_0x5b383a);cedulaPac=await obtenerCedEncriptada(_0x5919c8),console[_0x72e439(0x15d)](cedulaPac);let _0x2d61f0={'cedula':cedulaPac},_0x364155=await fetch(localStorage['getItem'](_0x72e439(0x196))+_0x72e439(0x14e),{'method':_0x72e439(0x18a),'headers':{'Accept':'application/json','Content-Type':'application/json','Authorization':_0x255a73['token']},'body':JSON[_0x72e439(0x192)](_0x2d61f0)});if(_0x364155[_0x72e439(0x189)]===0xc8){let _0x53de90=await _0x364155[_0x72e439(0x184)]();return _0x53de90;}else{}}catch(_0x536280){return console['error'](_0x72e439(0x15e),_0x536280),null;}};function _0x1092(_0x5e947e,_0xf500b5){const _0x50559c=_0x5055();return _0x1092=function(_0x1092a2,_0x3b6d65){_0x1092a2=_0x1092a2-0x14e;let _0x12a016=_0x50559c[_0x1092a2];return _0x12a016;},_0x1092(_0x5e947e,_0xf500b5);}function _0x5055(){const _0x33e061=['documento','ocupacion','decrypt','636ZJUdNc','CBC','Medico/findAllPacientes','paciente/ultimaCita','Pkcs7','toLowerCase','diabetes','direccion','toString','datos','mode','error','show','hipertension','#datosErroneos','background','paciente/findPacienteByCedula/false','DatosMedicos/ListEps','log','Error\x20en\x20encontrar\x20Ultima\x20Cita:','fecha','selected','getItem','correo','Error\x20fetching\x20patients:','getElementById','529928eNDdDC','then','hide','Utf8','cedula','number','disabled','modal','13224861VmuXYR','4vbcROM','29535splNrI','GET','appendChild','forEach','option','value','#successModal','map','idEps','pad','#04BAFC','preventDefault','selectRh','textContent','createElement','peso','guardarPaciente','nombre','AES','tiposangre','231zWPGJw','json','options','application/json','enc','token','status','POST','checked','activo','length','6699705jegkVb','paciente/crearPaciente','estatura','13606840GvUCsM','stringify','18670100XyTiMj','#modal3','selectEps','servidorAPI','100638wwldKz','selectedIndex','parse','encrypt','telefono'];_0x5055=function(){return _0x33e061;};return _0x5055();}function cerrarModalDatosErroneos(){const _0x366edb=_0x1092;$(_0x366edb(0x159))[_0x366edb(0x16c)](_0x366edb(0x167));}