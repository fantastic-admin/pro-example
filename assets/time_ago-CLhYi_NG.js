
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-CNfuk_zw.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-DrIk7Jt22.js";import{t as u}from"./_demo2-DILOL-nW.js";import{t as d}from"./_demo3-_XrhPOxm.js";var f=`<template>
  <FaTimeAgo :date="new Date()" />
</template>
`,p=`<template>
  <p>距离 2020/10/17 ：</p>
  <FaTimeAgo :date="new Date('2020/10/17')" />
</template>
`,m=`<template>
  <p>显示秒，且更新间隔为1秒</p>
  <FaTimeAgo :date="new Date()" :update-interval="1000" :show-second="true" />
</template>
`,h=e({__name:`index`,setup(e){let{t:h}=c();return(e,c)=>{let g=o,_=s;return r(),a(`div`,null,[n(g,{title:t(h)(`route.component.timeAgo`),description:`FaTimeAgo`},null,8,[`title`]),n(_,{code:t(f)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(_,{code:t(p)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(_,{code:t(m)},{default:i(()=>[n(d)]),_:1},8,[`code`])])}}});export{h as default};