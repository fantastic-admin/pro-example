
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as k}from"./index.vue_vue_type_script_setup_true_lang-BmJnPYE2.js";import{d as x,H as B,I as F,aa as $,G as s,f as v,g as w,h as e,j as t,C as r,N as y,l as m,a8 as N,a7 as b,a5 as z,V as f}from"./index-Dv6GDtcN.js";import{_ as M}from"./index.vue_vue_type_script_setup_true_lang-BNZ3hnZr.js";import"./index-BHdp7Rct.js";import"./role-DKInVtRR.js";const P=x({name:"PagesExampleManagerDetail",__name:"detail",setup(V){const _=B(),u=F(),i=$("formRef");function c(){var o;(o=i.value)==null||o.submit().then(()=>{z.emit("get-data-list"),n()})}function n(){u.close({name:"pagesExampleGeneralManagerList"})}return(o,a)=>{const p=y,l=s("ElButton"),d=N,g=s("ElCol"),C=s("ElRow"),E=b,R=k;return w(),v("div",null,[e(d,{title:m(_).name==="routerName"?"新增管理员":"编辑管理员"},{default:t(()=>[e(l,{size:"default",round:"",onClick:n},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[a[0]||(a[0]=r(" 返回 "))]),_:1,__:[0]})]),_:1},8,["title"]),e(E,null,{default:t(()=>[e(C,null,{default:t(()=>[e(g,{md:24,lg:16},{default:t(()=>[e(M,{id:m(_).params.id,ref_key:"formRef",ref:i},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(R,null,{default:t(()=>[e(l,{type:"primary",size:"large",onClick:c},{default:t(()=>a[1]||(a[1]=[r(" 提交 ")])),_:1,__:[1]}),e(l,{size:"large",onClick:n},{default:t(()=>a[2]||(a[2]=[r(" 取消 ")])),_:1,__:[2]})]),_:1})])}}});typeof f=="function"&&f(P);export{P as default};
