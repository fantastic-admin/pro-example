
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as o}from"./index.vue_vue_type_script_setup_true_lang-CnwQlPJc.js";import{d as s,f as c,g as i,h as e,a8 as p,j as r,l as _,V as t}from"./index-D4ShR5zg.js";import{_ as m}from"./_demo1.vue_vue_type_script_setup_true_lang-Cu1fWy4F.js";import"./index-Z-JH_SAD.js";import"./index.vue_vue_type_script_setup_true_lang-D0nINIGE.js";const f=`<script setup lang="ts">
const page = ref(1)
const size = ref(10)
const total = ref(100)
<\/script>

<template>
  <FaPagination :page="page" :size="size" :total="total" @page-change="page = $event" />
</template>
`,l=s({__name:"index",setup(d){return(g,u)=>{const a=p,n=o;return i(),c("div",null,[e(a,{title:"分页",description:"FaPagination"}),e(n,{code:_(f)},{default:r(()=>[e(m)]),_:1},8,["code"])])}}});typeof t=="function"&&t(l);export{l as default};
