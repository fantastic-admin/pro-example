
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as h,J as k,a as g,c as f,w as a,Y as _,o as t,k as s,V as n,F as l,t as w,e as y,Z as x}from"./index-DL7SpVKF.js";const C=["disabled","onClick"],B=h({__name:"HDropdownMenu",props:{items:{}},setup(d){const i=d,p=k(()=>i.items.map(e=>e.filter(o=>!o.hide)).filter(e=>e.length));return(e,o)=>{const b=g("VMenu");return t(),f(b,_({"show-triggers":["hover"],"auto-hide":!1,"popper-triggers":["hover","click"],delay:200},e.$attrs),{popper:a(()=>[(t(!0),s(l,null,n(y(p),(c,u)=>(t(),s("div",{key:u,class:"b-b-1 b-b-stone-2 b-b-solid p-1 dark-b-b-1 dark-b-b-stone-7 last-b-b-size-0"},[(t(!0),s(l,null,n(c,(r,m)=>(t(),s("button",{key:m,disabled:r.disabled,class:"w-full flex cursor-pointer items-center gap-2 border-size-0 rounded-md bg-inherit px-2 py-1.5 text-sm text-dark disabled-cursor-not-allowed dark-text-white disabled-opacity-50 hover-not-disabled-bg-stone-1 dark-hover-not-disabled-bg-stone-9",onClick:r.handle},w(r.label),9,C))),128))]))),128))]),default:a(()=>[x(e.$slots,"default")]),_:3},16)}}});export{B as _};
