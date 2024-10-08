
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as f}from"./index.vue_vue_type_script_setup_true_lang--ThJjcg9.js";import{_ as u}from"./index.vue_vue_type_script_setup_true_lang-DWmqi8aT.js";import{d,i as k,a as g,o as x,k as C,f as n,w as t,g as a,at as M,_ as $,y as m}from"./index-DL7SpVKF.js";const j=d({__name:"index",setup(v){const s=k();function r(){s.getPermissions().then(()=>{M({title:"当前用户权限",dangerouslyUseHTMLString:!0,message:s.permissions.map(e=>`<p>${e}</p>`).join("")})})}function c(e){window.open(e,"_blank")}return(e,o)=>{const l=$,i=g("ElButton"),_=u,p=f;return x(),C("div",null,[n(_,{title:"Mock",content:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 mock 实现的。更多 Mock 语法规则请查询官方文档"},{default:t(()=>[n(i,{onClick:o[0]||(o[0]=w=>c("http://mockjs.com/"))},{icon:t(()=>[n(l,{name:"i-ep:link"})]),default:t(()=>[o[1]||(o[1]=a(" Mock.js 官网 "))]),_:1})]),_:1}),n(p,null,{default:t(()=>[n(i,{onClick:r},{default:t(()=>o[2]||(o[2]=[a(" 测试：获取用户权限 ")])),_:1})]),_:1})])}}});typeof m=="function"&&m(j);export{j as default};
