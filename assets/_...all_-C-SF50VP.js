
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d,p as x,q as m,x as p,K as _,r as v,L as g,M as w,c as b,o as B,f as l,b as a,B as N,g as S,j as h,t as k,e as y,_ as I,J as r}from"./index-Bbf2k3Iz.js";const C={class:"absolute left-[50%] top-[50%] flex flex-col items-center justify-between lg-flex-row -translate-x-50% -translate-y-50% lg-gap-12"},M={class:"flex flex-col gap-4"},R=d({__name:"[...all]",setup(V){const n=x(),c=m(),o=p(),u=_(),e=v({inter:Number.NaN,countdown:5});g(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),w(()=>{o.settings.tabbar.enable&&u.remove(n.meta.activeMenu||n.fullPath),e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),s())},1e3)});function s(){c.push(o.settings.home.fullPath)}return(j,t)=>{const i=N,f=I;return B(),b("div",C,[l(i,{name:"404",class:"text-[300px] lg-text-[400px]"}),a("div",M,[t[0]||(t[0]=a("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1)),t[1]||(t[1]=a("div",{class:"mx-0 text-xl text-secondary-foreground/50"}," 抱歉，你访问的页面不存在 ",-1)),a("div",null,[l(f,{onClick:s},{default:S(()=>[h(k(y(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])])}}});typeof r=="function"&&r(R);export{R as default};
