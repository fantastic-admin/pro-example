
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d,u as x,J as m,a as _,K as p,n as v,aP as w,a7 as g,c as b,o as k,g as l,f as a,_ as B,w as N,i as S,t as h,e as y,m as I,k as r}from"./index-H6QnEWHf.js";const C={class:"absolute left-[50%] top-[50%] flex flex-col items-center justify-between lg-flex-row -translate-x-50% -translate-y-50% lg-gap-12"},P={class:"flex flex-col gap-4"},R=d({__name:"[...all]",setup(V){const n=x(),u=m(),o=_(),c=p(),e=v({inter:Number.NaN,countdown:5});w(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),g(()=>{o.settings.tabbar.enable&&c.remove(n.meta.activeMenu||n.fullPath),e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),s())},1e3)});function s(){u.push(o.settings.home.fullPath)}return(F,t)=>{const i=B,f=I;return k(),b("div",C,[l(i,{name:"404",class:"text-[300px] lg-text-[400px]"}),a("div",P,[t[0]||(t[0]=a("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1)),t[1]||(t[1]=a("div",{class:"mx-0 text-xl text-secondary-foreground/50"}," 抱歉，你访问的页面不存在 ",-1)),a("div",null,[l(f,{onClick:s},{default:N(()=>[S(h(y(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])])}}});typeof r=="function"&&r(R);export{R as default};
