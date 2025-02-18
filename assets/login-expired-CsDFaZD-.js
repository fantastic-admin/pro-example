
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_}from"./index.vue_vue_type_script_setup_true_lang-B4qtdlJM.js";import{d as m,x as c,c as g,o as x,f as e,g as n,b as o,_ as k,j as l,c2 as $,J as r}from"./index-Bbf2k3Iz.js";import{_ as v}from"./index.vue_vue_type_script_setup_true_lang-CZ8uheV8.js";const B=m({__name:"login-expired",setup(C){const d=c();function s(i){d.$patch(t=>{t.settings.app.loginExpiredMode=i}),$.post("user/login/expired",null,{baseURL:"/mock/"})}return(i,t)=>{const u=v,a=k,p=_;return x(),g("div",null,[e(u,{title:"登录过期"},{description:n(()=>t[2]||(t[2]=[o("div",{class:"space-y-2"},[o("p",null,"接口请求遇到拦截器判定为登录过期时，框架提供了 2 种重新登录的方式："),o("p",null,"1、重定向到登录页（默认）"),o("p",null,"2、弹出登录窗口")],-1)])),_:1}),e(p,{title:"重定向到登录页"},{default:n(()=>[e(a,{onClick:t[0]||(t[0]=f=>s("redirect"))},{default:n(()=>t[3]||(t[3]=[l(" 点击模拟 ")])),_:1})]),_:1}),e(p,{title:"弹出登录窗口"},{default:n(()=>[e(a,{onClick:t[1]||(t[1]=f=>s("popup"))},{default:n(()=>t[4]||(t[4]=[l(" 点击模拟 ")])),_:1})]),_:1})])}}});typeof r=="function"&&r(B);export{B as default};
