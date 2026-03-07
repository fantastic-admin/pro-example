
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pdf-z-YiJeJQ-DopuauBr.js","./index-Bhq0NWKR.js","./index-BhEDrKzx.css","./dom-to-png-BAqzNjb1-w0L9FaHT.js","./vue-data-ui-DgR7njeq.js","./alert-D-53B2E-.js","./command.vue_vue_type_script_setup_true_lang-DjLyn6af.js","./index.vue_vue_type_script_setup_true_lang-Ic2Vc1cH.js","./vue-data-ui-a5pw-stv.css","./img-BYYzY_QU-CWC0-9mf.js"])))=>i.map(i=>d[i]);
import{p as i,aB as m}from"./index-Bhq0NWKR.js";function g({elementId:u,fileName:c,canPrint:n=!0,options:a}){const o=i(!1),r=i(!1),l=i(null);async function s(){!n||o.value||(o.value=!0,clearTimeout(l.value),l.value=setTimeout(async()=>{var e;if(n)try{const{default:t}=await m(async()=>{const{default:d}=await import("./pdf-z-YiJeJQ-DopuauBr.js");return{default:d}},__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);await t({domElement:document.getElementById(u),fileName:c,orientation:a.orientation,overflowTolerance:a.overflowTolerance,scale:a.scale,aspectRatio:(e=a.aspectRatio)!=null?e:null})}catch(t){console.error("Error generating PDF:",t)}finally{o.value=!1}},100))}async function f(){!n||r.value||(r.value=!0,clearTimeout(l.value),l.value=setTimeout(async()=>{if(n)try{const{default:e}=await m(async()=>{const{default:t}=await import("./img-BYYzY_QU-CWC0-9mf.js");return{default:t}},__vite__mapDeps([9,3,4,1,2,5,6,7,8]),import.meta.url);await e({domElement:document.getElementById(u),fileName:c,format:"png",options:a})}catch(e){console.error("Error generating image:",e)}finally{r.value=!1}},100))}return{generatePdf:s,generateImage:f,isPrinting:o,isImaging:r}}export{g as m};
