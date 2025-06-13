
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{B as m}from"./dom-to-png-nkRNNLZE-B_xDAVXd.js";import"./vue-data-ui-Cyoj5O3F.js";import"./index-xj0hzzoN.js";import"./alert-DpUuETvh.js";import"./command.vue_vue_type_script_setup_true_lang-CIRZXgoK.js";import"./index.vue_vue_type_script_setup_true_lang-BrYkdmVP.js";async function u({domElement:r,fileName:t,format:n="png",scale:c=2}){if(!r)return Promise.reject("No element provided");if(n==="svg"){const o=converter.convertToImg({container:r,scale:c});if(!o)return Promise.reject("Could not create SVG image");const e=document.createElement("a");return e.href=o.src,e.download=`${t}.svg`,document.body.appendChild(e),e.click(),document.body.removeChild(e),Promise.resolve()}try{const o=await m({container:r,scale:c}),e=document.createElement("a");e.href=o,e.download=`${t}.${n}`,document.body.appendChild(e),e.click(),document.body.removeChild(e)}catch(o){throw console.error("Error generating image:",o),o}}export{u as default};
