
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-CNfuk_zw.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-Bwmfy0gY.js";import{t as u}from"./_demo2-BqpZ0JlR.js";import{t as d}from"./_demo3-CYFuLKwx.js";var f=`<template>
  <div class="space-x-4">
    <FaImagePreview src="https://fantastic-admin.hurui.me/logo.svg" />
    <FaImagePreview src="http://www.baidu.com" class="size-25" />
    <FaImagePreview src="http://www.baidu.com">
      <template #error>
        <div class="text-sm text-secondary-foreground/50 flex-col-center">
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
`,p=`<script setup lang="ts">
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
`,m=`<script setup lang="ts">
const modal = ref(false)
<\/script>

<template>
  <div>
    <FaButton @click="modal = true">
      打开
    </FaButton>
    <FaModal
      v-model="modal"
      title="FaModal 中的图片预览"
      description="点击图片后仍可继续进入全屏预览"
      :footer="false"
      class="sm:max-w-3xl"
      content-class="min-h-auto"
    >
      <div class="py-4 flex-center">
        <FaImagePreview src="https://fantastic-admin.hurui.me/logo.svg" />
      </div>
    </FaModal>
  </div>
</template>
`,h=e({__name:`index`,setup(e){let{t:h}=c();return(e,c)=>{let g=o,_=s;return r(),a(`div`,null,[n(g,{title:t(h)(`route.component.imagePreview`),description:`FaImagePreview`},null,8,[`title`]),n(_,{code:t(f)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(_,{code:t(p),title:`函数式调用`},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(_,{code:t(m),title:`在 FaModal 里展示`},{default:i(()=>[n(d)]),_:1},8,[`code`])])}}});export{h as default};