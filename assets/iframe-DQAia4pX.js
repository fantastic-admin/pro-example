
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as d}from"./index.vue_vue_type_script_setup_true_lang-DXnSJe_z.js";import{d as c,I as _,r as V,G as m,L as I,g as k,j as n,h as l,l as a,C as x,aO as E,W as s}from"./index-BIIATpY8.js";const C=c({name:"LinkExampleIframe",__name:"iframe",setup(v){const u=_(),e=V({title:"自定义标题",iframe:"https://fantastic-admin.hurui.me/"});function i(){/^https?:\/\//.test(e.value.iframe)?u.push({name:"linkExampleIframeDynamicTest",query:{title:e.value.title,iframe:e.value.iframe}}):E.error("请输入正确的链接")}return(B,t)=>{const r=m("ElInput"),f=m("ElButton"),p=d;return k(),I(p,null,{default:n(()=>[l(r,{modelValue:a(e).title,"onUpdate:modelValue":t[0]||(t[0]=o=>a(e).title=o),placeholder:"请输入 Iframe 页面的自定义标题，如果不设置，则会显示路由默认的标题"},null,8,["modelValue"]),l(r,{modelValue:a(e).iframe,"onUpdate:modelValue":t[1]||(t[1]=o=>a(e).iframe=o),placeholder:"请输入 Iframe 页面的链接"},{append:n(()=>[l(f,{onClick:i},{default:n(()=>t[2]||(t[2]=[x(" 打开 ")])),_:1})]),_:1},8,["modelValue"])]),_:1})}}});typeof s=="function"&&s(C);export{C as default};
