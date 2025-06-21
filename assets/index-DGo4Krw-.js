
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as i}from"./index.vue_vue_type_script_setup_true_lang-iFov3akP.js";import{d as s,f as e,g as c,h as n,a8 as r,j as p,l,V as t}from"./index-Dv6GDtcN.js";import{_ as d}from"./_demo1.vue_vue_type_script_setup_true_lang-5kHUqI0K.js";import"./index-DNIjrW4p.js";const u=`<script setup lang="ts">
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
`,m=s({__name:"index",setup(f){return(g,_)=>{const o=r,a=i;return c(),e("div",null,[n(o,{title:"轻提示",description:"FaToast"}),n(a,{code:l(u)},{default:p(()=>[n(d)]),_:1},8,["code"])])}}});typeof t=="function"&&t(m);export{m as default};
