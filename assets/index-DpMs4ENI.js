
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
const c=/\d/,l=["-","_","/","."];function h(e=""){if(!c.test(e))return e!==e.toLowerCase()}function C(e,u){const o=l,n=[];if(!e||typeof e!="string")return n;let t="",i,a;for(const r of e){const p=o.includes(r);if(p===!0){n.push(t),t="",i=void 0;continue}const s=h(r);if(a===!1){if(i===!1&&s===!0){n.push(t),t=r,i=s;continue}if(i===!0&&s===!1&&t.length>1){const f=t.at(-1);n.push(t.slice(0,Math.max(0,t.length-1))),t=f+r,i=s;continue}}t+=r,i=s,a=p}return n.push(t),n}function d(e){return e?e[0].toUpperCase()+e.slice(1):""}function R(e,u){return e?(Array.isArray(e)?e:C(e)).map(o=>d(u!=null&&u.normalize?o.toLowerCase():o)).join(""):""}export{R as p};
