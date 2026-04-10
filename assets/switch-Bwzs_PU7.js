
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-EJiOFDNb.js";import{P as o,vt as s}from"./components-Dvnhr4Ep.js";import{n as c}from"./vue-i18n.runtime-pGyDsL5y.js";import{t as l}from"./_demo1-CkYWfeca.js";import{t as u}from"./_demo2-DdAJmEpr.js";var d=`<script setup lang="ts">
const switchVal = ref(false)
<\/script>

<template>
  <div class="flex gap-4">
    <FaSwitch v-model="switchVal" />
    <FaSwitch v-model="switchVal" on-icon="ri:sun-line" off-icon="ri:moon-line" />
  </div>
</template>
`,f=`<script setup lang="ts">
const switchVal = ref(false)

function handleBeforeChange() {
  return new Promise<boolean>((resolve) => {
    useFaModal().confirm({
      title: '确认信息',
      content: '确认吗？',
      onConfirm: () => {
        resolve(true)
      },
      onCancel: () => {
        resolve(false)
      },
    })
  })
}
<\/script>

<template>
  <div class="flex gap-4">
    <FaSwitch v-model="switchVal" :before-change="handleBeforeChange" />
  </div>
</template>
`,p=e({__name:`index`,setup(e){let{t:p}=c();return(e,c)=>{let m=o,h=s;return r(),a(`div`,null,[n(m,{title:t(p)(`route.component.switch`),description:`FaSwitch`},null,8,[`title`]),n(h,{code:t(d)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(h,{code:t(f),title:`确认`},{default:i(()=>[n(u)]),_:1},8,[`code`])])}}});export{p as default};