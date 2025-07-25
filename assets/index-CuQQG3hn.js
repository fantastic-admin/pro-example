
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as c}from"./index.vue_vue_type_script_setup_true_lang-QJtPTUd7.js";import{d as i,e as r,f as m,g as n,a7 as p,i as t,k as s,U as o}from"./index-DODNO_Fi.js";import{_ as l}from"./_demo1.vue_vue_type_script_setup_true_lang-gMAr6vLQ.js";import{_ as d}from"./_demo2.vue_vue_type_script_setup_true_lang-DNMEZRc4.js";import{_ as u}from"./_demo3.vue_vue_type_script_setup_true_lang-BGY71qQs.js";import"./index-yfpwFnwn.js";import"./index-ClxJMcM6.js";import"./index.vue_vue_type_script_setup_true_lang-_Qk37Zhu.js";import"./nullish-CHIgUVhi.js";import"./filesize-CrFBnGCI.js";import"./index-CYHmbhYR.js";import"./preview.vue_vue_type_script_setup_true_lang-DITPmbuN.js";import"./index-CQAeKKDl.js";const f=`<script setup lang="ts">
import { toast } from 'vue-sonner'

const files = ref<string[]>([])

function handleSuccess() {
  toast.success('模拟上传成功')
}
<\/script>

<template>
  <FaImageUpload
    v-model="files"
    action="/mock/upload"
    :after-upload="(response) => response.data.url"
    @on-success="handleSuccess"
  />
</template>
`,_=`<script setup lang="ts">
import { toast } from 'vue-sonner'

const files = ref<string[]>(['https://fantastic-admin.hurui.me/logo.svg'])

function handleSuccess() {
  toast.success('模拟上传成功')
}
<\/script>

<template>
  <FaImageUpload
    v-model="files"
    action="/mock/upload"
    :after-upload="(response) => response.data.url"
    :max="2"
    @on-success="handleSuccess"
  />
</template>
`,g=`<script setup lang="ts">
import { toast } from 'vue-sonner'

const files = ref<string[]>([])

function handleSuccess() {
  toast.success('模拟上传成功')
}
<\/script>

<template>
  <FaImageUpload
    v-model="files"
    action="/mock/upload"
    :after-upload="(response) => response.data.url"
    :width="200"
    :height="130"
    :dimension="{ width: 400, height: 260 }"
    :ext="['png']"
    :size="200 * 1024"
    :max="0"
    @on-success="handleSuccess"
  >
    <FaIcon name="i-noto:identification-card" class="size-50 opacity-50" />
  </FaImageUpload>
</template>
`,h=i({__name:"index",setup(v){return(F,k)=>{const a=p,e=c;return m(),r("div",null,[n(a,{title:"图片上传",description:"FaImageUpload"}),n(e,{code:s(f)},{default:t(()=>[n(l)]),_:1},8,["code"]),n(e,{code:s(_),title:"多图上传"},{default:t(()=>[n(d)]),_:1},8,["code"]),n(e,{code:s(g),title:"自定义默认内容、容器大小、建议尺寸、限制类型、不限制数量"},{default:t(()=>[n(u)]),_:1},8,["code"])])}}});typeof o=="function"&&o(h);export{h as default};
