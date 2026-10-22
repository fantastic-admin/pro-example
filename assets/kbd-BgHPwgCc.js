
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e}from"./reactivity.esm-bundler-DQLEWij_.js";import{D as t,E as n,b as r,bt as i,k as a,mt as o,o as s,qt as c,v as l,wt as u}from"./runtime-core.esm-bundler-B5ds1qB8.js";import{T as d}from"./src-XafWzjth.js";import{n as f}from"./vue-i18n.runtime-QoH7TMem.js";import"./examples-DXhZs5lg.js";import{t as p}from"./kbd-DA3AEfjf.js";import{t as m}from"./KbdGroup-hK2oJAZc.js";import{t as h}from"./page-header-DeO2joBq.js";var g={class:`flex flex-col gap-2`},_=a({__name:`_basic`,setup(e){return(e,i)=>(o(),r(`div`,g,[t(p,null,{default:c(()=>[...i[0]||(i[0]=[n(`Ctrl`,-1)])]),_:1}),t(p,null,{default:c(()=>[...i[1]||(i[1]=[n(`Alt`,-1)])]),_:1}),t(p,null,{default:c(()=>[...i[2]||(i[2]=[n(`Shift`,-1)])]),_:1})]))}}),v=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaKbd from '../index.vue'
<\/script>

<template>
  <div class="flex flex-col gap-2">
    <FaKbd>Ctrl</FaKbd>
    <FaKbd>Alt</FaKbd>
    <FaKbd>Shift</FaKbd>
  </div>
</template>
`,y={class:`flex flex-col gap-2`},b=[{title:`基础`,component:_,componentRaw:v},{title:`组合`,component:a({__name:`_group-basic`,setup(e){return(e,i)=>(o(),r(`div`,y,[t(m,null,{default:c(()=>[t(p,null,{default:c(()=>[...i[0]||(i[0]=[n(`⌘`,-1)])]),_:1}),t(p,null,{default:c(()=>[...i[1]||(i[1]=[n(`⇧`,-1)])]),_:1}),t(p,null,{default:c(()=>[...i[2]||(i[2]=[n(`K`,-1)])]),_:1})]),_:1}),t(m,null,{default:c(()=>[t(p,null,{default:c(()=>[...i[3]||(i[3]=[n(`Ctrl`,-1)])]),_:1}),t(p,null,{default:c(()=>[...i[4]||(i[4]=[n(`Alt`,-1)])]),_:1}),t(p,null,{default:c(()=>[...i[5]||(i[5]=[n(`Delete`,-1)])]),_:1})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaKbd from '../index.vue'
import FaKbdGroup from '../KbdGroup.vue'
<\/script>

<template>
  <div class="flex flex-col gap-2">
    <FaKbdGroup>
      <FaKbd>⌘</FaKbd>
      <FaKbd>⇧</FaKbd>
      <FaKbd>K</FaKbd>
    </FaKbdGroup>
    <FaKbdGroup>
      <FaKbd>Ctrl</FaKbd>
      <FaKbd>Alt</FaKbd>
      <FaKbd>Delete</FaKbd>
    </FaKbdGroup>
  </div>
</template>
`}],x=a({__name:`kbd`,setup(n){let{t:a}=f();return(n,f)=>{let p=h,m=d;return o(),r(`div`,null,[t(p,{title:e(a)(`route.component.kbd`),description:`FaKbd / FaKbdGroup`},null,8,[`title`]),(o(!0),r(s,null,i(e(b),e=>(o(),l(m,{key:e.title,code:e.componentRaw,title:e.title},{default:c(()=>[(o(),l(u(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{x as default};