
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as T,M as h,aA as y,r as c,Q as C,z as r,o as i,f as u,T as g,n as w,h as k,g as d,A as B,e as m,_ as z,D as M,B as x,aY as F,X as A}from"./index-Bbf2k3Iz.js";const N=T({name:"BackTop",__name:"index",setup(E){const p={enterActiveClass:"ease-out duration-300",enterFromClass:"opacity-0 translate-y-4 lg-translate-y-0 lg-scale-95",enterToClass:"opacity-100 translate-y-0 lg-scale-100",leaveActiveClass:"ease-in duration-200",leaveFromClass:"opacity-100 translate-y-0 lg-scale-100",leaveToClass:"opacity-0 translate-y-4 lg-translate-y-0 lg-scale-95"};h(()=>{window.addEventListener("scroll",n),n()}),y(()=>{window.removeEventListener("scroll",n)});let e;const a=c(!1),o=c(0);function n(){o.value=document.documentElement.scrollTop}C(o,l=>{l>=200&&(s(),t())});function s(){e==null||e(),setTimeout(()=>{a.value=!0},0)}function t(){({stop:e}=A(()=>{a.value=!1},2e3))}function f(){a.value&&document.documentElement.scrollTo({top:0,behavior:"smooth"})}return(l,b)=>{const _=x,v=z;return i(),r(F,{to:"body"},[u(g,w(k(p)),{default:d(()=>[m(o)>=200?(i(),r(v,{key:0,variant:"outline",size:"icon",class:M(["fixed inset-b-4 z-1000 h-12 w-12 rounded-full transition-all -inset-e-9",{"inset-e-3!":m(a)}]),onMouseenter:s,onMouseleave:t,onClick:f},{default:d(()=>[u(_,{name:"i-icon-park-outline:to-top-one",class:"size-6"})]),_:1},8,["class"])):B("",!0)]),_:1},16)])}}});export{N as _};
