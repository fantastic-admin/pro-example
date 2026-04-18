
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-CNfuk_zw.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-pOilyIwj.js";var u=`<script setup lang="ts">
function showToast(type?: 'success' | 'error' | 'info' | 'warning' | 'action' | 'loading1' | 'loading2') {
  if (type) {
    if (type === 'loading1') {
      faToast.promise(() => new Promise((resolve) => {
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
      const loading = faToast.loading('加载中', {
        position: 'top-right',
        duration: Infinity,
      })
      setTimeout(() => {
        faToast.dismiss(loading)
        faToast('Fantastic-admin 杰出的管理系统框架', {
          description: '开箱即用，提供舒适开发体验',
          position: 'top-right',
          duration: 3000,
        })
      }, 2000)
    }
    else if (type === 'action') {
      faToast('Fantastic-admin 杰出的管理系统框架', {
        description: '开箱即用，提供舒适开发体验',
        position: 'top-right',
        duration: 3000,
        action: {
          label: 'Undo',
          onClick: () => {
            faToast.success('操作成功')
          },
        },
      })
    }
    else {
      faToast[type]('Fantastic-admin 杰出的管理系统框架', {
        description: '开箱即用，提供舒适开发体验',
        position: 'top-right',
        duration: 3000,
      })
    }
  }
  else {
    faToast('Fantastic-admin 杰出的管理系统框架', {
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
    <FaButton @click="showToast('action')">
      操作
    </FaButton>
    <FaButton @click="showToast('loading1')">
      加载中 1
    </FaButton>
    <FaButton @click="showToast('loading2')">
      加载中 2
    </FaButton>
  </div>
</template>
`,d=e({__name:`index`,setup(e){let{t:d}=c();return(e,c)=>{let f=o,p=s;return r(),a(`div`,null,[n(f,{title:t(d)(`route.component.toast`),description:`FaToast`},null,8,[`title`]),n(p,{code:t(u)},{default:i(()=>[n(l)]),_:1},8,[`code`])])}}});export{d as default};