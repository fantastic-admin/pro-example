
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-EJiOFDNb.js";import{P as o,vt as s}from"./components-Dvnhr4Ep.js";import{n as c}from"./vue-i18n.runtime-pGyDsL5y.js";import{t as l}from"./_demo1-DS2wepr5.js";import{t as u}from"./_demo2-DtB6S8Jd.js";var d=`<script setup lang="ts">
const value = ref('')
<\/script>

<template>
  <FaTextarea v-model="value" placeholder="请输入内容" />
</template>
`,f=`<script setup lang="ts">
const value = ref('')
<\/script>

<template>
  <FaTextarea v-model="value" placeholder="console.log('Hello, world!');" align="block" start-class="justify-between" end-class="justify-between">
    <template #start>
      <span>script.ts</span>
      <FaButton variant="ghost" size="icon" class="size-6">
        <FaIcon name="i-ep:refresh" />
      </FaButton>
    </template>
    <template #end>
      <span>Line 1, Column 1</span>
      <FaButton size="sm" class="px-2 h-8">
        Run
        <FaIcon name="i-lucide:corner-down-left" />
      </FaButton>
    </template>
  </FaTextarea>
</template>
`,p=e({__name:`index`,setup(e){let{t:p}=c();return(e,c)=>{let m=o,h=s;return r(),a(`div`,null,[n(m,{title:t(p)(`route.component.textarea`),description:`FaTextarea`},null,8,[`title`]),n(h,{code:t(d)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(h,{title:`插槽`,code:t(f)},{default:i(()=>[n(u)]),_:1},8,[`code`])])}}});export{p as default};