
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{cr as P}from"./index-DQdGVpLy.js";import{k as r}from"./dom-to-png-JfgMQjN--DP45iRzM.js";import"./vue-data-ui-CuZy9eFT.js";import"./alert-PqLgfNSu.js";import"./command.vue_vue_type_script_setup_true_lang-BCaCNdeY.js";import"./index.vue_vue_type_script_setup_true_lang-DZB_4TwE.js";async function N({domElement:t,fileName:h,scale:a=2,options:v={}}){if(!t)return Promise.reject("No domElement provided");const g=typeof navigator<"u"&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent);let l;try{l=(await P(async()=>{const{default:o}=await import("./__vite-optional-peer-dep_jspdf_vue-data-ui_false-DOvOOyrI.js");return{default:o}},[],import.meta.url)).default}catch(o){return Promise.reject("jspdf is not installed. Run npm install jspdf")}const e={width:595.28,height:841.89};if(g)try{await r({container:t,scale:a}),await r({container:t,scale:a}),await r({container:t,scale:a}),await r({container:t,scale:a})}catch(o){}const c=await r({container:t,scale:a});return await new Promise((o,_)=>{const i=new window.Image;i.onload=function(){const n=i.naturalWidth,m=i.naturalHeight;let f=e.width,u=e.width/n*m;const s=new l("","pt","a4");let p=0,d=m;const w=n/e.width*e.height;if(d<w)s.addImage(c,"PNG",0,0,f,u,"","FAST");else for(;d>0;)s.addImage(c,"PNG",0,p,f,u,"","FAST"),d-=w,p-=e.height,d>0&&s.addPage();s.save("".concat(h,".pdf")),o()},i.onerror=n=>_("Failed to load image for PDF: "+n),i.src=c})}export{N as default};
