
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as u,cl as f,c as p,o as m,k as a,aa as x,m as n,l as s,p as g,a as k,H as B,G as c,a9 as v,W as i}from"./index-Bnionyve.js";const C={class:"space-y-2"},y={class:"space-x-2"},F=u({__name:"text",setup(N){const e=f();function l(){e.setText(e.text==="热门"?"促销":"热门")}function _(){e.setText("")}return(P,t)=>{const d=x,o=B,r=v;return m(),p("div",null,[a(d,{title:"文字标记",description:"搭配 Pinia 可实现动态设置。请控制文字展示长度，避免导航标记覆盖导航标题"}),a(r,null,{default:n(()=>[s("div",C,[s("div",null,"当前 badge 值：'"+g(k(e).text)+"'",1),s("div",y,[a(o,{onClick:l},{default:n(()=>[...t[0]||(t[0]=[c(" 切换 ",-1)])]),_:1}),a(o,{onClick:_},{default:n(()=>[...t[1]||(t[1]=[c(" 清空 ",-1)])]),_:1})])])]),_:1})])}}});typeof i=="function"&&i(F);export{F as default};
