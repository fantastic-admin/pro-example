
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{toBlob as d}from"./toBlob-9pG_Fku-.js";import{toCanvas as f}from"./toCanvas-CAu_SPb9.js";import"./index-CHrTZ_1K.js";import"./index-Bhq0NWKR.js";import"./index.vue_vue_type_script_setup_true_lang-CggLLe1p.js";import"./index.vue_vue_type_script_setup_true_lang-fnem0Zj7.js";import"./index.vue_vue_type_script_setup_true_lang-7RPhhiBw.js";import"./index.vue_vue_type_script_setup_true_lang-B3PT9gG5.js";import"./index.vue_vue_type_script_setup_true_lang-DUrIRI01.js";import"./useGraceArea-CoPqxCUR.js";import"./clamp-BstbYvQo.js";import"./useFormControl-DF3E47NY.js";import"./VisuallyHiddenInput-CUg2iiWi.js";import"./index-DN5wyfYh.js";async function C(i,o){let p=((o==null?void 0:o.format)||(o==null?void 0:o.type)||"").toLowerCase(),e=p==="jpg"?"jpeg":p||"png",t=(o==null?void 0:o.filename)||"snapdom.".concat(e),r={...o||{},format:e,type:e};if(r.dpr=1,e==="svg"){let c=await d(i,{...r,type:"svg"}),n=URL.createObjectURL(c),m=document.createElement("a");m.href=n,m.download=t,m.click(),URL.revokeObjectURL(n);return}let l=await f(i,r),a=document.createElement("a");a.href=l.toDataURL("image/".concat(e),o==null?void 0:o.quality),a.download=t,a.click()}export{C as download};
