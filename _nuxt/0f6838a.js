(window.webpackJsonp=window.webpackJsonp||[]).push([[26,14,15,102],{803:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},804:function(t,e,n){var r=n(48),c=n(24),o="["+n(803)+"]",l=RegExp("^"+o+o+"*"),f=RegExp(o+o+"*$"),d=function(t){return function(e){var n=c(r(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(f,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},805:function(t,e,n){var content=n(812);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("7f27037d",content,!0,{sourceMap:!1})},806:function(t,e,n){"use strict";var r=n(26),c=n(16),o=n(145),l=n(37),f=n(29),d=n(255),h=n(181),m=n(411),v=n(15),x=n(119).f,_=n(75).f,y=n(36).f,N=n(810),C=n(804).trim,k="Number",A=c.Number,T=A.prototype,E=function(t){var e=m(t,"number");return"bigint"==typeof e?e:w(e)},w=function(t){var e,n,r,c,o,l,f,code,d=m(t,"number");if(h(d))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(43===(e=(d=C(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+d}for(l=(o=d.slice(2)).length,f=0;f<l;f++)if((code=o.charCodeAt(f))<48||code>c)return NaN;return parseInt(o,r)}return+d};if(o(k,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var I,$=function(t){var e=arguments.length<1?0:A(E(t)),n=this;return n instanceof $&&v((function(){N(n)}))?d(Object(e),n,$):e},R=r?x(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),D=0;R.length>D;D++)f(A,I=R[D])&&!f($,I)&&y($,I,_(A,I));$.prototype=T,T.constructor=$,l(c,k,$)}},807:function(t,e,n){"use strict";n.r(e);n(806),n(47),n(88),n(808),n(254),n(59),n(46),n(182);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},c=(n(811),n(5)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},808:function(t,e,n){"use strict";var r=n(9),c=n(804).trim;r({target:"String",proto:!0,forced:n(809)("trim")},{trim:function(){return c(this)}})},809:function(t,e,n){var r=n(144).PROPER,c=n(15),o=n(803);t.exports=function(t){return c((function(){return!!o[t]()||"​᠎"!=="​᠎"[t]()||r&&o[t].name!==t}))}},810:function(t,e){var n=1..valueOf;t.exports=function(t){return n.call(t)}},811:function(t,e,n){"use strict";n(805)},812:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},815:function(t,e,n){"use strict";n.r(e);var r,c=n(1),o=(n(46),n(22),{name:"CAddress",data:function(){return{displayText:""}},props:{value:{type:String,required:!0}},mounted:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setDisplayText();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),methods:{presetName:function(address){switch(address){case this.$store.state.bsc.globalAccounts.pair:return"liquidity";case this.$store.state.bsc.globalAccounts.buffer:return"buffer";case this.$store.state.bsc.globalAccounts.genesis:return"genesis";case this.$store.state.bsc.globalAccounts.burn:return"burn";case this.$store.state.bsc.globalAccounts.airdrop:return"airdrop";case this.$store.state.bsc.globalAccounts.tax:return"farm";case"0xA224106d8442049D3C4687638825179F1f596abc":return"mainContract";default:return null}},setDisplayText:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var text,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(text=t.presetName(t.value))){e.next=4;break}return t.displayText=t.$t("user."+text),e.abrupt("return");case 4:return e.next=6,t.$nuxt.context.app.db.holder.where("address").equals(t.value).first();case 6:if(!(n=e.sent)||!n.username){e.next=10;break}return t.displayText="@"+n.username+": "+t.value.slice(0,8)+"..."+t.value.slice(-4),e.abrupt("return");case 10:return e.abrupt("return",t.displayText=t.value);case 11:case"end":return e.stop()}}),e)})))()}}}),l=n(5),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.displayText))])}),[],!1,null,"6b1e9b3d",null);e.default=component.exports},977:function(t,e,n){"use strict";n.r(e);var r=n(74),c={name:"CTableAirdrop",props:{transactions:{type:Array,required:!0},hash:{type:Boolean,default:!1}},computed:{hdfLink:function(){return r.a}}},o=n(5),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.transactions.length?n("div",{staticClass:"overflow-x-auto"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"table-history"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.block"))+"\n          ")]),t._v(" "),t.hash?n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.txHash"))+"\n          ")]):n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.address"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.amount"))+"\n          ")])])]),t._v(" "),n("tbody",t._l(t.transactions,(function(e){return n("tr",[n("td",[n("a",{attrs:{target:"_blank",href:t.hdfLink.exploreTx(e.txHash)}},[t._v("\n              #"),n("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),t.hash?n("td",{staticClass:"font-mono"},[n("a",{attrs:{target:"_blank",href:t.hdfLink.exploreTx(e.txHash)}},[t._v("\n              "+t._s(e.txHash.slice(0,44))+"...\n            ")])]):n("td",{staticClass:"font-mono"},[n("a",{attrs:{target:"_blank",href:t.hdfLink.exploreTx(e.txHash)}},[n("CAddress",{attrs:{value:e.account}})],1)]),t._v(" "),n("td",[n("CBN",{attrs:{value:e.amount,token:!0,padding:2}}),t._v("\n            HyperDeFi\n          ")],1)])})),0)])])])]):t._e()}),[],!1,null,"1553a17a",null);e.default=component.exports;installComponents(component,{CBN:n(807).default,CAddress:n(815).default})}}]);