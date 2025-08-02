
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as t}from"./index-ATbg5BMP.js";import{d as l,r as u,K as m,f as c,m as r,k as p,a$ as d}from"./index-De8Oh0HC.js";const g=l({__name:"_demo2",setup(f){const a=u(["https://fantastic-admin.hurui.me/logo.svg"]);function s(){d.success("模拟上传成功")}return(_,o)=>{const n=t;return c(),m(n,{modelValue:p(a),"onUpdate:modelValue":o[0]||(o[0]=e=>r(a)?a.value=e:null),action:"/mock/upload","after-upload":e=>e.data.url,max:2,onOnSuccess:s},null,8,["modelValue","after-upload"])}}});export{g as _};
