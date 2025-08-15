
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{r as p,bm as f,$ as m,bP as v,a1 as b,bQ as l,g as C,b0 as g,bR as x,aY as N}from"./index-DQdGVpLy.js";function j(){function c(i){var s,u;const n=document.createElement("div"),a=p(!1),t=f({...i}),e=v();let o=null;const d=()=>{o=C(g,Object.assign({id:e&&e.uid?"FaDrawer-".concat(e.uid):void 0,modelValue:a.value,"onUpdate:modelValue":r=>{a.value=r},...t}),{default:()=>typeof t.content=="string"||x(t.content)?t.content:t.content?N(t.content):null}),e&&e.appContext&&(o.appContext=e.appContext),l(o,n)};return m([a,t],()=>{d()},{immediate:!0,deep:!0}),(u=(s=e==null?void 0:e.proxy)==null?void 0:s.$el)==null||u.appendChild(n),e&&b(()=>{o&&(l(null,n),o=null),n.parentNode&&n.parentNode.removeChild(n)}),{open:()=>{a.value=!0},close:()=>{a.value=!1},update:r=>{Object.assign(t,r)}}}return{create:c}}export{j as u};
