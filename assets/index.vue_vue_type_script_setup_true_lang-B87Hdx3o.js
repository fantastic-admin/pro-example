
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as i,aA as a,aB as u,e as n,f as s,P as m,ah as f,L as p,h as g,g as b,M as h}from"./index-DODNO_Fi.js";const _={key:0,class:"absolute bottom-0 left-0 w-full translate-y-1/2 text-center"},B=i({name:"FaSearchBar",__name:"index",props:a({showToggle:{type:Boolean,default:!0},background:{type:Boolean,default:!1}},{fold:{type:Boolean,default:!0},foldModifiers:{}}),emits:a(["toggle"],["update:fold"]),setup(l,{emit:r}){const d=r,e=u(l,"fold");function t(){e.value=!e.value,d("toggle",e.value)}return(o,v)=>{const c=h;return s(),n("div",{class:m(["relative",{"py-4":o.showToggle,"px-4 bg-secondary transition":o.background}])},[f(o.$slots,"default",{fold:e.value,toggle:t}),o.showToggle?(s(),n("div",_,[g("button",{class:"h-5 inline-flex cursor-pointer select-none items-center border-size-0 rounded bg-secondary px-2 text-xs font-medium outline-none",onClick:t},[b(c,{name:e.value?"i-ep:caret-bottom":"i-ep:caret-top"},null,8,["name"])])])):p("",!0)],2)}}});export{B as _};
