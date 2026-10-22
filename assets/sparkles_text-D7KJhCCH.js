
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e}from"./reactivity.esm-bundler-DQLEWij_.js";import{D as t,b as n,bt as r,k as i,mt as a,o,qt as s,v as c,wt as l}from"./runtime-core.esm-bundler-B5ds1qB8.js";import{T as u}from"./src-XafWzjth.js";import{n as d}from"./vue-i18n.runtime-QoH7TMem.js";import"./examples-DXhZs5lg.js";import{t as f}from"./page-header-DeO2joBq.js";import{t as p}from"./sparkles-text-Cq2PoHwV.js";var m=[{title:`基础`,component:i({__name:`_basic`,setup(e){return(e,t)=>(a(),c(p,{text:`Fantastic-admin`}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaSparklesText from '../index.vue'
<\/script>

<template>
  <FaSparklesText text="Fantastic-admin" />
</template>
`},{title:`数量`,component:i({__name:`_count`,setup(e){return(e,t)=>(a(),c(p,{text:`Fantastic-admin`,"sparkles-count":50}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaSparklesText from '../index.vue'
<\/script>

<template>
  <FaSparklesText text="Fantastic-admin" :sparkles-count="50" />
</template>
`},{title:`颜色`,component:i({__name:`_color`,setup(e){return(e,t)=>(a(),c(p,{text:`Fantastic-admin`,colors:{first:`#FF6B6B`,second:`#4ECDC4`}}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaSparklesText from '../index.vue'
<\/script>

<template>
  <FaSparklesText text="Fantastic-admin" :colors="{ first: '#FF6B6B', second: '#4ECDC4' }" />
</template>
`}],h=i({__name:`sparkles_text`,setup(i){let{t:p}=d();return(i,d)=>{let h=f,g=u;return a(),n(`div`,null,[t(h,{title:e(p)(`route.componentPro.sparklesText`),description:`FaSparklesText`},null,8,[`title`]),(a(!0),n(o,null,r(e(m),e=>(a(),c(g,{key:e.title,code:e.componentRaw,title:e.title},{default:s(()=>[(a(),c(l(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{h as default};