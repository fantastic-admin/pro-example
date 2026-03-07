
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as c}from"./index-DI-5KBB9.js";import{d as i,l as r,o as m,n as p,p as d,e as f,L as s}from"./index-Bhq0NWKR.js";const x=i({__name:"_demo2",setup(_){const e=d([{name:"logo.svg",size:1048576,url:"https://fantastic-admin.hurui.me/logo.svg"}]);function l(){s.success("模拟上传成功")}function t(o){s.info(o.name,{description:o.url})}return(o,a)=>{const u=c;return m(),r(u,{modelValue:f(e),"onUpdate:modelValue":a[0]||(a[0]=n=>p(e)?e.value=n:null),action:"/mock/upload","after-upload":n=>n.data.url,multiple:"",ext:["png"],size:200*1024,max:5,onOnSuccess:l,onOnClick:t},null,8,["modelValue","after-upload"])}}});export{x as _};
