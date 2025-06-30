
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as i}from"./index.vue_vue_type_script_setup_true_lang-g8w5HU-G.js";import{d as s,e as r,f as m,g as e,a7 as p,i as o,k as t,U as c}from"./index-CkQ8ZzMl.js";import{_ as l}from"./_demo1.vue_vue_type_script_setup_true_lang-CXPiFKuX.js";import d from"./_demo2-Dc8Ym0x_.js";import"./index-CAaXm9bO.js";import"./index-ClAXs3o8.js";import"./index.vue_vue_type_script_setup_true_lang-DiSnMjV5.js";import"./index.vue_vue_type_script_setup_true_lang-BBhidC5c.js";const f=`<script setup lang="ts">
const icon1 = ref('')
const icon2 = ref('ep:success-filled')
<\/script>

<template>
  <div class="space-x-2">
    <FaIconPicker v-model="icon1" />
    <FaIconPicker v-model="icon2" />
  </div>
</template>
`,_=`<template>
  <FaIconPicker>
    <template #default="{ icon }">
      <div class="flex-center-start inline-flex cursor-pointer gap-2 border rounded-full px-3 py-1">
        <FaIcon v-if="icon" :name="icon" />
        <div class="text-sm">
          {{ icon || '请选择' }}
        </div>
      </div>
    </template>
  </FaIconPicker>
</template>
`,u=s({__name:"index",setup(v){return(k,x)=>{const a=p,n=i;return m(),r("div",null,[e(a,{title:"图标选择器",description:"FaIconPicker"}),e(n,{code:t(f)},{default:o(()=>[e(l)]),_:1},8,["code"]),e(n,{title:"自定义触发容器",code:t(_)},{default:o(()=>[e(d)]),_:1},8,["code"])])}}});typeof c=="function"&&c(u);export{u as default};
