
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as v,r as d,G as f,f as V,g as x,h as l,j as r,C as m,l as i,n as p}from"./index-BFPO48W4.js";const w=v({__name:"rate",setup(E){const o=d(),n=d(),a=d(3.7);return(C,e)=>{const s=f("ElDivider"),u=f("ElRate");return x(),V("div",null,[l(s,{"content-position":"left"},{default:r(()=>e[3]||(e[3]=[m(" 基础用法 ")])),_:1}),l(u,{modelValue:i(o),"onUpdate:modelValue":e[0]||(e[0]=t=>p(o)?o.value=t:null)},null,8,["modelValue"]),l(s,{"content-position":"left"},{default:r(()=>e[4]||(e[4]=[m(" 辅助文字 ")])),_:1}),l(u,{modelValue:i(n),"onUpdate:modelValue":e[1]||(e[1]=t=>p(n)?n.value=t:null),"show-text":"",texts:["极差","差","一般","好","极好"]},null,8,["modelValue"]),l(s,{"content-position":"left"},{default:r(()=>e[5]||(e[5]=[m(" 只读 ")])),_:1}),l(u,{modelValue:i(a),"onUpdate:modelValue":e[2]||(e[2]=t=>p(a)?a.value=t:null),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},null,8,["modelValue"])])}}});export{w as _};
