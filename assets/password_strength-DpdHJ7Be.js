
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-CNfuk_zw.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-Bfk2-Xse.js";var u=`<script setup lang="ts">
const password = ref('')
<\/script>

<template>
  <div class="flex-col w-80">
    <FaInput v-model="password" placeholder="请输入密码" class="w-full" />
    <FaPasswordStrength :password="password" class="mt-2" />
  </div>
</template>
`,d=e({__name:`index`,setup(e){let{t:d}=c();return(e,c)=>{let f=o,p=s;return r(),a(`div`,null,[n(f,{title:t(d)(`route.component.passwordStrength`),description:`FaPasswordStrength`},null,8,[`title`]),n(p,{code:t(u)},{default:i(()=>[n(l)]),_:1},8,[`code`])])}}});export{d as default};