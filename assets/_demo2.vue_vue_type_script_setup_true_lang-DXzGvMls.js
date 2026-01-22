
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as t,ab as l,aa as c,l as i,o as u,w as m,i as p,e as d,m as f,n as _,g as a,W as C,ac as v}from"./index-H6QnEWHf.js";import{u as w}from"./index-D6rA-3wF.js";const B=t({__name:"_demo2",setup(x){const n=t({setup(){const o=_("123");return()=>a("div",null,[C(a("input",{"onUpdate:modelValue":e=>o.value=e,class:"w-full border rounded-md p-2"},null),[[v,o.value]])])}}),{open:s}=w().create({title:"标题",description:"这里是一段描述介绍",beforeClose:(o,e)=>{o==="close"?c().confirm({title:"提示",content:"确定要关闭吗？",onConfirm:()=>{e()}}):e()},content:l(n)});return(o,e)=>{const r=f;return u(),i(r,{onClick:d(s)},{default:m(()=>[...e[0]||(e[0]=[p(" 打开 ",-1)])]),_:1},8,["onClick"])}}});export{B as _};
