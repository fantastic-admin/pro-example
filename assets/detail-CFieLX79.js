
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as k}from"./index.vue_vue_type_script_setup_true_lang-DLGc_R1T.js";import{d as R,G as x,H as B,a9 as F,E as s,e as $,f as v,g as e,i as t,B as l,M as w,k as _,a7 as y,a6 as M,a4 as b,U as m}from"./index-CkQ8ZzMl.js";import{_ as z}from"./index.vue_vue_type_script_setup_true_lang-DO43MTCb.js";import"./index-0um1i_51.js";import"./role-C6ZX5W-m.js";const N=R({name:"PagesExampleManagerDetail",__name:"detail",setup(P){const i=x(),f=B(),r=F("formRef");function u(){r.value?.submit().then(()=>{b.emit("get-data-list"),o()})}function o(){f.close({name:"pagesExampleGeneralManagerList"})}return(G,n)=>{const c=w,a=s("ElButton"),p=y,d=s("ElCol"),g=s("ElRow"),E=M,C=k;return v(),$("div",null,[e(p,{title:_(i).name==="routerName"?"新增管理员":"编辑管理员"},{default:t(()=>[e(a,{size:"default",round:"",onClick:o},{icon:t(()=>[e(c,{name:"i-ep:arrow-left"})]),default:t(()=>[n[0]||(n[0]=l(" 返回 "))]),_:1,__:[0]})]),_:1},8,["title"]),e(E,null,{default:t(()=>[e(g,null,{default:t(()=>[e(d,{md:24,lg:16},{default:t(()=>[e(z,{id:_(i).params.id,ref_key:"formRef",ref:r},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(C,null,{default:t(()=>[e(a,{type:"primary",size:"large",onClick:u},{default:t(()=>n[1]||(n[1]=[l(" 提交 ")])),_:1,__:[1]}),e(a,{size:"large",onClick:o},{default:t(()=>n[2]||(n[2]=[l(" 取消 ")])),_:1,__:[2]})]),_:1})])}}});typeof m=="function"&&m(N);export{N as default};
