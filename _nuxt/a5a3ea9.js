(window.webpackJsonp=window.webpackJsonp||[]).push([[104,13,19,69],{1018:function(t,e,n){"use strict";n.r(e);var l=n(776),r=n.n(l),o=n(75),c={name:"SMarketValue",data:function(){return{launchCountdownFinished:!1,presaleCountdownFinished:!1}},computed:{moment:function(){return r.a},tokenAddress:function(){return"0x0F6F376F562F625BBe8b64B52208Eb82aD310c49"},hdfLink:function(){return o.a}},methods:{setLaunchCountdownFinished:function(t){this.launchCountdownFinished=t},setPresaleCountdownFinished:function(t){this.presaleCountdownFinished=t}}},d=n(5),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LAutoWidth",{staticClass:"relative py-12 pt-24 px-4 sm:px-8",class:{"sm:py-24":!t.$store.state.wallet.account}},[n("div",{directives:[{name:"show",rawName:"v-show",value:"0"===t.$store.state.bsc.presale.liquidityCreatedTimestamp,expression:'$store.state.bsc.presale.liquidityCreatedTimestamp === "0"'}],staticClass:"mb-12 md:mb-20 text-center"},[n("h2",{staticClass:"text-base text-violet-300 font-semibold tracking-wide uppercase"},[t._v("\n        "+t._s(t.$t("sMarketValue.presaleTag"))+"\n      ")]),t._v(" "),n("h3",{staticClass:"mt-2 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-gray-200"},[n("CCountdown",{attrs:{timestamp:1e3*t.$store.state.bsc.presale.endTimestamp,"show-ds":!0},on:{finished:t.setPresaleCountdownFinished}})],1),t._v(" "),n("p",{staticClass:"mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto"},["0"===t.$store.state.bsc.presale.liquidityCreatedTimestamp&&this.presaleCountdownFinished?n("span",[t._v("\n          "+t._s(t.$t("pPresale.theLastDeposit"))+"\n        ")]):n("span",[t._v("\n          "+t._s(t.$t("sMarketValue.presaleText"))+"\n          "+t._s(t.moment(1e3*t.$store.state.bsc.presale.endTimestamp))+"\n        ")]),t._v(" "),n("nuxt-link",{staticClass:"hdf-a-colored",attrs:{to:t.localePath("/presale")}},[t._v("\n          "+t._s(t.$t("sMarketValue.visitPresale"))+"\n        ")])],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.presaleCountdownFinished&&!t.launchCountdownFinished,expression:"presaleCountdownFinished && !launchCountdownFinished"}],staticClass:"mb-12 md:mb-20 text-center"},[n("h2",{staticClass:"text-base text-violet-300 font-semibold tracking-wide uppercase"},[t._v("\n        "+t._s(t.$t("sMarketValue.launchTag"))+"\n      ")]),t._v(" "),n("h3",{staticClass:"mt-2 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-gray-200"},[n("CCountdown",{attrs:{timestamp:1e3*t.$store.state.bsc.global.launchTimestamp,"show-ds":!0},on:{finished:t.setLaunchCountdownFinished}})],1),t._v(" "),n("p",{staticClass:"mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto"},[t._v("\n        "+t._s(t.$t("sMarketValue.launchText"))+"\n        "+t._s(t.moment(1e3*t.$store.state.bsc.global.launchTimestamp))+"\n      ")])]),t._v(" "),n("h2",{staticClass:"text-sm font-semibold text-violet-300 tracking-wide uppercase"},[t._v("\n      "+t._s(t.$t("sMarketValue.tag"))+"\n    ")]),t._v(" "),n("p",{staticClass:"mt-3 text-2xl font-extrabold text-white break-all"},[t._v("\n      "+t._s(t.$t("sMarketValue.contractAddress_"))+t._s(t.tokenAddress)+"\n    ")]),t._v(" "),n("p",{staticClass:"mt-2 text-base text-gray-400 break-all"},[t._v("\n      "+t._s(t.$t("sMarketValue.launchTime"))+"\n      "+t._s(t.moment(1e3*t.$store.state.bsc.global.launchTimestamp))+"\n    ")]),t._v(" "),n("p",{staticClass:"mt-2 text-base text-gray-400 break-all"},[t._v("\n      "+t._s(t.$t("sMarketValue.tokenNameSymbol_"))+"\n      "),n("span",{staticClass:"font-bold text-white"},[t._v(t._s(t.$store.state.bsc.metadata.tokenSymbol))]),t._v("\n      "+t._s(t.$t("sMarketValue.with"))+"\n      "),n("span",{staticClass:"font-bold text-white"},[t._v("\n        "+t._s(t.$store.state.bsc.metadata.tokenDecimals)+"\n        "+t._s(t.$t("sMarketValue.decimals"))+"\n      ")])]),t._v(" "),n("div",{staticClass:"mt-5 inline-flex rounded-md shadow"},[n("a",{staticClass:"hdf-a-track bg-violet-600 hover:bg-violet-700 space-x-2",attrs:{target:"_blank",href:t.hdfLink.exploreToken(t.tokenAddress)}},[n("HeroIconSolidCursorClick",{staticClass:"h-5 w-5"}),t._v(" "),n("span",[t._v("\n          "+t._s(t.$t("global.trackWithBSCScan"))+"\n        ")])],1)]),t._v(" "),n("div",{staticClass:"mt-12 grid grid-cols-1 gap-y-12 gap-x-6 lg:grid-cols-2"},[n("p",[n("span",{staticClass:"block text-2xl font-bold text-violet-300"},[t._v("\n          $"),n("CBN",{attrs:{value:String(t.$store.state.bsc.metadata.price),price:!0,padding:18}}),t._v(" USD\n        ")],1),t._v(" "),n("span",{staticClass:"mt-1 block text-base text-gray-300"},[n("span",{staticClass:"font-medium text-white"},[t._v("\n            "+t._s(t.$t("sMarketValue.latestPrice_"))+"\n          ")]),t._v("\n          "+t._s(t.$t("sMarketValue.providedBy"))+"\n          "),n("CPancakeTo",{staticClass:"font-medium text-violet-300"},[t._v("PancakeSwap Finance")])],1)]),t._v(" "),n("p",[n("span",{staticClass:"block text-2xl font-bold text-violet-300"},[t._v("\n          $"),n("CBN",{attrs:{value:String(t.$store.state.bsc.marketValue.totalSupply),price:!0,padding:6}}),t._v(" USD\n        ")],1),t._v(" "),n("span",{staticClass:"mt-1 block text-base text-gray-300"},[n("span",{staticClass:"font-medium text-white"},[t._v("\n            "+t._s(t.$t("sMarketValue.currentMarketValue_"))+"\n          ")]),t._v("\n          "+t._s(t.$t("sMarketValue.ofCurrentTotalSupply"))+"\n        ")])]),t._v(" "),n("p",[n("span",{staticClass:"block text-2xl font-bold text-violet-300"},[n("CBN",{attrs:{value:String(t.$store.state.bsc.supply.totalSupply),token:!0}}),t._v(" HyperDeFi\n        ")],1),t._v(" "),n("span",{staticClass:"mt-1 block text-base text-gray-300"},[n("span",{staticClass:"font-medium text-white"},[t._v("\n            "+t._s(t.$t("sMarketValue.currentTotalSupply_"))+"\n          ")]),t._v("\n          "+t._s(t.$t("sMarketValue.blackHoleIncluded"))+"\n        ")])]),t._v(" "),n("p",[n("span",{staticClass:"block text-2xl font-bold text-violet-300"},[n("CBN",{attrs:{value:t.$store.state.bsc.supply.circulating,token:!0}}),t._v(" HyperDeFi\n        ")],1),t._v(" "),n("span",{staticClass:"mt-1 block text-base text-gray-300"},[n("span",{staticClass:"font-medium text-white"},[t._v("\n            "+t._s(t.$t("sMarketValue.currentCirculating"))+"\n          ")])])]),t._v(" "),n("p",[n("span",{staticClass:"block text-2xl font-bold text-violet-300"},[n("CBN",{attrs:{value:t.$store.state.bsc.supply.cap,token:!0}}),t._v(" HyperDeFi\n        ")],1),t._v(" "),n("span",{staticClass:"mt-1 block text-base text-gray-300"},[n("span",{staticClass:"font-medium text-white"},[t._v("\n            "+t._s(t.$t("sMarketValue.totalSupplyCap_"))+"\n          ")]),t._v("\n          "+t._s(t.$t("sMarketValue.fixed"))+"\n        ")])]),t._v(" "),n("p",[n("span",{staticClass:"block text-2xl font-bold text-violet-300"},[n("CBN",{attrs:{value:t.$store.state.bsc.supply.burnedRatio,decimals:3,padding:3}}),t._v(" %\n\n        ")],1),t._v(" "),n("span",{staticClass:"mt-1 block text-base text-gray-300"},[n("span",{staticClass:"font-medium text-white"},[t._v("\n            "+t._s(t.$t("sMarketValue.burned"))+"\n          ")]),t._v(" "),n("CBN",{attrs:{value:t.$store.state.bsc.supply.burned,token:!0}}),t._v(" HyperDeFi\n          "+t._s(t.$t("sMarketValue.held__"))+"\n          "),n("a",{staticClass:"hdf-a-colored",attrs:{target:"_blank",href:t.hdfLink.exploreToken4address(t.$store.state.bsc.globalAccounts.burn)}},[t._v("\n            "+t._s(t.$t("sMarketValue.blackHole"))+"\n          ")]),t._v("\n          "+t._s(t.$t("sMarketValue.increasing_"))+"\n        ")],1)])]),t._v(" "),t.$store.state.bsc.presale.liquidityCreatedTimestamp>"0"?n("div",{staticClass:"mt-6 border-l-8 border-gray-800 py-4 px-4 leading-6 text-base text-gray-500"},[n("p",[t._v("\n        "+t._s(t.$t("sMarketValue.thereIsA__"))+"\n        "),n("CBN",{attrs:{value:t.$store.state.bsc.supply.gate,token:!0}}),t._v(" HyperDeFi\n        "+t._s(t.$t("sMarketValue.willBeMinted__"))+"\n        "),n("CBN",{attrs:{value:t.$store.state.bsc.global.liquidityBottom,token:!0}}),t._v(" HyperDeFi\n        "+t._s(t.$t("sMarketValue.executeByContract__"))+"\n        "),n("a",{staticClass:"hover:text-gray-300",attrs:{target:"_blank",href:t.hdfLink.exploreToken4address(t.$store.state.bsc.globalAccounts.zero)}},[t._v("\n          "+t._s(t.$t("sMarketValue.clickToMintHistory"))+"\n        ")])],1)]):t._e(),t._v(" "),t.$store.state.bsc.metadata.holders>"1"||!t.$store.state.wallet.account?n("div",{staticClass:"mt-12 grid grid-cols-1 gap-y-12 gap-x-6 lg:grid-cols-2"},[t.$store.state.bsc.metadata.holders>"1"?n("p",[n("span",{staticClass:"block text-2xl font-bold text-violet-300"},[n("CBN",{attrs:{value:String(t.$store.state.bsc.metadata.holders)}})],1),t._v(" "),n("span",{staticClass:"mt-1 block text-base text-gray-300"},[n("span",{staticClass:"font-medium text-white"},[t._v("\n            "+t._s(t.$t("sMarketValue.holders_"))+"\n          ")]),t._v("\n          "+t._s(t.$t("sMarketValue._holding_"))+"\n        ")])]):t._e(),t._v(" "),t.$store.state.wallet.account?t._e():n("p",{staticClass:"transition duration-300 ease-out"},[n("span",{staticClass:"block inline-flex items-center space-x-2 text-2xl font-bold text-violet-300"},[n("HeroIconSolidFire",{staticClass:"inline w-6 h-6"}),t._v(" "),n("span",[t._v("\n            "+t._s(t.$t("sMarketValue.checkYour"))+"\n            "),n("span",{staticClass:"text-gray-200"},[t._v("\n              "+t._s(t.$t("sMarketValue.harvest_"))+"\n            ")])])],1),t._v(" "),n("span",{staticClass:"mt-1 block text-base text-gray-300"},[n("BtnConnectWallet",{staticClass:"inline-flex text-base focus:outline-none"},[n("span",{staticClass:"font-medium text-white"},[t._v("\n              "+t._s(t.$t("sMarketValue.clickHere"))+"\n            ")]),t._v(" "),n("span",{staticClass:"text-violet-300"},[t._v("\n              "+t._s(t.$t("sMarketValue.toConnectWallet_"))+"\n            ")])])],1)])]):t._e()]),t._v(" "),t.$store.state.wallet.account?n("SHarvest"):t._e()],1)}),[],!1,null,"110de896",null);e.default=component.exports;installComponents(component,{CCountdown:n(936).default,HeroIconSolidCursorClick:n(792).default,CBN:n(781).default,CPancakeTo:n(931).default,HeroIconSolidFire:n(933).default,BtnConnectWallet:n(398).default,LAutoWidth:n(167).default,SHarvest:n(1019).default})},792:function(t,e,n){"use strict";n.r(e);var l={name:"HeroIconSolidCursorClick"},r=n(5),component=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z","clip-rule":"evenodd"}})])}),[],!1,null,"32f487c0",null);e.default=component.exports},930:function(t,e,n){var content=n(935);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("19eeb648",content,!0,{sourceMap:!1})},931:function(t,e,n){"use strict";n.r(e);var l=n(75),r={name:"CPancakeTo",computed:{hdfLink:function(){return l.a}}},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{attrs:{target:"_blank",href:t.hdfLink.pancakeSwapTo()}},[t._t("default")],2)}),[],!1,null,"5c94d5aa",null);e.default=component.exports},934:function(t,e,n){"use strict";n(930)},935:function(t,e,n){var l=n(65)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\n.ds[data-v-18147dc2]{\n  font-size:80%\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},936:function(t,e,n){"use strict";n.r(e);var l=n(0),r=(n(21),n(780),n(84),n(776)),o=n.n(r),c={name:"CCountdown",props:{timestamp:{type:Number,required:!0},mayHideHours:{type:Boolean,default:!1},showDs:{type:Boolean,default:!1}},data:function(){return{interval:null,finished:!1,h:0,m:0,s:0,ds:0,hh:"00",mm:"00",ss:"00"}},computed:{showHours:function(){return!!this.h||!this.mayHideHours}},watch:{timestamp:function(){this.setCountdownInterval()}},mounted:function(){this.setCountdownInterval()},methods:{touchCountdown:function(){var t=o.a.duration(o()(this.timestamp).diff(o()()));if(t.asSeconds()>0){if(this.finished)return null;this.$emit("finished",!1),this.ds=Math.floor(t.milliseconds()/100),this.s=t.seconds(),this.m=t.minutes(),this.h=t.hours(),this.ss=this.s<10?"0"+this.s:this.s,this.mm=this.m<10?"0"+this.m:this.m,this.hh=this.h<10?"0"+this.h:this.h}else this.finished=!0,clearInterval(this.interval),this.$emit("finished",!0),this.s=0,this.m=0,this.h=0,this.ss="00",this.mm="00",this.hh="00"},setCountdownInterval:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.interval||(t.showDs?t.interval=window.setInterval(t.touchCountdown,100):t.interval=window.setInterval(t.touchCountdown,1e3));case 1:case"end":return e.stop()}}),e)})))()}}},d=(n(934),n(5)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"inline-flex items-end"},[t.showHours?n("span",[t._v("\n    "+t._s(t.hh)+":\n  ")]):t._e(),t._v(" "),n("span",[t._v("\n    "+t._s(t.mm)+":\n  ")]),t._v(" "),n("span",[t._v("\n    "+t._s(t.ss)+"\n  ")]),t._v(" "),t.showDs?n("span",{staticClass:"ds"},[t._v("\n    ."+t._s(t.ds)+"\n  ")]):t._e()])}),[],!1,null,"18147dc2",null);e.default=component.exports},940:function(t,e,n){var map={"./af":795,"./af.js":795,"./ar":796,"./ar-dz":797,"./ar-dz.js":797,"./ar-kw":798,"./ar-kw.js":798,"./ar-ly":799,"./ar-ly.js":799,"./ar-ma":800,"./ar-ma.js":800,"./ar-sa":801,"./ar-sa.js":801,"./ar-tn":802,"./ar-tn.js":802,"./ar.js":796,"./az":803,"./az.js":803,"./be":804,"./be.js":804,"./bg":805,"./bg.js":805,"./bm":806,"./bm.js":806,"./bn":807,"./bn-bd":808,"./bn-bd.js":808,"./bn.js":807,"./bo":809,"./bo.js":809,"./br":810,"./br.js":810,"./bs":811,"./bs.js":811,"./ca":812,"./ca.js":812,"./cs":813,"./cs.js":813,"./cv":814,"./cv.js":814,"./cy":815,"./cy.js":815,"./da":816,"./da.js":816,"./de":817,"./de-at":818,"./de-at.js":818,"./de-ch":819,"./de-ch.js":819,"./de.js":817,"./dv":820,"./dv.js":820,"./el":821,"./el.js":821,"./en-au":822,"./en-au.js":822,"./en-ca":823,"./en-ca.js":823,"./en-gb":824,"./en-gb.js":824,"./en-ie":825,"./en-ie.js":825,"./en-il":826,"./en-il.js":826,"./en-in":827,"./en-in.js":827,"./en-nz":828,"./en-nz.js":828,"./en-sg":829,"./en-sg.js":829,"./eo":830,"./eo.js":830,"./es":831,"./es-do":832,"./es-do.js":832,"./es-mx":833,"./es-mx.js":833,"./es-us":834,"./es-us.js":834,"./es.js":831,"./et":835,"./et.js":835,"./eu":836,"./eu.js":836,"./fa":837,"./fa.js":837,"./fi":838,"./fi.js":838,"./fil":839,"./fil.js":839,"./fo":840,"./fo.js":840,"./fr":841,"./fr-ca":842,"./fr-ca.js":842,"./fr-ch":843,"./fr-ch.js":843,"./fr.js":841,"./fy":844,"./fy.js":844,"./ga":845,"./ga.js":845,"./gd":846,"./gd.js":846,"./gl":847,"./gl.js":847,"./gom-deva":848,"./gom-deva.js":848,"./gom-latn":849,"./gom-latn.js":849,"./gu":850,"./gu.js":850,"./he":851,"./he.js":851,"./hi":852,"./hi.js":852,"./hr":853,"./hr.js":853,"./hu":854,"./hu.js":854,"./hy-am":855,"./hy-am.js":855,"./id":856,"./id.js":856,"./is":857,"./is.js":857,"./it":858,"./it-ch":859,"./it-ch.js":859,"./it.js":858,"./ja":860,"./ja.js":860,"./jv":861,"./jv.js":861,"./ka":862,"./ka.js":862,"./kk":863,"./kk.js":863,"./km":864,"./km.js":864,"./kn":865,"./kn.js":865,"./ko":866,"./ko.js":866,"./ku":867,"./ku.js":867,"./ky":868,"./ky.js":868,"./lb":869,"./lb.js":869,"./lo":870,"./lo.js":870,"./lt":871,"./lt.js":871,"./lv":872,"./lv.js":872,"./me":873,"./me.js":873,"./mi":874,"./mi.js":874,"./mk":875,"./mk.js":875,"./ml":876,"./ml.js":876,"./mn":877,"./mn.js":877,"./mr":878,"./mr.js":878,"./ms":879,"./ms-my":880,"./ms-my.js":880,"./ms.js":879,"./mt":881,"./mt.js":881,"./my":882,"./my.js":882,"./nb":883,"./nb.js":883,"./ne":884,"./ne.js":884,"./nl":885,"./nl-be":886,"./nl-be.js":886,"./nl.js":885,"./nn":887,"./nn.js":887,"./oc-lnc":888,"./oc-lnc.js":888,"./pa-in":889,"./pa-in.js":889,"./pl":890,"./pl.js":890,"./pt":891,"./pt-br":892,"./pt-br.js":892,"./pt.js":891,"./ro":893,"./ro.js":893,"./ru":894,"./ru.js":894,"./sd":895,"./sd.js":895,"./se":896,"./se.js":896,"./si":897,"./si.js":897,"./sk":898,"./sk.js":898,"./sl":899,"./sl.js":899,"./sq":900,"./sq.js":900,"./sr":901,"./sr-cyrl":902,"./sr-cyrl.js":902,"./sr.js":901,"./ss":903,"./ss.js":903,"./sv":904,"./sv.js":904,"./sw":905,"./sw.js":905,"./ta":906,"./ta.js":906,"./te":907,"./te.js":907,"./tet":908,"./tet.js":908,"./tg":909,"./tg.js":909,"./th":910,"./th.js":910,"./tk":911,"./tk.js":911,"./tl-ph":912,"./tl-ph.js":912,"./tlh":913,"./tlh.js":913,"./tr":914,"./tr.js":914,"./tzl":915,"./tzl.js":915,"./tzm":916,"./tzm-latn":917,"./tzm-latn.js":917,"./tzm.js":916,"./ug-cn":918,"./ug-cn.js":918,"./uk":919,"./uk.js":919,"./ur":920,"./ur.js":920,"./uz":921,"./uz-latn":922,"./uz-latn.js":922,"./uz.js":921,"./vi":923,"./vi.js":923,"./x-pseudo":924,"./x-pseudo.js":924,"./yo":925,"./yo.js":925,"./zh-cn":926,"./zh-cn.js":926,"./zh-hk":927,"./zh-hk.js":927,"./zh-mo":928,"./zh-mo.js":928,"./zh-tw":929,"./zh-tw.js":929};function l(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}l.keys=function(){return Object.keys(map)},l.resolve=r,t.exports=l,l.id=940}}]);