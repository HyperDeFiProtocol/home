(window.webpackJsonp=window.webpackJsonp||[]).push([[111,16,68,78,81,104],{1019:function(t,e,n){var content=n(1047);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("61ab3c6a",content,!0,{sourceMap:!1})},1046:function(t,e,n){"use strict";n(1019)},1047:function(t,e,n){var r=n(64)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.hdf-stat div dt[data-v-65d0f9ae]{\n  --tw-text-opacity:1;\n  color:rgba(255, 228, 230, var(--tw-text-opacity))\n}\ntbody tr[data-v-65d0f9ae]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(136, 19, 55, var(--tw-bg-opacity))\n}\ntbody tr:hover td[data-v-65d0f9ae]{\n  --tw-text-opacity:1;\n  color:rgba(254, 205, 211, var(--tw-text-opacity))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},1093:function(t,e,n){"use strict";n.r(e);var r,o=n(1),l=(n(24),n(2),n(78)),c=n(154),d={name:"STaxLiquidity",data:function(){return{transactions:[]}},computed:{explorer:function(){return l.a}},watch:{"$store.state.bsc.synchronizing.fromBlock":(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.wait(1e3);case 2:return t.next=4,this.load();case 4:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load();case 2:case"end":return e.stop()}}),e)})))()},methods:{load:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nuxt.context.app.db.buffer.where("sender").equals(t.$store.state.bsc.globalAccounts.buffer).reverse().limit(10).toArray();case 2:t.transactions=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}},f=(n(1046),n(5)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-section-fee"},[n("div",{staticClass:"text-center"},[n("span",{staticClass:"span-icon bg-rose-50 text-rose-700"},[n("HeroIconOutlineServer",{staticClass:"h-8 w-8"})],1)]),t._v(" "),n("LAutoWidth",{staticClass:"auto-layout"},[n("main",[n("div",{staticClass:"header2"},[n("h2",{staticClass:"text-rose-400"},[t._v("\n            "+t._s(t.$t("sTaxLiquidity.title"))+"\n          ")]),t._v(" "),n("p",[t._v("\n            "+t._s(t.$t("sTaxLiquidity.text"))+"\n          ")])]),t._v(" "),n("div",{staticClass:"body1 to-red-900 from-rose-900 text-rose-300"},[n("h3",[t._v("\n            "+t._s(t.$t("sTax.forEachTransaction"))+"\n          ")]),t._v(" "),n("p",[t._v("\n            "+t._s(t.$t("sTax.take"))+"\n            "),t.$store.state.bsc.takerTax.liquidity>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.takerTax.liquidity)+"%\n              "+t._s(t.$t("sTax.fromTaker"))+"\n            ")]):t._e(),t._v(" "),t.$store.state.bsc.makerTax.liquidity>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.makerTax.liquidity)+"%\n              "+t._s(t.$t("sTax.fromMaker"))+"\n            ")]):t._e(),t._v(" "),t.$store.state.bsc.whaleTax.liquidity>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.whaleTax.liquidity)+"%\n              "+t._s(t.$t("sTax.fromWhale"))+"\n            ")]):t._e(),t._v("\n            "+t._s(t.$t("sTaxLiquidity.thenDeposit1__"))+"\n            "),n("CBN",{attrs:{value:t.$store.state.bsc.global.autoSwapAmountMin,token:!0}}),t._v(" HyperDeFi\n            "+t._s(t.$t("sTaxLiquidity.thenDeposit2__"))+"\n            "+t._s(t.$store.state.bsc.global.autoSwapNumeratorMin)+"/"),n("CBN",{attrs:{value:t.$store.state.bsc.global.autoSwapDenominator}}),t._v("\n            "+t._s(t.$t("sTaxLiquidity.thenDeposit3__"))+"\n")],1),t._v(" "),n("p",[t._v("\n            "+t._s(t.$t("sTaxLiquidity.newLPTokens__"))+"\n          ")]),t._v(" "),t.$store.state.stat.buffer.count>"0"?n("div",{staticClass:"mt-5 inline-flex rounded-md shadow"},[n("nuxt-link",{staticClass:"hdf-a-track bg-rose-700 hover:bg-rose-600 space-x-2",attrs:{to:t.localeLocation("/history/buffer")}},[n("HeroIconSolidCursorClick",{staticClass:"h-5 w-5"}),t._v(" "),n("span",[t._v("\n                "+t._s(t.$t("sTax.trackAll"))+"\n                "+t._s(t.$store.state.stat.buffer.count)+"\n                "+t._s(t.$t("sTaxLiquidity.trackBufferTransfers"))+"\n              ")])],1)],1):t._e()])]),t._v(" "),t.$store.state.bsc.supply.liquidity>"0"?n("dl",{staticClass:"hdf-stat grid grid-cols-1 xl:max-w-7xl",class:{"xl:grid-cols-3":t.$store.state.stat.buffer.out.count,"xl:grid-cols-2":!t.$store.state.stat.buffer.out.count}},[n("div",[n("dt",[t._v("\n            "+t._s(t.$t("sTaxLiquidity.statLiquidity"))+"\n          ")]),t._v(" "),n("dd",[n("CBN",{attrs:{value:String(t.$store.state.bsc.supply.liquidity),token:!0}})],1)]),t._v(" "),n("div",[n("dt",[n("span",[t._v("\n              "+t._s(t.$t("sTaxLiquidity.statBuffer"))+"\n            ")]),t._v(" "),t.$store.state.bsc.global.autoSwapReady?n("span",[t._v("\n              "+t._s(t.$t("sTaxLiquidity.statReady"))+"\n            ")]):t._e()]),t._v(" "),n("dd",[n("CBN",{attrs:{value:t.$store.state.bsc.supply.buffer,token:!0}})],1)]),t._v(" "),t.$store.state.stat.buffer.out.count?n("div",[n("dt",[t._v("\n            "+t._s(t.$t("sTaxLiquidity.statLiquidityAddTransfers"))+"\n          ")]),t._v(" "),n("dd",[n("CBN",{attrs:{value:t.$store.state.stat.buffer.out.count}})],1)]):t._e()]):t._e(),t._v(" "),t.transactions.length?n("div",[n("h6",{staticClass:"mt-12 md:mt-16 ml-2 text-sm font-semibold text-rose-500 tracking-wide uppercase"},[t._v("\n          "+t._s(t.$t("txTable.latest"))+"\n          "+t._s(t.transactions.length)+"\n          "+t._s(t.$t("sTaxLiquidity.liquidityAddHistory"))+"\n        ")]),t._v(" "),n("div",{staticClass:"md:hidden mt-4"},[n("ul",{staticClass:"hdf-tx-ul"},t._l(t.transactions,(function(e){return n("li",[n("span",{staticClass:"span-icon-wrap"},[n("HeroIconSolidGift")],1),t._v(" "),n("div",{staticClass:"div-body"},[n("div",[n("h4",[n("CBN",{attrs:{value:e.amount}}),t._v("\n                    HyperDeFi\n                  ")],1),t._v(" "),n("p",[n("a",{attrs:{target:"_blank",href:t.explorer.exploreTx(e.txHash)}},[t._v("\n                      #"),n("CBN",{attrs:{value:e.blockNumber}})],1)])]),t._v(" "),n("p",{staticClass:"p-tx"},[n("a",{attrs:{target:"_blank",href:t.explorer.exploreToken4address(e.account)}},[t._v("\n                    "+t._s(e.txHash.slice(0,8))+"..."+t._s(e.txHash.slice(-4))+"\n                  ")])])])])})),0)]),t._v(" "),n("div",{staticClass:"hidden mt-4 overflow-x-auto md:block"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"hdf-tx-table"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t("txTable.block"))+"\n                  ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t("txTable.txHash"))+"\n                  ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t("txTable.amount"))+"\n                  ")])])]),t._v(" "),n("tbody",t._l(t.transactions,(function(e){return n("tr",[n("td",[n("a",{attrs:{target:"_blank",href:t.explorer.exploreTx(e.txHash)}},[t._v("\n                      #"),n("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),n("td",{staticClass:"font-mono"},[n("a",{attrs:{target:"_blank",href:t.explorer.exploreTx(e.txHash)}},[t._v("\n                      "+t._s(e.txHash.slice(0,36))+"..."+t._s(e.txHash.slice(-4))+"\n                    ")])]),t._v(" "),n("td",[n("CBN",{attrs:{value:e.amount,token:!0,padding:2}}),t._v("\n                    HyperDeFi\n                  ")],1)])})),0)])])])])]):t._e()])],1)}),[],!1,null,"65d0f9ae",null);e.default=component.exports;installComponents(component,{HeroIconOutlineServer:n(994).default,CBN:n(836).default,HeroIconSolidCursorClick:n(849).default,HeroIconSolidGift:n(988).default,LAutoWidth:n(151).default})},832:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},833:function(t,e,n){var r=n(13),o=n(51),l=n(26),c=n(832),d=r("".replace),f="["+c+"]",v=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),_=function(t){return function(e){var n=l(o(e));return 1&t&&(n=d(n,v,"")),2&t&&(n=d(n,h,"")),n}};t.exports={start:_(1),end:_(2),trim:_(3)}},834:function(t,e,n){var content=n(841);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("7f27037d",content,!0,{sourceMap:!1})},835:function(t,e,n){"use strict";var r=n(28),o=n(7),l=n(13),c=n(153),d=n(41),f=n(29),v=n(268),h=n(97),_=n(191),x=n(425),m=n(16),y=n(126).f,w=n(79).f,C=n(40).f,$=n(839),k=n(833).trim,T="Number",N=o.Number,I=N.prototype,E=o.TypeError,H=l("".slice),S=l("".charCodeAt),L=function(t){var e=x(t,"number");return"bigint"==typeof e?e:B(e)},B=function(t){var e,n,r,o,l,c,d,code,f=x(t,"number");if(_(f))throw E("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=k(f),43===(e=S(f,0))||45===e){if(88===(n=S(f,2))||120===n)return NaN}else if(48===e){switch(S(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(l=H(f,2)).length,d=0;d<c;d++)if((code=S(l,d))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(c(T,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var M,A=function(t){var e=arguments.length<1?0:N(L(t)),n=this;return h(I,n)&&m((function(){$(n)}))?v(Object(e),n,A):e},O=r?y(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;O.length>R;R++)f(N,M=O[R])&&!f(A,M)&&C(A,M,w(N,M));A.prototype=I,I.constructor=A,d(o,T,A)}},836:function(t,e,n){"use strict";n.r(e);n(835),n(50),n(96),n(837),n(267),n(66),n(45),n(192);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},o=(n(840),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},837:function(t,e,n){"use strict";var r=n(10),o=n(833).trim;r({target:"String",proto:!0,forced:n(838)("trim")},{trim:function(){return o(this)}})},838:function(t,e,n){var r=n(152).PROPER,o=n(16),l=n(832);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||r&&l[t].name!==t}))}},839:function(t,e,n){var r=n(13);t.exports=r(1..valueOf)},840:function(t,e,n){"use strict";n(834)},841:function(t,e,n){var r=n(64)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},849:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconSolidCursorClick"},o=n(5),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z","clip-rule":"evenodd"}})])}),[],!1,null,"4c064797",null);e.default=component.exports},988:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconSolidGift"},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z","clip-rule":"evenodd"}}),t._v(" "),n("path",{attrs:{d:"M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"}})])}),[],!1,null,"04cf8a48",null);e.default=component.exports},994:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconOutlineServer"},o=n(5),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"}})])}),[],!1,null,"3acede91",null);e.default=component.exports}}]);