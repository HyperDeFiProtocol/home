(window.webpackJsonp=window.webpackJsonp||[]).push([[112,15,69],{1e3:function(t,e,n){var content=n(1048);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("2d38dc2c",content,!0,{sourceMap:!1})},1012:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconSolidDatabase"},c=n(5),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{d:"M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"}}),t._v(" "),n("path",{attrs:{d:"M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"}}),t._v(" "),n("path",{attrs:{d:"M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"}})])}),[],!1,null,"22adf7ec",null);e.default=component.exports},1047:function(t,e,n){"use strict";n(1e3)},1048:function(t,e,n){var r=n(65)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\n.btn-clear-cache[data-v-21ac5220]{\n  display:inline-flex;\n  width:100%;\n  align-items:center;\n  justify-content:center;\n  border-radius:0.375rem;\n  border-width:1px;\n  border-color:transparent;\n  padding-top:2rem;\n  padding-bottom:2rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity));\n  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size:1.25rem;\n  line-height:1.75rem;\n  font-weight:500;\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity));\n  text-transform:uppercase\n}\n.btn-clear-cache[data-v-21ac5220] > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(1rem * var(--tw-space-x-reverse));\n  margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))\n}\n.btn-clear-cache[data-v-21ac5220]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(55, 65, 81, var(--tw-bg-opacity))\n}\n.btn-clear-cache[data-v-21ac5220]:focus{\n  outline:2px solid transparent;\n  outline-offset:2px\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},1074:function(t,e,n){"use strict";n.r(e);var r=n(0),c=(n(21),{name:"cache",layout:"withoutCache",data:function(){return{rebuilding:!1}},computed:{showRebuilding:function(){return this.rebuilding||this.$store.state.bsc.synchronizing.fromBlock||null!==this.$store.state.bsc.synchronizing.fromHolderId}},methods:{clear:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.rebuilding=!0,e.next=3,t.$nuxt.context.app.db.pointers.clear();case 3:return e.next=5,t.$nuxt.context.app.db.holder.clear();case 5:return e.next=7,t.$nuxt.context.app.db.tx.clear();case 7:return e.next=9,t.$nuxt.context.app.db.airdrop.clear();case 9:return e.next=11,t.$nuxt.context.app.db.lotto.clear();case 11:return e.next=13,t.$nuxt.context.app.db.liquidity.clear();case 13:return e.next=15,t.$nuxt.context.app.db.transfer.clear();case 15:return e.next=17,t.$nuxt.context.app.sync.all();case 17:return e.next=19,t.$nuxt.context.app.sync.holders();case 19:t.rebuilding=!1;case 20:case"end":return e.stop()}}),e)})))()}}}),o=(n(1047),n(5)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("LAutoWidth",{staticClass:"py-10 md:py-20"},[n("CH3",{scopedSlots:t._u([{key:"tag",fn:function(){return[t._v("\n      Indexed DB\n    ")]},proxy:!0}])},[n("span",[t._v("\n      Clear Cache\n    ")])]),t._v(" "),n("div",{staticClass:"mt-10 lg:mt-24 w-full max-w-xl mx-auto flex items-center justify-center"},[t.showRebuilding?n("button",{staticClass:"btn-clear-cache animate-pulse"},[n("HeroIconSolidDatabase",{staticClass:"h-6 w-6 animate-bounce"}),t._v(" "),n("span",[t._v("\n        Rebuilding...\n      ")])],1):n("button",{staticClass:"btn-clear-cache",on:{click:t.clear}},[n("HeroIconSolidDatabase",{staticClass:"h-6 w-6"}),t._v(" "),n("span",[t._v("\n        Clear and rebuild cache\n      ")])],1)])],1)}),[],!1,null,"21ac5220",null);e.default=component.exports;installComponents(component,{CH3:n(786).default,HeroIconSolidDatabase:n(1012).default,LAutoWidth:n(167).default})},786:function(t,e,n){"use strict";n.r(e);var r={name:"CH3"},c=n(5),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-ch3"},[t.$slots.tag?n("header",[t._t("tag")],2):t._e(),t._v(" "),n("h3",[t._t("default")],2),t._v(" "),t.$slots.desc?n("main",[t._t("desc")],2):t._e()])}),[],!1,null,"31b9e2c9",null);e.default=component.exports}}]);