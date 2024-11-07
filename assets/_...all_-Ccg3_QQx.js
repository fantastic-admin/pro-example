
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d,p as x,A as v,r as m,B as p,D as _,l as w,g as l,e as a,w as g,v as b,x as B,G as S,o as h,h as N,t as k,f as y,_ as I,z as r}from"./index-D4ACN76T.js";const C={class:"absolute left-[50%] top-[50%] flex flex-col items-center justify-between lg-flex-row -translate-x-50% -translate-y-50% lg-gap-12"},R={class:"flex flex-col gap-4"},V=d({__name:"[...all]",setup(D){const n=b(),u=B(),o=x(),c=v(),e=m({inter:Number.NaN,countdown:5});p(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),_(()=>{o.settings.tabbar.enable&&c.remove(n.meta.activeMenu||n.fullPath),e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),s())},1e3)});function s(){u.push(o.settings.home.fullPath)}return(M,t)=>{const i=I,f=S;return h(),w("div",C,[l(i,{name:"404",class:"text-[300px] lg-text-[400px]"}),a("div",R,[t[0]||(t[0]=a("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1)),t[1]||(t[1]=a("div",{class:"mx-0 text-xl text-stone-5"}," 抱歉，你访问的页面不存在 ",-1)),a("div",null,[l(f,{onClick:s},{default:g(()=>[N(k(y(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])])}}});typeof r=="function"&&r(V);export{V as default};
