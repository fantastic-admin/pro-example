
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as l}from"./index-BGDvs7Gr.js";import{d as m,ac as d,ap as f,a1 as u,a3 as c,g as p,Z as b,N as g,o as _,m as h,l as s,n as y,a as v,r as w}from"./index-CngbNVLW.js";const H=m({name:"FaFixedActionBar",__name:"index",setup(B){const n=d("actionBarRef"),{height:i}=f(n);u(i,e=>{document.documentElement.style.setProperty("--g-main-container-padding-bottom","".concat(e,"px"))},{immediate:!0}),c(()=>{document.documentElement.style.removeProperty("--g-main-container-padding-bottom")});const r=p(!1);b(()=>{o(),window.addEventListener("scroll",o)}),c(()=>{window.removeEventListener("scroll",o)});function o(){const e=document.documentElement.scrollTop||document.body.scrollTop,a=document.documentElement.clientHeight||document.body.clientHeight,t=document.documentElement.scrollHeight||document.body.scrollHeight;r.value=Math.ceil(e+a)>=t}return(e,a)=>{const t=l;return _(),g(t,{position:"bottom"},{default:h(()=>[s("div",{ref_key:"actionBarRef",ref:n},[s("div",{class:y(["relative bottom-0 z-4 border-t bg-background p-5 text-center transition before:pointer-events-none before:absolute before:left-0 before:z-1 before:h-12 before:w-full before:from-transparent before:to-[var(--g-main-area-bg)] before:bg-gradient-to-b before:opacity-0 before:transition-opacity before:content-empty before:-top-1px before:-translate-y-full",{"before:opacity-100":!v(r)}])},[w(e.$slots,"default")],2)],512)]),_:3})}}});export{H as _};
