
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as f,I as c,e as m,f as g,g as t,i as n,h as o,a7 as x,C as k,B as p,a6 as $,c1 as B,U as r}from"./index-CkQ8ZzMl.js";const C=f({__name:"login-expired",setup(v){const d=c();function s(a){d.$patch(e=>{e.settings.app.loginExpiredMode=a}),B.post("user/login/expired",null,{baseURL:"/mock/"})}return(a,e)=>{const u=x,i=k,l=$;return g(),m("div",null,[t(u,{title:"登录过期"},{description:n(()=>e[2]||(e[2]=[o("div",{class:"space-y-2"},[o("p",null,"接口请求遇到拦截器判定为登录过期时，框架提供了 2 种重新登录的方式："),o("p",null,"1、重定向到登录页（默认）"),o("p",null,"2、弹出登录窗口")],-1)])),_:1}),t(l,{title:"重定向到登录页"},{default:n(()=>[t(i,{onClick:e[0]||(e[0]=_=>s("redirect"))},{default:n(()=>e[3]||(e[3]=[p(" 点击模拟 ")])),_:1,__:[3]})]),_:1}),t(l,{title:"弹出登录窗口"},{default:n(()=>[t(i,{onClick:e[1]||(e[1]=_=>s("popup"))},{default:n(()=>e[4]||(e[4]=[p(" 点击模拟 ")])),_:1,__:[4]})]),_:1})])}}});typeof r=="function"&&r(C);export{C as default};
