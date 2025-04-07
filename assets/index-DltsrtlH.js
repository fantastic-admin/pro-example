
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as o}from"./index.vue_vue_type_script_setup_true_lang-D0Szghxo.js";import{d as n,f as r,g as c,h as e,a8 as p,j as i,l,V as s}from"./index-CkXBA4BI.js";import{_ as m}from"./_demo1.vue_vue_type_script_setup_true_lang-B-fl9ZLX.js";import"./index-DwqvzQUS.js";import"./index-DhVktJdt.js";import"./index.vue_vue_type_script_setup_true_lang-CPgJBiHI.js";const d=`<script setup lang="ts">
const password = ref('')
<\/script>

<template>
  <div class="w-80 flex-col">
    <FaInput v-model="password" placeholder="请输入密码" class="w-full" />
    <FaPasswordStrength :password="password" class="mt-2" />
  </div>
</template>
`,_=n({__name:"index",setup(f){return(u,w)=>{const t=p,a=o;return c(),r("div",null,[e(t,{title:"密码强度",description:"FaPasswordStrength"}),e(a,{code:l(d)},{default:i(()=>[e(m)]),_:1},8,["code"])])}}});typeof s=="function"&&s(_);export{_ as default};
