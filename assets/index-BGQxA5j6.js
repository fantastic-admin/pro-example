
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
const f=/\d/,l=["-","_","/","."];function h(e=""){if(!f.test(e))return e!==e.toLowerCase()}function C(e,p){const o=l,s=[];if(!e||typeof e!="string")return s;let t="",n,u;for(const i of e){const a=o.includes(i);if(a===!0){s.push(t),t="",n=void 0;continue}const r=h(i);if(u===!1){if(n===!1&&r===!0){s.push(t),t=i,n=r;continue}if(n===!0&&r===!1&&t.length>1){const c=t.at(-1);s.push(t.slice(0,Math.max(0,t.length-1))),t=c+i,n=r;continue}}t+=i,n=r,u=a}return s.push(t),s}function R(e){return e?e[0].toUpperCase()+e.slice(1):""}function S(e,p){return e?(Array.isArray(e)?e:C(e)).map(o=>R(p?.normalize?o.toLowerCase():o)).join(""):""}export{S as p};
