(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();function N(){}function U(e){return e()}function Y(){return Object.create(null)}function q(e){e.forEach(U)}function W(e){return typeof e=="function"}function X(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let M;function P(e,t){return M||(M=document.createElement("a")),M.href=t,e===M.href}function se(e){return Object.keys(e).length===0}function m(e,t){e.appendChild(t)}function T(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode&&e.parentNode.removeChild(e)}function ie(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function g(e){return document.createElement(e)}function Z(e){return document.createTextNode(e)}function k(){return Z(" ")}function ae(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function i(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ue(e){return Array.from(e.childNodes)}function ce(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let A;function j(e){A=e}function fe(){if(!A)throw new Error("Function called outside component initialization");return A}function de(e){fe().$$.on_mount.push(e)}const O=[],G=[];let E=[];const J=[],me=Promise.resolve();let F=!1;function he(){F||(F=!0,me.then(ee))}function D(e){E.push(e)}const B=new Set;let x=0;function ee(){if(x!==0)return;const e=A;do{try{for(;x<O.length;){const t=O[x];x++,j(t),pe(t.$$)}}catch(t){throw O.length=0,x=0,t}for(j(null),O.length=0,x=0;G.length;)G.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];B.has(n)||(B.add(n),n())}E.length=0}while(O.length);for(;J.length;)J.pop()();F=!1,B.clear(),j(e)}function pe(e){if(e.fragment!==null){e.update(),q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(D)}}function ge(e){const t=[],n=[];E.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),E=t}const S=new Set;let be;function te(e,t){e&&e.i&&(S.delete(e),e.i(t))}function _e(e,t,n,r){if(e&&e.o){if(S.has(e))return;S.add(e),be.c.push(()=>{S.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ve(e){e&&e.c()}function ne(e,t,n,r){const{fragment:l,after_update:s}=e.$$;l&&l.m(t,n),r||D(()=>{const a=e.$$.on_mount.map(U).filter(W);e.$$.on_destroy?e.$$.on_destroy.push(...a):q(a),e.$$.on_mount=[]}),s.forEach(D)}function re(e,t){const n=e.$$;n.fragment!==null&&(ge(n.after_update),q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function we(e,t){e.$$.dirty[0]===-1&&(O.push(e),he(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function le(e,t,n,r,l,s,a,f=[-1]){const c=A;j(e);const o=e.$$={fragment:null,ctx:[],props:s,update:N,not_equal:l,bound:Y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Y(),dirty:f,skip_bound:!1,root:t.target||c.$$.root};a&&a(o.root);let h=!1;if(o.ctx=n?n(e,t.props||{},(b,w,...v)=>{const L=v.length?v[0]:w;return o.ctx&&l(o.ctx[b],o.ctx[b]=L)&&(!o.skip_bound&&o.bound[b]&&o.bound[b](L),h&&we(e,b)),w}):[],o.update(),h=!0,q(o.before_update),o.fragment=r?r(o.ctx):!1,t.target){if(t.hydrate){const b=ue(t.target);o.fragment&&o.fragment.l(b),b.forEach($)}else o.fragment&&o.fragment.c();t.intro&&te(e.$$.fragment),ne(e,t.target,t.anchor,t.customElement),ee()}j(c)}class oe{$destroy(){re(this,1),this.$destroy=N}$on(t,n){if(!W(n))return N;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!se(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ye="/bugi-navbar/assets/menu-burger-f20634e7.svg";function Q(e,t,n){const r=e.slice();return r[6]=t[n],r}function R(e){let t,n,r,l=e[6].name+"",s,a,f,c;return{c(){t=g("div"),n=g("a"),r=g("span"),s=Z(l),f=k(),i(n,"class","hover:text-orange-500 md:ml-0"),i(n,"href",a=e[6].link),i(t,"class",c="p-5 md:p-0 border-b border-neutral-200 md:border-0 bg-gradient-to-r "+(e[4]?"hover:from-neutral-200 hover:to-neutral-300 md:hover:from-transparent md:hover:to-transparent":"hover:backdrop-blur-lg hover:md:backdrop-blur-none"))},m(o,h){T(o,t,h),m(t,n),m(n,r),m(r,s),m(t,f)},p(o,h){h&2&&l!==(l=o[6].name+"")&&ce(s,l),h&2&&a!==(a=o[6].link)&&i(n,"href",a),h&16&&c!==(c="p-5 md:p-0 border-b border-neutral-200 md:border-0 bg-gradient-to-r "+(o[4]?"hover:from-neutral-200 hover:to-neutral-300 md:hover:from-transparent md:hover:to-transparent":"hover:backdrop-blur-lg hover:md:backdrop-blur-none"))&&i(t,"class",c)},d(o){o&&$(t)}}}function xe(e){let t,n,r,l,s,a,f,c,o,h,b,w,v,L,K,C,z,I,H,y=e[1],p=[];for(let u=0;u<y.length;u+=1)p[u]=R(Q(e,y,u));return{c(){t=g("div"),n=g("nav"),r=g("a"),l=g("img"),a=k(),f=g("div"),c=g("div");for(let u=0;u<p.length;u+=1)p[u].c();b=k(),w=g("button"),v=g("img"),C=k(),z=g("div"),i(l,"class","h-full"),i(l,"alt","logo"),P(l.src,s=e[0])||i(l,"src",s),i(r,"class","h-1/2"),i(r,"href","/"),i(c,"class",o="w-full md:flex justify-around shadow-md md:shadow-none border-x border-neutral-200 md:border-0 bg-[rgba(255,255,255,0.15)] "+(e[4]?"bg-custom-gradient":"backdrop-blur")+" md:bg-transparent md:backdrop-blur-none svelte-1p6nme8"),i(f,"id","menu"),i(f,"class",h="w-11/12 md:w-3/4 text-lg absolute -z-10 md:z-0 top-full "+(e[2]?"translate-x-0":"translate-x-[120%]")+" "+(e[3]?"pause-transition":"")+" md:relative md:top-0 md:translate-x-0 svelte-1p6nme8"),i(v,"class","h-full"),i(v,"alt","Menu"),P(v.src,L=ye)||i(v,"src",L),i(w,"class","h-1/4 md:hidden"),i(n,"class",K="relative w-full h-32 flex shadow-md border-b border-neutral-200 bg-[rgba(255,255,255,0.15)] "+(e[4]?"bg-custom-gradient":"backdrop-blur")+" items-center justify-around svelte-1p6nme8"),i(t,"class","w-full fixed top-0"),i(z,"class","mb-48")},m(u,_){T(u,t,_),m(t,n),m(n,r),m(r,l),m(n,a),m(n,f),m(f,c);for(let d=0;d<p.length;d+=1)p[d]&&p[d].m(c,null);m(n,b),m(n,w),m(w,v),T(u,C,_),T(u,z,_),I||(H=ae(w,"click",e[5]),I=!0)},p(u,[_]){if(_&1&&!P(l.src,s=u[0])&&i(l,"src",s),_&18){y=u[1];let d;for(d=0;d<y.length;d+=1){const V=Q(u,y,d);p[d]?p[d].p(V,_):(p[d]=R(V),p[d].c(),p[d].m(c,null))}for(;d<p.length;d+=1)p[d].d(1);p.length=y.length}_&16&&o!==(o="w-full md:flex justify-around shadow-md md:shadow-none border-x border-neutral-200 md:border-0 bg-[rgba(255,255,255,0.15)] "+(u[4]?"bg-custom-gradient":"backdrop-blur")+" md:bg-transparent md:backdrop-blur-none svelte-1p6nme8")&&i(c,"class",o),_&12&&h!==(h="w-11/12 md:w-3/4 text-lg absolute -z-10 md:z-0 top-full "+(u[2]?"translate-x-0":"translate-x-[120%]")+" "+(u[3]?"pause-transition":"")+" md:relative md:top-0 md:translate-x-0 svelte-1p6nme8")&&i(f,"class",h),_&16&&K!==(K="relative w-full h-32 flex shadow-md border-b border-neutral-200 bg-[rgba(255,255,255,0.15)] "+(u[4]?"bg-custom-gradient":"backdrop-blur")+" items-center justify-around svelte-1p6nme8")&&i(n,"class",K)},i:N,o:N,d(u){u&&$(t),ie(p,u),u&&$(C),u&&$(z),I=!1,H()}}}function Oe(e,t,n){let{logo:r="https://cdn-icons-png.flaticon.com/512/3973/3973133.png"}=t,{menuOptions:l=[]}=t,s=!1,a,f=!1;de(()=>{window.addEventListener("scroll",()=>{window.scrollY===0?n(4,f=!1):n(4,f=!0)}),window.addEventListener("resize",()=>{a?(clearTimeout(a),n(3,a=null)):n(3,a=setTimeout(()=>{n(3,a=null)},1e3))})});const c=()=>n(2,s=!s);return e.$$set=o=>{"logo"in o&&n(0,r=o.logo),"menuOptions"in o&&n(1,l=o.menuOptions)},[r,l,s,a,f,c]}class $e extends oe{constructor(t){super(),le(this,t,Oe,xe,X,{logo:0,menuOptions:1})}}const ke="/bugi-navbar/LetterN.png";function Ee(e){let t,n,r,l,s,a,f,c;return s=new $e({props:{menuOptions:e[0]}}),{c(){t=g("div"),n=g("img"),l=k(),ve(s.$$.fragment),a=k(),f=g("div"),f.innerHTML='<div class="w-48 h-48 bg-red-600 border-2 border-white flex place-items-center justify-center"><button>test</button></div>',i(n,"class","h-96 absolute top-0 right-0"),i(n,"alt","N"),P(n.src,r=ke)||i(n,"src",r),i(f,"class","w-96 h-96 bg-green-700 border-2 border-black flex place-items-center justify-center"),i(t,"class","h-[120vh] flex flex-col place-items-center")},m(o,h){T(o,t,h),m(t,n),m(t,l),ne(s,t,null),m(t,a),m(t,f),c=!0},p:N,i(o){c||(te(s.$$.fragment,o),c=!0)},o(o){_e(s.$$.fragment,o),c=!1},d(o){o&&$(t),re(s)}}}function Ne(e){return[[{name:"DOMOV",link:"#top"},{name:"O NAS",link:"#top"},{name:"KONTAKT",link:"#top"},{name:"KONTAKT",link:"#top"},{name:"KONTAKT",link:"#top"}]]}class Le extends oe{constructor(t){super(),le(this,t,Ne,Ee,X,{})}}new Le({target:document.getElementById("app")});
