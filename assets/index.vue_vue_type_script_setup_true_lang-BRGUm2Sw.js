
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{aI as _,d as i,K as h,L as u,g as p,l as e,bJ as b,y as L,ac as f,j as o,ah as g,h as n,bK as F,A as y,B as v,D as m,Q as w,bL as I,bM as z,bN as E,bO as R,bP as j,f as k,O as B,P as N,bQ as D,C as S,k as q}from"./index-BIIATpY8.js";/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=_("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=_("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=_("ChevronsLeftIcon",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]);/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=_("ChevronsRightIcon",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]);/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=_("EllipsisIcon",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]),J=i({__name:"PaginationEllipsis",props:{asChild:{type:Boolean},as:{},class:{}},setup(c){const a=c,l=h(()=>{const{class:s,...t}=a;return t});return(s,t)=>(p(),u(e(b),L(l.value,{class:e(f)("w-9 h-9 flex items-center justify-center",a.class)}),{default:o(()=>[g(s.$slots,"default",{},()=>[n(e(A))])]),_:3},16,["class"]))}}),M=i({__name:"PaginationFirst",props:{asChild:{type:Boolean,default:!0},as:{},class:{}},setup(c){const a=c,l=h(()=>{const{class:s,...t}=a;return t});return(s,t)=>{const r=m;return p(),u(e(F),y(v(l.value)),{default:o(()=>[n(r,{class:w(e(f)("w-10 h-10 p-0",a.class)),variant:"outline"},{default:o(()=>[g(s.$slots,"default",{},()=>[n(e(Q),{class:"h-4 w-4"})])]),_:3},8,["class"])]),_:3},16)}}}),T=i({__name:"PaginationLast",props:{asChild:{type:Boolean,default:!0},as:{},class:{}},setup(c){const a=c,l=h(()=>{const{class:s,...t}=a;return t});return(s,t)=>{const r=m;return p(),u(e(I),y(v(l.value)),{default:o(()=>[n(r,{class:w(e(f)("w-10 h-10 p-0",a.class)),variant:"outline"},{default:o(()=>[g(s.$slots,"default",{},()=>[n(e(V),{class:"h-4 w-4"})])]),_:3},8,["class"])]),_:3},16)}}}),U=i({__name:"PaginationNext",props:{asChild:{type:Boolean,default:!0},as:{},class:{}},setup(c){const a=c,l=h(()=>{const{class:s,...t}=a;return t});return(s,t)=>{const r=m;return p(),u(e(z),y(v(l.value)),{default:o(()=>[n(r,{class:w(e(f)("w-10 h-10 p-0",a.class)),variant:"outline"},{default:o(()=>[g(s.$slots,"default",{},()=>[n(e(O),{class:"h-4 w-4"})])]),_:3},8,["class"])]),_:3},16)}}}),G=i({__name:"PaginationPrev",props:{asChild:{type:Boolean,default:!0},as:{},class:{}},setup(c){const a=c,l=h(()=>{const{class:s,...t}=a;return t});return(s,t)=>{const r=m;return p(),u(e(E),y(v(l.value)),{default:o(()=>[n(r,{class:w(e(f)("w-10 h-10 p-0",a.class)),variant:"outline"},{default:o(()=>[g(s.$slots,"default",{},()=>[n(e(K),{class:"h-4 w-4"})])]),_:3},8,["class"])]),_:3},16)}}}),W=i({name:"FaPagination",__name:"index",props:{page:{},size:{},total:{}},emits:["pageChange"],setup(c,{emit:a}){const l=c,s=a;return(t,r)=>{const x=m;return p(),u(e(R),{total:l.total,"sibling-count":1,"show-edges":"","default-page":l.page,"items-per-page":l.size,"onUpdate:page":r[0]||(r[0]=C=>s("pageChange",C))},{default:o(({page:C})=>[n(e(j),{class:"flex-center gap-1"},{default:o(({items:$})=>[n(e(M),{class:"h-8 w-8 p-0"}),n(e(G),{class:"h-8 w-8 p-0"}),(p(!0),k(B,null,N($,(d,P)=>(p(),k(B,null,[d.type==="page"?(p(),u(e(D),{key:P,value:d.value,"as-child":""},{default:o(()=>[n(x,{class:"h-8 w-8 p-0",variant:d.value===C?"default":"outline"},{default:o(()=>[S(q(d.value),1)]),_:2},1032,["variant"])]),_:2},1032,["value"])):(p(),u(e(J),{key:d.type,index:P},null,8,["index"]))],64))),256)),n(e(U),{class:"h-8 w-8 p-0"}),n(e(T),{class:"h-8 w-8 p-0"})]),_:2},1024)]),_:1},8,["total","default-page","items-per-page"])}}});export{W as _};
