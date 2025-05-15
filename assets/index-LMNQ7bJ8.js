
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as r}from"./index.vue_vue_type_script_setup_true_lang-BhnjE5ZP.js";import{d as i,f as c,g as l,h as e,a8 as m,j as n,l as s,V as o}from"./index-KSDvm3cB.js";import{_ as d}from"./_demo1.vue_vue_type_script_setup_true_lang-ByGetD_k.js";import p from"./_demo2-DXFmmgHk.js";import{_ as f}from"./_demo3.vue_vue_type_script_setup_true_lang-DcbJJmbZ.js";import"./index-Cr9jXCSR.js";import"./index.vue_vue_type_script_setup_true_lang-GJaJ7cXt.js";const u=`<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings'

const settingsStore = useSettingsStore()
<\/script>

<template>
  <div class="relative h-50 w-full flex flex-col items-center justify-center overflow-hidden bg-background p-2">
    <FaParticlesBg
      class="absolute inset-0"
      :color="settingsStore.currentColorScheme === 'dark' ? '#FFF' : '#000'"
    />
  </div>
</template>
`,g=`<template>
  <div class="relative h-50 w-full flex flex-col items-center justify-center overflow-hidden bg-background p-2">
    <FaParticlesBg
      class="absolute inset-0"
      color="#2563EB"
      :quantity="1000"
      :ease="100"
      :staticity="5"
    />
  </div>
</template>
`,_=`<script setup lang="ts">
import useSettingsStore from '@/store/modules/settings'

const settingsStore = useSettingsStore()
<\/script>

<template>
  <div class="relative h-50 w-full flex flex-col items-center justify-center overflow-hidden bg-background p-2">
    <span class="pointer-events-none whitespace-pre-wrap from-black to-gray-300/80 bg-gradient-to-b bg-clip-text text-center text-8xl text-transparent font-semibold leading-none dark:from-white dark:to-slate-900/10">
      Fantastic-admin 真好用 !
    </span>
    <FaParticlesBg
      class="absolute inset-0"
      :color="settingsStore.currentColorScheme === 'dark' ? '#FFF' : '#000'"
      :quantity="100"
      :ease="100"
      :staticity="10"
    />
  </div>
</template>
`,b=i({__name:"index",setup(v){return(x,w)=>{const a=m,t=r;return l(),c("div",null,[e(a,{title:"粒子背景",description:"FaParticlesBg"}),e(t,{code:s(u)},{default:n(()=>[e(d)]),_:1},8,["code"]),e(t,{title:"颜色、数量、速度",code:s(g)},{default:n(()=>[e(p)]),_:1},8,["code"]),e(t,{title:"搭配文案",code:s(_)},{default:n(()=>[e(f)]),_:1},8,["code"])])}}});typeof o=="function"&&o(b);export{b as default};
