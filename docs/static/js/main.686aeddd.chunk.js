(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),i=n.n(r),s=(n(15),n(2)),u=n(9),o=n(0),j=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1];return Object(o.jsx)("div",{children:Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(u.a)(e))})),i(""))},children:Object(o.jsx)("input",{type:"text",value:r,onChange:function(e){i(e.target.value)}})})})},d=n(10),l=n(6),b=n.n(l),p=n(8),f=function(){var e=Object(p.a)(b.a.mark((function e(t){var n,a,c,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=TPWG105zar28SdPzlUvMR909xOnUuYkn"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=e.id,n=e.title,a=e.url;return console.log(t,n,a),Object(o.jsxs)("div",{className:"card animate__animated animate__fadeInUp",children:[Object(o.jsx)("img",{src:a,alt:n}),Object(o.jsx)("p",{children:n})]})},h=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:t}),r&&Object(o.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(o.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(o.jsx)(O,Object(d.a)({},e),e.id)}))})]})},x=function(){var e=Object(a.useState)(["One Punch"]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(j,{setCategories:c}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(e){return Object(o.jsx)(h,{category:e},e)}))})]})};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.686aeddd.chunk.js.map