
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as _,L as c,c as m,o as g,k as t,m as n,l as o,aa as k,H as x,G as p,a9 as $,cg as v,W as r}from"./index-Bnionyve.js";const B=_({__name:"login-expired",setup(C){const d=c();function s(a){d.$patch(e=>{e.settings.app.loginExpiredMode=a}),v.post("user/login/expired",null,{baseURL:"/mock/"})}return(a,e)=>{const u=k,i=x,l=$;return g(),m("div",null,[t(u,{title:"登录过期"},{description:n(()=>[...e[2]||(e[2]=[o("div",{class:"space-y-2"},[o("p",null,"接口请求遇到拦截器判定为登录过期时，框架提供了 2 种重新登录的方式："),o("p",null,"1、重定向到登录页（默认）"),o("p",null,"2、弹出登录窗口")],-1)])]),_:1}),t(l,{title:"重定向到登录页"},{default:n(()=>[t(i,{onClick:e[0]||(e[0]=f=>s("redirect"))},{default:n(()=>[...e[3]||(e[3]=[p(" 点击模拟 ",-1)])]),_:1})]),_:1}),t(l,{title:"弹出登录窗口"},{default:n(()=>[t(i,{onClick:e[1]||(e[1]=f=>s("popup"))},{default:n(()=>[...e[4]||(e[4]=[p(" 点击模拟 ",-1)])]),_:1})]),_:1})])}}});typeof r=="function"&&r(B);export{B as default};
