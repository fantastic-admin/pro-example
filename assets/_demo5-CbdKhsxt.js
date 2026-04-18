
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,D as t,Nt as n,O as r,Y as i,h as a,pt as o,st as s,w as c,wt as l,x as u}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{Tt as d,a as f,gt as p}from"./components-CNfuk_zw.js";var m={class:`flex flex-row gap-2`},h=e({__name:`_demo5`,setup(e){let h=s(`countToRef`),g=l(0),_=l(1e5);function v(){f(`开始`)}function y(){f(`结束`)}return(e,s)=>{let l=p,f=d;return i(),c(a,null,[r(l,{ref_key:`countToRef`,ref:h,"start-val":n(g),"end-val":n(_),autoplay:!1,onOnStarted:v,onOnFinished:y},null,8,[`start-val`,`end-val`]),u(`div`,m,[r(f,{onClick:n(h)?.start},{default:o(()=>[...s[1]||(s[1]=[t(` 开始 `,-1)])]),_:1},8,[`onClick`]),r(f,{onClick:n(h)?.reset},{default:o(()=>[...s[2]||(s[2]=[t(` 重置 `,-1)])]),_:1},8,[`onClick`]),r(f,{onClick:s[0]||(s[0]=e=>_.value+=1e4)},{default:o(()=>[...s[3]||(s[3]=[t(` 增加10000 `,-1)])]),_:1})])],64)}}});export{h as t};