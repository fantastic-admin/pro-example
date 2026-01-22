
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as c,x as f,c as r,o as n,f as o,F as m,q as p,a4 as v,A as a,e as t,B as i,M as g,h as b}from"./index-H6QnEWHf.js";const h={class:"relative"},k=c({name:"FaMarquee",__name:"index",props:{class:{},reverse:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},repeat:{default:4}},setup(e){const s=e,l=f(()=>s.vertical?["pointer-events-none absolute inset-x-0 top-0 h-1/3 from-white bg-gradient-to-b dark:from-background","pointer-events-none absolute inset-x-0 bottom-0 h-1/3 from-white bg-gradient-to-t dark:from-background"]:["pointer-events-none absolute inset-y-0 left-0 w-1/5 from-white bg-gradient-to-r dark:from-background","pointer-events-none absolute inset-y-0 right-0 w-1/5 from-white bg-gradient-to-l dark:from-background"]);return(d,x)=>(n(),r("div",h,[o("div",{class:a(t(i)("group/marquee flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",e.vertical?"flex-col":"flex-row",s.class))},[(n(!0),r(m,null,p(e.repeat,u=>(n(),r("div",{key:u,class:a(t(i)("flex shrink-0 justify-around [gap:var(--gap)]",e.vertical?"animate-marquee-vertical flex-col":"animate-marquee flex-row",e.pauseOnHover?"group-hover/marquee:[animation-play-state:paused]":"")),style:v({animationDirection:e.reverse?"reverse":"normal"})},[g(d.$slots,"default",{},void 0,!0)],6))),128))],2),o("div",{class:a(t(l)[0])},null,2),o("div",{class:a(t(l)[1])},null,2)]))}}),w=b(k,[["__scopeId","data-v-813c3bdb"]]);export{w as _};
