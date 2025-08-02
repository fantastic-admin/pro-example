
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{r as i,bm as l,$ as d,bP as p,g as f,b2 as m,bQ as v,bR as b,aY as g}from"./index-De8Oh0HC.js";function w(){function r(c){const s=document.createElement("div"),n=i(!1),e=l({...c}),t=p();let a=null;const u=()=>{a=f(m,Object.assign({id:t&&t.uid?`FaDrawer-${t.uid}`:void 0,modelValue:n.value,"onUpdate:modelValue":o=>{n.value=o},...e}),{default:()=>typeof e.content=="string"||b(e.content)?e.content:e.content?g(e.content):null}),t&&t.appContext&&(a.appContext=t.appContext),v(a,s)};return d([n,e],()=>{u()},{immediate:!0,deep:!0}),t?.proxy?.$el?.appendChild(s),{open:()=>{n.value=!0},close:()=>{n.value=!1},update:o=>{Object.assign(e,o)}}}return{create:r}}export{w as u};
