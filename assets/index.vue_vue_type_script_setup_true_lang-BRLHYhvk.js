
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as f,g as s,Z as m,M as z,c as S,o as h,l,r as y,n as i,a as o,b as d,U as C}from"./index-CngbNVLW.js";const M=f({name:"FaSpotlightCard",__name:"index",props:{gradientSize:{default:200},gradientColor:{default:"hsl(var(--primary))"},gradientOpacity:{default:.1},class:{},slotClass:{}},setup(u){const e=u,t=s(-e.gradientSize*10),n=s(-e.gradientSize*10);function c(a){const r=a.currentTarget.getBoundingClientRect();t.value=a.clientX-r.left,n.value=a.clientY-r.top}function g(){t.value=-e.gradientSize*10,n.value=-e.gradientSize*10}m(()=>{t.value=-e.gradientSize*10,n.value=-e.gradientSize*10});const p=z(()=>"radial-gradient(\n    circle ".concat(e.gradientSize,"px at ").concat(t.value,"px ").concat(n.value,"px,\n    ").concat(e.gradientColor," 0%,\n    rgba(0, 0, 0, 0) 100%\n  )"));return(a,v)=>(h(),S("div",{class:i(o(d)("group/spotlightCard relative size-full overflow-hidden border rounded-xl bg-neutral-950/[.012] dark:bg-white/5",e.class)),onMousemove:c,onMouseleave:g},[l("div",{class:i(o(d)("relative z-10",e.slotClass))},[y(a.$slots,"default")],2),l("div",{class:"pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover/spotlightCard:opacity-100",style:C({background:o(p),opacity:a.gradientOpacity})},null,4)],34))}});export{M as _};
