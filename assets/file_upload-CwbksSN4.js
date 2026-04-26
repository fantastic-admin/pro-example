
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-C_d7Trg8.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-DVgO02R72.js";import{t as u}from"./_demo2-iyo6PHHN.js";import{t as d}from"./_demo3-BEpuMy-r.js";var f=`<script setup lang="ts">
import type { FileItem } from '@fantastic-admin/components'

const files = ref<FileItem[]>([])

function handleSuccess() {
  faToast.success('模拟上传成功')
}
<\/script>

<template>
  <FaFileUpload
    v-model="files"
    action="/fake/upload"
    :after-upload="(response) => response.data.url"
    multiple
    @on-success="handleSuccess"
  />
</template>
`,p=`<script setup lang="ts">
import type { FileItem } from '@fantastic-admin/components'

const files = ref<FileItem[]>([
  { name: 'logo.svg', size: 1024 * 1024, url: 'https://fantastic-admin.hurui.me/logo.svg' },
])

function handleSuccess() {
  faToast.success('模拟上传成功')
}

function handleClick(fileItem: FileItem) {
  faToast.info(fileItem.name, {
    description: fileItem.url,
  })
}
<\/script>

<template>
  <FaFileUpload
    v-model="files"
    action="/fake/upload"
    :after-upload="(response) => response.data.url"
    multiple
    :ext="['png']"
    :size="200 * 1024"
    :max="5"
    @on-success="handleSuccess"
    @on-click="handleClick"
  />
</template>
`,m=`<script setup lang="ts">
import type { FileItem } from '@fantastic-admin/components'

const files = ref<FileItem[]>([])

function handleSuccess() {
  faToast.success('模拟上传成功')
}
<\/script>

<template>
  <FaFileUpload
    v-model="files"
    action="/fake/upload"
    :after-upload="(response) => response.data.url"
    multiple
    @on-success="handleSuccess"
  >
    <div>可以在这里显示自定义内容</div>
  </FaFileUpload>
</template>
`,h=e({__name:`index`,setup(e){let{t:h}=c();return(e,c)=>{let g=o,_=s;return r(),a(`div`,null,[n(g,{title:t(h)(`route.component.fileUpload`),description:`FaFileUpload`},null,8,[`title`]),n(_,{code:t(f)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(_,{code:t(p),title:`限制上传数量、大小、类型、点击事件`},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(_,{code:t(m),title:`自定义显示`},{default:i(()=>[n(d)]),_:1},8,[`code`])])}}});export{h as default};