(window.webpackJsonp=window.webpackJsonp||[]).push([[114,8,90],{1003:function(t,e,n){"use strict";n.r(e);n(49),n(92),n(817);var r={name:"SUsername",data:function(){return{username:""}},watch:{username:function(){this.username=this.username.trim().replace(/[^A-Za-z0-9]/g,"")}}},o=(n(991),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-16 sm:py-24"},[n("div",{staticClass:"relative sm:pt-16"},[n("div",{staticClass:"hidden sm:block",attrs:{"aria-hidden":"true"}},[n("svg",{staticClass:"absolute top-8 left-1/2 -ml-3",attrs:{width:"404",height:"392",fill:"none",viewBox:"0 0 404 392"}},[n("defs",[n("pattern",{attrs:{id:"8228f071-bcee-4ec8-905a-2a059a2cc4fb",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"}},[n("rect",{staticClass:"text-gray-200",attrs:{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"}})])]),t._v(" "),n("rect",{attrs:{width:"404",height:"392",fill:"url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"}})])]),t._v(" "),n("div",{staticClass:"mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"},[n("div",{staticClass:"relative rounded-2xl px-6 py-10 bg-gray-700 overflow-hidden shadow-xl sm:px-12 sm:py-20"},[n("div",{staticClass:"absolute inset-0 -mt-72 sm:-mt-32 md:mt-0",attrs:{"aria-hidden":"true"}},[n("svg",{staticClass:"absolute inset-0 h-full w-full",attrs:{preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 1463 360"}},[n("path",{staticClass:"text-gray-600 text-opacity-40",attrs:{fill:"currentColor",d:"M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"}}),t._v(" "),n("path",{staticClass:"text-gray-800 text-opacity-40",attrs:{fill:"currentColor",d:"M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"}})])]),t._v(" "),n("div",{staticClass:"relative"},[n("div",{staticClass:"sm:text-center"},[n("h2",{staticClass:"text-3xl font-extrabold text-white tracking-tight sm:text-4xl"},[t._v("\n              "+t._s(t.$t("sUsername.title"))+"\n            ")]),t._v(" "),n("p",{staticClass:"mt-6 mx-auto max-w-2xl text-lg text-gray-200"},[t._v("\n              "+t._s(t.$t("sUsername.desc"))+"\n            ")])]),t._v(" "),n("div",{staticClass:"mt-12"},[t.$store.state.wallet.account?n("div",[t.$store.state.wallet.username?n("div",{staticClass:"sm:mx-auto sm:max-w-lg sm:flex"},[n("NuxtLink",{attrs:{to:t.localePath("/user/@"+t.$store.state.wallet.username)}},[t._v("\n                  @"+t._s(t.$store.state.wallet.username)+"\n                  "+t._s(t.$t("sUsername._sDashboard"))+"\n                ")])],1):n("div",{staticClass:"sm:mx-auto sm:max-w-lg sm:flex"},[n("div",{staticClass:"min-w-0 flex-1"},[n("label",{staticClass:"sr-only",attrs:{for:"dapp-username"}},[t._v("\n                    "+t._s(t.$t("sUsername.sr"))+"\n                  ")]),t._v(" "),n("span",{staticClass:"relative"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"block w-full border border-transparent rounded-md pl-10 pr-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-600",attrs:{id:"dapp-username",type:"text",autocomplete:"off",maxlength:"15",placeholder:t.$t("sUsername.placeholder")},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),n("span",{staticClass:"absolute top-3 left-5 text-base text-gray-500"},[t._v("@")])])]),t._v(" "),n("div",{staticClass:"mt-4 sm:mt-0 sm:ml-3"},[n("BtnSubmitUsername",{attrs:{username:t.username}})],1)])]):n("div",{staticClass:"sm:mx-auto sm:max-w-sm sm:flex"},[n("BtnConnectWallet")],1)])])])])])])}),[],!1,null,"70dd1eb0",null);e.default=component.exports;installComponents(component,{BtnSubmitUsername:n(984).default,BtnConnectWallet:n(419).default})},812:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},813:function(t,e,n){var r=n(13),o=n(50),c=n(26),l=n(812),d=r("".replace),m="["+l+"]",f=RegExp("^"+m+m+"*"),x=RegExp(m+m+"*$"),w=function(t){return function(e){var n=c(o(e));return 1&t&&(n=d(n,f,"")),2&t&&(n=d(n,x,"")),n}};t.exports={start:w(1),end:w(2),trim:w(3)}},817:function(t,e,n){"use strict";var r=n(10),o=n(813).trim;r({target:"String",proto:!0,forced:n(818)("trim")},{trim:function(){return o(this)}})},818:function(t,e,n){var r=n(150).PROPER,o=n(16),c=n(812);t.exports=function(t){return o((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||r&&c[t].name!==t}))}},827:function(t,e,n){"use strict";n.r(e);var r={name:"IconDiceHyperSpin"},o=n(5),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"flex-shrink-0",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"}},[e("g",{staticStyle:{"transform-origin":"50% 50%",transform:"rotate(0deg) scale(0.8, 0.8)"}},[e("g",{staticStyle:{"transform-origin":"512px 512px",transform:"rotate(0deg)",animation:"1.66667s linear 0s infinite normal forwards running spin-1c9b16c3-3b0c-4d0f-8d7b-bf997165f8c8"}},[e("path",{attrs:{fill:"currentColor",d:"M769.143,152l-514.286,-0c-56.812,-0 -102.857,46.045 -102.857,102.857l-0,514.286c-0,56.812 46.045,102.857 102.857,102.857l514.286,0c56.812,0 102.857,-46.045 102.857,-102.857l0,-514.286c0,-56.812 -46.045,-102.857 -102.857,-102.857Zm-385.714,617.143c-28.399,-0 -77.143,-48.745 -77.143,-77.143c-0,-28.398 48.744,-77.143 77.143,-77.143c28.398,0 77.142,48.745 77.142,77.143c0,28.398 -48.744,77.143 -77.142,77.143Zm257.142,-154.286c-28.398,0 -77.142,-48.745 -77.142,-77.143c-0,-28.398 48.744,-77.143 77.142,-77.143c28.399,0 77.143,48.745 77.143,77.143c0,28.399 -48.744,77.143 -77.143,77.143Zm0,-205.714c-28.398,-0 -77.142,-48.745 -77.142,-77.143c-0,-28.398 48.744,-77.143 77.142,-77.143c28.399,0 77.143,48.745 77.143,77.143c0,28.398 -48.744,77.143 -77.143,77.143Z"}})])])])}),[],!1,null,"7c38ba44",null);e.default=component.exports},976:function(t,e,n){var content=n(992);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("33e8cc7a",content,!0,{sourceMap:!1})},984:function(t,e,n){"use strict";n.r(e);var r=n(1),o=(n(24),{name:"BtnSubmitUsername",props:{username:{type:String,required:!0}},data:function(){return{pending:!1}},methods:{submit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.username){e.next=4;break}return e.next=3,t.$store.dispatch("warning/SET_WARNING",{title:t.$t("modal.error"),message:t.$t("modal.usernameEmpty")});case 3:return e.abrupt("return");case 4:if(!(4>t.username.length)){e.next=8;break}return e.next=7,t.$store.dispatch("warning/SET_WARNING",{title:t.$t("modal.error"),message:t.$t("modal.usernameLengthMin")});case 7:return e.abrupt("return");case 8:if(!(15<t.username.length)){e.next=12;break}return e.next=11,t.$store.dispatch("warning/SET_WARNING",{title:t.$t("modal.error"),message:t.$t("modal.usernameLengthMax")});case 11:return e.abrupt("return");case 12:if(!t.pending){e.next=16;break}return e.next=15,t.$store.dispatch("warning/SET_WARNING",{title:t.$t("modal.info"),message:t.$t("modal.pending")});case 15:return e.abrupt("return");case 16:if(!t.$store.state.wallet.username){e.next=20;break}return e.next=19,t.$store.dispatch("warning/SET_WARNING",{title:t.$t("modal.error"),message:t.$t("modal.usernameChange")});case 19:return e.abrupt("return");case 20:return t.pending=!0,e.next=23,t.$nuxt.context.app.token.methods.getAccountByUsername(t.username).call().catch(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.pending=!1,t.next=3,this.$store.dispatch("warning/SET_WARNING",{title:this.$t("modal.error"),message:e.message});case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}());case 23:if(e.sent.account===t.$store.state.bsc.globalAccounts.zero){e.next=29;break}return t.pending=!1,e.next=28,t.$store.dispatch("warning/SET_WARNING",{title:t.$t("modal.error"),message:t.$t("modal.usernameTaken")});case 28:return e.abrupt("return");case 29:return e.next=31,t.$nuxt.context.app.token.methods.setUsername(t.username).send({from:t.$store.state.wallet.account}).on("receipt",t.onReceipt).on("error",t.onError).catch(t.onError);case 31:case"end":return e.stop()}}),e)})))()},onReceipt:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log(">>> onReceipt:",t),!t.status){n.next=4;break}return n.next=4,e.$nuxt.context.app.conn.tokenSync();case 4:case"end":return n.stop()}}),n)})))()},onError:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.pending=!1,n.next=3,e.$store.dispatch("warning/SET_WARNING",{title:e.$t("modal.txError")+" #"+t.code,message:t.message});case 3:case"end":return n.stop()}}),n)})))()}}}),c=n(5),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"space-x-2",on:{click:t.submit}},[t._t("default",(function(){return[t._v(t._s(t.$t("sUsername.submit")))]})),t._v(" "),n("IconDiceHyperSpin",{directives:[{name:"show",rawName:"v-show",value:t.pending,expression:"pending"}],staticClass:"inline w-6 h-6"})],2)}),[],!1,null,"5a2a02da",null);e.default=component.exports;installComponents(component,{IconDiceHyperSpin:n(827).default})},991:function(t,e,n){"use strict";n(976)},992:function(t,e,n){var r=n(59)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\na[data-v-70dd1eb0], button[data-v-70dd1eb0]{\n  display:block;\n  width:100%;\n  border-radius:0.375rem;\n  border-width:1px;\n  border-color:transparent;\n  padding-left:1.25rem;\n  padding-right:1.25rem;\n  padding-top:0.75rem;\n  padding-bottom:0.75rem;\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n@media (min-width: 640px){\na[data-v-70dd1eb0], button[data-v-70dd1eb0]{\n    padding-left:2.5rem;\n    padding-right:2.5rem\n}\n}\na[data-v-70dd1eb0], button[data-v-70dd1eb0]{\n  --tw-bg-opacity:1;\n  background-color:rgba(124, 58, 237, var(--tw-bg-opacity))\n}\na[data-v-70dd1eb0]:hover, button[data-v-70dd1eb0]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(109, 40, 217, var(--tw-bg-opacity))\n}\na[data-v-70dd1eb0]:focus, button[data-v-70dd1eb0]:focus{\n  outline:2px solid transparent;\n  outline-offset:2px\n}\na[data-v-70dd1eb0]:focus, button[data-v-70dd1eb0]:focus{\n  --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n  --tw-ring-opacity:1;\n  --tw-ring-color:rgba(255, 255, 255, var(--tw-ring-opacity));\n  --tw-ring-offset-width:2px;\n  --tw-ring-offset-color:#7c3aed\n}\na[data-v-70dd1eb0], button[data-v-70dd1eb0]{\n  text-align:center;\n  font-size:1rem;\n  line-height:1.5rem;\n  font-weight:500;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r}}]);