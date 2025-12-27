
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{toBlob as d}from"./toBlob-Cx4BD8D1.js";import{toCanvas as f}from"./toCanvas-D_TNQBqZ.js";import"./index-4aTbBF5E.js";import"./index-Dk37_K7O.js";import"./index.vue_vue_type_script_setup_true_lang-cATrHxu-.js";import"./index.vue_vue_type_script_setup_true_lang-DHmZ7PHH.js";import"./index.vue_vue_type_script_setup_true_lang-DefOheSb.js";import"./index.vue_vue_type_script_setup_true_lang-1_OLWMCl.js";import"./index.vue_vue_type_script_setup_true_lang-B_WNbmDJ.js";import"./useGraceArea-B-xesBJA.js";import"./clamp-BstbYvQo.js";import"./useFormControl-NB6_NiPl.js";import"./VisuallyHiddenInput-DbStLZ8Q.js";import"./index-CV07X52V.js";async function C(i,o){let p=((o==null?void 0:o.format)||(o==null?void 0:o.type)||"").toLowerCase(),e=p==="jpg"?"jpeg":p||"png",t=(o==null?void 0:o.filename)||"snapdom.".concat(e),r={...o||{},format:e,type:e};if(r.dpr=1,e==="svg"){let c=await d(i,{...r,type:"svg"}),n=URL.createObjectURL(c),m=document.createElement("a");m.href=n,m.download=t,m.click(),URL.revokeObjectURL(n);return}let l=await f(i,r),a=document.createElement("a");a.href=l.toDataURL("image/".concat(e),o==null?void 0:o.quality),a.download=t,a.click()}export{C as download};
