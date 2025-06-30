
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as k}from"./index.vue_vue_type_script_setup_true_lang-DLGc_R1T.js";import{d as R,G as x,H as B,a9 as F,E as l,e as $,f as b,g as e,i as t,B as m,M as v,k as r,a7 as w,a6 as y,a4 as z,U as _}from"./index-CkQ8ZzMl.js";import{_ as D}from"./index.vue_vue_type_script_setup_true_lang-DqOUeXGM.js";import"./index-0um1i_51.js";const N=R({name:"PagesExampleDepartmentJobDetail",__name:"detail",setup(P){const a=x(),f=B(),i=F("formRef");function u(){i.value?.submit().then(()=>{z.emit("get-data-list"),o()})}function o(){f.close({name:"pagesExampleGeneralDepartmentList"})}return(G,n)=>{const p=v,s=l("ElButton"),c=w,d=l("ElCol"),E=l("ElRow"),g=y,C=k;return b(),$("div",null,[e(c,{title:r(a).name==="routerName"?"新增职位":"编辑职位"},{default:t(()=>[e(s,{size:"default",round:"",onClick:o},{icon:t(()=>[e(p,{name:"i-ep:arrow-left"})]),default:t(()=>[n[0]||(n[0]=m(" 返回 "))]),_:1,__:[0]})]),_:1},8,["title"]),e(g,null,{default:t(()=>[e(E,null,{default:t(()=>[e(d,{md:24,lg:16},{default:t(()=>[e(D,{id:r(a).params.id,ref_key:"formRef",ref:i,"department-id":r(a).params.department_id},null,8,["id","department-id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(s,{type:"primary",size:"large",onClick:u},{default:t(()=>n[1]||(n[1]=[m(" 提交 ")])),_:1,__:[1]}),e(s,{size:"large",onClick:o},{default:t(()=>n[2]||(n[2]=[m(" 取消 ")])),_:1,__:[2]})]),_:1})])}}});typeof _=="function"&&_(N);export{N as default};
