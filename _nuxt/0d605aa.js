(window.webpackJsonp=window.webpackJsonp||[]).push([[82,35,57,59],{1015:function(t,e,n){"use strict";n.r(e);var r,o=n(1),l=(n(21),n(56)),c=n.n(l),d=n(771),m=n.n(d),f=n(75),h=(c.a.utils.BN,{name:"SFeeFomo",data:function(){return{oCounter:0,oAmount:"0",oMarketValue:"0",oTransactions:[],iCounter:0,iAmount:"0",iMarketValue:"0",timerStep:{h:"0",m:"0",s:"0"}}},computed:{explorer:function(){return f.a},next:function(){return this.isZero(this.$store.state.bsc.fomo.next)?"0x...":this.$store.state.bsc.fomo.next},fomo:function(){return this.$store.state.bsc.fomo}},watch:{"$store.state.bsc.blockNumber":(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load();case 2:case"end":return e.stop()}}),e)})))()},methods:{isZero:function(address){return address===this.$store.state.bsc.globalAccounts.zero},load:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.a.duration(1e3*t.$store.state.bsc.fomo.timestampStep),t.timerStep.s=n.seconds(),t.timerStep.m=n.minutes(),t.timerStep.h=n.hours(),e.next=6,t.$nuxt.context.app.db.transfer.where({fromAccount:t.$store.state.bsc.globalAccounts.fomo}).reverse().limit(10).toArray();case 6:t.oTransactions=e.sent;case 7:case"end":return e.stop()}}),e)})))()}}}),v=(n(977),n(5)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-section-fee"},[n("div",{staticClass:"text-center"},[n("span",{staticClass:"span-icon bg-orange-50 text-orange-700"},[n("HeroIconOutlineClock",{staticClass:"h-8 w-8"})],1)]),t._v(" "),n("LAutoWidth",{staticClass:"auto-layout"},[n("main",[n("div",{staticClass:"header1"},[n("h2",{staticClass:"text-orange-400"},[t._v("\n          "+t._s(t.$t("sFeeFomo.title"))+"\n        ")]),t._v(" "),n("p",[t._v("\n          "+t._s(t.$t("sFeeFomo.text"))+"\n        ")])]),t._v(" "),n("div",{staticClass:"body2 to-orange-900 from-yellow-800 text-orange-300"},[n("h3",[t._v("\n          "+t._s(t.$t("sFee.forEachTransaction"))+"\n        ")]),t._v(" "),n("p",[t._v("\n          "+t._s(t.$t("sFee.take"))+"\n          "),t.$store.state.bsc.takerFee.fomo>"0"?n("span",[t._v("\n            "+t._s(t.$store.state.bsc.takerFee.fomo)+"%\n            "+t._s(t.$t("sFee.fromTaker"))+"\n          ")]):t._e(),t._v(" "),t.$store.state.bsc.makerFee.fomo>"0"?n("span",[t._v("\n            "+t._s(t.$store.state.bsc.makerFee.fomo)+"%\n            "+t._s(t.$t("sFee.fromMaker"))+"\n          ")]):t._e(),t._v(" "),t.$store.state.bsc.whaleFee.fomo>"0"?n("span",[t._v("\n            "+t._s(t.$store.state.bsc.whaleFee.fomo)+"%\n            "+t._s(t.$t("sFee.fromWhale"))+"\n          ")]):t._e(),t._v("\n          "+t._s(t.$t("sFeeFomo.thenDeposit__"))+"\n          "),t.timerStep.h>"0"?n("span",[t._v(t._s(t.timerStep.h)+" "+t._s(t.$t("sFeeFomo.hours")))]):t._e(),t._v(" "),t.timerStep.m>"0"?n("span",[t._v(t._s(t.timerStep.m)+" "+t._s(t.$t("sFeeFomo.minutes")))]):t._e(),t._v(" "),t.timerStep.s>"0"?n("span",[t._v(t._s(t.timerStep.s)+" "+t._s(t.$t("sFeeFomo.seconds")))]):t._e(),t._v("\n          "+t._s(t.$t("sFeeFomo.ifNoOther__"))+"\n        ")]),t._v(" "),t.$store.state.bsc.supply.fomo>"0"?n("div",{staticClass:"mt-5 inline-flex rounded-md shadow"},[n("nuxt-link",{staticClass:"hdf-a-track bg-yellow-700 hover:bg-yellow-600 space-x-2",attrs:{to:t.localeLocation("/history/fomo")}},[n("HeroIconSolidCursorClick",{staticClass:"h-5 w-5"}),t._v(" "),n("span",[t._v("\n              "+t._s(t.$t("sFee.trackAll"))+"\n              "+t._s(t.$store.state.stat.fomo.out.count+t.$store.state.stat.fomo.in.count)+"\n              "+t._s(t.$t("sFeeFomo.trackFomoTransfers"))+"\n            ")])],1)],1):t._e()])]),t._v(" "),t.$store.state.stat.fomo.out.count?n("dl",{staticClass:"hdf-stat lg:max-w-6xl grid grid-cols-1 lg:grid-cols-2"},[n("div",[n("dt",[t._v("\n          "+t._s(t.$t("sFeeFomo.statFomoPool"))+"\n        ")]),t._v(" "),n("dd",[n("CBN",{attrs:{value:t.$store.state.bsc.supply.fomo,token:!0}})],1)]),t._v(" "),n("div",[n("dt",{staticClass:"order-2 mt-1 text-base leading-6 font-medium text-yellow-100"},[t._v("\n          "+t._s(t.$t("sFeeFomo.statFomoPrizeTransfers"))+"\n        ")]),t._v(" "),n("dd",{staticClass:"order-1 text-3xl font-extrabold text-white"},[n("CBN",{attrs:{value:t.$store.state.stat.fomo.out.count}})],1)])]):t._e(),t._v(" "),t.oTransactions.length?n("div",[n("h6",{staticClass:"mt-12 md:mt-16 ml-2 text-sm font-semibold text-orange-400 tracking-wide uppercase"},[t._v("\n        "+t._s(t.$t("txTable.latest"))+"\n        "+t._s(t.oTransactions.length)+"\n        "+t._s(t.$t("sFeeFomo.fomoPrizeHistory"))+"\n      ")]),t._v(" "),n("div",{staticClass:"md:hidden mt-4"},[n("ul",{staticClass:"hdf-tx-ul"},t._l(t.oTransactions,(function(e){return n("li",[n("span",{staticClass:"span-icon-wrap"},[n("HeroIconSolidBadgeCheck")],1),t._v(" "),n("div",{staticClass:"div-body"},[n("div",[n("h4",[n("CBN",{attrs:{value:e.amount}}),t._v("\n                  HyperDeFi\n                ")],1),t._v(" "),n("p",[n("a",{attrs:{target:"_blank",href:t.explorer.exploreTx(e.txHash)}},[t._v("\n                    #"),n("CBN",{attrs:{value:e.blockNumber}})],1)])]),t._v(" "),n("p",{staticClass:"p-tx"},[n("a",{attrs:{target:"_blank",href:t.explorer.exploreToken4address(e.toAccount)}},[t._v("\n                  "+t._s(e.toAccount.slice(0,8))+"..."+t._s(e.toAccount.slice(-4))+"\n                ")])])])])})),0)]),t._v(" "),n("div",{staticClass:"hidden mt-4 overflow-x-auto md:block"},[n("div",{staticClass:"align-middle inline-block min-w-full"},[n("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[n("table",{staticClass:"hdf-tx-table"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("\n                  "+t._s(t.$t("txTable.block"))+"\n                ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                  "+t._s(t.$t("txTable.address"))+"\n                ")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("\n                  "+t._s(t.$t("txTable.amount"))+"\n                ")])])]),t._v(" "),n("tbody",t._l(t.oTransactions,(function(e){return n("tr",[n("td",[n("a",{attrs:{target:"_blank",href:t.explorer.exploreTx(e.txHash)}},[t._v("\n                    #"),n("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),n("td",{staticClass:"font-mono"},[n("a",{attrs:{target:"_blank",href:t.explorer.exploreToken4address(e.toAccount)}},[t._v(t._s(e.toAccount))])]),t._v(" "),n("td",[n("CBN",{attrs:{value:e.amount,token:!0,padding:2}}),t._v("\n                  HyperDeFi\n                ")],1)])})),0)])])])])]):t._e()])],1)}),[],!1,null,"e4852a0e",null);e.default=component.exports;installComponents(component,{HeroIconOutlineClock:n(935).default,HeroIconSolidCursorClick:n(783).default,CBN:n(776).default,HeroIconSolidBadgeCheck:n(937).default,LAutoWidth:n(166).default})},774:function(t,e,n){var content=n(780);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(74).default)("7f27037d",content,!0,{sourceMap:!1})},776:function(t,e,n){"use strict";n.r(e);n(775),n(51),n(92),n(777),n(242),n(65),n(52),n(167);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},o=(n(779),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},777:function(t,e,n){"use strict";var r=n(9),o=n(773).trim;r({target:"String",proto:!0,forced:n(778)("trim")},{trim:function(){return o(this)}})},778:function(t,e,n){var r=n(15),o=n(772);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},779:function(t,e,n){"use strict";n(774)},780:function(t,e,n){var r=n(73)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},783:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconSolidCursorClick"},o=n(5),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z","clip-rule":"evenodd"}})])}),[],!1,null,"32f487c0",null);e.default=component.exports},934:function(t,e,n){var map={"./af":788,"./af.js":788,"./ar":789,"./ar-dz":790,"./ar-dz.js":790,"./ar-kw":791,"./ar-kw.js":791,"./ar-ly":792,"./ar-ly.js":792,"./ar-ma":793,"./ar-ma.js":793,"./ar-sa":794,"./ar-sa.js":794,"./ar-tn":795,"./ar-tn.js":795,"./ar.js":789,"./az":796,"./az.js":796,"./be":797,"./be.js":797,"./bg":798,"./bg.js":798,"./bm":799,"./bm.js":799,"./bn":800,"./bn-bd":801,"./bn-bd.js":801,"./bn.js":800,"./bo":802,"./bo.js":802,"./br":803,"./br.js":803,"./bs":804,"./bs.js":804,"./ca":805,"./ca.js":805,"./cs":806,"./cs.js":806,"./cv":807,"./cv.js":807,"./cy":808,"./cy.js":808,"./da":809,"./da.js":809,"./de":810,"./de-at":811,"./de-at.js":811,"./de-ch":812,"./de-ch.js":812,"./de.js":810,"./dv":813,"./dv.js":813,"./el":814,"./el.js":814,"./en-au":815,"./en-au.js":815,"./en-ca":816,"./en-ca.js":816,"./en-gb":817,"./en-gb.js":817,"./en-ie":818,"./en-ie.js":818,"./en-il":819,"./en-il.js":819,"./en-in":820,"./en-in.js":820,"./en-nz":821,"./en-nz.js":821,"./en-sg":822,"./en-sg.js":822,"./eo":823,"./eo.js":823,"./es":824,"./es-do":825,"./es-do.js":825,"./es-mx":826,"./es-mx.js":826,"./es-us":827,"./es-us.js":827,"./es.js":824,"./et":828,"./et.js":828,"./eu":829,"./eu.js":829,"./fa":830,"./fa.js":830,"./fi":831,"./fi.js":831,"./fil":832,"./fil.js":832,"./fo":833,"./fo.js":833,"./fr":834,"./fr-ca":835,"./fr-ca.js":835,"./fr-ch":836,"./fr-ch.js":836,"./fr.js":834,"./fy":837,"./fy.js":837,"./ga":838,"./ga.js":838,"./gd":839,"./gd.js":839,"./gl":840,"./gl.js":840,"./gom-deva":841,"./gom-deva.js":841,"./gom-latn":842,"./gom-latn.js":842,"./gu":843,"./gu.js":843,"./he":844,"./he.js":844,"./hi":845,"./hi.js":845,"./hr":846,"./hr.js":846,"./hu":847,"./hu.js":847,"./hy-am":848,"./hy-am.js":848,"./id":849,"./id.js":849,"./is":850,"./is.js":850,"./it":851,"./it-ch":852,"./it-ch.js":852,"./it.js":851,"./ja":853,"./ja.js":853,"./jv":854,"./jv.js":854,"./ka":855,"./ka.js":855,"./kk":856,"./kk.js":856,"./km":857,"./km.js":857,"./kn":858,"./kn.js":858,"./ko":859,"./ko.js":859,"./ku":860,"./ku.js":860,"./ky":861,"./ky.js":861,"./lb":862,"./lb.js":862,"./lo":863,"./lo.js":863,"./lt":864,"./lt.js":864,"./lv":865,"./lv.js":865,"./me":866,"./me.js":866,"./mi":867,"./mi.js":867,"./mk":868,"./mk.js":868,"./ml":869,"./ml.js":869,"./mn":870,"./mn.js":870,"./mr":871,"./mr.js":871,"./ms":872,"./ms-my":873,"./ms-my.js":873,"./ms.js":872,"./mt":874,"./mt.js":874,"./my":875,"./my.js":875,"./nb":876,"./nb.js":876,"./ne":877,"./ne.js":877,"./nl":878,"./nl-be":879,"./nl-be.js":879,"./nl.js":878,"./nn":880,"./nn.js":880,"./oc-lnc":881,"./oc-lnc.js":881,"./pa-in":882,"./pa-in.js":882,"./pl":883,"./pl.js":883,"./pt":884,"./pt-br":885,"./pt-br.js":885,"./pt.js":884,"./ro":886,"./ro.js":886,"./ru":887,"./ru.js":887,"./sd":888,"./sd.js":888,"./se":889,"./se.js":889,"./si":890,"./si.js":890,"./sk":891,"./sk.js":891,"./sl":892,"./sl.js":892,"./sq":893,"./sq.js":893,"./sr":894,"./sr-cyrl":895,"./sr-cyrl.js":895,"./sr.js":894,"./ss":896,"./ss.js":896,"./sv":897,"./sv.js":897,"./sw":898,"./sw.js":898,"./ta":899,"./ta.js":899,"./te":900,"./te.js":900,"./tet":901,"./tet.js":901,"./tg":902,"./tg.js":902,"./th":903,"./th.js":903,"./tk":904,"./tk.js":904,"./tl-ph":905,"./tl-ph.js":905,"./tlh":906,"./tlh.js":906,"./tr":907,"./tr.js":907,"./tzl":908,"./tzl.js":908,"./tzm":909,"./tzm-latn":910,"./tzm-latn.js":910,"./tzm.js":909,"./ug-cn":911,"./ug-cn.js":911,"./uk":912,"./uk.js":912,"./ur":913,"./ur.js":913,"./uz":914,"./uz-latn":915,"./uz-latn.js":915,"./uz.js":914,"./vi":916,"./vi.js":916,"./x-pseudo":917,"./x-pseudo.js":917,"./yo":918,"./yo.js":918,"./zh-cn":919,"./zh-cn.js":919,"./zh-hk":920,"./zh-hk.js":920,"./zh-mo":921,"./zh-mo.js":921,"./zh-tw":922,"./zh-tw.js":922};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=934},935:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconOutlineClock"},o=n(5),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}})])}),[],!1,null,"1976f32a",null);e.default=component.exports},937:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconSolidBadgeCheck"},o=n(5),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"}})])}),[],!1,null,"03c350e6",null);e.default=component.exports},944:function(t,e,n){var content=n(978);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(74).default)("f6efd21c",content,!0,{sourceMap:!1})},977:function(t,e,n){"use strict";n(944)},978:function(t,e,n){var r=n(73)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.hdf-stat div dt[data-v-e4852a0e]{\n  --tw-text-opacity:1;\n  color:rgba(253, 230, 138, var(--tw-text-opacity))\n}\ntbody tr[data-v-e4852a0e]:nth-child(odd){\n  --tw-bg-opacity:1;\n  background-color:rgba(55, 65, 81, var(--tw-bg-opacity))\n}\ntbody tr[data-v-e4852a0e]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(124, 45, 18, var(--tw-bg-opacity))\n}\ntbody tr:hover td[data-v-e4852a0e]{\n  --tw-text-opacity:1;\n  color:rgba(254, 215, 170, var(--tw-text-opacity))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r}}]);