
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d,H as c,r as _,E as m,K as V,f as k,i as n,g as l,k as a,B as E,a6 as x,a$ as I,U as s}from"./index-DQdGVpLy.js";const B=d({name:"LinkExampleIframe",__name:"iframe",setup(v){const u=c(),e=_({title:"自定义标题",iframe:"https://fantastic-admin.hurui.me/"});function i(){/^https?:\/\//.test(e.value.iframe)?u.push({name:"linkExampleIframeDynamicTest",query:{title:e.value.title,iframe:e.value.iframe}}):I.error("请输入正确的链接")}return(C,t)=>{const r=m("ElInput"),f=m("ElButton"),p=x;return k(),V(p,null,{default:n(()=>[l(r,{modelValue:a(e).title,"onUpdate:modelValue":t[0]||(t[0]=o=>a(e).title=o),placeholder:"请输入 Iframe 页面的自定义标题，如果不设置，则会显示路由默认的标题"},null,8,["modelValue"]),l(r,{modelValue:a(e).iframe,"onUpdate:modelValue":t[1]||(t[1]=o=>a(e).iframe=o),placeholder:"请输入 Iframe 页面的链接"},{append:n(()=>[l(f,{onClick:i},{default:n(()=>t[2]||(t[2]=[E(" 打开 ",-1)])),_:1,__:[2]})]),_:1},8,["modelValue"])]),_:1})}}});typeof s=="function"&&s(B);export{B as default};
