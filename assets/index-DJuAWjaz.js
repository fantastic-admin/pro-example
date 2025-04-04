
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as r}from"./index.vue_vue_type_script_setup_true_lang-D9xYUDNr.js";import{d as o,f as s,g as c,h as e,a8 as i,j as _,l as m,V as t}from"./index-BFPO48W4.js";import{_ as p}from"./_demo1.vue_vue_type_script_setup_true_lang-Dyr6Vp_D.js";import"./index-CdK171Ue.js";const d=`<script setup lang="ts">
const drawer = ref(false)
<\/script>

<template>
  <FaButton @click="drawer = true">
    打开
  </FaButton>
  <FaDrawer v-model="drawer" title="标题" description="这里是一段描述介绍">
    这里是 drawer 内容
  </FaDrawer>
</template>
`,f=o({__name:"index",setup(l){return(u,w)=>{const a=i,n=r;return c(),s("div",null,[e(a,{title:"抽屉",description:"FaDrawer"}),e(n,{code:m(d)},{default:_(()=>[e(p)]),_:1},8,["code"])])}}});typeof t=="function"&&t(f);export{f as default};
