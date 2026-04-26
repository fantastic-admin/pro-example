
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-C_d7Trg8.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-CZL9SSlp.js";import{t as u}from"./_demo2-C-kA6rgV.js";import{t as d}from"./_demo3-JBsDpNsg.js";var f=`<script setup lang="ts">
const value = ref('')
<\/script>

<template>
  <FaInput v-model="value" placeholder="请输入内容" />
</template>
`,p=`<script setup lang="ts">
const value = ref('')
<\/script>

<template>
  <FaInput v-model="value" placeholder="请输入密码" type="password" />
</template>
`,m=`<script setup lang="ts">
const value = ref('')
const value2 = ref('')
<\/script>

<template>
  <div class="flex flex-col gap-2">
    <FaInput v-model="value" placeholder="example.com" input-class="ps-1">
      <template #start>
        https://
      </template>
      <template #end>
        <FaTooltip text="可输入域名、IP、端口、URL 等">
          <FaIcon name="i-ri:question-line" class="text-base text-orange cursor-help" />
        </FaTooltip>
      </template>
    </FaInput>
    <FaInput v-model="value2" placeholder="请输入内容" align="block" input-class="shadow-none" end-class="justify-end">
      <template #start>
        标题：
      </template>
      <template #end>
        <FaButton variant="ghost" size="sm" class="px-2 h-8">
          提交
        </FaButton>
      </template>
    </FaInput>
  </div>
</template>
`,h=e({__name:`index`,setup(e){let{t:h}=c();return(e,c)=>{let g=o,_=s;return r(),a(`div`,null,[n(g,{title:t(h)(`route.component.input`),description:`FaInput`},null,8,[`title`]),n(_,{code:t(f)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(_,{title:`密码框`,code:t(p)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(_,{title:`插槽`,code:t(m)},{default:i(()=>[n(d)]),_:1},8,[`code`])])}}});export{h as default};