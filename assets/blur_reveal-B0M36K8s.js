
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-CNfuk_zw.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-BSMImMZq.js";import{t as u}from"./_demo2-CdAubloL.js";var d=`<script setup lang="ts">
const show = ref(true)

function handleReset() {
  show.value = false
  nextTick(() => {
    show.value = true
  })
}
<\/script>

<template>
  <FaBlurReveal
    v-if="show"
    class="p-8"
  >
    <h2 class="text-6xl tracking-tighter font-bold">
      你好呀 👋
    </h2>
    <div class="text-2xl tracking-tighter mt-4 text-pretty">
      最近怎么样？
    </div>
  </FaBlurReveal>
  <FaButton @click="handleReset">
    重新执行
  </FaButton>
</template>
`,f=`<script setup lang="ts">
const show = ref(true)

function handleReset() {
  show.value = false
  nextTick(() => {
    show.value = true
  })
}
<\/script>

<template>
  <FaBlurReveal
    v-if="show"
    :delay="0.2"
    :duration="0.75"
    blur="10px"
    :y-offset="100"
    class="p-8"
  >
    <h2 class="text-6xl tracking-tighter font-bold">
      你好呀 👋
    </h2>
    <div class="text-2xl tracking-tighter mt-4 text-pretty">
      最近怎么样？
    </div>
  </FaBlurReveal>
  <FaButton @click="handleReset">
    重新执行
  </FaButton>
</template>
`,p=e({__name:`index`,setup(e){let{t:p}=c();return(e,c)=>{let m=o,h=s;return r(),a(`div`,null,[n(m,{title:t(p)(`route.component.blurReveal`),description:`FaBlurReveal`},null,8,[`title`]),n(h,{code:t(d)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(h,{title:`延迟、持续时间、模糊、偏移量`,code:t(f)},{default:i(()=>[n(u)]),_:1},8,[`code`])])}}});export{p as default};