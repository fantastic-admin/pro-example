
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as t}from"./index-COm-GjhC.js";import{d as l,g as u,N as c,o as m,v as r,a as p,b9 as d}from"./index-28uxndRW.js";const k=l({__name:"_demo2",setup(f){const a=u(["https://fantastic-admin.hurui.me/logo.svg"]);function s(){d.success("模拟上传成功")}return(_,e)=>{const n=t;return m(),c(n,{modelValue:p(a),"onUpdate:modelValue":e[0]||(e[0]=o=>r(a)?a.value=o:null),action:"/mock/upload","after-upload":o=>o.data.url,max:2,onOnSuccess:s},null,8,["modelValue","after-upload"])}}});export{k as _};
