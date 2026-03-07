
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as t,ab as l,aa as c,l as i,o as u,w as p,i as m,e as d,m as f,g as a,W as _,ac as C,p as v}from"./index-Bhq0NWKR.js";import{u as w}from"./index-WO9FMu7l.js";const B=t({__name:"_demo2",setup(x){const n=t({setup(){const o=v("123");return()=>a("div",null,[_(a("input",{"onUpdate:modelValue":e=>o.value=e,class:"w-full border rounded-md p-2"},null),[[C,o.value]])])}}),{open:s}=w().create({title:"标题",description:"这里是一段描述介绍",beforeClose:(o,e)=>{o==="close"?c().confirm({title:"提示",content:"确定要关闭吗？",onConfirm:()=>{e()}}):e()},content:l(n)});return(o,e)=>{const r=f;return u(),i(r,{onClick:d(s)},{default:p(()=>[...e[0]||(e[0]=[m(" 打开 ",-1)])]),_:1},8,["onClick"])}}});export{B as _};
