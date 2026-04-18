
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-CNfuk_zw.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-jvgwXaqb.js";import{t as u}from"./_demo2-CyzfAyrm2.js";var d=`<template>
  <FaPopover>
    <FaButton>
      浮动面板
      <FaIcon name="i-ep:caret-bottom" />
    </FaButton>
    <template #panel>
      <div class="flex h-30 w-60 items-center justify-center">
        面板内容
      </div>
    </template>
  </FaPopover>
</template>
`,f=`<script setup lang="ts">
const open = ref(false)
<\/script>

<template>
  <FaPopover v-model:open="open">
    <FaButton>
      浮动面板
      <FaIcon name="i-ep:caret-bottom" />
    </FaButton>
    <template #panel>
      <div class="flex h-30 w-60 items-center justify-center">
        <FaButton @click="open = false">
          关闭
        </FaButton>
      </div>
    </template>
  </FaPopover>
</template>
`,p=e({__name:`index`,setup(e){let{t:p}=c();return(e,c)=>{let m=o,h=s;return r(),a(`div`,null,[n(m,{title:t(p)(`route.component.popover`),description:`FaPopover`},null,8,[`title`]),n(h,{code:t(d)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(h,{title:`手动关闭`,code:t(f)},{default:i(()=>[n(u)]),_:1},8,[`code`])])}}});export{p as default};