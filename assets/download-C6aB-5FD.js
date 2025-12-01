
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{toBlob as d}from"./toBlob-DfGmEFBm.js";import{toCanvas as f}from"./toCanvas-Bm34wdtE.js";import"./index-BsOSWDg9.js";import"./index-COkggZqL.js";import"./index.vue_vue_type_script_setup_true_lang-M3HOtf0Y.js";import"./index.vue_vue_type_script_setup_true_lang-De79GpMh.js";import"./index.vue_vue_type_script_setup_true_lang-DdWswJe2.js";import"./index.vue_vue_type_script_setup_true_lang-0UYHsWLB.js";import"./index.vue_vue_type_script_setup_true_lang-CodmHVPa.js";import"./useGraceArea-F9fj9tHN.js";import"./clamp-BstbYvQo.js";import"./useFormControl-CM5w7Mwn.js";import"./VisuallyHiddenInput-BFLEYdpb.js";import"./index-BPzkmNYk.js";async function C(i,o){let p=((o==null?void 0:o.format)||(o==null?void 0:o.type)||"").toLowerCase(),e=p==="jpg"?"jpeg":p||"png",t=(o==null?void 0:o.filename)||"snapdom.".concat(e),r={...o||{},format:e,type:e};if(r.dpr=1,e==="svg"){let c=await d(i,{...r,type:"svg"}),n=URL.createObjectURL(c),m=document.createElement("a");m.href=n,m.download=t,m.click(),URL.revokeObjectURL(n);return}let l=await f(i,r),a=document.createElement("a");a.href=l.toDataURL("image/".concat(e),o==null?void 0:o.quality),a.download=t,a.click()}export{C as download};
