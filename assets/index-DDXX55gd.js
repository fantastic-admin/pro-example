
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as s}from"./index.vue_vue_type_script_setup_true_lang-QJtPTUd7.js";import{d as c,e as m,f as r,g as n,a7 as p,i as t,k as o,U as a}from"./index-DODNO_Fi.js";import l from"./_demo1-BEjz_R52.js";import{_ as u}from"./_demo2.vue_vue_type_script_setup_true_lang-BckVCoV0.js";import"./index-yfpwFnwn.js";import"./preview.vue_vue_type_script_setup_true_lang-DITPmbuN.js";import"./index-CQAeKKDl.js";import"./index-CYHmbhYR.js";const d=`<template>
  <div class="space-x-4">
    <FaImagePreview src="https://fantastic-admin.hurui.me/logo.svg" />
    <FaImagePreview src="http://www.baidu.com" class="size-25" />
    <FaImagePreview src="http://www.baidu.com">
      <template #error>
        <div class="flex-col-center text-sm text-secondary-foreground/50">
          <div>
            自定义错误信息
          </div>
          <div>
            图片加载失败
          </div>
        </div>
      </template>
    </FaImagePreview>
  </div>
</template>
`,f=`<script setup lang="ts">
import { useFaImagePreview } from '@/ui/components/FaImagePreview'

const { open } = useFaImagePreview()

function openSingle() {
  open('https://fantastic-admin.hurui.me/logo.svg')
}

function openMulti() {
  open([
    'https://fantastic-admin.hurui.me/logo.svg',
    'https://fantastic-mobile.hurui.me/logo.png',
  ])
}

function openMulti2() {
  open([
    'https://fantastic-admin.hurui.me/logo.svg',
    'https://fantastic-mobile.hurui.me/logo.png',
  ], 1)
}
<\/script>

<template>
  <div class="space-x-4">
    <FaButton @click="openSingle">
      预览单张
    </FaButton>
    <FaButton @click="openMulti">
      预览多张
    </FaButton>
    <FaButton @click="openMulti2">
      预览多张（初始预览第2张）
    </FaButton>
  </div>
</template>
`,g=c({__name:"index",setup(v){return(_,w)=>{const i=p,e=s;return r(),m("div",null,[n(i,{title:"图片预览",description:"FaImagePreview"}),n(e,{code:o(d)},{default:t(()=>[n(l)]),_:1},8,["code"]),n(e,{code:o(f),title:"函数式调用"},{default:t(()=>[n(u)]),_:1},8,["code"])])}}});typeof a=="function"&&a(g);export{g as default};
