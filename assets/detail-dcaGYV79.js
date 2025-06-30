
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as C}from"./index.vue_vue_type_script_setup_true_lang-DLGc_R1T.js";import{d as k,G as x,H as B,a9 as F,E as l,e as $,f as v,g as e,i as t,B as s,M as w,k as _,a7 as y,a6 as b,a4 as z,U as r}from"./index-CkQ8ZzMl.js";import{_ as G}from"./index.vue_vue_type_script_setup_true_lang-Ctd7aI2r.js";import"./index-0um1i_51.js";import"./menu-lEL8obeI.js";import"./role-C6ZX5W-m.js";const P=k({name:"PagesExampleRoleDetail",__name:"detail",setup(H){const i=x(),f=B(),m=F("formRef");function u(){m.value?.submit().then(()=>{z.emit("get-data-list"),n()})}function n(){f.close({name:"pagesExampleGeneralRoleList"})}return(M,o)=>{const c=w,a=l("ElButton"),p=y,d=l("ElCol"),E=l("ElRow"),R=b,g=C;return v(),$("div",null,[e(p,{title:_(i).name==="pagesExampleGeneralRoleCreate"?"新增角色":"编辑角色"},{default:t(()=>[e(a,{size:"default",round:"",onClick:n},{icon:t(()=>[e(c,{name:"i-ep:arrow-left"})]),default:t(()=>[o[0]||(o[0]=s(" 返回 "))]),_:1,__:[0]})]),_:1},8,["title"]),e(R,null,{default:t(()=>[e(E,null,{default:t(()=>[e(d,{md:24,lg:16},{default:t(()=>[e(G,{id:_(i).params.id,ref_key:"formRef",ref:m},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(g,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:u},{default:t(()=>o[1]||(o[1]=[s(" 提交 ")])),_:1,__:[1]}),e(a,{size:"large",onClick:n},{default:t(()=>o[2]||(o[2]=[s(" 取消 ")])),_:1,__:[2]})]),_:1})])}}});typeof r=="function"&&r(P);export{P as default};
