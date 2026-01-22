
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as l}from"./index-DodE5lY9.js";import{d as t,n as u,l as c,o as r,p as m,e as p,L as d}from"./index-H6QnEWHf.js";const V=t({__name:"_demo1",setup(_){const e=u([]);function s(){d.success("模拟上传成功")}return(f,a)=>{const n=l;return r(),c(n,{modelValue:p(e),"onUpdate:modelValue":a[0]||(a[0]=o=>m(e)?e.value=o:null),action:"/mock/upload","after-upload":o=>o.data.url,onOnSuccess:s},null,8,["modelValue","after-upload"])}}});export{V as _};
