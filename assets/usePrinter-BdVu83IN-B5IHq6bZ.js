
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pdf--SSvtzbF-1cydoaTH.js","./index-DRFMav3n.js","./index-BQ23tIyw.css","./dom-to-png-BG68zYm5-Bto--D5s.js","./vue-data-ui-BOdNPMdi.js","./alert-Ovhhy0em.js","./command.vue_vue_type_script_setup_true_lang-DLBCmZuF.js","./index.vue_vue_type_script_setup_true_lang-fREz23uY.js","./vue-data-ui-C5fDYw3a.css","./img-BYzbY8TZ-BgZiMBWn.js"])))=>i.map(i=>d[i]);
import{n as i,aG as m}from"./index-DRFMav3n.js";function g({elementId:u,fileName:c,canPrint:n=!0,options:a}){const o=i(!1),r=i(!1),l=i(null);async function s(){!n||o.value||(o.value=!0,clearTimeout(l.value),l.value=setTimeout(async()=>{var e;if(n)try{const{default:t}=await m(async()=>{const{default:d}=await import("./pdf--SSvtzbF-1cydoaTH.js");return{default:d}},__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);await t({domElement:document.getElementById(u),fileName:c,orientation:a.orientation,overflowTolerance:a.overflowTolerance,scale:a.scale,aspectRatio:(e=a.aspectRatio)!=null?e:null})}catch(t){console.error("Error generating PDF:",t)}finally{o.value=!1}},100))}async function f(){!n||r.value||(r.value=!0,clearTimeout(l.value),l.value=setTimeout(async()=>{if(n)try{const{default:e}=await m(async()=>{const{default:t}=await import("./img-BYzbY8TZ-BgZiMBWn.js");return{default:t}},__vite__mapDeps([9,3,4,1,2,5,6,7,8]),import.meta.url);await e({domElement:document.getElementById(u),fileName:c,format:"png",options:a})}catch(e){console.error("Error generating image:",e)}finally{r.value=!1}},100))}return{generatePdf:s,generateImage:f,isPrinting:o,isImaging:r}}export{g as m};
