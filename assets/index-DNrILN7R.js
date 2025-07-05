
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as l}from"./index.vue_vue_type_script_setup_true_lang-C3pjQ_Y6.js";import{d as n,e as r,f as i,g as e,a7 as c,i as p,k as s,U as o}from"./index-BLSV4yIg.js";import{_ as f}from"./_demo1.vue_vue_type_script_setup_true_lang-B9a6tAnC.js";import"./index-DU7ESt7E.js";const u=`<script setup lang="ts">
const value1 = ref([1, 5, 2, 4, 8, 3, 7])
const value2 = ref([
  { tooltip: '值：1', value: 1 },
  { tooltip: '值：3', value: 3 },
  { tooltip: '值：5', value: 5 },
  { tooltip: '值：8', value: 8 },
  { tooltip: '值：4', value: 4 },
  { tooltip: '值：6', value: 6 },
  { tooltip: '值：9', value: 9 },
])
<\/script>

<template>
  <FaSparkline :value="value1" />
  <FaSparkline :value="value1" stroke-color="#409eff" fill-color="#b3d8ff" />
  <FaSparkline :value="value2" tooltip />
  <FaSparkline :value="value2" tooltip stroke-color="#409eff" fill-color="#b3d8ff" cursor-color="#e6a23c" spot-color="#909399" />
</template>
`,_=n({__name:"index",setup(m){return(v,d)=>{const t=c,a=l;return i(),r("div",null,[e(t,{title:"迷你图",description:"FaSparkline"}),e(a,{code:s(u)},{default:p(()=>[e(f)]),_:1},8,["code"])])}}});typeof o=="function"&&o(_);export{_ as default};
