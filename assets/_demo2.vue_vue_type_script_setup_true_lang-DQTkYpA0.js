
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as t,b6 as l,bW as c,N as i,o as u,m,G as p,a as d,g as f,k as n,w as _,bC as C,H as v}from"./index-CphCexG_.js";import{u as b}from"./index-CXdqj4-8.js";const B=t({__name:"_demo2",setup(k){const s=t({setup(){const o=f("123");return()=>n("div",null,[_(n("input",{"onUpdate:modelValue":e=>o.value=e,class:"w-full border rounded-md p-2"},null),[[C,o.value]])])}}),{open:a}=b().create({title:"标题",description:"这里是一段描述介绍",beforeClose:(o,e)=>{o==="close"?c().confirm({title:"提示",content:"确定要关闭吗？",onConfirm:()=>{e()}}):e()},content:l(s)});return(o,e)=>{const r=v;return u(),i(r,{onClick:d(a)},{default:m(()=>[...e[0]||(e[0]=[p(" 打开 ",-1)])]),_:1},8,["onClick"])}}});export{B as _};
