
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{n as p,O as f,M as m,ac as v,ad as C,ae as c,g,a8 as x,af as N,aa as V}from"./index-COkggZqL.js";function j(){function l(i){var s,u;const n=document.createElement("div"),a=p(!1),t=f({...i}),e=v();let o=null;const d=()=>{o=g(x,Object.assign({id:e&&e.uid?"FaDrawer-".concat(e.uid):void 0,modelValue:a.value,"onUpdate:modelValue":r=>{a.value=r},...t}),{default:()=>typeof t.content=="string"||N(t.content)?t.content:t.content?V(t.content):null}),e&&e.appContext&&(o.appContext=e.appContext),c(o,n)};return m([a,t],()=>{d()},{immediate:!0,deep:!0}),(u=(s=e==null?void 0:e.proxy)==null?void 0:s.$el)==null||u.appendChild(n),e&&C(()=>{o&&(c(null,n),o=null),n.parentNode&&n.parentNode.removeChild(n)}),{open:()=>{a.value=!0},close:()=>{a.value=!1},update:r=>{Object.assign(t,r)}}}return{create:l}}export{j as u};
