
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as f,g as s,Z as m,M as z,c as S,o as h,l as i,r as y,n as d,a as o,b as u,U as C}from"./index-B13-Jify.js";const x=f({name:"FaSpotlightCard",__name:"index",props:{gradientSize:{default:200},gradientColor:{default:"hsl(var(--primary))"},gradientOpacity:{default:.1},class:{},slotClass:{}},setup(r){const e=r,t=s(-e.gradientSize*10),n=s(-e.gradientSize*10);function c(a){const l=a.currentTarget.getBoundingClientRect();t.value=a.clientX-l.left,n.value=a.clientY-l.top}function g(){t.value=-e.gradientSize*10,n.value=-e.gradientSize*10}m(()=>{t.value=-e.gradientSize*10,n.value=-e.gradientSize*10});const p=z(()=>"radial-gradient(\n    circle ".concat(e.gradientSize,"px at ").concat(t.value,"px ").concat(n.value,"px,\n    ").concat(e.gradientColor," 0%,\n    rgba(0, 0, 0, 0) 100%\n  )"));return(a,v)=>(h(),S("div",{class:d(o(u)("group/spotlightCard relative size-full overflow-hidden border rounded-xl bg-neutral-950/[.012] dark:bg-white/5",e.class)),onMousemove:c,onMouseleave:g},[i("div",{class:d(o(u)("relative z-10",e.slotClass))},[y(a.$slots,"default")],2),i("div",{class:"pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover/spotlightCard:opacity-100",style:C({background:o(p),opacity:r.gradientOpacity})},null,4)],34))}});export{x as _};
