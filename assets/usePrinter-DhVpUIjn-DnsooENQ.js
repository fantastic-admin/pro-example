
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pdf-DpU5K64g-DL89Aij9.js","./index-DODNO_Fi.js","./index-8otZT6Er.css","./dom-to-png-BIakyQa8-CcLBKP7d.js","./vue-data-ui-z3baaeZD.js","./alert-DPI0rmvY.js","./command.vue_vue_type_script_setup_true_lang-CWspqyXQ.js","./index.vue_vue_type_script_setup_true_lang-th40GE7B.js","./vue-data-ui-CJfP-RDs.css","./img-01ajmdrG-C16rNYNl.js"])))=>i.map(i=>d[i]);
import{r as l,cp as c}from"./index-DODNO_Fi.js";function g({elementId:i,fileName:u,canPrint:t=!0,options:m}){const a=l(!1),n=l(!1),r=l(null);async function s(){!t||a.value||(a.value=!0,clearTimeout(r.value),r.value=setTimeout(async()=>{if(t)try{const{default:e}=await c(async()=>{const{default:o}=await import("./pdf-DpU5K64g-DL89Aij9.js");return{default:o}},__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);await e({domElement:document.getElementById(i),fileName:u,options:m})}catch(e){console.error("Error generating PDF:",e)}finally{a.value=!1}},100))}async function f(){!t||n.value||(n.value=!0,clearTimeout(r.value),r.value=setTimeout(async()=>{if(t)try{const{default:e}=await c(async()=>{const{default:o}=await import("./img-01ajmdrG-C16rNYNl.js");return{default:o}},__vite__mapDeps([9,3,4,1,2,5,6,7,8]),import.meta.url);await e({domElement:document.getElementById(i),fileName:u,format:"png",options:m})}catch(e){console.error("Error generating image:",e)}finally{n.value=!1}},100))}return{generatePdf:s,generateImage:f,isPrinting:a,isImaging:n}}export{g as m};
