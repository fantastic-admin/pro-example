
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as s,r as l,D as a,N as r,o as d,l as i,$ as m,q as u,f as _,y as p}from"./index-D4ACN76T.js";const f=s({name:"FixedActionBar",__name:"index",setup(g){const t=l(!1);a(()=>{e(),window.addEventListener("scroll",e)}),r(()=>{window.removeEventListener("scroll",e)});function e(){const o=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.clientHeight||document.body.clientHeight,c=document.documentElement.scrollHeight||document.body.scrollHeight;t.value=Math.ceil(o+n)>=c}return(o,n)=>(d(),i("div",{class:u(["fixed-action-bar bottom-0 z-4 bg-[var(--g-container-bg)] p-5 text-center transition",{shadow:!_(t)}]),"data-fixed-calc-width":""},[m(o.$slots,"default",{},void 0,!0)],2))}}),v=p(f,[["__scopeId","data-v-08e3fc2c"]]);export{v as _};