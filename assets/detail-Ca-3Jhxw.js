
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as k}from"./index.vue_vue_type_script_setup_true_lang-BmJnPYE2.js";import{d as x,H as B,I as F,aa as $,G as s,f as v,g as w,h as e,j as t,C as m,N as y,l as i,a8 as N,a7 as b,a5 as z,V as f}from"./index-Dv6GDtcN.js";import{_ as D}from"./index.vue_vue_type_script_setup_true_lang-BU3PdXQ7.js";import"./index-BHdp7Rct.js";import"./department-D1z9gSGV.js";const P=x({name:"PagesExampleDepartmentDetail",__name:"detail",setup(V){const r=B(),u=F(),_=$("formRef");function c(){var a;(a=_.value)==null||a.submit().then(()=>{z.emit("get-data-list"),o()})}function o(){u.close({name:"pagesExampleGeneralDepartmentList"})}return(a,n)=>{const p=y,l=s("ElButton"),d=N,C=s("ElCol"),g=s("ElRow"),E=b,R=k;return w(),v("div",null,[e(d,{title:i(r).name==="routerName"?"新增部门":"编辑部门"},{default:t(()=>[e(l,{size:"default",round:"",onClick:o},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[n[0]||(n[0]=m(" 返回 "))]),_:1,__:[0]})]),_:1},8,["title"]),e(E,null,{default:t(()=>[e(g,null,{default:t(()=>[e(C,{md:24,lg:16},{default:t(()=>[e(D,{id:i(r).params.id,ref_key:"formRef",ref:_},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(R,null,{default:t(()=>[e(l,{type:"primary",size:"large",onClick:c},{default:t(()=>n[1]||(n[1]=[m(" 提交 ")])),_:1,__:[1]}),e(l,{size:"large",onClick:o},{default:t(()=>n[2]||(n[2]=[m(" 取消 ")])),_:1,__:[2]})]),_:1})])}}});typeof f=="function"&&f(P);export{P as default};
