
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as l}from"./index-CCfcu3BX.js";import{d as t,r as u,K as c,f as r,m,k as p,a_ as _}from"./index-BLSV4yIg.js";const V=t({__name:"_demo1",setup(d){const e=u([]);function s(){_.success("模拟上传成功")}return(f,o)=>{const n=l;return r(),c(n,{modelValue:p(e),"onUpdate:modelValue":o[0]||(o[0]=a=>m(e)?e.value=a:null),action:"/mock/upload","after-upload":a=>a.data.url,multiple:"",onOnSuccess:s},null,8,["modelValue","after-upload"])}}});export{V as _};
