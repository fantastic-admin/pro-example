
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e}from"./reactivity.esm-bundler-DQLEWij_.js";import{D as t,E as n,b as r,bt as i,k as a,mt as o,o as s,qt as c,v as l,wt as u}from"./runtime-core.esm-bundler-B5ds1qB8.js";import{T as d}from"./src-XafWzjth.js";import{n as f}from"./vue-i18n.runtime-QoH7TMem.js";import"./examples-DXhZs5lg.js";import{t as p}from"./page-header-DeO2joBq.js";import{t as m}from"./text-shiny-BK62pz0e.js";var h=[{title:`基础`,component:a({__name:`_basic`,setup(e){return(e,t)=>(o(),l(m,null,{default:c(()=>[...t[0]||(t[0]=[n(` Fantastic-admin `,-1)])]),_:1}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTextShiny from '../index.vue'
<\/script>

<template>
  <FaTextShiny>
    Fantastic-admin
  </FaTextShiny>
</template>
`},{title:`颜色`,component:a({__name:`_color`,setup(e){return(e,i)=>(o(),r(`div`,null,[i[2]||(i[2]=n(` 适合做 `,-1)),t(m,{class:`text-rose-600 font-bold dark:text-rose-400`},{default:c(()=>[...i[0]||(i[0]=[n(` 行内重点强调 `,-1)])]),_:1}),i[3]||(i[3]=n(` ，也可以通过文字颜色类控制成 `,-1)),t(m,{class:`text-emerald-600 font-bold dark:text-emerald-400`},{default:c(()=>[...i[1]||(i[1]=[n(` 品牌高亮 `,-1)])]),_:1}),i[4]||(i[4]=n(` 。 `,-1))]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTextShiny from '../index.vue'
<\/script>

<template>
  <div>
    适合做
    <FaTextShiny class="text-rose-600 font-bold dark:text-rose-400">
      行内重点强调
    </FaTextShiny>
    ，也可以通过文字颜色类控制成
    <FaTextShiny class="text-emerald-600 font-bold dark:text-emerald-400">
      品牌高亮
    </FaTextShiny>
    。
  </div>
</template>
`},{title:`速度与延迟`,component:a({__name:`_speed-delay`,setup(e){return(e,i)=>(o(),r(`div`,null,[t(m,{duration:1.1,delay:0,class:`text-4xl text-amber-600 tracking-tight font-black dark:text-amber-400`},{default:c(()=>[...i[0]||(i[0]=[n(` 快速扫光 `,-1)])]),_:1}),t(m,{duration:2.4,delay:.4,class:`text-4xl text-violet-600 tracking-tight font-black dark:text-violet-400`},{default:c(()=>[...i[1]||(i[1]=[n(` 更慢一点的节奏 `,-1)])]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTextShiny from '../index.vue'
<\/script>

<template>
  <div>
    <FaTextShiny
      :duration="1.1"
      :delay="0"
      class="text-4xl text-amber-600 tracking-tight font-black dark:text-amber-400"
    >
      快速扫光
    </FaTextShiny>
    <FaTextShiny
      :duration="2.4"
      :delay="0.4"
      class="text-4xl text-violet-600 tracking-tight font-black dark:text-violet-400"
    >
      更慢一点的节奏
    </FaTextShiny>
  </div>
</template>
`}],g=a({__name:`text_shiny`,setup(n){let{t:a}=f();return(n,f)=>{let m=p,g=d;return o(),r(`div`,null,[t(m,{title:e(a)(`route.componentPro.textShiny`),description:`FaTextShiny`},null,8,[`title`]),(o(!0),r(s,null,i(e(h),e=>(o(),l(g,{key:e.title,code:e.componentRaw,title:e.title},{default:c(()=>[(o(),l(u(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{g as default};