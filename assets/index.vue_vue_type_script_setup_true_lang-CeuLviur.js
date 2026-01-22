
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as f,n as i,a7 as m,x as z,c as S,o as h,f as l,M as y,A as d,e as o,B as u,a4 as C}from"./index-H6QnEWHf.js";const b=f({name:"FaSpotlightCard",__name:"index",props:{gradientSize:{default:200},gradientColor:{default:"hsl(var(--primary))"},gradientOpacity:{default:.1},class:{},slotClass:{}},setup(r){const e=r,t=i(-e.gradientSize*10),n=i(-e.gradientSize*10);function c(a){const s=a.currentTarget.getBoundingClientRect();t.value=a.clientX-s.left,n.value=a.clientY-s.top}function g(){t.value=-e.gradientSize*10,n.value=-e.gradientSize*10}m(()=>{t.value=-e.gradientSize*10,n.value=-e.gradientSize*10});const p=z(()=>"radial-gradient(\n    circle ".concat(e.gradientSize,"px at ").concat(t.value,"px ").concat(n.value,"px,\n    ").concat(e.gradientColor," 0%,\n    rgba(0, 0, 0, 0) 100%\n  )"));return(a,v)=>(h(),S("div",{class:d(o(u)("group/spotlightCard relative size-full overflow-hidden border rounded-xl bg-neutral-950/[.012] dark:bg-white/5",e.class)),onMousemove:c,onMouseleave:g},[l("div",{class:d(o(u)("relative z-10",e.slotClass))},[y(a.$slots,"default")],2),l("div",{class:"pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover/spotlightCard:opacity-100",style:C({background:o(p),opacity:r.gradientOpacity})},null,4)],34))}});export{b as _};
