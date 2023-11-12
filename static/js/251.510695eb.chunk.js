"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[251,736,493],{493:function(e,t,n){n.r(t);var r=n(861),s=n(439),a=n(757),c=n.n(a),i=n(791),o=n(243),u=n(689),l=n(184);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";t.default=function(){var e=(0,u.UO)().movieId,t=(0,i.useState)([]),n=(0,s.Z)(t,2),a=n[0],d=n[1],h=(0,i.useState)(!0),v=(0,s.Z)(h,2),f=v[0],p=v[1],x=(0,i.useState)(null),m=(0,s.Z)(x,2),j=m[0],g=m[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("movie/".concat(e,"/credits?api_key=").concat("c22cf15536964c1cf38cb65c76fb41a1"));case 3:n=t.sent,r=n.data,d(r.cast),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),g(t.t0.message);case 11:return t.prev=11,p(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Cast"}),f&&(0,l.jsx)("p",{children:"Loading..."}),j&&(0,l.jsxs)("p",{children:["Error: ",j]}),a.map((function(e){return(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e.profile_path),alt:"".concat(e.name," portrait")}),(0,l.jsx)("p",{children:e.name}),(0,l.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))]})}},251:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(861),s=n(439),a=n(757),c=n.n(a),i=n(791),o=n(243),u=n(689),l=n(87),d=n(52),h=n(692),v=n(493),f=n(736),p=n(184),x=function(){var e=(0,u.UO)().movieId;return(0,p.jsxs)(h.R,{children:[(0,p.jsxs)("div",{className:"additionalTitle",children:[(0,p.jsx)("h3",{children:"Additional information"}),(0,p.jsx)(l.OL,{className:"header-link",to:"/movies/".concat(e,"/cast"),children:"Cast"}),(0,p.jsx)(l.OL,{className:"header-link",to:"/movies/".concat(e,"/reviews"),children:"Reviews"})]}),(0,p.jsxs)(u.Z5,{children:[(0,p.jsx)(u.AW,{path:"cast",element:(0,p.jsx)(v.default,{})}),(0,p.jsx)(u.AW,{path:"reviews",element:(0,p.jsx)(f.default,{})})]})]})};o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var m=function(){var e,t,n,a=(0,u.UO)().movieId,h=(0,i.useState)(null),v=(0,s.Z)(h,2),f=v[0],m=v[1],j=(0,i.useState)(!1),g=(0,s.Z)(j,2),b=g[0],Z=g[1],w=(0,i.useState)(null),k=(0,s.Z)(w,2),_=k[0],S=k[1],U=(0,u.TH)();console.log("from",U);var R=(0,i.useRef)(null!==(e=null===(t=U.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Z(!0),e.next=4,o.Z.get("movie/".concat(a,"?language=en-US&api_key=").concat("c22cf15536964c1cf38cb65c76fb41a1"));case 4:t=e.sent,n=t.data,m(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),S(e.t0.message);case 12:return e.prev=12,Z(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[a,Z,m]),(0,p.jsxs)("div",{children:[(0,p.jsx)(l.rU,{to:R.current,children:"Go back"}),null!==_&&(0,p.jsx)("p",{className:"error-bage",children:_}),b&&(0,p.jsx)(d.Z,{}),null!==f&&(0,p.jsxs)("div",{className:"info",children:[(0,p.jsx)("div",{children:(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(f.poster_path),alt:f.title})}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:f.title}),(0,p.jsxs)("p",{children:["Rating: ",Math.round(f.vote_average)]}),(0,p.jsx)("h2",{children:"Overview"}),(0,p.jsx)("p",{children:f.overview}),(0,p.jsx)("h2",{children:"Genres"}),(0,p.jsx)("p",{children:null===(n=f.genres)||void 0===n?void 0:n.map((function(e){return(0,p.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,p.jsx)(x,{})]})}},736:function(e,t,n){n.r(t);var r=n(861),s=n(439),a=n(757),c=n.n(a),i=n(791),o=n(243),u=n(689),l=n(184);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";t.default=function(){var e=(0,u.UO)().movieId,t=(0,i.useState)([]),n=(0,s.Z)(t,2),a=n[0],d=n[1],h=(0,i.useState)(!0),v=(0,s.Z)(h,2),f=v[0],p=v[1],x=(0,i.useState)(null),m=(0,s.Z)(x,2),j=m[0],g=m[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat("c22cf15536964c1cf38cb65c76fb41a1"));case 3:n=t.sent,r=n.data,d(r.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),g(t.t0.message);case 11:return t.prev=11,p(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Reviews"}),f&&(0,l.jsx)("p",{children:"Loading..."}),j&&(0,l.jsxs)("p",{children:["Error: ",j]}),a.map((function(e){return(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:e.author}),(0,l.jsx)("p",{children:e.content})]},e.id)}))]})}}}]);
//# sourceMappingURL=251.510695eb.chunk.js.map