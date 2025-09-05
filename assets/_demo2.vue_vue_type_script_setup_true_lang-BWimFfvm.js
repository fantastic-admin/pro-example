
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as c}from"./index-Dtzw80it.js";import{d as i,g as r,N as m,o as p,v as d,a as f,b9 as s}from"./index-CngbNVLW.js";const v=i({__name:"_demo2",setup(_){const o=r([{name:"logo.svg",size:1048576,url:"https://fantastic-admin.hurui.me/logo.svg"}]);function l(){s.success("模拟上传成功")}function t(e){s.info(e.name,{description:e.url})}return(e,n)=>{const u=c;return p(),m(u,{modelValue:f(o),"onUpdate:modelValue":n[0]||(n[0]=a=>d(o)?o.value=a:null),action:"/mock/upload","after-upload":a=>a.data.url,multiple:"",ext:["png"],size:200*1024,max:5,onOnSuccess:l,onOnClick:t},null,8,["modelValue","after-upload"])}}});export{v as _};
