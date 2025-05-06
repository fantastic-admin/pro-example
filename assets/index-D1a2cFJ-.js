
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as o}from"./index.vue_vue_type_script_setup_true_lang-CLVd-mn9.js";import{d as s,f as c,g as l,h as e,a8 as r,j as i,l as m,V as t}from"./index-553qAUTx.js";import{_ as p}from"./_demo1.vue_vue_type_script_setup_true_lang-CoaOanhz.js";import"./index-BAF4f9Xa.js";import"./index.vue_vue_type_script_setup_true_lang-CTXHQYTP.js";import"./check-BjEDVq4G.js";import"./useFormControl-D5UZX3Yf.js";const _=`<script setup lang="ts">
const select = ref('1')
<\/script>

<template>
  <FaSelect
    v-model="select"
    :options="[
      { label: '选项1', value: '1' },
      { label: '选项2', value: '2', disabled: true },
      { label: '选项3', value: '3' },
    ]"
  />
</template>
`,f=s({__name:"index",setup(d){return(u,v)=>{const n=r,a=o;return l(),c("div",null,[e(n,{title:"选择器",description:"FaSelect"}),e(a,{code:m(_)},{default:i(()=>[e(p)]),_:1},8,["code"])])}}});typeof t=="function"&&t(f);export{f as default};
