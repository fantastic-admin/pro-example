
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{r as l,bm as d,$ as p,bP as f,a1 as m,bQ as s,g as v,b2 as b,bR as C,aY as g}from"./index-DOTJNdHl.js";function w(){function u(c){const n=document.createElement("div"),a=l(!1),e=d({...c}),t=f();let o=null;const i=()=>{o=v(b,Object.assign({id:t&&t.uid?`FaDrawer-${t.uid}`:void 0,modelValue:a.value,"onUpdate:modelValue":r=>{a.value=r},...e}),{default:()=>typeof e.content=="string"||C(e.content)?e.content:e.content?g(e.content):null}),t&&t.appContext&&(o.appContext=t.appContext),s(o,n)};return p([a,e],()=>{i()},{immediate:!0,deep:!0}),t?.proxy?.$el?.appendChild(n),t&&m(()=>{o&&(s(null,n),o=null),n.parentNode&&n.parentNode.removeChild(n)}),{open:()=>{a.value=!0},close:()=>{a.value=!1},update:r=>{Object.assign(e,r)}}}return{create:u}}export{w as u};
