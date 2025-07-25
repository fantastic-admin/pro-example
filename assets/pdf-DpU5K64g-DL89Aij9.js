
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{cp as P}from"./index-DODNO_Fi.js";import{k as i}from"./dom-to-png-BIakyQa8-CcLBKP7d.js";import"./vue-data-ui-z3baaeZD.js";import"./alert-DPI0rmvY.js";import"./command.vue_vue_type_script_setup_true_lang-CWspqyXQ.js";import"./index.vue_vue_type_script_setup_true_lang-th40GE7B.js";async function N({domElement:t,fileName:h,scale:a=2,options:v={}}){if(!t)return Promise.reject("No domElement provided");const g=typeof navigator<"u"&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent);let l;try{l=(await P(async()=>{const{default:c}=await import("./__vite-optional-peer-dep_jspdf_vue-data-ui_false-DOvOOyrI.js");return{default:c}},[],import.meta.url)).default}catch{return Promise.reject("jspdf is not installed. Run npm install jspdf")}const e={width:595.28,height:841.89};if(g)try{await i({container:t,scale:a}),await i({container:t,scale:a}),await i({container:t,scale:a}),await i({container:t,scale:a})}catch{}const d=await i({container:t,scale:a});return await new Promise((c,_)=>{const o=new window.Image;o.onload=function(){const r=o.naturalWidth,m=o.naturalHeight;let f=e.width,p=e.width/r*m;const n=new l("","pt","a4");let u=0,s=m;const w=r/e.width*e.height;if(s<w)n.addImage(d,"PNG",0,0,f,p,"","FAST");else for(;s>0;)n.addImage(d,"PNG",0,u,f,p,"","FAST"),s-=w,u-=e.height,s>0&&n.addPage();n.save(`${h}.pdf`),c()},o.onerror=r=>_("Failed to load image for PDF: "+r),o.src=d})}export{N as default};
