
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as c}from"./index-z8d1wDeL.js";import{d as i,g as m,N as d,o as l,m as r,k as u,P as _,v as p,a as f,b9 as h}from"./index-B13-Jify.js";const w=i({__name:"_demo3",setup(g){const a=m([]);function s(){h.success("模拟上传成功")}return(x,o)=>{const t=_,n=c;return l(),d(n,{modelValue:f(a),"onUpdate:modelValue":o[0]||(o[0]=e=>p(a)?a.value=e:null),action:"/mock/upload","after-upload":e=>e.data.url,width:200,height:130,dimension:{width:400,height:260},ext:["png"],size:200*1024,max:0,onOnSuccess:s},{default:r(()=>[u(t,{name:"i-noto:identification-card",class:"size-50 opacity-50"})]),_:1},8,["modelValue","after-upload"])}}});export{w as _};
