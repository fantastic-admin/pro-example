
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as u,cb as f,e as p,f as m,g as a,a7 as x,i as n,h as s,j as g,k as B,C as k,B as c,a6 as C,U as i}from"./index-DOTJNdHl.js";const v={class:"space-y-2"},b={class:"space-x-2"},y=u({__name:"text",setup(F){const e=f();function _(){e.setText(e.text==="热门"?"促销":"热门")}function l(){e.setText("")}return(N,t)=>{const d=x,o=k,r=C;return m(),p("div",null,[a(d,{title:"文字标记",description:"搭配 Pinia 可实现动态设置。请控制文字展示长度，避免导航标记覆盖导航标题"}),a(r,null,{default:n(()=>[s("div",v,[s("div",null,"当前 badge 值：'"+g(B(e).text)+"'",1),s("div",b,[a(o,{onClick:_},{default:n(()=>t[0]||(t[0]=[c(" 切换 ",-1)])),_:1,__:[0]}),a(o,{onClick:l},{default:n(()=>t[1]||(t[1]=[c(" 清空 ",-1)])),_:1,__:[1]})])])]),_:1})])}}});typeof i=="function"&&i(y);export{y as default};
