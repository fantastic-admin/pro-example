
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as S}from"./index.vue_vue_type_script_setup_true_lang-DXnSJe_z.js";import{d as y,r as p,Z as C,K as $,f as _,g as v,Q as g,l as d,ac as f,i as s,ah as b,R as M,V as k,h as a,j as r,N as w,W as m}from"./index-BIIATpY8.js";import{_ as F}from"./index.vue_vue_type_script_setup_true_lang-DgGeXOC9.js";const B=y({__name:"index",props:{gradientSize:{default:200},gradientColor:{default:"hsl(var(--primary))"},gradientOpacity:{default:.1},class:{},slotClass:{}},setup(c){const e=c,n=p(-e.gradientSize*10),t=p(-e.gradientSize*10);function i(o){const u=o.currentTarget.getBoundingClientRect();n.value=o.clientX-u.left,t.value=o.clientY-u.top}function l(){n.value=-e.gradientSize*10,t.value=-e.gradientSize*10}C(()=>{n.value=-e.gradientSize*10,t.value=-e.gradientSize*10});const x=$(()=>`radial-gradient(
    circle ${e.gradientSize}px at ${n.value}px ${t.value}px,
    ${e.gradientColor} 0%,
    rgba(0, 0, 0, 0) 100%
  )`);return(o,z)=>(v(),_("div",{class:g(d(f)("group/spotlightCard relative size-full overflow-hidden border rounded-xl bg-neutral-950/[.012] dark:bg-white/5",e.class)),onMousemove:i,onMouseleave:l},[s("div",{class:g(d(f)("relative z-10",e.slotClass))},[b(o.$slots,"default")],2),s("div",{class:"pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover/spotlightCard:opacity-100",style:M({background:d(x),opacity:o.gradientOpacity})},null,4)],34))}}),h={},N={class:"flex flex-col gap-2 rounded p-6 lg:p-8"},V={class:"flex flex-col gap-2 rounded p-6 lg:p-8"};function O(c,e){const n=F,t=w,i=B,l=S;return v(),_("div",null,[a(n,{title:"聚光卡片",description:"FaSpotlightCard"}),a(l,null,{default:r(()=>[a(i,null,{default:r(()=>[s("div",N,[a(t,{name:"i-ri:magic-line",class:"h-8 w-8"}),e[0]||(e[0]=s("h1",{class:"text-2xl font-medium"}," 悬停在这 ",-1))])]),_:1})]),_:1}),a(l,{title:"尺寸 / 颜色 / 透明底"},{default:r(()=>[a(i,{"gradient-size":100,"gradient-color":"red","gradient-opacity":1},{default:r(()=>[s("div",V,[a(t,{name:"i-ri:magic-line",class:"h-8 w-8"}),e[1]||(e[1]=s("h1",{class:"text-2xl font-medium"}," 悬停在这 ",-1))])]),_:1})]),_:1})])}typeof m=="function"&&m(h);const Y=k(h,[["render",O]]);export{Y as default};
