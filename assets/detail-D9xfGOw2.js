
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as k}from"./index.vue_vue_type_script_setup_true_lang-Gf6SAOWf.js";import{d as R,G as x,H as B,a9 as F,E as s,e as $,f as v,g as e,i as t,B as l,M as w,k as r,a7 as y,a6 as b,a4 as z,U as _}from"./index-BLSV4yIg.js";import{_ as D}from"./index.vue_vue_type_script_setup_true_lang-VNBW8Lzn.js";import"./index-GeXVuA9E.js";import"./department-Aj6RwBdk.js";const N=R({name:"PagesExampleDepartmentDetail",__name:"detail",setup(P){const m=x(),f=B(),i=F("formRef");function u(){i.value?.submit().then(()=>{z.emit("get-data-list"),o()})}function o(){f.close({name:"pagesExampleGeneralDepartmentList"})}return(G,n)=>{const c=w,a=s("ElButton"),p=y,d=s("ElCol"),E=s("ElRow"),g=b,C=k;return v(),$("div",null,[e(p,{title:r(m).name==="routerName"?"新增部门":"编辑部门"},{default:t(()=>[e(a,{size:"default",round:"",onClick:o},{icon:t(()=>[e(c,{name:"i-ep:arrow-left"})]),default:t(()=>[n[0]||(n[0]=l(" 返回 "))]),_:1,__:[0]})]),_:1},8,["title"]),e(g,null,{default:t(()=>[e(E,null,{default:t(()=>[e(d,{md:24,lg:16},{default:t(()=>[e(D,{id:r(m).params.id,ref_key:"formRef",ref:i},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:u},{default:t(()=>n[1]||(n[1]=[l(" 提交 ")])),_:1,__:[1]}),e(a,{size:"large",onClick:o},{default:t(()=>n[2]||(n[2]=[l(" 取消 ")])),_:1,__:[2]})]),_:1})])}}});typeof _=="function"&&_(N);export{N as default};
