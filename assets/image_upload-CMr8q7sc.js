
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-CNfuk_zw.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-X2gqhz1B.js";import{t as u}from"./_demo2-BkCUDF9A.js";import{t as d}from"./_demo3-Brsodmm8.js";var f=`<script setup lang="ts">
const files = ref<string[]>([])

function handleSuccess() {
  faToast.success('模拟上传成功')
}
<\/script>

<template>
  <FaImageUpload
    v-model="files"
    action="/fake/upload"
    :after-upload="(response) => response.data.url"
    @on-success="handleSuccess"
  />
</template>
`,p=`<script setup lang="ts">
const files = ref<string[]>(['https://fantastic-admin.hurui.me/logo.svg'])

function handleSuccess() {
  faToast.success('模拟上传成功')
}
<\/script>

<template>
  <FaImageUpload
    v-model="files"
    action="/fake/upload"
    :after-upload="(response) => \`\${response.data.url}?fake=\${Math.random()}\`"
    :max="2"
    @on-success="handleSuccess"
  />
</template>
`,m=`<script setup lang="ts">
const files = ref<string[]>([])

function handleSuccess() {
  faToast.success('模拟上传成功')
}
<\/script>

<template>
  <FaImageUpload
    v-model="files"
    action="/fake/upload"
    :after-upload="(response) => \`\${response.data.url}?fake=\${Math.random()}\`"
    :width="200"
    :height="130"
    :dimension="{ width: 400, height: 260 }"
    :ext="['png']"
    :size="200 * 1024"
    :max="0"
    @on-success="handleSuccess"
  >
    <FaIcon name="i-noto:identification-card" class="opacity-50 size-50" />
  </FaImageUpload>
</template>
`,h=e({__name:`index`,setup(e){let{t:h}=c();return(e,c)=>{let g=o,_=s;return r(),a(`div`,null,[n(g,{title:t(h)(`route.component.imageUpload`),description:`FaImageUpload`},null,8,[`title`]),n(_,{code:t(f)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(_,{code:t(p),title:`多图上传`},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(_,{code:t(m),title:`自定义默认内容、容器大小、建议尺寸、限制类型、不限制数量`},{default:i(()=>[n(d)]),_:1},8,[`code`])])}}});export{h as default};