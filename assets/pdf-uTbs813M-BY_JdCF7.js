
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{co as _}from"./index-BLSV4yIg.js";import{B as g}from"./dom-to-png-Bm0D0yPL-BRV1xLQG.js";import"./vue-data-ui-DvXKEz6P.js";import"./alert-CX-W83v7.js";import"./command.vue_vue_type_script_setup_true_lang-CMmO--zz.js";import"./index.vue_vue_type_script_setup_true_lang-6bl44PgT.js";async function y({domElement:d,fileName:u,scale:h=2,options:P={}}){if(!d)return Promise.reject("No domElement provided");let l;try{l=(await _(async()=>{const{default:n}=await import("./__vite-optional-peer-dep_jspdf_vue-data-ui_false-DOvOOyrI.js");return{default:n}},[],import.meta.url)).default}catch{return Promise.reject("jspdf is not installed. Run npm install jspdf")}const t={width:595.28,height:841.89},r=await g({container:d,scale:h});return await new Promise((n,w)=>{const e=new window.Image;e.onload=function(){const a=e.naturalWidth,m=e.naturalHeight;let s=t.width,c=t.width/a*m;const o=new l("","pt","a4");let f=0,i=m;const p=a/t.width*t.height;if(i<p)o.addImage(r,"PNG",0,0,s,c,"","FAST");else for(;i>0;)o.addImage(r,"PNG",0,f,s,c,"","FAST"),i-=p,f-=t.height,i>0&&o.addPage();o.save(`${u}.pdf`),n()},e.onerror=a=>w("Failed to load image for PDF: "+a),e.src=r})}export{y as default};
