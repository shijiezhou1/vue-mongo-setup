(function(t){function e(e){for(var r,s,c=e[0],i=e[1],u=e[2],l=0,f=[];l<c.length;l++)s=c[l],o[s]&&f.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"22a2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("PostComponent")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"containter"},[n("div",[n("h1",[t._v(" Latest Posts ")]),n("div",{staticClass:"create-post"},[n("label",{attrs:{for:"create-post"}},[t._v("say something")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",id:"create-post",placeholder:"Create a Post"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("button",{on:{click:t.createPost}},[t._v("Post!")])]),n("hr"),t.error?n("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),n("div",{staticClass:"post-container"},t._l(t.posts,function(e,r){return n("div",{key:e._id,staticClass:"post",attrs:{item:e,index:r},on:{dblclick:function(n){t.deletePost(e._id)}}},[t._v("\n        "+t._s(e.createdAt.getDate()+" / "+e.createdAt.getMonth()+" /\n        "+e.createdAt.getFullYear()+" ")+" \n        "),n("p",{staticClass:"text"},[t._v(t._s(e.text))])])}),0)])])},c=[],i=(n("96cf"),n("1da1")),u=n("be94"),p=n("d4ec"),l=n("bee2"),f=n("bc3a"),d=n.n(f),v="api/posts/",h=function(){function t(){Object(p["a"])(this,t)}return Object(l["a"])(t,null,[{key:"getPosts",value:function(){return new Promise(function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e,n){var r,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get(v);case 3:r=t.sent,o=r.data,e(o.map(function(t){return Object(u["a"])({},t,{createdAt:new Date(t.createdAt)})})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),n(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(e,n){return t.apply(this,arguments)}}())}},{key:"insertPost",value:function(t){return d.a.post(v,{text:t})}},{key:"deletePost",value:function(t){return d.a.delete("".concat(v).concat(t))}}]),t}(),m=h,g=(n("422b"),{name:"PostComponent",data:function(){return{posts:[],error:"",text:""}},created:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.getPosts();case 3:this.posts=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.error=t.t0.message;case 9:case"end":return t.stop()}},t,this,[[0,6]])}));function e(){return t.apply(this,arguments)}return e}(),methods:{createPost:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.insertPost(this.text);case 2:return t.next=4,m.getPosts();case 4:this.posts=t.sent;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),deletePost:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.deletePost(e);case 2:return console.log("success"),t.next=5,m.getPosts();case 5:this.posts=t.sent;case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}}),b=g,x=(n("ac2f"),n("2877")),P=Object(x["a"])(b,s,c,!1,null,"aaad6498",null);P.options.__file="PostComponent.vue";var _=P.exports,w={name:"app",components:{PostComponent:_}},y=w,O=(n("034f"),Object(x["a"])(y,o,a,!1,null,null,null));O.options.__file="App.vue";var j=O.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(j)}}).$mount("#app")},"64a9":function(t,e,n){},ac2f:function(t,e,n){"use strict";var r=n("22a2"),o=n.n(r);o.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.8430dc60.js.map