"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{828:function(e,n,t){t.d(n,{$h:function(){return r},Mm:function(){return i},_n:function(){return c}});var r="c22cf15536964c1cf38cb65c76fb41a1",c="https://api.themoviedb.org/3/",i="<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>"},186:function(e,n,t){t.r(n);var r=t(861),c=t(439),i=t(757),s=t.n(i),a=t(791),u=t(243),o=t(689),h=t(828),p=t(184);n.default=function(){var e=(0,o.UO)().movieId,n=(0,a.useState)([]),t=(0,c.Z)(n,2),i=t[0],f=t[1],l=(0,a.useState)(!0),v=(0,c.Z)(l,2),d=v[0],x=v[1],m=(0,a.useState)(null),_=(0,c.Z)(m,2),g=_[0],w=_[1];return(0,a.useEffect)((function(){var n=function(){var n=(0,r.Z)(s().mark((function n(){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("".concat(h._n,"/movie/").concat(e,"/reviews?api_key=").concat(h.$h));case 3:t=n.sent,r=t.data,f(r.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),w(n.t0.message);case 11:return n.prev=11,x(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),0===i.length?(0,p.jsx)("h3",{children:"No Reviews."}):(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Reviews"}),d&&(0,p.jsx)("p",{children:"Loading..."}),g&&(0,p.jsxs)("p",{children:["Error: ",g]}),i.map((function(e){return(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{children:e.author}),(0,p.jsx)("p",{children:e.content})]},e.id)}))]})}}}]);
//# sourceMappingURL=186.7d6b1b57.chunk.js.map