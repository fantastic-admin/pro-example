
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as s}from"./index.vue_vue_type_script_setup_true_lang-QJtPTUd7.js";import{d as r,e as o,f as c,g as a,a7 as l,i,k as d,U as e}from"./index-DODNO_Fi.js";import{_ as m}from"./_demo1.vue_vue_type_script_setup_true_lang--zzexSOc.js";import"./index-yfpwFnwn.js";import"./index.vue_vue_type_script_setup_true_lang-BrdRv7u0.js";import"./useFormControl-BvyTtihR.js";import"./VisuallyHiddenInput-BV--6EZN.js";const p=`<script setup lang="ts">
const scrollbar = ref(true)
const mask = ref(false)
<\/script>

<template>
  <div class="flex-col-start gap-4">
    <div class="flex-col-start gap-4">
      <div class="flex-center-start gap-4">
        <div class="text-sm">
          显示滚动条
        </div>
        <FaSwitch v-model="scrollbar" />
      </div>
      <div class="flex-center-start gap-4">
        <div class="text-sm">
          显示遮罩
        </div>
        <FaSwitch v-model="mask" />
      </div>
    </div>
    <FaScrollArea :scrollbar :mask class="h-72 w-48 border rounded-md">
      <div v-for="tag in 20" :key="tag" class="p-4 text-sm">
        {{ tag }}
      </div>
    </FaScrollArea>
    <FaScrollArea horizontal :scrollbar :mask class="w-96 border rounded-md">
      <div class="flex-center-start">
        <div v-for="tag in 20" :key="tag" class="h-16 w-16 flex-center text-sm">
          {{ tag }}
        </div>
      </div>
    </FaScrollArea>
  </div>
</template>
`,f=r({__name:"index",setup(v){return(_,x)=>{const n=l,t=s;return c(),o("div",null,[a(n,{title:"滚动区域",description:"FaScrollArea"}),a(t,{code:d(p)},{default:i(()=>[a(m)]),_:1},8,["code"])])}}});typeof e=="function"&&e(f);export{f as default};
