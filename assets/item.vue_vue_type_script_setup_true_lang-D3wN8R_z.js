
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as n,x as c,o as i,l as p,e as s,t as l,$ as m,q as d}from"./index-D4ACN76T.js";const u={class:"breadcrumb-item flex items-center text-dark dark-text-white"},f={class:"separator mx-2"},h=n({__name:"item",props:{to:{},replace:{type:Boolean},separator:{default:"/"}},setup(a){const e=a,t=c();function r(){e.to&&(e.replace?t.replace(e.to):t.push(e.to))}return(o,_)=>(i(),p("div",u,[s("span",f,l(o.separator),1),s("span",{class:d(["text flex items-center opacity-60",{"is-link cursor-pointer transition-opacity hover-opacity-100":!!e.to}]),onClick:r},[m(o.$slots,"default")],2)]))}});export{h as _};
