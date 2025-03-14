
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{aJ as p,aI as m}from"./index-ChHFYeJP.js";function T(a){const e=p("",1e3);return{search:e,handleTypeaheadSearch:(l,f)=>{e.value=e.value+l;{const s=m(),c=f.map(t=>{var i,x;return{...t,textValue:((i=t.value)==null?void 0:i.textValue)??((x=t.ref.textContent)==null?void 0:x.trim())??""}}),r=c.find(t=>t.ref===s),n=c.map(t=>t.textValue),h=V(n,e.value,r==null?void 0:r.textValue),u=c.find(t=>t.textValue===h);return u&&u.ref.focus(),u==null?void 0:u.ref}},resetTypeahead:()=>{e.value=""}}}function v(a,e){return a.map((o,d)=>a[(e+d)%a.length])}function V(a,e,o){const l=e.length>1&&Array.from(e).every(n=>n===e[0])?e[0]:e,f=o?a.indexOf(o):-1;let s=v(a,Math.max(f,0));l.length===1&&(s=s.filter(n=>n!==o));const r=s.find(n=>n.toLowerCase().startsWith(l.toLowerCase()));return r!==o?r:void 0}export{T as u};
