
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as m}from"./index.vue_vue_type_script_setup_true_lang-DAmkWWdh.js";import{d as u,cb as _,f as l,g as r,k as p,l as f,W as g,h as a,j as c,X as d}from"./index-C1X-Si6V.js";import{_ as h}from"./index.vue_vue_type_script_setup_true_lang-B6TBok1e.js";const $=u({__name:"index",props:{date:{default:()=>new Date},max:{},messages:{default:()=>({justNow:"刚刚",past:e=>e.match(/\d/)?`${e}前`:e,future:e=>e.match(/\d/)?`${e}后`:e,month:(e,t)=>e===1?t?"上个月":"下个月":`${e} 月`,year:(e,t)=>e===1?t?"去年":"明年":`${e} 年`,day:(e,t)=>e===1?t?"昨天":"明天":`${e} 天`,week:(e,t)=>e===1?t?"上周":"下周":`${e} 周`,hour:e=>`${e} 小时`,minute:e=>`${e} 分钟`,second:e=>`${e} 秒`,invalid:""})},showSecond:{type:Boolean},updateInterval:{default:3e4}},setup(e){const t=e,s=_(t.date,{messages:t.messages,max:t.max,showSecond:t.showSecond,updateInterval:t.updateInterval});return(o,n)=>(r(),l("span",null,p(f(s)),1))}}),i={};function w(e,t){const s=h,o=$,n=m;return r(),l("div",null,[a(s,{title:"可阅读时间",description:"FaTimeAgo"}),a(n,null,{default:c(()=>[a(o,{date:new Date},null,8,["date"])]),_:1}),a(n,{title:"距离 2020/10/17"},{default:c(()=>[a(o,{date:new Date("2020/10/17")},null,8,["date"])]),_:1}),a(n,{title:"显示秒，且更新间隔为1秒"},{default:c(()=>[a(o,{date:new Date,"update-interval":1e3,"show-second":!0},null,8,["date"])]),_:1})])}typeof d=="function"&&d(i);const y=g(i,[["render",w]]);export{y as default};
