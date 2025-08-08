
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as t}from"./index-cX_UFNDD.js";import{d as l,r as u,K as c,f as r,m,k as p,a$ as d}from"./index-DOTJNdHl.js";const V=l({__name:"_demo1",setup(f){const a=u([]);function s(){d.success("模拟上传成功")}return(_,o)=>{const n=t;return r(),c(n,{modelValue:p(a),"onUpdate:modelValue":o[0]||(o[0]=e=>m(a)?a.value=e:null),action:"/mock/upload","after-upload":e=>e.data.url,onOnSuccess:s},null,8,["modelValue","after-upload"])}}});export{V as _};
