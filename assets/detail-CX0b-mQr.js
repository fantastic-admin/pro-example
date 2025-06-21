
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as k}from"./index.vue_vue_type_script_setup_true_lang-BmJnPYE2.js";import{d as x,H as B,I as F,aa as $,G as m,f as b,g as v,h as e,j as t,C as r,N as w,l as i,a8 as y,a7 as N,a5 as z,V as f}from"./index-Dv6GDtcN.js";import{_ as D}from"./index.vue_vue_type_script_setup_true_lang-eU0Xx3iO.js";import"./index-BHdp7Rct.js";const P=x({name:"PagesExampleDepartmentJobDetail",__name:"detail",setup(V){const n=B(),u=F(),_=$("formRef");function p(){var s;(s=_.value)==null||s.submit().then(()=>{z.emit("get-data-list"),o()})}function o(){u.close({name:"pagesExampleGeneralDepartmentList"})}return(s,a)=>{const c=w,l=m("ElButton"),d=y,C=m("ElCol"),g=m("ElRow"),E=N,R=k;return v(),b("div",null,[e(d,{title:i(n).name==="routerName"?"新增职位":"编辑职位"},{default:t(()=>[e(l,{size:"default",round:"",onClick:o},{icon:t(()=>[e(c,{name:"i-ep:arrow-left"})]),default:t(()=>[a[0]||(a[0]=r(" 返回 "))]),_:1,__:[0]})]),_:1},8,["title"]),e(E,null,{default:t(()=>[e(g,null,{default:t(()=>[e(C,{md:24,lg:16},{default:t(()=>[e(D,{id:i(n).params.id,ref_key:"formRef",ref:_,"department-id":i(n).params.department_id},null,8,["id","department-id"])]),_:1})]),_:1})]),_:1}),e(R,null,{default:t(()=>[e(l,{type:"primary",size:"large",onClick:p},{default:t(()=>a[1]||(a[1]=[r(" 提交 ")])),_:1,__:[1]}),e(l,{size:"large",onClick:o},{default:t(()=>a[2]||(a[2]=[r(" 取消 ")])),_:1,__:[2]})]),_:1})])}}});typeof f=="function"&&f(P);export{P as default};
