
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pdf-YD0ShN36-Djguf4As.js","./index-28uxndRW.js","./index-DvQZFrWY.css","./dom-to-png-BgvOdfyW-DD15GL50.js","./vue-data-ui-Lo2g2Yz0.js","./alert-7bKGbgJr.js","./command.vue_vue_type_script_setup_true_lang-CvBku43g.js","./index.vue_vue_type_script_setup_true_lang-BSdR6L4x.js","./vue-data-ui-CkMOYI9p.css","./img-DjWwQXVS-C3CtC39C.js"])))=>i.map(i=>d[i]);
import{g as i,cC as m}from"./index-28uxndRW.js";function v({elementId:u,fileName:c,canPrint:n=!0,options:t}){const o=i(!1),r=i(!1),l=i(null);async function s(){!n||o.value||(o.value=!0,clearTimeout(l.value),l.value=setTimeout(async()=>{var e;if(n)try{const{default:a}=await m(async()=>{const{default:d}=await import("./pdf-YD0ShN36-Djguf4As.js");return{default:d}},__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);await a({domElement:document.getElementById(u),fileName:c,orientation:t.orientation,overflowTolerance:t.overflowTolerance,scale:t.scale,aspectRatio:(e=t.aspectRatio)!=null?e:null})}catch(a){console.error("Error generating PDF:",a)}finally{o.value=!1}},100))}async function f(){!n||r.value||(r.value=!0,clearTimeout(l.value),l.value=setTimeout(async()=>{if(n)try{const{default:e}=await m(async()=>{const{default:a}=await import("./img-DjWwQXVS-C3CtC39C.js");return{default:a}},__vite__mapDeps([9,3,4,1,2,5,6,7,8]),import.meta.url);await e({domElement:document.getElementById(u),fileName:c,format:"png",options:t})}catch(e){console.error("Error generating image:",e)}finally{r.value=!1}},100))}return{generatePdf:s,generateImage:f,isPrinting:o,isImaging:r}}export{v as m};
