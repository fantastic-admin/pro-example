
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-EJiOFDNb.js";import{P as o,vt as s}from"./components-Dvnhr4Ep.js";import{n as c}from"./vue-i18n.runtime-pGyDsL5y.js";import{t as l}from"./_demo1-D5sY_rch.js";import{t as u}from"./_demo2-kylbuVX_.js";var d=`<script setup lang="ts">
const value = ref(0)
<\/script>

<template>
  <FaNumberField v-model="value" />
</template>
`,f=`<script setup lang="ts">
const value = ref(0)
<\/script>

<template>
  <FaNumberField v-model="value" :min="0" :max="10" :step="0.1" />
</template>
`,p=e({__name:`index`,setup(e){let{t:p}=c();return(e,c)=>{let m=o,h=s;return r(),a(`div`,null,[n(m,{title:t(p)(`route.component.numberField`),description:`FaInput`},null,8,[`title`]),n(h,{code:t(d)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(h,{title:`最小值 / 最大值 / 步长`,code:t(f)},{default:i(()=>[n(u)]),_:1},8,[`code`])])}}});export{p as default};