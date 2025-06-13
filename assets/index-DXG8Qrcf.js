
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as i}from"./index.vue_vue_type_script_setup_true_lang-CiA77rN-.js";import{d as s,f as r,g as m,h as e,a8 as p,j as o,l as t,V as c}from"./index-xj0hzzoN.js";import{_ as l}from"./_demo1.vue_vue_type_script_setup_true_lang-BWQihynN.js";import d from"./_demo2-CD13KVoI.js";import"./index-BIrqzr6m.js";import"./index-CweJ5494.js";import"./index.vue_vue_type_script_setup_true_lang-DB2a1pIK.js";import"./index.vue_vue_type_script_setup_true_lang-C05ZldHn.js";const f=`<script setup lang="ts">
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
`,u=s({__name:"index",setup(v){return(x,k)=>{const a=p,n=i;return m(),r("div",null,[e(a,{title:"图标选择器",description:"FaIconPicker"}),e(n,{code:t(f)},{default:o(()=>[e(l)]),_:1},8,["code"]),e(n,{title:"自定义触发容器",code:t(_)},{default:o(()=>[e(d)]),_:1},8,["code"])])}}});typeof c=="function"&&c(u);export{u as default};
