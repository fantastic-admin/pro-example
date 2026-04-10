
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,S as n,Y as r,wt as i}from"./vue.runtime.esm-bundler-EJiOFDNb.js";import{Xt as a}from"./components-Dvnhr4Ep.js";var o=e({__name:`_demo4`,setup(e){let o=i(0),s=i(0),c=[`en-US`,`en-US`,`fr-FR`,`en-US`,`en-US`,`zh-CN`,`en-US`,`en-US`,`fr-FR`],l=[{},{minimumFractionDigits:2},{style:`currency`,currency:`USD`,currencySign:`accounting`,signDisplay:`always`},{style:`percent`,signDisplay:`always`},{style:`unit`,unit:`meter`,notation:`compact`,minimumFractionDigits:2,maximumFractionDigits:2,signDisplay:`never`},{style:`currency`,currency:`CNY`},{signDisplay:`always`}];return setInterval(()=>{s.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1),o.value+=1},2e3),(e,i)=>{let u=a;return r(),n(u,{value:t(s),format:l[t(o)%l.length],locales:c[t(o)%c.length],"will-change":``,class:`text-4xl font-bold`},null,8,[`value`,`format`,`locales`])}}});export{o as t};