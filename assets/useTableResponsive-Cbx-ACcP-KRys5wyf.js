
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{p as u,N as l,y as f,C as v}from"./index-Bhq0NWKR.js";function p(t,s){const o=u(!1);let e=null;function n(){e&&(e.disconnect(),e=null)}async function a(){n(),await v();const c=t.value;c&&(e=new ResizeObserver(i=>{const r=i[0].contentRect.width;o.value=r<s.value}),e.observe(c))}return l([t,s],()=>{a()},{immediate:!0}),f(n),{isResponsive:o,start:a,stop:n}}export{p as w};
