
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as t}from"./index-ZQ7uevD9.js";import{d as l,n as u,l as c,o as m,p as r,e as p,K as d}from"./index-COkggZqL.js";const k=l({__name:"_demo2",setup(f){const a=u(["https://fantastic-admin.hurui.me/logo.svg"]);function s(){d.success("模拟上传成功")}return(_,o)=>{const n=t;return m(),c(n,{modelValue:p(a),"onUpdate:modelValue":o[0]||(o[0]=e=>r(a)?a.value=e:null),action:"/mock/upload","after-upload":e=>e.data.url,max:2,onOnSuccess:s},null,8,["modelValue","after-upload"])}}});export{k as _};
