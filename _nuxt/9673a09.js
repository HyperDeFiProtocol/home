(window.webpackJsonp=window.webpackJsonp||[]).push([[108,50],{1060:function(t,e,n){"use strict";n.r(e);var r={name:"STaxFund"},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-section-fee"},[n("div",{staticClass:"text-center"},[n("span",{staticClass:"span-icon bg-cool-gray-50 text-cool-gray-700"},[n("HeroIconOutlineCode",{staticClass:"h-8 w-8"})],1)]),t._v(" "),n("LAutoWidth",{staticClass:"auto-layout"},[n("main",[n("div",{staticClass:"header1"},[n("h2",{staticClass:"text-cool-gray-400"},[t._v("\n          "+t._s(t.$t("sTaxFund.title"))+"\n        ")]),t._v(" "),n("p",[t._v("\n          "+t._s(t.$t("sTaxFund.text"))+"\n        ")])]),t._v(" "),n("div",{staticClass:"body2 to-cool-gray-900 from-gray-900 text-gray-400"},[n("h3",[t._v("\n          "+t._s(t.$t("sTax.forEachTransaction"))+"\n        ")]),t._v(" "),n("p",[t._v("\n          "+t._s(t.$t("sTax.takeOnly"))+"\n          "),t.$store.state.bsc.takerFee.fund===t.$store.state.bsc.makerFee.fund&&t.$store.state.bsc.makerFee.fund===t.$store.state.bsc.whaleFee.fund?n("span",[t._v("\n            "+t._s(t.$store.state.bsc.takerFee.fund)+"%\n            "+t._s(t.$t("sTax.fromTakerMakerWhale"))+"\n          ")]):n("span",[t.$store.state.bsc.takerFee.fund>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.takerFee.fund)+"%\n              "+t._s(t.$t("sTax.fromTaker"))+"\n            ")]):t._e(),t._v(" "),t.$store.state.bsc.makerFee.fund>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.makerFee.fund)+"%\n              "+t._s(t.$t("sTax.fromMaker"))+"\n            ")]):t._e(),t._v(" "),t.$store.state.bsc.whaleFee.fund>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.whaleFee.fund)+"%\n              "+t._s(t.$t("sTax.fromWhale"))+"\n            ")]):t._e()]),t._v("\n          "+t._s(t.$t("sTaxFund.thenDeposit__"))+"\n        ")])])])])],1)}),[],!1,null,"e5e7809c",null);e.default=component.exports;installComponents(component,{HeroIconOutlineCode:n(968).default,LAutoWidth:n(142).default})},968:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconOutlineCode"},o=n(5),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}})])}),[],!1,null,"465aa79a",null);e.default=component.exports}}]);