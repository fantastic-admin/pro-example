
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e,C as t,St as n}from"./reactivity.esm-bundler-DQLEWij_.js";import{D as r,_ as i,b as a,bt as o,k as s,mt as c,o as l,qt as u,v as d,wt as f}from"./runtime-core.esm-bundler-B5ds1qB8.js";import{T as p}from"./src-XafWzjth.js";import{n as m}from"./vue-i18n.runtime-QoH7TMem.js";import"./examples-DXhZs5lg.js";import{t as h}from"./slider-BcWt6Cum.js";import{t as g}from"./fixed-bar-CoJAAjLN.js";import{t as _}from"./page-header-DeO2joBq.js";var v=[{title:`固定在页面顶部`,component:s({__name:`_top`,setup(e){let a=t([50]);return(e,t)=>(c(),d(g,{position:`top`},{default:u(()=>[r(h,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e)},null,8,[`modelValue`]),i(`div`,{style:n(`height: ${a.value[0]}px;`)},null,4)]),_:1}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../../slider/index.vue'
import FaFixedBar from '../index.vue'

const height = ref([50])
<\/script>

<template>
  <FaFixedBar position="top">
    <FaSlider v-model="height" />
    <div :style="\`height: \${height[0]}px;\`" />
  </FaFixedBar>
</template>
`},{title:`固定在页面底部`,component:s({__name:`_bottom`,setup(e){let a=t([50]);return(e,t)=>(c(),d(g,{position:`bottom`},{default:u(()=>[i(`div`,{style:n(`height: ${a.value[0]}px;`)},null,4),r(h,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e)},null,8,[`modelValue`])]),_:1}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../../slider/index.vue'
import FaFixedBar from '../index.vue'

const height = ref([50])
<\/script>

<template>
  <FaFixedBar position="bottom">
    <div :style="\`height: \${height[0]}px;\`" />
    <FaSlider v-model="height" />
  </FaFixedBar>
</template>
`}],y=s({__name:`fixed_bar`,setup(t){let{t:n}=m();return(t,s)=>{let m=_,h=p;return c(),a(`div`,null,[r(m,{title:e(n)(`route.component.fixedBar`)},{description:u(()=>[...s[0]||(s[0]=[i(`div`,{class:`space-y-2`},[i(`p`,null,`FaFixedBar`),i(`p`,null,`固定在页面顶部或底部，可用于展示页面信息、操作按钮等`)],-1)])]),_:1},8,[`title`]),(c(!0),a(l,null,o(e(v),e=>(c(),d(h,{key:e.title,code:e.componentRaw,title:e.title},{default:u(()=>[(c(),d(f(e.component)))]),_:2},1032,[`code`,`title`]))),128)),s[1]||(s[1]=i(`div`,{class:`m-4 pt-20 border rounded-lg bg-background flex h-vh justify-center`},` 尝试滚动页面，查看固定效果 `,-1))])}}});export{y as default};