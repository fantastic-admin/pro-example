
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as s,bY as a,b6 as d,N as f,o as m,m as _,G as l,a as p,H as c,g as C,k as n,w as x,bD as k}from"./index-B13-Jify.js";const F=s({__name:"_demo3",setup(v){const u=s({props:{close:{type:Function}},setup(t){const e=C("123");return()=>n("div",{class:"flex flex-col gap-4"},[x(n("input",{"onUpdate:modelValue":o=>e.value=o,class:"w-full border rounded-md p-2"},null),[[k,e.value]]),n(c,{onClick:()=>{var o;return(o=t.close)==null?void 0:o.call(t)}},{default:()=>[l("组件内部关闭弹窗")]})])}}),{open:i,close:r}=a().create({title:"标题",description:"这里是一段描述介绍",beforeClose:(t,e)=>{t==="close"?a().confirm({title:"提示",content:"确定要关闭吗？",onConfirm:()=>{e()}}):e()},content:()=>d(u,{close:r})});return(t,e)=>{const o=c;return m(),f(o,{onClick:p(i)},{default:_(()=>[...e[0]||(e[0]=[l(" 打开 ",-1)])]),_:1},8,["onClick"])}}});export{F as _};
