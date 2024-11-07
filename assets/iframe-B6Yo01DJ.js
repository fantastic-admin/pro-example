
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as c}from"./index.vue_vue_type_script_setup_true_lang-BI6i3Xj9.js";import{d as _,x as E,r as V,b as n,o as x,c as k,w as l,g as r,f as a,h as I,E as v,z as m}from"./index-D4ACN76T.js";const B=_({name:"LinkExampleIframe",__name:"iframe",setup(C){const s=E(),e=V({title:"自定义标题",iframe:"https://fantastic-admin.hurui.me/"});function u(){/^https?:\/\//.test(e.value.iframe)?s.push({name:"linkExampleIframeDynamicTest",query:{title:e.value.title,iframe:e.value.iframe}}):v.error("请输入正确的链接")}return(g,t)=>{const i=n("el-input"),p=n("ElButton"),f=n("ElInput"),d=c;return x(),k(d,null,{default:l(()=>[r(i,{modelValue:a(e).title,"onUpdate:modelValue":t[0]||(t[0]=o=>a(e).title=o),placeholder:"请输入 Iframe 页面的自定义标题，如果不设置，则会显示路由默认的标题"},null,8,["modelValue"]),r(f,{modelValue:a(e).iframe,"onUpdate:modelValue":t[1]||(t[1]=o=>a(e).iframe=o),placeholder:"请输入 Iframe 页面的链接"},{append:l(()=>[r(p,{onClick:u},{default:l(()=>t[2]||(t[2]=[I(" 打开 ")])),_:1})]),_:1},8,["modelValue"])]),_:1})}}});typeof m=="function"&&m(B);export{B as default};
