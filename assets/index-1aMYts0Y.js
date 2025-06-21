
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as s}from"./index.vue_vue_type_script_setup_true_lang-iFov3akP.js";import{d as r,f as o,g as c,h as a,a8 as l,j as i,l as d,V as e}from"./index-Dv6GDtcN.js";import{_ as m}from"./_demo1.vue_vue_type_script_setup_true_lang-CaK5M0H7.js";import"./index-DNIjrW4p.js";import"./index.vue_vue_type_script_setup_true_lang-O6aY7oiv.js";import"./useFormControl-Dh9sB5R5.js";import"./VisuallyHiddenInput-DeN-A0IO.js";const p=`<script setup lang="ts">
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
