
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-C_d7Trg8.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-BDeyPrS5.js";import{t as u}from"./_demo2-BcKxvlkZ.js";import{t as d}from"./_demo3-CsniGD1x.js";import{t as f}from"./_demo4-BpkfXw-b.js";import{t as p}from"./_demo5-Ow1dhMxZ.js";import{t as m}from"./_demo6-C_ftFqPN.js";var h=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <FaAnimatedCountTo :value will-change class="text-4xl font-bold" />
</template>
`,g=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <FaAnimatedCountTo :value prefix="￥" suffix="元" will-change class="text-4xl font-bold" />
</template>
`,_=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <div class="flex flex-col gap-2 items-start">
    <FaAnimatedCountTo :value :trend="1" will-change class="text-4xl font-bold" />
    <FaAnimatedCountTo :value :trend="0" will-change class="text-4xl font-bold" />
    <FaAnimatedCountTo :value :trend="-1" will-change class="text-4xl font-bold" />
  </div>
</template>
`,v=`<script setup lang="ts">
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
`,y=`<script setup lang="ts">
const value = ref(0)

setInterval(() => {
  value.value += Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1)
}, 2000)
<\/script>

<template>
  <FaAnimatedCountTo :value :transform-timing="{ duration: 750, easing: 'ease-out' }" :spin-timing="{ duration: 750, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' }" :opacity-timing="{ duration: 350, easing: 'ease-out' }" will-change class="text-4xl font-bold" />
</template>
`,b=`<script setup lang="ts">
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
`,x=e({__name:`index`,setup(e){let{t:x}=c();return(e,c)=>{let S=o,C=s;return r(),a(`div`,null,[n(S,{title:t(x)(`route.component.animatedCountTo`),description:`FaAnimatedCountTo`},null,8,[`title`]),n(C,{code:t(h)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(C,{title:`前缀/后缀`,code:t(g)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(C,{title:`方向`,code:t(_)},{default:i(()=>[n(d)]),_:1},8,[`code`]),n(C,{title:`格式化`,code:t(v)},{default:i(()=>[n(f)]),_:1},8,[`code`]),n(C,{title:`时机`,code:t(y)},{default:i(()=>[n(p)]),_:1},8,[`code`]),n(C,{title:`组`,code:t(b)},{default:i(()=>[n(m)]),_:1},8,[`code`])])}}});export{x as default};