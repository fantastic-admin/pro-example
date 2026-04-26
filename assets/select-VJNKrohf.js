
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-C_d7Trg8.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-CkB0_kId.js";import{t as u}from"./_demo2-DIowOy3p.js";import{t as d}from"./_demo3-CVLoyigr.js";import{t as f}from"./_demo4-v0C0719s.js";import{t as p}from"./_demo5-Di1Ysuli.js";var m=`<script setup lang="ts">
const select = ref('1')
<\/script>

<template>
  <FaSelect
    v-model="select"
    :options="[
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2', disabled: true },
      { label: 'Option 3', value: '3' },
    ]"
  />
</template>
`,h=`<script setup lang="ts">
const select = ref('1')
<\/script>

<template>
  <FaSelect
    v-model="select"
    :options="[
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
    ]"
  />
</template>
`,g=`<script setup lang="ts">
const select = ref([])
<\/script>

<template>
  <FaSelect
    v-model="select"
    :options="[
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ]"
    multiple
  />
</template>
`,_=`<script setup lang="ts">
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
`,v=`<script setup lang="ts">
const modal = shallowRef(false)
const cityInFaModal = shallowRef('shanghai')

const options = [
  { label: 'Beijing', value: 'beijing' },
  { label: 'Shanghai', value: 'shanghai' },
  { label: 'Shenzhen', value: 'shenzhen' },
]
<\/script>

<template>
  <div>
    <div class="flex gap-2">
      <FaButton @click="modal = true">
        打开 FaModal
      </FaButton>
    </div>
    <FaModal
      v-model="modal"
      title="FaModal 中的选择器"
      description="在模态框内容区内使用 FaSelect"
      :footer="false"
      class="sm:max-w-lg"
      content-class="min-h-auto"
    >
      <div class="py-4 flex flex-col gap-4">
        <FaSelect
          v-model="cityInFaModal"
          :options="options"
          placeholder="请选择城市"
          class="w-full"
        />
        <div class="text-sm text-muted-foreground">
          当前值：{{ cityInFaModal }}
        </div>
      </div>
    </FaModal>
  </div>
</template>
`,y=e({__name:`index`,setup(e){let{t:y}=c();return(e,c)=>{let b=o,x=s;return r(),a(`div`,null,[n(b,{title:t(y)(`route.component.select`),description:`FaSelect`},null,8,[`title`]),n(x,{code:t(m)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(x,{title:`组`,code:t(h)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(x,{title:`多选`,code:t(g)},{default:i(()=>[n(d)]),_:1},8,[`code`]),n(x,{title:`定位模式`,code:t(_)},{default:i(()=>[n(f)]),_:1},8,[`code`]),n(x,{title:`在 FaModal 里展示`,code:t(v)},{default:i(()=>[n(p)]),_:1},8,[`code`])])}}});export{y as default};