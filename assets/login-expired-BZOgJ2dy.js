
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as f,J as c,f as m,g,h as t,j as n,i as o,a8 as x,D as k,C as p,a7 as $,c2 as C,V as r}from"./index-Dv6GDtcN.js";const v=f({__name:"login-expired",setup(B){const d=c();function s(a){d.$patch(e=>{e.settings.app.loginExpiredMode=a}),C.post("user/login/expired",null,{baseURL:"/mock/"})}return(a,e)=>{const u=x,i=k,l=$;return g(),m("div",null,[t(u,{title:"登录过期"},{description:n(()=>e[2]||(e[2]=[o("div",{class:"space-y-2"},[o("p",null,"接口请求遇到拦截器判定为登录过期时，框架提供了 2 种重新登录的方式："),o("p",null,"1、重定向到登录页（默认）"),o("p",null,"2、弹出登录窗口")],-1)])),_:1}),t(l,{title:"重定向到登录页"},{default:n(()=>[t(i,{onClick:e[0]||(e[0]=_=>s("redirect"))},{default:n(()=>e[3]||(e[3]=[p(" 点击模拟 ")])),_:1,__:[3]})]),_:1}),t(l,{title:"弹出登录窗口"},{default:n(()=>[t(i,{onClick:e[1]||(e[1]=_=>s("popup"))},{default:n(()=>e[4]||(e[4]=[p(" 点击模拟 ")])),_:1,__:[4]})]),_:1})])}}});typeof r=="function"&&r(v);export{v as default};
