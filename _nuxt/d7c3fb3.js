(window.webpackJsonp=window.webpackJsonp||[]).push([[75,10,25,34,42],{1002:function(t,e,n){"use strict";n.r(e);var r={name:"SFee"},l=(n(958),n(4)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LAutoWidth",{staticClass:"pt-12 pb-20 px-4 md:py-24 md:px-8"},[n("CH2",{scopedSlots:t._u([{key:"tag",fn:function(){return[t._v("\n        "+t._s(t.$t("sFee.tag"))+"\n      ")]},proxy:!0},{key:"desc",fn:function(){return[t._v("\n        "+t._s(t.$t("sFee.desc"))+"\n      ")]},proxy:!0}])},[t._v("\n      "+t._s(t.$t("sFee.title"))+"\n      "),n("span",{staticClass:"text-violet-400"},[t._v("\n        "+t._s(t.$t("sFee.titleFees"))+"\n      ")])]),t._v(" "),n("div",{staticClass:"mt-8 sm:mt-16 lg:grid lg:grid-cols-2 lg:gap-8"},[n("table",{staticClass:"w-full h-px table-fixed"},[n("caption",{staticClass:"sr-only"},[t._v("\n          "+t._s(t.$t("sFee.tradeFees"))+"\n        ")]),t._v(" "),n("thead",[n("tr",[n("th",{staticClass:"pb-4 px-6 text-sm font-medium text-gray-200 text-left",attrs:{scope:"col"}},[n("span",{staticClass:"sr-only"},[t._v(t._s(t.$t("sFee.type")))]),t._v(" "),n("span",[t._v(t._s(t.$t("sFee.type")))])]),t._v(" "),n("th",{staticClass:"w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-200 text-left",attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("sFee.taker"))+"\n          ")]),t._v(" "),n("th",{staticClass:"w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-200 text-left",attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("sFee.maker"))+"\n          ")]),t._v(" "),n("th",{staticClass:"w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-200 text-left",attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("sFee.whale"))+"\n          ")])])]),t._v(" "),n("tbody",{staticClass:"border-t border-gray-600 divide-y divide-gray-600"},[n("tr",[n("th",{staticClass:"py-8 pl-6 pr-6 align-top text-sm font-medium text-gray-200 text-left",attrs:{scope:"row"}},[t._v("\n            "+t._s(t.$t("sFee.total"))+"\n          ")]),t._v(" "),n("td",{staticClass:"h-full py-8 px-6 align-top"},[n("span",{staticClass:"text-4xl font-extrabold text-gray-200"},[t._v(t._s(t.$store.state.bsc.takerFee.total))]),t._v(" "),n("span",{staticClass:"text-base font-medium text-gray-300"},[t._v("%")])]),t._v(" "),n("td",{staticClass:"h-full py-8 px-6 align-top"},[n("span",{staticClass:"text-4xl font-extrabold text-gray-200"},[t._v(t._s(t.$store.state.bsc.makerFee.total))]),t._v(" "),n("span",{staticClass:"text-base font-medium text-gray-300"},[t._v("%")])]),t._v(" "),n("td",{staticClass:"h-full py-8 px-6 align-top"},[n("span",{staticClass:"text-4xl font-extrabold text-gray-200"},[t._v(t._s(t.$store.state.bsc.whaleFee.total))]),t._v(" "),n("span",{staticClass:"text-base font-medium text-gray-300"},[t._v("%")])])]),t._v(" "),n("tr",[n("th",{staticClass:"py-3 pl-6 bg-gray-800 text-sm font-medium text-gray-400 text-left",attrs:{colspan:"4",scope:"colgroup"}},[t._v("\n            "+t._s(t.$t("sFee.fees"))+"\n          ")])]),t._v(" "),n("tr",[n("th",{staticClass:"th-item",attrs:{scope:"row"}},[t._v("\n            "+t._s(t.$t("sFee.tax"))+"\n          ")]),t._v(" "),n("td",{staticClass:"td-item"},[t.$store.state.bsc.takerFee.tax>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.takerFee.tax)+"%\n            ")]):n("span",{staticClass:"sr-only"},[t._v("\n              "+t._s(t.$t("sFee.freeForTaker"))+"\n            ")])]),t._v(" "),n("td",{staticClass:"td-item"},[t.$store.state.bsc.makerFee.tax>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.makerFee.tax)+"%\n            ")]):n("span",{staticClass:"sr-only"},[t._v("\n              "+t._s(t.$t("sFee.freeForMaker"))+"\n            ")])]),t._v(" "),n("td",{staticClass:"td-item"},[t.$store.state.bsc.whaleFee.tax>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.whaleFee.tax)+"%\n            ")]):n("span",{staticClass:"sr-only"},[t._v("\n              "+t._s(t.$t("sFee.freeForWhale"))+"\n            ")])])]),t._v(" "),n("tr",[n("th",{staticClass:"th-item",attrs:{scope:"row"}},[t._v("\n            "+t._s(t.$t("sFee.lotto"))+"\n          ")]),t._v(" "),n("td",{staticClass:"td-item"},[t.$store.state.bsc.takerFee.lotto>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.takerFee.lotto)+"%\n            ")]):n("span",{staticClass:"sr-only"},[t._v("\n              "+t._s(t.$t("sFee.freeForTaker"))+"\n            ")])]),t._v(" "),n("td",{staticClass:"td-item"},[t.$store.state.bsc.makerFee.lotto>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.makerFee.lotto)+"%\n            ")]):n("span",{staticClass:"sr-only"},[t._v("\n              "+t._s(t.$t("sFee.freeForMaker"))+"\n            ")])]),t._v(" "),n("td",{staticClass:"td-item"},[t.$store.state.bsc.whaleFee.lotto>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.whaleFee.lotto)+"%\n            ")]):n("span",{staticClass:"sr-only"},[t._v("\n              "+t._s(t.$t("sFee.freeForWhale"))+"\n            ")])])]),t._v(" "),n("tr",[n("th",{staticClass:"th-item",attrs:{scope:"row"}},[t._v("\n            "+t._s(t.$t("sFee.fomo"))+"\n          ")]),t._v(" "),n("td",{staticClass:"td-item"},[t.$store.state.bsc.takerFee.fomo>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.takerFee.fomo)+"%\n            ")]):n("span",{staticClass:"sr-only"},[t._v("\n              "+t._s(t.$t("sFee.freeForTaker"))+"\n            ")])]),t._v(" "),n("td",{staticClass:"td-item"},[t.$store.state.bsc.makerFee.fomo>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.makerFee.fomo)+"%\n            ")]):n("span",{staticClass:"sr-only"},[t._v("\n              "+t._s(t.$t("sFee.freeForMaker"))+"\n            ")])]),t._v(" "),n("td",{staticClass:"td-item"},[t.$store.state.bsc.whaleFee.fomo>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.whaleFee.fomo)+"%\n            ")]):n("span",{staticClass:"sr-only"},[t._v("\n              "+t._s(t.$t("sFee.freeForWhale"))+"\n            ")])])]),t._v(" "),n("tr",[n("th",{staticClass:"th-item",attrs:{scope:"row"}},[t._v("\n            "+t._s(t.$t("sFee.lpAcquisition"))+"\n          ")]),t._v(" "),n("td",{staticClass:"td-item"},[t.$store.state.bsc.takerFee.liquidity>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.takerFee.liquidity)+"%\n            ")]):n("span",{staticClass:"sr-only"},[t._v("\n              "+t._s(t.$t("sFee.freeForTaker"))+"\n            ")])]),t._v(" "),n("td",{staticClass:"td-item"},[t.$store.state.bsc.makerFee.liquidity>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.makerFee.liquidity)+"%\n            ")]):n("span",{staticClass:"sr-only"},[t._v("\n              "+t._s(t.$t("sFee.freeForMaker"))+"\n            ")])]),t._v(" "),n("td",{staticClass:"td-item"},[t.$store.state.bsc.whaleFee.liquidity>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.whaleFee.liquidity)+"%\n            ")]):n("span",{staticClass:"sr-only"},[t._v("\n              "+t._s(t.$t("sFee.freeForWhale"))+"\n            ")])])]),t._v(" "),n("tr",[n("th",{staticClass:"th-item",attrs:{scope:"row"}},[t._v("\n            "+t._s(t.$t("sFee.fund"))+"\n          ")]),t._v(" "),n("td",{staticClass:"td-item"},[t.$store.state.bsc.takerFee.fund>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.takerFee.fund)+"%\n            ")]):n("span",{staticClass:"sr-only"},[t._v("\n              "+t._s(t.$t("sFee.freeForTaker"))+"\n            ")])]),t._v(" "),n("td",{staticClass:"td-item"},[t.$store.state.bsc.makerFee.fund>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.makerFee.fund)+"%\n            ")]):n("span",{staticClass:"sr-only"},[t._v("\n              "+t._s(t.$t("sFee.freeForMaker"))+"\n            ")])]),t._v(" "),n("td",{staticClass:"td-item"},[t.$store.state.bsc.whaleFee.fund>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.whaleFee.fund)+"%\n            ")]):n("span",{staticClass:"sr-only"},[t._v("\n              "+t._s(t.$t("sFee.freeForWhale"))+"\n            ")])])]),t._v(" "),n("tr",[n("th",{staticClass:"th-item",attrs:{scope:"row"}},[t._v("\n            "+t._s(t.$t("sFee.burn"))+"\n          ")]),t._v(" "),n("td",{staticClass:"td-item"},[t.$store.state.bsc.takerFee.destroy>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.takerFee.destroy)+"%\n            ")]):n("span",{staticClass:"sr-only"},[t._v("\n              "+t._s(t.$t("sFee.freeForTaker"))+"\n            ")])]),t._v(" "),n("td",{staticClass:"td-item"},[t.$store.state.bsc.makerFee.destroy>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.makerFee.destroy)+"%\n            ")]):n("span",{staticClass:"sr-only"},[t._v("\n              "+t._s(t.$t("sFee.freeForMaker"))+"\n            ")])]),t._v(" "),n("td",{staticClass:"td-item"},[t.$store.state.bsc.whaleFee.destroy>"0"?n("span",[t._v("\n              "+t._s(t.$store.state.bsc.whaleFee.destroy)+"%\n            ")]):n("span",{staticClass:"sr-only"},[t._v("\n              "+t._s(t.$t("sFee.freeForWhale"))+"\n            ")])])])])]),t._v(" "),n("div",{staticClass:"w-full"},[n("h2",{staticClass:"mt-10 lg:mt-0 text-sm font-semibold text-gray-500 tracking-wide uppercase"},[t._v("\n          "+t._s(t.$t("sFee.definitions"))+"\n        ")]),t._v(" "),n("dl",{staticClass:"mt-10 space-y-10 lg:space-y-16"},[n("div",{staticClass:"relative"},[n("dt",[n("div",{staticClass:"absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white"},[n("HeroIconOutlineRefresh",{staticClass:"h-6 w-6"})],1),t._v(" "),n("p",{staticClass:"ml-16 text-lg leading-6 font-bold text-gray-200"},[t._v("\n                "+t._s(t.$t("sFee.taker"))+"\n              ")])]),t._v(" "),n("dd",{staticClass:"mt-2 ml-16 text-base text-gray-500"},[t._v("\n              "+t._s(t.$t("sFee.definitionsTaker"))+"\n            ")])]),t._v(" "),n("div",{staticClass:"relative"},[n("dt",[n("div",{staticClass:"absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white"},[n("HeroIconOutlineCash",{staticClass:"h-6 w-6"})],1),t._v(" "),n("p",{staticClass:"ml-16 text-lg leading-6 font-bold text-gray-200"},[t._v("\n                "+t._s(t.$t("sFee.maker"))+"\n              ")])]),t._v(" "),n("dd",{staticClass:"mt-2 ml-16 text-base text-gray-500"},[t._v("\n              "+t._s(t.$t("sFee.definitionsMaker"))+"\n            ")])]),t._v(" "),n("div",{staticClass:"relative"},[n("dt",[n("div",{staticClass:"absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white"},[n("IconWhale",{staticClass:"h-6 w-6"})],1),t._v(" "),n("p",{staticClass:"ml-16 text-lg leading-6 font-bold text-gray-200"},[t._v("\n                "+t._s(t.$t("sFee.whale"))+"\n              ")])]),t._v(" "),n("dd",{staticClass:"mt-2 ml-16 text-base text-gray-500"},[t._v("\n              "+t._s(t.$t("sFee.definitionsWhaleWho__"))+"\n              "),t.$store.state.bsc.global.whaleThreshold>"0"?n("span",[t._v("\n                "+t._s(t.$t("sFee.definitionsWhaleMoreThan"))+"\n                "),n("CBN",{attrs:{value:t.$store.state.bsc.global.whaleThreshold,token:!0}}),t._v(" HyperDeFi\n              ")],1):n("span",[t._v("\n                "+t._s(t.$t("sFee.definitionsWhaleALarge__"))+"\n              ")]),t._v("\n              "+t._s(t.$t("sFee.definitionsWhaleRemark1"))+"\n              "+t._s(t.$store.state.bsc.global.whaleFractionA)+"/"),n("CBN",{attrs:{value:t.$store.state.bsc.global.whaleFractionB}}),t._v("\n              "+t._s(t.$t("sFee.definitionsWhaleRemark2"))+"\n            ")],1)]),t._v(" "),n("div",{staticClass:"relative"},[n("dt",[n("div",{staticClass:"absolute flex items-center justify-center h-12 w-12 rounded-md bg-violet-500 text-white"},[n("HeroIconOutlineEmojiSad",{staticClass:"h-6 w-6"})],1),t._v(" "),n("p",{staticClass:"ml-16 text-lg leading-6 font-bold text-gray-200"},[t._v("\n                "+t._s(t.$t("sFee.robber"))+"\n              ")])]),t._v(" "),n("dd",{staticClass:"mt-2 ml-16 text-base text-gray-500"},[t._v("\n              "+t._s(t.$t("sFee.definitionsRobber"))+"\n            ")])])])])]),t._v(" "),n("div",{staticClass:"mt-10 md:mt-16 w-full bg-gray-800 py-8 md:py-12 px-10 md:px-16 rounded-md"},[n("div",{staticClass:"mx-auto max-w-md lg:max-w-md xl:max-w-3xl"},[n("h3",{staticClass:"w-full bg-red-900 py-1 md:py-2 font-semibold tracking-widest text-center text-white uppercase"},[t._v("\n          "+t._s(t.$t("sFee.scriptWarning"))+"\n        ")]),t._v(" "),n("p",{staticClass:"mt-3 md:mt-6 px-4 md:px-8 leading-loose tracking-wide"},[t._v("\n          "+t._s(t.$t("sFee.scriptNotWelcomed__moreThan"))+"\n          "+t._s(t.$store.state.bsc.global.robberPercentage)+"%\n          "+t._s(t.$t("sFee.scriptCannot__"))+"\n          "+t._s(t.$store.state.bsc.robberFee.total)+"%\n          "+t._s(t.$t("sFee.scriptOfTheFee"))+"\n          "+t._s(t.$store.state.bsc.robberFee.tax)+"%\n\n          "+t._s(t.$t("sFee.script4Tax_"))+"\n          "+t._s(t.$store.state.bsc.robberFee.lotto)+"%\n          "+t._s(t.$t("sFee.script4Lotto_"))+"\n          "+t._s(t.$store.state.bsc.robberFee.fomo)+"%\n          "+t._s(t.$t("sFee.script4FOMO_"))+"\n          "+t._s(t.$store.state.bsc.robberFee.liquidity)+"%\n          "+t._s(t.$t("sFee.script4LPAcquisition_"))+"\n          "+t._s(t.$store.state.bsc.robberFee.fund)+"%\n          "+t._s(t.$t("sFee.script4Fund_"))+"\n          "+t._s(t.$store.state.bsc.robberFee.destroy)+"%\n          "+t._s(t.$t("sFee.script4Burning_"))+"\n        ")])])])],1)],1)}),[],!1,null,"0923da7a",null);e.default=component.exports;installComponents(component,{CH2:n(915).default,HeroIconOutlineRefresh:n(947).default,HeroIconOutlineCash:n(948).default,IconWhale:n(385).default,CBN:n(382).default,HeroIconOutlineEmojiSad:n(949).default,LAutoWidth:n(134).default})},915:function(t,e,n){"use strict";n.r(e);var r={name:"CH2"},l=n(4),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hdf-ch2"},[t.$slots.tag?n("header",[t._t("tag")],2):t._e(),t._v(" "),n("h2",[t._t("default")],2),t._v(" "),t.$slots.desc?n("main",[t._t("desc")],2):t._e()])}),[],!1,null,"2d1f6548",null);e.default=component.exports},929:function(t,e,n){var content=n(959);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("dc31db78",content,!0,{sourceMap:!1})},947:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconOutlineRefresh"},l=n(4),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"}})])}),[],!1,null,"6a918fe1",null);e.default=component.exports},948:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconOutlineCash"},l=n(4),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"}})])}),[],!1,null,"950cbb94",null);e.default=component.exports},949:function(t,e,n){"use strict";n.r(e);var r={name:"HeroIconOutlineEmojiSad"},l=n(4),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}})])}),[],!1,null,"5dfb0302",null);e.default=component.exports},958:function(t,e,n){"use strict";n(929)},959:function(t,e,n){var r=n(74)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.th-item[data-v-0923da7a]{\n  padding-left:1.5rem;\n  padding-right:1.5rem;\n  padding-top:1.25rem;\n  padding-bottom:1.25rem;\n  text-align:left;\n  font-size:0.875rem;\n  line-height:1.25rem;\n  font-weight:400;\n  --tw-text-opacity:1;\n  color:rgba(209, 213, 219, var(--tw-text-opacity))\n}\n.td-item[data-v-0923da7a]{\n  padding-left:1.5rem;\n  padding-right:1.5rem;\n  padding-top:1.25rem;\n  padding-bottom:1.25rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r}}]);