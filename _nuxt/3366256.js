(window.webpackJsonp=window.webpackJsonp||[]).push([[125,15,19,22,25,28,104],{1034:function(t,e,n){"use strict";n.r(e);var r=n(81),o={name:"CTableBuffer",props:{transactions:{type:Array,required:!0}},computed:{hpLink:function(){return r.a}}},c=n(5),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.transactions.length?n("div",{staticClass:"overflow-x-auto"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"table-history"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.block"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.type"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.txHash"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.amount"))+"\n          ")])])]),t._v(" "),n("tbody",t._l(t.transactions,(function(e){return n("tr",[n("td",[n("a",{attrs:{target:"_blank",href:t.hpLink.exploreTx(e.txHash)}},[t._v("\n              #"),n("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),e.sender===t.$store.state.bsc.globalAccounts.zero?n("td",{staticClass:"text-sky-500"},[t._v("\n            "+t._s(t.$t("txTable.mint"))+"\n          ")]):e.sender===t.$store.state.bsc.globalAccounts.buffer?n("td",{staticClass:"text-emerald-400"},[t._v("\n            "+t._s(t.$t("txTable.addLiquidity"))+"\n          ")]):n("td",[t._v("\n            "+t._s(t.$t("txTable.bufferAccumulate"))+"\n          ")]),t._v(" "),n("td",{staticClass:"font-mono"},[n("a",{attrs:{target:"_blank",href:t.hpLink.exploreTx(e.txHash)}},[t._v("\n              "+t._s(e.txHash.slice(0,44))+"..."+t._s(e.txHash.slice(-4))+"\n            ")])]),t._v(" "),n("td",[n("CBN",{attrs:{value:e.amount,token:!0,padding:2}}),t._v("\n            HyperDeFi\n          ")],1)])})),0)])])])]):t._e()}),[],!1,null,"270370d6",null);e.default=component.exports;installComponents(component,{CBN:n(835).default})},1068:function(t,e,n){var content=n(1138);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("47481220",content,!0,{sourceMap:!1})},1137:function(t,e,n){"use strict";n(1068)},1138:function(t,e,n){var r=n(64)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nh2[data-v-c8de8fae]{\n  font-size:1.875rem;\n  line-height:2.25rem;\n  font-weight:800;\n  letter-spacing:-0.025em\n}\n@media (min-width: 640px){\nh2[data-v-c8de8fae]{\n    font-size:2.25rem;\n    line-height:2.5rem\n}\n}\np[data-v-c8de8fae]{\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},1169:function(t,e,n){"use strict";n.r(e);var r,o=n(0),c=(n(24),n(72)),l={scrollToTop:!0,name:"HistoryBuffer",data:function(){return{transactions:[],pageSize:20,pageRecords:0}},computed:{pageNumber:function(){if(this.$route.params.page&&this.$route.params.page>"1"){var t=parseInt(this.$route.params.page);if(t>1)return t}return 1},pageOffset:function(){return this.pageSize*(this.pageNumber-1)}},watch:{"$store.state.bsc.synchronizing.fromBlock":(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.wait(1e3);case 2:return t.next=4,this.load();case 4:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load();case 2:case"end":return e.stop()}}),e)})))()},methods:{load:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nuxt.context.app.db.buffer.reverse().offset(t.pageOffset).limit(t.pageSize).toArray();case 2:return t.transactions=e.sent,e.next=5,t.$nuxt.context.app.db.buffer.count();case 5:t.pageRecords=e.sent;case 6:case"end":return e.stop()}}),e)})))()}}},f=(n(1137),n(5)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LAutoWidth",{staticClass:"py-10 md:py-20"},[n("CH3",{scopedSlots:t._u([{key:"tag",fn:function(){return[t._v("\n        On Chain\n      ")]},proxy:!0},{key:"desc",fn:function(){return[t._v("\n        "+t._s(t.$t("sDataBoard.__mintLatestBlockNumber__"))+"\n        #"),n("CBN",{attrs:{value:t.$store.state.bsc.blockNumber}})]},proxy:!0}])},[t._v("\n      "+t._s(t.$t("siteNav.bufferHistory"))+"\n\n      ")]),t._v(" "),n("CSupplyMint",{staticClass:"mt-12 sm:mt-24"}),t._v(" "),n("CTableBuffer",{staticClass:"mt-10 lg:mt-24",attrs:{transactions:t.transactions}}),t._v(" "),n("CPagination",{staticClass:"mt-8 lg:mt-12",attrs:{records:t.pageRecords,size:t.pageSize,number:t.pageNumber,path:"/history/buffer"}})],1)],1)}),[],!1,null,"c8de8fae",null);e.default=component.exports;installComponents(component,{CBN:n(835).default,CH3:n(842).default,CSupplyMint:n(997).default,CTableBuffer:n(1034).default,CPagination:n(849).default,LAutoWidth:n(151).default})},832:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},833:function(t,e,n){var r=n(13),o=n(51),c=n(27),l=n(832),f=r("".replace),d="["+l+"]",_=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),m=function(t){return function(e){var n=c(o(e));return 1&t&&(n=f(n,_,"")),2&t&&(n=f(n,h,"")),n}};t.exports={start:m(1),end:m(2),trim:m(3)}},834:function(t,e,n){var content=n(841);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("7f27037d",content,!0,{sourceMap:!1})},835:function(t,e,n){"use strict";n.r(e);n(836),n(50),n(96),n(837),n(268),n(66),n(45),n(194);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},o=(n(840),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},836:function(t,e,n){"use strict";var r=n(28),o=n(6),c=n(13),l=n(153),f=n(41),d=n(30),_=n(269),h=n(97),m=n(193),v=n(426),x=n(16),y=n(127).f,C=n(82).f,$=n(37).f,N=n(839),w=n(833).trim,T="Number",k=o.Number,B=k.prototype,E=o.TypeError,I=c("".slice),D=c("".charCodeAt),O=function(t){var e=v(t,"number");return"bigint"==typeof e?e:S(e)},S=function(t){var e,n,r,o,c,l,f,code,d=v(t,"number");if(m(d))throw E("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=w(d),43===(e=D(d,0))||45===e){if(88===(n=D(d,2))||120===n)return NaN}else if(48===e){switch(D(d,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(l=(c=I(d,2)).length,f=0;f<l;f++)if((code=D(c,f))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(l(T,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var R,P=function(t){var e=arguments.length<1?0:k(O(t)),n=this;return h(B,n)&&x((function(){N(n)}))?_(Object(e),n,P):e},A=r?y(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;A.length>j;j++)d(k,R=A[j])&&!d(P,R)&&$(P,R,C(k,R));P.prototype=B,B.constructor=P,f(o,T,P)}},837:function(t,e,n){"use strict";var r=n(10),o=n(833).trim;r({target:"String",proto:!0,forced:n(838)("trim")},{trim:function(){return o(this)}})},838:function(t,e,n){var r=n(152).PROPER,o=n(16),c=n(832);t.exports=function(t){return o((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||r&&c[t].name!==t}))}},839:function(t,e,n){var r=n(13);t.exports=r(1..valueOf)},840:function(t,e,n){"use strict";n(834)},841:function(t,e,n){var r=n(64)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},842:function(t,e,n){"use strict";n.r(e);var r={name:"CH3"},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-ch3"},[t.$slots.tag?n("header",[t._t("tag")],2):t._e(),t._v(" "),n("h3",[t._t("default")],2),t._v(" "),t.$slots.desc?n("main",[t._t("desc")],2):t._e()])}),[],!1,null,"31b9e2c9",null);e.default=component.exports},843:function(t,e,n){var content=n(846);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("279d30bc",content,!0,{sourceMap:!1})},845:function(t,e,n){"use strict";n(843)},846:function(t,e,n){var r=n(64)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.c-pagination[data-v-8de8c8aa]{\n  display:grid;\n  width:100%;\n  grid-template-columns:repeat(3, minmax(0, 1fr));\n  gap:2.5rem;\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.c-pagination a[data-v-8de8c8aa]{\n  width:100%;\n  max-width:20rem;\n  display:inline-flex;\n  align-items:center;\n  justify-content:center;\n  border-radius:0.375rem;\n  border-width:1px;\n  --tw-border-opacity:1;\n  border-color:rgba(55, 65, 81, var(--tw-border-opacity));\n  padding-top:0.75rem;\n  padding-bottom:0.75rem;\n  font-size:1rem;\n  line-height:1.5rem;\n  font-weight:500;\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity))\n}\n.c-pagination a[data-v-8de8c8aa]:focus{\n  outline:2px solid transparent;\n  outline-offset:2px\n}\n.c-pagination a[data-v-8de8c8aa]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity))\n}\n.c-pagination span[data-v-8de8c8aa]{\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},849:function(t,e,n){"use strict";n.r(e);n(836);var r=n(26),o=(n.n(r).a.BigInt,{name:"CPagination",props:{path:{type:String,required:!0},number:{type:Number,required:!0},size:{type:Number,required:!0},records:{type:Number,required:!0}},computed:{pages:function(){return Math.ceil(this.records/this.size)},pathToPrevious:function(){var t=this.number-1;return t>0?this.path+"/"+t:null},pathToNext:function(){var t=this.number+1;return t<=this.pages?this.path+"/"+t:null}}}),c=(n(845),n(5)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.pages>1?n("div",{staticClass:"c-pagination"},[n("div",{staticClass:"flex items-center justify-start"},[t.pathToPrevious?n("nuxt-link",{attrs:{to:t.localeLocation(t.pathToPrevious)}},[t._v("\n      Previous Page\n    ")]):t._e()],1),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[n("span",[t._v("\n      Page "+t._s(t.number)+" of "+t._s(t.pages)+"\n    ")])]),t._v(" "),n("div",{staticClass:"flex items-center justify-end"},[t.pathToNext?n("nuxt-link",{attrs:{to:t.localeLocation(t.pathToNext)}},[t._v("\n      Next Page\n    ")]):t._e()],1)]):t._e()}),[],!1,null,"8de8c8aa",null);e.default=component.exports},997:function(t,e,n){"use strict";n.r(e);var r={name:"CSupplyMint",computed:{}},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"border-l-8 border-gray-700 py-4 px-4 leading-6 text-base text-gray-500"},[n("p",{staticClass:"font-bold text-lg"},[t._v("\n        "+t._s(t.$t("sDataBoard.__mintSupplyGradually__"))+"\n      ")]),t._v(" "),n("p",{staticClass:"mt-3"},[t._v("\n        "+t._s(t.$t("sDataBoard.__mintWhen__"))+"\n"),t._v(" "),t.$route.path.endsWith("/buffer")||t.$route.path.endsWith("/buffer/mint")?n("span",[t._v("\n          "+t._s(t.$t("sDataBoard.__mintTypeInTable__"))+"\n          "),n("span",{staticClass:"text-sky-500"},[t._v("\n            "+t._s(t.$t("txTable.mint"))+"\n          ")]),t._v("\n          "+t._s(t.$t("sDataBoard.__mintTypeInTable2__"))+"\n        ")]):t._e(),t._v(" "),"0"!==t.$store.state.bsc.genesis.liquidityCreatedTimestamp?n("span",[t._v("\n          "+t._s(t.$t("sDataBoard.__mintTheAmount__"))+"\n          "),n("CBN",{attrs:{value:t.$store.state.bsc.supply.gate,token:!0}}),t._v(" HyperDeFi\n          "+t._s(t.$t("sDataBoard.__mintWhich__"))+"\n          "),n("CBN",{attrs:{value:t.$store.state.bsc.supply.gateRatio,decimals:3}}),t._v("%\n          "+t._s(t.$t("sDataBoard.__mintOfTheTotal__"))+"\n\n          "),t.$route.path.endsWith("/buffer")?n("nuxt-link",{staticClass:"hdf-a-colored",attrs:{to:t.localePath("/history/buffer/mint")}},[t._v("\n            "+t._s(t.$t("sDataBoard.__mintDistHistoryOnly__"))+"\n\n          ")]):t.$route.path.endsWith("/buffer/mint")?n("nuxt-link",{staticClass:"hdf-a-colored",attrs:{to:t.localePath("/history/buffer")}},[t._v("\n            "+t._s(t.$t("sDataBoard.__mintFullBufferHistory__"))+"\n          ")]):n("nuxt-link",{staticClass:"hdf-a-colored",attrs:{to:t.localePath("/history/buffer/mint")}},[t._v("\n            "+t._s(t.$t("sDataBoard.__mintDistHistory__"))+"\n          ")])],1):t._e()])])])}),[],!1,null,"14d9260f",null);e.default=component.exports;installComponents(component,{CBN:n(835).default})}}]);