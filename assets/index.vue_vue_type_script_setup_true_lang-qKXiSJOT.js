
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as V,r as l,bK as v,bL as y,J as _,k as u,$ as h,X as B,e as F,f as S,j as b,aB as g}from"./index-BLSV4yIg.js";const T=V({name:"FaCountTo",__name:"index",props:{startVal:{},endVal:{},autoplay:{type:Boolean,default:!0},duration:{default:2e3},transition:{default:"linear"},delay:{default:0},decimals:{default:0},separator:{default:","},prefix:{},suffix:{}},emits:["onStarted","onFinished"],setup(d,{expose:f,emit:c}){const e=d,o=c,t=l(!1),n=l(e.startVal),p=v(n,{duration:e.duration,transition:y[e.transition],delay:e.delay,disabled:t,onStarted:()=>o("onStarted"),onFinished:()=>o("onFinished")}),m=_(()=>{let a=u(p.value);if(a=Number(a).toFixed(e.decimals),e.separator){const[r,i]=a.toString().split(".");a=r.replace(/\B(?=(\d{3})+(?!\d))/g,e.separator)+(i?`.${i}`:"")}return e.prefix&&(a=e.prefix+a),e.suffix&&(a=a+e.suffix),a});function s(){n.value=e.endVal}function x(){t.value=!0,n.value=e.startVal,g(()=>{t.value=!1})}return h([()=>e.startVal,()=>e.endVal],()=>{s()}),B(()=>{e.autoplay&&s()}),f({start:s,reset:x}),(a,r)=>(S(),F("span",null,b(u(m)),1))}});export{T as _};
