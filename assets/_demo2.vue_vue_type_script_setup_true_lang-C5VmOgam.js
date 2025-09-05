
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as t,b6 as l,bW as c,N as i,o as u,m,G as p,a as d,H as f,g as _,k as n,w as C,bC as v}from"./index-CngbNVLW.js";import{u as b}from"./index-BQrxBG34.js";const B=t({__name:"_demo2",setup(k){const s=t({setup(){const o=_("123");return()=>n("div",null,[C(n("input",{"onUpdate:modelValue":e=>o.value=e,class:"w-full border rounded-md p-2"},null),[[v,o.value]])])}}),{open:a}=b().create({title:"标题",description:"这里是一段描述介绍",beforeClose:(o,e)=>{o==="close"?c().confirm({title:"提示",content:"确定要关闭吗？",onConfirm:()=>{e()}}):e()},content:l(s)});return(o,e)=>{const r=f;return u(),i(r,{onClick:d(a)},{default:m(()=>[...e[0]||(e[0]=[p(" 打开 ",-1)])]),_:1},8,["onClick"])}}});export{B as _};
