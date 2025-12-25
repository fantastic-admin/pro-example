
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{toBlob as d}from"./toBlob-utZZ7tCn.js";import{toCanvas as f}from"./toCanvas-CisPO1md.js";import"./index-DEX4l_G-.js";import"./index-DRFMav3n.js";import"./index.vue_vue_type_script_setup_true_lang-BTyelEzN.js";import"./index.vue_vue_type_script_setup_true_lang-D57Iwt5f.js";import"./index.vue_vue_type_script_setup_true_lang-BAcDkc1k.js";import"./index.vue_vue_type_script_setup_true_lang-BGBABPXb.js";import"./index.vue_vue_type_script_setup_true_lang-09XIWZAE.js";import"./useGraceArea-DqM-Xm3r.js";import"./clamp-BstbYvQo.js";import"./useFormControl-DWYg7R2H.js";import"./VisuallyHiddenInput-DhA8Dm7b.js";import"./index-DBkH27s0.js";async function C(i,o){let p=((o==null?void 0:o.format)||(o==null?void 0:o.type)||"").toLowerCase(),e=p==="jpg"?"jpeg":p||"png",t=(o==null?void 0:o.filename)||"snapdom.".concat(e),r={...o||{},format:e,type:e};if(r.dpr=1,e==="svg"){let c=await d(i,{...r,type:"svg"}),n=URL.createObjectURL(c),m=document.createElement("a");m.href=n,m.download=t,m.click(),URL.revokeObjectURL(n);return}let l=await f(i,r),a=document.createElement("a");a.href=l.toDataURL("image/".concat(e),o==null?void 0:o.quality),a.download=t,a.click()}export{C as download};
