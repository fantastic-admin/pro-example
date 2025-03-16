
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d,H as x,I as m,J as p,W as v,r as _,X as g,Y as w,f as b,g as N,h as l,i as a,N as h,j as k,C as B,k as S,l as y,D as I,V as r}from"./index-CsSDrlYc.js";const C={class:"absolute left-[50%] top-[50%] flex flex-col items-center justify-between lg-flex-row -translate-x-50% -translate-y-50% lg-gap-12"},V={class:"flex flex-col gap-4"},R=d({__name:"[...all]",setup(j){const n=x(),u=m(),o=p(),c=v(),e=_({inter:Number.NaN,countdown:5});g(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),w(()=>{o.settings.tabbar.enable&&c.remove(n.meta.activeMenu||n.fullPath),e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),s())},1e3)});function s(){u.push(o.settings.home.fullPath)}return(D,t)=>{const i=h,f=I;return N(),b("div",C,[l(i,{name:"404",class:"text-[300px] lg-text-[400px]"}),a("div",V,[t[0]||(t[0]=a("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1)),t[1]||(t[1]=a("div",{class:"mx-0 text-xl text-secondary-foreground/50"}," 抱歉，你访问的页面不存在 ",-1)),a("div",null,[l(f,{onClick:s},{default:k(()=>[B(S(y(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])])}}});typeof r=="function"&&r(R);export{R as default};
