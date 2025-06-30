
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as o}from"./index.vue_vue_type_script_setup_true_lang-g8w5HU-G.js";import{d as s,e as i,f as c,g as e,a7 as p,i as r,k as _,U as t}from"./index-CkQ8ZzMl.js";import{_ as m}from"./_demo1.vue_vue_type_script_setup_true_lang-Bym465XS.js";import"./index-CAaXm9bO.js";import"./index.vue_vue_type_script_setup_true_lang-BBhidC5c.js";const f=`<script setup lang="ts">
const page = ref(1)
const size = ref(10)
const total = ref(100)
<\/script>

<template>
  <FaPagination :page="page" :size="size" :total="total" @page-change="page = $event" />
</template>
`,l=s({__name:"index",setup(d){return(g,u)=>{const a=p,n=o;return c(),i("div",null,[e(a,{title:"分页",description:"FaPagination"}),e(n,{code:_(f)},{default:r(()=>[e(m)]),_:1},8,["code"])])}}});typeof t=="function"&&t(l);export{l as default};
