
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d,b$ as p,f,g as b,h as e,a8 as g,j as s,i as t,k,l as B,D as N,C as c,N as x,a7 as C,V as u}from"./index-KSDvm3cB.js";const $={class:"space-y-2"},v={class:"space-x-2"},F=d({__name:"number",setup(V){const n=p();function _(){n.setNumber(n.number+1)}function m(){n.setNumber(n.number-1)}return(y,a)=>{const r=g,o=x,i=N,l=C;return b(),f("div",null,[e(r,{title:"数字标记",description:"搭配 Pinia 可实现动态设置。请控制数字展示长度，避免导航标记覆盖导航标题，为 0 时则隐藏"}),e(l,null,{default:s(()=>[t("div",$,[t("div",null,"当前 badge 值："+k(B(n).number),1),t("div",v,[e(i,{onClick:_},{default:s(()=>[e(o,{name:"i-ep:plus"}),a[0]||(a[0]=c(" 1 "))]),_:1}),e(i,{onClick:m},{default:s(()=>[e(o,{name:"i-ep:minus"}),a[1]||(a[1]=c(" 1 "))]),_:1})])])]),_:1})])}}});typeof u=="function"&&u(F);export{F as default};
