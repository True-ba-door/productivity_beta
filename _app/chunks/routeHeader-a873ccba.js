import{S as E,i as g,s as D,e as c,t as v,c as f,a as o,h as b,d,b as H,g as p,J as h,j as k,k as I,m as R,K as m}from"./vendor-92af0846.js";function _(l){let e,s;return{c(){e=c("div"),s=v(l[1]),this.h()},l(t){e=f(t,"DIV",{class:!0});var i=o(e);s=b(i,l[1]),i.forEach(d),this.h()},h(){H(e,"class","text-muted")},m(t,i){p(t,e,i),h(e,s)},p(t,i){i&2&&k(s,t[1])},d(t){t&&d(e)}}}function S(l){let e,s,t,i,a=l[1]&&_(l);return{c(){e=c("div"),s=c("h2"),t=v(l[0]),i=I(),a&&a.c(),this.h()},l(n){e=f(n,"DIV",{class:!0});var r=o(e);s=f(r,"H2",{});var u=o(s);t=b(u,l[0]),u.forEach(d),i=R(r),a&&a.l(r),r.forEach(d),this.h()},h(){H(e,"class","pt-3 text-center w-100 m-auto")},m(n,r){p(n,e,r),h(e,s),h(s,t),h(e,i),a&&a.m(e,null)},p(n,[r]){r&1&&k(t,n[0]),n[1]?a?a.p(n,r):(a=_(n),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:m,o:m,d(n){n&&d(e),a&&a.d()}}}function V(l,e,s){let{header:t=""}=e,{subHeader:i=""}=e;return l.$$set=a=>{"header"in a&&s(0,t=a.header),"subHeader"in a&&s(1,i=a.subHeader)},[t,i]}class q extends E{constructor(e){super();g(this,e,V,S,D,{header:0,subHeader:1})}}export{q as R};