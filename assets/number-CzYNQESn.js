
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d,b3 as p,c as f,o as b,g as e,am as g,w as t,f as a,t as k,e as B,m as x,i as c,_ as N,j as v,k as u}from"./index-H6QnEWHf.js";const C={class:"space-y-2"},F={class:"space-x-2"},$=d({__name:"number",setup(y){const n=p();function _(){n.setNumber(n.number+1)}function m(){n.setNumber(n.number-1)}return(P,s)=>{const r=g,o=N,i=x,l=v;return b(),f("div",null,[e(r,{title:"数字标记",description:"搭配 Pinia 可实现动态设置。请控制数字展示长度，避免导航标记覆盖导航标题，为 0 时则隐藏"}),e(l,null,{default:t(()=>[a("div",C,[a("div",null,"当前 badge 值："+k(B(n).number),1),a("div",F,[e(i,{onClick:_},{default:t(()=>[e(o,{name:"i-ep:plus"}),s[0]||(s[0]=c(" 1 ",-1))]),_:1}),e(i,{onClick:m},{default:t(()=>[e(o,{name:"i-ep:minus"}),s[1]||(s[1]=c(" 1 ",-1))]),_:1})])])]),_:1})])}}});typeof u=="function"&&u($);export{$ as default};
