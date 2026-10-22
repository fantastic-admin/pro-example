
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e,O as t,wt as n,yt as r}from"./reactivity.esm-bundler-DQLEWij_.js";import{$ as i,D as a,E as o,Ft as s,Ht as c,Lt as l,Pt as u,_ as d,b as f,bt as p,g as m,k as h,mt as g,o as _,qt as v,v as y,wt as b,xt as x,y as S}from"./runtime-core.esm-bundler-B5ds1qB8.js";import{C,w}from"./runtime-dom.esm-bundler-qIu4dgW4.js";import{Cn as ee,T,gt as E,ht as D,un as O,vt as k}from"./src-XafWzjth.js";import{n as A}from"./vue-i18n.runtime-QoH7TMem.js";import"./examples-DXhZs5lg.js";import{t as j}from"./page-header-DeO2joBq.js";var M=[`dir`],N=[`tabindex`,`role`,`aria-checked`,`aria-disabled`,`onClick`,`onKeydown`],P={class:`gap-1 grid min-w-0`},F={class:`truncate`},I={key:0,class:`text-xs text-muted-foreground leading-5 font-normal`},L=h({name:`BuiltInCheckboxGroup`,__name:`CheckboxGroup`,props:i({options:{},disabled:{type:Boolean},min:{},max:{},dir:{},class:{type:[Boolean,null,String,Object,Array]},optionClass:{type:[Boolean,null,String,Object,Array]},itemClass:{type:[Boolean,null,String,Object,Array]},labelClass:{type:[Boolean,null,String,Object,Array]}},{modelValue:{default:()=>[]},modelModifiers:{}}),emits:i([`change`],[`update:modelValue`]),setup(t,{emit:i}){let o=t,h=i,y=l(),b=s(t,`modelValue`),T=ee({observe:!0}),D=m(()=>o.dir??(T.value===`rtl`?`rtl`:`ltr`)),A=u(),j=m(()=>b.value.length);c(b,e=>{h(`change`,e)});function L(e,t){return e.id||`${A}-${t}`}function R(e,t){return e.id?e.id:typeof e.value==`string`||typeof e.value==`number`?e.value:t}function z(e){if(o.disabled||e.disabled)return!0;let t=V(e);return!!(t&&o.min!==void 0&&j.value<=o.min||!t&&o.max!==void 0&&j.value>=o.max)}function B(e){return b.value.findIndex(t=>Object.is(t,e.value))}function V(e){return B(e)>-1}function H(e,t){let n=[...b.value],r=n.findIndex(t=>Object.is(t,e.value));t?r===-1&&n.push(e.value):r>-1&&n.splice(r,1),b.value=n}function U(e,t){z(e)||H(e,t===!0)}function W(e){y.option&&!z(e)&&H(e,!V(e))}function G(e){y.option&&!z(e)&&H(e,!V(e))}return(t,i)=>(g(),f(`div`,{role:`group`,dir:D.value,class:r(e(O)(`grid gap-3`,o.class))},[(g(!0),f(_,null,p(o.options,(i,s)=>(g(),f(`div`,{key:R(i,s),tabindex:y.option&&!z(i)?0:void 0,role:y.option?`checkbox`:void 0,"aria-checked":y.option?`${V(i)}`:void 0,"aria-disabled":y.option?`${z(i)}`:void 0,class:r(e(O)(`flex gap-2`,i.description?`items-start`:`items-center`,y.option&&`outline-none focus-visible:ring-ring/50 focus-visible:ring-3 rounded-xl`,o.optionClass)),onClick:e=>W(i),onKeydown:[C(w(e=>G(i),[`prevent`]),[`enter`]),C(w(e=>G(i),[`prevent`]),[`space`])]},[a(e(E),{id:L(i,s),"model-value":V(i),disabled:z(i),class:r(e(O)(o.itemClass,y.option&&`hidden`)),"onUpdate:modelValue":e=>U(i,e)},null,8,[`id`,`model-value`,`disabled`,`class`,`onUpdate:modelValue`]),a(e(k),{for:y.option?void 0:L(i,s),class:r(e(O)(`min-w-0 flex-1 cursor-pointer gap-0`,i.description?`items-start`:`items-center`,z(i)&&`cursor-not-allowed opacity-60`,o.labelClass))},{default:v(()=>[x(t.$slots,`option`,{id:L(i,s),option:i,checked:V(i),disabled:z(i)},()=>[d(`div`,P,[d(`span`,F,n(i.label),1),i.description?(g(),f(`span`,I,n(i.description),1)):S(``,!0)])])]),_:2},1032,[`for`,`class`])],42,N))),128))],10,M))}}),R=h({__name:`_basic`,setup(e){let n=t(!1);return(e,t)=>(g(),y(D,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e)},{default:v(()=>[...t[1]||(t[1]=[o(` 同意协议 `,-1)])]),_:1},8,[`modelValue`]))}}),z=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckbox from '../index.vue'

type CheckboxValue = boolean | 'indeterminate' | undefined

const checked = shallowRef<CheckboxValue>(false)
<\/script>

<template>
  <FaCheckbox v-model="checked">
    同意协议
  </FaCheckbox>
</template>
`,B=h({__name:`_custom-style`,setup(e){let n=t(!0);return(e,t)=>(g(),y(D,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),class:`px-3 py-2 border border-primary/20 rounded-lg bg-primary/5 gap-3`,"item-class":`size-5 rounded-md border-primary`,"label-class":`text-primary font-medium w-full`},{default:v(()=>[...t[1]||(t[1]=[o(` 开启精细化配置 `,-1)])]),_:1},8,[`modelValue`]))}}),V=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckbox from '../index.vue'

type CheckboxValue = boolean | 'indeterminate' | undefined

const checked = shallowRef<CheckboxValue>(true)
<\/script>

<template>
  <FaCheckbox
    v-model="checked"
    class="px-3 py-2 border border-primary/20 rounded-lg bg-primary/5 gap-3"
    item-class="size-5 rounded-md border-primary"
    label-class="text-primary font-medium w-full"
  >
    开启精细化配置
  </FaCheckbox>
</template>
`,H={class:`flex flex-col gap-3`},U=h({__name:`_disabled`,setup(e){let n=t(!1),r=t(!0);return(e,t)=>(g(),f(`div`,H,[a(D,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),disabled:``},{default:v(()=>[...t[2]||(t[2]=[o(` 禁用未选中 `,-1)])]),_:1},8,[`modelValue`]),a(D,{modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=e=>r.value=e),disabled:``},{default:v(()=>[...t[3]||(t[3]=[o(` 禁用已选中 `,-1)])]),_:1},8,[`modelValue`])]))}}),W=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckbox from '../index.vue'

type CheckboxValue = boolean | 'indeterminate' | undefined

const unchecked = shallowRef<CheckboxValue>(false)
const checked = shallowRef<CheckboxValue>(true)
<\/script>

<template>
  <div class="flex flex-col gap-3">
    <FaCheckbox v-model="unchecked" disabled>
      禁用未选中
    </FaCheckbox>
    <FaCheckbox v-model="checked" disabled>
      禁用已选中
    </FaCheckbox>
  </div>
</template>
`,G={class:`gap-4 grid`},K={class:`text-sm text-muted-foreground`},q=h({__name:`_group-basic`,setup(e){let r=t([`music`]),i=[{label:`阅读`,value:`reading`},{label:`音乐`,value:`music`},{label:`运动`,value:`sports`}],o=m(()=>i.filter(e=>r.value.includes(e.value)).map(e=>e.label).join(`、`));return(e,t)=>(g(),f(`div`,G,[a(L,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),options:i},null,8,[`modelValue`]),a(L,{modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=e=>r.value=e),options:i,class:`flex`},null,8,[`modelValue`]),d(`div`,K,` 当前值：`+n(o.value||`未选择`),1)]))}}),J=`<script setup lang="ts">
import { computed, shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckboxGroup from '../CheckboxGroup.vue'

const value = shallowRef(['music'])

const options = [
  { label: '阅读', value: 'reading' },
  { label: '音乐', value: 'music' },
  { label: '运动', value: 'sports' },
]

const currentText = computed(() =>
  options
    .filter(option => value.value.includes(option.value))
    .map(option => option.label)
    .join('、'),
)
<\/script>

<template>
  <div class="gap-4 grid">
    <FaCheckboxGroup v-model="value" :options="options" />
    <FaCheckboxGroup v-model="value" :options="options" class="flex" />
    <div class="text-sm text-muted-foreground">
      当前值：{{ currentText || '未选择' }}
    </div>
  </div>
</template>
`,Y={class:`gap-4 grid`},te={class:`gap-1 grid min-w-0`},X={class:`flex gap-2 items-center`},Z={class:`text-sm font-medium truncate`},Q={class:`text-xs text-muted-foreground px-1.5 py-0.5 rounded bg-muted`},ne={class:`text-xs text-muted-foreground leading-5`},re={class:`text-sm text-muted-foreground`},ie=h({__name:`_group-custom-option`,setup(e){let i=t([`focus`,`balanced`]),o=[{label:`专注模式`,value:`focus`,summary:`任务优先`,description:`突出主任务，弱化辅助信息，适合录入和审批场景。`},{label:`平衡模式`,value:`balanced`,summary:`默认体验`,description:`信息密度与可读性保持平衡，适合作为默认配置。`},{label:`高密度模式`,value:`dense`,summary:`信息看板`,description:`在大屏中同时承载更多信息，适合运营与监控看板。`}];return(e,t)=>(g(),f(`div`,Y,[a(L,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e),options:o,class:`gap-2 md:grid-cols-3`,"option-class":`rounded-xl border border-transparent px-1 py-1`},{option:v(({option:e,checked:t,disabled:i})=>[d(`div`,{class:r([`px-4 py-3 border rounded-xl flex gap-3 w-full transition-colors items-start justify-between`,[t?`border-primary bg-primary/5`:`border-border hover:border-primary/40`,i&&`opacity-60`]])},[d(`div`,te,[d(`div`,X,[d(`span`,Z,n(e.label),1),d(`span`,Q,n(e.summary),1)]),d(`div`,ne,n(e.description),1)]),d(`span`,{class:r([`text-xs font-medium shrink-0`,t?`text-primary`:`text-muted-foreground`])},n(t?`已选中`:`可选择`),3)],2)]),_:1},8,[`modelValue`]),d(`div`,re,` 当前值：`+n(i.value.join(`、`)||`未选择`),1)]))}}),ae=`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckboxGroup from '../CheckboxGroup.vue'

const value = shallowRef(['focus', 'balanced'])

const options = [
  {
    label: '专注模式',
    value: 'focus',
    summary: '任务优先',
    description: '突出主任务，弱化辅助信息，适合录入和审批场景。',
  },
  {
    label: '平衡模式',
    value: 'balanced',
    summary: '默认体验',
    description: '信息密度与可读性保持平衡，适合作为默认配置。',
  },
  {
    label: '高密度模式',
    value: 'dense',
    summary: '信息看板',
    description: '在大屏中同时承载更多信息，适合运营与监控看板。',
  },
]
<\/script>

<template>
  <div class="gap-4 grid">
    <FaCheckboxGroup
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
                {{ option.summary }}
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
    </FaCheckboxGroup>
    <div class="text-sm text-muted-foreground">
      当前值：{{ value.join('、') || '未选择' }}
    </div>
  </div>
</template>
`,oe={class:`gap-4 grid`},$={class:`text-sm text-muted-foreground`},se=h({__name:`_group-description`,setup(e){let r=t([`dashboard`,`report`]),i=[{label:`看板订阅`,value:`dashboard`,description:`每天 8:00 推送核心经营指标。`},{label:`周报摘要`,value:`report`,description:`每周一汇总关键数据变化。`},{label:`系统告警`,value:`alarm`,description:`异常波动时立即通知处理人。`}],o=m(()=>i.filter(e=>r.value.includes(e.value)).map(e=>e.label).join(`、`));return(e,t)=>(g(),f(`div`,oe,[a(L,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),options:i},null,8,[`modelValue`]),d(`div`,$,` 当前值：`+n(o.value||`未选择`),1)]))}}),ce=`<script setup lang="ts">
import { computed, shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckboxGroup from '../CheckboxGroup.vue'

const value = shallowRef(['dashboard', 'report'])

const options = [
  {
    label: '看板订阅',
    value: 'dashboard',
    description: '每天 8:00 推送核心经营指标。',
  },
  {
    label: '周报摘要',
    value: 'report',
    description: '每周一汇总关键数据变化。',
  },
  {
    label: '系统告警',
    value: 'alarm',
    description: '异常波动时立即通知处理人。',
  },
]

const currentText = computed(() =>
  options
    .filter(option => value.value.includes(option.value))
    .map(option => option.label)
    .join('、'),
)
<\/script>

<template>
  <div class="gap-4 grid">
    <FaCheckboxGroup v-model="value" :options="options" />
    <div class="text-sm text-muted-foreground">
      当前值：{{ currentText || '未选择' }}
    </div>
  </div>
</template>
`,le={class:`gap-4 grid`},ue={class:`text-sm text-muted-foreground`},de=h({__name:`_group-disabled`,setup(e){let r=t([`basic`]),i=[{label:`基础能力`,value:`basic`},{label:`审批流`,value:`approval`},{label:`审计日志`,value:`audit`,disabled:!0}],o=m(()=>i.filter(e=>r.value.includes(e.value)).map(e=>e.label).join(`、`));return(e,t)=>(g(),f(`div`,le,[a(L,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),options:i},null,8,[`modelValue`]),d(`div`,ue,` 当前值：`+n(o.value||`未选择`),1)]))}}),fe=`<script setup lang="ts">
import { computed, shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckboxGroup from '../CheckboxGroup.vue'

const value = shallowRef(['basic'])

const options = [
  { label: '基础能力', value: 'basic' },
  { label: '审批流', value: 'approval' },
  { label: '审计日志', value: 'audit', disabled: true },
]

const currentText = computed(() =>
  options
    .filter(option => value.value.includes(option.value))
    .map(option => option.label)
    .join('、'),
)
<\/script>

<template>
  <div class="gap-4 grid">
    <FaCheckboxGroup v-model="value" :options="options" />
    <div class="text-sm text-muted-foreground">
      当前值：{{ currentText || '未选择' }}
    </div>
  </div>
</template>
`,pe={class:`gap-4 grid`},me={class:`text-sm text-muted-foreground`},he=[{title:`基础`,component:R,componentRaw:z},{title:`禁用`,component:U,componentRaw:W},{title:`半选`,component:h({__name:`_indeterminate`,setup(e){let n=t(`indeterminate`);return(e,t)=>(g(),y(D,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e)},{default:v(()=>[...t[1]||(t[1]=[o(` 部分选中 `,-1)])]),_:1},8,[`modelValue`]))}}),componentRaw:`<script setup lang="ts">
import { shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckbox from '../index.vue'

type CheckboxValue = boolean | 'indeterminate' | undefined

const checked = shallowRef<CheckboxValue>('indeterminate')
<\/script>

<template>
  <FaCheckbox v-model="checked">
    部分选中
  </FaCheckbox>
</template>
`},{title:`自定义样式`,component:B,componentRaw:V},{title:`复选框组 - 基础`,component:q,componentRaw:J},{title:`复选框组 - 描述`,component:se,componentRaw:ce},{title:`复选框组 - 禁用`,component:de,componentRaw:fe},{title:`复选框组 - 数量限制`,component:h({__name:`_group-limit`,setup(e){let r=t([`dashboard`]),i=[{label:`看板订阅`,value:`dashboard`},{label:`周报摘要`,value:`report`},{label:`系统告警`,value:`alarm`}],o=m(()=>i.filter(e=>r.value.includes(e.value)).map(e=>e.label).join(`、`));return(e,t)=>(g(),f(`div`,pe,[a(L,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),options:i,min:1,max:2},null,8,[`modelValue`]),d(`div`,me,` 当前值：`+n(o.value||`未选择`),1),t[1]||(t[1]=d(`div`,{class:`text-xs text-muted-foreground leading-5`},` 已选数量小于等于 1 时，已选项会被禁用；已选数量大于等于 2 时，未选项会被禁用。 `,-1))]))}}),componentRaw:`<script setup lang="ts">
import { computed, shallowRef } from 'vue'

// 组件实际使用时无需手动导入，框架会自动导入
import FaCheckboxGroup from '../CheckboxGroup.vue'

const value = shallowRef(['dashboard'])

const options = [
  { label: '看板订阅', value: 'dashboard' },
  { label: '周报摘要', value: 'report' },
  { label: '系统告警', value: 'alarm' },
]

const currentText = computed(() =>
  options
    .filter(option => value.value.includes(option.value))
    .map(option => option.label)
    .join('、'),
)
<\/script>

<template>
  <div class="gap-4 grid">
    <FaCheckboxGroup
      v-model="value"
      :options="options"
      :min="1"
      :max="2"
    />
    <div class="text-sm text-muted-foreground">
      当前值：{{ currentText || '未选择' }}
    </div>
    <div class="text-xs text-muted-foreground leading-5">
      已选数量小于等于 1 时，已选项会被禁用；已选数量大于等于 2 时，未选项会被禁用。
    </div>
  </div>
</template>
`},{title:`复选框组 - 自定义选项`,component:ie,componentRaw:ae}],ge=h({__name:`checkbox`,setup(t){let{t:n}=A();return(t,r)=>{let i=j,o=T;return g(),f(`div`,null,[a(i,{title:e(n)(`route.component.checkbox`),description:`FaCheckbox / FaCheckboxGroup`},null,8,[`title`]),(g(!0),f(_,null,p(e(he),e=>(g(),y(o,{key:e.title,code:e.componentRaw,title:e.title},{default:v(()=>[(g(),y(b(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{ge as default};