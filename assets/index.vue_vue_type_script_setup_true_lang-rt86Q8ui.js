
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as f,p as i,a7 as m,c as y,o as S,f as s,M as z,z as d,e as o,A as u,a4 as h,B as C}from"./index-Bhq0NWKR.js";const x=f({name:"FaSpotlightCard",__name:"index",props:{gradientSize:{default:200},gradientColor:{default:"hsl(var(--primary))"},gradientOpacity:{default:.1},class:{type:[Boolean,null,String,Object,Array]},slotClass:{type:[Boolean,null,String,Object,Array]}},setup(r){const e=r,t=i(-e.gradientSize*10),n=i(-e.gradientSize*10);function c(a){const l=a.currentTarget.getBoundingClientRect();t.value=a.clientX-l.left,n.value=a.clientY-l.top}function g(){t.value=-e.gradientSize*10,n.value=-e.gradientSize*10}m(()=>{t.value=-e.gradientSize*10,n.value=-e.gradientSize*10});const p=C(()=>"radial-gradient(\n    circle ".concat(e.gradientSize,"px at ").concat(t.value,"px ").concat(n.value,"px,\n    ").concat(e.gradientColor," 0%,\n    rgba(0, 0, 0, 0) 100%\n  )"));return(a,v)=>(S(),y("div",{class:d(o(u)("group/spotlightCard relative size-full overflow-hidden border rounded-xl bg-neutral-950/[.012] dark:bg-white/5",e.class)),onMousemove:c,onMouseleave:g},[s("div",{class:d(o(u)("relative z-10",e.slotClass))},[z(a.$slots,"default")],2),s("div",{class:"pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover/spotlightCard:opacity-100",style:h({background:o(p),opacity:r.gradientOpacity})},null,4)],34))}});export{x as _};
