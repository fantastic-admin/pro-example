
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as i}from"./index.vue_vue_type_script_setup_true_lang-G8mBMKDY.js";import{d as s,e as r,f as m,g as e,a7 as p,i as o,k as t,U as c}from"./index-H6KsPIiT.js";import{_ as l}from"./_demo1.vue_vue_type_script_setup_true_lang-jJ-5NSkN.js";import d from"./_demo2-xeEgQWxV.js";import"./index-9dZpJgz5.js";import"./index-D22JJNbZ.js";import"./index.vue_vue_type_script_setup_true_lang-Cnfua8Xc.js";import"./index.vue_vue_type_script_setup_true_lang-5Y3jen5S.js";const f='<script setup lang="ts">\nconst icon1 = ref(\'\')\nconst icon2 = ref(\'ep:success-filled\')\n<\/script>\n\n<template>\n  <div class="space-x-2">\n    <FaIconPicker v-model="icon1" />\n    <FaIconPicker v-model="icon2" />\n  </div>\n</template>\n',_='<template>\n  <FaIconPicker>\n    <template #default="{ icon }">\n      <div class="flex-center-start inline-flex cursor-pointer gap-2 border rounded-full px-3 py-1">\n        <FaIcon v-if="icon" :name="icon" />\n        <div class="text-sm">\n          {{ icon || \'请选择\' }}\n        </div>\n      </div>\n    </template>\n  </FaIconPicker>\n</template>\n',u=s({__name:"index",setup(v){return(k,x)=>{const a=p,n=i;return m(),r("div",null,[e(a,{title:"图标选择器",description:"FaIconPicker"}),e(n,{code:t(f)},{default:o(()=>[e(l)]),_:1},8,["code"]),e(n,{title:"自定义触发容器",code:t(_)},{default:o(()=>[e(d)]),_:1},8,["code"])])}}});typeof c=="function"&&c(u);export{u as default};
