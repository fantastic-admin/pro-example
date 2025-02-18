
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as l,z as n,o,e,bv as f,D as i,a1 as d,g as t,a0 as p,bw as h,n as m,h as _,bx as v,m as b,bq as x,f as u,j as g,t as z}from"./index-Bbf2k3Iz.js";const w=l({__name:"Avatar",props:{class:{},size:{default:"sm"},shape:{default:"circle"}},setup(a){const r=a;return(s,c)=>(o(),n(e(f),{class:i(e(d)(e($)({size:s.size,shape:s.shape}),r.class))},{default:t(()=>[p(s.$slots,"default")]),_:3},8,["class"]))}}),y=l({__name:"AvatarFallback",props:{delayMs:{},asChild:{type:Boolean},as:{}},setup(a){const r=a;return(s,c)=>(o(),n(e(h),m(_(r)),{default:t(()=>[p(s.$slots,"default")]),_:3},16))}}),k=l({__name:"AvatarImage",props:{src:{},referrerPolicy:{},asChild:{type:Boolean},as:{}},setup(a){const r=a;return(s,c)=>(o(),n(e(v),b(r,{class:"h-full w-full object-cover"}),null,16))}}),$=x("inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden",{variants:{size:{sm:"h-10 w-10 text-xs",base:"h-16 w-16 text-2xl",lg:"h-32 w-32 text-5xl"},shape:{circle:"rounded-full",square:"rounded-md"}}}),B=l({__name:"index",props:{src:{},fallback:{},shape:{},class:{}},setup(a){const r=a;return(s,c)=>(o(),n(e(w),{shape:s.shape,class:i(r.class)},{default:t(()=>[u(e(k),{src:s.src},null,8,["src"]),u(e(y),{class:"inline-flex"},{default:t(()=>[p(s.$slots,"default",{},()=>[g(z(s.fallback),1)])]),_:3})]),_:3},8,["shape","class"]))}});export{B as _};
