
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-C_d7Trg8.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-fSyCMFDk.js";var u=`<script setup lang="ts">
const scrollbar = ref(true)
const mask = ref(false)
<\/script>

<template>
  <div class="flex-col-start gap-4">
    <div class="flex-col-start gap-4">
      <div class="flex-center-start gap-4">
        <div class="text-sm">
          显示滚动条
        </div>
        <FaSwitch v-model="scrollbar" />
      </div>
      <div class="flex-center-start gap-4">
        <div class="text-sm">
          显示遮罩
        </div>
        <FaSwitch v-model="mask" />
      </div>
    </div>
    <FaScrollArea :scrollbar :mask class="border rounded-md h-72 w-48">
      <div v-for="tag in 20" :key="tag" class="text-sm p-4">
        {{ tag }}
      </div>
    </FaScrollArea>
    <FaScrollArea horizontal :scrollbar :mask class="border rounded-md w-96">
      <div class="flex-center-start">
        <div v-for="tag in 20" :key="tag" class="text-sm flex-center h-16 w-16">
          {{ tag }}
        </div>
      </div>
    </FaScrollArea>
  </div>
</template>
`,d=e({__name:`index`,setup(e){let{t:d}=c();return(e,c)=>{let f=o,p=s;return r(),a(`div`,null,[n(f,{title:t(d)(`route.component.scrollArea`),description:`FaScrollArea`},null,8,[`title`]),n(p,{code:t(u)},{default:i(()=>[n(l)]),_:1},8,[`code`])])}}});export{d as default};