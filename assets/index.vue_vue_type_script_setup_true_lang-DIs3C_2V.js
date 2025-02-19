
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as l,K as n,g as c,j as e,bg as d,P as u,ac as f,m as t,ab as p,bh as h,z as m,A as _,bi as v,x as b,b8 as x,k as i,B as g,i as z}from"./index-xcJMzuCA.js";const k=l({__name:"Avatar",props:{class:{},size:{default:"sm"},shape:{default:"circle"}},setup(a){const r=a;return(s,o)=>(c(),n(e(d),{class:u(e(f)(e($)({size:s.size,shape:s.shape}),r.class))},{default:t(()=>[p(s.$slots,"default")]),_:3},8,["class"]))}}),y=l({__name:"AvatarFallback",props:{delayMs:{},asChild:{type:Boolean},as:{}},setup(a){const r=a;return(s,o)=>(c(),n(e(h),m(_(r)),{default:t(()=>[p(s.$slots,"default")]),_:3},16))}}),w=l({__name:"AvatarImage",props:{src:{},referrerPolicy:{},asChild:{type:Boolean},as:{}},setup(a){const r=a;return(s,o)=>(c(),n(e(v),b(r,{class:"h-full w-full object-cover"}),null,16))}}),$=x("inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden",{variants:{size:{sm:"h-10 w-10 text-xs",base:"h-16 w-16 text-2xl",lg:"h-32 w-32 text-5xl"},shape:{circle:"rounded-full",square:"rounded-md"}}}),C=l({__name:"index",props:{src:{},fallback:{},shape:{},class:{}},setup(a){const r=a;return(s,o)=>(c(),n(e(k),{shape:s.shape,class:u(r.class)},{default:t(()=>[i(e(w),{src:s.src},null,8,["src"]),i(e(y),{class:"inline-flex"},{default:t(()=>[p(s.$slots,"default",{},()=>[g(z(s.fallback),1)])]),_:3})]),_:3},8,["shape","class"]))}});export{C as _};
