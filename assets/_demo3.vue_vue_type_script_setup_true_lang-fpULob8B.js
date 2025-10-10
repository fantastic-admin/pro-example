
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as o,bW as n,b6 as c,N as i,o as u,m as d,G as p,a as m,H as _,g as f,k as s,w as C,bC as v}from"./index-28uxndRW.js";const x=o({__name:"_demo3",setup(b){const a=o({setup(){const t=f("123");return()=>s("div",null,[C(s("input",{"onUpdate:modelValue":e=>t.value=e,class:"w-full border rounded-md p-2"},null),[[v,t.value]])])}}),{open:l}=n().create({title:"标题",description:"这里是一段描述介绍",beforeClose:(t,e)=>{t==="close"?n().confirm({title:"提示",content:"确定要关闭吗？",onConfirm:()=>{e()}}):e()},content:c(a)});return(t,e)=>{const r=_;return u(),i(r,{onClick:m(l)},{default:d(()=>[...e[0]||(e[0]=[p(" 打开 ",-1)])]),_:1},8,["onClick"])}}});export{x as _};
