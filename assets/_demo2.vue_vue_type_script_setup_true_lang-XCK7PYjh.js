
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as t}from"./index-BRBWMAi6.js";import{d as l,l as u,o as c,n as m,p as r,e as p,L as d}from"./index-Bhq0NWKR.js";const k=l({__name:"_demo2",setup(f){const a=r(["https://fantastic-admin.hurui.me/logo.svg"]);function s(){d.success("模拟上传成功")}return(_,o)=>{const n=t;return c(),u(n,{modelValue:p(a),"onUpdate:modelValue":o[0]||(o[0]=e=>m(a)?a.value=e:null),action:"/mock/upload","after-upload":e=>e.data.url,max:2,onOnSuccess:s},null,8,["modelValue","after-upload"])}}});export{k as _};
