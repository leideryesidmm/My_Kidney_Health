const _0x5e49cf=_0x1055;function _0x1055(_0x5b92eb,_0x39fdbb){const _0x4330c8=_0x4330();return _0x1055=function(_0x1055df,_0x49b3aa){_0x1055df=_0x1055df-0x1b8;let _0x3d896d=_0x4330c8[_0x1055df];return _0x3d896d;},_0x1055(_0x5b92eb,_0x39fdbb);}(function(_0x1e0a57,_0x52e594){const _0x147ec1=_0x1055,_0x55fc4e=_0x1e0a57();while(!![]){try{const _0x31707c=parseInt(_0x147ec1(0x1ff))/0x1+-parseInt(_0x147ec1(0x1f6))/0x2+-parseInt(_0x147ec1(0x1c4))/0x3*(-parseInt(_0x147ec1(0x205))/0x4)+parseInt(_0x147ec1(0x1bb))/0x5+parseInt(_0x147ec1(0x1ea))/0x6*(-parseInt(_0x147ec1(0x1c9))/0x7)+-parseInt(_0x147ec1(0x1f3))/0x8+parseInt(_0x147ec1(0x1c5))/0x9;if(_0x31707c===_0x52e594)break;else _0x55fc4e['push'](_0x55fc4e['shift']());}catch(_0x2743cb){_0x55fc4e['push'](_0x55fc4e['shift']());}}}(_0x4330,0xbc03d));let usuario=JSON['parse'](localStorage[_0x5e49cf(0x1ee)]('datos'))[_0x5e49cf(0x1f8)],NavBarMedicamento=()=>{const _0x11cd4c=_0x5e49cf;let _0x117561='';usuario==_0x11cd4c(0x1cb)?_0x117561+='<nav\x20class=\x22navbar\x22\x20id=\x22bann\x22\x20style=\x22padding:0\x22><div\x20class=\x22col-2\x22><a\x20href=\x22principal.html\x22\x20class=\x22devolverse\x22><img\x20src=\x22../img/devolverseColor.png\x22\x20alt=\x22Ir\x20atrás\x22></a></div>'+_0x11cd4c(0x1de)+_0x11cd4c(0x1e3):_0x117561+=_0x11cd4c(0x1fb)+(usuario=='administrador'?_0x11cd4c(0x1ba):'')+_0x11cd4c(0x1df),document[_0x11cd4c(0x1e6)](_0x11cd4c(0x1eb))[_0x11cd4c(0x1fd)]=_0x117561;},listMedicamentos=async _0x4d6ec7=>{const _0x5b83db=_0x5e49cf;if(usuario==_0x5b83db(0x1cb)){let _0x1eb619='';_0x1eb619+=_0x5b83db(0x1fe),document[_0x5b83db(0x1e6)](_0x5b83db(0x1d2))[_0x5b83db(0x1fd)]=_0x1eb619;}_0x4d6ec7=await _0x4d6ec7;let _0x16aac4='',_0x1a029f='',_0x5a4fa9=0x1;if(_0x4d6ec7!=null&&_0x4d6ec7['length']>0x0){let _0x3da0eb='',_0x226da3='';_0x4d6ec7[_0x5b83db(0x1d7)](_0x5a6992=>{const _0xd2a373=_0x5b83db;let _0x55b52e=_0xd2a373(0x1d3)+_0xd2a373(0x1da)+_0xd2a373(0x1f1)+_0x5a4fa9+'\x22>'+'<button\x20class=\x22accordion-button\x20collapsed\x22\x20type=\x22button\x22\x20data-bs-toggle=\x22collapse\x22\x20data-bs-target=\x22#flush-collapse'+_0x5a4fa9+'\x22\x20aria-expanded=\x22false\x22\x20aria-controls=\x22flush-collapse'+_0x5a4fa9+'\x22>'+_0x5a6992['nombre']+_0xd2a373(0x1cc)+'</h2>'+_0xd2a373(0x1e0)+_0x5a4fa9+_0xd2a373(0x1f7)+_0x5a4fa9+_0xd2a373(0x1e9)+'<div\x20class=\x22accordion-body\x22>'+_0xd2a373(0x1c1)+_0xd2a373(0x1f0)+_0xd2a373(0x204)+_0x5a6992[_0xd2a373(0x1cf)]+_0xd2a373(0x1c7)+_0xd2a373(0x1fa)+'<p><strong>Vía\x20administración:</strong></p>'+_0xd2a373(0x1dc)+_0x5a6992[_0xd2a373(0x1ef)]+_0xd2a373(0x1c7)+_0xd2a373(0x1f5)+_0xd2a373(0x1c3)+_0xd2a373(0x207)+_0x5a6992[_0xd2a373(0x1ed)]+_0xd2a373(0x1e2)+'</div>'+'<div\x20class=\x22fechaIni\x22>'+_0xd2a373(0x201)+_0xd2a373(0x1c2)+'\x20'+_0x5a6992['fechaIni']+_0xd2a373(0x1e2)+_0xd2a373(0x200)+'<div\x20class=\x22fechaFin\x22>'+_0xd2a373(0x203)+_0xd2a373(0x1bd)+'\x20'+_0x5a6992['fechaFin']+_0xd2a373(0x1e2)+_0xd2a373(0x1c7)+_0xd2a373(0x1e4)+_0xd2a373(0x1bc)+'<p\x20class=\x22tomas\x22\x20id=\x22tomas\x22>'+_0x5a6992[_0xd2a373(0x1c6)]+_0xd2a373(0x1e2)+_0xd2a373(0x1c7);usuario==='paciente'&&(_0x55b52e+=_0xd2a373(0x1f2)+_0xd2a373(0x1cd)+_0x5a6992[_0xd2a373(0x202)]+_0xd2a373(0x1c8)+_0xd2a373(0x1f4)+_0x5a4fa9+_0xd2a373(0x1ce)+_0xd2a373(0x1c7)+_0xd2a373(0x1ec)+_0x5a4fa9+'\x22>'+_0xd2a373(0x1ca)+_0xd2a373(0x1e8)+_0xd2a373(0x1b9)+_0xd2a373(0x1dd)+_0xd2a373(0x206)+_0xd2a373(0x1c7)+_0xd2a373(0x1d6)+'<p>¿Está\x20seguro(a)\x20de\x20eliminar\x20este\x20medicamento?</p>'+_0xd2a373(0x1d4)+_0x5a6992[_0xd2a373(0x1be)]+_0xd2a373(0x1db)+_0xd2a373(0x1c7)+_0xd2a373(0x1e5)+_0xd2a373(0x1f9)+_0xd2a373(0x1b8)+_0x5a6992[_0xd2a373(0x202)]+_0xd2a373(0x1bf)+_0xd2a373(0x1c7)+_0xd2a373(0x1c7)),_0x55b52e+='</div>'+'</div>'+_0xd2a373(0x1c7)+_0xd2a373(0x1c7)+_0xd2a373(0x1c7),_0x5a6992[_0xd2a373(0x1fc)]==!![]?_0x3da0eb+=_0x55b52e:_0x226da3+=_0x55b52e,_0x5a4fa9++;}),console['log'](_0x3da0eb),console[_0x5b83db(0x1d0)](_0x226da3),_0x3da0eb!==''&&(_0x16aac4+=_0x5b83db(0x1e7)+_0x3da0eb),_0x226da3!==''&&(_0x16aac4+=_0x5b83db(0x1d9)+_0x226da3);}else _0x16aac4+=_0x5b83db(0x1d8);_0x1a029f+=_0x16aac4+_0x5b83db(0x1c7),document['getElementById'](_0x5b83db(0x1e1))[_0x5b83db(0x1fd)]=_0x1a029f;},formatearFechas=function(_0x445630){const _0x3dc06f=_0x5e49cf,_0x3dc431=new Date(_0x445630),_0x20bab3=_0x3dc431[_0x3dc06f(0x1d1)](),_0x56905d=('0'+(_0x3dc431['getMonth']()+0x1))[_0x3dc06f(0x1c0)](-0x2),_0x2c8dc8=('0'+_0x3dc431[_0x3dc06f(0x1d5)]())['slice'](-0x2),_0x4311bc=_0x20bab3+'-'+_0x56905d+'-'+_0x2c8dc8;return _0x4311bc;};function _0x4330(){const _0x15d38d=['490eTpyht','<div\x20class=\x22modal-dialog\x22>','paciente','</button>','<a\x20href=\x22editarMedicamento.html?idFormulaMedicamento=','\x22\x20><img\x20src=\x22../img/inhabilitar.png\x22\x20alt=\x22Inhabilitar\x20Medicamentos\x22\x20id=\x22inhabilitar\x22\x20class=\x22btn-inhabilitar\x20imagen-crecible-iconos\x22></a></div>','descripcion','log','getFullYear','flotante','<div\x20class=\x22accordion\x22\x20id=\x22accordionExample\x22>','<label\x20\x20class=\x22medicamento\x22\x20id=\x22medicamento\x22>','getDate','<div\x20class=\x22modal-body\x22>','forEach','<b><h3\x20class=\x22sinMedicamentos\x22>No\x20tiene\x20medicamentos\x20registrados.\x20<h3></b>','<br><h2>Otros\x20Medicamentos</h2><br>','<div\x20class=\x22accordion-item\x22>','</label>','<p\x20class=\x22via_administracion\x22\x20id=\x22via_administracion\x22>','<h5\x20class=\x22modal-title\x22>Eliminar\x20Medicamento</h5>','<div\x20class=\x22col-8\x22><h1\x20class=\x22title-principal-app\x22>Medicamentos</h1></div>','\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20align-items-center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2216\x22\x20height=\x2216\x22\x20fill=\x22currentColor\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22bi\x20bi-person-circle\x22\x20viewBox=\x220\x200\x2016\x2016\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M11\x206a3\x203\x200\x201\x201-6\x200\x203\x203\x200\x200\x201\x206\x200z\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill-rule=\x22evenodd\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20d=\x22M0\x208a8\x208\x200\x201\x201\x2016\x200A8\x208\x200\x200\x201\x200\x208zm8-7a7\x207\x200\x200\x200-5.468\x2011.37C3.242\x2011.226\x204.805\x2010\x208\x2010s4.757\x201.225\x205.468\x202.37A7\x207\x200\x200\x200\x208\x201z\x22\x20/>\x27+\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg></li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22nav-item\x20ml-1\x20active\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn\x20dropdown-toggle\x22\x20type=\x22button\x22\x20id=\x22nombreUsuario\x22\x20data-toggle=\x22dropdown\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20aria-haspopup=\x22true\x22\x20aria-expanded=\x22false\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22dropdown-menu\x20dropdown-menu-right\x22\x20aria-labelledby=\x22dropdownMenuButton\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22dropdown-item\x22\x20href=\x22#\x22\x20data-bs-toggle=\x22modal\x22\x20data-bs-target=\x22#nuevacontrasenia\x22>Cambiar\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Contraseña</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x22dropdown-item\x22\x20href=\x22login.html\x22\x20onclick=\x22logout()\x22>Cerrar\x20sesión</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20</nav>','<div\x20id=\x22flush-collapse','acordeon1','</p>','<div\x20class=\x22col-2\x22></div></nav>','<div\x20class=\x22toma\x22>','<div\x20class=\x22modal-footer\x22>','getElementById','<h2>Medicamentos\x20Recetados</h2><br>','<div\x20class=\x22modal-content\x22>','\x22\x20data-bs-parent=\x22#acordeon1\x22>','6858CPQTeq','banner','<div\x20class=\x22modal\x22\x20tabindex=\x22-1\x22\x20id=\x22inhabilitarMedicamento','concentracion','getItem','viaAdministracion','<p><strong>Descripción:</strong></p>','<h2\x20class=\x22accordion-header\x22\x20id=\x22flush-heading','<div\x20class=\x22btn-editar-container\x22>','7807144gcbUfZ','<div><a\x20href=\x22\x22\x20class=\x22btn-inhabilitar\x22\x20data-bs-toggle=\x22modal\x22\x20data-bs-target=\x22#inhabilitarMedicamento','<div\x20class=\x22concentration\x22>','1743510vqMCWw','\x22\x20class=\x22accordion-collapse\x20collapse\x22\x20aria-labelledby=\x22flush-heading','usuario','<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x22\x20data-bs-dismiss=\x22modal\x22>Cancelar</button>','<div\x20class=\x22via\x22>','<nav\x20id=\x22nav\x22\x20class=\x22\x20navbar-expand-lg\x20navbar-light\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-1\x20sinlogomovil\x22\x20style=\x22padding:\x200,0,0,0;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22principal.html\x22\x20class=\x22devolverse\x22><img\x20src=\x22../img/devolverseColor.png\x22\x20alt=\x22Ir\x20atrás\x22\x20id=\x22icono\x22></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-3\x20sinlogomovil2\x22\x20style=\x22padding:\x200,0,0,0;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22principal.html\x22\x20class=\x22devolverse\x22><img\x20src=\x22../img/devolverseColor.png\x22\x20alt=\x22Ir\x20atrás\x22\x20id=\x22icono\x22></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-2\x20sinlogomovil\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22logo\x22><img\x20src=\x22../img/logo3.png\x22\x20alt=\x22Logo\x20app\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-6\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1>Medicamentos</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22col-3\x22\x20style=\x22padding:\x200,0,0,0;\x20text-align:\x20right;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22navbar-toggler\x22\x20type=\x22button\x22\x20data-toggle=\x22collapse\x22\x20data-target=\x22#navbarSupportedContent\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20aria-controls=\x22navbarSupportedContent\x22\x20aria-expanded=\x22false\x22\x20aria-label=\x22Toggle\x20navigation\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22navbar-toggler-icon\x22></span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22collapse\x20navbar-collapse\x22\x20style=\x22padding-right:\x200px;\x20text-align:\x20right;\x22\x20id=\x22navbarSupportedContent\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul\x20class=\x22navbar-nav\x20mr-auto\x20align-items-center\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20class=\x22nav-item\x20active\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20id=\x22text\x22\x20class=\x22nav-link\x22\x20href=\x22pacientes.html\x22>Pacientes<span\x20class=\x22sr-only\x22></span></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','recetado','innerHTML','\x20<a\x20class=\x22btn-flotante\x22\x20href=\x22addMedicamento.html\x22><button\x20id=\x22redondo\x22\x20data-toggle=\x22tooltip\x22\x20data-placement=\x22bottom\x22\x20title=\x22Agregar\x20Medicamento\x22\x20class=\x22btn\x20text-white\x22><h3>+</h3></button></a>','692326mJdUmr','</div>\x20','<p><strong>Fecha\x20inicio:\x20</strong></p>\x20','idFormulaMedicamento','<p><strong>Fecha\x20Finalización:\x20</strong></p>\x20','<p\x20class=\x22descripcion\x22\x20id=\x22descripcion\x22>','783884tMMdmJ','<button\x20type=\x22button\x22\x20class=\x22btn-close\x22\x20data-bs-dismiss=\x22modal\x22\x20aria-label=\x22Close\x22></button>','<p\x20class=\x22concentracion\x22\x20id=\x22concentracion\x22>','<button\x20type=\x22submit\x22\x20onclick=\x22eliminarMedicamento(','<div\x20class=\x22modal-header\x22>','<li\x20class=\x22nav-item\x20active\x22><a\x20id=\x22text\x22\x20class=\x22nav-link\x22\x20href=\x22administrador.html\x22>Profesionales<span\x20class=\x22sr-only\x22></span></a></li>','1275605lYHsnR','<p><strong>Tomas:</strong></p>','<p\x20class=\x22fecha_fin\x22\x20id=\x22fecha_fin\x22>','nombre',')\x22\x20data-toggle=\x22tooltip\x22\x20data-placement=\x22bottom\x22\x20title=\x22Eliminar\x20Medicamento\x22\x20class=\x22btn\x20btn-danger\x22>Eliminar</button>','slice','<div\x20class=\x22descrp-med\x22>','<p\x20class=\x22fecha_inicio\x22\x20id=\x22fecha_inicio\x22>','<p><strong>Concentración:</strong></p>','9gvoxwe','10461663hZGaTE','tomas','</div>','\x22\x20class=\x22btn-editar\x22><img\x20src=\x22../img/editaraler.png\x22\x20alt=\x22Editar\x20Medicamento\x22\x20class=\x22imagen-crecible-iconos\x22></a>'];_0x4330=function(){return _0x15d38d;};return _0x4330();}