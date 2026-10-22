
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e,wt as t}from"./reactivity.esm-bundler-DQLEWij_.js";import{D as n,_ as r,b as i,bt as a,k as o,mt as s,o as c,qt as l,v as u,wt as d}from"./runtime-core.esm-bundler-B5ds1qB8.js";import{Mn as f,T as p,wn as m}from"./src-XafWzjth.js";import{n as h}from"./vue-i18n.runtime-QoH7TMem.js";import"./examples-DXhZs5lg.js";import{t as g}from"./page-header-DeO2joBq.js";var _=o({name:`BuiltInTimeAgo`,__name:`index`,props:{date:{default:()=>new Date},max:{},messages:{default:()=>({justNow:`刚刚`,past:e=>/\d/.test(e)?`${e}前`:e,future:e=>/\d/.test(e)?`${e}后`:e,month:(e,t)=>e===1?t?`上个月`:`下个月`:`${e} 月`,year:(e,t)=>e===1?t?`去年`:`明年`:`${e} 年`,day:(e,t)=>e===1?t?`昨天`:`明天`:`${e} 天`,week:(e,t)=>e===1?t?`上周`:`下周`:`${e} 周`,hour:e=>`${e} 小时`,minute:e=>`${e} 分钟`,second:e=>`${e} 秒`,invalid:``})},showSecond:{type:Boolean},updateInterval:{default:3e4}},setup(n){let r=n,a=m(r.date,{messages:r.messages,max:r.max,showSecond:r.showSecond,scheduler:e=>f(e,r.updateInterval)});return(n,r)=>(s(),i(`span`,null,t(e(a)),1))}}),v=[{title:`基础`,component:o({__name:`_basic`,setup(e){return(e,t)=>(s(),u(_,{date:new Date},null,8,[`date`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTimeAgo from '../index.vue'
<\/script>

<template>
  <FaTimeAgo :date="new Date()" />
</template>
`},{title:`固定日期`,component:o({__name:`_fixed-date`,setup(e){return(e,t)=>(s(),i(c,null,[t[0]||(t[0]=r(`p`,null,`距离 2020/10/17 ：`,-1)),n(_,{date:new Date(`2020/10/17`)},null,8,[`date`])],64))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTimeAgo from '../index.vue'
<\/script>

<template>
  <p>距离 2020/10/17 ：</p>
  <FaTimeAgo :date="new Date('2020/10/17')" />
</template>
`},{title:`秒级更新`,component:o({__name:`_seconds`,setup(e){return(e,t)=>(s(),i(c,null,[t[0]||(t[0]=r(`p`,null,`显示秒，且更新间隔为1秒`,-1)),n(_,{date:new Date,"update-interval":1e3,"show-second":!0},null,8,[`date`])],64))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTimeAgo from '../index.vue'
<\/script>

<template>
  <p>显示秒，且更新间隔为1秒</p>
  <FaTimeAgo :date="new Date()" :update-interval="1000" :show-second="true" />
</template>
`}],y=o({__name:`time_ago`,setup(t){let{t:r}=h();return(t,o)=>{let f=g,m=p;return s(),i(`div`,null,[n(f,{title:e(r)(`route.componentPro.timeAgo`),description:`FaTimeAgo`},null,8,[`title`]),(s(!0),i(c,null,a(e(v),e=>(s(),u(m,{key:e.title,code:e.componentRaw,title:e.title},{default:l(()=>[(s(),u(d(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{y as default};