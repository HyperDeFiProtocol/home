(window.webpackJsonp=window.webpackJsonp||[]).push([[100,7,8,12,14,19,85],{1019:function(t,e,n){"use strict";n.r(e);var r={name:"CAddress",props:{value:{type:String,required:!0}},computed:{display:function(){var text=this.addressName(this.value);return text?this.$t("user."+text):this.value}},methods:{addressName:function(address){switch(address){case this.$store.state.bsc.globalAccounts.pair:return"liquidity";case this.$store.state.bsc.globalAccounts.buffer:return"buffer";case this.$store.state.bsc.globalAccounts.presale:return"presale";case this.$store.state.bsc.globalAccounts.fund:return"fund";case this.$store.state.bsc.globalAccounts.zero:return"zero";case this.$store.state.bsc.globalAccounts.burn:return"burn";default:return null}}}},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.display))])}),[],!1,null,"2810b3b5",null);e.default=component.exports},1020:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconOutlineArrowCircleRight"},o=n(5),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"}})])}),[],!1,null,"9805aff0",null);e.default=component.exports},1032:function(t,e,n){"use strict";n(988)},1033:function(t,e,n){var r=n(72)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nthead th[data-v-7e154c26]{\n  padding-left:0.75rem;\n  padding-right:0.75rem;\n  padding-top:0.75rem;\n  padding-bottom:0.75rem;\n  text-align:left;\n  font-size:0.75rem;\n  line-height:1rem;\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity));\n  text-transform:uppercase;\n  letter-spacing:0.05em\n}\nthead th[data-v-7e154c26]:last-child{\n  text-align:center\n}\ntbody tr[data-v-7e154c26]{\n  font-size:0.75rem;\n  line-height:1rem;\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\ntbody tr.taker .mark[data-v-7e154c26], tbody tr.taker .type[data-v-7e154c26]{\n  --tw-text-opacity:1;\n  color:rgba(56, 189, 248, var(--tw-text-opacity))\n}\ntbody tr.maker .mark[data-v-7e154c26], tbody tr.maker .type[data-v-7e154c26]{\n  --tw-text-opacity:1;\n  color:rgba(52, 211, 153, var(--tw-text-opacity))\n}\ntbody tr.whale .mark[data-v-7e154c26], tbody tr.whale .type[data-v-7e154c26]{\n  --tw-text-opacity:1;\n  color:rgba(251, 146, 60, var(--tw-text-opacity))\n}\ntbody tr.robber .mark[data-v-7e154c26], tbody tr.robber .type[data-v-7e154c26]{\n  --tw-text-opacity:1;\n  color:rgba(251, 113, 133, var(--tw-text-opacity))\n}\ntbody tr[data-v-7e154c26]:nth-child(odd){\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity))\n}\ntbody tr td[data-v-7e154c26]{\n  white-space:nowrap;\n  padding-left:0.75rem;\n  padding-right:0.75rem;\n  padding-top:1rem;\n  padding-bottom:1rem;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\ntbody tr td[data-v-7e154c26]:not(:last-child){\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap\n}\ntbody tr td[data-v-7e154c26]:last-child{\n  text-align:right;\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity))\n}\ntbody tr .amount-ori[data-v-7e154c26]{\n  display:inline;\n  display:none\n}\ntbody tr .amount-tx[data-v-7e154c26]{\n  display:block;\n  display:inline\n}\ntbody tr[data-v-7e154c26]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(76, 29, 149, var(--tw-bg-opacity))\n}\ntbody tr:hover td[data-v-7e154c26]{\n  --tw-text-opacity:1;\n  color:rgba(221, 214, 254, var(--tw-text-opacity))\n}\ntbody tr:hover .amount-ori[data-v-7e154c26]{\n  display:block;\n  display:inline\n}\ntbody tr:hover .amount-tx[data-v-7e154c26]{\n  display:inline;\n  display:none\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},1057:function(t,e,n){"use strict";n.r(e);var r,o=n(1),c=(n(21),n(74)),l={scrollToTop:!0,name:"HistoryTxs",data:function(){return{transactions:[],pageSize:20,pageRecords:0}},computed:{explorer:function(){return c.a},pageNumber:function(){if(this.$route.params.page&&this.$route.params.page>"1"){var t=parseInt(this.$route.params.page);if(t>1)return t}return 1},pageOffset:function(){return this.pageSize*(this.pageNumber-1)}},watch:{"$store.state.bsc.synchronizing":(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load();case 2:case"end":return e.stop()}}),e)})))()},methods:{load:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nuxt.context.app.db.tx.reverse().offset(t.pageOffset).limit(t.pageSize).toArray();case 2:return t.transactions=e.sent,e.next=5,t.$nuxt.context.app.db.tx.count();case 5:t.pageRecords=e.sent;case 6:case"end":return e.stop()}}),e)})))()},txName:function(t){switch(t){case"0":return"flat";case"1":return"taker";case"2":return"maker";case"3":return"whale";case"4":return"robber";default:return""}},markClass:function(t,e){switch(e){case"sender":return t.sender!==this.$store.state.bsc.globalAccounts.pair?"mark":null;case"recipient":return t.sender!==this.$store.state.bsc.globalAccounts.pair?null:t.recipient!==this.$store.state.bsc.globalAccounts.pair?"mark":null;default:return null}}}},d=(n(1032),n(5)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LAutoWidth",{staticClass:"py-10 md:py-20"},[n("CH3",{scopedSlots:t._u([{key:"tag",fn:function(){return[t._v("\n        On Chain\n      ")]},proxy:!0}])},[t._v("\n      "+t._s(t.$t("siteNav.txExplorer"))+"\n\n      ")]),t._v(" "),t.transactions.length?n("div",{staticClass:"mt-10 lg:mt-24 overflow-x-auto"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"min-w-full divide-y divide-gray-700"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n                "+t._s(t.$t("txTable.block"))+"\n              ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                "+t._s(t.$t("txTable.type"))+"\n              ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                "+t._s(t.$t("txTable.from"))+"\n              ")]),t._v(" "),n("th",{attrs:{scope:"col"}}),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                "+t._s(t.$t("txTable.to"))+"\n              ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                "+t._s(t.$t("txTable.amount"))+"\n              ")])])]),t._v(" "),n("tbody",{staticClass:"divide-y divide-gray-700"},t._l(t.transactions,(function(e){return n("tr",{class:t.txName(e.txType)},[n("td",{staticClass:"hash"},[n("a",{attrs:{target:"_blank",href:t.explorer.exploreTx(e.txHash)}},[t._v("\n                  #"),n("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),n("td",{staticClass:"type capitalize"},[t._v("\n                "+t._s(t.$t("user."+t.txName(e.txType)))+"\n              ")]),t._v(" "),n("td",{staticClass:"sender",class:t.markClass(e,"sender")},[n("a",{attrs:{target:"_blank",href:t.explorer.exploreToken4address(e.sender)}},[n("CAddress",{attrs:{value:e.sender}})],1)]),t._v(" "),n("td",[n("span",{staticClass:"w-5 h-5 text-gray-500"},[n("HeroIconOutlineArrowCircleRight",{staticClass:"w-5 h-5 text-gray-400"})],1)]),t._v(" "),n("td",{staticClass:"recipient",class:t.markClass(e,"recipient")},[n("a",{attrs:{target:"_blank",href:t.explorer.exploreToken4address(e.recipient)}},[n("CAddress",{attrs:{value:e.recipient}})],1)]),t._v(" "),n("td",{staticClass:"amount"},[n("CBN",{staticClass:"amount-ori",attrs:{value:e.amount,token:!0,padding:2}}),t._v(" "),n("CBN",{staticClass:"amount-tx",attrs:{value:e.txAmount,token:!0,padding:2}}),t._v("\n                HyperDeFi\n              ")],1)])})),0)])])])]):t._e(),t._v(" "),n("CPagination",{staticClass:"mt-8 lg:mt-12",attrs:{records:t.pageRecords,size:t.pageSize,number:t.pageNumber,path:"/history/txs"}})],1)],1)}),[],!1,null,"7e154c26",null);e.default=component.exports;installComponents(component,{CH3:n(777).default,CBN:n(772).default,CAddress:n(1019).default,HeroIconOutlineArrowCircleRight:n(1020).default,CPagination:n(927).default,LAutoWidth:n(164).default})},768:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},769:function(t,e,n){var r=n(44),o=n(23),c="["+n(768)+"]",l=RegExp("^"+c+c+"*"),d=RegExp(c+c+"*$"),f=function(t){return function(e){var n=o(r(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(d,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},770:function(t,e,n){var content=n(776);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(73).default)("7f27037d",content,!0,{sourceMap:!1})},771:function(t,e,n){"use strict";var r=n(27),o=n(16),c=n(133),l=n(38),d=n(28),f=n(93),h=n(239),m=n(132),v=n(380),y=n(15),x=n(94),_=n(109).f,w=n(76).f,C=n(35).f,k=n(769).trim,N="Number",$=o.Number,A=$.prototype,T=f(x(A))==N,I=function(t){if(m(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,o,c,l,d,code,f=v(t,"number");if("string"==typeof f&&f.length>2)if(43===(e=(f=k(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(c(N,!$(" 0o1")||!$("0b1")||$("+0x1"))){for(var E,O=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof O&&(T?y((function(){A.valueOf.call(n)})):f(n)!=N)?h(new $(I(e)),n,O):I(e)},R=r?_($):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),z=0;R.length>z;z++)d($,E=R[z])&&!d(O,E)&&C(O,E,w($,E));O.prototype=A,A.constructor=O,l(o,N,O)}},772:function(t,e,n){"use strict";n.r(e);n(771),n(51),n(92),n(773),n(238),n(75),n(52),n(165);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},o=(n(775),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},773:function(t,e,n){"use strict";var r=n(9),o=n(769).trim;r({target:"String",proto:!0,forced:n(774)("trim")},{trim:function(){return o(this)}})},774:function(t,e,n){var r=n(15),o=n(768);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},775:function(t,e,n){"use strict";n(770)},776:function(t,e,n){var r=n(72)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},777:function(t,e,n){"use strict";n.r(e);var r={name:"CH3"},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-ch3"},[t.$slots.tag?n("header",[t._t("tag")],2):t._e(),t._v(" "),n("h3",[t._t("default")],2),t._v(" "),t.$slots.desc?n("main",[t._t("desc")],2):t._e()])}),[],!1,null,"31b9e2c9",null);e.default=component.exports},916:function(t,e,n){var content=n(923);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(73).default)("c4f062c4",content,!0,{sourceMap:!1})},922:function(t,e,n){"use strict";n(916)},923:function(t,e,n){var r=n(72)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.c-pagination[data-v-3c929f77]{\n  display:grid;\n  width:100%;\n  grid-template-columns:repeat(3, minmax(0, 1fr));\n  gap:2.5rem;\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.c-pagination a[data-v-3c929f77]{\n  width:100%;\n  max-width:20rem;\n  display:inline-flex;\n  align-items:center;\n  justify-content:center;\n  border-radius:0.375rem;\n  border-width:1px;\n  --tw-border-opacity:1;\n  border-color:rgba(55, 65, 81, var(--tw-border-opacity));\n  padding-top:0.75rem;\n  padding-bottom:0.75rem;\n  font-size:1rem;\n  line-height:1.5rem;\n  font-weight:500;\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity))\n}\n.c-pagination a[data-v-3c929f77]:focus{\n  outline:2px solid transparent;\n  outline-offset:2px\n}\n.c-pagination a[data-v-3c929f77]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity))\n}\n.c-pagination span[data-v-3c929f77]{\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},927:function(t,e,n){"use strict";n.r(e);n(771);var r={name:"CPagination",props:{path:{type:String,required:!0},number:{type:Number,required:!0},size:{type:Number,required:!0},records:{type:Number,required:!0}},computed:{pages:function(){return Math.ceil(this.records/this.size)},pathToPrevious:function(){var t=this.number-1;return t>0?this.path+"/"+t:null},pathToNext:function(){var t=this.number+1;return t<=this.pages?this.path+"/"+t:null}}},o=(n(922),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.pages>1?n("div",{staticClass:"c-pagination"},[n("div",{staticClass:"flex items-center justify-start"},[t.pathToPrevious?n("nuxt-link",{attrs:{to:t.localeLocation(t.pathToPrevious)}},[t._v("\n      Previous Page\n    ")]):t._e()],1),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[n("span",[t._v("\n      Page "+t._s(t.number)+" of "+t._s(t.pages)+"\n    ")])]),t._v(" "),n("div",{staticClass:"flex items-center justify-end"},[t.pathToNext?n("nuxt-link",{attrs:{to:t.localeLocation(t.pathToNext)}},[t._v("\n      Next Page\n    ")]):t._e()],1)]):t._e()}),[],!1,null,"3c929f77",null);e.default=component.exports},988:function(t,e,n){var content=n(1033);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(73).default)("4cedb2e0",content,!0,{sourceMap:!1})}}]);