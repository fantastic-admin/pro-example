
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as V,r as l,bJ as v,bK as y,K as _,l as u,a0 as g,Y as h,f as S,g as b,k,aJ as B}from"./index-BFPO48W4.js";const T=V({__name:"index",props:{startVal:{},endVal:{},autoplay:{type:Boolean,default:!0},duration:{default:2e3},transition:{default:"linear"},delay:{default:0},decimals:{default:0},separator:{default:","},prefix:{},suffix:{}},emits:["onStarted","onFinished"],setup(d,{expose:f,emit:c}){const e=d,r=c,t=l(!1),s=l(e.startVal),p=v(s,{duration:e.duration,transition:y[e.transition],delay:e.delay,disabled:t,onStarted:()=>r("onStarted"),onFinished:()=>r("onFinished")}),m=_(()=>{let a=u(p.value);if(a=Number(a).toFixed(e.decimals),e.separator){const[o,i]=a.toString().split(".");a=o.replace(/\B(?=(\d{3})+(?!\d))/g,e.separator)+(i?`.${i}`:"")}return e.prefix&&(a=e.prefix+a),e.suffix&&(a=a+e.suffix),a});function n(){s.value=e.endVal}function x(){t.value=!0,s.value=e.startVal,B(()=>{t.value=!1})}return g([()=>e.startVal,()=>e.endVal],()=>{n()}),h(()=>{e.autoplay&&n()}),f({start:n,reset:x}),(a,o)=>(b(),S("span",null,k(u(m)),1))}});export{T as _};
