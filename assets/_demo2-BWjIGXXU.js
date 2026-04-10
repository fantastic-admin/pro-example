
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,S as n,Y as r,wt as i,yt as a}from"./vue.runtime.esm-bundler-EJiOFDNb.js";import{t as o}from"./pcas-code-DjHrIhRK.js";import{bt as s}from"./components-Dvnhr4Ep.js";var c=e({__name:`_demo2`,setup(e){let c=i();function l(e){return e.map(e=>({label:e.name,value:e.code,...e.children?.length?{children:l(e.children)}:{}}))}let u=l(o).map((e,t)=>({...e,disabled:t%2==1}));return(e,i)=>{let o=s;return r(),n(o,{modelValue:t(c),"onUpdate:modelValue":i[0]||(i[0]=e=>a(c)?c.value=e:null),options:t(u),placeholder:`请选择地区`,clearable:``},null,8,[`modelValue`,`options`])}}});export{c as t};