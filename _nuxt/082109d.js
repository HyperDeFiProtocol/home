(window.webpackJsonp=window.webpackJsonp||[]).push([[31,15,16,104],{1082:function(t,e,n){"use strict";n.r(e);var r=n(76),c={name:"CTableFarm",props:{transactions:{type:Array,required:!0}},computed:{hpLink:function(){return r.a}}},l=n(5),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.transactions.length?n("div",{staticClass:"overflow-x-auto"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"table-history"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.block"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.type"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.address"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.amount"))+"\n          ")])])]),t._v(" "),n("tbody",t._l(t.transactions,(function(e){return n("tr",[n("td",[n("a",{attrs:{target:"_blank",href:t.hpLink.exploreTx(e.txHash)}},[t._v("\n              #"),n("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),e.fromAccount===t.$store.state.bsc.globalAccounts.tax?n("td",{staticClass:"text-emerald-400"},[t._v("\n            "+t._s(t.$t("txTable.harvest"))+"\n          ")]):n("td",[t._v("\n            "+t._s(t.$t("txTable.accumulate"))+"\n          ")]),t._v(" "),e.fromAccount===t.$store.state.bsc.globalAccounts.tax?n("td",{staticClass:"font-mono text-emerald-400"},[n("a",{attrs:{target:"_blank",href:t.hpLink.exploreTx(e.txHash)}},[n("CAddress",{attrs:{value:e.toAccount}})],1)]):n("td",{staticClass:"font-mono"},[n("a",{attrs:{target:"_blank",href:t.hpLink.exploreTx(e.txHash)}},[t._v("\n              "+t._s(e.txHash.slice(0,44))+"..."+t._s(e.txHash.slice(-4))+"\n            ")])]),t._v(" "),n("td",[n("CBN",{attrs:{value:e.amount,token:!0,padding:2}}),t._v("\n            HyperDeFi\n          ")],1)])})),0)])])])]):t._e()}),[],!1,null,"464ed657",null);e.default=component.exports;installComponents(component,{CBN:n(816).default,CAddress:n(824).default})},812:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},813:function(t,e,n){var r=n(13),c=n(50),l=n(26),o=n(812),f=r("".replace),d="["+o+"]",h=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),v=function(t){return function(e){var n=l(c(e));return 1&t&&(n=f(n,h,"")),2&t&&(n=f(n,m,"")),n}};t.exports={start:v(1),end:v(2),trim:v(3)}},814:function(t,e,n){var content=n(821);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("7f27037d",content,!0,{sourceMap:!1})},815:function(t,e,n){"use strict";var r=n(28),c=n(7),l=n(13),o=n(151),f=n(40),d=n(29),h=n(262),m=n(93),v=n(188),_=n(417),x=n(16),y=n(122).f,N=n(77).f,C=n(39).f,k=n(819),A=n(813).trim,T="Number",E=c.Number,$=E.prototype,w=c.TypeError,I=l("".slice),R=l("".charCodeAt),D=function(t){var e=_(t,"number");return"bigint"==typeof e?e:F(e)},F=function(t){var e,n,r,c,l,o,f,code,d=_(t,"number");if(v(d))throw w("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=A(d),43===(e=R(d,0))||45===e){if(88===(n=R(d,2))||120===n)return NaN}else if(48===e){switch(R(d,1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+d}for(o=(l=I(d,2)).length,f=0;f<o;f++)if((code=R(l,f))<48||code>c)return NaN;return parseInt(l,r)}return+d};if(o(T,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var O,S=function(t){var e=arguments.length<1?0:E(D(t)),n=this;return m($,n)&&x((function(){k(n)}))?h(Object(e),n,S):e},B=r?y(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;B.length>j;j++)d(E,O=B[j])&&!d(S,O)&&C(S,O,N(E,O));S.prototype=$,$.constructor=S,f(c,T,S)}},816:function(t,e,n){"use strict";n.r(e);n(815),n(49),n(92),n(817),n(261),n(61),n(48),n(189);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},c=(n(820),n(5)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},817:function(t,e,n){"use strict";var r=n(10),c=n(813).trim;r({target:"String",proto:!0,forced:n(818)("trim")},{trim:function(){return c(this)}})},818:function(t,e,n){var r=n(150).PROPER,c=n(16),l=n(812);t.exports=function(t){return c((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||r&&l[t].name!==t}))}},819:function(t,e,n){var r=n(13);t.exports=r(1..valueOf)},820:function(t,e,n){"use strict";n(814)},821:function(t,e,n){var r=n(59)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},824:function(t,e,n){"use strict";n.r(e);var r,c=n(1),l=(n(48),n(24),{name:"CAddress",data:function(){return{displayText:""}},props:{value:{type:String,required:!0}},mounted:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setDisplayText();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),methods:{presetName:function(address){switch(address){case this.$store.state.bsc.globalAccounts.pair:return"liquidity";case this.$store.state.bsc.globalAccounts.buffer:return"buffer";case this.$store.state.bsc.globalAccounts.genesis:return"genesis";case this.$store.state.bsc.globalAccounts.burn:return"burn";case this.$store.state.bsc.globalAccounts.airdrop:return"airdrop";case this.$store.state.bsc.globalAccounts.tax:return"farm";case"0x0a10FC4f66B9F441C3cbA7a9E85baef7C51E9311":return"mainContract";default:return null}},setDisplayText:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var text,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(text=t.presetName(t.value))){e.next=4;break}return t.displayText=t.$t("user."+text),e.abrupt("return");case 4:return e.next=6,t.$nuxt.context.app.db.holder.where("address").equals(t.value).first();case 6:if(!(n=e.sent)||!n.username){e.next=10;break}return t.displayText="@"+n.username+": "+t.value.slice(0,8)+"..."+t.value.slice(-4),e.abrupt("return");case 10:return e.abrupt("return",t.displayText=t.value);case 11:case"end":return e.stop()}}),e)})))()}}}),o=n(5),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.displayText))])}),[],!1,null,"6b1e9b3d",null);e.default=component.exports}}]);