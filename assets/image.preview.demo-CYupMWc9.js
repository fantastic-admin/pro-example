
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as w}from"./index.vue_vue_type_script_setup_true_lang-BI6i3Xj9.js";import{d as h,K as m,b as i,o as g,c as v,w as o,e as b,g as e,O as x,f as p,_ as y,y as T,l as $,z as _}from"./index-D4ACN76T.js";import{_ as E}from"./index.vue_vue_type_script_setup_true_lang-B4BTvh-f.js";const I={class:"image-slot"},N=h({name:"ImagePreview",__name:"index",props:{src:{},width:{default:200},height:{default:200}},setup(l){const t=l,c=m(()=>typeof t.width=="string"?t.width:`${t.width}px`),d=m(()=>typeof t.height=="string"?t.height:`${t.height}px`);return(n,r)=>{const s=y,a=i("ElImage");return g(),v(a,{src:n.src,fit:"cover",style:x(`width:${p(c)};height:${p(d)};`),"preview-src-list":[n.src],"preview-teleported":""},{error:o(()=>[b("div",I,[e(s,{name:"image-load-fail"})])]),_:1},8,["src","style","preview-src-list"])}}}),S=T(N,[["__scopeId","data-v-bb23448d"]]),C=h({__name:"image.preview.demo",setup(l){const t=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles",src:"https://fantastic-admin.hurui.me/logo.png"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles",src:"https://fantastic-admin.hurui.me/logo.png"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles",src:"https://fantastic-admin.hurui.me/logo.png"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles",src:"https://fantastic-admin.hurui.me/logo.png"}];return(c,d)=>{const n=E,r=S,s=w,a=i("ElTableColumn"),u=i("ElTable");return g(),$("div",null,[e(n,{title:"图片预览",content:"ImagePreview"}),e(s,null,{default:o(()=>[e(r,{src:"https://fantastic-admin.hurui.me/logo.png",width:200})]),_:1}),e(s,{title:"图片加载失败时"},{default:o(()=>[e(r,{src:"http://www.baidu.com",width:"100px",height:"100px"})]),_:1}),e(s,{title:"结合 el-table 使用"},{default:o(()=>[e(u,{data:t,style:{width:"100%"}},{default:o(()=>[e(a,{prop:"date",label:"日期",width:"180",fixed:"left"}),e(a,{prop:"name",label:"姓名",width:"180"}),e(a,{prop:"address",label:"地址"}),e(a,{label:"图片"},{default:o(({row:f})=>[e(r,{src:f.src,width:"100px",height:"100px"},null,8,["src"])]),_:1})]),_:1})]),_:1})])}}});typeof _=="function"&&_(C);export{C as default};