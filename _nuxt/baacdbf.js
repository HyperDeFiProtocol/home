(window.webpackJsonp=window.webpackJsonp||[]).push([[91,8,11,22],{1013:function(t,e,n){"use strict";n.r(e);var r=n(775),o=n.n(r),l={name:"SFomo",data:function(){return{countdownFinished:!0}},computed:{step:function(){var t={hh:"00",mm:"00",ss:"00"},e=o.a.duration(1e3*this.$store.state.bsc.fomo.timestampStep),s=e.seconds(),n=e.minutes(),r=e.hours();return t.ss=s<10?"0"+s:s,t.mm=n<10?"0"+n:n,t.hh=r<10?"0"+r:r,t}},methods:{isZero:function(address){return address===this.$store.state.bsc.globalAccounts.zero},setCountdownFinished:function(t){this.countdownFinished=t}}},c=n(5),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LAutoWidth",{staticClass:"py-16 px-4 sm:py-24 sm:px-6 lg:px-8"},[n("CH3",{scopedSlots:t._u([{key:"tag",fn:function(){return[t._v("\n        "+t._s(t.$t("sFomo.tag"))+"\n      ")]},proxy:!0}])},[t._v("\n      "+t._s(t.$t("sFomo.title"))+"\n\n      ")]),t._v(" "),n("div",{staticClass:"mt-10 sm:mt-16 lg:text-center"},[n("div",{staticClass:"text-lg text-gray-500"},[n("span",[t._v("\n          "+t._s(t.$t("sFomo.countdown"))+"\n        ")]),t._v(" "),this.isZero(t.$store.state.bsc.fomo.next)?n("span",[t._v("\n          "+t._s(t.$t("sFomo.waitForStarting"))+"\n        ")]):t._e()]),t._v(" "),n("h4",{staticClass:"mt-2 lg:mt-3 lg:w-full lg:mx-auto text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-gray-200"},[t.isZero(t.$store.state.bsc.fomo.next)?n("CTimeDuration",{attrs:{milliseconds:1e3*t.$store.state.bsc.fomo.timestampStep,"may-hide-hours":!0}}):n("CCountdown",{staticClass:"lg:justify-center",attrs:{timestamp:1e3*t.$store.state.bsc.fomo.timestamp,"may-hide-hours":!0,"show-ds":!0},on:{finished:t.setCountdownFinished}})],1),t._v(" "),n("div",{staticClass:"mt-10 sm:mt-16 text-lg text-gray-500"},[t._v("\n        "+t._s(t.$t("sFomo.latestBuyerWin"))+"\n      ")]),t._v(" "),n("h5",{staticClass:"mt-2 lg:mt-3 w-full mx-auto text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl text-gray-200"},[n("CBN",{attrs:{value:t.$store.state.bsc.fomo.amount,token:!0}}),t._v(" HyperDeFi\n      ")],1)]),t._v(" "),n("div",{staticClass:"mt-10 sm:mt-16"},[n("div",{staticClass:"mx-auto max-w-2xl flex rounded-md shadow-sm"},[n("span",{staticClass:"inline-flex items-center px-4 lg:px-8 rounded-l-md border border-r-0 border-violet-300 bg-violet-50 font-bold text-lg text-violet-600"},[this.countdownFinished?n("span",[t._v("\n            "+t._s(t.$t("sFomo.winner"))+"\n          ")]):n("span",[t._v("\n            "+t._s(t.$t("sFomo.current"))+"\n          ")])]),t._v(" "),n("div",{staticClass:"flex-1 min-w-0 block w-full p-4 border border-violet-300 bg-white text-lg rounded-none rounded-r-md border-gray-300 truncate"},[this.isZero(t.$store.state.bsc.fomo.next)?n("span",{staticClass:"font-normal text-gray-400"},[t._v("\n            "+t._s(t.$t("sFomo.nextBuyer"))+" 0x...\n          ")]):n("span",{staticClass:"font-bold text-violet-700"},[t._v("\n            "+t._s(t.$store.state.bsc.fomo.next)+"\n          ")])])])])],1)],1)}),[],!1,null,"e9587aa4",null);e.default=component.exports;installComponents(component,{CH3:n(785).default,CTimeDuration:n(958).default,CCountdown:n(934).default,CBN:n(780).default,LAutoWidth:n(166).default})},778:function(t,e,n){var content=n(784);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("7f27037d",content,!0,{sourceMap:!1})},780:function(t,e,n){"use strict";n.r(e);n(779),n(52),n(92),n(781),n(242),n(67),n(51),n(167);var r={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},o=(n(783),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"cbn-number"},[n("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?n("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return n("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},781:function(t,e,n){"use strict";var r=n(9),o=n(777).trim;r({target:"String",proto:!0,forced:n(782)("trim")},{trim:function(){return o(this)}})},782:function(t,e,n){var r=n(15),o=n(776);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},783:function(t,e,n){"use strict";n(778)},784:function(t,e,n){var r=n(65)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},785:function(t,e,n){"use strict";n.r(e);var r={name:"CH3"},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-ch3"},[t.$slots.tag?n("header",[t._t("tag")],2):t._e(),t._v(" "),n("h3",[t._t("default")],2),t._v(" "),t.$slots.desc?n("main",[t._t("desc")],2):t._e()])}),[],!1,null,"31b9e2c9",null);e.default=component.exports},928:function(t,e,n){var content=n(933);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("19eeb648",content,!0,{sourceMap:!1})},932:function(t,e,n){"use strict";n(928)},933:function(t,e,n){var r=n(65)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.ds[data-v-18147dc2]{\n  font-size:80%\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},934:function(t,e,n){"use strict";n.r(e);var r=n(0),o=(n(21),n(779),n(84),n(775)),l=n.n(o),c={name:"CCountdown",props:{timestamp:{type:Number,required:!0},mayHideHours:{type:Boolean,default:!1},showDs:{type:Boolean,default:!1}},data:function(){return{interval:null,finished:!1,h:0,m:0,s:0,ds:0,hh:"00",mm:"00",ss:"00"}},computed:{showHours:function(){return!!this.h||!this.mayHideHours}},watch:{timestamp:function(){this.setCountdownInterval()}},mounted:function(){this.setCountdownInterval()},methods:{touchCountdown:function(){var t=l.a.duration(l()(this.timestamp).diff(l()()));if(t.asSeconds()>0){if(this.finished)return null;this.$emit("finished",!1),this.ds=Math.floor(t.milliseconds()/100),this.s=t.seconds(),this.m=t.minutes(),this.h=t.hours(),this.ss=this.s<10?"0"+this.s:this.s,this.mm=this.m<10?"0"+this.m:this.m,this.hh=this.h<10?"0"+this.h:this.h}else this.finished=!0,clearInterval(this.interval),this.$emit("finished",!0),this.s=0,this.m=0,this.h=0,this.ss="00",this.mm="00",this.hh="00"},setCountdownInterval:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.interval||(t.showDs?t.interval=window.setInterval(t.touchCountdown,100):t.interval=window.setInterval(t.touchCountdown,1e3));case 1:case"end":return e.stop()}}),e)})))()}}},d=(n(932),n(5)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"inline-flex items-end"},[t.showHours?n("span",[t._v("\n    "+t._s(t.hh)+":\n  ")]):t._e(),t._v(" "),n("span",[t._v("\n    "+t._s(t.mm)+":\n  ")]),t._v(" "),n("span",[t._v("\n    "+t._s(t.ss)+"\n  ")]),t._v(" "),t.showDs?n("span",{staticClass:"ds"},[t._v("\n    ."+t._s(t.ds)+"\n  ")]):t._e()])}),[],!1,null,"18147dc2",null);e.default=component.exports},935:function(t,e,n){var content=n(943);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("392719a5",content,!0,{sourceMap:!1})},938:function(t,e,n){var map={"./af":793,"./af.js":793,"./ar":794,"./ar-dz":795,"./ar-dz.js":795,"./ar-kw":796,"./ar-kw.js":796,"./ar-ly":797,"./ar-ly.js":797,"./ar-ma":798,"./ar-ma.js":798,"./ar-sa":799,"./ar-sa.js":799,"./ar-tn":800,"./ar-tn.js":800,"./ar.js":794,"./az":801,"./az.js":801,"./be":802,"./be.js":802,"./bg":803,"./bg.js":803,"./bm":804,"./bm.js":804,"./bn":805,"./bn-bd":806,"./bn-bd.js":806,"./bn.js":805,"./bo":807,"./bo.js":807,"./br":808,"./br.js":808,"./bs":809,"./bs.js":809,"./ca":810,"./ca.js":810,"./cs":811,"./cs.js":811,"./cv":812,"./cv.js":812,"./cy":813,"./cy.js":813,"./da":814,"./da.js":814,"./de":815,"./de-at":816,"./de-at.js":816,"./de-ch":817,"./de-ch.js":817,"./de.js":815,"./dv":818,"./dv.js":818,"./el":819,"./el.js":819,"./en-au":820,"./en-au.js":820,"./en-ca":821,"./en-ca.js":821,"./en-gb":822,"./en-gb.js":822,"./en-ie":823,"./en-ie.js":823,"./en-il":824,"./en-il.js":824,"./en-in":825,"./en-in.js":825,"./en-nz":826,"./en-nz.js":826,"./en-sg":827,"./en-sg.js":827,"./eo":828,"./eo.js":828,"./es":829,"./es-do":830,"./es-do.js":830,"./es-mx":831,"./es-mx.js":831,"./es-us":832,"./es-us.js":832,"./es.js":829,"./et":833,"./et.js":833,"./eu":834,"./eu.js":834,"./fa":835,"./fa.js":835,"./fi":836,"./fi.js":836,"./fil":837,"./fil.js":837,"./fo":838,"./fo.js":838,"./fr":839,"./fr-ca":840,"./fr-ca.js":840,"./fr-ch":841,"./fr-ch.js":841,"./fr.js":839,"./fy":842,"./fy.js":842,"./ga":843,"./ga.js":843,"./gd":844,"./gd.js":844,"./gl":845,"./gl.js":845,"./gom-deva":846,"./gom-deva.js":846,"./gom-latn":847,"./gom-latn.js":847,"./gu":848,"./gu.js":848,"./he":849,"./he.js":849,"./hi":850,"./hi.js":850,"./hr":851,"./hr.js":851,"./hu":852,"./hu.js":852,"./hy-am":853,"./hy-am.js":853,"./id":854,"./id.js":854,"./is":855,"./is.js":855,"./it":856,"./it-ch":857,"./it-ch.js":857,"./it.js":856,"./ja":858,"./ja.js":858,"./jv":859,"./jv.js":859,"./ka":860,"./ka.js":860,"./kk":861,"./kk.js":861,"./km":862,"./km.js":862,"./kn":863,"./kn.js":863,"./ko":864,"./ko.js":864,"./ku":865,"./ku.js":865,"./ky":866,"./ky.js":866,"./lb":867,"./lb.js":867,"./lo":868,"./lo.js":868,"./lt":869,"./lt.js":869,"./lv":870,"./lv.js":870,"./me":871,"./me.js":871,"./mi":872,"./mi.js":872,"./mk":873,"./mk.js":873,"./ml":874,"./ml.js":874,"./mn":875,"./mn.js":875,"./mr":876,"./mr.js":876,"./ms":877,"./ms-my":878,"./ms-my.js":878,"./ms.js":877,"./mt":879,"./mt.js":879,"./my":880,"./my.js":880,"./nb":881,"./nb.js":881,"./ne":882,"./ne.js":882,"./nl":883,"./nl-be":884,"./nl-be.js":884,"./nl.js":883,"./nn":885,"./nn.js":885,"./oc-lnc":886,"./oc-lnc.js":886,"./pa-in":887,"./pa-in.js":887,"./pl":888,"./pl.js":888,"./pt":889,"./pt-br":890,"./pt-br.js":890,"./pt.js":889,"./ro":891,"./ro.js":891,"./ru":892,"./ru.js":892,"./sd":893,"./sd.js":893,"./se":894,"./se.js":894,"./si":895,"./si.js":895,"./sk":896,"./sk.js":896,"./sl":897,"./sl.js":897,"./sq":898,"./sq.js":898,"./sr":899,"./sr-cyrl":900,"./sr-cyrl.js":900,"./sr.js":899,"./ss":901,"./ss.js":901,"./sv":902,"./sv.js":902,"./sw":903,"./sw.js":903,"./ta":904,"./ta.js":904,"./te":905,"./te.js":905,"./tet":906,"./tet.js":906,"./tg":907,"./tg.js":907,"./th":908,"./th.js":908,"./tk":909,"./tk.js":909,"./tl-ph":910,"./tl-ph.js":910,"./tlh":911,"./tlh.js":911,"./tr":912,"./tr.js":912,"./tzl":913,"./tzl.js":913,"./tzm":914,"./tzm-latn":915,"./tzm-latn.js":915,"./tzm.js":914,"./ug-cn":916,"./ug-cn.js":916,"./uk":917,"./uk.js":917,"./ur":918,"./ur.js":918,"./uz":919,"./uz-latn":920,"./uz-latn.js":920,"./uz.js":919,"./vi":921,"./vi.js":921,"./x-pseudo":922,"./x-pseudo.js":922,"./yo":923,"./yo.js":923,"./zh-cn":924,"./zh-cn.js":924,"./zh-hk":925,"./zh-hk.js":925,"./zh-mo":926,"./zh-mo.js":926,"./zh-tw":927,"./zh-tw.js":927};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=938},942:function(t,e,n){"use strict";n(935)},943:function(t,e,n){var r=n(65)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.ds[data-v-397473ca]{\n  font-size:80%\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},958:function(t,e,n){"use strict";n.r(e);n(779);var r=n(775),o=n.n(r),l={name:"CTimeDuration",props:{milliseconds:{type:Number,required:!0},mayHideHours:{type:Boolean,default:!1},showDs:{type:Boolean,default:!1}},data:function(){return{interval:null}},computed:{duration:function(){return o.a.duration(this.milliseconds)},s:function(){return this.duration.seconds()},m:function(){return this.duration.minutes()},h:function(){return this.duration.hours()},ds:function(){return Math.floor(this.duration.milliseconds()/100)},ss:function(){return this.s<10?"0"+this.s:this.s},mm:function(){return this.m<10?"0"+this.m:this.m},hh:function(){return this.h<10?"0"+this.h:this.h},showHours:function(){return!!this.h||!this.mayHideHours}}},c=(n(942),n(5)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"inline-flex items-end"},[t.showHours?n("span",[t._v("\n    "+t._s(t.hh)+":\n  ")]):t._e(),t._v(" "),n("span",[t._v("\n    "+t._s(t.mm)+":\n  ")]),t._v(" "),n("span",[t._v("\n    "+t._s(t.ss)+"\n  ")]),t._v(" "),t.showDs?n("span",{staticClass:"ds"},[t._v("\n    ."+t._s(t.ds)+"\n  ")]):t._e()])}),[],!1,null,"397473ca",null);e.default=component.exports}}]);