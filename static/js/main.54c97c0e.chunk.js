(this["webpackJsonpstarter-app"]=this["webpackJsonpstarter-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(9),o=n.n(s),r=(n(14),n(15),n(16),n(0));var i=function(e){return Object(r.jsx)("div",{className:"header",children:e.title})};n(18);var l=function(e){return Object(r.jsx)("div",{className:"footer",children:e.title})},u=n(3),j=n.n(u),p=n(7),b=n(4),h=(n(20),n(21),n(24));var x=function(e){return Object(r.jsx)("div",{children:e.movies.map((function(e){return Object(r.jsxs)(h.a,{style:{width:"18rem"},children:[Object(r.jsx)(h.a.Img,{class:"poster",variant:"top",src:e.Poster}),Object(r.jsxs)(h.a.Body,{children:[Object(r.jsx)(h.a.Title,{class:"title",children:e.Title}),Object(r.jsxs)(h.a.Text,{children:["Released Date: ",e.Released," ",Object(r.jsx)("br",{}),"Runtime: ",e.Runtime," ",Object(r.jsx)("br",{}),"Genre: ",e.Genre," ",Object(r.jsx)("br",{}),"Director: ",e.Director]})]})]})}))})};var d=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),o=Object(b.a)(s,2),i=o[0],l=o[1],u=Object(c.useState)(""),h=Object(b.a)(u,2),d=h[0],f=h[1],O=Object(c.useState)(!1),m=Object(b.a)(O,2),v=m[0],g=m[1],S=Object(c.useState)(!1),w=Object(b.a)(S,2),k=w[0],y=w[1],T=Object(c.useState)(!1),N=Object(b.a)(T,2),F=N[0],C=N[1],D=Object(c.useState)(1),I=Object(b.a)(D,2),R=I[0],P=I[1],B=Object(c.useState)(R+1),M=Object(b.a)(B,2),E=M[0],G=M[1],J=Object(c.useState)(1),L=Object(b.a)(J,2),q=L[0],A=L[1];return Object(r.jsxs)("div",{className:"movieinfo",children:[Object(r.jsx)("form",{onSubmit:function(e){function t(){return(t=Object(p.a)(j.a.mark((function e(){var t,n,c,s,o,r,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=encodeURIComponent(i),f(t),n="https://www.omdbapi.com/?apikey=e147964d&s=".concat(t,"&type=movie&r=json&page=").concat(R),c="https://www.omdbapi.com/?apikey=e147964d&s=".concat(t,"&type=movie&r=json&page=").concat(E),e.next=6,fetch(n);case 6:return s=e.sent,e.next=9,fetch(c);case 9:return e.sent.ok&&y(!0),e.next=13,s.json();case 13:s=e.sent,console.log(n),console.log(s.Search),e.t0=j.a.keys(s.Search);case 17:if((e.t1=e.t0()).done){e.next=32;break}return o=e.t1.value,console.log(s.Search[o].Title),r="https://www.omdbapi.com/?apikey=e147964d&t=".concat(s.Search[o].Title,"&r=json"),console.log(r),e.next=24,fetch(r);case 24:return l=e.sent,e.next=27,l.json();case 27:l=e.sent,console.log(l),s.Search[o]=l,e.next=17;break;case 32:console.log(s.Search),a(s.Search);case 34:case"end":return e.stop()}}),e)})))).apply(this,arguments)}P(1),e.preventDefault(),function(){t.apply(this,arguments)}(),g(!0),l(""),a([])},children:Object(r.jsxs)("div",{className:"topnav",children:["Enter a Movie Name:",Object(r.jsx)("input",{id:"queryInput",value:i,type:"text",autoFocus:!0,onChange:function(e){return l(e.target.value)}}),Object(r.jsx)("button",{className:"search",children:"Search"})]})}),Object(r.jsxs)("p",{className:"buttons",children:[F?Object(r.jsx)("button",{className:"prev",onClick:function(){return function(){function e(){return(e=Object(p.a)(j.a.mark((function e(){var t,n,c,s,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://www.omdbapi.com/?apikey=e147964d&s=".concat(d,"&r=json&type=movie&page=").concat(q),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:n=e.sent,console.log(t),console.log(n.Search),e.t0=j.a.keys(n.Search);case 10:if((e.t1=e.t0()).done){e.next=25;break}return c=e.t1.value,console.log(n.Search[c].Title),s="https://www.omdbapi.com/?apikey=e147964d&t=".concat(n.Search[c].Title,"&r=json"),console.log(s),e.next=17,fetch(s);case 17:return o=e.sent,e.next=20,o.json();case 20:o=e.sent,console.log(o),n.Search[c]=o,e.next=10;break;case 25:console.log(n.Search),a(n.Search),G(q+1),P(q),q-1>0&&A(q-1),1===q&&C(!1);case 31:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),g(!0)}()},children:"\xab Prev"}):Object(r.jsx)(r.Fragment,{}),k?Object(r.jsx)("button",{className:"next",onClick:function(){return function(){function e(){return(e=Object(p.a)(j.a.mark((function e(){var t,n,c,s,o,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://www.omdbapi.com/?apikey=e147964d&s=".concat(d,"&r=json&type=movie&page=").concat(E),n="https://www.omdbapi.com/?apikey=e147964d&s=".concat(d,"&r=json&type=movie&page=").concat(q),e.next=4,fetch(t);case 4:return c=e.sent,e.next=7,fetch(n);case 7:if(e.sent.ok&&C(!0),!c.ok){e.next=36;break}return e.next=12,c.json();case 12:c=e.sent,console.log(t),console.log(c.Search),e.t0=j.a.keys(c.Search);case 16:if((e.t1=e.t0()).done){e.next=31;break}return s=e.t1.value,console.log(c.Search[s].Title),o="https://www.omdbapi.com/?apikey=e147964d&t=".concat(c.Search[s].Title,"&r=json"),console.log(o),e.next=23,fetch(o);case 23:return r=e.sent,e.next=26,r.json();case 26:r=e.sent,console.log(r),c.Search[s]=r,e.next=16;break;case 31:console.log(c.Search),a(c.Search),A(R),P(E),G(E+1);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),g(!0)}()},children:"Next \xbb"}):Object(r.jsx)(r.Fragment,{})]}),v?Object(r.jsx)(x,{movies:n}):Object(r.jsx)(r.Fragment,{}),Object(r.jsx)("p",{})]})};var f=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(i,{title:"Movie Search Tool"}),Object(r.jsx)(d,{}),Object(r.jsx)(l,{title:"2021"})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),O()}],[[22,1,2]]]);
//# sourceMappingURL=main.54c97c0e.chunk.js.map