
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as V,n as l,a5 as v,a6 as y,x as _,e as u,N as h,a7 as F,c as S,o as g,t as B,C as T}from"./index-H6QnEWHf.js";const C=V({name:"FaCountTo",__name:"index",props:{startVal:{},endVal:{},autoplay:{type:Boolean,default:!0},duration:{default:2e3},transition:{default:"linear"},delay:{default:0},decimals:{default:0},separator:{default:","},prefix:{},suffix:{}},emits:["onStarted","onFinished"],setup(d,{expose:f,emit:c}){const a=d,o=c,t=l(!1),n=l(a.startVal),p=v(n,{duration:a.duration,transition:y[a.transition],delay:a.delay,disabled:t,onStarted:()=>o("onStarted"),onFinished:()=>o("onFinished")}),m=_(()=>{let e=u(p.value);if(e=Number(e).toFixed(a.decimals),a.separator){const[r,i]=e.toString().split(".");e=r.replace(/\B(?=(\d{3})+(?!\d))/g,a.separator)+(i?".".concat(i):"")}return a.prefix&&(e=a.prefix+e),a.suffix&&(e=e+a.suffix),e});function s(){n.value=a.endVal}function x(){t.value=!0,n.value=a.startVal,T(()=>{t.value=!1})}return h([()=>a.startVal,()=>a.endVal],()=>{s()}),F(()=>{a.autoplay&&s()}),f({start:s,reset:x}),(e,r)=>(g(),S("span",null,B(u(m)),1))}});export{C as _};
