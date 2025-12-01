
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as l}from"./index-C3SpTqSY.js";import{d as t,n as u,l as c,o as p,p as r,e as m,K as d}from"./index-COkggZqL.js";const V=t({__name:"_demo1",setup(_){const e=u([]);function s(){d.success("模拟上传成功")}return(f,a)=>{const n=l;return p(),c(n,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>r(e)?e.value=o:null),action:"/mock/upload","after-upload":o=>o.data.url,multiple:"",onOnSuccess:s},null,8,["modelValue","after-upload"])}}});export{V as _};
