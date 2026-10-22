
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e,C as t,St as n,yt as r}from"./reactivity.esm-bundler-DQLEWij_.js";import{_ as i,b as a,ct as o,g as s,k as c,mt as l,xt as u}from"./runtime-core.esm-bundler-B5ds1qB8.js";import{un as d}from"./src-XafWzjth.js";var f=c({name:`BuiltInSpotlightCard`,__name:`index`,props:{gradientSize:{default:200},gradientColor:{default:`oklch(var(--primary))`},gradientOpacity:{default:.1},class:{type:[Boolean,null,String,Object,Array]},slotClass:{type:[Boolean,null,String,Object,Array]}},setup(c){let f=c,p=t(-f.gradientSize*10),m=t(-f.gradientSize*10);function h(e){let t=e.currentTarget.getBoundingClientRect();p.value=e.clientX-t.left,m.value=e.clientY-t.top}function g(){p.value=-f.gradientSize*10,m.value=-f.gradientSize*10}o(()=>{p.value=-f.gradientSize*10,m.value=-f.gradientSize*10});let _=s(()=>`radial-gradient(
    circle ${f.gradientSize}px at ${p.value}px ${m.value}px,
    ${f.gradientColor} 0%,
    rgba(0, 0, 0, 0) 100%
  )`);return(t,o)=>(l(),a(`div`,{class:r(e(d)(`group/spotlightCard relative size-full overflow-hidden border rounded-xl bg-neutral-950/[.012] dark:bg-white/5`,f.class)),onMousemove:h,onMouseleave:g},[i(`div`,{class:r(e(d)(`relative z-10`,f.slotClass))},[u(t.$slots,`default`)],2),i(`div`,{class:`rounded-xl opacity-0 pointer-events-none transition-opacity duration-300 inset-0 absolute group-hover/spotlightCard:opacity-100`,style:n({background:_.value,opacity:c.gradientOpacity})},null,4)],34))}});export{f as t};