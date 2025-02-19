
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as m}from"./index.vue_vue_type_script_setup_true_lang-CS5azdQV.js";import{d as _,I as c,f as g,g as k,k as e,m as n,h as o,C as x,B as l,bT as $,V as r}from"./index-xcJMzuCA.js";import{_ as B}from"./index.vue_vue_type_script_setup_true_lang-BLiR9BIn.js";const C=_({__name:"login-expired",setup(v){const d=c();function s(i){d.$patch(t=>{t.settings.app.loginExpiredMode=i}),$.post("user/login/expired",null,{baseURL:"/mock/"})}return(i,t)=>{const u=B,a=x,p=m;return k(),g("div",null,[e(u,{title:"登录过期"},{description:n(()=>t[2]||(t[2]=[o("div",{class:"space-y-2"},[o("p",null,"接口请求遇到拦截器判定为登录过期时，框架提供了 2 种重新登录的方式："),o("p",null,"1、重定向到登录页（默认）"),o("p",null,"2、弹出登录窗口")],-1)])),_:1}),e(p,{title:"重定向到登录页"},{default:n(()=>[e(a,{onClick:t[0]||(t[0]=f=>s("redirect"))},{default:n(()=>t[3]||(t[3]=[l(" 点击模拟 ")])),_:1})]),_:1}),e(p,{title:"弹出登录窗口"},{default:n(()=>[e(a,{onClick:t[1]||(t[1]=f=>s("popup"))},{default:n(()=>t[4]||(t[4]=[l(" 点击模拟 ")])),_:1})]),_:1})])}}});typeof r=="function"&&r(C);export{C as default};
