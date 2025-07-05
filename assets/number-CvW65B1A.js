
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d,c7 as p,e as f,f as b,g as e,a7 as g,i as s,h as t,j as B,k,C as x,B as c,M as C,a6 as N,U as _}from"./index-BLSV4yIg.js";const v={class:"space-y-2"},F={class:"space-x-2"},$=d({__name:"number",setup(y){const n=p();function u(){n.setNumber(n.number+1)}function m(){n.setNumber(n.number-1)}return(M,a)=>{const r=g,o=C,i=x,l=N;return b(),f("div",null,[e(r,{title:"数字标记",description:"搭配 Pinia 可实现动态设置。请控制数字展示长度，避免导航标记覆盖导航标题，为 0 时则隐藏"}),e(l,null,{default:s(()=>[t("div",v,[t("div",null,"当前 badge 值："+B(k(n).number),1),t("div",F,[e(i,{onClick:u},{default:s(()=>[e(o,{name:"i-ep:plus"}),a[0]||(a[0]=c(" 1 "))]),_:1,__:[0]}),e(i,{onClick:m},{default:s(()=>[e(o,{name:"i-ep:minus"}),a[1]||(a[1]=c(" 1 "))]),_:1,__:[1]})])])]),_:1})])}}});typeof _=="function"&&_($);export{$ as default};
