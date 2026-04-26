
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-C_d7Trg8.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-Die7twF_.js";import{t as u}from"./_demo2-D_QQdjd0.js";import{t as d}from"./_demo3-CAba-UXd.js";var f=`<script setup lang="ts">
const input = ref('')
<\/script>

<template>
  <FaInputOTP v-model="input" />
</template>
`,p=`<script setup lang="ts">
const input = ref('')
<\/script>

<template>
  <FaInputOTP v-model="input" :length="4" />
</template>
`,m=`<script setup lang="ts">
const input = ref('')

function handleComplete() {
  faToast.info(input.value)
}
<\/script>

<template>
  <FaInputOTP v-model="input" @complete="handleComplete" />
</template>
`,h=e({__name:`index`,setup(e){let{t:h}=c();return(e,c)=>{let g=o,_=s;return r(),a(`div`,null,[n(g,{title:t(h)(`route.component.inputOtp`),description:`FaInputOTP`},null,8,[`title`]),n(_,{code:t(f)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(_,{title:`长度`,code:t(p)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(_,{title:`回调`,code:t(m)},{default:i(()=>[n(d)]),_:1},8,[`code`])])}}});export{h as default};