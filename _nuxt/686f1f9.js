(window.webpackJsonp=window.webpackJsonp||[]).push([[24,13,14,106],{800:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},801:function(t,e,r){var n=r(46),c=r(24),l="["+r(800)+"]",o=RegExp("^"+l+l+"*"),f=RegExp(l+l+"*$"),d=function(t){return function(e){var r=c(n(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(f,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},802:function(t,e,r){var content=r(809);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(66).default)("7f27037d",content,!0,{sourceMap:!1})},803:function(t,e,r){"use strict";var n=r(26),c=r(16),l=r(144),o=r(37),f=r(29),d=r(255),h=r(180),m=r(410),v=r(15),x=r(118).f,_=r(75).f,y=r(36).f,N=r(807),C=r(801).trim,k="Number",A=c.Number,E=A.prototype,T=function(t){var e=m(t,"number");return"bigint"==typeof e?e:w(e)},w=function(t){var e,r,n,c,l,o,f,code,d=m(t,"number");if(h(d))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(43===(e=(d=C(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+d}for(o=(l=d.slice(2)).length,f=0;f<o;f++)if((code=l.charCodeAt(f))<48||code>c)return NaN;return parseInt(l,n)}return+d};if(l(k,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var I,$=function(t){var e=arguments.length<1?0:A(T(t)),r=this;return r instanceof $&&v((function(){N(r)}))?d(Object(e),r,$):e},D=n?x(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;D.length>R;R++)f(A,I=D[R])&&!f($,I)&&y($,I,_(A,I));$.prototype=E,E.constructor=$,o(c,k,$)}},804:function(t,e,r){"use strict";r.r(e);r(803),r(51),r(101),r(805),r(254),r(67),r(50),r(181);var n={name:"CBN",props:{value:{required:!0},decimals:{type:Number,default:0},padding:{type:Number,default:0},keep:{type:Boolean,default:!1},price:{type:Boolean,default:!1},token:{type:Boolean,default:!1}},computed:{numDecimals:function(){return this.token?parseInt(this.$store.state.bsc.metadata.tokenDecimals):this.price?parseInt(this.$store.state.bsc.metadata.priceDecimals):this.decimals},step1:function(){var s=String(this.value).trim().replace(new RegExp("^0+"),""),t={a:"0",b:null};if(this.numDecimals>0)if(this.numDecimals<s.length){var e=s.length-this.numDecimals;t.a=s.slice(0,e),t.b=s.slice(e)}else for(t.b=s;this.numDecimals>t.b.length;)t.b="0"+t.b;else t.a=s;if(t.b&&!this.keep&&(t.b=t.b.replace(new RegExp("0+$"),"")),this.padding)if(t.b||(t.b=""),this.padding>t.b.length)for(;this.padding>t.b.length;)t.b=t.b+"0";else this.padding<t.b.length&&(t.b=t.b.slice(0,this.padding));return t},display:function(){for(var t={a:[],b:[]},a=this.step1.a;3<a.length;)t.a.unshift(a.slice(-3)),a=a.slice(0,a.length-3);a.length&&t.a.unshift(a);var b=this.step1.b;if(b){for(;3<b.length;)t.b.push(b.slice(0,3)),b=b.slice(3);b.length&&t.b.push(b)}return 0===t.a.length&&(t.a=["0"]),t.a=t.a.join(","),t}}},c=(r(808),r(4)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"cbn-number"},[r("span",{staticClass:"cbn-integer"},[t._v(t._s(t.display.a))]),t.display.b.length?r("span",{staticClass:"cbn-dot"},[t._v(".")]):t._e(),t._l(t.display.b,(function(e){return r("span",{staticClass:"cbn-decimal"},[t._v(t._s(e))])}))],2)}),[],!1,null,"77384a03",null);e.default=component.exports},805:function(t,e,r){"use strict";var n=r(9),c=r(801).trim;n({target:"String",proto:!0,forced:r(806)("trim")},{trim:function(){return c(this)}})},806:function(t,e,r){var n=r(143).PROPER,c=r(15),l=r(800);t.exports=function(t){return c((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||n&&l[t].name!==t}))}},807:function(t,e){var r=1..valueOf;t.exports=function(t){return r.call(t)}},808:function(t,e,r){"use strict";r(802)},809:function(t,e,r){var n=r(65)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.cbn-decimal[data-v-77384a03]{\n  margin-right:.2rem;\n  font-size:90%\n}\n.cbn-decimal[data-v-77384a03]:last-child{\n  margin-right:0\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},812:function(t,e,r){"use strict";r.r(e);var n,c=r(0),l=(r(50),r(22),{name:"CAddress",data:function(){return{displayText:""}},props:{value:{type:String,required:!0}},mounted:(n=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setDisplayText();case 2:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),methods:{presetName:function(address){switch(address){case this.$store.state.bsc.globalAccounts.pair:return"liquidity";case this.$store.state.bsc.globalAccounts.buffer:return"buffer";case this.$store.state.bsc.globalAccounts.presale:return"presale";case this.$store.state.bsc.globalAccounts.burn:return"burn";case this.$store.state.bsc.globalAccounts.airdrop:return"airdrop";case this.$store.state.bsc.globalAccounts.tax:return"tax";case"0x1d7f773ab6f8406D8dF56232EDD11085801D7106":return"mainContract";default:return null}},setDisplayText:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var text,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(text=t.presetName(t.value))){e.next=4;break}return t.displayText=t.$t("user."+text),e.abrupt("return");case 4:return e.next=6,t.$nuxt.context.app.db.holder.where("address").equals(t.value).first();case 6:if(!(r=e.sent)||!r.username){e.next=10;break}return t.displayText="@"+r.username+": "+t.value.slice(0,8)+"..."+t.value.slice(-4),e.abrupt("return");case 10:return e.abrupt("return",t.displayText=t.value);case 11:case"end":return e.stop()}}),e)})))()}}}),o=r(4),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.displayText))])}),[],!1,null,"17d027d0",null);e.default=component.exports},970:function(t,e,r){"use strict";r.r(e);var n=r(74),c={name:"CTableAirdrop",props:{transactions:{type:Array,required:!0},hash:{type:Boolean,default:!1}},computed:{hdfLink:function(){return n.a}}},l=r(4),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.transactions.length?r("div",{staticClass:"overflow-x-auto"},[r("div",{staticClass:"align-middle inline-block min-w-full"},[r("div",{staticClass:"shadow overflow-hidden border-b border-gray-700"},[r("table",{staticClass:"table-history"},[r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.block"))+"\n          ")]),t._v(" "),t.hash?r("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.txHash"))+"\n          ")]):r("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.address"))+"\n          ")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("\n            "+t._s(t.$t("txTable.amount"))+"\n          ")])])]),t._v(" "),r("tbody",t._l(t.transactions,(function(e){return r("tr",[r("td",[r("a",{attrs:{target:"_blank",href:t.hdfLink.exploreTx(e.txHash)}},[t._v("\n              #"),r("CBN",{attrs:{value:e.blockNumber}})],1)]),t._v(" "),t.hash?r("td",{staticClass:"font-mono"},[r("a",{attrs:{target:"_blank",href:t.hdfLink.exploreTx(e.txHash)}},[t._v("\n              "+t._s(e.txHash.slice(0,44))+"...\n            ")])]):r("td",{staticClass:"font-mono"},[r("a",{attrs:{target:"_blank",href:t.hdfLink.exploreTx(e.txHash)}},[r("CAddress",{attrs:{value:e.account}})],1)]),t._v(" "),r("td",[r("CBN",{attrs:{value:e.amount,token:!0,padding:2}}),t._v("\n            HyperDeFi\n          ")],1)])})),0)])])])]):t._e()}),[],!1,null,"1553a17a",null);e.default=component.exports;installComponents(component,{CBN:r(804).default,CAddress:r(812).default})}}]);