
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as s,as as o,c as n,o as m,t as d,e as r}from"./index-H6QnEWHf.js";const l=s({name:"FaTimeAgo",__name:"index",props:{date:{default:()=>new Date},max:{},messages:{default:()=>({justNow:"刚刚",past:e=>e.match(/\d/)?"".concat(e,"前"):e,future:e=>e.match(/\d/)?"".concat(e,"后"):e,month:(e,a)=>e===1?a?"上个月":"下个月":"".concat(e," 月"),year:(e,a)=>e===1?a?"去年":"明年":"".concat(e," 年"),day:(e,a)=>e===1?a?"昨天":"明天":"".concat(e," 天"),week:(e,a)=>e===1?a?"上周":"下周":"".concat(e," 周"),hour:e=>"".concat(e," 小时"),minute:e=>"".concat(e," 分钟"),second:e=>"".concat(e," 秒"),invalid:""})},showSecond:{type:Boolean},updateInterval:{default:3e4}},setup(e){const a=e,t=o(a.date,{messages:a.messages,max:a.max,showSecond:a.showSecond,updateInterval:a.updateInterval});return(c,u)=>(m(),n("span",null,d(r(t)),1))}});export{l as _};
