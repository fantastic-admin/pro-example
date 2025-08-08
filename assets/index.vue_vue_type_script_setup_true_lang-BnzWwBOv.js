
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as s,c2 as o,e as n,f as m,j as d,k as r}from"./index-DOTJNdHl.js";const l=s({name:"FaTimeAgo",__name:"index",props:{date:{default:()=>new Date},max:{},messages:{default:()=>({justNow:"刚刚",past:e=>e.match(/\d/)?`${e}前`:e,future:e=>e.match(/\d/)?`${e}后`:e,month:(e,a)=>e===1?a?"上个月":"下个月":`${e} 月`,year:(e,a)=>e===1?a?"去年":"明年":`${e} 年`,day:(e,a)=>e===1?a?"昨天":"明天":`${e} 天`,week:(e,a)=>e===1?a?"上周":"下周":`${e} 周`,hour:e=>`${e} 小时`,minute:e=>`${e} 分钟`,second:e=>`${e} 秒`,invalid:""})},showSecond:{type:Boolean},updateInterval:{default:3e4}},setup(e){const a=e,t=o(a.date,{messages:a.messages,max:a.max,showSecond:a.showSecond,updateInterval:a.updateInterval});return(c,u)=>(m(),n("span",null,d(r(t)),1))}});export{l as _};
