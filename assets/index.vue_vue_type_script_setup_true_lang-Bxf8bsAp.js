
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as c,J as s,L as l,g as m,j as h,h as u,N as d,l as p,D as _,aC as C}from"./index-Dv6GDtcN.js";const f=c({name:"ColorScheme",__name:"index",setup(x){const e=s();function i(o){if(!document.startViewTransition||window.matchMedia("(prefers-reduced-motion: reduce)").matches){e.currentColorScheme&&e.setColorScheme(e.currentColorScheme==="dark"?"light":"dark");return}const n=o.clientX,t=o.clientY,r=Math.hypot(Math.max(n,innerWidth-n),Math.max(t,innerHeight-t));document.startViewTransition(async()=>{e.currentColorScheme&&e.setColorScheme(e.currentColorScheme==="dark"?"light":"dark"),await C()}).ready.then(()=>{const a=[`circle(0px at ${n}px ${t}px)`,`circle(${r}px at ${n}px ${t}px)`];document.documentElement.animate({clipPath:e.currentColorScheme==="light"?a:a.reverse()},{duration:500,easing:"ease-in-out",pseudoElement:e.currentColorScheme==="light"?"::view-transition-new(root)":"::view-transition-old(root)"})})}return(o,n)=>{const t=d,r=_;return m(),l(r,{variant:"ghost",size:"icon",class:"size-9",onClick:i},{default:h(()=>[u(t,{name:{light:"i-ri:sun-line",dark:"i-ri:moon-line"}[p(e).currentColorScheme],class:"size-4"},null,8,["name"])]),_:1})}}});export{f as _};
