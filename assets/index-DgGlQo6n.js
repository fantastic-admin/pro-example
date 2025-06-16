
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as m,a as u,f as d,g as k,h as e,j as o,D as g,C as i,N as x,a8 as $,a7 as C,c8 as j,aY as v,V as r}from"./index-Cm5PYwOf.js";const F=m({__name:"index",setup(P){const a=u();function _(){a.getPermissions().then(()=>{j().toast({title:"当前用户权限",description:v("div",{innerHTML:a.permissions.map(t=>`<p>${t}</p>`).join("")}),duration:3e3})})}function c(t){window.open(t,"_blank")}return(t,n)=>{const f=x,s=g,p=$,l=C;return k(),d("div",null,[e(p,{title:"Mock",description:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 faker 实现的。更多语法规则请查询官方文档"},{default:o(()=>[e(s,{variant:"outline",onClick:n[0]||(n[0]=b=>c("https://github.com/faker-js/faker"))},{default:o(()=>[e(f,{name:"i-ep:link"}),n[1]||(n[1]=i(" faker 官网 "))]),_:1,__:[1]})]),_:1}),e(l,null,{default:o(()=>[e(s,{onClick:_},{default:o(()=>n[2]||(n[2]=[i(" 测试：获取用户权限 ")])),_:1,__:[2]})]),_:1})])}}});typeof r=="function"&&r(F);export{F as default};
