
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as l}from"./index.vue_vue_type_script_setup_true_lang-B4qtdlJM.js";import{_ as u}from"./index.vue_vue_type_script_setup_true_lang-CZ8uheV8.js";import{d,a as k,c as g,o as x,f as e,g as o,_ as $,j as i,B as v,c8 as j,av as B,J as r}from"./index-Bbf2k3Iz.js";const C=d({__name:"index",setup(F){const a=k();function _(){a.getPermissions().then(()=>{j().toast({title:"当前用户权限",description:B("div",{innerHTML:a.permissions.map(t=>`<p>${t}</p>`).join("")}),duration:3e3})})}function c(t){window.open(t,"_blank")}return(t,n)=>{const f=v,s=$,m=u,p=l;return x(),g("div",null,[e(m,{title:"Mock",description:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 faker 实现的。更多语法规则请查询官方文档"},{default:o(()=>[e(s,{variant:"outline",onClick:n[0]||(n[0]=P=>c("https://github.com/faker-js/faker"))},{default:o(()=>[e(f,{name:"i-ep:link"}),n[1]||(n[1]=i(" faker 官网 "))]),_:1})]),_:1}),e(p,null,{default:o(()=>[e(s,{onClick:_},{default:o(()=>n[2]||(n[2]=[i(" 测试：获取用户权限 ")])),_:1})]),_:1})])}}});typeof r=="function"&&r(C);export{C as default};
