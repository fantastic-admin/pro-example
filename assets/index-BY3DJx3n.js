
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as p,M as c,c as t,o,l as n,n as a,a as r,b as i,Q as m,R as f,S as v,r as g,V as b}from"./index-DFNzsyWB.js";const h={class:"relative"},k=p({name:"FaMarquee",__name:"index",props:{class:{},reverse:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},repeat:{default:4}},setup(d){const s=d,l=c(()=>s.vertical?["pointer-events-none absolute inset-x-0 top-0 h-1/3 from-white bg-gradient-to-b dark:from-background","pointer-events-none absolute inset-x-0 bottom-0 h-1/3 from-white bg-gradient-to-t dark:from-background"]:["pointer-events-none absolute inset-y-0 left-0 w-1/5 from-white bg-gradient-to-r dark:from-background","pointer-events-none absolute inset-y-0 right-0 w-1/5 from-white bg-gradient-to-l dark:from-background"]);return(e,_)=>(o(),t("div",h,[n("div",{class:a(r(i)("group/marquee flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",e.vertical?"flex-col":"flex-row",s.class))},[(o(!0),t(m,null,f(e.repeat,u=>(o(),t("div",{key:u,class:a(r(i)("flex shrink-0 justify-around [gap:var(--gap)]",e.vertical?"animate-marquee-vertical flex-col":"animate-marquee flex-row",e.pauseOnHover?"group-hover/marquee:[animation-play-state:paused]":"")),style:v({animationDirection:e.reverse?"reverse":"normal"})},[g(e.$slots,"default",{},void 0,!0)],6))),128))],2),n("div",{class:a(r(l)[0])},null,2),n("div",{class:a(r(l)[1])},null,2)]))}}),w=b(k,[["__scopeId","data-v-813c3bdb"]]);export{w as _};
