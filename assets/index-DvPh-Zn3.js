
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as r}from"./index.vue_vue_type_script_setup_true_lang-CLVd-mn9.js";import{d as t,f as l,g as d,h as e,a8 as s,j as i,l as f,V as n}from"./index-553qAUTx.js";import{_ as c}from"./_demo1.vue_vue_type_script_setup_true_lang-DF5Pc6x0.js";import"./index-BAF4f9Xa.js";import"./index.vue_vue_type_script_setup_true_lang-CTXHQYTP.js";import"./check-BjEDVq4G.js";import"./useFormControl-D5UZX3Yf.js";const u=`<script setup lang="ts">
const drawer = ref(false)

const drawerInfo = ref({
  side: 'right' as const,
  closable: true,
  header: true,
  footer: true,
  loading: false,
})
watch(() => drawerInfo.value.loading, (loading) => {
  if (loading) {
    setTimeout(() => {
      drawerInfo.value.loading = false
    }, 3000)
  }
})
<\/script>

<template>
  <FaButton @click="drawer = true">
    打开
  </FaButton>
  <FaDrawer v-model="drawer" title="标题" description="这里是一段描述介绍" :side="drawerInfo.side" :closable="drawerInfo.closable" :header="drawerInfo.header" :footer="drawerInfo.footer" :loading="drawerInfo.loading">
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
    </div>
  </FaDrawer>
</template>
`,w=t({__name:"index",setup(p){return(m,_)=>{const a=s,o=r;return d(),l("div",null,[e(a,{title:"抽屉",description:"FaDrawer"}),e(o,{code:f(u)},{default:i(()=>[e(c)]),_:1},8,["code"])])}}});typeof n=="function"&&n(w);export{w as default};
