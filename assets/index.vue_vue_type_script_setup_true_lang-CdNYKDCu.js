
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as f,r as i,Y as m,K as z,f as S,g as h,i as s,ai as y,Q as l,l as o,ae as d,R as C}from"./index-xj0hzzoN.js";const x=f({name:"FaSpotlightCard",__name:"index",props:{gradientSize:{default:200},gradientColor:{default:"hsl(var(--primary))"},gradientOpacity:{default:.1},class:{},slotClass:{}},setup(u){const e=u,t=i(-e.gradientSize*10),n=i(-e.gradientSize*10);function c(a){const r=a.currentTarget.getBoundingClientRect();t.value=a.clientX-r.left,n.value=a.clientY-r.top}function g(){t.value=-e.gradientSize*10,n.value=-e.gradientSize*10}m(()=>{t.value=-e.gradientSize*10,n.value=-e.gradientSize*10});const p=z(()=>`radial-gradient(
    circle ${e.gradientSize}px at ${t.value}px ${n.value}px,
    ${e.gradientColor} 0%,
    rgba(0, 0, 0, 0) 100%
  )`);return(a,v)=>(h(),S("div",{class:l(o(d)("group/spotlightCard relative size-full overflow-hidden border rounded-xl bg-neutral-950/[.012] dark:bg-white/5",e.class)),onMousemove:c,onMouseleave:g},[s("div",{class:l(o(d)("relative z-10",e.slotClass))},[y(a.$slots,"default")],2),s("div",{class:"pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover/spotlightCard:opacity-100",style:C({background:o(p),opacity:a.gradientOpacity})},null,4)],34))}});export{x as _};
