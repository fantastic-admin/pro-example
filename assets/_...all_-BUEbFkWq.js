
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d,G as x,H as m,I as p,V as v,r as _,W as g,X as w,e as b,f as B,g as l,h as a,M as h,i as k,B as N,j as S,k as y,C as I,U as r}from"./index-DOTJNdHl.js";const C={class:"absolute left-[50%] top-[50%] flex flex-col items-center justify-between lg-flex-row -translate-x-50% -translate-y-50% lg-gap-12"},V={class:"flex flex-col gap-4"},M=d({__name:"[...all]",setup(R){const n=x(),u=m(),o=p(),c=v(),e=_({inter:Number.NaN,countdown:5});g(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),w(()=>{o.settings.tabbar.enable&&c.remove(n.meta.activeMenu||n.fullPath),e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),s())},1e3)});function s(){u.push(o.settings.home.fullPath)}return(j,t)=>{const i=h,f=I;return B(),b("div",C,[l(i,{name:"404",class:"text-[300px] lg-text-[400px]"}),a("div",V,[t[0]||(t[0]=a("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1)),t[1]||(t[1]=a("div",{class:"mx-0 text-xl text-secondary-foreground/50"}," 抱歉，你访问的页面不存在 ",-1)),a("div",null,[l(f,{onClick:s},{default:k(()=>[N(S(y(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])])}}});typeof r=="function"&&r(M);export{M as default};
