(window.webpackJsonp=window.webpackJsonp||[]).push([[125,13,14,18,21,27,99],{1065:function(t,e,n){"use strict";n.r(e);var r=n(74),o={name:"CTableGenesis",props:{transactions:{type:Array,required:!0}},computed:{hdfLink:function(){return r.a}}},c=n(4),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.transactions.length?n("div",{staticClass:"overflow-x-auto"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"table-history"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.block"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.address"))+"\n          ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.amount"))+"\n          ")])])]),t._v(" "),n("tbody",t._l(t.transactions,(function(e){return n("tr",[n("td",[n("a",{attrs:{target:"_blank",href:t.hdfLink.exploreTx(e.txHash)}},[t._v("\n              #"),n("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),n("td",{staticClass:"font-mono"},[n("a",{attrs:{target:"_blank",href:t.hdfLink.exploreTx(e.txHash)}},[n("CAddress",{attrs:{value:e.account}})],1)]),t._v(" "),n("td",[n("CBN",{attrs:{value:e.bnbAmount,price:!0,padding:6}}),t._v("\n            BNB\n          ")],1)])})),0)])])])]):t._e()}),[],!1,null,"3d9050f7",null);e.default=component.exports;installComponents(component,{CBN:n(804).default,CAddress:n(812).default})},1116:function(t,e,n){"use strict";n.r(e);var r,o,c=n(0),l=(n(22),n(182)),f={scrollToTop:!0,name:"HistoryGenesisDeposit",data:function(){return{transactions:[],pageSize:20,pageRecords:0}},computed:{pageNumber:function(){if(this.$route.params.page&&this.$route.params.page>"1"){var t=parseInt(this.$route.params.page);if(t>1)return t}return 1},pageOffset:function(){return this.pageSize*(this.pageNumber-1)}},watch:{"$store.state.bsc.blockNumber":(o=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.sync();case 2:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),"$store.state.bsc.synchronizing.genesisDepositFrom":(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.wait(1e3);case 2:return t.next=4,this.load();case 4:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.sync();case 2:return e.next=4,t.load();case 4:case"end":return e.stop()}}),e)})))()},methods:{sync:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nuxt.context.app.sync.genesisDeposit();case 2:case"end":return e.stop()}}),e)})))()},load:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nuxt.context.app.db.genesisDeposit.reverse().offset(t.pageOffset).limit(t.pageSize).toArray();case 2:return t.transactions=e.sent,e.next=5,t.$nuxt.context.app.db.genesisDeposit.count();case 5:t.pageRecords=e.sent;case 6:case"end":return e.stop()}}),e)})))()}}},d=n(4),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LAutoWidth",{staticClass:"py-10 md:py-20"},[n("CH3",{scopedSlots:t._u([{key:"tag",fn:function(){return[t._v("\n        On Chain\n      ")]},proxy:!0}])},[t._v("\n      "+t._s(t.$t("siteNav.genesisHistory"))+"\n\n      ")]),t._v(" "),n("CTableGenesis",{staticClass:"mt-10 lg:mt-24",attrs:{transactions:t.transactions}}),t._v(" "),n("CPagination",{staticClass:"mt-8 lg:mt-12",attrs:{records:t.pageRecords,size:t.pageSize,number:t.pageNumber,path:"/history/genesis"}})],1)],1)}),[],!1,null,"106f75ac",null);e.default=component.exports;installComponents(component,{CH3:n(810).default,CTableGenesis:n(1065).default,CPagination:n(817).default,LAutoWidth:n(142).default})},800:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},801:function(t,e,n){var r=n(46),o=n(24),c="["+n(800)+"]",l=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),d=function(t){return function(e){var n=o(r(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(f,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},802:function(t,e,n){var content=n(809);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("7f27037d",content,!0,{sourceMap:!1})},803:function(t,e,n){"use strict";var r=n(26),o=n(16),c=n(144),l=n(37),f=n(29),d=n(255),h=n(180),m=n(410),v=n(15),x=n(118).f,_=n(75).f,y=n(36).f,w=n(807),C=n(801).trim,N="Number",$=o.Number,k=$.prototype,T=function(t){var e=m(t,"number");return"bigint"==typeof e?e:E(e)},E=function(t){var e,n,r,o,c,l,f,code,d=m(t,"number");if(h(d))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(43===(e=(d=C(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(l=(c=d.slice(2)).length,f=0;f<l;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(c(N,!$(" 0o1")||!$("0b1")||$("+0x1"))){for(var A,R=function(t){var e=arguments.length<1?0:$(T(t)),n=this;return n instanceof R&&v((function(){w(n)}))?d(Object(e),n,R):e},I=r?x($):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),O=0;I.length>O;O++)f($,A=I[O])&&!f(R,A)&&y(R,A,_($,A));R.prototype=k,k.constructor=R,l(o,N,R)}},804:function(t,e,n){"use strict";n.r(e);n(803),n(51),n(101),n(805),n(254),n(67),n(50),n(181);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},o=(n(808),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},805:function(t,e,n){"use strict";var r=n(9),o=n(801).trim;r({target:"String",proto:!0,forced:n(806)("trim")},{trim:function(){return o(this)}})},806:function(t,e,n){var r=n(143).PROPER,o=n(15),c=n(800);t.exports=function(t){return o((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||r&&c[t].name!==t}))}},807:function(t,e){var n=1..valueOf;t.exports=function(t){return n.call(t)}},808:function(t,e,n){"use strict";n(802)},809:function(t,e,n){var r=n(65)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},810:function(t,e,n){"use strict";n.r(e);var r={name:"CH3"},o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-ch3"},[t.$slots.tag?n("header",[t._t("tag")],2):t._e(),t._v(" "),n("h3",[t._t("default")],2),t._v(" "),t.$slots.desc?n("main",[t._t("desc")],2):t._e()])}),[],!1,null,"31b9e2c9",null);e.default=component.exports},811:function(t,e,n){var content=n(814);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("4df587ea",content,!0,{sourceMap:!1})},812:function(t,e,n){"use strict";n.r(e);var r,o=n(0),c=(n(50),n(22),{name:"CAddress",data:function(){return{displayText:""}},props:{value:{type:String,required:!0}},mounted:(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setDisplayText();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),methods:{presetName:function(address){switch(address){case this.$store.state.bsc.globalAccounts.pair:return"liquidity";case this.$store.state.bsc.globalAccounts.buffer:return"buffer";case this.$store.state.bsc.globalAccounts.genesis:return"genesis";case this.$store.state.bsc.globalAccounts.burn:return"burn";case this.$store.state.bsc.globalAccounts.airdrop:return"airdrop";case this.$store.state.bsc.globalAccounts.tax:return"tax";case"0xc18C2f15B675DE00041BE48540f77C6A6cEf32b6":return"mainContract";default:return null}},setDisplayText:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var text,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(text=t.presetName(t.value))){e.next=4;break}return t.displayText=t.$t("user."+text),e.abrupt("return");case 4:return e.next=6,t.$nuxt.context.app.db.holder.where("address").equals(t.value).first();case 6:if(!(n=e.sent)||!n.username){e.next=10;break}return t.displayText="@"+n.username+": "+t.value.slice(0,8)+"..."+t.value.slice(-4),e.abrupt("return");case 10:return e.abrupt("return",t.displayText=t.value);case 11:case"end":return e.stop()}}),e)})))()}}}),l=n(4),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.displayText))])}),[],!1,null,"b5eef550",null);e.default=component.exports},813:function(t,e,n){"use strict";n(811)},814:function(t,e,n){var r=n(65)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.c-pagination[data-v-b41c8ba6]{\n  display:grid;\n  width:100%;\n  grid-template-columns:repeat(3, minmax(0, 1fr));\n  gap:2.5rem;\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.c-pagination a[data-v-b41c8ba6]{\n  width:100%;\n  max-width:20rem;\n  display:inline-flex;\n  align-items:center;\n  justify-content:center;\n  border-radius:0.375rem;\n  border-width:1px;\n  --tw-border-opacity:1;\n  border-color:rgba(55, 65, 81, var(--tw-border-opacity));\n  padding-top:0.75rem;\n  padding-bottom:0.75rem;\n  font-size:1rem;\n  line-height:1.5rem;\n  font-weight:500;\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity))\n}\n.c-pagination a[data-v-b41c8ba6]:focus{\n  outline:2px solid transparent;\n  outline-offset:2px\n}\n.c-pagination a[data-v-b41c8ba6]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity))\n}\n.c-pagination span[data-v-b41c8ba6]{\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},817:function(t,e,n){"use strict";n.r(e);n(803);var r={name:"CPagination",props:{path:{type:String,required:!0},number:{type:Number,required:!0},size:{type:Number,required:!0},records:{type:Number,required:!0}},computed:{pages:function(){return Math.ceil(this.records/this.size)},pathToPrevious:function(){var t=this.number-1;return t>0?this.path+"/"+t:null},pathToNext:function(){var t=this.number+1;return t<=this.pages?this.path+"/"+t:null}}},o=(n(813),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.pages>1&&t.number>t.size*(t.number-1)?n("div",{staticClass:"c-pagination"},[n("div",{staticClass:"flex items-center justify-start"},[t.pathToPrevious?n("nuxt-link",{attrs:{to:t.localeLocation(t.pathToPrevious)}},[t._v("\n      Previous Page\n    ")]):t._e()],1),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[n("span",[t._v("\n      Page "+t._s(t.number)+" of "+t._s(t.pages)+"\n    ")])]),t._v(" "),n("div",{staticClass:"flex items-center justify-end"},[t.pathToNext?n("nuxt-link",{attrs:{to:t.localeLocation(t.pathToNext)}},[t._v("\n      Next Page\n    ")]):t._e()],1)]):t._e()}),[],!1,null,"b41c8ba6",null);e.default=component.exports}}]);