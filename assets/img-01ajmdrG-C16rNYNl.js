
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{k as t}from"./dom-to-png-BIakyQa8-CcLBKP7d.js";import"./vue-data-ui-z3baaeZD.js";import"./index-DODNO_Fi.js";import"./alert-DPI0rmvY.js";import"./command.vue_vue_type_script_setup_true_lang-CWspqyXQ.js";import"./index.vue_vue_type_script_setup_true_lang-th40GE7B.js";async function u({domElement:a,fileName:i,format:s="png",scale:r=2,base64:o=!1,img:l=!1}){if(!a)return Promise.reject("No element provided");const m=typeof navigator<"u"&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(await new Promise(e=>setTimeout(e,200)),m)try{await t({container:a,scale:r}),await t({container:a,scale:r}),await t({container:a,scale:r}),await t({container:a,scale:r}),o&&(await t({container:a,scale:r,base64:o}),await t({container:a,scale:r,base64:o}),await t({container:a,scale:r,base64:o}),await t({container:a,scale:r,base64:o}))}catch{}if(o&&l)try{const e=await t({container:a,scale:r}).then(c=>c),n=await t({container:a,scale:r,base64:o}).then(c=>c);return{imageUri:e,base64:n}}catch(e){console.error("Error generating image information for the chart",e)}else if(o)try{return t({container:a,scale:r,base64:o}).then(e=>e)}catch(e){console.error("Error generating the base64 string of the chart",e)}else try{const e=await t({container:a,scale:r}),n=document.createElement("a");n.href=e,n.download=`${i}.${s}`,document.body.appendChild(n),n.click(),document.body.removeChild(n)}catch(e){throw console.error("Error generating image:",e),e}}export{u as default};
