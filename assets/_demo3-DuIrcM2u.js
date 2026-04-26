
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,S as n,Y as r,wt as i,yt as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{t as o}from"./pcas-code-DjHrIhRK.js";import{St as s}from"./components-C_d7Trg8.js";var c=e({__name:`_demo3`,setup(e){let c=i();function l(e){return e.map(e=>({label:e.name,value:e.code,...e.children?.length?{children:l(e.children)}:{}}))}let u=l(o);return(e,i)=>{let o=s;return r(),n(o,{modelValue:t(c),"onUpdate:modelValue":i[0]||(i[0]=e=>a(c)?c.value=e:null),options:t(u),placeholder:`请选择地区`,"leaf-only":!1,clearable:``},null,8,[`modelValue`,`options`])}}});export{c as t};