
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as s}from"./index.vue_vue_type_script_setup_true_lang-CnwQlPJc.js";import{d as l,f as o,g as c,h as e,a8 as i,j as m,l as p,V as t}from"./index-D4ShR5zg.js";import{_ as r}from"./_demo1.vue_vue_type_script_setup_true_lang-C07o-CZW.js";import"./index-Z-JH_SAD.js";const _=`<script setup lang="ts">
const tabs = ref(1)
<\/script>

<template>
  <FaTabs v-model="tabs" :list="[{ label: '标签1', value: 1 }, { label: '标签2', value: 2 }, { label: '标签3', value: 3 }]" class="w-80">
    <template #1>
      <div class="flex-center">
        标签1
      </div>
    </template>
    <template #2>
      <div class="flex-center">
        标签2
      </div>
    </template>
    <template #3>
      <div class="flex-center">
        标签3
      </div>
    </template>
  </FaTabs>
</template>
`,d=l({__name:"index",setup(f){return(u,v)=>{const a=i,n=s;return c(),o("div",null,[e(a,{title:"标签页",description:"FaTabs"}),e(n,{code:p(_)},{default:m(()=>[e(r)]),_:1},8,["code"])])}}});typeof t=="function"&&t(d);export{d as default};
