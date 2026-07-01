
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{C as e,Ct as t,It as n,Mt as r,Pt as i,W as a,X as o,b as s,k as c,q as l,y as u}from"./vue.runtime.esm-bundler-BVTUj4HC.js";import{rn as d}from"./src-BKeb4UGC.js";var f=c({name:`BuiltInSpotlightCard`,__name:`index`,props:{gradientSize:{default:200},gradientColor:{default:`oklch(var(--primary))`},gradientOpacity:{default:.1},class:{type:[Boolean,null,String,Object,Array]},slotClass:{type:[Boolean,null,String,Object,Array]}},setup(c){let f=c,p=t(-f.gradientSize*10),m=t(-f.gradientSize*10);function h(e){let t=e.currentTarget.getBoundingClientRect();p.value=e.clientX-t.left,m.value=e.clientY-t.top}function g(){p.value=-f.gradientSize*10,m.value=-f.gradientSize*10}a(()=>{p.value=-f.gradientSize*10,m.value=-f.gradientSize*10});let _=u(()=>`radial-gradient(
    circle ${f.gradientSize}px at ${p.value}px ${m.value}px,
    ${f.gradientColor} 0%,
    rgba(0, 0, 0, 0) 100%
  )`);return(t,a)=>(l(),e(`div`,{class:i(r(d)(`group/spotlightCard relative size-full overflow-hidden border rounded-xl bg-neutral-950/[.012] dark:bg-white/5`,f.class)),onMousemove:h,onMouseleave:g},[s(`div`,{class:i(r(d)(`relative z-10`,f.slotClass))},[o(t.$slots,`default`)],2),s(`div`,{class:`rounded-xl opacity-0 pointer-events-none transition-opacity duration-300 inset-0 absolute group-hover/spotlightCard:opacity-100`,style:n({background:_.value,opacity:c.gradientOpacity})},null,4)],34))}});export{f as t};