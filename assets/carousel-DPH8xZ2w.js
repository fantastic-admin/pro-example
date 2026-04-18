
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-CNfuk_zw.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-zSlp5Efa.js";import{t as u}from"./_demo2-I0rcAPmt.js";import{t as d}from"./_demo3-kIRbj9n2.js";import{t as f}from"./_demo4-C8bOrBbf.js";var p=`<script setup lang="ts">
const carouselList = [
  'https://fantastic-admin.hurui.me/logo.svg',
  'https://fantastic-admin.hurui.me/logo.svg',
  'https://fantastic-admin.hurui.me/logo.svg',
  'https://fantastic-admin.hurui.me/logo.svg',
]
<\/script>

<template>
  <div class="p-12 flex-center gap-30">
    <FaCarousel class="size-80">
      <img v-for="(item, index) in carouselList" :key="index" :src="item" class="border rounded-xl size-full object-cover" :style="{ transform: \`rotate(\${index * 90}deg)\` }">
    </FaCarousel>
    <!-- 垂直时需注意，高度要增加1rem -->
    <FaCarousel orientation="vertical" class="size-80" content-class="w-80 h-84">
      <img v-for="(item, index) in carouselList" :key="index" :src="item" class="border rounded-xl size-full object-cover" :style="{ transform: \`rotate(\${index * 90}deg)\` }">
    </FaCarousel>
  </div>
</template>
`,m=`<script setup lang="ts">
const carouselList = [
  'https://fantastic-admin.hurui.me/logo.svg',
  'https://fantastic-admin.hurui.me/logo.svg',
  'https://fantastic-admin.hurui.me/logo.svg',
  'https://fantastic-admin.hurui.me/logo.svg',
]
<\/script>

<template>
  <div class="mx-auto max-w-80">
    <FaCarousel
      :autoplay="{
        delay: 2000,
      }"
    >
      <img v-for="(item, index) in carouselList" :key="index" :src="item" class="border rounded-xl size-full object-cover" :style="{ transform: \`rotate(\${index * 90}deg)\` }">
    </FaCarousel>
  </div>
</template>
`,h=`<script setup lang="ts">
const carouselList = [
  'https://fantastic-admin.hurui.me/logo.svg',
  'https://fantastic-admin.hurui.me/logo.svg',
  'https://fantastic-admin.hurui.me/logo.svg',
  'https://fantastic-admin.hurui.me/logo.svg',
]
<\/script>

<template>
  <div class="mx-auto max-w-80">
    <FaCarousel
      :auto-scroll="{
        speed: 2,
      }"
    >
      <img v-for="(item, index) in carouselList" :key="index" :src="item" class="border rounded-xl size-full object-cover" :style="{ transform: \`rotate(\${index * 90}deg)\` }">
    </FaCarousel>
  </div>
</template>
`,g=`<script setup lang="ts">
const carouselList = [
  'https://fantastic-admin.hurui.me/logo.svg',
  'https://fantastic-admin.hurui.me/logo.svg',
  'https://fantastic-admin.hurui.me/logo.svg',
  'https://fantastic-admin.hurui.me/logo.svg',
]
<\/script>

<template>
  <div class="mx-auto max-w-80">
    <FaCarousel fade>
      <img v-for="(item, index) in carouselList" :key="index" :src="item" class="border rounded-xl size-full object-cover" :style="{ transform: \`rotate(\${index * 90}deg)\` }">
    </FaCarousel>
  </div>
</template>
`,_=e({__name:`index`,setup(e){let{t:_}=c();return(e,c)=>{let v=o,y=s;return r(),a(`div`,null,[n(v,{title:t(_)(`route.component.carousel`),description:`FaCarousel`},null,8,[`title`]),n(y,{code:t(p)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(y,{title:`自动播放`,code:t(m)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(y,{title:`自动滚动`,code:t(h)},{default:i(()=>[n(d)]),_:1},8,[`code`]),n(y,{title:`淡入淡出`,code:t(g)},{default:i(()=>[n(f)]),_:1},8,[`code`])])}}});export{_ as default};