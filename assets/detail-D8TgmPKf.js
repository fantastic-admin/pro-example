
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as y}from"./index-BERqh5yJ.js";import{_ as k}from"./index.vue_vue_type_script_setup_true_lang-BI6i3Xj9.js";import{_ as B}from"./index.vue_vue_type_script_setup_true_lang-B4BTvh-f.js";import{d as C,v as S,x as D,p as E,a as R,b as z,o as T,l as w,g as e,w as t,h as i,f as u,V as P,_ as V,z as p}from"./index-D4ACN76T.js";import{D as $}from"./index-CSk443A7.js";import{u as h}from"./useTabbar-Bv3Yz9WK.js";import"./index.vue_vue_type_script_setup_true_lang-C2B1OEEW.js";import"./index-Di1lvxo7.js";const F=C({name:"PagesExampleDeliveryDetail",__name:"detail",setup(L){const r=S(),f=D(),_=h(),l=E(),m=R("formRef");function c(){var n;(n=m.value)==null||n.submit().then(()=>{P.emit("get-data-list"),a()})}function d(){a()}function a(){l.settings.tabbar.enable&&l.settings.tabbar.mergeTabsBy!=="activeMenu"?_.close({name:"pagesExampleShopDeliveryList"}):f.push({name:"pagesExampleShopDeliveryList"})}return(n,o)=>{const g=V,s=z("ElButton"),b=B,v=k,x=y;return T(),w("div",null,[e(b,{title:u(r).name==="pagesExampleShopDeliveryCreate"?"新增运费模版":"编辑运费模版"},{default:t(()=>[e(s,{size:"default",round:"",onClick:a},{icon:t(()=>[e(g,{name:"i-ep:arrow-left"})]),default:t(()=>[o[0]||(o[0]=i(" 返回 "))]),_:1})]),_:1},8,["title"]),e(v,null,{default:t(()=>[e($,{id:u(r).params.id,ref_key:"formRef",ref:m},null,8,["id"])]),_:1}),e(x,null,{default:t(()=>[e(s,{type:"primary",size:"large",onClick:c},{default:t(()=>o[1]||(o[1]=[i(" 提交 ")])),_:1}),e(s,{size:"large",onClick:d},{default:t(()=>o[2]||(o[2]=[i(" 取消 ")])),_:1})]),_:1})])}}});typeof p=="function"&&p(F);export{F as default};