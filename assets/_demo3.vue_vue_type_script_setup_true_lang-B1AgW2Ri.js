
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as o,bO as n,aY as c,K as i,f as u,i as d,B as p,k as _,r as f,g as s,w as m,bw as C,C as v}from"./index-De8Oh0HC.js";const x=o({__name:"_demo3",setup(k){const a=o({setup(){const t=f("123");return()=>s("div",null,[m(s("input",{"onUpdate:modelValue":e=>t.value=e,class:"w-full border rounded-md p-2"},null),[[C,t.value]])])}}),{open:r}=n().create({title:"标题",description:"这里是一段描述介绍",beforeClose:(t,e)=>{t==="close"?n().confirm({title:"提示",content:"确定要关闭吗？",onConfirm:()=>{e()}}):e()},content:c(a)});return(t,e)=>{const l=v;return u(),i(l,{onClick:_(r)},{default:d(()=>e[0]||(e[0]=[p(" 打开 ",-1)])),_:1,__:[0]},8,["onClick"])}}});export{x as _};
