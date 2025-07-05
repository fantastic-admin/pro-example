
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{B as m}from"./dom-to-png-Bm0D0yPL-BRV1xLQG.js";import"./vue-data-ui-DvXKEz6P.js";import"./index-BLSV4yIg.js";import"./alert-CX-W83v7.js";import"./command.vue_vue_type_script_setup_true_lang-CMmO--zz.js";import"./index.vue_vue_type_script_setup_true_lang-6bl44PgT.js";async function u({domElement:r,fileName:t,format:n="png",scale:c=2}){if(!r)return Promise.reject("No element provided");if(n==="svg"){const o=converter.convertToImg({container:r,scale:c});if(!o)return Promise.reject("Could not create SVG image");const e=document.createElement("a");return e.href=o.src,e.download=`${t}.svg`,document.body.appendChild(e),e.click(),document.body.removeChild(e),Promise.resolve()}try{const o=await m({container:r,scale:c}),e=document.createElement("a");e.href=o,e.download=`${t}.${n}`,document.body.appendChild(e),e.click(),document.body.removeChild(e)}catch(o){throw console.error("Error generating image:",o),o}}export{u as default};
