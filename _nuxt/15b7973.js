(window.webpackJsonp=window.webpackJsonp||[]).push([[57,7,9,48,70],{842:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},843:function(t,e,n){var r=n(44),o="["+n(842)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(l,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},844:function(t,e,n){var content=n(850);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("fb44e342",content,!0,{sourceMap:!1})},845:function(t,e,n){"use strict";var r=n(27),o=n(19),c=n(131),l=n(37),d=n(28),f=n(88),v=n(227),h=n(129),m=n(16),_=n(89),x=n(130).f,k=n(70).f,y=n(32).f,w=n(843).trim,C="Number",N=o.Number,$=N.prototype,A=f(_($))==C,I=function(t){var e,n,r,o,c,l,d,code,f=h(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=w(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(c(C,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var E,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(A?m((function(){$.valueOf.call(n)})):f(n)!=C)?v(new N(I(e)),n,S):I(e)},B=r?x(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),H=0;B.length>H;H++)d(N,E=B[H])&&!d(S,E)&&y(S,E,k(N,E));S.prototype=$,$.constructor=S,l(o,C,S)}},846:function(t,e,n){"use strict";n.r(e);n(845),n(55),n(77),n(847),n(228),n(104),n(48),n(161);var r={name:"CBN",props:{value:{type:[String,Number],required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},o=(n(849),n(10)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"4ae9153e",null);e.default=component.exports},847:function(t,e,n){"use strict";var r=n(11),o=n(843).trim;r({target:"String",proto:!0,forced:n(848)("trim")},{trim:function(){return o(this)}})},848:function(t,e,n){var r=n(16),o=n(842);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},849:function(t,e,n){"use strict";n(844)},850:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,".cbn-decimal[data-v-4ae9153e]{\n  margin-right:.25rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-4ae9153e]:last-child{\n  margin-right:0\n}",""]),r.locals={},t.exports=r},853:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconSolidGift"},o=n(10),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z","clip-rule":"evenodd"}}),t._v(" "),n("path",{attrs:{d:"M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"}})])}),[],!1,null,"3d7b52f6",null);e.default=component.exports},855:function(t,e,n){"use strict";n.r(e);var r={name:"CH2"},o=n(10),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-ch2"},[t.$slots.tag?n("header",[t._t("tag")],2):t._e(),t._v(" "),n("h2",[t._t("default")],2),t._v(" "),t.$slots.desc?n("main",[t._t("desc")],2):t._e()])}),[],!1,null,"2d1f6548",null);e.default=component.exports},867:function(t,e,n){var content=n(894);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("1f7048c4",content,!0,{sourceMap:!1})},893:function(t,e,n){"use strict";n(867)},894:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,".hdf-stat div dt[data-v-1cc6666e]{\n  --tw-text-opacity:1;\n  color:rgba(199, 210, 254, var(--tw-text-opacity))\n}\ntbody tr[data-v-1cc6666e]:nth-child(odd){\n  --tw-bg-opacity:1;\n  background-color:rgba(55, 65, 81, var(--tw-bg-opacity))\n}\ntbody tr[data-v-1cc6666e]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(76, 29, 149, var(--tw-bg-opacity))\n}\ntbody tr:hover td[data-v-1cc6666e]{\n  --tw-text-opacity:1;\n  color:rgba(221, 214, 254, var(--tw-text-opacity))\n}",""]),r.locals={},t.exports=r},931:function(t,e,n){"use strict";n.r(e);var r,o=n(2),c=(n(23),n(22),n(104),n(64)),l=n.n(c),d=n(69),f=l.a.utils.BN,v={name:"SAirdrop",data:function(){return{counter:0,amount:"0",transactions:[]}},computed:{hdfLink:function(){return d.a},summed:function(){return new f(this.$store.state.bsc.supply.airdrop).add(new f(this.amount)).toString()},summedMarketValue:function(){return new f(this.summed).mul(this.$store.state.bsc.metadata.bnPrice).div(this.$store.state.bsc.metadata.bnDiv).toString()}},watch:{"$store.state.bsc.blockNumber":(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load();case 2:case"end":return e.stop()}}),e)})))()},methods:{load:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,c,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.state.bsc.token().getPastEvents("Transfer",{filter:{from:t.$store.state.bsc.globalAccounts.airdrop},fromBlock:0,toBlock:"latest"}).catch(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.error(">>> SAirdrop:",e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:if(n=e.sent){for(n.reverse(),r=new f,c=[],i=0;i<n.length;i++)r=r.add(new f(n[i].returnValues.value)),i<10&&c.push({blockNumber:n[i].blockNumber,txHash:n[i].transactionHash,account:n[i].returnValues.to,amount:n[i].returnValues.value});t.transactions=c,t.counter=n.length,t.amount=r.toString()}case 4:case"end":return e.stop()}}),e)})))()}}},h=(n(893),n(10)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LAutoWidth",{staticClass:"py-16 px-4 sm:py-24"},[n("CH2",{scopedSlots:t._u([{key:"tag",fn:function(){return[t._v("\n          "+t._s(t.$t("sAirdrop.tag"))+"\n        ")]},proxy:!0},{key:"desc",fn:function(){return[t._v("\n          "+t._s(t.$t("sAirdrop.descUpTo"))+"\n          "),n("CBN",{attrs:{value:String(t.$store.state.bsc.global.airdropMax),token:!0}}),t._v(" HyperDeFi\n          "+t._s(t.$t("sAirdrop.descUpPerAddress_"))+"\n          "+t._s(t.$t("sAirdrop.descWill__"))+"\n          "),n("CBN",{attrs:{value:t.summed,token:!0}}),t._v(" HyperDeFi\n          "+t._s(t.$t("sAirdrop.descFirstCame__"))+"\n        ")]},proxy:!0}])},[n("span",{staticClass:"text-violet-400"},[t._v("\n          "+t._s(t.$t("sAirdrop.title"))+"\n        ")]),t._v(" "),n("span",["0"===t.$store.state.bsc.supply.airdrop?n("span",[t._v("\n            "+t._s(t.$t("sAirdrop.titleEnded"))+"\n          ")]):n("span",[t._v("\n            "+t._s(t.$t("sAirdrop.titleOngoing"))+"\n          ")])])]),t._v(" "),n("dl",{staticClass:"hdf-stat grid grid-cols-1 lg:max-w-7xl",class:{"xl:grid-cols-3":t.counter,"xl:grid-cols-1":!t.counter}},[n("div",[n("dt",[t._v("\n            "+t._s(t.$t("sAirdrop.remaining"))+"\n          ")]),t._v(" "),n("dd",[n("CBN",{attrs:{value:String(t.$store.state.bsc.supply.airdrop),token:!0}})],1)]),t._v(" "),t.counter?n("div",[n("dt",[t._v("\n            "+t._s(t.$t("sAirdrop.airdropped"))+"\n          ")]),t._v(" "),n("dd",[n("CBN",{attrs:{value:t.amount,token:!0}})],1)]):t._e(),t._v(" "),t.counter?n("div",[n("dt",[t._v("\n            "+t._s(t.$t("sAirdrop.airdropTransfer"))+"\n          ")]),t._v(" "),n("dd",[n("CBN",{attrs:{value:t.counter}})],1)]):t._e()]),t._v(" "),t.transactions.length?n("div",[n("h6",{staticClass:"mt-12 md:mt-16 ml-2 text-sm font-semibold text-violet-400 tracking-wide uppercase"},[t._v("\n          "+t._s(t.$t("txTable.latest"))+"\n          "+t._s(t.transactions.length)+"\n          "+t._s(t.$t("sAirdrop.txAirdropHistory"))+"\n        ")]),t._v(" "),n("div",{staticClass:"md:hidden mt-4"},[n("ul",{staticClass:"hdf-tx-ul"},t._l(t.transactions,(function(e){return n("li",[n("span",{staticClass:"span-icon-wrap"},[n("HeroIconSolidGift")],1),t._v(" "),n("div",{staticClass:"div-body"},[n("div",[n("h4",[n("CBN",{attrs:{value:e.amount}}),t._v("\n                    HyperDeFi\n                  ")],1),t._v(" "),n("p",[n("a",{attrs:{target:"_blank",href:t.hdfLink.exploreTx(e.txHash)}},[t._v("\n                      #"),n("CBN",{attrs:{value:e.blockNumber}})],1)])]),t._v(" "),n("p",{staticClass:"p-tx"},[n("a",{attrs:{target:"_blank",href:t.hdfLink.exploreToken4address(e.account)}},[t._v("\n                    "+t._s(e.account.slice(0,8))+"..."+t._s(e.account.slice(-4))+"\n                  ")])])])])})),0)]),t._v(" "),n("div",{staticClass:"hidden mt-4 overflow-x-auto md:block"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"hdf-tx-table"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t("txTable.block"))+"\n                  ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t("txTable.address"))+"\n                  ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                    "+t._s(t.$t("txTable.amount"))+"\n                  ")])])]),t._v(" "),n("tbody",t._l(t.transactions,(function(e){return n("tr",[n("td",[n("a",{attrs:{target:"_blank",href:t.hdfLink.exploreTx(e.txHash)}},[t._v("\n                      #"),n("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),n("td",{staticClass:"font-mono"},[n("a",{attrs:{target:"_blank",href:t.hdfLink.exploreToken4address(e.account)}},[t._v(t._s(e.account))])]),t._v(" "),n("td",[n("CBN",{attrs:{value:e.amount,token:!0,padding:2}}),t._v("\n                    HyperDeFi\n                  ")],1)])})),0)])])])])]):t._e()],1)],1)}),[],!1,null,"1cc6666e",null);e.default=component.exports;installComponents(component,{CBN:n(846).default,CH2:n(855).default,HeroIconSolidGift:n(853).default,LAutoWidth:n(160).default})}}]);