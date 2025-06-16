
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as a}from"./index.vue_vue_type_script_setup_true_lang-DXpNJ-I9.js";import{d as e,f as c,g as s,h as n,a8 as f,j as r,l as p,V as t}from"./index-Cm5PYwOf.js";import{_ as m}from"./_demo1.vue_vue_type_script_setup_true_lang-PLsyDigc.js";import"./index-DO3wYGke.js";const l=`<script setup lang="ts">
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
`,d=e({__name:"index",setup(_){return(u,h)=>{const i=f,o=a;return s(),c("div",null,[n(i,{title:"通知",description:"FaNotification"}),n(o,{code:p(l)},{default:r(()=>[n(m)]),_:1},8,["code"])])}}});typeof t=="function"&&t(d);export{d as default};
