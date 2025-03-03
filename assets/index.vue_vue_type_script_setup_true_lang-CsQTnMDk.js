
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as l,K as n,g as c,j as a,bg as d,P as u,ab as f,m as t,aa as p,bh as h,z as m,A as _,bi as v,x as b,b8 as x,k as i,B as g,i as z}from"./index-DMc4HI8f.js";const k=l({__name:"Avatar",props:{class:{},size:{default:"sm"},shape:{default:"circle"}},setup(e){const r=e;return(s,o)=>(c(),n(a(d),{class:u(a(f)(a($)({size:s.size,shape:s.shape}),r.class))},{default:t(()=>[p(s.$slots,"default")]),_:3},8,["class"]))}}),y=l({__name:"AvatarFallback",props:{delayMs:{},asChild:{type:Boolean},as:{}},setup(e){const r=e;return(s,o)=>(c(),n(a(h),m(_(r)),{default:t(()=>[p(s.$slots,"default")]),_:3},16))}}),w=l({__name:"AvatarImage",props:{src:{},referrerPolicy:{},asChild:{type:Boolean},as:{}},setup(e){const r=e;return(s,o)=>(c(),n(a(v),b(r,{class:"h-full w-full object-cover"}),null,16))}}),$=x("inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden",{variants:{size:{sm:"h-10 w-10 text-xs",base:"h-16 w-16 text-2xl",lg:"h-32 w-32 text-5xl"},shape:{circle:"rounded-full",square:"rounded-md"}}}),C=l({__name:"index",props:{src:{},fallback:{},shape:{},class:{}},setup(e){const r=e;return(s,o)=>(c(),n(a(k),{shape:s.shape,class:u(r.class)},{default:t(()=>[i(a(w),{src:s.src},null,8,["src"]),i(a(y),{class:"inline-flex"},{default:t(()=>[p(s.$slots,"default",{},()=>[g(z(s.fallback),1)])]),_:3})]),_:3},8,["shape","class"]))}});export{C as _};
