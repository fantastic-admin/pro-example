
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as m,a as u,e as d,f as k,g as n,i as o,C as g,B as i,M as x,a7 as $,a6 as C,c7 as v,aX as B,U as r}from"./index-CkQ8ZzMl.js";const F=m({__name:"index",setup(M){const a=u();function _(){a.getPermissions().then(()=>{v().toast({title:"当前用户权限",description:B("div",{innerHTML:a.permissions.map(t=>`<p>${t}</p>`).join("")}),duration:3e3})})}function c(t){window.open(t,"_blank")}return(t,e)=>{const f=x,s=g,p=$,l=C;return k(),d("div",null,[n(p,{title:"Mock",description:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 faker 实现的。更多语法规则请查询官方文档"},{default:o(()=>[n(s,{variant:"outline",onClick:e[0]||(e[0]=P=>c("https://github.com/faker-js/faker"))},{default:o(()=>[n(f,{name:"i-ep:link"}),e[1]||(e[1]=i(" faker 官网 "))]),_:1,__:[1]})]),_:1}),n(l,null,{default:o(()=>[n(s,{onClick:_},{default:o(()=>e[2]||(e[2]=[i(" 测试：获取用户权限 ")])),_:1,__:[2]})]),_:1})])}}});typeof r=="function"&&r(F);export{F as default};
