
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as i}from"./index.vue_vue_type_script_setup_true_lang-C3pjQ_Y6.js";import{d as s,e,f as c,g as n,a7 as r,i as p,k as d,U as t}from"./index-BLSV4yIg.js";import{_ as l}from"./_demo1.vue_vue_type_script_setup_true_lang-BtNqcADd.js";import"./index-DU7ESt7E.js";const u=`<script setup lang="ts">
import { toast } from 'vue-sonner'

function showToast(type?: 'success' | 'error' | 'info' | 'warning' | 'loading1' | 'loading2') {
  if (type) {
    if (type === 'loading1') {
      toast.promise(() => new Promise((resolve) => {
        setTimeout(resolve, 2000)
      }), {
        loading: '加载中',
        success: () => '加载成功',
        error: () => '加载失败',
        position: 'top-right',
        duration: 3000,
      })
    }
    else if (type === 'loading2') {
      const loading = toast.loading('加载中', {
        position: 'top-right',
        duration: Infinity,
      })
      setTimeout(() => {
        toast.dismiss(loading)
        toast('Fantastic-admin 杰出的管理系统框架', {
          description: '开箱即用，提供舒适开发体验',
          position: 'top-right',
          duration: 3000,
        })
      }, 2000)
    }
    else {
      toast[type]('Fantastic-admin 杰出的管理系统框架', {
        description: '开箱即用，提供舒适开发体验',
        position: 'top-right',
        duration: 3000,
      })
    }
  }
  else {
    toast('Fantastic-admin 杰出的管理系统框架', {
      description: '开箱即用，提供舒适开发体验',
      position: 'top-right',
      duration: 3000,
    })
  }
}
<\/script>

<template>
  <div class="flex gap-4">
    <FaButton @click="showToast()">
      默认
    </FaButton>
    <FaButton @click="showToast('success')">
      成功
    </FaButton>
    <FaButton @click="showToast('error')">
      错误
    </FaButton>
    <FaButton @click="showToast('info')">
      信息
    </FaButton>
    <FaButton @click="showToast('warning')">
      警告
    </FaButton>
    <FaButton @click="showToast('loading1')">
      加载中 1
    </FaButton>
    <FaButton @click="showToast('loading2')">
      加载中 2
    </FaButton>
  </div>
</template>
`,m=s({__name:"index",setup(f){return(g,_)=>{const o=r,a=i;return c(),e("div",null,[n(o,{title:"轻提示",description:"FaToast"}),n(a,{code:d(u)},{default:p(()=>[n(l)]),_:1},8,["code"])])}}});typeof t=="function"&&t(m);export{m as default};
