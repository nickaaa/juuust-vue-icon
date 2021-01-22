(function(t){function e(e){for(var l,o,s=e[0],i=e[1],u=e[2],h=0,d=[];h<s.length;h++)o=s[h],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(l in i)Object.prototype.hasOwnProperty.call(i,l)&&(t[l]=i[l]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],l=!0,s=1;s<r.length;s++){var i=r[s];0!==n[i]&&(l=!1)}l&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var l={},n={app:0},a=[];function o(e){if(l[e])return l[e].exports;var r=l[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=l,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)o.d(r,l,function(e){return t[e]}.bind(null,l));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/juuust-vue-icon/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=i;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var l=r("85ec"),n=r.n(l);n.a},"56d7":function(t,e,r){"use strict";r.r(e);var l={};r.r(l),r.d(l,"IconDialpad",(function(){return y})),r.d(l,"IconHomeAlt2",(function(){return j})),r.d(l,"IconDownload",(function(){return H})),r.d(l,"IconUpload",(function(){return D})),r.d(l,"IconBolt",(function(){return q})),r.d(l,"IconBin",(function(){return Z})),r.d(l,"IconCup",(function(){return at})),r.d(l,"IconBox",(function(){return ht})),r.d(l,"IconHourglass",(function(){return ft})),r.d(l,"IconBug",(function(){return yt})),r.d(l,"IconSettings",(function(){return jt})),r.d(l,"IconRefresh",(function(){return Ht})),r.d(l,"IconLightbulb",(function(){return Dt})),r.d(l,"IconHorn",(function(){return qt})),r.d(l,"IconBell",(function(){return Zt})),r.d(l,"IconPlaceholder",(function(){return ae})),r.d(l,"IconPrint",(function(){return he})),r.d(l,"IconSave",(function(){return fe})),r.d(l,"IconAnchor",(function(){return ye})),r.d(l,"IconHash",(function(){return je})),r.d(l,"IconSearch",(function(){return He})),r.d(l,"IconCloud",(function(){return De})),r.d(l,"IconCloudUpload",(function(){return qe})),r.d(l,"IconFlag",(function(){return Ze})),r.d(l,"IconFilter",(function(){return ar})),r.d(l,"IconGlasses",(function(){return hr})),r.d(l,"IconTool",(function(){return fr})),r.d(l,"IconActivity",(function(){return yr})),r.d(l,"IconHome",(function(){return jr})),r.d(l,"IconHomeAlt",(function(){return Hr})),r.d(l,"IconControls",(function(){return Dr})),r.d(l,"IconEye",(function(){return qr}));r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("Banner"),r("ul",{staticClass:"wrapper"},t._l(t.iconNames,(function(e){return r("li",{key:e,staticClass:"item",attrs:{title:e},on:{click:function(r){return t.copyName(e)}}},[r(e,{tag:"component",attrs:{size:36}}),r("div",[t._v(t._s(e))])],1)})),0)],1)},o=[],s=(r("f5df1"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"banner"},[t._v("Juuust Vue Icon")]),r("div",{staticClass:"code"},[r("div",[r("h3",[t._v("Installation")]),r("pre",[r("code",[t._v("npm install juuust-vue-icon --save"),r("br"),t._v("yarn add juuust-vue-icon")])])]),r("div",[r("h3",[t._v("Usage")]),r("pre",[r("code",[t._v("import { IconHome } from 'juuust-vue-icon'"),r("br"),t._v('<IconHome :size="36" color="#009C22" >')])])])])])}],u={name:"Banner"},c=u,h=(r("f230"),r("2877")),d=Object(h["a"])(c,s,i,!1,null,null,null),p=d.exports,m={name:"App",components:{Banner:p},data:function(){return{iconNames:this.ICON_NAMES}},methods:{copyName:function(t){var e=document.createElement("input");e.setAttribute("readonly","readonly"),e.setAttribute("value",t),document.body.appendChild(e),e.setSelectionRange(0,9999),e.select(),document.execCommand("copy")&&document.execCommand("copy"),document.body.removeChild(e),this.$message.success("复制成功")}}},v=m,z=(r("034f"),Object(h["a"])(v,a,o,!1,null,null,null)),f=z.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("circle",{attrs:{cx:"7",cy:"5",r:"1"}}),r("circle",{attrs:{cx:"12",cy:"5",r:"1"}}),r("circle",{attrs:{cx:"17",cy:"5",r:"1"}}),r("circle",{attrs:{cx:"7",cy:"10",r:"1"}}),r("circle",{attrs:{cx:"12",cy:"10",r:"1"}}),r("circle",{attrs:{cx:"17",cy:"10",r:"1"}}),r("circle",{attrs:{cx:"7",cy:"15",r:"1"}}),r("circle",{attrs:{cx:"12",cy:"15",r:"1"}}),r("circle",{attrs:{cx:"12",cy:"20",r:"1"}}),r("circle",{attrs:{cx:"17",cy:"15",r:"1"}})])},w=[],x=(r("a9e3"),{name:"IconDialpad",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}}),_=x,M=Object(h["a"])(_,g,w,!1,null,null,null),y=M.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{d:"M2 12l3-2.7M22 12l-3-2.7m0 0L12 3 5 9.3m14 0V21H5V9.3"}})])},I=[],$={name:"IconHomeAlt2",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},C=$,S=Object(h["a"])(C,b,I,!1,null,null,null),j=S.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{d:"M12 3v13"}}),r("path",{attrs:{d:"M7 12l5 5 5-5"}}),r("path",{attrs:{d:"M20 21H4"}})])},B=[],A={name:"IconDownload",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},E=A,N=Object(h["a"])(E,O,B,!1,null,null,null),H=N.exports,V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{d:"M12 17V4"}}),r("path",{attrs:{d:"M7 8l5-5 5 5"}}),r("path",{attrs:{d:"M20 21H4"}})])},L=[],P={name:"IconUpload",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},k=P,U=Object(h["a"])(k,V,L,!1,null,null,null),D=U.exports,F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{"clip-rule":"evenodd",d:"M6.183 14.003c-.218 0-.297-.15-.178-.336l6.78-10.545c.118-.186.215-.158.215.072V9.59c0 .225.183.408.393.408h4.021c.217 0 .297.15.178.336l-6.78 10.545c-.119.186-.215.158-.215-.072V14.41a.405.405 0 00-.394-.408h-4.02z"}})])},T=[],J={name:"IconBolt",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},R=J,G=Object(h["a"])(R,F,T,!1,null,null,null),q=G.exports,K=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{d:"M19 6H5"}}),r("path",{attrs:{d:"M14 5h-4"}}),r("path",{attrs:{d:"M6 10v11h12V10"}})])},Q=[],W={name:"IconBin",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},X=W,Y=Object(h["a"])(X,K,Q,!1,null,null,null),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{"clip-rule":"evenodd",d:"M6 2v9a6 6 0 006 6v0a6 6 0 006-6V2H6z"}}),r("path",{attrs:{d:"M7 21h10"}}),r("path",{attrs:{d:"M12 17v4"}}),r("path",{attrs:{"clip-rule":"evenodd",d:"M6 5H5a3 3 0 00-3 3v0a3 3 0 003 3h1V5z"}}),r("path",{attrs:{"clip-rule":"evenodd",d:"M18 11h1a3 3 0 003-3v0a3 3 0 00-3-3h-1v6z"}})])},et=[],rt={name:"IconCup",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},lt=rt,nt=Object(h["a"])(lt,tt,et,!1,null,null,null),at=nt.exports,ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{"clip-rule":"evenodd",d:"M12 2l9 5v10l-9 5-9-5V7l9-5z"}}),r("path",{attrs:{d:"M3 7l9 5 9-5"}}),r("path",{attrs:{d:"M12 12v10"}})])},st=[],it={name:"IconBox",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},ut=it,ct=Object(h["a"])(ut,ot,st,!1,null,null,null),ht=ct.exports,dt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("mask",{attrs:{id:"a"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M17.765 5a3 3 0 00-3-3h-5.53a3 3 0 00-3 3v2.407a2 2 0 00.586 1.414L10 12l-3.179 3.179a2 2 0 00-.586 1.414V19a3 3 0 003 3h5.53a3 3 0 003-3v-2.407a2 2 0 00-.586-1.414L14 12l3.179-3.179a2 2 0 00.586-1.414V5z"}})]),r("path",{attrs:{d:"M6.821 8.821l.707-.707-.707.707zM10 12l.707.707a1 1 0 000-1.414L10 12zm-3.179 3.179l-.707-.707.707.707zM14 12l-.707-.707a1 1 0 000 1.414L14 12zm3.179-3.179l-.707-.707.707.707zM14.765 3a2 2 0 012 2h2a4 4 0 00-4-4v2zm-5.53 0h5.53V1h-5.53v2zm-2 2a2 2 0 012-2V1a4 4 0 00-4 4h2zm0 2.407V5h-2v2.407h2zm.293.707a1 1 0 01-.293-.707h-2a3 3 0 00.879 2.121l1.414-1.414zm3.18 3.179l-3.18-3.179-1.414 1.414 3.179 3.18 1.414-1.415zm-3.18 4.593l3.18-3.179-1.415-1.414-3.179 3.179 1.414 1.414zm-.293.707a1 1 0 01.293-.707l-1.414-1.414a3 3 0 00-.879 2.121h2zm0 2.407v-2.407h-2V19h2zm2 2a2 2 0 01-2-2h-2a4 4 0 004 4v-2zm5.53 0h-5.53v2h5.53v-2zm2-2a2 2 0 01-2 2v2a4 4 0 004-4h-2zm0-2.407V19h2v-2.407h-2zm-.293-.707a1 1 0 01.293.707h2a3 3 0 00-.879-2.121l-1.414 1.414zm-3.18-3.179l3.18 3.179 1.414-1.414-3.179-3.18-1.414 1.415zm3.18-4.593l-3.18 3.179 1.415 1.414 3.179-3.179-1.414-1.414zm.293-.707a1 1 0 01-.293.707l1.414 1.414a3 3 0 00.879-2.121h-2zm0-2.407v2.407h2V5h-2z",mask:"url(#a)"}})])},pt=[],mt={name:"IconHourglass",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},vt=mt,zt=Object(h["a"])(vt,dt,pt,!1,null,null,null),ft=zt.exports,gt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{d:"M15 7h-.5a.5.5 0 00.5.5V7zm1.147 11.097l.287.41-.287-.41zM12 21l-.287.41a.5.5 0 00.574 0L12 21zm-4.147-2.903l.287-.41-.287.41zM9 7v.5a.5.5 0 00.5-.5H9zm6 .5A1.5 1.5 0 0116.5 9h1A2.5 2.5 0 0015 6.5v1zM16.5 9v7.459h1V9h-1zm0 7.459a1.5 1.5 0 01-.64 1.229l.574.819a2.5 2.5 0 001.066-2.048h-1zm-.64 1.229l-4.147 2.902.574.82 4.147-2.903-.574-.82zm-3.573 2.902L8.14 17.688l-.574.819 4.147 2.903.574-.82zM8.14 17.688a1.5 1.5 0 01-.64-1.23h-1a2.5 2.5 0 001.066 2.049l.574-.82zm-.64-1.23V9h-1v7.459h1zM7.5 9A1.5 1.5 0 019 7.5v-1A2.5 2.5 0 006.5 9h1zm2-2A2.5 2.5 0 0112 4.5v-1A3.5 3.5 0 008.5 7h1zM12 4.5A2.5 2.5 0 0114.5 7h1A3.5 3.5 0 0012 3.5v1z"}}),r("path",{attrs:{d:"M4 13h3"}}),r("path",{attrs:{d:"M3 7l2 2h2"}}),r("path",{attrs:{d:"M21 7l-2 2h-2"}}),r("path",{attrs:{d:"M3 19l2-2h2"}}),r("path",{attrs:{d:"M17 17h2l2 2v0"}}),r("path",{attrs:{d:"M17 13h3"}})])},wt=[],xt={name:"IconBug",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},_t=xt,Mt=Object(h["a"])(_t,gt,wt,!1,null,null,null),yt=Mt.exports,bt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{d:"M9.544 4.368l-.474-.159.474.159zM9.13 5.614l.205.456.2-.09.069-.208-.474-.158zm-1.222.707l-.1.49.215.044.178-.129-.293-.405zm-1.289-.264l-.1.49.1-.49zm-2.133.96l.433.25-.433-.25zm-.558.967l.433.25-.433-.25zm.235 2.327l.374-.332-.374.332zm.873.984l.498.05.021-.218-.145-.164-.374.332zm0 1.41l.374.332.145-.164-.021-.218-.498.05zm-.873.984l-.374-.331.374.331zm-.235 2.327l-.433.25.433-.25zm.558.968l.433-.25-.433.25zm2.133.96l.1.489-.1-.49zm1.289-.265l.293-.405-.178-.129-.215.044.1.49zm1.222.707l.474-.158-.07-.208-.2-.09-.204.456zm.415 1.247l-.474.158.474-.159zm4.912 0l-.474-.159.474.159zm.415-1.247l-.205-.456-.2.09-.069.208.474.158zm1.222-.707l.1-.49-.215-.044-.178.129.293.405zm1.289.264l-.1.49.1-.49zm2.133-.96l-.433-.25.433.25zm.558-.967l.433.25-.433-.25zm-.235-2.327l-.374.332.374-.332zm-.873-.984l-.498-.05-.021.218.145.164.374-.332zm0-1.41l-.374-.332-.145.164.021.218.498-.05zm.873-.984l.374.331-.374-.331zm.235-2.327l-.433.25.433-.25zm-.558-.968l.433-.25-.433.25zm-2.133-.96l-.1-.489.1.49zm-1.289.265l-.293.405.178.129.215-.044-.1-.49zm-1.222-.707l-.474.158.07.208.2.09.204-.456zm-.415-1.246l-.474.158.474-.158zm-4.438.158A1.5 1.5 0 0111.441 3.5v-1A2.5 2.5 0 009.07 4.21l.948.316zm-.415 1.246l.415-1.246-.948-.317-.416 1.247.949.316zM8.2 6.726a6.492 6.492 0 011.134-.656l-.41-.912a7.493 7.493 0 00-1.31.757l.586.811zm-1.682-.18l1.289.265.2-.98-1.289-.264-.2.98zm-1.6.72a1.5 1.5 0 011.6-.72l.2-.979a2.5 2.5 0 00-2.666 1.2l.866.5zm-.558.968l.558-.968-.866-.5-.558.968.866.5zm.176 1.745a1.5 1.5 0 01-.176-1.745l-.866-.5a2.5 2.5 0 00.294 2.908l.748-.663zm.873.984l-.873-.984-.748.663.873.985.748-.664zM5.5 12c0-.221.011-.44.033-.655l-.995-.1c-.025.249-.038.5-.038.755h1zm.033.655A6.584 6.584 0 015.5 12h-1c0 .255.013.506.038.755l.995-.1zm-.997 1.366l.873-.984-.748-.664-.873.985.748.663zm-.176 1.745a1.5 1.5 0 01.176-1.745l-.748-.663a2.5 2.5 0 00-.294 2.908l.866-.5zm.558.968l-.558-.968-.866.5.558.968.866-.5zm1.6.72a1.5 1.5 0 01-1.6-.72l-.866.5a2.5 2.5 0 002.666 1.199l-.2-.98zm1.289-.265l-1.29.264.201.98 1.29-.264-.201-.98zm1.527.741a6.493 6.493 0 01-1.134-.656l-.586.81c.408.295.846.55 1.31.758l.41-.912zm.684 1.544l-.415-1.246-.949.316.416 1.247.948-.317zm1.423 1.026a1.5 1.5 0 01-1.423-1.026l-.948.317A2.5 2.5 0 0011.44 21.5v-1zm1.117 0h-1.117v1h1.117v-1zm1.424-1.026a1.5 1.5 0 01-1.423 1.026v1a2.5 2.5 0 002.371-1.71l-.948-.316zm.415-1.246l-.415 1.246.948.317.416-1.247-.949-.316zm1.403-.954a6.499 6.499 0 01-1.134.656l.41.912a7.495 7.495 0 001.31-.757l-.586-.811zm1.682.18l-1.289-.265-.2.98 1.289.264.2-.98zm1.6-.72a1.5 1.5 0 01-1.6.72l-.2.979a2.5 2.5 0 002.666-1.2l-.866-.5zm.558-.968l-.558.968.866.5.558-.968-.866-.5zm-.176-1.745a1.5 1.5 0 01.177 1.745l.866.5a2.5 2.5 0 00-.295-2.908l-.748.663zm-.873-.984l.873.984.748-.663-.873-.985-.748.664zM18.5 12c0 .221-.011.44-.033.655l.995.1c.025-.249.038-.5.038-.755h-1zm-.033-.655c.022.215.033.434.033.655h1c0-.255-.013-.506-.038-.755l-.995.1zm.997-1.366l-.873.984.748.664.873-.985-.748-.663zm.177-1.745a1.5 1.5 0 01-.177 1.745l.748.663a2.5 2.5 0 00.294-2.908l-.866.5zm-.559-.968l.558.968.866-.5-.558-.968-.866.5zm-1.6-.72a1.5 1.5 0 011.6.72l.866-.5a2.5 2.5 0 00-2.666-1.199l.2.98zm-1.289.265l1.29-.264-.201-.98-1.29.264.201.98zm-1.527-.741c.401.18.781.401 1.134.656l.586-.81a7.492 7.492 0 00-1.31-.758l-.41.912zm-.684-1.544l.415 1.246.949-.316-.416-1.247-.948.317zM12.559 3.5a1.5 1.5 0 011.423 1.026l.948-.317A2.5 2.5 0 0012.56 2.5v1zm-1.117 0h1.117v-1h-1.117v1z"}}),r("path",{attrs:{"clip-rule":"evenodd",d:"M12 13a1 1 0 100-2 1 1 0 000 2z"}})])},It=[],$t={name:"IconSettings",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},Ct=$t,St=Object(h["a"])(Ct,bt,It,!1,null,null,null),jt=St.exports,Ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{d:"M22 12l-3 3-3-3"}}),r("path",{attrs:{d:"M11 20a8 8 0 118-8v2"}})])},Bt=[],At={name:"IconRefresh",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},Et=At,Nt=Object(h["a"])(Et,Ot,Bt,!1,null,null,null),Ht=Nt.exports,Vt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{"clip-rule":"evenodd",d:"M16 12c-1 1-1 3-1 4s-1 1-1 1h-4s-1 0-1-1 0-3-1-4c-2.326-2.326-2.586-5.9-.243-8.243a6 6 0 018.486 0C18.586 6.101 18.407 9.593 16 12z"}}),r("path",{attrs:{d:"M10 21h4"}})])},Lt=[],Pt={name:"IconLightbulb",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},kt=Pt,Ut=Object(h["a"])(kt,Vt,Lt,!1,null,null,null),Dt=Ut.exports,Ft=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{"clip-rule":"evenodd",d:"M4 11.5A2.5 2.5 0 016.499 9H12c3 0 7-5 7-5v15s-4-5-7-5H6.499A2.5 2.5 0 014 11.5v0z"}}),r("path",{attrs:{"clip-rule":"evenodd",d:"M7 14l2 6h4l-2-6H7z"}}),r("path",{attrs:{d:"M11 9v5"}})])},Tt=[],Jt={name:"IconHorn",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},Rt=Jt,Gt=Object(h["a"])(Rt,Ft,Tt,!1,null,null,null),qt=Gt.exports,Kt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{"clip-rule":"evenodd",d:"M12 3a6 6 0 016 6v5c0 3 2 4 2 4H4s2-1 2-4V9a6 6 0 016-6v0z"}}),r("path",{attrs:{d:"M10 18a2 2 0 104 0"}})])},Qt=[],Wt={name:"IconBell",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},Xt=Wt,Yt=Object(h["a"])(Xt,Kt,Qt,!1,null,null,null),Zt=Yt.exports,te=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("rect",{attrs:{x:"3",y:"3",width:"18",height:"18",rx:"1"}}),r("path",{attrs:{"clip-rule":"evenodd",d:"M20 20L4 4l16 16z"}}),r("path",{attrs:{"clip-rule":"evenodd",d:"M20 4L4 20 20 4z"}})])},ee=[],re={name:"IconPlaceholder",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},le=re,ne=Object(h["a"])(le,te,ee,!1,null,null,null),ae=ne.exports,oe=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("rect",{attrs:{x:"17",y:"14",width:"7",height:"10",transform:"rotate(90 17 14)"}}),r("path",{attrs:{d:"M7 18H3V9h18v9h-4"}}),r("path",{attrs:{d:"M7 9V3h10v6"}})])},se=[],ie={name:"IconPrint",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},ue=ie,ce=Object(h["a"])(ue,oe,se,!1,null,null,null),he=ce.exports,de=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{"clip-rule":"evenodd",d:"M16.586 3a1 1 0 01.707.293L21 7v13a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h12.586z"}}),r("rect",{attrs:{x:"7",y:"13",width:"10",height:"8"}}),r("rect",{attrs:{x:"8",y:"3",width:"8",height:"5"}})])},pe=[],me={name:"IconSave",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},ve=me,ze=Object(h["a"])(ve,de,pe,!1,null,null,null),fe=ze.exports,ge=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{d:"M12 20V7"}}),r("path",{attrs:{d:"M9 10h6"}}),r("path",{attrs:{"clip-rule":"evenodd",d:"M12 7a2 2 0 100-4 2 2 0 000 4z"}}),r("path",{attrs:{d:"M20 14c-1.333 4-4 6-8 6s-6.667-2-8-6v0"}})])},we=[],xe={name:"IconAnchor",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},_e=xe,Me=Object(h["a"])(_e,ge,we,!1,null,null,null),ye=Me.exports,be=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{d:"M11 3L5 21"}}),r("path",{attrs:{d:"M19 3l-6 18"}}),r("path",{attrs:{d:"M3 16h16"}}),r("path",{attrs:{d:"M5 8h16"}})])},Ie=[],$e={name:"IconHash",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},Ce=$e,Se=Object(h["a"])(Ce,be,Ie,!1,null,null,null),je=Se.exports,Oe=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{d:"M14.412 14.412L20 20"}}),r("path",{attrs:{"clip-rule":"evenodd",d:"M10 16a6 6 0 100-12 6 6 0 000 12z"}})])},Be=[],Ae={name:"IconSearch",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},Ee=Ae,Ne=Object(h["a"])(Ee,Oe,Be,!1,null,null,null),He=Ne.exports,Ve=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{d:"M18.921 11.025l-.493.08.06.372.374.044.06-.496zm-11.21-1.86l-.134.481.385.108.19-.353-.441-.236zm11.704 1.78A6.502 6.502 0 0013 5.5v1c2.733 0 5 1.994 5.428 4.606l.987-.162zM22.5 14.5a4 4 0 00-3.52-3.971l-.118.992A3 3 0 0121.5 14.5h1zm-4 4a4 4 0 004-4h-1a3 3 0 01-3 3v1zm-5.5 0h5.5v-1H13v1zm-6.5 0H13v-1H6.5v1zm-5-5a5 5 0 005 5v-1a4 4 0 01-4-4h-1zm5-5a5 5 0 00-5 5h1a4 4 0 014-4v-1zm1.345.183A5.004 5.004 0 006.5 8.5v1c.374 0 .735.051 1.077.146l.268-.963zM13 5.5a6.499 6.499 0 00-5.73 3.428l.881.473A5.499 5.499 0 0113 6.5v-1z"}})])},Le=[],Pe={name:"IconCloud",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},ke=Pe,Ue=Object(h["a"])(ke,Ve,Le,!1,null,null,null),De=Ue.exports,Fe=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{d:"M18.921 11.025l-.493.08.06.372.374.044.06-.496zm-11.21-1.86l-.134.481.385.108.19-.353-.441-.236zm11.704 1.78A6.502 6.502 0 0013 5.5v1c2.733 0 5 1.994 5.428 4.606l.987-.162zM22.5 14.5a4 4 0 00-3.52-3.971l-.118.992A3 3 0 0121.5 14.5h1zm-4 4a4 4 0 004-4h-1a3 3 0 01-3 3v1zm-5.5 0h5.5v-1H13v1zm-6.5 0H13v-1H6.5v1zm-5-5a5 5 0 005 5v-1a4 4 0 01-4-4h-1zm5-5a5 5 0 00-5 5h1a4 4 0 014-4v-1zm1.345.183A5.004 5.004 0 006.5 8.5v1c.374 0 .735.051 1.077.146l.268-.963zM13 5.5a6.499 6.499 0 00-5.73 3.428l.881.473A5.499 5.499 0 0113 6.5v-1z"}}),r("path",{attrs:{d:"M12 11v4"}}),r("path",{attrs:{d:"M14 12l-2-2-2 2"}})])},Te=[],Je={name:"IconCloudUpload",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},Re=Je,Ge=Object(h["a"])(Re,Fe,Te,!1,null,null,null),qe=Ge.exports,Ke=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{d:"M5 5v15"}}),r("path",{attrs:{d:"M5 6s1.75-2 4.375-2S14 6 16 6s3-1 3-1"}}),r("path",{attrs:{d:"M5 15s1.75-2 4.375-2S14 15 16 15s3-1 3-1V5"}})])},Qe=[],We={name:"IconFlag",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},Xe=We,Ye=Object(h["a"])(Xe,Ke,Qe,!1,null,null,null),Ze=Ye.exports,tr=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{d:"M10 12.261h.5a.5.5 0 00-.117-.321L10 12.26zM4.41 5.615l.383-.321-.382.321zm15.236 0l-.383-.321.383.321zM14 12.33l-.383-.322a.5.5 0 00-.117.322h.5zM14 17l.3.4a.5.5 0 00.2-.4H14zm-4 3h-.5a.5.5 0 00.8.4L10 20zm.383-8.06l-5.59-6.646-.765.643 5.59 6.646.765-.643zm-5.59-6.646a.5.5 0 01.383-.822v-1c-1.275 0-1.969 1.49-1.148 2.465l.765-.643zm.383-.822h13.705v-1H5.176v1zm13.705 0a.5.5 0 01.382.822l.766.643c.82-.975.127-2.465-1.148-2.465v1zm.382.822l-5.646 6.713.766.644 5.646-6.714-.766-.643zM13.5 12.329V17h1v-4.671h-1zm.2 4.271l-4 3 .6.8 4-3-.6-.8zM10.5 20v-7.739h-1V20h1z"}})])},er=[],rr={name:"IconFilter",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},lr=rr,nr=Object(h["a"])(lr,tr,er,!1,null,null,null),ar=nr.exports,or=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{d:"M14 12s-.895-1-2-1-2 1-2 1"}}),r("path",{attrs:{d:"M21 12h1"}}),r("path",{attrs:{d:"M2 12h1"}}),r("path",{attrs:{"clip-rule":"evenodd",d:"M7 15a3 3 0 100-6 3 3 0 000 6z"}}),r("path",{attrs:{"clip-rule":"evenodd",d:"M17 15a3 3 0 100-6 3 3 0 000 6z"}})])},sr=[],ir={name:"IconGlasses",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},ur=ir,cr=Object(h["a"])(ur,or,sr,!1,null,null,null),hr=cr.exports,dr=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{d:"M13.47 10.47l-.456-.206a.5.5 0 00.102.56l.354-.354zM5.413 2.585l-.216-.451a.5.5 0 00-.137.804l.353-.353zM9.778 6.95l.354.353a.5.5 0 000-.707l-.354.354zM6.95 9.778l-.354.354a.5.5 0 00.707 0l-.353-.354zM2.585 5.413l.353-.353a.5.5 0 00-.804.137l.45.216zm7.158 8.33l.354-.354a.5.5 0 00-.5-.125l.146.479zm7.343 7.343l.353-.354-.353.354zM13.5 8c0 .808-.174 1.574-.486 2.264l.911.412c.37-.817.575-1.723.575-2.676h-1zM8 2.5A5.5 5.5 0 0113.5 8h1A6.5 6.5 0 008 1.5v1zm-2.371.536A5.476 5.476 0 018 2.5v-1a6.476 6.476 0 00-2.803.634l.432.902zm4.503 3.56L5.767 2.231l-.707.707 4.365 4.365.707-.707zm-2.829 3.536l2.829-2.829-.707-.707-2.829 2.829.707.707zM2.231 5.767l4.365 4.365.707-.707L2.938 5.06l-.707.707zM2.5 8c0-.85.192-1.654.536-2.371l-.902-.432C1.727 6.047 1.5 6.997 1.5 8h1zM8 13.5A5.5 5.5 0 012.5 8h-1A6.5 6.5 0 008 14.5v-1zm1.598-.236A5.5 5.5 0 018 13.5v1c.656 0 1.29-.097 1.888-.279l-.29-.957zm7.841 7.468l-7.342-7.343-.708.708 7.343 7.342.707-.707zm2.122 0a1.5 1.5 0 01-2.122 0l-.707.707a2.5 2.5 0 003.536 0l-.707-.707zm.671-.671l-.671.671.707.707.671-.671-.707-.707zm0-2.122a1.5 1.5 0 010 2.122l.707.707a2.5 2.5 0 000-3.536l-.707.707zm-7.116-7.116l7.116 7.116.707-.707-7.116-7.116-.707.707z"}})])},pr=[],mr={name:"IconTool",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},vr=mr,zr=Object(h["a"])(vr,dr,pr,!1,null,null,null),fr=zr.exports,gr=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{d:"M21 14h-3l-3-7-5 10-3-6-2 3H3"}})])},wr=[],xr={name:"IconActivity",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},_r=xr,Mr=Object(h["a"])(_r,gr,wr,!1,null,null,null),yr=Mr.exports,br=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{"clip-rule":"evenodd",d:"M3 10.182v10S3 22 4.8 22h14.4s1.8 0 1.8-1.818v-10L12 2l-9 8.182z"}})])},Ir=[],$r={name:"IconHome",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},Cr=$r,Sr=Object(h["a"])(Cr,br,Ir,!1,null,null,null),jr=Sr.exports,Or=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{d:"M3 22.182v-12L12 2l9 8.182v12H3z"}}),r("rect",{attrs:{x:"9",y:"14",width:"6",height:"8",rx:"1"}})])},Br=[],Ar={name:"IconHomeAlt",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},Er=Ar,Nr=Object(h["a"])(Er,Or,Br,!1,null,null,null),Hr=Nr.exports,Vr=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{d:"M17 6v12"}}),r("path",{attrs:{d:"M12 6v12"}}),r("path",{attrs:{d:"M7 6v12"}}),r("path",{attrs:{d:"M5 8h4"}}),r("path",{attrs:{d:"M10 16h4"}}),r("path",{attrs:{d:"M15 12h4"}})])},Lr=[],Pr={name:"IconControls",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},kr=Pr,Ur=Object(h["a"])(kr,Vr,Lr,!1,null,null,null),Dr=Ur.exports,Fr=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24","aria-hidden":"true",fill:t.color}},t.$listeners),[r("path",{attrs:{d:"M22 12s-3 6-10 6-10-6-10-6 3-6 10-6 10 6 10 6z"}}),r("circle",{attrs:{cx:"12",cy:"12",r:"3"}})])},Tr=[],Jr={name:"IconEye",props:{size:{type:Number,default:16},color:{type:String,default:"currentColor"}}},Rr=Jr,Gr=Object(h["a"])(Rr,Fr,Tr,!1,null,null,null),qr=Gr.exports,Kr=r("d719"),Qr=r.n(Kr),Wr=(r("e4db"),[]);if("undefined"!==typeof n["default"])for(var Xr in l)n["default"].component(Xr,l[Xr]),Wr.push(Xr);n["default"].use(Qr.a),n["default"].prototype.ICON_NAMES=Wr,new n["default"]({render:function(t){return t(f)}}).$mount("#app")},"7fdb":function(t,e,r){},"85ec":function(t,e,r){},f230:function(t,e,r){"use strict";var l=r("7fdb"),n=r.n(l);n.a}});
//# sourceMappingURL=app.673c5853.js.map