
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Ft as t,Nt as n,O as r,Y as i,pt as a,w as o,wt as s}from"./vue.runtime.esm-bundler-EJiOFDNb.js";import{Xt as c,Zt as l}from"./components-Dvnhr4Ep.js";var u={class:`flex-center-start gap-2`},d=e({__name:`_demo6`,setup(e){let d=s(0),f=s(0);return setInterval(()=>{d.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1),f.value+=Math.random()*(Math.random()>.5?1:-1)},2e3),(e,s)=>{let p=c,m=l;return i(),o(`div`,u,[r(m,null,{default:a(()=>[r(p,{value:n(d),locales:`zh-CN`,format:{style:`currency`,currency:`CNY`},"will-change":``,class:`text-4xl font-bold`},null,8,[`value`]),r(p,{value:n(f),locales:`zh-CN`,format:{style:`percent`,maximumFractionDigits:2,signDisplay:`always`},"will-change":``,class:t([`text-2xl text-green-500 font-bold`,{"text-red-500":n(f)<0}])},null,8,[`value`,`class`])]),_:1})])}}});export{d as t};