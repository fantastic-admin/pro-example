
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as i}from"./index.vue_vue_type_script_setup_true_lang-DltvfDFZ.js";import{d as r,f as c,g as l,h as t,a8 as m,j as n,l as s,V as a}from"./index-8eOOZCt1.js";import{_ as d}from"./_demo1.vue_vue_type_script_setup_true_lang-C7XOzhxe.js";import{_ as u}from"./_demo2.vue_vue_type_script_setup_true_lang-B31DljW_.js";import{_ as f}from"./_demo3.vue_vue_type_script_setup_true_lang-B_al_5Hg.js";import{_ as p}from"./_demo4.vue_vue_type_script_setup_true_lang-DtjcJuvx.js";import"./index-P1b-IaR7.js";const g=`<script setup lang="ts">
const carouselList = [
  'https://fantastic-admin.hurui.me/logo.svg',
  'https://fantastic-admin.hurui.me/logo.svg',
  'https://fantastic-admin.hurui.me/logo.svg',
  'https://fantastic-admin.hurui.me/logo.svg',
]
<\/script>

<template>
  <div class="flex-center gap-30 p-12">
    <FaCarousel class="size-80">
      <img v-for="(item, index) in carouselList" :key="index" :src="item" class="size-full border rounded-xl object-cover" :style="{ transform: \`rotate(\${index * 90}deg)\` }">
    </FaCarousel>
    <!-- 垂直时需注意，高度要增加1rem -->
    <FaCarousel orientation="vertical" class="size-80" content-class="w-80 h-84">
      <img v-for="(item, index) in carouselList" :key="index" :src="item" class="size-full border rounded-xl object-cover" :style="{ transform: \`rotate(\${index * 90}deg)\` }">
    </FaCarousel>
  </div>
</template>
`,v=`<script setup lang="ts">
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
      <img v-for="(item, index) in carouselList" :key="index" :src="item" class="size-full border rounded-xl object-cover" :style="{ transform: \`rotate(\${index * 90}deg)\` }">
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
      <img v-for="(item, index) in carouselList" :key="index" :src="item" class="size-full border rounded-xl object-cover" :style="{ transform: \`rotate(\${index * 90}deg)\` }">
    </FaCarousel>
  </div>
</template>
`,_=`<script setup lang="ts">
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
      <img v-for="(item, index) in carouselList" :key="index" :src="item" class="size-full border rounded-xl object-cover" :style="{ transform: \`rotate(\${index * 90}deg)\` }">
    </FaCarousel>
  </div>
</template>
`,x=r({__name:"index",setup(C){return(y,F)=>{const o=m,e=i;return l(),c("div",null,[t(o,{title:"轮播图",description:"FaCarousel"}),t(e,{code:s(g)},{default:n(()=>[t(d)]),_:1},8,["code"]),t(e,{title:"自动播放",code:s(v)},{default:n(()=>[t(u)]),_:1},8,["code"]),t(e,{title:"自动滚动",code:s(h)},{default:n(()=>[t(f)]),_:1},8,["code"]),t(e,{title:"淡入淡出",code:s(_)},{default:n(()=>[t(p)]),_:1},8,["code"])])}}});typeof a=="function"&&a(x);export{x as default};
