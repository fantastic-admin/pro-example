
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{aN as _,d as i,y as h,z as u,o as p,e,bR as b,m as F,a1 as f,g as o,a0 as g,f as n,bS as z,n as y,h as v,_ as m,D as w,bT as L,bU as I,bV as R,bW as E,bX as j,c as k,F as x,C as N,bY as S,j as D,t as V}from"./index-Bbf2k3Iz.js";/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=_("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=_("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=_("ChevronsLeftIcon",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=_("ChevronsRightIcon",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]);/**
 * @license lucide-vue-next v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=_("EllipsisIcon",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]),Y=i({__name:"PaginationEllipsis",props:{asChild:{type:Boolean},as:{},class:{}},setup(c){const a=c,l=h(()=>{const{class:s,...t}=a;return t});return(s,t)=>(p(),u(e(b),F(l.value,{class:e(f)("w-9 h-9 flex items-center justify-center",a.class)}),{default:o(()=>[g(s.$slots,"default",{},()=>[n(e(X))])]),_:3},16,["class"]))}}),A=i({__name:"PaginationFirst",props:{asChild:{type:Boolean,default:!0},as:{},class:{}},setup(c){const a=c,l=h(()=>{const{class:s,...t}=a;return t});return(s,t)=>{const r=m;return p(),u(e(z),y(v(l.value)),{default:o(()=>[n(r,{class:w(e(f)("w-10 h-10 p-0",a.class)),variant:"outline"},{default:o(()=>[g(s.$slots,"default",{},()=>[n(e(U),{class:"h-4 w-4"})])]),_:3},8,["class"])]),_:3},16)}}}),G=i({__name:"PaginationLast",props:{asChild:{type:Boolean,default:!0},as:{},class:{}},setup(c){const a=c,l=h(()=>{const{class:s,...t}=a;return t});return(s,t)=>{const r=m;return p(),u(e(L),y(v(l.value)),{default:o(()=>[n(r,{class:w(e(f)("w-10 h-10 p-0",a.class)),variant:"outline"},{default:o(()=>[g(s.$slots,"default",{},()=>[n(e(W),{class:"h-4 w-4"})])]),_:3},8,["class"])]),_:3},16)}}}),H=i({__name:"PaginationNext",props:{asChild:{type:Boolean,default:!0},as:{},class:{}},setup(c){const a=c,l=h(()=>{const{class:s,...t}=a;return t});return(s,t)=>{const r=m;return p(),u(e(I),y(v(l.value)),{default:o(()=>[n(r,{class:w(e(f)("w-10 h-10 p-0",a.class)),variant:"outline"},{default:o(()=>[g(s.$slots,"default",{},()=>[n(e(T),{class:"h-4 w-4"})])]),_:3},8,["class"])]),_:3},16)}}}),J=i({__name:"PaginationPrev",props:{asChild:{type:Boolean,default:!0},as:{},class:{}},setup(c){const a=c,l=h(()=>{const{class:s,...t}=a;return t});return(s,t)=>{const r=m;return p(),u(e(R),y(v(l.value)),{default:o(()=>[n(r,{class:w(e(f)("w-10 h-10 p-0",a.class)),variant:"outline"},{default:o(()=>[g(s.$slots,"default",{},()=>[n(e(q),{class:"h-4 w-4"})])]),_:3},8,["class"])]),_:3},16)}}}),M=i({name:"FaPagination",__name:"index",props:{page:{},size:{},total:{}},emits:["pageChange"],setup(c,{emit:a}){const l=c,s=a;return(t,r)=>{const B=m;return p(),u(e(E),{total:l.total,"sibling-count":1,"show-edges":"","default-page":l.page,"items-per-page":l.size,"onUpdate:page":r[0]||(r[0]=C=>s("pageChange",C))},{default:o(({page:C})=>[n(e(j),{class:"flex-center gap-1"},{default:o(({items:$})=>[n(e(A),{class:"h-8 w-8 p-0"}),n(e(J),{class:"h-8 w-8 p-0"}),(p(!0),k(x,null,N($,(d,P)=>(p(),k(x,null,[d.type==="page"?(p(),u(e(S),{key:P,value:d.value,"as-child":""},{default:o(()=>[n(B,{class:"h-8 w-8 p-0",variant:d.value===C?"default":"outline"},{default:o(()=>[D(V(d.value),1)]),_:2},1032,["variant"])]),_:2},1032,["value"])):(p(),u(e(Y),{key:d.type,index:P},null,8,["index"]))],64))),256)),n(e(H),{class:"h-8 w-8 p-0"}),n(e(G),{class:"h-8 w-8 p-0"})]),_:2},1024)]),_:1},8,["total","default-page","items-per-page"])}}});export{M as _};
