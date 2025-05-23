
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as u,b$ as f,f as p,g as m,h as a,a8 as x,j as n,i as s,k as g,l as k,D as B,C as c,a7 as C,V as i}from"./index-8eOOZCt1.js";const v={class:"space-y-2"},V={class:"space-x-2"},$=u({__name:"text",setup(b){const e=f();function _(){e.setText(e.text==="热门"?"促销":"热门")}function l(){e.setText("")}return(y,t)=>{const d=x,o=B,r=C;return m(),p("div",null,[a(d,{title:"文字标记",description:"搭配 Pinia 可实现动态设置。请控制文字展示长度，避免导航标记覆盖导航标题"}),a(r,null,{default:n(()=>[s("div",v,[s("div",null,"当前 badge 值：'"+g(k(e).text)+"'",1),s("div",V,[a(o,{onClick:_},{default:n(()=>t[0]||(t[0]=[c(" 切换 ")])),_:1}),a(o,{onClick:l},{default:n(()=>t[1]||(t[1]=[c(" 清空 ")])),_:1})])])]),_:1})])}}});typeof i=="function"&&i($);export{$ as default};
