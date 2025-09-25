
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as n,K as c,c as p,o as i,l as s,p as l,r as m,n as u}from"./index-DFNzsyWB.js";const d={class:"breadcrumb-item flex items-center text-foreground"},f={class:"separator mx-2"},x=n({__name:"item",props:{to:{},replace:{type:Boolean},separator:{default:"/"}},setup(a){const e=a,t=c();function r(){e.to&&(e.replace?t.replace(e.to):t.push(e.to))}return(o,_)=>(i(),p("div",d,[s("span",f,l(o.separator),1),s("span",{class:u(["text flex items-center opacity-60",{"is-link cursor-pointer transition-opacity hover-opacity-100":!!e.to}]),onClick:r},[m(o.$slots,"default")],2)]))}});export{x as _};
