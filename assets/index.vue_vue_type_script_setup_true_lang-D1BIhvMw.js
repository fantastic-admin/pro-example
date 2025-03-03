
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{aD as _,d as i,J as h,K as u,g as p,j as e,bG as b,x as F,ab as f,m as o,aa as g,k as n,bH as L,z as y,A as v,C as m,P as w,bI as z,bJ as I,bK as E,bL as N,bM as R,f as k,N as x,O as j,bN as D,B as S,i as q}from"./index-DMc4HI8f.js";/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=_("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=_("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=_("ChevronsLeftIcon",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]);/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=_("ChevronsRightIcon",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]);/**
 * @license lucide-vue-next v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=_("EllipsisIcon",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]),H=i({__name:"PaginationEllipsis",props:{asChild:{type:Boolean},as:{},class:{}},setup(c){const a=c,l=h(()=>{const{class:s,...t}=a;return t});return(s,t)=>(p(),u(e(b),F(l.value,{class:e(f)("w-9 h-9 flex items-center justify-center",a.class)}),{default:o(()=>[g(s.$slots,"default",{},()=>[n(e(G))])]),_:3},16,["class"]))}}),M=i({__name:"PaginationFirst",props:{asChild:{type:Boolean,default:!0},as:{},class:{}},setup(c){const a=c,l=h(()=>{const{class:s,...t}=a;return t});return(s,t)=>{const r=m;return p(),u(e(L),y(v(l.value)),{default:o(()=>[n(r,{class:w(e(f)("w-10 h-10 p-0",a.class)),variant:"outline"},{default:o(()=>[g(s.$slots,"default",{},()=>[n(e(V),{class:"h-4 w-4"})])]),_:3},8,["class"])]),_:3},16)}}}),O=i({__name:"PaginationLast",props:{asChild:{type:Boolean,default:!0},as:{},class:{}},setup(c){const a=c,l=h(()=>{const{class:s,...t}=a;return t});return(s,t)=>{const r=m;return p(),u(e(z),y(v(l.value)),{default:o(()=>[n(r,{class:w(e(f)("w-10 h-10 p-0",a.class)),variant:"outline"},{default:o(()=>[g(s.$slots,"default",{},()=>[n(e(A),{class:"h-4 w-4"})])]),_:3},8,["class"])]),_:3},16)}}}),T=i({__name:"PaginationNext",props:{asChild:{type:Boolean,default:!0},as:{},class:{}},setup(c){const a=c,l=h(()=>{const{class:s,...t}=a;return t});return(s,t)=>{const r=m;return p(),u(e(I),y(v(l.value)),{default:o(()=>[n(r,{class:w(e(f)("w-10 h-10 p-0",a.class)),variant:"outline"},{default:o(()=>[g(s.$slots,"default",{},()=>[n(e(K),{class:"h-4 w-4"})])]),_:3},8,["class"])]),_:3},16)}}}),U=i({__name:"PaginationPrev",props:{asChild:{type:Boolean,default:!0},as:{},class:{}},setup(c){const a=c,l=h(()=>{const{class:s,...t}=a;return t});return(s,t)=>{const r=m;return p(),u(e(E),y(v(l.value)),{default:o(()=>[n(r,{class:w(e(f)("w-10 h-10 p-0",a.class)),variant:"outline"},{default:o(()=>[g(s.$slots,"default",{},()=>[n(e(J),{class:"h-4 w-4"})])]),_:3},8,["class"])]),_:3},16)}}}),W=i({name:"FaPagination",__name:"index",props:{page:{},size:{},total:{}},emits:["pageChange"],setup(c,{emit:a}){const l=c,s=a;return(t,r)=>{const B=m;return p(),u(e(N),{total:l.total,"sibling-count":1,"show-edges":"","default-page":l.page,"items-per-page":l.size,"onUpdate:page":r[0]||(r[0]=C=>s("pageChange",C))},{default:o(({page:C})=>[n(e(R),{class:"flex-center gap-1"},{default:o(({items:$})=>[n(e(M),{class:"h-8 w-8 p-0"}),n(e(U),{class:"h-8 w-8 p-0"}),(p(!0),k(x,null,j($,(d,P)=>(p(),k(x,null,[d.type==="page"?(p(),u(e(D),{key:P,value:d.value,"as-child":""},{default:o(()=>[n(B,{class:"h-8 w-8 p-0",variant:d.value===C?"default":"outline"},{default:o(()=>[S(q(d.value),1)]),_:2},1032,["variant"])]),_:2},1032,["value"])):(p(),u(e(H),{key:d.type,index:P},null,8,["index"]))],64))),256)),n(e(T),{class:"h-8 w-8 p-0"}),n(e(O),{class:"h-8 w-8 p-0"})]),_:2},1024)]),_:1},8,["total","default-page","items-per-page"])}}});export{W as _};
