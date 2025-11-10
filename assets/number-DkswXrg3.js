
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as p,cn as d,c as f,o as b,k as e,aa as g,m as s,l as t,p as k,a as B,H as x,G as i,P as N,a9 as v,W as u}from"./index-B13-Jify.js";const C={class:"space-y-2"},F={class:"space-x-2"},P=p({__name:"number",setup($){const n=d();function _(){n.setNumber(n.number+1)}function m(){n.setNumber(n.number-1)}return(y,a)=>{const r=g,o=N,c=x,l=v;return b(),f("div",null,[e(r,{title:"数字标记",description:"搭配 Pinia 可实现动态设置。请控制数字展示长度，避免导航标记覆盖导航标题，为 0 时则隐藏"}),e(l,null,{default:s(()=>[t("div",C,[t("div",null,"当前 badge 值："+k(B(n).number),1),t("div",F,[e(c,{onClick:_},{default:s(()=>[e(o,{name:"i-ep:plus"}),a[0]||(a[0]=i(" 1 ",-1))]),_:1}),e(c,{onClick:m},{default:s(()=>[e(o,{name:"i-ep:minus"}),a[1]||(a[1]=i(" 1 ",-1))]),_:1})])])]),_:1})])}}});typeof u=="function"&&u(P);export{P as default};
