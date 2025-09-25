
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{g as p,bu as f,a1 as m,bX as v,a3 as b,bY as c,k as C,bc as g,bZ as x,b6 as N}from"./index-DFNzsyWB.js";function y(){function l(i){var s,u;const n=document.createElement("div"),a=p(!1),t=f({...i}),e=v();let o=null;const d=()=>{o=C(g,Object.assign({id:e&&e.uid?"FaDrawer-".concat(e.uid):void 0,modelValue:a.value,"onUpdate:modelValue":r=>{a.value=r},...t}),{default:()=>typeof t.content=="string"||x(t.content)?t.content:t.content?N(t.content):null}),e&&e.appContext&&(o.appContext=e.appContext),c(o,n)};return m([a,t],()=>{d()},{immediate:!0,deep:!0}),(u=(s=e==null?void 0:e.proxy)==null?void 0:s.$el)==null||u.appendChild(n),e&&b(()=>{o&&(c(null,n),o=null),n.parentNode&&n.parentNode.removeChild(n)}),{open:()=>{a.value=!0},close:()=>{a.value=!1},update:r=>{Object.assign(t,r)}}}return{create:l}}export{y as u};
