(window.webpackJsonp=window.webpackJsonp||[]).push([[119,15,18,90],{1108:function(t,e,n){"use strict";n.r(e);var r,c=n(0),l=(n(22),n(8),{name:"demo",data:function(){return{show:!0}},mounted:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$nuxt.context.app.sync.genesisDeposit();case 2:console.log(this.$store.state.bsc.metadata);case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}),o=n(4),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("SLoading"),t._v(" "),n("LAutoWidth",{staticClass:"py-16 px-4"},[n("CH3",{scopedSlots:t._u([{key:"tag",fn:function(){return[t._v("\n        Developing\n      ")]},proxy:!0}])},[n("span",[t._v("\n        Demo Page for DEBUG\n      ")])]),t._v(" "),n("div",{staticClass:"mt-24 flex justify-center text-4xl"},[n("CCountdown",{attrs:{timestamp:16345761e5,"show-ds":!0}})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"mt-24 flex justify-center",on:{click:function(e){t.show=!t.show}}},[n("IconPancakeSwap",{staticClass:"w-80 h-80"})],1),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"mt-24 flex justify-center test"},[n("IconPancakeSwap",{staticClass:"w-80 h-80"})],1)])],1)],1)}),[],!1,null,"3633434c",null);e.default=component.exports;installComponents(component,{SLoading:n(257).default,CH3:n(810).default,CCountdown:n(957).default,IconPancakeSwap:n(962).default,LAutoWidth:n(142).default})},810:function(t,e,n){"use strict";n.r(e);var r={name:"CH3"},c=n(4),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-ch3"},[t.$slots.tag?n("header",[t._t("tag")],2):t._e(),t._v(" "),n("h3",[t._t("default")],2),t._v(" "),t.$slots.desc?n("main",[t._t("desc")],2):t._e()])}),[],!1,null,"31b9e2c9",null);e.default=component.exports},818:function(t,e,n){var content=n(956);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("34a80076",content,!0,{sourceMap:!1})},955:function(t,e,n){"use strict";n(818)},956:function(t,e,n){var r=n(65)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.ds[data-v-48b57e91]{\n  font-size:80%\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},957:function(t,e,n){"use strict";n.r(e);var r=n(0),c=(n(22),n(803),n(88),n(799)),l=n.n(c),o={name:"CCountdown",props:{timestamp:{type:Number,required:!0},mayHideHours:{type:Boolean,default:!1},showDs:{type:Boolean,default:!1}},data:function(){return{interval:null,finished:!1,h:0,m:0,s:0,ds:0,hh:"00",mm:"00",ss:"00"}},computed:{showHours:function(){return this.h>0||!this.mayHideHours}},watch:{timestamp:function(){this.resetInterval(),this.setCountdownInterval()}},mounted:function(){this.setCountdownInterval()},methods:{resetInterval:function(){this.interval&&(clearInterval(this.interval),this.interval=null)},clearDisplay:function(){this.s=0,this.m=0,this.h=0,this.ss="00",this.mm="00",this.hh="00"},touchCountdown:function(){this.finished=!1;var t=l.a.duration(l()(this.timestamp).diff(l()()));if(t.asMilliseconds()>0){if(this.finished)return null;this.$emit("finished",!1),this.ds=Math.floor(t.milliseconds()/100),this.s=t.seconds(),this.m=t.minutes(),this.h=Math.floor(t.asHours()),this.ss=this.s<10?"0"+this.s:this.s,this.mm=this.m<10?"0"+this.m:this.m,this.hh=this.h<10?"0"+this.h:this.h}else this.finished=!0,clearInterval(this.interval),this.$emit("finished",!0),this.clearDisplay(),window.setTimeout(this.clearDisplay,1e3)},setCountdownInterval:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.interval||(t.showDs?t.interval=window.setInterval(t.touchCountdown,100):t.interval=window.setInterval(t.touchCountdown,1e3));case 1:case"end":return e.stop()}}),e)})))()}}},j=(n(955),n(4)),component=Object(j.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"inline-flex items-baseline"},[t.showHours?n("span",[t._v("\n    "+t._s(t.hh)+":\n  ")]):t._e(),t._v(" "),n("span",[t._v("\n    "+t._s(t.mm)+":\n  ")]),t._v(" "),n("span",[t._v("\n    "+t._s(t.ss)+"\n  ")]),t._v(" "),t.showDs?n("span",{staticClass:"ds"},[t._v("\n    ."+t._s(t.ds)+"\n  ")]):t._e()])}),[],!1,null,"48b57e91",null);e.default=component.exports},960:function(t,e,n){var map={"./af":819,"./af.js":819,"./ar":820,"./ar-dz":821,"./ar-dz.js":821,"./ar-kw":822,"./ar-kw.js":822,"./ar-ly":823,"./ar-ly.js":823,"./ar-ma":824,"./ar-ma.js":824,"./ar-sa":825,"./ar-sa.js":825,"./ar-tn":826,"./ar-tn.js":826,"./ar.js":820,"./az":827,"./az.js":827,"./be":828,"./be.js":828,"./bg":829,"./bg.js":829,"./bm":830,"./bm.js":830,"./bn":831,"./bn-bd":832,"./bn-bd.js":832,"./bn.js":831,"./bo":833,"./bo.js":833,"./br":834,"./br.js":834,"./bs":835,"./bs.js":835,"./ca":836,"./ca.js":836,"./cs":837,"./cs.js":837,"./cv":838,"./cv.js":838,"./cy":839,"./cy.js":839,"./da":840,"./da.js":840,"./de":841,"./de-at":842,"./de-at.js":842,"./de-ch":843,"./de-ch.js":843,"./de.js":841,"./dv":844,"./dv.js":844,"./el":845,"./el.js":845,"./en-au":846,"./en-au.js":846,"./en-ca":847,"./en-ca.js":847,"./en-gb":848,"./en-gb.js":848,"./en-ie":849,"./en-ie.js":849,"./en-il":850,"./en-il.js":850,"./en-in":851,"./en-in.js":851,"./en-nz":852,"./en-nz.js":852,"./en-sg":853,"./en-sg.js":853,"./eo":854,"./eo.js":854,"./es":855,"./es-do":856,"./es-do.js":856,"./es-mx":857,"./es-mx.js":857,"./es-us":858,"./es-us.js":858,"./es.js":855,"./et":859,"./et.js":859,"./eu":860,"./eu.js":860,"./fa":861,"./fa.js":861,"./fi":862,"./fi.js":862,"./fil":863,"./fil.js":863,"./fo":864,"./fo.js":864,"./fr":865,"./fr-ca":866,"./fr-ca.js":866,"./fr-ch":867,"./fr-ch.js":867,"./fr.js":865,"./fy":868,"./fy.js":868,"./ga":869,"./ga.js":869,"./gd":870,"./gd.js":870,"./gl":871,"./gl.js":871,"./gom-deva":872,"./gom-deva.js":872,"./gom-latn":873,"./gom-latn.js":873,"./gu":874,"./gu.js":874,"./he":875,"./he.js":875,"./hi":876,"./hi.js":876,"./hr":877,"./hr.js":877,"./hu":878,"./hu.js":878,"./hy-am":879,"./hy-am.js":879,"./id":880,"./id.js":880,"./is":881,"./is.js":881,"./it":882,"./it-ch":883,"./it-ch.js":883,"./it.js":882,"./ja":884,"./ja.js":884,"./jv":885,"./jv.js":885,"./ka":886,"./ka.js":886,"./kk":887,"./kk.js":887,"./km":888,"./km.js":888,"./kn":889,"./kn.js":889,"./ko":890,"./ko.js":890,"./ku":891,"./ku.js":891,"./ky":892,"./ky.js":892,"./lb":893,"./lb.js":893,"./lo":894,"./lo.js":894,"./lt":895,"./lt.js":895,"./lv":896,"./lv.js":896,"./me":897,"./me.js":897,"./mi":898,"./mi.js":898,"./mk":899,"./mk.js":899,"./ml":900,"./ml.js":900,"./mn":901,"./mn.js":901,"./mr":902,"./mr.js":902,"./ms":903,"./ms-my":904,"./ms-my.js":904,"./ms.js":903,"./mt":905,"./mt.js":905,"./my":906,"./my.js":906,"./nb":907,"./nb.js":907,"./ne":908,"./ne.js":908,"./nl":909,"./nl-be":910,"./nl-be.js":910,"./nl.js":909,"./nn":911,"./nn.js":911,"./oc-lnc":912,"./oc-lnc.js":912,"./pa-in":913,"./pa-in.js":913,"./pl":914,"./pl.js":914,"./pt":915,"./pt-br":916,"./pt-br.js":916,"./pt.js":915,"./ro":917,"./ro.js":917,"./ru":918,"./ru.js":918,"./sd":919,"./sd.js":919,"./se":920,"./se.js":920,"./si":921,"./si.js":921,"./sk":922,"./sk.js":922,"./sl":923,"./sl.js":923,"./sq":924,"./sq.js":924,"./sr":925,"./sr-cyrl":926,"./sr-cyrl.js":926,"./sr.js":925,"./ss":927,"./ss.js":927,"./sv":928,"./sv.js":928,"./sw":929,"./sw.js":929,"./ta":930,"./ta.js":930,"./te":931,"./te.js":931,"./tet":932,"./tet.js":932,"./tg":933,"./tg.js":933,"./th":934,"./th.js":934,"./tk":935,"./tk.js":935,"./tl-ph":936,"./tl-ph.js":936,"./tlh":937,"./tlh.js":937,"./tr":938,"./tr.js":938,"./tzl":939,"./tzl.js":939,"./tzm":940,"./tzm-latn":941,"./tzm-latn.js":941,"./tzm.js":940,"./ug-cn":942,"./ug-cn.js":942,"./uk":943,"./uk.js":943,"./ur":944,"./ur.js":944,"./uz":945,"./uz-latn":946,"./uz-latn.js":946,"./uz.js":945,"./vi":947,"./vi.js":947,"./x-pseudo":948,"./x-pseudo.js":948,"./yo":949,"./yo.js":949,"./zh-cn":950,"./zh-cn.js":950,"./zh-hk":951,"./zh-hk.js":951,"./zh-mo":952,"./zh-mo.js":952,"./zh-tw":953,"./zh-tw.js":953};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=c,t.exports=r,r.id=960},962:function(t,e,n){"use strict";n.r(e);var r={name:"IconPancakeSwap"},c=n(4),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"}},[n("path",{attrs:{fill:"#633001",d:"M6.38,5.584c-0.46,-2.462 1.429,-4.737 3.934,-4.737c2.21,-0 4.002,1.792 4.002,4.002l0,4.935c0.553,-0.039 1.115,-0.06 1.684,-0.06c0.547,0 1.087,0.019 1.619,0.055l-0,-4.93c-0,-2.21 1.791,-4.002 4.002,-4.002c2.505,-0 4.394,2.275 3.934,4.737l-1.083,5.8c3.717,1.623 6.528,4.441 6.528,7.983l0,2.143c0,2.913 -1.927,5.352 -4.621,6.998c-2.715,1.659 -6.387,2.645 -10.379,2.645c-3.992,0 -7.664,-0.986 -10.379,-2.645c-2.694,-1.646 -4.621,-4.085 -4.621,-6.998l0,-2.143c0,-3.523 2.782,-6.331 6.468,-7.957l-1.088,-5.826Zm16.704,6.562l1.268,-6.787c0.319,-1.709 -0.993,-3.288 -2.731,-3.288c-1.534,0 -2.778,1.244 -2.778,2.778l-0,6.279c-0.402,-0.051 -0.81,-0.092 -1.224,-0.122c-0.531,-0.037 -1.071,-0.057 -1.619,-0.057c-0.57,0 -1.132,0.021 -1.684,0.062c-0.414,0.031 -0.822,0.073 -1.224,0.126l-0,-6.288c-0,-1.534 -1.244,-2.778 -2.778,-2.778c-1.738,0 -3.05,1.579 -2.731,3.288l1.272,6.809c-3.975,1.477 -6.631,4.149 -6.631,7.199l0,2.143c0,4.65 6.168,8.419 13.776,8.419c7.608,-0 13.776,-3.769 13.776,-8.419l-0,-2.143c-0,-3.066 -2.683,-5.749 -6.692,-7.221Z"}}),t._v(" "),n("path",{attrs:{fill:"#fedc90",d:"M29.776,21.51c-0,4.65 -6.168,8.419 -13.776,8.419c-7.608,-0 -13.775,-3.769 -13.775,-8.419l-0,-2.143l27.551,0l-0,2.143Z"}}),t._v(" "),n("path",{attrs:{fill:"#d1884f",d:"M7.583,5.359c-0.319,-1.709 0.993,-3.288 2.731,-3.288c1.534,0 2.778,1.244 2.778,2.778l-0,6.288c0.937,-0.123 1.91,-0.188 2.908,-0.188c0.975,0 1.926,0.062 2.843,0.179l-0,-6.279c-0,-1.534 1.244,-2.778 2.778,-2.778c1.738,0 3.05,1.579 2.731,3.288l-1.268,6.787c4.009,1.472 6.692,4.155 6.692,7.221c-0,4.65 -6.168,8.419 -13.776,8.419c-7.608,-0 -13.775,-3.769 -13.775,-8.419c-0,-3.05 2.655,-5.722 6.63,-7.199l-1.272,-6.809Z"}}),t._v(" "),n("path",{attrs:{fill:"#633001",d:"M12.173,18.755c0,1.268 -0.685,2.296 -1.53,2.296c-0.846,-0 -1.531,-1.028 -1.531,-2.296c0,-1.268 0.685,-2.296 1.531,-2.296c0.845,0 1.53,1.028 1.53,2.296Z"}}),t._v(" "),n("path",{attrs:{fill:"#633001",d:"M22.735,18.755c-0,1.268 -0.686,2.296 -1.531,2.296c-0.845,-0 -1.531,-1.028 -1.531,-2.296c0,-1.268 0.686,-2.296 1.531,-2.296c0.845,0 1.531,1.028 1.531,2.296Z"}})])}),[],!1,null,"d7c42476",null);e.default=component.exports}}]);