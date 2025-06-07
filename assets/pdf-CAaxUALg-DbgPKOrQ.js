
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{ch as _}from"./index-D4ShR5zg.js";import{B as g}from"./dom-to-png-B1ZOQlt2-DxH4YCk8.js";import"./vue-data-ui-DE-qMDG3.js";import"./alert-DhCbxeke.js";import"./command.vue_vue_type_script_setup_true_lang-CXgwwUyd.js";import"./index.vue_vue_type_script_setup_true_lang-CK1oxT0q.js";async function y({domElement:d,fileName:u,scale:h=2,options:P={}}){if(!d)return Promise.reject("No domElement provided");let l;try{l=(await _(async()=>{const{default:n}=await import("./__vite-optional-peer-dep_jspdf_vue-data-ui-BIHI7g3E.js");return{default:n}},[],import.meta.url)).default}catch{return Promise.reject("jspdf is not installed. Run npm install jspdf")}const t={width:595.28,height:841.89},r=await g({container:d,scale:h});return await new Promise((n,w)=>{const e=new window.Image;e.onload=function(){const a=e.naturalWidth,m=e.naturalHeight;let s=t.width,c=t.width/a*m;const i=new l("","pt","a4");let f=0,o=m;const p=a/t.width*t.height;if(o<p)i.addImage(r,"PNG",0,0,s,c,"","FAST");else for(;o>0;)i.addImage(r,"PNG",0,f,s,c,"","FAST"),o-=p,f-=t.height,o>0&&i.addPage();i.save(`${u}.pdf`),n()},e.onerror=a=>w("Failed to load image for PDF: "+a),e.src=r})}export{y as default};
