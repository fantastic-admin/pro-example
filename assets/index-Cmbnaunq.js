
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as a}from"./index.vue_vue_type_script_setup_true_lang-DXpNJ-I9.js";import{d as o,f as i,g as s,h as e,a8 as p,j as m,l as r,V as l}from"./index-Cm5PYwOf.js";import{_ as c}from"./_demo1.vue_vue_type_script_setup_true_lang-CIYMFPlG.js";import"./index-DO3wYGke.js";import"./index.vue_vue_type_script_setup_true_lang-Cv1bZxwe.js";import"./useFormControl-C3gpjDh0.js";import"./VisuallyHiddenInput-1jHff4zZ.js";import"./index.vue_vue_type_script_setup_true_lang-CogHKBFT.js";import"./check-DbA44psn.js";import"./nullish-CHIgUVhi.js";const b=`<script setup lang="ts">
const variant = ref<'grid' | 'dot' | 'big-dot'>('grid')
const size = ref<'xs' | 'sm' | 'md' | 'lg'>('md')
const mask = ref<'ellipse' | 'ellipse-top' | 'ellipse-bottom' | 'ellipse-left' | 'ellipse-right' | 'ellipse-top-left' | 'ellipse-top-right' | 'ellipse-bottom-left' | 'ellipse-bottom-right'>('ellipse')
const animate = ref(true)
const direction = ref<'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>('top')
<\/script>

<template>
  <FaPageMain class="m-0" main-class="flex gap-4">
    <div class="flex items-center gap-2">
      <span>图案</span>
      <FaSelect
        v-model="variant" :options="[
          { label: 'grid', value: 'grid' },
          { label: 'dot', value: 'dot' },
          { label: 'big-dot', value: 'big-dot' },
        ]"
      />
    </div>
    <div class="flex items-center gap-2">
      <span>尺寸</span>
      <FaSelect
        v-model="size" :options="[
          { label: 'xs', value: 'xs' },
          { label: 'sm', value: 'sm' },
          { label: 'md', value: 'md' },
          { label: 'lg', value: 'lg' },
        ]"
      />
    </div>
    <div class="flex items-center gap-2">
      <span>动画</span>
      <FaSwitch v-model="animate" />
    </div>
    <div class="flex items-center gap-2">
      <span>方向</span>
      <FaSelect
        v-model="direction" :options="[
          { label: 'top-left', value: 'top-left' },
          { label: 'top-right', value: 'top-right' },
          { label: 'bottom-left', value: 'bottom-left' },
          { label: 'bottom-right', value: 'bottom-right' },
          { label: 'top', value: 'top' },
          { label: 'bottom', value: 'bottom' },
          { label: 'left', value: 'left' },
          { label: 'right', value: 'right' },
        ]"
      />
    </div>
    <div class="flex items-center gap-2">
      <span>遮罩</span>
      <FaSelect
        v-model="mask" :options="[
          { label: 'ellipse', value: 'ellipse' },
          { label: 'ellipse-top', value: 'ellipse-top' },
          { label: 'ellipse-bottom', value: 'ellipse-bottom' },
          { label: 'ellipse-left', value: 'ellipse-left' },
          { label: 'ellipse-right', value: 'ellipse-right' },
          { label: 'ellipse-top-left', value: 'ellipse-top-left' },
          { label: 'ellipse-top-right', value: 'ellipse-top-right' },
          { label: 'ellipse-bottom-left', value: 'ellipse-bottom-left' },
          { label: 'ellipse-bottom-right', value: 'ellipse-bottom-right' },
        ]"
      />
    </div>
  </FaPageMain>
  <FaPatternBg :variant :size :animate :direction :mask class="h-100" />
</template>
`,d=o({__name:"index",setup(f){return(v,g)=>{const t=p,n=a;return s(),i("div",null,[e(t,{title:"图案背景",description:"FaPatternBg"}),e(n,{code:r(b)},{default:m(()=>[e(c)]),_:1},8,["code"])])}}});typeof l=="function"&&l(d);export{d as default};
