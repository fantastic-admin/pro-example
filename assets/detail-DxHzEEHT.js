
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as R}from"./index.vue_vue_type_script_setup_true_lang-BmJnPYE2.js";import{d as k,H as B,I as F,aa as $,G as s,f as v,g as w,h as e,j as t,C as _,N as y,l as r,a8 as M,a7 as b,a5 as z,V as u}from"./index-Dv6GDtcN.js";import{_ as N}from"./index.vue_vue_type_script_setup_true_lang-D_ZH4dOP.js";import"./index-BHdp7Rct.js";const P=k({name:"PagesExampleFormModeDetail",__name:"detail",setup(V){const m=B(),f=F(),i=$("formRef");function c(){var n;(n=i.value)==null||n.submit().then(()=>{z.emit("get-data-list"),a()})}function a(){f.close({name:"standardModuleExampleList"})}return(n,o)=>{const d=y,l=s("ElButton"),p=M,C=s("ElCol"),E=s("ElRow"),g=b,x=R;return w(),v("div",null,[e(p,{title:r(m).name==="standardModuleExampleCreate"?"新增":"编辑"},{default:t(()=>[e(l,{size:"default",round:"",onClick:a},{icon:t(()=>[e(d,{name:"i-ep:arrow-left"})]),default:t(()=>[o[0]||(o[0]=_(" 返回 "))]),_:1,__:[0]})]),_:1},8,["title"]),e(g,null,{default:t(()=>[e(E,null,{default:t(()=>[e(C,{md:24,lg:16},{default:t(()=>[e(N,{id:r(m).params.id,ref_key:"formRef",ref:i},null,8,["id"])]),_:1})]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(l,{type:"primary",size:"large",onClick:c},{default:t(()=>o[1]||(o[1]=[_(" 提交 ")])),_:1,__:[1]}),e(l,{size:"large",onClick:a},{default:t(()=>o[2]||(o[2]=[_(" 取消 ")])),_:1,__:[2]})]),_:1})])}}});typeof u=="function"&&u(P);export{P as default};
