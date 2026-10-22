
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e,C as t,wt as n,yt as r}from"./reactivity.esm-bundler-DQLEWij_.js";import{D as i,_ as a,b as o,bt as s,g as c,k as l,mt as u,o as d,qt as f,v as p,wt as m}from"./runtime-core.esm-bundler-B5ds1qB8.js";import{T as h}from"./src-XafWzjth.js";import{n as g}from"./vue-i18n.runtime-QoH7TMem.js";import{bt as _}from"./examples-DXhZs5lg.js";import{t as v}from"./page-header-DeO2joBq.js";var y={class:`gap-4 grid`},b={class:`text-sm text-muted-foreground`},x=l({__name:`_basic`,setup(e){let r=t(`comfortable`),s=[{label:`默认`,value:`default`},{label:`舒适`,value:`comfortable`},{label:`紧凑`,value:`compact`}];return(e,t)=>(u(),o(`div`,y,[i(_,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),options:s},null,8,[`modelValue`]),i(_,{modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=e=>r.value=e),options:s,class:`flex`},null,8,[`modelValue`]),a(`div`,b,` 当前值：`+n(r.value),1)]))}}),S=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaRadioGroup from '../index.vue'

const value = ref('comfortable')

const options = [
  { label: '默认', value: 'default' },
  { label: '舒适', value: 'comfortable' },
  { label: '紧凑', value: 'compact' },
]
<\/script>

<template>
  <div class="gap-4 grid">
    <FaRadioGroup v-model="value" :options="options" />
    <FaRadioGroup v-model="value" :options="options" class="flex" />
    <div class="text-sm text-muted-foreground">
      当前值：{{ value }}
    </div>
  </div>
</template>
`,C={class:`gap-4 grid`},w={class:`gap-1 grid min-w-0`},T={class:`flex gap-2 items-center`},E={class:`text-sm font-medium truncate`},D={class:`text-xs text-muted-foreground px-1.5 py-0.5 rounded bg-muted`},O={class:`text-xs text-muted-foreground leading-5`},k={class:`text-sm text-muted-foreground`},A=l({__name:`_custom-option`,setup(e){let s=t(`balanced`),c=[{label:`专注模式`,value:`focus`,badge:`录入`,description:`突出主任务，弱化辅助信息，适合录入和审批场景。`},{label:`平衡模式`,value:`balanced`,badge:`推荐`,description:`信息密度与可读性保持平衡，适合作为默认配置。`},{label:`高密度模式`,value:`dense`,badge:`大屏`,description:`在大屏中同时承载更多信息，适合运营与监控看板。`}];return(e,t)=>(u(),o(`div`,C,[i(_,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=e=>s.value=e),options:c,class:`gap-2 md:grid-cols-3`,"option-class":`rounded-xl border border-transparent px-1 py-1`},{option:f(({option:e,checked:t,disabled:i})=>[a(`div`,{class:r([`px-4 py-3 border rounded-xl flex gap-3 w-full transition-colors items-start justify-between`,[t?`border-primary bg-primary/5`:`border-border hover:border-primary/40`,i&&`opacity-60`]])},[a(`div`,w,[a(`div`,T,[a(`span`,E,n(e.label),1),a(`span`,D,n(e.badge),1)]),a(`div`,O,n(e.description),1)]),a(`span`,{class:r([`text-xs font-medium shrink-0`,t?`text-primary`:`text-muted-foreground`])},n(t?`已选中`:`可选择`),3)],2)]),_:1},8,[`modelValue`]),a(`div`,k,` 当前值：`+n(s.value),1)]))}}),j=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { ref } from 'vue'
import FaRadioGroup from '../index.vue'

const value = ref('balanced')

const options = [
  {
    label: '专注模式',
    value: 'focus',
    badge: '录入',
    description: '突出主任务，弱化辅助信息，适合录入和审批场景。',
  },
  {
    label: '平衡模式',
    value: 'balanced',
    badge: '推荐',
    description: '信息密度与可读性保持平衡，适合作为默认配置。',
  },
  {
    label: '高密度模式',
    value: 'dense',
    badge: '大屏',
    description: '在大屏中同时承载更多信息，适合运营与监控看板。',
  },
]
<\/script>

<template>
  <div class="gap-4 grid">
    <FaRadioGroup
      v-model="value"
      :options="options"
      class="gap-2 md:grid-cols-3"
      option-class="rounded-xl border border-transparent px-1 py-1"
    >
      <template #option="{ option, checked, disabled }">
        <div
          class="px-4 py-3 border rounded-xl flex gap-3 w-full transition-colors items-start justify-between"
          :class="[
            checked ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/40',
            disabled && 'opacity-60',
          ]"
        >
          <div class="gap-1 grid min-w-0">
            <div class="flex gap-2 items-center">
              <span class="text-sm font-medium truncate">{{ option.label }}</span>
              <span class="text-xs text-muted-foreground px-1.5 py-0.5 rounded bg-muted">
                {{ option.badge }}
              </span>
            </div>
            <div class="text-xs text-muted-foreground leading-5">
              {{ option.description }}
            </div>
          </div>
          <span class="text-xs font-medium shrink-0" :class="checked ? 'text-primary' : 'text-muted-foreground'">
            {{ checked ? '已选中' : '可选择' }}
          </span>
        </div>
      </template>
    </FaRadioGroup>
    <div class="text-sm text-muted-foreground">
      当前值：{{ value }}
    </div>
  </div>
</template>
`,M={class:`gap-4 grid`},N={class:`text-sm text-muted-foreground`},P=[{title:`基础`,component:x,componentRaw:S},{title:`带描述和禁用态`,component:l({__name:`_description-disabled`,setup(e){let r=t(`growth`),s=[{label:`创业版`,value:`starter`,description:`适合 1-10 人小团队，保留核心能力。`},{label:`成长版`,value:`growth`,description:`适合多角色协作，支持审批与审计流程。`},{label:`企业版`,value:`enterprise`,description:`高级安全策略与 SSO 即将开放。`,disabled:!0}],l=c(()=>s.find(e=>e.value===r.value)?.label??``);return(e,t)=>(u(),o(`div`,M,[i(_,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),options:s},null,8,[`modelValue`]),a(`div`,N,` 已选套餐：`+n(l.value),1)]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import { computed, ref } from 'vue'
import FaRadioGroup from '../index.vue'

const value = ref('growth')

const options = [
  {
    label: '创业版',
    value: 'starter',
    description: '适合 1-10 人小团队，保留核心能力。',
  },
  {
    label: '成长版',
    value: 'growth',
    description: '适合多角色协作，支持审批与审计流程。',
  },
  {
    label: '企业版',
    value: 'enterprise',
    description: '高级安全策略与 SSO 即将开放。',
    disabled: true,
  },
]

const currentLabel = computed(() =>
  options.find(option => option.value === value.value)?.label ?? '',
)
<\/script>

<template>
  <div class="gap-4 grid">
    <FaRadioGroup v-model="value" :options="options" />
    <div class="text-sm text-muted-foreground">
      已选套餐：{{ currentLabel }}
    </div>
  </div>
</template>
`},{title:`自定义选项内容`,component:A,componentRaw:j}],F=l({__name:`radio_group`,setup(t){let{t:n}=g();return(t,r)=>{let a=v,c=h;return u(),o(`div`,null,[i(a,{title:e(n)(`route.component.radioGroup`),description:`FaRadioGroup`},null,8,[`title`]),(u(!0),o(d,null,s(e(P),e=>(u(),p(c,{key:e.title,code:e.componentRaw,title:e.title},{default:f(()=>[(u(),p(m(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{F as default};