
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e}from"./reactivity.esm-bundler-DQLEWij_.js";import{D as t,E as n,_ as r,b as i,bt as a,k as o,mt as s,o as c,qt as l,v as u,wt as d}from"./runtime-core.esm-bundler-B5ds1qB8.js";import{T as f}from"./src-XafWzjth.js";import{n as p}from"./vue-i18n.runtime-QoH7TMem.js";import"./examples-DXhZs5lg.js";import{t as m}from"./page-header-DeO2joBq.js";import{c as h}from"./index-pN8_IqyG.js";var g=[{title:`基础`,component:o({__name:`_basic`,setup(e){return(e,a)=>(s(),i(`div`,null,[a[1]||(a[1]=r(`div`,{class:`text-sm text-muted-foreground`},` 上方内容 `,-1)),t(h),a[2]||(a[2]=r(`div`,{class:`text-sm text-muted-foreground`},` 下方内容 `,-1)),t(h,null,{default:l(()=>[...a[0]||(a[0]=[n(` 分割文字 `,-1)])]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaDivider from '../index.vue'
<\/script>

<template>
  <div>
    <div class="text-sm text-muted-foreground">
      上方内容
    </div>
    <FaDivider />
    <div class="text-sm text-muted-foreground">
      下方内容
    </div>
    <FaDivider>
      分割文字
    </FaDivider>
  </div>
</template>
`},{title:`位置`,component:o({__name:`_position`,setup(e){return(e,r)=>(s(),i(`div`,null,[t(h,null,{default:l(()=>[...r[0]||(r[0]=[n(` center `,-1)])]),_:1}),t(h,{position:`start`},{default:l(()=>[...r[1]||(r[1]=[n(` start `,-1)])]),_:1}),t(h,{position:`end`},{default:l(()=>[...r[2]||(r[2]=[n(` end `,-1)])]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaDivider from '../index.vue'
<\/script>

<template>
  <div>
    <FaDivider>
      center
    </FaDivider>
    <FaDivider position="start">
      start
    </FaDivider>
    <FaDivider position="end">
      end
    </FaDivider>
  </div>
</template>
`}],_=o({__name:`divider`,setup(n){let{t:r}=p();return(n,o)=>{let p=m,h=f;return s(),i(`div`,null,[t(p,{title:e(r)(`route.component.divider`),description:`FaDivider`},null,8,[`title`]),(s(!0),i(c,null,a(e(g),e=>(s(),u(h,{key:e.title,code:e.componentRaw,title:e.title},{default:l(()=>[(s(),u(d(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{_ as default};