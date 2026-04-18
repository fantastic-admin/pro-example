
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-CNfuk_zw.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-D8mOfQZx.js";import{t as u}from"./_demo2-CG-N4nXE.js";var d=`<template>
  <FaCollapsible>
    <template #trigger="{ open }">
      <FaButton>
        {{ open ? '收起' : '展开' }}
      </FaButton>
    </template>
    <div class="mt-4 space-y-2">
      <div v-for="item in 10" :key="item" class="px-4 py-2 border rounded-md">
        {{ item }}
      </div>
    </div>
  </FaCollapsible>
</template>
`,f=`<script setup lang="ts">
const open = ref(false)
<\/script>

<template>
  <FaButton @click="open = !open">
    {{ open ? '收起' : '展开' }}
  </FaButton>
  <FaCollapsible v-model="open">
    <div class="mt-4 space-y-2">
      <div v-for="item in 10" :key="item" class="px-4 py-2 border rounded-md">
        {{ item }}
      </div>
    </div>
  </FaCollapsible>
</template>
`,p=e({__name:`index`,setup(e){let{t:p}=c();return(e,c)=>{let m=o,h=s;return r(),a(`div`,null,[n(m,{title:t(p)(`route.component.collapsible`),description:`FaCollapsible`},null,8,[`title`]),n(h,{code:t(d)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(h,{title:`手动控制`,code:t(f)},{default:i(()=>[n(u)]),_:1},8,[`code`])])}}});export{p as default};