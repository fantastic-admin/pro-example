
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pdf-Q5BpWMSa-c1UVY_rK.js","./index-H6QnEWHf.js","./index-BDMvhiMS.css","./dom-to-png-WXGPkYro-BBSXh0YN.js","./vue-data-ui-3mUtIY8T.js","./alert-yicQvtMn.js","./command.vue_vue_type_script_setup_true_lang-Diw_3237.js","./index.vue_vue_type_script_setup_true_lang-ByxJxKu_.js","./vue-data-ui-C46fMXq5.css","./img-CqYIrJ8I-DG00FvYp.js"])))=>i.map(i=>d[i]);
import{n as i,aH as m}from"./index-H6QnEWHf.js";function g({elementId:u,fileName:c,canPrint:n=!0,options:a}){const o=i(!1),r=i(!1),l=i(null);async function s(){!n||o.value||(o.value=!0,clearTimeout(l.value),l.value=setTimeout(async()=>{var e;if(n)try{const{default:t}=await m(async()=>{const{default:d}=await import("./pdf-Q5BpWMSa-c1UVY_rK.js");return{default:d}},__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);await t({domElement:document.getElementById(u),fileName:c,orientation:a.orientation,overflowTolerance:a.overflowTolerance,scale:a.scale,aspectRatio:(e=a.aspectRatio)!=null?e:null})}catch(t){console.error("Error generating PDF:",t)}finally{o.value=!1}},100))}async function f(){!n||r.value||(r.value=!0,clearTimeout(l.value),l.value=setTimeout(async()=>{if(n)try{const{default:e}=await m(async()=>{const{default:t}=await import("./img-CqYIrJ8I-DG00FvYp.js");return{default:t}},__vite__mapDeps([9,3,4,1,2,5,6,7,8]),import.meta.url);await e({domElement:document.getElementById(u),fileName:c,format:"png",options:a})}catch(e){console.error("Error generating image:",e)}finally{r.value=!1}},100))}return{generatePdf:s,generateImage:f,isPrinting:o,isImaging:r}}export{g as m};
