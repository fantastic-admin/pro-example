
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as x}from"./index.vue_vue_type_script_setup_true_lang-CnFEyql9.js";import{d as E,G as R,H as v,a9 as B,E as _,e as F,f as $,g as e,i as t,C as b,B as l,M as w,k as i,a7 as N,a6 as D,h as P,a4 as V,U as r}from"./index-De8Oh0HC.js";import{_ as y}from"./index.vue_vue_type_script_setup_true_lang-ClkmbHPj.js";import"./index-DDxA0KaO.js";const G={class:"flex-center gap-4"},H=E({name:"PagesExampleDepartmentJobDetail",__name:"detail",setup(M){const n=R(),f=v(),m=B("formRef");function u(){m.value?.submit().then(()=>{V.emit("get-data-list"),o()})}function o(){f.close({name:"pagesExampleGeneralDepartmentList"})}return(T,a)=>{const c=w,s=b,d=N,p=_("ElCol"),C=_("ElRow"),g=D,k=x;return $(),F("div",null,[e(d,{title:i(n).name==="routerName"?"新增职位":"编辑职位"},{default:t(()=>[e(s,{variant:"outline",size:"sm",class:"rounded-full",onClick:o},{default:t(()=>[e(c,{name:"i-ep:arrow-left"}),a[0]||(a[0]=l(" 返回 ",-1))]),_:1,__:[0]})]),_:1},8,["title"]),e(g,null,{default:t(()=>[e(C,null,{default:t(()=>[e(p,{md:24,lg:16},{default:t(()=>[e(y,{id:i(n).params.id,ref_key:"formRef",ref:m,"department-id":i(n).params.department_id},null,8,["id","department-id"])]),_:1})]),_:1})]),_:1}),e(k,null,{default:t(()=>[P("div",G,[e(s,{onClick:u},{default:t(()=>a[1]||(a[1]=[l(" 提交 ",-1)])),_:1,__:[1]}),e(s,{variant:"outline",onClick:o},{default:t(()=>a[2]||(a[2]=[l(" 取消 ",-1)])),_:1,__:[2]})])]),_:1})])}}});typeof r=="function"&&r(H);export{H as default};
