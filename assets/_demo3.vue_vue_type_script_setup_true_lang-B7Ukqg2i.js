
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as a,aa as s,ab as d,l as f,o as m,w as _,i as l,e as p,m as c,n as C,g as n,W as x,ac as v}from"./index-H6QnEWHf.js";const w=a({__name:"_demo3",setup(k){const u=a({props:{close:{type:Function}},setup(t){const e=C("123");return()=>n("div",{class:"flex flex-col gap-4"},[x(n("input",{"onUpdate:modelValue":o=>e.value=o,class:"w-full border rounded-md p-2"},null),[[v,e.value]]),n(c,{onClick:()=>{var o;return(o=t.close)==null?void 0:o.call(t)}},{default:()=>[l("组件内部关闭弹窗")]})])}}),{open:i,close:r}=s().create({title:"标题",description:"这里是一段描述介绍",beforeClose:(t,e)=>{t==="close"?s().confirm({title:"提示",content:"确定要关闭吗？",onConfirm:()=>{e()}}):e()},content:()=>d(u,{close:r})});return(t,e)=>{const o=c;return m(),f(o,{onClick:p(i)},{default:_(()=>[...e[0]||(e[0]=[l(" 打开 ",-1)])]),_:1},8,["onClick"])}}});export{w as _};
