
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as i}from"./index.vue_vue_type_script_setup_true_lang-DltvfDFZ.js";import{d as c,f as d,g as f,h as n,a8 as s,j as a,l as t,V as l}from"./index-8eOOZCt1.js";import{_ as r}from"./_demo1.vue_vue_type_script_setup_true_lang-DIyg9Hj1.js";import{_ as u}from"./_demo2.vue_vue_type_script_setup_true_lang-DF1vrAZN.js";import"./index-P1b-IaR7.js";const m=`<script setup lang="ts">
const modal = ref(false)
const modalInfo = ref({
  maximizable: false,
  closable: true,
  draggable: false,
  center: false,
  header: true,
  footer: true,
  contentHeight: '',
  loading: false,
})
watch(() => modalInfo.value.loading, (loading) => {
  if (loading) {
    setTimeout(() => {
      modalInfo.value.loading = false
    }, 3000)
  }
})
<\/script>

<template>
  <FaButton @click="modal = true">
    打开
  </FaButton>
  <FaModal v-model="modal" title="标题" description="这里是一段描述介绍" :maximizable="modalInfo.maximizable" :closable="modalInfo.closable" :draggable="modalInfo.draggable" :center="modalInfo.center" :loading="modalInfo.loading" :header="modalInfo.header" :footer="modalInfo.footer">
    <div :class="modalInfo.contentHeight">
      <div class="flex-start-center flex-wrap gap-2">
        <FaButton :variant="modalInfo.maximizable ? 'default' : 'outline'" class="w-full" @click="modalInfo.maximizable = !modalInfo.maximizable">
          最大化按钮
        </FaButton>
        <FaButton :variant="modalInfo.closable ? 'default' : 'outline'" class="w-full" @click="modalInfo.closable = !modalInfo.closable">
          关闭按钮
        </FaButton>
        <FaButton :variant="modalInfo.draggable ? 'default' : 'outline'" class="w-full" @click="modalInfo.draggable = !modalInfo.draggable">
          拖拽
        </FaButton>
        <FaButton :variant="modalInfo.center ? 'default' : 'outline'" class="w-full" @click="modalInfo.center = !modalInfo.center">
          居中显示
        </FaButton>
        <FaButton :variant="modalInfo.header ? 'default' : 'outline'" class="w-full" @click="modalInfo.header = !modalInfo.header">
          头部区域
        </FaButton>
        <FaButton :variant="modalInfo.footer ? 'default' : 'outline'" class="w-full" @click="modalInfo.footer = !modalInfo.footer">
          尾部区域
        </FaButton>
        <FaButton :variant="!!modalInfo.contentHeight ? 'default' : 'outline'" class="w-full" @click="modalInfo.contentHeight = !!modalInfo.contentHeight ? '' : 'h-400'">
          切换内容高度
        </FaButton>
        <FaButton variant="outline" class="w-full" @click="modalInfo.loading = true">
          显示加载中
        </FaButton>
      </div>
    </div>
  </FaModal>
</template>
`,F=`<script setup lang="ts">
import { useFaModal } from '@/ui/components/FaModal'

function showModalInfo() {
  useFaModal().info({
    title: '温馨提醒',
    content: '这是 info 弹窗',
  })
}
function showModalSuccess() {
  useFaModal().success({
    title: '温馨提醒',
    content: '这是 success 弹窗',
  })
}
function showModalWarning() {
  useFaModal().warning({
    title: '温馨提醒',
    content: '这是 warning 弹窗',
  })
}
function showModalError() {
  useFaModal().error({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
  })
}
function showModalConfirm() {
  useFaModal().confirm({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
  })
}
<\/script>

<template>
  <div class="flex gap-4">
    <FaButton @click="showModalInfo">
      Info
    </FaButton>
    <FaButton @click="showModalSuccess">
      Success
    </FaButton>
    <FaButton @click="showModalWarning">
      Warning
    </FaButton>
    <FaButton @click="showModalError">
      Error
    </FaButton>
    <FaButton @click="showModalConfirm">
      Confirm
    </FaButton>
  </div>
</template>
`,g=c({__name:"index",setup(I){return(p,B)=>{const e=s,o=i;return f(),d("div",null,[n(e,{title:"弹窗",description:"FaModal"}),n(o,{code:t(m)},{default:a(()=>[n(r)]),_:1},8,["code"]),n(o,{title:"对话框",code:t(F)},{default:a(()=>[n(u)]),_:1},8,["code"])])}}});typeof l=="function"&&l(g);export{g as default};
