
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d,I as c,r as _,G as m,L as V,g as I,j as n,h as l,l as a,C as k,a$ as x,a7 as E,V as s}from"./index-Dv6GDtcN.js";const C=d({name:"LinkExampleIframe",__name:"iframe",setup(v){const u=c(),e=_({title:"自定义标题",iframe:"https://fantastic-admin.hurui.me/"});function i(){/^https?:\/\//.test(e.value.iframe)?u.push({name:"linkExampleIframeDynamicTest",query:{title:e.value.title,iframe:e.value.iframe}}):x.error("请输入正确的链接")}return(B,t)=>{const r=m("ElInput"),f=m("ElButton"),p=E;return I(),V(p,null,{default:n(()=>[l(r,{modelValue:a(e).title,"onUpdate:modelValue":t[0]||(t[0]=o=>a(e).title=o),placeholder:"请输入 Iframe 页面的自定义标题，如果不设置，则会显示路由默认的标题"},null,8,["modelValue"]),l(r,{modelValue:a(e).iframe,"onUpdate:modelValue":t[1]||(t[1]=o=>a(e).iframe=o),placeholder:"请输入 Iframe 页面的链接"},{append:n(()=>[l(f,{onClick:i},{default:n(()=>t[2]||(t[2]=[k(" 打开 ")])),_:1,__:[2]})]),_:1},8,["modelValue"])]),_:1})}}});typeof s=="function"&&s(C);export{C as default};
