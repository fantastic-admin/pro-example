
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as i,aj as a,ak as u,o as l,l as n,$ as g,e as m,g as f,n as p,q as b,_ as v}from"./index-D4ACN76T.js";const _={key:0,class:"absolute bottom-0 left-0 w-full translate-y-1/2 text-center"},B=i({name:"SearchBar",__name:"index",props:a({showToggle:{type:Boolean,default:!0},background:{type:Boolean,default:!1}},{fold:{type:Boolean,default:!0},foldModifiers:{}}),emits:a(["toggle"],["update:fold"]),setup(s,{emit:r}){const d=r,e=u(s,"fold");function t(){e.value=!e.value,d("toggle",e.value)}return(o,h)=>{const c=v;return l(),n("div",{class:b(["relative",{"py-4":o.showToggle,"px-4 bg-[var(--g-bg)] transition":o.background}])},[g(o.$slots,"default",{fold:e.value,toggle:t}),o.showToggle?(l(),n("div",_,[m("button",{class:"h-5 inline-flex cursor-pointer select-none items-center border-size-0 rounded bg-[var(--g-bg)] px-2 text-xs font-medium outline-none",onClick:t},[f(c,{name:e.value?"i-ep:caret-bottom":"i-ep:caret-top"},null,8,["name"])])])):p("",!0)],2)}}});export{B as _};
