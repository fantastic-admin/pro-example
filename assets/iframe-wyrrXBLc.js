
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d,K as c,g as _,a4 as r,N as V,o as k,m as n,k as l,a,G as x,a9 as E,b9 as I,W as s}from"./index-CngbNVLW.js";const v=d({name:"LinkExampleIframe",__name:"iframe",setup(B){const u=c(),e=_({title:"自定义标题",iframe:"https://fantastic-admin.hurui.me/"});function i(){/^https?:\/\//.test(e.value.iframe)?u.push({name:"linkExampleIframeDynamicTest",query:{title:e.value.title,iframe:e.value.iframe}}):I.error("请输入正确的链接")}return(C,t)=>{const m=r("ElInput"),f=r("ElButton"),p=E;return k(),V(p,null,{default:n(()=>[l(m,{modelValue:a(e).title,"onUpdate:modelValue":t[0]||(t[0]=o=>a(e).title=o),placeholder:"请输入 Iframe 页面的自定义标题，如果不设置，则会显示路由默认的标题"},null,8,["modelValue"]),l(m,{modelValue:a(e).iframe,"onUpdate:modelValue":t[1]||(t[1]=o=>a(e).iframe=o),placeholder:"请输入 Iframe 页面的链接"},{append:n(()=>[l(f,{onClick:i},{default:n(()=>[...t[2]||(t[2]=[x(" 打开 ",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});typeof s=="function"&&s(v);export{v as default};
