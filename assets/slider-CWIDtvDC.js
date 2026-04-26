
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-C_d7Trg8.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-DuwGQekt.js";import{t as u}from"./_demo2-B2Oo46XX.js";var d=`<script setup lang="ts">
const value = ref<number[]>([0])
<\/script>

<template>
  <FaSlider v-model="value" />
</template>
`,f=`<script setup lang="ts">
const value = ref<number[]>([0])
<\/script>

<template>
  <FaSlider v-model="value" orientation="vertical" class="data-[orientation=vertical]:h-100" />
</template>
`,p=e({__name:`index`,setup(e){let{t:p}=c();return(e,c)=>{let m=o,h=s;return r(),a(`div`,null,[n(m,{title:t(p)(`route.component.slider`),description:`FaSlider`},null,8,[`title`]),n(h,{code:t(d)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(h,{title:`垂直滑块`,code:t(f)},{default:i(()=>[n(u)]),_:1},8,[`code`])])}}});export{p as default};