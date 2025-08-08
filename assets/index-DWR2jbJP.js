
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as i}from"./index.vue_vue_type_script_setup_true_lang-BmDYF_lz.js";import{d as l,e as c,f as m,g as e,a7 as p,i as t,k as o,U as s}from"./index-DOTJNdHl.js";import{_ as r}from"./_demo1.vue_vue_type_script_setup_true_lang-v4UkLC8o.js";import{_ as u}from"./_demo2.vue_vue_type_script_setup_true_lang-CEb5UfC5.js";import"./index-WlNgMWD1.js";import"./index-BGkYuwMB.js";import"./index-CaDOtEIa.js";import"./filesize-CrFBnGCI.js";const d=`<script setup lang="ts">
import type { FileItem } from '@/ui/components/FaFileUpload/index.vue'
import { toast } from 'vue-sonner'

const files = ref<FileItem[]>([])

function handleSuccess() {
  toast.success('模拟上传成功')
}
<\/script>

<template>
  <FaFileUpload
    v-model="files"
    action="/mock/upload"
    :after-upload="(response) => response.data.url"
    multiple
    @on-success="handleSuccess"
  />
</template>
`,f=`<script setup lang="ts">
import type { FileItem } from '@/ui/components/FaFileUpload/index.vue'
import { toast } from 'vue-sonner'

const files = ref<FileItem[]>([
  { name: 'logo.svg', size: 1024 * 1024, url: 'https://fantastic-admin.hurui.me/logo.svg' },
])

function handleSuccess() {
  toast.success('模拟上传成功')
}

function handleClick(fileItem: FileItem) {
  toast.info(fileItem.name, {
    description: fileItem.url,
  })
}
<\/script>

<template>
  <FaFileUpload
    v-model="files"
    action="/mock/upload"
    :after-upload="(response) => response.data.url"
    multiple
    :ext="['png']"
    :size="200 * 1024"
    :max="5"
    @on-success="handleSuccess"
    @on-click="handleClick"
  />
</template>
`,_=l({__name:"index",setup(F){return(h,v)=>{const a=p,n=i;return m(),c("div",null,[e(a,{title:"文件上传",description:"FaFileUpload"}),e(n,{code:o(d)},{default:t(()=>[e(r)]),_:1},8,["code"]),e(n,{code:o(f),title:"限制上传数量、大小、类型、点击事件"},{default:t(()=>[e(u)]),_:1},8,["code"])])}}});typeof s=="function"&&s(_);export{_ as default};
