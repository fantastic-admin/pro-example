
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as o,aY as l,bO as c,K as i,f as u,i as p,B as d,k as m,C as _,r as f,g as n,w as C,bw as v}from"./index-DQdGVpLy.js";import{u as w}from"./index-C3QTkpZp.js";const B=o({__name:"_demo2",setup(k){const s=o({setup(){const t=f("123");return()=>n("div",null,[C(n("input",{"onUpdate:modelValue":e=>t.value=e,class:"w-full border rounded-md p-2"},null),[[v,t.value]])])}}),{open:a}=w().create({title:"标题",description:"这里是一段描述介绍",beforeClose:(t,e)=>{t==="close"?c().confirm({title:"提示",content:"确定要关闭吗？",onConfirm:()=>{e()}}):e()},content:l(s)});return(t,e)=>{const r=_;return u(),i(r,{onClick:m(a)},{default:p(()=>e[0]||(e[0]=[d(" 打开 ",-1)])),_:1,__:[0]},8,["onClick"])}}});export{B as _};
