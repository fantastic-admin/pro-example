
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as i,ap as a,aq as u,c as n,o as l,A as m,M as f,b as g,f as p,g as b,_ as v}from"./index-H6QnEWHf.js";const x={key:0,class:"absolute bottom-0 left-0 w-full translate-y-1/2 text-center"},B=i({name:"FaSearchBar",__name:"index",props:a({showToggle:{type:Boolean,default:!0},background:{type:Boolean,default:!1}},{fold:{type:Boolean,default:!0},foldModifiers:{}}),emits:a(["toggle"],["update:fold"]),setup(o,{emit:s}){const r=s,e=u(o,"fold");function t(){e.value=!e.value,r("toggle",e.value)}return(c,y)=>{const d=v;return l(),n("div",{class:m(["relative",{"py-4":o.showToggle,"px-4 bg-secondary transition":o.background}])},[f(c.$slots,"default",{fold:e.value,toggle:t}),o.showToggle?(l(),n("div",x,[p("button",{class:"h-5 inline-flex cursor-pointer select-none items-center border-size-0 rounded bg-secondary px-2 text-xs font-medium outline-none",onClick:t},[b(d,{name:e.value?"i-ep:caret-bottom":"i-ep:caret-top"},null,8,["name"])])])):g("",!0)],2)}}});export{B as _};
