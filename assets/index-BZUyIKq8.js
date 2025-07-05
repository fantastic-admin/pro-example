
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as s}from"./index.vue_vue_type_script_setup_true_lang-C3pjQ_Y6.js";import{d as i,e as r,f as c,g as n,a7 as m,i as e,k as a,U as o}from"./index-BLSV4yIg.js";import{_ as u}from"./_demo1.vue_vue_type_script_setup_true_lang-DHjaEq6b.js";import{_ as d}from"./_demo2.vue_vue_type_script_setup_true_lang-DE-Y0LvM.js";import{_ as p}from"./_demo3.vue_vue_type_script_setup_true_lang-JbbUEwzI.js";import{_ as f}from"./_demo4.vue_vue_type_script_setup_true_lang-CXCtWJNh.js";import{_ as v}from"./_demo5.vue_vue_type_script_setup_true_lang-9h8xPumK.js";import{_}from"./_demo6.vue_vue_type_script_setup_true_lang-CKctcgyw.js";import"./index-DU7ESt7E.js";import"./index.vue_vue_type_script_setup_true_lang-DEglhcT3.js";import"./index.vue_vue_type_script_setup_true_lang-IEdq2E0o.js";const g=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <FaAnimatedCountTo :value will-change class="text-4xl font-bold" />
</template>
`,h=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <FaAnimatedCountTo :value prefix="￥" suffix="元" will-change class="text-4xl font-bold" />
</template>
`,x=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <div class="flex flex-col gap-2">
    <FaAnimatedCountTo :value :trend="1" will-change class="text-4xl font-bold" />
    <FaAnimatedCountTo :value :trend="0" will-change class="text-4xl font-bold" />
    <FaAnimatedCountTo :value :trend="-1" will-change class="text-4xl font-bold" />
  </div>
</template>
`,y=`<script setup lang="ts">
const index = ref(0)
const value = ref(0)

const LOCALES = ['en-US', 'en-US', 'fr-FR', 'en-US', 'en-US', 'zh-CN', 'en-US', 'en-US', 'fr-FR']
const FORMATS = [
  {},
  {
    minimumFractionDigits: 2,
  },
  {
    style: 'currency',
    currency: 'USD',
    currencySign: 'accounting',
    signDisplay: 'always',
  },
  {
    style: 'percent',
    signDisplay: 'always',
  },
  {
    style: 'unit',
    unit: 'meter',
    notation: 'compact',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: 'never',
  },
  {
    style: 'currency',
    currency: 'CNY',
  },
  {
    signDisplay: 'always',
  },
]

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
  index.value += 1
}, 2000)
<\/script>

<template>
  <FaAnimatedCountTo
    :value
    :format="FORMATS[index % FORMATS.length] as any"
    :locales="LOCALES[index % LOCALES.length]"
    will-change
    class="text-4xl font-bold"
  />
</template>
`,C=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <FaAnimatedCountTo :value :transform-timing="{ duration: 750, easing: 'ease-out' }" :spin-timing="{ duration: 750, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' }" :opacity-timing="{ duration: 350, easing: 'ease-out' }" will-change class="text-4xl font-bold" />
</template>
`,F=`<script setup lang="ts">
const value1 = ref(0)
const value2 = ref(0)

setInterval(() => {
  value1.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
  value2.value += Math.random() * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <div class="flex-center-start gap-2">
    <FaAnimatedCountToGroup>
      <FaAnimatedCountTo :value="value1" locales="zh-CN" :format="{ style: 'currency', currency: 'CNY' }" will-change class="text-4xl font-bold" />
      <FaAnimatedCountTo :value="value2" locales="zh-CN" :format="{ style: 'percent', maximumFractionDigits: 2, signDisplay: 'always' }" will-change class="text-2xl text-green-500 font-bold" :class="{ 'text-red-500': value2 < 0 }" />
    </FaAnimatedCountToGroup>
  </div>
</template>
`,M=i({__name:"index",setup(w){return(A,D)=>{const l=m,t=s;return c(),r("div",null,[n(l,{title:"动画计数",description:"FaAnimatedCountTo"}),n(t,{code:a(g)},{default:e(()=>[n(u)]),_:1},8,["code"]),n(t,{title:"前缀/后缀",code:a(h)},{default:e(()=>[n(d)]),_:1},8,["code"]),n(t,{title:"方向",code:a(x)},{default:e(()=>[n(p)]),_:1},8,["code"]),n(t,{title:"格式化",code:a(y)},{default:e(()=>[n(f)]),_:1},8,["code"]),n(t,{title:"时机",code:a(C)},{default:e(()=>[n(v)]),_:1},8,["code"]),n(t,{title:"组",code:a(F)},{default:e(()=>[n(_)]),_:1},8,["code"])])}}});typeof o=="function"&&o(M);export{M as default};
