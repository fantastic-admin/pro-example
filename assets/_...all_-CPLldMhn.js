
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d,n as x,p as m,q as p,z as v,r as _,A as w,B as g,k as b,f as l,b as n,w as B,D as S,o as k,g as N,t as h,e as y,_ as I,y as r}from"./index-DL7SpVKF.js";const C={class:"absolute left-[50%] top-[50%] flex flex-col items-center justify-between lg-flex-row -translate-x-50% -translate-y-50% lg-gap-12"},R={class:"flex flex-col gap-4"},V=d({__name:"[...all]",setup(D){const a=x(),u=m(),o=p(),c=v(),e=_({inter:Number.NaN,countdown:5});w(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),g(()=>{o.settings.tabbar.enable&&c.remove(a.meta.activeMenu||a.fullPath),e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),s())},1e3)});function s(){u.push(o.settings.home.fullPath)}return(M,t)=>{const i=I,f=S;return k(),b("div",C,[l(i,{name:"404",class:"text-[300px] lg-text-[400px]"}),n("div",R,[t[0]||(t[0]=n("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1)),t[1]||(t[1]=n("div",{class:"mx-0 text-xl text-stone-5"}," 抱歉，你访问的页面不存在 ",-1)),n("div",null,[l(f,{onClick:s},{default:B(()=>[N(h(y(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])])}}});typeof r=="function"&&r(V);export{V as default};
