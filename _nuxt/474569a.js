(window.webpackJsonp=window.webpackJsonp||[]).push([[14,107],{780:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},781:function(e,t,n){var r=n(44),c=n(23),l="["+n(780)+"]",o=RegExp("^"+l+l+"*"),f=RegExp(l+l+"*$"),h=function(e){return function(t){var n=c(r(t));return 1&e&&(n=n.replace(o,"")),2&e&&(n=n.replace(f,"")),n}};e.exports={start:h(1),end:h(2),trim:h(3)}},782:function(e,t,n){var content=n(788);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(58).default)("7f27037d",content,!0,{sourceMap:!1})},783:function(e,t,n){"use strict";var r=n(27),c=n(16),l=n(134),o=n(38),f=n(32),h=n(94),d=n(244),m=n(133),v=n(397),N=n(15),I=n(84),_=n(110).f,E=n(76).f,y=n(35).f,w=n(781).trim,x="Number",A=c.Number,C=A.prototype,k=h(I(C))==x,S=function(e){if(m(e))throw TypeError("Cannot convert a Symbol value to a number");var t,n,r,c,l,o,f,code,h=v(e,"number");if("string"==typeof h&&h.length>2)if(43===(t=(h=w(h)).charCodeAt(0))||45===t){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(h.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+h}for(o=(l=h.slice(2)).length,f=0;f<o;f++)if((code=l.charCodeAt(f))<48||code>c)return NaN;return parseInt(l,r)}return+h};if(l(x,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var D,T=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof T&&(k?N((function(){C.valueOf.call(n)})):h(n)!=x)?d(new A(S(t)),n,T):S(t)},F=r?_(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;F.length>M;M++)f(A,D=F[M])&&!f(T,D)&&y(T,D,E(A,D));T.prototype=C,C.constructor=T,o(c,x,T)}},784:function(e,t,n){"use strict";n.r(t);n(783),n(52),n(93),n(785),n(243),n(67),n(51),n(169);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),e={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var t=s.length-this.numDecimals;e.a=s.slice(0,t),e.b=s.slice(t)}else for(e.b=s;this.numDecimals>e.b.length;)e.b="0"+e.b;else e.a=s;if(e.b&&!this.keep&&(e.b=e.b.replace(new RegExp("0+$"),"")),this.padding)if(e.b||(e.b=""),this.padding>e.b.length)for(;this.padding>e.b.length;)e.b=e.b+"0";else this.padding<e.b.length&&(e.b=e.b.slice(0,this.padding));return e},display:function(){for(var e={a:[],b:[]},a=this.step1.a;3<a.length;)e.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&e.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)e.b.push(b.slice(0,3)),b=b.slice(3);b.length&&e.b.push(b)}return 0===e.a.length&&(e.a=["0"]),e.a=e.a.join(","),e}}},c=(n(787),n(5)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[e._v(e._s(e.display.a))]),e.display.b.length?n("span",{staticClass:"cbn-dot"},[e._v(".")]):e._e(),e._l(e.display.b,(function(t){return n("span",{staticClass:"cbn-decimal"},[e._v(e._s(t))])}))],2)}),[],!1,null,"77384a03",null);t.default=component.exports},785:function(e,t,n){"use strict";var r=n(9),c=n(781).trim;r({target:"String",proto:!0,forced:n(786)("trim")},{trim:function(){return c(this)}})},786:function(e,t,n){var r=n(15),c=n(780);e.exports=function(e){return r((function(){return!!c[e]()||"​᠎"!="​᠎"[e]()||c[e].name!==e}))}},787:function(e,t,n){"use strict";n(782)},788:function(e,t,n){var r=n(57)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r}}]);