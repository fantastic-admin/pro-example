
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{toBlob as d}from"./toBlob-CBqxsuTY.js";import{toCanvas as f}from"./toCanvas-BpvaQ28d.js";import"./index-CVFwfjqr.js";import"./index-H6QnEWHf.js";import"./index.vue_vue_type_script_setup_true_lang-CfFfwFlx.js";import"./index.vue_vue_type_script_setup_true_lang-KWURIfPl.js";import"./index.vue_vue_type_script_setup_true_lang-CW0fgqfj.js";import"./index.vue_vue_type_script_setup_true_lang-BoQ-Tlfp.js";import"./index.vue_vue_type_script_setup_true_lang-BnHOlB0K.js";import"./useGraceArea-DMfrKGwH.js";import"./clamp-BstbYvQo.js";import"./useFormControl-Su_HZn2q.js";import"./VisuallyHiddenInput-CUkjjV_e.js";import"./index-ClELmDgR.js";async function C(i,o){let p=((o==null?void 0:o.format)||(o==null?void 0:o.type)||"").toLowerCase(),e=p==="jpg"?"jpeg":p||"png",t=(o==null?void 0:o.filename)||"snapdom.".concat(e),r={...o||{},format:e,type:e};if(r.dpr=1,e==="svg"){let c=await d(i,{...r,type:"svg"}),n=URL.createObjectURL(c),m=document.createElement("a");m.href=n,m.download=t,m.click(),URL.revokeObjectURL(n);return}let l=await f(i,r),a=document.createElement("a");a.href=l.toDataURL("image/".concat(e),o==null?void 0:o.quality),a.download=t,a.click()}export{C as download};
