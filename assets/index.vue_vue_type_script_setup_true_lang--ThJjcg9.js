
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as m,aI as f,r as b,o,k as a,Z as n,g,t as u,m as r,b as v,e as s,f as h,v as _,N as y,_ as k}from"./index-DL7SpVKF.js";const C={key:0,class:"title-container border-b-1 border-b-[var(--g-bg)] border-b-solid px-5 py-4 transition-border-color-300"},S={class:"main-container p-5"},B=m({name:"PageMain",__name:"index",props:{title:{default:""},collaspe:{type:Boolean,default:!1},height:{default:""}},setup(l){const i=l,c=!!f().title,t=b(i.collaspe);function p(){t.value=!1}return(e,x)=>{const d=k;return o(),a("div",{class:_(["page-main relative m-4 flex flex-col bg-[var(--g-container-bg)] transition-background-color-300",{"of-hidden":s(t)}]),style:y({height:s(t)?e.height:""})},[c||e.title?(o(),a("div",C,[n(e.$slots,"title",{},()=>[g(u(e.title),1)])])):r("",!0),v("div",S,[n(e.$slots,"default")]),s(t)?(o(),a("div",{key:1,class:"collaspe absolute bottom-0 w-full cursor-pointer from-transparent to-[var(--g-container-bg)] bg-gradient-to-b pb-2 pt-10 text-center",onClick:p},[h(d,{name:"i-ep:arrow-down",class:"text-xl op-30 transition-opacity hover-op-100"})])):r("",!0)],6)}}});export{B as _};
