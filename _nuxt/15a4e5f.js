(window.webpackJsonp=window.webpackJsonp||[]).push([[65,25],{862:function(e,t,n){"use strict";n.r(t);var r={name:"HeroIconOutlineCode"},o=n(10),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}})])}),[],!1,null,"465aa79a",null);t.default=component.exports},937:function(e,t,n){"use strict";n.r(t);var r={name:"SFeeFund"},o=n(10),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hdf-section-fee"},[n("div",{staticClass:"text-center"},[n("span",{staticClass:"span-icon bg-cool-gray-50 text-cool-gray-700"},[n("HeroIconOutlineCode",{staticClass:"h-8 w-8"})],1)]),e._v(" "),n("LAutoWidth",{staticClass:"auto-layout"},[n("main",[n("div",{staticClass:"header1"},[n("h2",{staticClass:"text-cool-gray-400"},[e._v("\n          "+e._s(e.$t("sFeeFund.title"))+"\n        ")]),e._v(" "),n("p",[e._v("\n          "+e._s(e.$t("sFeeFund.text"))+"\n        ")])]),e._v(" "),n("div",{staticClass:"body2 to-cool-gray-900 from-gray-900 text-gray-400"},[n("h3",[e._v("\n          "+e._s(e.$t("sFee.forEachTransaction"))+"\n        ")]),e._v(" "),n("p",[e._v("\n          "+e._s(e.$t("sFee.takeOnly"))+"\n          "),e.$store.state.bsc.takerFee.fund===e.$store.state.bsc.makerFee.fund&&e.$store.state.bsc.makerFee.fund===e.$store.state.bsc.whaleFee.fund?n("span",[e._v("\n            "+e._s(e.$store.state.bsc.takerFee.fund)+"%\n            "+e._s(e.$t("sFee.fromTakerMakerWhale"))+"\n          ")]):n("span",[e.$store.state.bsc.takerFee.fund>"0"?n("span",[e._v("\n              "+e._s(e.$store.state.bsc.takerFee.fund)+"%\n              "+e._s(e.$t("sFee.fromTaker"))+"\n            ")]):e._e(),e._v(" "),e.$store.state.bsc.makerFee.fund>"0"?n("span",[e._v("\n              "+e._s(e.$store.state.bsc.makerFee.fund)+"%\n              "+e._s(e.$t("sFee.fromMaker"))+"\n            ")]):e._e(),e._v(" "),e.$store.state.bsc.whaleFee.fund>"0"?n("span",[e._v("\n              "+e._s(e.$store.state.bsc.whaleFee.fund)+"%\n              "+e._s(e.$t("sFee.fromWhale"))+"\n            ")]):e._e()]),e._v("\n          "+e._s(e.$t("sFeeFund.thenDeposit__"))+"\n        ")])])])])],1)}),[],!1,null,"795dd8c1",null);t.default=component.exports;installComponents(component,{HeroIconOutlineCode:n(862).default,LAutoWidth:n(160).default})}}]);