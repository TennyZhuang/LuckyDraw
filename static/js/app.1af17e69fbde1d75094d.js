webpackJsonp([2,0],{0:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=n(39),u=r(a),o=n(78),i=r(o);new u.default({el:"#app",template:"<App/>",components:{App:i.default}})},36:function(t,e){},37:function(t,e){},38:function(t,e){},75:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(74),u=r(a),o=n(32),i=r(o),s=n(73),f=r(s),c=n(79),d=r(c),p=n(80),l=r(p),h=function(){var t=(0,f.default)(u.default.mark(function t(e){return u.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new i.default(function(t){return setTimeout(t,e)}));case 1:case"end":return t.stop()}},t,void 0)}));return function(e){return t.apply(this,arguments)}}();e.default={name:"app",components:{LuckyCard:d.default,MuFooter:l.default},data:function(){return{nums:[],isRunning:!1,total:5,min:1,max:800}},created:function(){var t=this;document.addEventListener("keyup",function(e){32===e.keyCode&&(t.isRunning?t.stop():t.start(),e.preventDefault())});var e=new window.URLSearchParams(window.location.search);this.total=parseInt(e.get("total")||5),this.min=parseInt(e.get("min")||1),this.max=parseInt(e.get("max")||800)},methods:{start:function(){var t=this;return(0,f.default)(u.default.mark(function e(){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.isRunning=!0;case 1:if(!t.isRunning){e.next=7;break}return t.update(),e.next=5,h(100);case 5:e.next=1;break;case 7:case"end":return e.stop()}},e,t)}))()},stop:function(){this.isRunning=!1},update:function(){for(var t=[],e=0;e<this.total;++e)t.push(Math.floor(Math.random()*this.max+this.min));this.nums=t}}}},76:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"lucky-card",props:["value"]}},77:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"mu-footer"}},78:function(t,e,n){var r,a;n(38),r=n(75);var u=n(83);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=u.render,a.staticRenderFns=u.staticRenderFns,t.exports=r},79:function(t,e,n){var r,a;n(36),r=n(76);var u=n(81);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=u.render,a.staticRenderFns=u.staticRenderFns,a._scopeId="data-v-05ffae90",t.exports=r},80:function(t,e,n){var r,a;n(37),r=n(77);var u=n(82);a=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(a=r=r.default),"function"==typeof a&&(a=a.options),a.render=u.render,a.staticRenderFns=u.staticRenderFns,a._scopeId="data-v-2fff6c9b",t.exports=r},81:function(t,e){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"box-card"},[t._h("h1",[t._s(t.value)])])},staticRenderFns:[]}},82:function(t,e){t.exports={render:function(){var t=this;return t._m(0)},staticRenderFns:[function(){var t=this;return t._h("div",{staticClass:"footer"},["\n  Designed and built with all the  in the world by Lab μ\n"])}]}},83:function(t,e){t.exports={render:function(){var t=this;return t._h("div",{attrs:{id:"app","no-scroll":""}},[t._l(t.total,function(e){return t._h("lucky-card",{domProps:{value:t.nums[e-1]}})})," ",t._h("mu-footer")])},staticRenderFns:[]}}});
//# sourceMappingURL=app.1af17e69fbde1d75094d.js.map