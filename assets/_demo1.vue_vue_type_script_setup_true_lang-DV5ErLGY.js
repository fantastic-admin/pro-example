
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as t}from"./index-z8d1wDeL.js";import{d as l,g as u,N as c,o as r,v as m,a as p,b9 as d}from"./index-B13-Jify.js";const V=l({__name:"_demo1",setup(_){const a=u([]);function s(){d.success("模拟上传成功")}return(f,o)=>{const n=t;return r(),c(n,{modelValue:p(a),"onUpdate:modelValue":o[0]||(o[0]=e=>m(a)?a.value=e:null),action:"/mock/upload","after-upload":e=>e.data.url,onOnSuccess:s},null,8,["modelValue","after-upload"])}}});export{V as _};
