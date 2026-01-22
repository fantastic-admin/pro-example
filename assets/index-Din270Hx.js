
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as s}from"./index.vue_vue_type_script_setup_true_lang-BHyjy1V-.js";import{d as l,c as o,o as c,g as e,am as i,w as m,e as p,k as t}from"./index-H6QnEWHf.js";import{_ as r}from"./_demo1.vue_vue_type_script_setup_true_lang-DnZRAJyC.js";import"./index-ok7mAVWN.js";const _='<script setup lang="ts">\nconst tabs = ref(1)\n<\/script>\n\n<template>\n  <FaTabs v-model="tabs" :list="[{ label: \'标签1\', value: 1 }, { label: \'标签2\', value: 2 }, { label: \'标签3\', value: 3 }]" class="w-80">\n    <template #1>\n      <div class="flex-center">\n        标签1\n      </div>\n    </template>\n    <template #2>\n      <div class="flex-center">\n        标签2\n      </div>\n    </template>\n    <template #3>\n      <div class="flex-center">\n        标签3\n      </div>\n    </template>\n  </FaTabs>\n</template>\n',d=l({__name:"index",setup(f){return(u,v)=>{const a=i,n=s;return c(),o("div",null,[e(a,{title:"标签页",description:"FaTabs"}),e(n,{code:p(_)},{default:m(()=>[e(r)]),_:1},8,["code"])])}}});typeof t=="function"&&t(d);export{d as default};
