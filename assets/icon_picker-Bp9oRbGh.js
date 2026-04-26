
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-C_d7Trg8.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-DWk9CxhG.js";import{t as u}from"./_demo2-C3EdxDRh.js";var d=`<script setup lang="ts">
const icon1 = ref('')
const icon2 = ref('ep:success-filled')
<\/script>

<template>
  <div class="space-x-2">
    <FaIconPicker v-model="icon1" />
    <FaIconPicker v-model="icon2" />
  </div>
</template>
`,f=`<template>
  <FaIconPicker>
    <template #default="{ icon }">
      <div class="px-3 py-1 border rounded-full flex-center-start inline-flex gap-2 cursor-pointer">
        <FaIcon v-if="icon" :name="icon" />
        <div class="text-sm">
          {{ icon || '请选择' }}
        </div>
      </div>
    </template>
  </FaIconPicker>
</template>
`,p=e({__name:`index`,setup(e){let{t:p}=c();return(e,c)=>{let m=o,h=s;return r(),a(`div`,null,[n(m,{title:t(p)(`route.component.iconPicker`),description:`FaIconPicker`},null,8,[`title`]),n(h,{code:t(d)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(h,{title:`自定义触发容器`,code:t(f)},{default:i(()=>[n(u)]),_:1},8,[`code`])])}}});export{p as default};