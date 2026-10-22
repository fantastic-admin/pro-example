
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e,C as t}from"./reactivity.esm-bundler-DQLEWij_.js";import{D as n,b as r,bt as i,k as a,mt as o,o as s,qt as c,v as l,wt as u}from"./runtime-core.esm-bundler-B5ds1qB8.js";import{T as d}from"./src-XafWzjth.js";import{n as f}from"./vue-i18n.runtime-QoH7TMem.js";import"./examples-DXhZs5lg.js";import{t as p}from"./slider-BcWt6Cum.js";import{t as m}from"./page-header-DeO2joBq.js";var h={class:`space-y-6`},g=a({__name:`_alignment`,setup(e){let i=t([30]),a=t([30]);return(e,t)=>(o(),r(`div`,h,[n(p,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e),"thumb-alignment":`contain`},null,8,[`modelValue`]),n(p,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),"thumb-alignment":`overflow`},null,8,[`modelValue`])]))}}),_=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../index.vue'

const containValue = ref<number[]>([30])
const overflowValue = ref<number[]>([30])
<\/script>

<template>
  <div class="space-y-6">
    <FaSlider v-model="containValue" thumb-alignment="contain" />
    <FaSlider v-model="overflowValue" thumb-alignment="overflow" />
  </div>
</template>
`,v=a({__name:`_basic`,setup(e){let n=t([30]);return(e,t)=>(o(),l(p,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e)},null,8,[`modelValue`]))}}),y=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../index.vue'

const value = ref<number[]>([30])
<\/script>

<template>
  <FaSlider v-model="value" />
</template>
`,b={class:`space-y-6`},x=a({__name:`_inverted`,setup(e){let i=t([30]),a=t([30]);return(e,t)=>(o(),r(`div`,b,[n(p,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e)},null,8,[`modelValue`]),n(p,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),inverted:``},null,8,[`modelValue`])]))}}),S=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../index.vue'

const normalValue = ref<number[]>([30])
const invertedValue = ref<number[]>([30])
<\/script>

<template>
  <div class="space-y-6">
    <FaSlider v-model="normalValue" />
    <FaSlider v-model="invertedValue" inverted />
  </div>
</template>
`,C=a({__name:`_range`,setup(e){let n=t([40]);return(e,t)=>(o(),l(p,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),min:20,max:80},null,8,[`modelValue`]))}}),w=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../index.vue'

const value = ref<number[]>([40])
<\/script>

<template>
  <FaSlider v-model="value" :min="20" :max="80" />
</template>
`,T=a({__name:`_step`,setup(e){let n=t([50]);return(e,t)=>(o(),l(p,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),step:10},null,8,[`modelValue`]))}}),E=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../index.vue'

const value = ref<number[]>([50])
<\/script>

<template>
  <FaSlider v-model="value" :step="10" />
</template>
`,D={class:`space-y-6`},O=[{title:`基础`,component:v,componentRaw:y},{title:`垂直`,component:a({__name:`_vertical`,setup(e){let n=t([30]);return(e,t)=>(o(),l(p,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),orientation:`vertical`,class:`data-[orientation=vertical]:h-100`},null,8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../index.vue'

const value = ref<number[]>([30])
<\/script>

<template>
  <FaSlider v-model="value" orientation="vertical" class="data-[orientation=vertical]:h-100" />
</template>
`},{title:`反转`,component:x,componentRaw:S},{title:`最大值/最小值`,component:C,componentRaw:w},{title:`步长`,component:T,componentRaw:E},{title:`对齐方式`,component:g,componentRaw:_},{title:`提示`,component:a({__name:`_tooltip`,setup(e){let i=t([30]),a=t([70]);return(e,t)=>(o(),r(`div`,D,[n(p,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e)},null,8,[`modelValue`]),n(p,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),tooltip:!1},null,8,[`modelValue`])]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSlider from '../index.vue'

const withTooltipValue = ref<number[]>([30])
const withoutTooltipValue = ref<number[]>([70])
<\/script>

<template>
  <div class="space-y-6">
    <FaSlider v-model="withTooltipValue" />
    <FaSlider v-model="withoutTooltipValue" :tooltip="false" />
  </div>
</template>
`}],k=a({__name:`slider`,setup(t){let{t:a}=f();return(t,f)=>{let p=m,h=d;return o(),r(`div`,null,[n(p,{title:e(a)(`route.component.slider`),description:`FaSlider`},null,8,[`title`]),(o(!0),r(s,null,i(e(O),e=>(o(),l(h,{key:e.title,code:e.componentRaw,title:e.title},{default:c(()=>[(o(),l(u(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{k as default};