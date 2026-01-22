
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{n as u,N as l,z as f,C as v}from"./index-H6QnEWHf.js";function w(t,s){const o=u(!1);let e=null;function n(){e&&(e.disconnect(),e=null)}async function a(){n(),await v();const c=t.value;c&&(e=new ResizeObserver(i=>{const r=i[0].contentRect.width;o.value=r<s.value}),e.observe(c))}return l([t,s],()=>{a()},{immediate:!0}),f(n),{isResponsive:o,start:a,stop:n}}export{w};
