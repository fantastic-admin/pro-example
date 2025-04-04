
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as a}from"./index.vue_vue_type_script_setup_true_lang-D9xYUDNr.js";import{d as l,f as i,g as d,h as n,a8 as u,j as r,l as s,V as o}from"./index-BFPO48W4.js";import{_ as c}from"./_demo1.vue_vue_type_script_setup_true_lang-iG4f0EwE.js";import"./index-CdK171Ue.js";import"./index-Uj1YccNM.js";const m=`<script setup lang="ts">
import { loadingHide, loadingShow } from '@/ui/components/FaLoading'

const type = ref<'plane' | 'chase' | 'bounce' | 'wave' | 'pulse' | 'flow' | 'swing' | 'circle' | 'circle-fade' | 'grid' | 'fold' | 'wander'>('plane')
const size = ref(50)
const text = ref('加载中...')

function loading() {
  // 提供 3 个参数
  loadingShow({
    type: type.value,
    size: size.value,
    text: text.value,
  })
  setTimeout(() => {
    loadingHide()
  }, 2000)
}
<\/script>

<template>
  <ElForm>
    <ElFormItem label="类型">
      <ElRadioGroup v-model="type">
        <ElRadioButton value="plane">
          Plane
        </ElRadioButton>
        <ElRadioButton value="chase">
          Chase
        </ElRadioButton>
        <ElRadioButton value="wave">
          Wave
        </ElRadioButton>
        <ElRadioButton value="pulse">
          Pulse
        </ElRadioButton>
        <ElRadioButton value="flow">
          Flow
        </ElRadioButton>
        <ElRadioButton value="swing">
          Swing
        </ElRadioButton>
        <ElRadioButton value="circle">
          Circle
        </ElRadioButton>
        <ElRadioButton value="circle-fade">
          Circle Fade
        </ElRadioButton>
        <ElRadioButton value="grid">
          Grid
        </ElRadioButton>
        <ElRadioButton value="fold">
          Fold
        </ElRadioButton>
        <ElRadioButton value="wander">
          Wander
        </ElRadioButton>
      </ElRadioGroup>
    </ElFormItem>
    <ElFormItem label="尺寸">
      <ElInputNumber v-model="size" controls-position="right" :min="20" :max="200" :step="10" />
    </ElFormItem>
    <ElFormItem label="提示文字">
      <ElInput v-model="text" />
    </ElFormItem>
  </ElForm>
  <ElButton @click="loading">
    加载 Loading（演示控制在 2 秒后关闭）
  </ElButton>
</template>
`,p=l({__name:"index",setup(E){return(f,B)=>{const t=u,e=a;return d(),i("div",null,[n(t,{title:"加载遮罩",description:"FaLoading"}),n(e,{code:s(m)},{default:r(()=>[n(c)]),_:1},8,["code"])])}}});typeof o=="function"&&o(p);export{p as default};
