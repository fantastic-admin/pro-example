
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as f,aK as m,r as g,o,l as a,$ as n,h as u,t as b,n as l,e as h,f as s,g as v,q as _,O as y,_ as k}from"./index-D4ACN76T.js";const C={key:0,class:"title-container border-b-1 border-b-[var(--g-bg)] border-b-solid px-5 py-4 transition-border-color-300"},S={class:"main-container p-5"},N=f({name:"PageMain",__name:"index",props:{title:{default:""},collaspe:{type:Boolean,default:!1},height:{default:""}},setup(r){const i=r,c=!!m().title,t=g(i.collaspe);function p(){t.value=!1}return(e,x)=>{const d=k;return o(),a("div",{class:_(["page-main relative m-4 flex flex-col bg-[var(--g-container-bg)] transition-background-color-300",{"of-hidden":s(t)}]),style:y({height:s(t)?e.height:""})},[c||e.title?(o(),a("div",C,[n(e.$slots,"title",{},()=>[u(b(e.title),1)])])):l("",!0),h("div",S,[n(e.$slots,"default")]),s(t)?(o(),a("div",{key:1,class:"collaspe absolute bottom-0 w-full cursor-pointer from-transparent to-[var(--g-container-bg)] bg-gradient-to-b pb-2 pt-10 text-center",onClick:p},[v(d,{name:"i-ep:arrow-down",class:"text-xl op-30 transition-opacity hover-op-100"})])):l("",!0)],6)}}});export{N as _};
