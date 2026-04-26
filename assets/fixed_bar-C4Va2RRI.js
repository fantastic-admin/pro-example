
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a,x as o}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as s,P as c,bt as l}from"./components-C_d7Trg8.js";import{n as u}from"./vue-i18n.runtime-BkMmoySD.js";import{t as d}from"./_demo1-DIV3MKl_.js";import{t as f}from"./_demo2-IYeE4NDi.js";var p=`<script setup lang="ts">
const height = ref([50])
<\/script>

<template>
  <FaFixedBar position="top">
    <FaSlider v-model="height" />
    <div :style="\`height: \${height[0]}px;\`" />
  </FaFixedBar>
</template>
`,m=`<script setup lang="ts">
const height = ref([50])
<\/script>

<template>
  <FaFixedBar position="bottom">
    <div :style="\`height: \${height[0]}px;\`" />
    <FaSlider v-model="height" />
  </FaFixedBar>
</template>
`,h=e({__name:`index`,setup(e){let{t:h}=u();return(e,u)=>{let g=s,_=l,v=c;return r(),a(`div`,null,[n(g,{title:t(h)(`route.component.fixedBar`)},{description:i(()=>[...u[0]||(u[0]=[o(`div`,{class:`space-y-2`},[o(`p`,null,`FaFixedBar`),o(`p`,null,`固定在页面顶部或底部，可用于展示页面信息、操作按钮等`)],-1)])]),_:1},8,[`title`]),n(_,{title:`固定在页面顶部`,code:t(p)},{default:i(()=>[n(d)]),_:1},8,[`code`]),n(_,{title:`固定在页面底部`,code:t(m)},{default:i(()=>[n(f)]),_:1},8,[`code`]),n(v,{class:`h-vh`})])}}});export{h as default};