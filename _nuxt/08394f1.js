(window.webpackJsonp=window.webpackJsonp||[]).push([[97,47,70,72],{1032:function(t,e,n){"use strict";n.r(e);var r,o=n(0),l=(n(21),n(778)),c=n.n(l),d=n(75),m=n(135),f={name:"SFeeFomo",data:function(){return{oCounter:0,oAmount:"0",oMarketValue:"0",oTransactions:[],iCounter:0,iAmount:"0",iMarketValue:"0",timerStep:{h:"0",m:"0",s:"0"}}},computed:{explorer:function(){return d.a},next:function(){return this.isZero(this.$store.state.bsc.fomo.next)?"0x...":this.$store.state.bsc.fomo.next},fomo:function(){return this.$store.state.bsc.fomo}},watch:{"$store.state.bsc.blockNumber":(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.wait(1e3);case 2:return t.next=4,this.load();case 4:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load();case 2:case"end":return e.stop()}}),e)})))()},methods:{isZero:function(address){return address===this.$store.state.bsc.globalAccounts.zero},load:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.a.duration(1e3*t.$store.state.bsc.fomo.timestampStep),t.timerStep.s=n.seconds(),t.timerStep.m=n.minutes(),t.timerStep.h=n.hours(),e.next=6,t.$nuxt.context.app.db.transfer.where({fromAccount:t.$store.state.bsc.globalAccounts.fomo}).reverse().limit(10).toArray();case 6:t.oTransactions=e.sent;case 7:case"end":return e.stop()}}),e)})))()}}},h=(n(990),n(5)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-section-fee"},[n("div",{staticClass:"text-center"},[n("span",{staticClass:"span-icon bg-orange-50 text-orange-700"},[n("HeroIconOutlineClock",{staticClass:"h-8 w-8"})],1)]),t._v(" "),n("LAutoWidth",{staticClass:"auto-layout"},[n("main",[n("div",{staticClass:"header1"},[n("h2",{staticClass:"text-orange-400"},[t._v("\n          "+t._s(t.$t("sFeeFomo.title"))+"\n        ")]),t._v(" "),n("p",[t._v("\n          "+t._s(t.$t("sFeeFomo.text"))+"\n        ")])]),t._v(" "),n("div",{staticClass:"body2 to-orange-900 from-yellow-800 text-orange-300"},[n("h3",[t._v("\n          "+t._s(t.$t("sFee.forEachTransaction"))+"\n        ")]),t._v(" "),n("p",[t._v("\n          "+t._s(t.$t("sFee.take"))+"\n          "),t.$store.state.bsc.takerFee.fomo>"0"?n("span",[t._v("\n            "+t._s(t.$store.state.bsc.takerFee.fomo)+"%\n            "+t._s(t.$t("sFee.fromTaker"))+"\n          ")]):t._e(),t._v(" "),t.$store.state.bsc.makerFee.fomo>"0"?n("span",[t._v("\n            "+t._s(t.$store.state.bsc.makerFee.fomo)+"%\n            "+t._s(t.$t("sFee.fromMaker"))+"\n          ")]):t._e(),t._v(" "),t.$store.state.bsc.whaleFee.fomo>"0"?n("span",[t._v("\n            "+t._s(t.$store.state.bsc.whaleFee.fomo)+"%\n            "+t._s(t.$t("sFee.fromWhale"))+"\n          ")]):t._e(),t._v("\n          "+t._s(t.$t("sFeeFomo.thenDeposit__"))+"\n          "),t.timerStep.h>"0"?n("span",[t._v(t._s(t.timerStep.h)+" "+t._s(t.$t("sFeeFomo.hours")))]):t._e(),t._v(" "),t.timerStep.m>"0"?n("span",[t._v(t._s(t.timerStep.m)+" "+t._s(t.$t("sFeeFomo.minutes")))]):t._e(),t._v(" "),t.timerStep.s>"0"?n("span",[t._v(t._s(t.timerStep.s)+" "+t._s(t.$t("sFeeFomo.seconds")))]):t._e(),t._v("\n          "+t._s(t.$t("sFeeFomo.ifNoOther__"))+"\n        ")]),t._v(" "),t.$store.state.bsc.supply.fomo>"0"?n("div",{staticClass:"mt-5 inline-flex rounded-md shadow"},[n("nuxt-link",{staticClass:"hdf-a-track bg-yellow-700 hover:bg-yellow-600 space-x-2",attrs:{to:t.localeLocation("/history/fomo")}},[n("HeroIconSolidCursorClick",{staticClass:"h-5 w-5"}),t._v(" "),n("span",[t._v("\n              "+t._s(t.$t("sFee.trackAll"))+"\n              "+t._s(t.$store.state.stat.fomo.out.count+t.$store.state.stat.fomo.in.count)+"\n              "+t._s(t.$t("sFeeFomo.trackFomoTransfers"))+"\n            ")])],1)],1):t._e()])]),t._v(" "),t.$store.state.stat.fomo.out.count?n("dl",{staticClass:"hdf-stat lg:max-w-6xl grid grid-cols-1 lg:grid-cols-2"},[n("div",[n("dt",[t._v("\n          "+t._s(t.$t("sFeeFomo.statFomoPool"))+"\n        ")]),t._v(" "),n("dd",[n("CBN",{attrs:{value:t.$store.state.bsc.supply.fomo,token:!0}})],1)]),t._v(" "),n("div",[n("dt",{staticClass:"order-2 mt-1 text-base leading-6 font-medium text-yellow-100"},[t._v("\n          "+t._s(t.$t("sFeeFomo.statFomoPrizeTransfers"))+"\n        ")]),t._v(" "),n("dd",{staticClass:"order-1 text-3xl font-extrabold text-white"},[n("CBN",{attrs:{value:t.$store.state.stat.fomo.out.count}})],1)])]):t._e(),t._v(" "),t.oTransactions.length?n("div",[n("h6",{staticClass:"mt-12 md:mt-16 ml-2 text-sm font-semibold text-orange-400 tracking-wide uppercase"},[t._v("\n        "+t._s(t.$t("txTable.latest"))+"\n        "+t._s(t.oTransactions.length)+"\n        "+t._s(t.$t("sFeeFomo.fomoPrizeHistory"))+"\n      ")]),t._v(" "),n("div",{staticClass:"md:hidden mt-4"},[n("ul",{staticClass:"hdf-tx-ul"},t._l(t.oTransactions,(function(e){return n("li",[n("span",{staticClass:"span-icon-wrap"},[n("HeroIconSolidBadgeCheck")],1),t._v(" "),n("div",{staticClass:"div-body"},[n("div",[n("h4",[n("CBN",{attrs:{value:e.amount}}),t._v("\n                  HyperDeFi\n                ")],1),t._v(" "),n("p",[n("a",{attrs:{target:"_blank",href:t.explorer.exploreTx(e.txHash)}},[t._v("\n                    #"),n("CBN",{attrs:{value:e.blockNumber}})],1)])]),t._v(" "),n("p",{staticClass:"p-tx"},[n("a",{attrs:{target:"_blank",href:t.explorer.exploreToken4address(e.toAccount)}},[t._v("\n                  "+t._s(e.toAccount.slice(0,8))+"..."+t._s(e.toAccount.slice(-4))+"\n                ")])])])])})),0)]),t._v(" "),n("div",{staticClass:"hidden mt-4 overflow-x-auto md:block"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"hdf-tx-table"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n                  "+t._s(t.$t("txTable.block"))+"\n                ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                  "+t._s(t.$t("txTable.address"))+"\n                ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                  "+t._s(t.$t("txTable.amount"))+"\n                ")])])]),t._v(" "),n("tbody",t._l(t.oTransactions,(function(e){return n("tr",[n("td",[n("a",{attrs:{target:"_blank",href:t.explorer.exploreTx(e.txHash)}},[t._v("\n                    #"),n("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),n("td",{staticClass:"font-mono"},[n("a",{attrs:{target:"_blank",href:t.explorer.exploreToken4address(e.toAccount)}},[t._v(t._s(e.toAccount))])]),t._v(" "),n("td",[n("CBN",{attrs:{value:e.amount,token:!0,padding:2}}),t._v("\n                  HyperDeFi\n                ")],1)])})),0)])])])])]):t._e()])],1)}),[],!1,null,"35895604",null);e.default=component.exports;installComponents(component,{HeroIconOutlineClock:n(943).default,HeroIconSolidCursorClick:n(794).default,CBN:n(783).default,HeroIconSolidBadgeCheck:n(945).default,LAutoWidth:n(167).default})},781:function(t,e,n){var content=n(787);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("7f27037d",content,!0,{sourceMap:!1})},783:function(t,e,n){"use strict";n.r(e);n(782),n(52),n(92),n(784),n(243),n(67),n(51),n(168);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},o=(n(786),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},784:function(t,e,n){"use strict";var r=n(9),o=n(780).trim;r({target:"String",proto:!0,forced:n(785)("trim")},{trim:function(){return o(this)}})},785:function(t,e,n){var r=n(15),o=n(779);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},786:function(t,e,n){"use strict";n(781)},787:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},794:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconSolidCursorClick"},o=n(5),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z","clip-rule":"evenodd"}})])}),[],!1,null,"32f487c0",null);e.default=component.exports},942:function(t,e,n){var map={"./af":797,"./af.js":797,"./ar":798,"./ar-dz":799,"./ar-dz.js":799,"./ar-kw":800,"./ar-kw.js":800,"./ar-ly":801,"./ar-ly.js":801,"./ar-ma":802,"./ar-ma.js":802,"./ar-sa":803,"./ar-sa.js":803,"./ar-tn":804,"./ar-tn.js":804,"./ar.js":798,"./az":805,"./az.js":805,"./be":806,"./be.js":806,"./bg":807,"./bg.js":807,"./bm":808,"./bm.js":808,"./bn":809,"./bn-bd":810,"./bn-bd.js":810,"./bn.js":809,"./bo":811,"./bo.js":811,"./br":812,"./br.js":812,"./bs":813,"./bs.js":813,"./ca":814,"./ca.js":814,"./cs":815,"./cs.js":815,"./cv":816,"./cv.js":816,"./cy":817,"./cy.js":817,"./da":818,"./da.js":818,"./de":819,"./de-at":820,"./de-at.js":820,"./de-ch":821,"./de-ch.js":821,"./de.js":819,"./dv":822,"./dv.js":822,"./el":823,"./el.js":823,"./en-au":824,"./en-au.js":824,"./en-ca":825,"./en-ca.js":825,"./en-gb":826,"./en-gb.js":826,"./en-ie":827,"./en-ie.js":827,"./en-il":828,"./en-il.js":828,"./en-in":829,"./en-in.js":829,"./en-nz":830,"./en-nz.js":830,"./en-sg":831,"./en-sg.js":831,"./eo":832,"./eo.js":832,"./es":833,"./es-do":834,"./es-do.js":834,"./es-mx":835,"./es-mx.js":835,"./es-us":836,"./es-us.js":836,"./es.js":833,"./et":837,"./et.js":837,"./eu":838,"./eu.js":838,"./fa":839,"./fa.js":839,"./fi":840,"./fi.js":840,"./fil":841,"./fil.js":841,"./fo":842,"./fo.js":842,"./fr":843,"./fr-ca":844,"./fr-ca.js":844,"./fr-ch":845,"./fr-ch.js":845,"./fr.js":843,"./fy":846,"./fy.js":846,"./ga":847,"./ga.js":847,"./gd":848,"./gd.js":848,"./gl":849,"./gl.js":849,"./gom-deva":850,"./gom-deva.js":850,"./gom-latn":851,"./gom-latn.js":851,"./gu":852,"./gu.js":852,"./he":853,"./he.js":853,"./hi":854,"./hi.js":854,"./hr":855,"./hr.js":855,"./hu":856,"./hu.js":856,"./hy-am":857,"./hy-am.js":857,"./id":858,"./id.js":858,"./is":859,"./is.js":859,"./it":860,"./it-ch":861,"./it-ch.js":861,"./it.js":860,"./ja":862,"./ja.js":862,"./jv":863,"./jv.js":863,"./ka":864,"./ka.js":864,"./kk":865,"./kk.js":865,"./km":866,"./km.js":866,"./kn":867,"./kn.js":867,"./ko":868,"./ko.js":868,"./ku":869,"./ku.js":869,"./ky":870,"./ky.js":870,"./lb":871,"./lb.js":871,"./lo":872,"./lo.js":872,"./lt":873,"./lt.js":873,"./lv":874,"./lv.js":874,"./me":875,"./me.js":875,"./mi":876,"./mi.js":876,"./mk":877,"./mk.js":877,"./ml":878,"./ml.js":878,"./mn":879,"./mn.js":879,"./mr":880,"./mr.js":880,"./ms":881,"./ms-my":882,"./ms-my.js":882,"./ms.js":881,"./mt":883,"./mt.js":883,"./my":884,"./my.js":884,"./nb":885,"./nb.js":885,"./ne":886,"./ne.js":886,"./nl":887,"./nl-be":888,"./nl-be.js":888,"./nl.js":887,"./nn":889,"./nn.js":889,"./oc-lnc":890,"./oc-lnc.js":890,"./pa-in":891,"./pa-in.js":891,"./pl":892,"./pl.js":892,"./pt":893,"./pt-br":894,"./pt-br.js":894,"./pt.js":893,"./ro":895,"./ro.js":895,"./ru":896,"./ru.js":896,"./sd":897,"./sd.js":897,"./se":898,"./se.js":898,"./si":899,"./si.js":899,"./sk":900,"./sk.js":900,"./sl":901,"./sl.js":901,"./sq":902,"./sq.js":902,"./sr":903,"./sr-cyrl":904,"./sr-cyrl.js":904,"./sr.js":903,"./ss":905,"./ss.js":905,"./sv":906,"./sv.js":906,"./sw":907,"./sw.js":907,"./ta":908,"./ta.js":908,"./te":909,"./te.js":909,"./tet":910,"./tet.js":910,"./tg":911,"./tg.js":911,"./th":912,"./th.js":912,"./tk":913,"./tk.js":913,"./tl-ph":914,"./tl-ph.js":914,"./tlh":915,"./tlh.js":915,"./tr":916,"./tr.js":916,"./tzl":917,"./tzl.js":917,"./tzm":918,"./tzm-latn":919,"./tzm-latn.js":919,"./tzm.js":918,"./ug-cn":920,"./ug-cn.js":920,"./uk":921,"./uk.js":921,"./ur":922,"./ur.js":922,"./uz":923,"./uz-latn":924,"./uz-latn.js":924,"./uz.js":923,"./vi":925,"./vi.js":925,"./x-pseudo":926,"./x-pseudo.js":926,"./yo":927,"./yo.js":927,"./zh-cn":928,"./zh-cn.js":928,"./zh-hk":929,"./zh-hk.js":929,"./zh-mo":930,"./zh-mo.js":930,"./zh-tw":931,"./zh-tw.js":931};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=942},943:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconOutlineClock"},o=n(5),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}})])}),[],!1,null,"1976f32a",null);e.default=component.exports},945:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconSolidBadgeCheck"},o=n(5),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"}})])}),[],!1,null,"03c350e6",null);e.default=component.exports},956:function(t,e,n){var content=n(991);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("dec04e8c",content,!0,{sourceMap:!1})},990:function(t,e,n){"use strict";n(956)},991:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.hdf-stat div dt[data-v-35895604]{\n  --tw-text-opacity:1;\n  color:rgba(253, 230, 138, var(--tw-text-opacity))\n}\ntbody tr[data-v-35895604]:nth-child(odd){\n  --tw-bg-opacity:1;\n  background-color:rgba(55, 65, 81, var(--tw-bg-opacity))\n}\ntbody tr[data-v-35895604]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(124, 45, 18, var(--tw-bg-opacity))\n}\ntbody tr:hover td[data-v-35895604]{\n  --tw-text-opacity:1;\n  color:rgba(254, 215, 170, var(--tw-text-opacity))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r}}]);