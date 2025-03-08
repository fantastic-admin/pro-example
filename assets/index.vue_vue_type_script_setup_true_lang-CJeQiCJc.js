
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as t,L as n,g as c,l as e,bj as d,Q as i,ac as f,j as l,ah as p,bk as h,A as _,B as m,bl as v,y as b,bb as x,h as u,C as g,k}from"./index-BIIATpY8.js";const y=t({__name:"Avatar",props:{class:{},size:{default:"sm"},shape:{default:"circle"}},setup(a){const r=a;return(s,o)=>(c(),n(e(d),{class:i(e(f)(e(C)({size:s.size,shape:s.shape}),r.class))},{default:l(()=>[p(s.$slots,"default")]),_:3},8,["class"]))}}),z=t({__name:"AvatarFallback",props:{delayMs:{},asChild:{type:Boolean},as:{}},setup(a){const r=a;return(s,o)=>(c(),n(e(h),_(m(r)),{default:l(()=>[p(s.$slots,"default")]),_:3},16))}}),w=t({__name:"AvatarImage",props:{src:{},referrerPolicy:{},asChild:{type:Boolean},as:{}},setup(a){const r=a;return(s,o)=>(c(),n(e(v),b(r,{class:"h-full w-full object-cover"}),null,16))}}),C=x("inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden",{variants:{size:{sm:"h-10 w-10 text-xs",base:"h-16 w-16 text-2xl",lg:"h-32 w-32 text-5xl"},shape:{circle:"rounded-full",square:"rounded-md"}}}),B=t({__name:"index",props:{src:{},fallback:{},shape:{},class:{}},setup(a){const r=a;return(s,o)=>(c(),n(e(y),{shape:s.shape,class:i(r.class)},{default:l(()=>[u(e(w),{src:s.src},null,8,["src"]),u(e(z),{class:"inline-flex"},{default:l(()=>[p(s.$slots,"default",{},()=>[g(k(s.fallback),1)])]),_:3})]),_:3},8,["shape","class"]))}});export{B as _};
