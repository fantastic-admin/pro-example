
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as x}from"./index.vue_vue_type_script_setup_true_lang-BmJnPYE2.js";import{d as k,H as B,I as F,aa as $,G as s,f as v,g as w,h as e,j as t,C as i,N as y,l as r,a8 as b,a7 as z,a5 as G,V as f}from"./index-Dv6GDtcN.js";import{_ as N}from"./index.vue_vue_type_script_setup_true_lang-DMYw4xES.js";import"./index-BHdp7Rct.js";import"./menu-BpDLcwjc.js";import"./role-DKInVtRR.js";const P=k({name:"PagesExampleRoleDetail",__name:"detail",setup(V){const m=B(),u=F(),_=$("formRef");function c(){var n;(n=_.value)==null||n.submit().then(()=>{G.emit("get-data-list"),a()})}function a(){u.close({name:"pagesExampleGeneralRoleList"})}return(n,o)=>{const p=y,l=s("ElButton"),d=b,C=s("ElCol"),R=s("ElRow"),g=z,E=x;return w(),v("div",null,[e(d,{title:r(m).name==="pagesExampleGeneralRoleCreate"?"新增角色":"编辑角色"},{default:t(()=>[e(l,{size:"default",round:"",onClick:a},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[o[0]||(o[0]=i(" 返回 "))]),_:1,__:[0]})]),_:1},8,["title"]),e(g,null,{default:t(()=>[e(R,null,{default:t(()=>[e(C,{md:24,lg:16},{default:t(()=>[e(N,{id:r(m).params.id,ref_key:"formRef",ref:_},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(E,null,{default:t(()=>[e(l,{type:"primary",size:"large",onClick:c},{default:t(()=>o[1]||(o[1]=[i(" 提交 ")])),_:1,__:[1]}),e(l,{size:"large",onClick:a},{default:t(()=>o[2]||(o[2]=[i(" 取消 ")])),_:1,__:[2]})]),_:1})])}}});typeof f=="function"&&f(P);export{P as default};
