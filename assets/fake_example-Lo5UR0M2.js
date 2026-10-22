
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e,C as t,wt as n}from"./reactivity.esm-bundler-DQLEWij_.js";import{D as r,E as i,_ as a,b as o,bt as s,k as c,mt as l,o as u,qt as d}from"./runtime-core.esm-bundler-B5ds1qB8.js";import{bt as f,nt as p}from"./src-XafWzjth.js";import{t as m}from"./page-header-DeO2joBq.js";import{h}from"./auth-9jimfUaX.js";var g={class:`mt-4 empty:hidden`},_=c({__name:`index`,setup(c){let _=t([]);function v(){h.permission().then(e=>{_.value=e.data.permissions})}return(t,c)=>{let h=m,y=f,b=p;return l(),o(`div`,null,[r(h,{title:`假数据`,description:`通过拦截 Ajax 请求，模拟返回响应数据，可以让前端工程师独立于后端进行开发。`}),r(b,null,{default:d(()=>[r(y,{onClick:v},{default:d(()=>[...c[0]||(c[0]=[i(` 测试：获取用户权限 `,-1)])]),_:1}),a(`div`,g,[(l(!0),o(u,null,s(e(_),(e,t)=>(l(),o(`div`,{key:t},n(e),1))),128))])]),_:1})])}}});export{_ as default};