
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as o,aY as l,bN as c,K as i,f as u,i as p,B as d,k as m,r as _,g as n,w as f,bE as C,C as v}from"./index-DODNO_Fi.js";import{u as k}from"./index-khq66YLb.js";const B=o({__name:"_demo2",setup(w){const s=o({setup(){const t=_("123");return()=>n("div",null,[f(n("input",{"onUpdate:modelValue":e=>t.value=e,class:"w-full border rounded-md p-2"},null),[[C,t.value]])])}}),{open:a}=k().create({title:"标题",description:"这里是一段描述介绍",beforeClose:(t,e)=>{t==="close"?c().confirm({title:"提示",content:"确定要关闭吗？",onConfirm:()=>{e()}}):e()},content:l(s)});return(t,e)=>{const r=v;return u(),i(r,{onClick:m(a)},{default:p(()=>e[0]||(e[0]=[d(" 打开 ",-1)])),_:1,__:[0]},8,["onClick"])}}});export{B as _};
