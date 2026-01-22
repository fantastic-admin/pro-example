
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{n as p,P as f,N as m,ad as v,ae as g,af as l,g as C,a9 as N,ag as x,ab as V}from"./index-H6QnEWHf.js";function y(){function c(i){var s,u;const n=document.createElement("div"),a=p(!1),t=f({...i}),e=v();let o=null;const d=()=>{o=C(N,Object.assign({id:e&&e.uid?"FaDrawer-".concat(e.uid):void 0,modelValue:a.value,"onUpdate:modelValue":r=>{a.value=r},...t}),{default:()=>typeof t.content=="string"||x(t.content)?t.content:t.content?V(t.content):null}),e&&e.appContext&&(o.appContext=e.appContext),l(o,n)};return m([a,t],()=>{d()},{immediate:!0,deep:!0}),(u=(s=e==null?void 0:e.proxy)==null?void 0:s.$el)==null||u.appendChild(n),e&&g(()=>{o&&(l(null,n),o=null),n.parentNode&&n.parentNode.removeChild(n)}),{open:()=>{a.value=!0},close:()=>{a.value=!1},update:r=>{Object.assign(t,r)}}}return{create:c}}export{y as u};
