
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as a}from"./index.vue_vue_type_script_setup_true_lang-C3pjQ_Y6.js";import{d as e,e as c,f as s,g as n,a7 as f,i as r,k as p,U as t}from"./index-BLSV4yIg.js";import{_ as m}from"./_demo1.vue_vue_type_script_setup_true_lang-CqlmKa_a.js";import"./index-DU7ESt7E.js";const l=`<script setup lang="ts">
import { faNotification } from '@/ui/components/FaNotification'

function showNotification(type?: 'html') {
  if (type === 'html') {
    faNotification({
      title: 'Fantastic-admin 杰出的管理系统框架',
      description: h('null', {
        innerHTML: '<p class="text-red-500">开箱即用，提供舒适开发体验</p>',
      }),
      duration: 3000,
    })
  }
  else {
    faNotification({
      title: 'Fantastic-admin 杰出的管理系统框架',
      description: '开箱即用，提供舒适开发体验',
      duration: 3000,
    })
  }
}
<\/script>

<template>
  <div class="flex gap-4">
    <FaButton @click="showNotification()">
      默认
    </FaButton>
    <FaButton @click="showNotification('html')">
      支持 HTML 代码
    </FaButton>
  </div>
</template>
`,d=e({__name:"index",setup(_){return(u,F)=>{const i=f,o=a;return s(),c("div",null,[n(i,{title:"通知",description:"FaNotification"}),n(o,{code:p(l)},{default:r(()=>[n(m)]),_:1},8,["code"])])}}});typeof t=="function"&&t(d);export{d as default};
