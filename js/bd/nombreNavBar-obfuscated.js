(function(_0x1890f6,_0x279732){const _0x55de66=_0x5c86,_0x284eaf=_0x1890f6();while(!![]){try{const _0x5878a4=parseInt(_0x55de66(0x1a6))/0x1*(parseInt(_0x55de66(0x19a))/0x2)+-parseInt(_0x55de66(0x18e))/0x3+parseInt(_0x55de66(0x18f))/0x4+-parseInt(_0x55de66(0x1a7))/0x5*(parseInt(_0x55de66(0x196))/0x6)+parseInt(_0x55de66(0x1a1))/0x7*(parseInt(_0x55de66(0x1ab))/0x8)+-parseInt(_0x55de66(0x197))/0x9+parseInt(_0x55de66(0x192))/0xa*(parseInt(_0x55de66(0x191))/0xb);if(_0x5878a4===_0x279732)break;else _0x284eaf['push'](_0x284eaf['shift']());}catch(_0xd64617){_0x284eaf['push'](_0x284eaf['shift']());}}}(_0x22b3,0x23ca7));function _0x5c86(_0x4c7ee9,_0x428774){const _0x22b313=_0x22b3();return _0x5c86=function(_0x5c8646,_0x1e9854){_0x5c8646=_0x5c8646-0x18d;let _0x5c113b=_0x22b313[_0x5c8646];return _0x5c113b;},_0x5c86(_0x4c7ee9,_0x428774);}function _0x22b3(){const _0x581b78=['log','parse','CBC','POST','893942FKsCDa','administrador','Usuario/cedula','enc','nombre','23ZeWWHc','290qDsjqQ','todo\x20ok','AES','Utf8','16buSJrn','mode','textContent','usuario','getElementById','datos','toString','123084InWrbL','411884onaPrG','application/json','55NHpVfQ','37790zfkMtZ','medico','pad','error','17724TPyRhQ','1369818MwvTwY','getItem','servidorAPI','11642hESFqJ','stringify','decrypt'];_0x22b3=function(){return _0x581b78;};return _0x22b3();}let nombreNavBar=async()=>{const _0x4031bd=_0x5c86;let _0x62ffbb=localStorage[_0x4031bd(0x198)](_0x4031bd(0x1b0)),_0x32d5d4=JSON[_0x4031bd(0x19e)](_0x62ffbb);console[_0x4031bd(0x19d)](_0x32d5d4);let _0x5261a0=_0x32d5d4[_0x4031bd(0x1ae)],_0x347938=_0x32d5d4['cedula'],_0x504a6f=_0x32d5d4['contrasenia'];const _0x1476c8=_0x347938;console[_0x4031bd(0x19d)](_0x1476c8);if(_0x5261a0==_0x4031bd(0x193)||_0x5261a0==_0x4031bd(0x1a2)){let _0x335b10={'cedula':_0x1476c8,'contrasenia':_0x504a6f};console['log'](_0x335b10);try{const _0x3dab03=await fetch(localStorage['getItem'](_0x4031bd(0x199))+_0x4031bd(0x1a3),{'method':_0x4031bd(0x1a0),'body':JSON[_0x4031bd(0x19b)](_0x335b10),'headers':{'Accept':_0x4031bd(0x190),'Content-Type':_0x4031bd(0x190)}});if(_0x3dab03['ok']){const _0x4017e8=await _0x3dab03['json']();console['log'](_0x4031bd(0x1a8)),console[_0x4031bd(0x19d)](_0x4017e8);let _0x2f594f=decodeURIComponent(CryptoJS[_0x4031bd(0x1a9)][_0x4031bd(0x19c)](_0x4017e8[_0x4031bd(0x1a5)],CryptoJS['enc'][_0x4031bd(0x1aa)][_0x4031bd(0x19e)](cajaNegra2),{'iv':CryptoJS[_0x4031bd(0x1a4)]['Utf8'][_0x4031bd(0x19e)](iv),'mode':CryptoJS[_0x4031bd(0x1ac)][_0x4031bd(0x19f)],'padding':CryptoJS[_0x4031bd(0x194)]['Pkcs7']})[_0x4031bd(0x18d)](CryptoJS['enc'][_0x4031bd(0x1aa)]));console[_0x4031bd(0x19d)](_0x2f594f),actualizarNombreEnNavbar(_0x2f594f);}}catch(_0xeaf694){console[_0x4031bd(0x195)](_0xeaf694);}}};function actualizarNombreEnNavbar(_0x118d70){const _0x637c0c=_0x5c86;document[_0x637c0c(0x1af)]('nombreUsuario')[_0x637c0c(0x1ad)]=_0x118d70;}