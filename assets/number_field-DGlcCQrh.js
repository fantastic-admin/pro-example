
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e,C as t}from"./reactivity.esm-bundler-DQLEWij_.js";import{D as n,b as r,bt as i,k as a,mt as o,o as s,qt as c,v as l,wt as u}from"./runtime-core.esm-bundler-B5ds1qB8.js";import{T as d}from"./src-XafWzjth.js";import{n as f}from"./vue-i18n.runtime-QoH7TMem.js";import"./examples-DXhZs5lg.js";import{t as p}from"./number-field-CIbQRPUl.js";import{t as m}from"./page-header-DeO2joBq.js";var h=[{title:`基础`,component:a({__name:`_basic`,setup(e){let n=t(0);return(e,t)=>(o(),l(p,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e)},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaNumberField from '../index.vue'

const value = ref(0)
<\/script>

<template>
  <FaNumberField v-model="value" />
</template>
`},{title:`最大值/最小值`,component:a({__name:`_min-max`,setup(e){let n=t(5);return(e,t)=>(o(),l(p,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),min:0,max:10},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaNumberField from '../index.vue'

const value = ref(5)
<\/script>

<template>
  <FaNumberField v-model="value" :min="0" :max="10" />
</template>
`},{title:`步长`,component:a({__name:`_step`,setup(e){let n=t(0);return(e,t)=>(o(),l(p,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),step:.1},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaNumberField from '../index.vue'

const value = ref(0)
<\/script>

<template>
  <FaNumberField v-model="value" :step="0.1" />
</template>
`},{title:`禁用`,component:a({__name:`_disabled`,setup(e){let n=t(50);return(e,t)=>(o(),l(p,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),disabled:``},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaNumberField from '../index.vue'

const value = ref(50)
<\/script>

<template>
  <FaNumberField v-model="value" disabled />
</template>
`}],g=a({__name:`number_field`,setup(t){let{t:a}=f();return(t,f)=>{let p=m,g=d;return o(),r(`div`,null,[n(p,{title:e(a)(`route.component.numberField`),description:`FaNumberField`},null,8,[`title`]),(o(!0),r(s,null,i(e(h),e=>(o(),l(g,{key:e.title,code:e.componentRaw,title:e.title},{default:c(()=>[(o(),l(u(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{g as default};