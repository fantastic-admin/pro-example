
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as V,g as l,bU as v,bV as y,M as _,a as u,a1 as g,Z as h,c as F,o as S,p as b,ao as B}from"./index-BHkWVPDT.js";const k=V({name:"FaCountTo",__name:"index",props:{startVal:{},endVal:{},autoplay:{type:Boolean,default:!0},duration:{default:2e3},transition:{default:"linear"},delay:{default:0},decimals:{default:0},separator:{default:","},prefix:{},suffix:{}},emits:["onStarted","onFinished"],setup(d,{expose:f,emit:c}){const a=d,o=c,t=l(!1),n=l(a.startVal),p=v(n,{duration:a.duration,transition:y[a.transition],delay:a.delay,disabled:t,onStarted:()=>o("onStarted"),onFinished:()=>o("onFinished")}),m=_(()=>{let e=u(p.value);if(e=Number(e).toFixed(a.decimals),a.separator){const[r,i]=e.toString().split(".");e=r.replace(/\B(?=(\d{3})+(?!\d))/g,a.separator)+(i?".".concat(i):"")}return a.prefix&&(e=a.prefix+e),a.suffix&&(e=e+a.suffix),e});function s(){n.value=a.endVal}function x(){t.value=!0,n.value=a.startVal,B(()=>{t.value=!1})}return g([()=>a.startVal,()=>a.endVal],()=>{s()}),h(()=>{a.autoplay&&s()}),f({start:s,reset:x}),(e,r)=>(S(),F("span",null,b(u(m)),1))}});export{k as _};
