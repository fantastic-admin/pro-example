
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as l}from"./index-CAvjwx1v.js";import{d as t,g as u,N as c,o as r,v as m,a as p,b9 as d}from"./index-Bnionyve.js";const V=t({__name:"_demo1",setup(_){const e=u([]);function s(){d.success("模拟上传成功")}return(f,a)=>{const n=l;return r(),c(n,{modelValue:p(e),"onUpdate:modelValue":a[0]||(a[0]=o=>m(e)?e.value=o:null),action:"/mock/upload","after-upload":o=>o.data.url,multiple:"",onOnSuccess:s},null,8,["modelValue","after-upload"])}}});export{V as _};
