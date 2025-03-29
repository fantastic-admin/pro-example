
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as z,r as p,Y as C,K as y,f as _,g as v,R as g,l as d,ae as f,i as s,al as $,S as b,U as M,h as t,a9 as k,j as r,N as F,a8 as w,V as m}from"./index-Dpu-vvoM.js";const B=z({name:"FaSpotlightCard",__name:"index",props:{gradientSize:{default:200},gradientColor:{default:"hsl(var(--primary))"},gradientOpacity:{default:.1},class:{},slotClass:{}},setup(c){const e=c,n=p(-e.gradientSize*10),a=p(-e.gradientSize*10);function l(o){const u=o.currentTarget.getBoundingClientRect();n.value=o.clientX-u.left,a.value=o.clientY-u.top}function i(){n.value=-e.gradientSize*10,a.value=-e.gradientSize*10}C(()=>{n.value=-e.gradientSize*10,a.value=-e.gradientSize*10});const x=y(()=>`radial-gradient(
    circle ${e.gradientSize}px at ${n.value}px ${a.value}px,
    ${e.gradientColor} 0%,
    rgba(0, 0, 0, 0) 100%
  )`);return(o,S)=>(v(),_("div",{class:g(d(f)("group/spotlightCard relative size-full overflow-hidden border rounded-xl bg-neutral-950/[.012] dark:bg-white/5",e.class)),onMousemove:l,onMouseleave:i},[s("div",{class:g(d(f)("relative z-10",e.slotClass))},[$(o.$slots,"default")],2),s("div",{class:"pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover/spotlightCard:opacity-100",style:b({background:d(x),opacity:o.gradientOpacity})},null,4)],34))}}),h={},N={class:"flex flex-col gap-2 rounded p-6 lg:p-8"},V={class:"flex flex-col gap-2 rounded p-6 lg:p-8"};function Y(c,e){const n=k,a=F,l=B,i=w;return v(),_("div",null,[t(n,{title:"聚光卡片",description:"FaSpotlightCard"}),t(i,null,{default:r(()=>[t(l,null,{default:r(()=>[s("div",N,[t(a,{name:"i-ri:magic-line",class:"h-8 w-8"}),e[0]||(e[0]=s("h1",{class:"text-2xl font-medium"}," 悬停在这 ",-1))])]),_:1})]),_:1}),t(i,{title:"尺寸 / 颜色 / 透明底"},{default:r(()=>[t(l,{"gradient-size":100,"gradient-color":"red","gradient-opacity":1},{default:r(()=>[s("div",V,[t(a,{name:"i-ri:magic-line",class:"h-8 w-8"}),e[1]||(e[1]=s("h1",{class:"text-2xl font-medium"}," 悬停在这 ",-1))])]),_:1})]),_:1})])}typeof m=="function"&&m(h);const P=M(h,[["render",Y]]);export{P as default};
