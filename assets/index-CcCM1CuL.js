
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as r}from"./index.vue_vue_type_script_setup_true_lang-CiA77rN-.js";import{d as p,f as c,g as m,h as e,j as o,i as t,a8 as l,l as d,V as i}from"./index-xj0hzzoN.js";import{_}from"./_demo1.vue_vue_type_script_setup_true_lang-Y58Gq7DS.js";import"./index-BIrqzr6m.js";import"./index.vue_vue_type_script_setup_true_lang-5fIHloA6.js";import"./index-Pujy9TtY.js";import"./index.vue_vue_type_script_setup_true_lang-B0DhxaW0.js";import"./index.vue_vue_type_script_setup_true_lang-D2Op3K_K.js";import"./useGraceArea-C4aWS0i7.js";import"./useFormControl-8P94415q.js";import"./VisuallyHiddenInput-Wp1kXxGa.js";const f=`<script setup lang="ts">
const height = ref([50])
<\/script>

<template>
  <div class="h-vh" />
  <FaFixedActionBar>
    <div :style="\`height: \${height[0]}px;\`" />
    <FaSlider v-model="height" />
  </FaFixedActionBar>
</template>
`,h=p({__name:"index",setup(u){return(F,n)=>{const a=l,s=r;return m(),c("div",null,[e(a,{title:"固定底部操作栏"},{description:o(()=>n[0]||(n[0]=[t("div",{class:"space-y-2"},[t("p",null,"FaFixedActionBar"),t("p",null,"避免因页面过长，导致操作按钮需要滚动到页面底部才能操作")],-1)])),_:1}),e(s,{code:d(f)},{default:o(()=>[e(_)]),_:1},8,["code"])])}}});typeof i=="function"&&i(h);export{h as default};
