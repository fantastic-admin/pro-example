
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as l}from"./index-BRBWMAi6.js";import{d as t,l as u,o as c,n as r,p as m,e as p,L as d}from"./index-Bhq0NWKR.js";const V=t({__name:"_demo1",setup(_){const e=m([]);function s(){d.success("模拟上传成功")}return(f,a)=>{const n=l;return c(),u(n,{modelValue:p(e),"onUpdate:modelValue":a[0]||(a[0]=o=>r(e)?e.value=o:null),action:"/mock/upload","after-upload":o=>o.data.url,onOnSuccess:s},null,8,["modelValue","after-upload"])}}});export{V as _};
