(window.webpackJsonp=window.webpackJsonp||[]).push([[108,16,55,78,104],{1020:function(t,e,n){"use strict";n(996)},1021:function(t,e,n){var r=n(59)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.hdf-stat div dt[data-v-0f70c56c]{\n  --tw-text-opacity:1;\n  color:rgba(237, 233, 254, var(--tw-text-opacity))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},1070:function(t,e,n){"use strict";n.r(e);var r=n(76),l={name:"STaxFarm",computed:{explorer:function(){return r.a}}},o=(n(1020),n(5)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-section-fee"},[n("div",{staticClass:"text-center"},[n("span",{staticClass:"span-icon bg-violet-50 text-violet-700"},[n("HeroIconOutlineCurrencyDollar",{staticClass:"h-8 w-8"})],1)]),t._v(" "),n("LAutoWidth",{staticClass:"auto-layout"},[n("main",[n("div",{staticClass:"header1"},[n("h2",{staticClass:"text-violet-400"},[t._v("\n            "+t._s(t.$t("sTaxFarm.title"))+"\n          ")]),t._v(" "),n("p",[t._v("\n            "+t._s(t.$t("sTaxFarm.text"))+"\n          ")])]),t._v(" "),n("div",{staticClass:"body2 to-violet-900 from-violet-900 text-violet-300"},[n("h3",[t._v("\n            "+t._s(t.$t("sTax.forEachTransaction"))+"\n          ")]),t._v(" "),n("p",[t._v("\n            "+t._s(t.$t("sTax.take"))+"\n            "),t.$store.state.bsc.takerTax.tax>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.takerTax.tax)+"%\n              "+t._s(t.$t("sTax.fromTaker"))+"\n            ")]):t._e(),t._v(" "),t.$store.state.bsc.makerTax.tax>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.makerTax.tax)+"%\n              "+t._s(t.$t("sTax.fromMaker"))+"\n            ")]):t._e(),t._v(" "),t.$store.state.bsc.whaleTax.tax>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.whaleTax.tax)+"%\n              "+t._s(t.$t("sTax.fromWhale"))+"\n            ")]):t._e(),t._v("\n            "+t._s(t.$t("sTaxFarm.takeThen__"))+"\n          ")]),t._v(" "),t.$store.state.bsc.supply.tax>"0"?n("div",{staticClass:"mt-5 inline-flex rounded-md shadow"},[n("nuxt-link",{staticClass:"hdf-a-track bg-violet-700 hover:bg-violet-600 space-x-2",attrs:{to:t.localeLocation("/history/farm")}},[n("HeroIconSolidCursorClick",{staticClass:"h-5 w-5"}),t._v(" "),n("span",[t._v("\n                "+t._s(t.$t("sTaxFarm.track__"))+"\n              ")])],1)],1):t._e()])]),t._v(" "),t.$store.state.bsc.supply.totalTax>"0"?n("dl",{staticClass:"hdf-stat xl:max-w-6xl grid grid-cols-1 xl:grid-cols-2"},[n("div",[n("dt",[t._v("\n            "+t._s(t.$t("sTaxFarm.totalTax"))+"\n          ")]),t._v(" "),n("dd",[n("CBN",{attrs:{value:String(t.$store.state.bsc.supply.totalTax),token:!0}})],1)]),t._v(" "),n("div",[n("dt",[t._v("\n            "+t._s(t.$t("sTaxFarm.taxPool"))+"\n          ")]),t._v(" "),n("dd",[n("CBN",{attrs:{value:String(t.$store.state.bsc.supply.tax),token:!0}})],1)])]):t._e()])],1)}),[],!1,null,"0f70c56c",null);e.default=component.exports;installComponents(component,{HeroIconOutlineCurrencyDollar:n(973).default,HeroIconSolidCursorClick:n(829).default,CBN:n(816).default,LAutoWidth:n(149).default})},812:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},813:function(t,e,n){var r=n(13),l=n(50),o=n(26),c=n(812),f=r("".replace),d="["+c+"]",v=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),m=function(t){return function(e){var n=o(l(e));return 1&t&&(n=f(n,v,"")),2&t&&(n=f(n,h,"")),n}};t.exports={start:m(1),end:m(2),trim:m(3)}},814:function(t,e,n){var content=n(821);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("7f27037d",content,!0,{sourceMap:!1})},815:function(t,e,n){"use strict";var r=n(28),l=n(7),o=n(13),c=n(151),f=n(40),d=n(29),v=n(262),h=n(93),m=n(188),_=n(417),x=n(16),C=n(122).f,k=n(77).f,T=n(39).f,w=n(819),y=n(813).trim,$="Number",I=l.Number,N=I.prototype,E=l.TypeError,S=o("".slice),M=o("".charCodeAt),F=function(t){var e=_(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,n,r,l,o,c,f,code,d=_(t,"number");if(m(d))throw E("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=y(d),43===(e=M(d,0))||45===e){if(88===(n=M(d,2))||120===n)return NaN}else if(48===e){switch(M(d,1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+d}for(c=(o=S(d,2)).length,f=0;f<c;f++)if((code=M(o,f))<48||code>l)return NaN;return parseInt(o,r)}return+d};if(c($,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var A,D=function(t){var e=arguments.length<1?0:I(F(t)),n=this;return h(N,n)&&x((function(){w(n)}))?v(Object(e),n,D):e},B=r?C(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;B.length>R;R++)d(I,A=B[R])&&!d(D,A)&&T(D,A,k(I,A));D.prototype=N,N.constructor=D,f(l,$,D)}},816:function(t,e,n){"use strict";n.r(e);n(815),n(49),n(92),n(817),n(261),n(61),n(48),n(189);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},l=(n(820),n(5)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},817:function(t,e,n){"use strict";var r=n(10),l=n(813).trim;r({target:"String",proto:!0,forced:n(818)("trim")},{trim:function(){return l(this)}})},818:function(t,e,n){var r=n(150).PROPER,l=n(16),o=n(812);t.exports=function(t){return l((function(){return!!o[t]()||"​᠎"!=="​᠎"[t]()||r&&o[t].name!==t}))}},819:function(t,e,n){var r=n(13);t.exports=r(1..valueOf)},820:function(t,e,n){"use strict";n(814)},821:function(t,e,n){var r=n(59)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},829:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconSolidCursorClick"},l=n(5),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z","clip-rule":"evenodd"}})])}),[],!1,null,"4c064797",null);e.default=component.exports},973:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconOutlineCurrencyDollar"},l=n(5),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}})])}),[],!1,null,"295946dc",null);e.default=component.exports},996:function(t,e,n){var content=n(1021);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("972e6a7e",content,!0,{sourceMap:!1})}}]);