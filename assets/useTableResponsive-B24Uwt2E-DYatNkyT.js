
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{Ct as e,V as t,st as n,z as r}from"./vue.runtime.esm-bundler-BVTUj4HC.js";function i(i,a){let o=e(!1),s=null;function c(){s&&(s=(s.disconnect(),null))}async function l(){c(),await r();let e=i.value;e&&(s=new ResizeObserver(e=>{o.value=e[0].contentRect.width<a.value}),s.observe(e))}return n([i,a],()=>{l()},{immediate:!0}),t(c),{isResponsive:o,start:l,stop:c}}export{i as t};