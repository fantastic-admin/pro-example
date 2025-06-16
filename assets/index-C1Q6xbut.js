
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as l}from"./index.vue_vue_type_script_setup_true_lang-DXpNJ-I9.js";import{d as c,f as r,g as i,h as n,a8 as u,j as e,l as a,V as s}from"./index-Cm5PYwOf.js";import{_ as f}from"./_demo1.vue_vue_type_script_setup_true_lang-xJG-G_SE.js";import{_ as p}from"./_demo2.vue_vue_type_script_setup_true_lang-BFgqoXYZ.js";import"./index-DO3wYGke.js";const d=`<script setup lang="ts">
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
    <h2 class="text-6xl font-bold tracking-tighter">
      你好呀 👋
    </h2>
    <div class="mt-4 text-pretty text-2xl tracking-tighter">
      最近怎么样？
    </div>
  </FaBlurReveal>
  <FaButton @click="handleReset">
    重新执行
  </FaButton>
</template>
`,m=`<script setup lang="ts">
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
    <h2 class="text-6xl font-bold tracking-tighter">
      你好呀 👋
    </h2>
    <div class="mt-4 text-pretty text-2xl tracking-tighter">
      最近怎么样？
    </div>
  </FaBlurReveal>
  <FaButton @click="handleReset">
    重新执行
  </FaButton>
</template>
`,_=c({__name:"index",setup(h){return(v,x)=>{const o=u,t=l;return i(),r("div",null,[n(o,{title:"模糊显示",description:"FaBlurReveal"}),n(t,{code:a(d)},{default:e(()=>[n(f)]),_:1},8,["code"]),n(t,{title:"延迟、持续时间、模糊、偏移量",code:a(m)},{default:e(()=>[n(p)]),_:1},8,["code"])])}}});typeof s=="function"&&s(_);export{_ as default};
