
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e,C as t}from"./reactivity.esm-bundler-DQLEWij_.js";import{D as n,b as r,bt as i,k as a,mt as o,o as s,qt as c,v as l,wt as u}from"./runtime-core.esm-bundler-B5ds1qB8.js";import{T as d,tt as f}from"./src-XafWzjth.js";import{n as p}from"./vue-i18n.runtime-QoH7TMem.js";import"./examples-DXhZs5lg.js";import{t as m}from"./page-header-DeO2joBq.js";var h=a({__name:`_basic`,setup(e){let n=t(`1`),r=[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`},{label:`Option 3`,value:`3`}];return(e,t)=>(o(),l(f,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),options:r},null,8,[`modelValue`]))}}),g=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSelect from '../index.vue'

const select = ref('1')

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]
<\/script>

<template>
  <FaSelect v-model="select" :options="options" />
</template>
`,_={class:`space-y-2`},v=a({__name:`_disabled`,setup(e){let i=t(`1`),a=t(`1`),s=[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`,disabled:!0},{label:`Option 3`,value:`3`}];return(e,t)=>(o(),r(`div`,_,[n(f,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e),options:s,disabled:``},null,8,[`modelValue`]),n(f,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),options:s},null,8,[`modelValue`])]))}}),y=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSelect from '../index.vue'

const disabledSelect = ref('1')
const optionDisabledSelect = ref('1')

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2', disabled: true },
  { label: 'Option 3', value: '3' },
]
<\/script>

<template>
  <div class="space-y-2">
    <FaSelect v-model="disabledSelect" :options="options" disabled />
    <FaSelect v-model="optionDisabledSelect" :options="options" />
  </div>
</template>
`,b=a({__name:`_group`,setup(e){let n=t(`1`),r=[{label:`Group 1`,options:[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`}]},{label:`Group 2`,options:[{label:`Option 3`,value:`3`},{label:`Option 4`,value:`4`}]}];return(e,t)=>(o(),l(f,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),options:r},null,8,[`modelValue`]))}}),x=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSelect from '../index.vue'

const select = ref('1')

const options = [
  {
    label: 'Group 1',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
  },
  {
    label: 'Group 2',
    options: [
      { label: 'Option 3', value: '3' },
      { label: 'Option 4', value: '4' },
    ],
  },
]
<\/script>

<template>
  <FaSelect v-model="select" :options="options" />
</template>
`,S=a({__name:`_multiple`,setup(e){let n=t([]),r=[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`},{label:`Option 3`,value:`3`}];return(e,t)=>(o(),l(f,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),options:r,multiple:``},null,8,[`modelValue`]))}}),C=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSelect from '../index.vue'

const select = ref<unknown[]>([])

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]
<\/script>

<template>
  <FaSelect
    v-model="select"
    :options="options"
    multiple
  />
</template>
`,w={class:`space-y-2`},T=[{title:`基础`,component:h,componentRaw:g},{title:`组`,component:b,componentRaw:x},{title:`多选`,component:S,componentRaw:C},{title:`定位模式`,component:a({__name:`_position`,setup(e){let i=t(`2`),a=t(`2`),s=[{label:`Option 1`,value:`1`},{label:`Option 2`,value:`2`},{label:`Option 3`,value:`3`}];return(e,t)=>(o(),r(`div`,w,[n(f,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e),options:s,position:`popper`},null,8,[`modelValue`]),n(f,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=e=>a.value=e),options:s,position:`item-aligned`},null,8,[`modelValue`])]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaSelect from '../index.vue'

const popperValue = ref('2')
const itemAlignedValue = ref('2')

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]
<\/script>

<template>
  <div class="space-y-2">
    <FaSelect
      v-model="popperValue"
      :options="options"
      position="popper"
    />
    <FaSelect
      v-model="itemAlignedValue"
      :options="options"
      position="item-aligned"
    />
  </div>
</template>
`},{title:`禁用`,component:v,componentRaw:y}],E=a({__name:`select`,setup(t){let{t:a}=p();return(t,f)=>{let p=m,h=d;return o(),r(`div`,null,[n(p,{title:e(a)(`route.component.select`),description:`FaSelect`},null,8,[`title`]),(o(!0),r(s,null,i(e(T),e=>(o(),l(h,{key:e.title,code:e.componentRaw,title:e.title},{default:c(()=>[(o(),l(u(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{E as default};