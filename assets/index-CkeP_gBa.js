
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as a}from"./index.vue_vue_type_script_setup_true_lang-DXpNJ-I9.js";import{d as n,f as r,g as c,h as e,a8 as p,j as i,l as m,V as t}from"./index-Cm5PYwOf.js";import{_ as l}from"./_demo1.vue_vue_type_script_setup_true_lang-JyO8MitL.js";import"./index-DO3wYGke.js";import"./index-DRYKsvTs.js";import"./index.vue_vue_type_script_setup_true_lang-DOGVB5H_.js";import"./useGraceArea-D2ABJYVL.js";const d=`<script setup lang="ts">
const password = ref('')
<\/script>

<template>
  <div class="w-80 flex-col">
    <FaInput v-model="password" placeholder="请输入密码" class="w-full" />
    <FaPasswordStrength :password="password" class="mt-2" />
  </div>
</template>
`,_=n({__name:"index",setup(f){return(u,w)=>{const s=p,o=a;return c(),r("div",null,[e(s,{title:"密码强度",description:"FaPasswordStrength"}),e(o,{code:m(d)},{default:i(()=>[e(l)]),_:1},8,["code"])])}}});typeof t=="function"&&t(_);export{_ as default};
