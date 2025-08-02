
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as c}from"./index-BdcdlGC9.js";import{d as i,r,K as m,f as p,m as d,k as f,a$ as s}from"./index-De8Oh0HC.js";const x=i({__name:"_demo2",setup(_){const e=r([{name:"logo.svg",size:1048576,url:"https://fantastic-admin.hurui.me/logo.svg"}]);function l(){s.success("模拟上传成功")}function t(o){s.info(o.name,{description:o.url})}return(o,n)=>{const u=c;return p(),m(u,{modelValue:f(e),"onUpdate:modelValue":n[0]||(n[0]=a=>d(e)?e.value=a:null),action:"/mock/upload","after-upload":a=>a.data.url,multiple:"",ext:["png"],size:200*1024,max:5,onOnSuccess:l,onOnClick:t},null,8,["modelValue","after-upload"])}}});export{x as _};
