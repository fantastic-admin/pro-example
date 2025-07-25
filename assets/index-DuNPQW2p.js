
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as l}from"./index.vue_vue_type_script_setup_true_lang-QJtPTUd7.js";import{d as s,e as i,f as c,g as n,a7 as d,i as o,k as a,U as t}from"./index-DODNO_Fi.js";import{_ as f}from"./_demo1.vue_vue_type_script_setup_true_lang-BUT_agPx.js";import{_ as u}from"./_demo2.vue_vue_type_script_setup_true_lang-B-ddPPQr.js";import"./index-yfpwFnwn.js";import"./index.vue_vue_type_script_setup_true_lang-CPsVUp4a.js";import"./nullish-CHIgUVhi.js";import"./useFormControl-BvyTtihR.js";import"./check-kfS6pyFm.js";import"./index-khq66YLb.js";const m=`<script setup lang="ts">
import { useFaModal } from '@/ui/components/FaModal'

const drawer = ref(false)

const drawerInfo = ref({
  side: 'right' as const,
  closable: true,
  header: true,
  footer: true,
  loading: false,
  class: '',
})
watch(() => drawerInfo.value.loading, (loading) => {
  if (loading) {
    setTimeout(() => {
      drawerInfo.value.loading = false
    }, 3000)
  }
})

function handleBeforeClose(action: 'confirm' | 'cancel' | 'close', done: () => void) {
  if (action === 'close') {
    useFaModal().confirm({
      title: '提示',
      content: '确定要关闭吗？',
      onConfirm: () => {
        done()
      },
    })
  }
  else {
    done()
  }
}
<\/script>

<template>
  <FaButton @click="drawer = true">
    打开
  </FaButton>
  <FaDrawer v-model="drawer" title="标题" description="这里是一段描述介绍" :side="drawerInfo.side" :closable="drawerInfo.closable" :loading="drawerInfo.loading" :header="drawerInfo.header" :footer="drawerInfo.footer" :before-close="handleBeforeClose" :content-class="drawerInfo.class">
    <div class="flex-start-center flex-wrap gap-2">
      <FaSelect
        v-model="drawerInfo.side" :options="[
          { label: '左侧', value: 'left' },
          { label: '右侧', value: 'right' },
          { label: '顶部', value: 'top' },
          { label: '底部', value: 'bottom' },
        ]" class="w-full"
      />
      <FaButton :variant="drawerInfo.closable ? 'default' : 'outline'" class="w-full" @click="drawerInfo.closable = !drawerInfo.closable">
        关闭按钮
      </FaButton>
      <FaButton :variant="drawerInfo.header ? 'default' : 'outline'" class="w-full" @click="drawerInfo.header = !drawerInfo.header">
        头部区域
      </FaButton>
      <FaButton :variant="drawerInfo.footer ? 'default' : 'outline'" class="w-full" @click="drawerInfo.footer = !drawerInfo.footer">
        尾部区域
      </FaButton>
      <FaButton variant="outline" class="w-full" @click="drawerInfo.loading = true">
        显示加载中
      </FaButton>
      <FaButton :variant="!!drawerInfo.class ? 'default' : 'outline'" class="w-full" @click="drawerInfo.class = !!drawerInfo.class ? '' : 'sm:max-w-lg'">
        调整最大宽度
      </FaButton>
    </div>
  </FaDrawer>
</template>
`,p=`<script setup lang="tsx">
import { useFaDrawer } from '@/ui/components/FaDrawer'
import { useFaModal } from '@/ui/components/FaModal'

const TestComponent = defineComponent({
  setup() {
    const val = ref('123')
    return () => (
      <div>
        <input v-model={val.value} class="w-full border rounded-md p-2" />
      </div>
    )
  },
})

const { open } = useFaDrawer().create({
  title: '标题',
  description: '这里是一段描述介绍',
  beforeClose: (action, done) => {
    if (action === 'close') {
      useFaModal().confirm({
        title: '提示',
        content: '确定要关闭吗？',
        onConfirm: () => {
          done()
        },
      })
    }
    else {
      done()
    }
  },
  content: h(TestComponent),
})
<\/script>

<template>
  <FaButton @click="open">
    打开
  </FaButton>
</template>
`,w=s({__name:"index",setup(F){return(_,v)=>{const r=d,e=l;return c(),i("div",null,[n(r,{title:"抽屉",description:"FaDrawer"}),n(e,{code:a(m)},{default:o(()=>[n(f)]),_:1},8,["code"]),n(e,{title:"函数式调用",code:a(p)},{default:o(()=>[n(u)]),_:1},8,["code"])])}}});typeof t=="function"&&t(w);export{w as default};
