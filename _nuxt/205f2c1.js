(window.webpackJsonp=window.webpackJsonp||[]).push([[67,7,40,46,48,70],{842:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},843:function(t,e,n){var r=n(44),o="["+n(842)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},844:function(t,e,n){var content=n(850);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("fb44e342",content,!0,{sourceMap:!1})},845:function(t,e,n){"use strict";var r=n(27),o=n(19),l=n(131),c=n(37),d=n(28),f=n(88),v=n(227),h=n(129),_=n(16),m=n(89),x=n(130).f,k=n(70).f,w=n(32).f,C=n(843).trim,$="Number",N=o.Number,y=N.prototype,F=f(m(y))==$,I=function(t){var e,n,r,o,l,c,d,code,f=h(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=C(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(l=f.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(l($,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var L,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(F?_((function(){y.valueOf.call(n)})):f(n)!=$)?v(new N(I(e)),n,S):I(e)},E=r?x(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),T=0;E.length>T;T++)d(N,L=E[T])&&!d(S,L)&&w(S,L,k(N,L));S.prototype=y,y.constructor=S,c(o,$,S)}},846:function(t,e,n){"use strict";n.r(e);n(845),n(55),n(77),n(847),n(228),n(104),n(48),n(161);var r={name:"CBN",props:{value:{type:[String,Number],required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},o=(n(849),n(10)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"4ae9153e",null);e.default=component.exports},847:function(t,e,n){"use strict";var r=n(11),o=n(843).trim;r({target:"String",proto:!0,forced:n(848)("trim")},{trim:function(){return o(this)}})},848:function(t,e,n){var r=n(16),o=n(842);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},849:function(t,e,n){"use strict";n(844)},850:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,".cbn-decimal[data-v-4ae9153e]{\n  margin-right:.25rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-4ae9153e]:last-child{\n  margin-right:0\n}",""]),r.locals={},t.exports=r},852:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconSolidCursorClick"},o=n(10),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z","clip-rule":"evenodd"}})])}),[],!1,null,"32f487c0",null);e.default=component.exports},853:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconSolidGift"},o=n(10),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z","clip-rule":"evenodd"}}),t._v(" "),n("path",{attrs:{d:"M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"}})])}),[],!1,null,"3d7b52f6",null);e.default=component.exports},870:function(t,e,n){var content=n(900);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("0e3b39e1",content,!0,{sourceMap:!1})},888:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconOutlineSparkles"},o=n(10),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"}})])}),[],!1,null,"75589b4a",null);e.default=component.exports},899:function(t,e,n){"use strict";n(870)},900:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,".hdf-stat div dt[data-v-169ea9e5]{\n  --tw-text-opacity:1;\n  color:rgba(204, 251, 241, var(--tw-text-opacity))\n}\ntbody tr[data-v-169ea9e5]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(19, 78, 74, var(--tw-bg-opacity))\n}\ntbody tr:hover td[data-v-169ea9e5]{\n  --tw-text-opacity:1;\n  color:rgba(153, 246, 228, var(--tw-text-opacity))\n}",""]),r.locals={},t.exports=r},934:function(t,e,n){"use strict";n.r(e);var r,o=n(2),l=(n(22),n(104),n(23),n(64)),c=n.n(l),d=n(69),f=c.a.utils.BN,v={name:"SFeeLotto",data:function(){return{counter:0,amount:"0",marketValue:"0",transactions:[]}},computed:{explorer:function(){return d.a}},watch:{"$store.state.bsc.blockNumber":(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load();case 2:case"end":return e.stop()}}),e)})))()},methods:{load:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,l,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.state.bsc.token().getPastEvents("Lotto",{fromBlock:0,toBlock:"latest"}).catch(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.error(">>> SFeeLotto:",e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:if(n=e.sent){for(n.reverse(),r=new f,l=[],i=0;i<n.length;i++)r=r.add(new f(n[i].returnValues.amount)),i<10&&l.push({blockNumber:n[i].blockNumber,txHash:n[i].transactionHash,account:n[i].returnValues.account,amount:n[i].returnValues.amount});t.transactions=l,t.counter=n.length,t.amount=r.toString(),t.marketValue=r.mul(t.$store.state.bsc.metadata.bnPrice).div(t.$store.state.bsc.metadata.bnDiv).toString()}case 4:case"end":return e.stop()}}),e)})))()}}},h=(n(899),n(10)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-section-fee"},[n("div",{staticClass:"text-center"},[n("span",{staticClass:"span-icon bg-teal-50 text-teal-700"},[n("HeroIconOutlineSparkles",{staticClass:"h-8 w-8"})],1)]),t._v(" "),n("LAutoWidth",{staticClass:"auto-layout"},[n("main",[n("div",{staticClass:"header2"},[n("h2",{staticClass:"text-teal-400"},[t._v("\n          "+t._s(t.$t("sFeeLotto.title"))+"\n        ")]),t._v(" "),n("p",[t._v("\n          "+t._s(t.$t("sFeeLotto.text"))+"\n        ")])]),t._v(" "),n("div",{staticClass:"body1 to-blue-900 from-teal-900 text-teal-300"},[n("h3",[t._v("\n          "+t._s(t.$t("sFee.forEachTransaction"))+"\n        ")]),t._v(" "),n("p",[t._v("\n          "+t._s(t.$t("sFee.take"))+"\n          "),t.$store.state.bsc.takerFee.lotto>"0"?n("span",[t._v("\n            "+t._s(t.$store.state.bsc.takerFee.lotto)+"%\n            "+t._s(t.$t("sFee.fromTaker"))+"\n          ")]):t._e(),t._v(" "),t.$store.state.bsc.makerFee.lotto>"0"?n("span",[t._v("\n            "+t._s(t.$store.state.bsc.makerFee.lotto)+"%\n            "+t._s(t.$t("sFee.fromMaker"))+"\n          ")]):t._e(),t._v(" "),t.$store.state.bsc.whaleFee.lotto>"0"?n("span",[t._v("\n            "+t._s(t.$store.state.bsc.whaleFee.lotto)+"%\n            "+t._s(t.$t("sFee.fromWhale"))+"\n          ")]):t._e(),t._v("\n          "+t._s(t.$t("sFeeLotto.takeThen__"))+"\n          "),n("CBN",{attrs:{value:String(t.$store.state.bsc.global.lottoThreshold),token:!0}}),t._v("\n          HyperDeFi"+t._s(t.$t("sFeeLotto.takeThen2__"))+"\n          "),t.$store.state.bsc.metadata.holders>"0"?n("span",[t._v("\n            "+t._s(t.$t("sFeeLotto.now__"))+" 1/"),n("CBN",{attrs:{value:String(t.$store.state.bsc.metadata.holders)}}),t._v("\n            "+t._s(t.$t("sFeeLotto.chance__"))+"\n          ")],1):t._e()],1),t._v(" "),t.counter?n("div",{staticClass:"mt-5 inline-flex rounded-md shadow"},[n("a",{staticClass:"hdf-a-track bg-teal-700 hover:bg-teal-600 space-x-2",attrs:{href:"#"}},[n("HeroIconSolidCursorClick",{staticClass:"h-5 w-5"}),t._v(" "),n("span",[t._v("\n              "+t._s(t.$t("sFee.trackAll"))+"\n              "+t._s(t.counter)+"\n              "+t._s(t.$t("sFeeLotto.trackLottoTransfers"))+"\n            ")])],1)]):t._e()])]),t._v(" "),t.counter?n("dl",{staticClass:"hdf-stat lg:max-w-6xl grid grid-cols-1 lg:grid-cols-2"},[n("div",[n("dt",[t._v("\n          "+t._s(t.$t("sFeeLotto.statTotalLotto"))+"\n        ")]),t._v(" "),n("dd",[n("CBN",{attrs:{value:t.amount,token:!0}})],1)]),t._v(" "),n("div",[n("dt",[t._v("\n          "+t._s(t.$t("sFeeLotto.statLottoTransfers"))+"\n        ")]),t._v(" "),n("dd",[n("CBN",{attrs:{value:t.counter}})],1)])]):t._e(),t._v(" "),t.transactions.length?n("div",[n("h6",{staticClass:"mt-12 md:mt-16 ml-2 text-sm font-semibold text-teal-500 tracking-wide uppercase"},[t._v("\n        "+t._s(t.$t("txTable.latest"))+"\n        "+t._s(t.transactions.length)+"\n        "+t._s(t.$t("sFeeLotto.lottoHistory"))+"\n      ")]),t._v(" "),n("div",{staticClass:"md:hidden mt-4"},[n("ul",{staticClass:"hdf-tx-ul"},t._l(t.transactions,(function(e){return n("li",[n("span",{staticClass:"span-icon-wrap"},[n("HeroIconSolidGift")],1),t._v(" "),n("div",{staticClass:"div-body"},[n("div",[n("h4",[n("CBN",{attrs:{value:e.amount}}),t._v("\n                  HyperDeFi\n                ")],1),t._v(" "),n("p",[n("a",{attrs:{target:"_blank",href:t.explorer.exploreTx(e.txHash)}},[t._v("\n                    #"),n("CBN",{attrs:{value:e.blockNumber}})],1)])]),t._v(" "),n("p",{staticClass:"p-tx"},[n("a",{attrs:{target:"_blank",href:t.explorer.exploreToken4address(e.account)}},[t._v("\n                  "+t._s(e.account.slice(0,8))+"..."+t._s(e.account.slice(-4))+"\n                ")])])])])})),0)]),t._v(" "),n("div",{staticClass:"hidden mt-4 overflow-x-auto md:block"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"hdf-tx-table"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n                  "+t._s(t.$t("txTable.block"))+"\n                ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                  "+t._s(t.$t("txTable.address"))+"\n                ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                  "+t._s(t.$t("txTable.amount"))+"\n                ")])])]),t._v(" "),n("tbody",t._l(t.transactions,(function(e){return n("tr",[n("td",[n("a",{attrs:{target:"_blank",href:t.explorer.exploreTx(e.txHash)}},[t._v("\n                    #"),n("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),n("td",{staticClass:"font-mono"},[n("a",{attrs:{target:"_blank",href:t.explorer.exploreToken4address(e.account)}},[t._v(t._s(e.account))])]),t._v(" "),n("td",[n("CBN",{attrs:{value:e.amount,token:!0,padding:2}}),t._v("\n                  HyperDeFi\n                ")],1)])})),0)])])])])]):t._e()])],1)}),[],!1,null,"169ea9e5",null);e.default=component.exports;installComponents(component,{HeroIconOutlineSparkles:n(888).default,CBN:n(846).default,HeroIconSolidCursorClick:n(852).default,HeroIconSolidGift:n(853).default,LAutoWidth:n(160).default})}}]);