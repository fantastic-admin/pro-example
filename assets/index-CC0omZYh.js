
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as a}from"./index.vue_vue_type_script_setup_true_lang-BmDYF_lz.js";import{d as n,e as r,f as c,g as e,a7 as p,i,k as m,U as t}from"./index-DOTJNdHl.js";import{_ as d}from"./_demo1.vue_vue_type_script_setup_true_lang-DFMCDD2S.js";import"./index-WlNgMWD1.js";import"./index-BzPxyPYO.js";import"./index.vue_vue_type_script_setup_true_lang-W616Q0XK.js";import"./useGraceArea-BvRdXZoy.js";const l=`<script setup lang="ts">
const password = ref('')
<\/script>

<template>
  <div class="w-80 flex-col">
    <FaInput v-model="password" placeholder="请输入密码" class="w-full" />
    <FaPasswordStrength :password="password" class="mt-2" />
  </div>
</template>
`,_=n({__name:"index",setup(f){return(u,w)=>{const s=p,o=a;return c(),r("div",null,[e(s,{title:"密码强度",description:"FaPasswordStrength"}),e(o,{code:m(l)},{default:i(()=>[e(d)]),_:1},8,["code"])])}}});typeof t=="function"&&t(_);export{_ as default};
