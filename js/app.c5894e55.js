(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-55a3aae4":"9d8bdac9","chunk-7040172c":"25942ccb"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-55a3aae4":1,"chunk-7040172c":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-55a3aae4":"967689fa","chunk-7040172c":"d8b9cf18"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-crud/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"024c":function(e,t,n){"use strict";var r=n("7f5c"),a=n.n(r);a.a},"032d":function(e,t,n){"use strict";var r=n("59ca"),a=n.n(r),o=(n("e71f"),{apiKey:"AIzaSyAATLfmqqwBkTXxnqmbPUNd7nOi-afqt3M",authDomain:"job-title-tags.firebaseapp.com",databaseURL:"https://job-title-tags.firebaseio.com",projectId:"job-title-tags",storageBucket:"job-title-tags.appspot.com",messagingSenderId:"324531096092",appId:"1:324531096092:web:84fa0424eeb6bcee6f2dd9",measurementId:"G-ZW5Z0M31YR"}),i=a.a.initializeApp(o);t["a"]=i.firestore()},"1a12":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar"},[n("nav",{staticClass:"nav-extended grey darken-2"},[n("div",{staticClass:"nav-content"},[n("router-link",{attrs:{to:"/"}},[n("span",{staticClass:"nav-title"},[e._v("Job Dashboard")])]),n("a",{staticClass:"btn-floating btn-large halfway-fab deep-orange darken-1"},[n("router-link",{attrs:{to:"/addnew"}},[n("i",{staticClass:"material-icons"},[e._v("add")])])],1)],1)])])},s=[],c=(n("5dfc"),n("2877")),u={},l=Object(c["a"])(u,i,s,!1,null,null,null),d=l.exports,f={components:{Navbar:d}},p=f,h=Object(c["a"])(p,a,o,!1,null,null,null),v=h.exports,g=n("9483");Object(g["a"])("".concat("/vue-crud/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var m=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index container"},e._l(e.smoothies,(function(t){return n("div",{key:t.id,staticClass:"card"},[n("div",{staticClass:"card-content"},[n("i",{staticClass:"material-icons delete",on:{click:function(n){return e.deleteSmoothie(t.id)}}},[e._v("delete")]),n("h2",{staticClass:"deep-orange-text text-darken-1"},[e._v(e._s(t.ui))]),n("ul",{staticClass:"ingredients"},e._l(t.ingredients,(function(t,r){return n("li",{key:r},[n("span",{staticClass:"chip"},[e._v(e._s(t))])])})),0)]),n("span",{staticClass:"btn-floating btn-large halfway-fab deep-orange darken-1"},[n("router-link",{attrs:{to:{name:"EditPost",params:{post_slug:t.slug}}}},[n("i",{staticClass:"material-icons edit"},[e._v("edit")])])],1)])})),0)},y=[],w=(n("4de4"),n("4160"),n("159b"),n("032d")),k={data:function(){return{smoothies:[]}},created:function(){var e=this;w["a"].collection("web-designer").get().then((function(t){t.forEach((function(t){var n=t.data();n.id=t.id,e.smoothies.push(n)}))}))},methods:{deleteSmoothie:function(e){var t=this;w["a"].collection("web-designer").doc(e).delete().then((function(){t.smoothies=t.smoothies.filter((function(t){return t.id!=e}))}))}}},_=k,C=(n("024c"),Object(c["a"])(_,b,y,!1,null,null,null)),j=C.exports;r["a"].use(m["a"]);var O=[{path:"/",name:"Index",component:j},{path:"/addnew",name:"NewJobPost",component:function(){return n.e("chunk-55a3aae4").then(n.bind(null,"bef8"))}},{path:"/editpost/:post_slug",name:"EditPost",component:function(){return n.e("chunk-7040172c").then(n.bind(null,"506b"))}}],x=new m["a"]({routes:O}),E=x;r["a"].config.productionTip=!1,new r["a"]({router:E,render:function(e){return e(v)}}).$mount("#app")},"5dfc":function(e,t,n){"use strict";var r=n("1a12"),a=n.n(r);a.a},"7f5c":function(e,t,n){}});
//# sourceMappingURL=app.c5894e55.js.map