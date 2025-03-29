
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as i,bS as m,f as l,g as u,k as _,l as p,U as f,h as a,a9 as g,j as c,a8 as h,V as d}from"./index-Dpu-vvoM.js";const $=i({__name:"index",props:{date:{default:()=>new Date},max:{},messages:{default:()=>({justNow:"刚刚",past:e=>e.match(/\d/)?`${e}前`:e,future:e=>e.match(/\d/)?`${e}后`:e,month:(e,t)=>e===1?t?"上个月":"下个月":`${e} 月`,year:(e,t)=>e===1?t?"去年":"明年":`${e} 年`,day:(e,t)=>e===1?t?"昨天":"明天":`${e} 天`,week:(e,t)=>e===1?t?"上周":"下周":`${e} 周`,hour:e=>`${e} 小时`,minute:e=>`${e} 分钟`,second:e=>`${e} 秒`,invalid:""})},showSecond:{type:Boolean},updateInterval:{default:3e4}},setup(e){const t=e,s=m(t.date,{messages:t.messages,max:t.max,showSecond:t.showSecond,updateInterval:t.updateInterval});return(n,o)=>(u(),l("span",null,_(p(s)),1))}}),r={};function w(e,t){const s=g,n=$,o=h;return u(),l("div",null,[a(s,{title:"可阅读时间",description:"FaTimeAgo"}),a(o,null,{default:c(()=>[a(n,{date:new Date},null,8,["date"])]),_:1}),a(o,{title:"距离 2020/10/17"},{default:c(()=>[a(n,{date:new Date("2020/10/17")},null,8,["date"])]),_:1}),a(o,{title:"显示秒，且更新间隔为1秒"},{default:c(()=>[a(n,{date:new Date,"update-interval":1e3,"show-second":!0},null,8,["date"])]),_:1})])}typeof d=="function"&&d(r);const v=f(r,[["render",w]]);export{v as default};
