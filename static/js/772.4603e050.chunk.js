"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[772,186,247],{828:function(n,e,t){t.d(e,{$h:function(){return r},Mm:function(){return i},_n:function(){return a}});var r="c22cf15536964c1cf38cb65c76fb41a1",a="https://api.themoviedb.org/3/",i="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700"},898:function(n,e,t){t.d(e,{gZ:function(){return d},l2:function(){return l},oO:function(){return o},qF:function(){return p},wL:function(){return u}});var r=t(861),a=t(757),i=t.n(a),c=t(243),s=t(828),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s._n,"movie/").concat(e,"/credits?api_key=").concat(s.$h));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s._n,"/movie/").concat(e,"/reviews?api_key=").concat(s.$h,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s._n,"/trending/movie/day?language=en-US&api_key=").concat(s.$h));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s._n,"/movie/").concat(e,"?language=en-US&api_key=").concat(s.$h));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s._n,"/search/movie?include_adult=false&language=en-US&page=1&query=").concat(e,"&api_key=").concat(s.$h));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},247:function(n,e,t){t.r(e);var r=t(439),a=t(791),i=t(689),c=t(898),s=t(828),u=t(184);e.default=function(){var n=(0,i.UO)().movieId,e=(0,a.useState)([]),t=(0,r.Z)(e,2),o=t[0],d=t[1],l=(0,a.useState)(!0),p=(0,r.Z)(l,2),h=p[0],f=p[1],x=(0,a.useState)(null),v=(0,r.Z)(x,1)[0];return(0,a.useEffect)((function(){(0,c.wL)(n).then((function(n){var e=n.cast;d(e),f(!1)}))}),[n]),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Cast"}),h&&(0,u.jsx)("p",{children:"Loading..."}),v&&(0,u.jsxs)("p",{children:["Error: ",v]}),o.map((function(n){var e=n.profile_path,t=n.id,r=n.name,a=n.character;return(0,u.jsxs)("div",{children:[(0,u.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w200/".concat(e):s.Mm,alt:"".concat(r," portrait")}),(0,u.jsx)("p",{children:r}),(0,u.jsxs)("p",{children:["Character: ",a]})]},t)}))]})}},186:function(n,e,t){t.r(e);var r=t(439),a=t(791),i=t(689),c=t(898),s=t(184);e.default=function(){var n=(0,i.UO)().movieId,e=(0,a.useState)([]),t=(0,r.Z)(e,2),u=t[0],o=t[1],d=(0,a.useState)(!0),l=(0,r.Z)(d,2),p=l[0],h=l[1],f=(0,a.useState)(null),x=(0,r.Z)(f,2),v=x[0],m=x[1];return(0,a.useEffect)((function(){(0,c.oO)(n).then((function(n){var e=n.results;o(e),h(!1)})).catch((function(n){m(n.message),h(!1)}))}),[n]),0===u.length?(0,s.jsx)("h3",{children:"No Reviews."}):(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Reviews"}),p&&(0,s.jsx)("p",{children:"Loading..."}),v&&(0,s.jsxs)("p",{children:["Error: ",v]}),u.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:t}),(0,s.jsx)("p",{children:r})]},e)}))]})}},772:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,i=t(861),c=t(439),s=t(757),u=t.n(s),o=t(791),d=t(689),l=t(87),p=t(219),h=t(247),f=t(186),x=t(168),v=t(867),m=v.ZP.div(r||(r=(0,x.Z)(["\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 15px;\n\n  .additionalTitle {\n    display: flex;\n    flex-direction: column;\n    box-shadow: 10px 5px 5px grey;\n  }\n"]))),g=t(184),j=function(){var n=(0,d.UO)().movieId;return(0,g.jsxs)(m,{children:[(0,g.jsxs)("div",{className:"additionalTitle",children:[(0,g.jsx)("h3",{children:"Additional information"}),(0,g.jsx)(l.OL,{className:"header-link",to:"/movies/".concat(n,"/cast"),children:"Cast"}),(0,g.jsx)(l.OL,{className:"header-link",to:"/movies/".concat(n,"/reviews"),children:"Reviews"})]}),(0,g.jsxs)(d.Z5,{children:[(0,g.jsx)(d.AW,{path:"cast",element:(0,g.jsx)(h.default,{})}),(0,g.jsx)(d.AW,{path:"reviews",element:(0,g.jsx)(f.default,{})})]})]})},w=v.ZP.div(a||(a=(0,x.Z)(["\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 15px;\n\n  .error-bage {\n    padding: 25px;\n    border: 1px solid blue;\n    background-color: orange;\n    margin-bottom: 20px;\n    font-size: 20px;\n  }\n  .return {\n    margin-bottom: 10px;\n  }\n  .info {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n    box-shadow: 10px 5px 5px grey;\n    margin-left: 5px;\n  }\n"]))),Z=t(828),b=t(898),_=function(){var n,e,t,r=(0,d.UO)().movieId,a=(0,o.useState)(null),s=(0,c.Z)(a,2),h=s[0],f=s[1],x=(0,o.useState)(!1),v=(0,c.Z)(x,2),m=v[0],_=v[1],k=(0,o.useState)(null),y=(0,c.Z)(k,2),S=y[0],U=y[1],O=null!==(n=null===(e=(0,d.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"*";return(0,o.useEffect)((function(){var n=function(){var n=(0,i.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,_(!0),n.next=4,(0,b.l2)(r);case 4:e=n.sent,f(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),U(n.t0.message);case 11:return n.prev=11,_(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[r]),(0,g.jsx)(w,{children:(0,g.jsxs)("div",{children:[(0,g.jsx)("button",{className:"return",children:(0,g.jsx)(l.rU,{to:O,children:"Go back"})}),null!==S&&(0,g.jsx)("p",{className:"error-bage",children:S}),m&&(0,g.jsx)(p.Z,{}),null!==h&&(0,g.jsxs)("div",{className:"info",children:[(0,g.jsx)("div",{children:(0,g.jsx)("img",{src:h.poster_path?"https://image.tmdb.org/t/p/w200/".concat(h.poster_path):Z.Mm,alt:h.title})}),(0,g.jsxs)("div",{children:[(0,g.jsx)("h2",{children:h.title}),(0,g.jsxs)("p",{children:["Rating: ",Math.round(h.vote_average)]}),(0,g.jsx)("h2",{children:"Overview"}),(0,g.jsx)("p",{children:h.overview}),(0,g.jsx)("h2",{children:"Genres"}),(0,g.jsx)("ul",{children:null===(t=h.genres)||void 0===t?void 0:t.map((function(n){return(0,g.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,g.jsx)(j,{})]})})}}}]);
//# sourceMappingURL=772.4603e050.chunk.js.map