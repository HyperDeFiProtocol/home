(window.webpackJsonp=window.webpackJsonp||[]).push([[132,17,18,21,34,38,46,78,89],{1004:function(t,n,e){t.exports=e.p+"img/import-token.9f8b733.png"},1005:function(t,n,e){t.exports=e.p+"img/swap.cd72994.png"},1006:function(t,n,e){var content=e(1063);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(58).default)("4c9092d6",content,!0,{sourceMap:!1})},1008:function(t,n){},1019:function(t,n,e){"use strict";e.r(n);e(782),e(51),e(19),e(67);var r=e(1007),o=e.n(r),c={name:"CInputCopy",props:{value:{type:String|Number,required:!0},title:{type:String,required:!1}},computed:{xHash:function(){return this.title?"x"+o()(this.title).toString().slice(-10):"x"+o()(this.value).toString().slice(-10)}},methods:{copy:function(){this.$refs[this.xHash].select(),document.execCommand("copy")?console.log("copied..."):console.log("copy failed...")}}},d=(e(980),e(5)),component=Object(d.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("label",{staticClass:"block text-sm font-medium text-gray-400",attrs:{for:t.xHash}},[t._v("\n    HyperDeFi Contract Address\n  ")]),t._v(" "),e("div",{staticClass:"mt-2 flex rounded-md shadow-sm"},[e("div",{staticClass:"relative flex items-stretch flex-grow focus-within:z-10"},[e("input",{ref:t.xHash,attrs:{type:"text",readonly:""},domProps:{value:t.value},on:{click:t.copy}})]),t._v(" "),e("button",{attrs:{type:"button"},on:{click:t.copy}},[e("HeroIconOutlineClipboardCopy",{staticClass:"w-5 h-5 text-gray-500"}),t._v(" "),e("span",[t._v("\n        Copy\n      ")])],1)])])}),[],!1,null,"fbceb718",null);n.default=component.exports;installComponents(component,{HeroIconOutlineClipboardCopy:e(966).default})},1020:function(t,n,e){"use strict";e.r(n);var r={name:"HeroIconSolidPlusSm"},o=e(5),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"}})])}),[],!1,null,"3b381acf",null);n.default=component.exports},1021:function(t,n,e){"use strict";e.r(n);var r={name:"HeroIconOutlineBell"},o=e(5),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"}})])}),[],!1,null,"c7e5b9aa",null);n.default=component.exports},1022:function(t,n,e){"use strict";e.r(n);var r={name:"HeroIconOutlineAdjustments"},o=e(5),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"}})])}),[],!1,null,"3bbc4c24",null);n.default=component.exports},1060:function(t,n,e){t.exports=e.p+"img/main.f866765.png"},1061:function(t,n,e){t.exports=e.p+"img/slippage.9dc48ed.png"},1062:function(t,n,e){"use strict";e(1006)},1063:function(t,n,e){var r=e(57)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.btn-tab[data-v-72db8ab6]{\n  flex:1 1 0%;\n  border-bottom-width:2px;\n  padding-left:0.25rem;\n  padding-right:0.25rem;\n  padding-top:1rem;\n  padding-bottom:1rem;\n  text-align:center;\n  font-size:0.875rem;\n  line-height:1.25rem;\n  font-weight:500;\n  --tw-border-opacity:1;\n  border-color:rgba(107, 114, 128, var(--tw-border-opacity));\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity))\n}\n.btn-tab[data-v-72db8ab6]:hover{\n  --tw-border-opacity:1;\n  border-color:rgba(209, 213, 219, var(--tw-border-opacity));\n  --tw-text-opacity:1;\n  color:rgba(209, 213, 219, var(--tw-text-opacity))\n}\n.btn-tab.tab-current[data-v-72db8ab6]{\n  --tw-border-opacity:1;\n  border-color:rgba(196, 181, 253, var(--tw-border-opacity));\n  --tw-text-opacity:1;\n  color:rgba(196, 181, 253, var(--tw-text-opacity))\n}\n.con[data-v-72db8ab6]{\n  margin-top:2rem\n}\n@media (min-width: 1024px){\n.con[data-v-72db8ab6]{\n    margin-top:2.5rem\n}\n}\n@media (min-width: 1280px){\n.con[data-v-72db8ab6]{\n    margin-top:3rem\n}\n}\n.con[data-v-72db8ab6]{\n  margin-left:auto;\n  margin-right:auto;\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.con[data-v-72db8ab6] > :not([hidden]) ~ :not([hidden]){\n  --tw-divide-y-reverse:0;\n  border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n  border-bottom-width:calc(1px * var(--tw-divide-y-reverse));\n  --tw-divide-opacity:1;\n  border-color:rgba(75, 85, 99, var(--tw-divide-opacity))\n}\n.con .con-inner[data-v-72db8ab6]{\n  padding-top:1.5rem\n}\n@media (min-width: 1024px){\n.con .con-inner[data-v-72db8ab6]{\n    display:flex;\n    align-items:flex-start\n}\n.con .con-inner[data-v-72db8ab6] > :not([hidden]) ~ :not([hidden]){\n    --tw-space-x-reverse:0;\n    margin-right:calc(1rem * var(--tw-space-x-reverse));\n    margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))\n}\n}\n.con .con-inner[data-v-72db8ab6]:first-child{\n  padding-top:0px\n}\n.con .con-body[data-v-72db8ab6]{\n  flex-grow:1\n}\n.con .con-body[data-v-72db8ab6] > :not([hidden]) ~ :not([hidden]){\n  --tw-divide-y-reverse:0;\n  border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n  border-bottom-width:calc(1px * var(--tw-divide-y-reverse));\n  --tw-divide-opacity:1;\n  border-color:rgba(75, 85, 99, var(--tw-divide-opacity))\n}\n.con img[data-v-72db8ab6]{\n  margin-left:auto;\n  margin-right:auto;\n  border-width:1px;\n  --tw-border-opacity:1;\n  border-color:rgba(156, 163, 175, var(--tw-border-opacity))\n}\n@media (min-width: 1024px){\n.con .snaps-narrow[data-v-72db8ab6]{\n    display:none\n}\n}\n.con .snaps-narrow[data-v-72db8ab6]{\n  margin-left:auto;\n  margin-right:auto;\n  margin-top:1.5rem;\n  margin-bottom:1.5rem;\n  width:66.666667%\n}\n@media (min-width: 640px){\n.con .snaps-narrow[data-v-72db8ab6]{\n    width:50%\n}\n}\n@media (min-width: 768px){\n.con .snaps-narrow[data-v-72db8ab6]{\n    width:41.666667%\n}\n}\n.con .con-snaps-wide[data-v-72db8ab6]{\n  display:flex;\n  display:none;\n  flex-shrink:0;\n  flex-direction:column;\n  align-items:flex-start;\n  justify-content:center\n}\n.con .con-snaps-wide[data-v-72db8ab6] > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse:0;\n  margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom:calc(1rem * var(--tw-space-y-reverse))\n}\n@media (min-width: 1024px){\n.con .con-snaps-wide[data-v-72db8ab6]{\n    display:block;\n    width:41.666667%\n}\n}\n@media (min-width: 1280px){\n.con .con-snaps-wide[data-v-72db8ab6]{\n    width:33.333333%\n}\n}\n.con .step[data-v-72db8ab6]{\n  padding-top:1.5rem;\n  padding-bottom:1.5rem\n}\n.con .step[data-v-72db8ab6]:first-child{\n  padding-top:0px\n}\n.con .step p[data-v-72db8ab6]{\n  margin-top:1.5rem;\n  font-size:1.25rem;\n  line-height:1.75rem;\n  line-height:1.5\n}\n.con .step ol[data-v-72db8ab6], .con .step ul[data-v-72db8ab6]{\n  margin-top:2rem;\n  margin-left:0.75rem\n}\n.con .step ol[data-v-72db8ab6], .con .step ul[data-v-72db8ab6]{\n  list-style-position:inside\n}\n.con .step ol[data-v-72db8ab6], .con .step ul[data-v-72db8ab6]{\n  font-size:1.25rem;\n  line-height:1.75rem\n}\n.con .step ol[data-v-72db8ab6] > :not([hidden]) ~ :not([hidden]), .con .step ul[data-v-72db8ab6] > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse:0;\n  margin-top:calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom:calc(0.75rem * var(--tw-space-y-reverse))\n}\n.con .step ul[data-v-72db8ab6]{\n  list-style-type:disc\n}\n.con .step ol[data-v-72db8ab6]{\n  list-style-type:decimal\n}\n.con h3[data-v-72db8ab6]{\n  margin-bottom:1rem;\n  font-size:1.5rem;\n  line-height:2rem;\n  font-weight:600;\n  line-height:1.625;\n  --tw-text-opacity:1;\n  color:rgba(167, 139, 250, var(--tw-text-opacity))\n}\n.con h4[data-v-72db8ab6]{\n  margin-top:1.5rem;\n  margin-bottom:1.5rem;\n  border-left-width:8px;\n  --tw-border-opacity:1;\n  border-color:rgba(55, 65, 81, var(--tw-border-opacity));\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n  padding-left:1rem;\n  font-size:1.25rem;\n  line-height:1.75rem;\n  line-height:1.625\n}\n.con p[data-v-72db8ab6], .con ul[data-v-72db8ab6]{\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.con b[data-v-72db8ab6]{\n  --tw-text-opacity:1;\n  color:rgba(209, 213, 219, var(--tw-text-opacity))\n}\n.con a[data-v-72db8ab6]{\n  --tw-text-opacity:1;\n  color:rgba(139, 92, 246, var(--tw-text-opacity))\n}\n.con a[data-v-72db8ab6]:hover{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.con code[data-v-72db8ab6]{\n  margin-left:0.5rem;\n  margin-right:0.5rem;\n  border-radius:0.25rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(55, 65, 81, var(--tw-bg-opacity));\n  padding-left:0.75rem;\n  padding-right:0.75rem;\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity))\n}\n.con .btn-pancake-swap[data-v-72db8ab6]{\n  position:relative;\n  display:inline-flex;\n  width:100%;\n  justify-content:center\n}\n.con .btn-pancake-swap[data-v-72db8ab6] > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))\n}\n.con .btn-pancake-swap[data-v-72db8ab6]{\n  border-radius:0.375rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(124, 58, 237, var(--tw-bg-opacity))\n}\n.con .btn-pancake-swap[data-v-72db8ab6]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(109, 40, 217, var(--tw-bg-opacity))\n}\n.con .btn-pancake-swap[data-v-72db8ab6]{\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:0.75rem;\n  padding-bottom:0.75rem;\n  font-weight:500;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.con .btn-pancake-swap[data-v-72db8ab6]:focus{\n  outline:2px solid transparent;\n  outline-offset:2px;\n  --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n  --tw-ring-opacity:1;\n  --tw-ring-color:rgba(196, 181, 253, var(--tw-ring-opacity));\n  --tw-ring-offset-width:2px;\n  --tw-ring-offset-color:#111827\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},1086:function(t,n,e){"use strict";e.r(n);var r=e(0),o=(e(21),e(75)),c={name:"trade",data:function(){return{tab:0}},computed:{tokenAddress:function(){return"0x0F6F376F562F625BBe8b64B52208Eb82aD310c49"},hdfLink:function(){return o.a}},methods:{tabClass:function(t){return this.tab===t?"tab-current":null},conShow:function(t){this.tab=t},addToken:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$nuxt.context.app.conn.addToken(t.$nuxt.context.app.web3.currentProvider);case 2:e=n.sent,console.log("tokenAdded:",e);case 4:case"end":return n.stop()}}),n)})))()}}},d=(e(1062),e(5)),component=Object(d.a)(c,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("LAutoWidth",{staticClass:"py-16 px-4 sm:py-24 sm:px-6 lg:px-8"},[r("CH3",{scopedSlots:t._u([{key:"tag",fn:function(){return[t._v("\n          "+t._s(t.$t("pTrade.tag"))+"\n        ")]},proxy:!0},{key:"desc",fn:function(){return[t._v("\n          A step by step guide on how to trade HyperDeFi via PancakeSwap.\n        ")]},proxy:!0}])},[r("span",[t._v("\n          "+t._s(t.$t("pTrade.title"))+"\n        ")])]),t._v(" "),r("div",{staticClass:"mt-8 lg:mt-14 block w-4/5 lg:w-2/3 mx-auto"},[r("div",{},[r("nav",{staticClass:"-mb-px flex",attrs:{"aria-label":"Tabs"}},[r("button",{staticClass:"btn-tab",class:t.tabClass(0),on:{click:function(n){return t.conShow(0)}}},[t._v("\n              "+t._s(t.$t("pTrade.tabPC"))+"\n            ")]),t._v(" "),r("button",{staticClass:"btn-tab",class:t.tabClass(1),on:{click:function(n){return t.conShow(1)}}},[t._v("\n              "+t._s(t.$t("pTrade.tabMobile"))+"\n            ")])])])]),t._v(" "),r("p",{staticClass:"mt-8 lg:mt-10 xl:mt-12 text-rose-500 text-lg"},[t._v("\n        This will take approximately 15-30 minutes if you're new.\n      ")]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:0===t.tab,expression:"tab === 0"}],staticClass:"con"},[r("div",{staticClass:"con-inner"},[r("div",{staticClass:"con-body"},[r("div",{staticClass:"step"},[r("h3",[t._v("\n                Step.1 Create a Wallet\n              ")]),t._v(" "),r("p",[t._v("\n                Just pick one from below:\n              ")]),t._v(" "),r("ul",[r("li",[t._v("\n                  MetaMask\n                ")]),t._v(" "),r("li",[t._v("\n                  Binance Chain Wallet\n                ")])]),t._v(" "),r("p",[t._v("\n                Just create a Wallet; and keep your phrase (or your private key) a secret! Never, never share it with\n                anyone and store it properly!\n              ")]),t._v(" "),r("p",[t._v("\n                Make sure to copy and save the HyperDeFi contract address below, for keeping you away from the scammers.\n              ")]),t._v(" "),r("p",[r("CInputCopy",{attrs:{value:t.tokenAddress,title:"token-address-desktop"}})],1)]),t._v(" "),r("div",{staticClass:"step"},[r("h3",[t._v("\n                Step.2 Add HyperDeFi to the Wallet\n              ")]),t._v(" "),r("h4",[t._v("\n                For MetaMask:\n              ")]),t._v(" "),!t.$store.state.wallet.account||t.$store.state.wallet.account&&t.$nuxt.context.app.web3.currentProvider.isMetaMask?r("p",[t.$store.state.wallet.account?r("button",{staticClass:"btn",on:{click:t.addToken}},[t._v("\n                  Add HyperDeFi to Your Wallet\n                ")]):r("BtnConnectWallet",{staticClass:"btn"})],1):t._e(),t._v(" "),t.$store.state.wallet.account&&!t.$nuxt.context.app.web3.currentProvider.isMetaMask?r("p",[t._v("\n                Click the "),r("b",[t._v("Add Token")]),t._v(" button; enter the "),r("b",[t._v("contract address")]),t._v(".\n                The wallet will auto-load for you. Then, "),r("b",[t._v("Next")]),t._v(" and "),r("b",[t._v("Done")]),t._v(".\n              ")]):t._e(),t._v(" "),r("div",{staticClass:"snaps-narrow"},[r("img",{attrs:{src:e(965),alt:"Add Token"}})]),t._v(" "),r("h4",[t._v("\n                For Binance Chain Wallet:\n              ")]),t._v(" "),r("p",[t._v("\n                Just use the\n                "),r("span",{staticClass:"inline-flex px-1 py-1 bg-gray-700 rounded"},[r("HeroIconSolidPlusSm",{staticClass:"inline w-5 h-5"})],1),t._v("\n                icon at the bottom, "),r("b",[t._v("Custom Asset")]),t._v(";\n                enter the "),r("b",[t._v("contract address,")]),t._v("\n                it will auto-load for you; then, "),r("b",[t._v("Add asset.")])])])]),t._v(" "),r("div",{staticClass:"con-snaps-wide"},[r("img",{attrs:{src:e(965),alt:"Add Token"}})])]),t._v(" "),r("div",{staticClass:"step"},[r("h3",[t._v("\n            Step.3 Deposit BNB, or any other tokens on BSC\n          ")]),t._v(" "),r("p",[t._v("\n            Transfer some BNB to your wallet (withdraw from an exchange).\n          ")])]),t._v(" "),r("div",{staticClass:"con-inner"},[r("div",{staticClass:"con-body"},[r("div",{staticClass:"step"},[r("h3",[t._v("\n                Step.4 Swap to HyperDeFi, and start holding\n              ")]),t._v(" "),r("div",{staticClass:"mt-6 flex space-x-3"},[r("HeroIconOutlineBell",{staticClass:"w-8 h-8"}),t._v(" "),r("span",[t._v("\n                  If you intend to swap other tokens to HyperDeFi,\n                  make sure you are keeping a small amount of BNB to execute the transaction.\n                ")])],1),t._v(" "),r("p",[t._v("\n                Visit PancakeSwap, easily click\n                "),r("a",{staticClass:"break-all",attrs:{target:"_blank",href:t.hdfLink.pancakeSwapTo()}},[t._v("\n                  https://pancakeswap.finance/#/swap?outputCurrency="+t._s(t.tokenAddress)+"\n                ")]),t._v(", or this button:\n              ")]),t._v(" "),r("div",{staticClass:"mt-6 mb-10 max-w-sm mx-auto"},[r("CPancakeTo",{staticClass:"btn-pancake-swap"},[r("IconPancakeSwap",{staticClass:"inline w-6 h-6"}),t._v(" "),r("span",[t._v("\n                    "+t._s(t.$t("sWelcome.buyOnPancakeSwap"))+"\n                  ")])],1)],1),t._v(" "),r("p",[t._v("\n                If you are already there, you can see a "),r("b",[t._v("Import Token")]),t._v(" tips,\n                click "),r("b",[t._v("I understand")]),t._v(", and "),r("b",[t._v("Continue:")])]),t._v(" "),r("div",{staticClass:"snaps-narrow"},[r("img",{attrs:{src:e(1004),alt:"Import Token"}})]),t._v(" "),r("ol",[r("li",[t._v("\n                  Click "),r("b",[t._v("Connect")]),t._v(" or "),r("b",[t._v("Unlock Wallet")]),t._v(", then "),r("b",[t._v("Connect")]),t._v(" to start\n                ")]),t._v(" "),r("li",[t._v("\n                  Click the\n                  "),r("span",{staticClass:"inline-flex px-1 py-1 bg-gray-700 rounded"},[r("HeroIconOutlineAdjustments",{staticClass:"inline w-5 h-5 transform rotate-90"})],1),t._v("\n                  icon, set the "),r("b",[t._v("Slippage Tolerance")]),t._v(" to "),r("b",[t._v("45%")])])]),t._v(" "),r("div",{staticClass:"mt-6 mb-8 mx-auto md:mx-0 w-2/3 sm:w-1/2 md:w-11/12 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0"},[r("div",{staticClass:"md:w-5/12"},[r("img",{attrs:{src:e(1060),alt:"Main"}})]),t._v(" "),r("div",{staticClass:"md:w-7/12"},[r("img",{attrs:{src:e(1061),alt:"Slippage Tolerance"}})])]),t._v(" "),r("p",[t._v("\n                Once the slippage is set, and you have the BNB amount set that you wish to swap for HyperDeFi as shown.\n              ")]),t._v(" "),r("div",{staticClass:"snaps-narrow"},[r("img",{attrs:{src:e(1005),alt:"Swap"}})]),t._v(" "),r("p",[t._v("\n                Just click Swap and wait patiently for the transaction to clear. This process may not be instant and can\n                take anywhere from a few seconds (usually) up to 1-3 minutes sometimes, depending on traffic.\n              ")]),t._v(" "),r("p",[t._v("\n                Once the transaction has been cleared, you should have HyperDeFi in your Wallet!\n              ")]),t._v(" "),r("p",[t._v("\n                Now all that's left is to HODL!\n              ")])])]),t._v(" "),r("div",{staticClass:"con-snaps-wide"},[r("img",{attrs:{src:e(1004),alt:"Import Token"}}),t._v(" "),r("img",{attrs:{src:e(1005),alt:"Swap"}})])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:1===t.tab,expression:"tab === 1"}],staticClass:"con"},[r("div",{staticClass:"con-inner"},[r("div",{staticClass:"con-body"},[r("div",{staticClass:"step"},[r("h3",[t._v("\n                Step.1 Create a Wallet\n              ")]),t._v(" "),r("p",[t._v("\n                Just pick one from below:\n              ")]),t._v(" "),r("ul",[r("li",[t._v("\n                  TrustWallet\n                ")]),t._v(" "),r("li",[t._v("\n                  TokenPocket\n                ")])]),t._v(" "),r("p",[t._v("\n                Just create a Wallet; and keep your phrase (or your private key) a secret! Never, never share it with\n                anyone and store it properly!\n              ")]),t._v(" "),r("p",[t._v("\n                Make sure to copy and save the HyperDeFi contract address below, for keeping you away from the scammers.\n              ")]),t._v(" "),r("p",[r("CInputCopy",{attrs:{value:t.tokenAddress,title:"token-address-mobi"}})],1)]),t._v(" "),r("div",{staticClass:"step"},[r("h3",[t._v("\n                Step.2 Add HyperDeFi to the Wallet\n              ")]),t._v(" "),r("h4",[t._v("\n                For Truest Wallet:\n              ")]),t._v(" "),r("p",[t._v("\n                Tap the icon in the top-right and search for "),r("b",[t._v("HyperDeFi")]),t._v(".\n              ")]),t._v(" "),r("p",[t._v("\n                If it's not there, tap "),r("b",[t._v("Add Custom Token")]),t._v(".\n                At the top, tap "),r("b",[t._v("Ethereum")]),t._v(" next to Network, change it to "),r("b",[t._v("Smart Chain")]),t._v(".\n                Copy the contract address above on this page and put it in the Contract Address box,\n                with the Name as "),r("b",[t._v("HyperDeFi")]),t._v(", Symbol as "),r("b",[t._v("HyperDeFi")]),t._v(", Decimals as "),r("b",[t._v("2")]),t._v(",\n                then tap "),r("b",[t._v("Finish")]),t._v(" and go back, you will see it listed in your assets.\n              ")]),t._v(" "),r("h4",[t._v("\n                For TokenPocket:\n              ")]),t._v(" "),r("p",[t._v("\n                Click the\n                "),r("span",{staticClass:"inline-flex px-1 py-1 bg-gray-700 rounded"},[r("HeroIconSolidPlusSm",{staticClass:"inline w-5 h-5"})],1),t._v("\n                icon, "),r("b",[t._v("Custom token")]),t._v(", "),r("b",[t._v("Add token")]),t._v(", enter the "),r("b",[t._v("contract address")]),t._v(".\n                The wallet will auto-load for you, then tap "),r("b",[t._v("Confirm")]),t._v(".\n              ")]),t._v(" "),r("div",{staticClass:"snaps-narrow"},[r("img",{attrs:{src:e(965),alt:"Add Token"}})])])]),t._v(" "),r("div",{staticClass:"con-snaps-wide"},[r("img",{attrs:{src:e(965),alt:"Add Token"}})])]),t._v(" "),r("div",{staticClass:"step"},[r("h3",[t._v("\n            Step.3 Buy or deposit BNB\n          ")]),t._v(" "),r("p",[t._v("\n            Click "),r("b",[t._v("Buy")]),t._v(" button, choose "),r("b",[t._v("Smart Chain")]),t._v("\n            (that's the native token "),r("b",[t._v("BNB")]),t._v(" on Binance Smart Chain),\n            then follow the wizard to get some.\n            Or you can deposit BNB to your wallet by withdrawing from an exchange.\n          ")])]),t._v(" "),r("div",{staticClass:"con-inner"},[r("div",{staticClass:"con-body"},[r("div",{staticClass:"step"},[r("h3",[t._v("\n                Step.4 Swap to HyperDeFi, and start holding\n              ")]),t._v(" "),r("div",{staticClass:"mt-6 flex space-x-3"},[r("HeroIconOutlineBell",{staticClass:"w-8 h-8"}),t._v(" "),r("span",[t._v("\n                  If you intend to swap other tokens to HyperDeFi,\n                  make sure you are keeping a small amount of BNB to execute the transaction.\n                ")])],1)])]),t._v(" "),r("div",{staticClass:"con-snaps-wide"})])])],1)],1)}),[],!1,null,"72db8ab6",null);n.default=component.exports;installComponents(component,{CH3:e(788).default,CInputCopy:e(1019).default,BtnConnectWallet:e(398).default,HeroIconSolidPlusSm:e(1020).default,HeroIconOutlineBell:e(1021).default,IconPancakeSwap:e(940).default,CPancakeTo:e(933).default,HeroIconOutlineAdjustments:e(1022).default,LAutoWidth:e(167).default})},788:function(t,n,e){"use strict";e.r(n);var r={name:"CH3"},o=e(5),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hdf-ch3"},[t.$slots.tag?e("header",[t._t("tag")],2):t._e(),t._v(" "),e("h3",[t._t("default")],2),t._v(" "),t.$slots.desc?e("main",[t._t("desc")],2):t._e()])}),[],!1,null,"31b9e2c9",null);n.default=component.exports},933:function(t,n,e){"use strict";e.r(n);var r=e(75),o={name:"CPancakeTo",computed:{hdfLink:function(){return r.a}}},c=e(5),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("a",{attrs:{target:"_blank",href:t.hdfLink.pancakeSwapTo()}},[t._t("default")],2)}),[],!1,null,"5c94d5aa",null);n.default=component.exports},940:function(t,n,e){"use strict";e.r(n);var r={name:"IconPancakeSwap"},o=e(5),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"}},[e("path",{attrs:{fill:"#633001",d:"M6.38,5.584c-0.46,-2.462 1.429,-4.737 3.934,-4.737c2.21,-0 4.002,1.792 4.002,4.002l0,4.935c0.553,-0.039 1.115,-0.06 1.684,-0.06c0.547,0 1.087,0.019 1.619,0.055l-0,-4.93c-0,-2.21 1.791,-4.002 4.002,-4.002c2.505,-0 4.394,2.275 3.934,4.737l-1.083,5.8c3.717,1.623 6.528,4.441 6.528,7.983l0,2.143c0,2.913 -1.927,5.352 -4.621,6.998c-2.715,1.659 -6.387,2.645 -10.379,2.645c-3.992,0 -7.664,-0.986 -10.379,-2.645c-2.694,-1.646 -4.621,-4.085 -4.621,-6.998l0,-2.143c0,-3.523 2.782,-6.331 6.468,-7.957l-1.088,-5.826Zm16.704,6.562l1.268,-6.787c0.319,-1.709 -0.993,-3.288 -2.731,-3.288c-1.534,0 -2.778,1.244 -2.778,2.778l-0,6.279c-0.402,-0.051 -0.81,-0.092 -1.224,-0.122c-0.531,-0.037 -1.071,-0.057 -1.619,-0.057c-0.57,0 -1.132,0.021 -1.684,0.062c-0.414,0.031 -0.822,0.073 -1.224,0.126l-0,-6.288c-0,-1.534 -1.244,-2.778 -2.778,-2.778c-1.738,0 -3.05,1.579 -2.731,3.288l1.272,6.809c-3.975,1.477 -6.631,4.149 -6.631,7.199l0,2.143c0,4.65 6.168,8.419 13.776,8.419c7.608,-0 13.776,-3.769 13.776,-8.419l-0,-2.143c-0,-3.066 -2.683,-5.749 -6.692,-7.221Z"}}),t._v(" "),e("path",{attrs:{fill:"#fedc90",d:"M29.776,21.51c-0,4.65 -6.168,8.419 -13.776,8.419c-7.608,-0 -13.775,-3.769 -13.775,-8.419l-0,-2.143l27.551,0l-0,2.143Z"}}),t._v(" "),e("path",{attrs:{fill:"#d1884f",d:"M7.583,5.359c-0.319,-1.709 0.993,-3.288 2.731,-3.288c1.534,0 2.778,1.244 2.778,2.778l-0,6.288c0.937,-0.123 1.91,-0.188 2.908,-0.188c0.975,0 1.926,0.062 2.843,0.179l-0,-6.279c-0,-1.534 1.244,-2.778 2.778,-2.778c1.738,0 3.05,1.579 2.731,3.288l-1.268,6.787c4.009,1.472 6.692,4.155 6.692,7.221c-0,4.65 -6.168,8.419 -13.776,8.419c-7.608,-0 -13.775,-3.769 -13.775,-8.419c-0,-3.05 2.655,-5.722 6.63,-7.199l-1.272,-6.809Z"}}),t._v(" "),e("path",{attrs:{fill:"#633001",d:"M12.173,18.755c0,1.268 -0.685,2.296 -1.53,2.296c-0.846,-0 -1.531,-1.028 -1.531,-2.296c0,-1.268 0.685,-2.296 1.531,-2.296c0.845,0 1.53,1.028 1.53,2.296Z"}}),t._v(" "),e("path",{attrs:{fill:"#633001",d:"M22.735,18.755c-0,1.268 -0.686,2.296 -1.531,2.296c-0.845,-0 -1.531,-1.028 -1.531,-2.296c0,-1.268 0.686,-2.296 1.531,-2.296c0.845,0 1.531,1.028 1.531,2.296Z"}})])}),[],!1,null,"d7c42476",null);n.default=component.exports},949:function(t,n,e){var content=e(981);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(58).default)("310176b8",content,!0,{sourceMap:!1})},965:function(t,n,e){t.exports=e.p+"img/add-token.b871bab.png"},966:function(t,n,e){"use strict";e.r(n);var r={name:"HeroIconOutlineClipboardCopy"},o=e(5),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"}})])}),[],!1,null,"2e979db1",null);n.default=component.exports},980:function(t,n,e){"use strict";e(949)},981:function(t,n,e){var r=e(57)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\ninput[data-v-fbceb718]{\n  display:block;\n  width:100%;\n  border-radius:0px;\n  border-top-left-radius:0.375rem;\n  border-bottom-left-radius:0.375rem;\n  --tw-border-opacity:1;\n  border-color:rgba(209, 213, 219, var(--tw-border-opacity));\n  padding-left:1rem;\n  padding-right:1rem;\n  font-size:1rem;\n  line-height:1.5rem\n}\n@media (min-width: 640px){\ninput[data-v-fbceb718]{\n    font-size:0.875rem;\n    line-height:1.25rem\n}\n}\ninput[data-v-fbceb718]:focus{\n  --tw-border-opacity:1;\n  border-color:rgba(107, 114, 128, var(--tw-border-opacity));\n  --tw-ring-opacity:1;\n  --tw-ring-color:rgba(107, 114, 128, var(--tw-ring-opacity))\n}\nbutton[data-v-fbceb718]{\n  position:relative;\n  margin-left:-1px;\n  display:inline-flex;\n  align-items:center\n}\nbutton[data-v-fbceb718] > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))\n}\nbutton[data-v-fbceb718]{\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  border-top-right-radius:0.375rem;\n  border-bottom-right-radius:0.375rem;\n  border-width:1px;\n  --tw-border-opacity:1;\n  border-color:rgba(209, 213, 219, var(--tw-border-opacity));\n  --tw-bg-opacity:1;\n  background-color:rgba(249, 250, 251, var(--tw-bg-opacity));\n  font-size:0.875rem;\n  line-height:1.25rem;\n  font-weight:500;\n  --tw-text-opacity:1;\n  color:rgba(55, 65, 81, var(--tw-text-opacity))\n}\nbutton[data-v-fbceb718]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(243, 244, 246, var(--tw-bg-opacity))\n}\nbutton[data-v-fbceb718]:focus{\n  --tw-border-opacity:1;\n  border-color:rgba(107, 114, 128, var(--tw-border-opacity));\n  outline:2px solid transparent;\n  outline-offset:2px;\n  --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n  --tw-ring-opacity:1;\n  --tw-ring-color:rgba(107, 114, 128, var(--tw-ring-opacity))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r}}]);