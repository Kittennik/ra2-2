(this["webpackJsonpra2-2"]=this["webpackJsonpra2-2"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),o=a.n(r),s=(a(9),a(10),a(3));function i(e){var t=e.icon;return c.a.createElement("div",{className:"set-view"},c.a.createElement("div",{className:"material-icons",onClick:function(){e.onSwitch()}},t))}function m(e){var t=e.items,a=t.name,n=t.price,r=t.color,o=t.img;return c.a.createElement("div",{className:"item"},c.a.createElement("h2",{className:"name"},a),c.a.createElement("span",{className:"color"},r),c.a.createElement("img",{src:o,alt:"".concat(a,"-").concat(r)}),c.a.createElement("div",{className:"item-bottom"},c.a.createElement("span",{className:"price"},"$",n),c.a.createElement("span",{className:"button"},"Add to cart")))}function l(e){var t=e.cards;return c.a.createElement("div",{className:"cards-view"},t.map((function(e){return c.a.createElement(m,{items:e})})))}function u(e){var t=e.items,a=t.name,n=t.price,r=t.color,o=t.img;return c.a.createElement("div",{className:"item"},c.a.createElement("img",{src:o,alt:"".concat(a,"-").concat(r)}),c.a.createElement("h2",{className:"name"},a),c.a.createElement("span",{className:"color"},r),c.a.createElement("span",{className:"price"},"$",n),c.a.createElement("span",{className:"button"},"Add to cart"))}function g(e){var t=e.items;return c.a.createElement("div",{className:"list-view"},t.map((function(e){return c.a.createElement(u,{items:e})})))}function p(){var e=[{name:"Nike Metcon 2",price:"130",color:"red",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"},{name:"Nike Metcon 2",price:"130",color:"green",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"},{name:"Nike Metcon 2",price:"130",color:"blue",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"},{name:"Nike Metcon 2",price:"130",color:"black",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"},{name:"Nike free run",price:"170",color:"black",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"},{name:"Nike Metcon 3",price:"150",color:"green",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"}],t=Object(n.useState)("view_list"),a=Object(s.a)(t,2),r=a[0],o=a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(i,{icon:r,onSwitch:function(){o((function(e){return"view_list"===e?"view_module":"view_list"}))}}),"view_list"===r?c.a.createElement(l,{cards:e}):c.a.createElement(g,{items:e}))}var v=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.2f148fac.chunk.js.map