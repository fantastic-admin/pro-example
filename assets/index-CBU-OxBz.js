
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as a}from"./index.vue_vue_type_script_setup_true_lang-DXpNJ-I9.js";import{d as r,f as s,g as i,h as n,a8 as c,j as d,l,V as e}from"./index-Cm5PYwOf.js";import{_ as p}from"./_demo1.vue_vue_type_script_setup_true_lang-Cp6Jaqbx.js";import"./index-DO3wYGke.js";const m=`<script setup lang="ts">
import type { Step, StepContext } from '@/ui/components/FaMultiStepLoader/index.vue'
import { toast } from 'vue-sonner'

const isLoading = ref(false)
const taskSteps: Step[] = [
  {
    text: '获取用户数据',
    afterText: '获取用户数据成功',
    name: 'user',
    action: async () => {
      // 模拟异步请求
      await new Promise(resolve => setTimeout(resolve, 1000))
      return { id: 1, name: '张三' }
    },
  },
  {
    text: '获取用户订单（这一步会模拟随机错误）',
    afterText: '获取用户订单成功',
    name: 'orders',
    action: async (context: StepContext) => {
      await new Promise(resolve => setTimeout(resolve, 1500))
      // 模拟随机错误
      if (Math.random() > 0.5) {
        throw new Error('获取订单数据失败：网络连接超时')
      }
      return [
        { id: 1, userId: context.user.id, product: '商品A' },
        { id: 2, userId: context.user.id, product: '商品B' },
      ]
    },
  },
  {
    text: '处理订单数据',
    action: async (context: StepContext) => {
      // 模拟异步请求
      await new Promise(resolve => setTimeout(resolve, 2000))
      return {
        user: context.user,
        orders: context.orders,
        totalAmount: context.orders.length * 100,
      }
    },
  },
]

function handleStateChange(state: number) {
  toast.info(\`当前步骤：\${state + 1}\`)
}

function handleComplete() {
  toast.success('所有步骤已完成')
  isLoading.value = false
}

function handleError(error: Error, stepIndex: number) {
  toast.error(\`步骤 \${stepIndex + 1} 执行失败: \${error.message}\`)
  isLoading.value = false
}
<\/script>

<template>
  <div class="flex gap-4">
    <FaButton @click="isLoading = !isLoading">
      {{ isLoading ? '停止' : '开始' }}
    </FaButton>
    <FaMultiStepLoader
      :loading="isLoading"
      :steps="taskSteps"
      prevent-close
      @state-change="handleStateChange"
      @complete="handleComplete"
      @error="handleError"
    />
  </div>
</template>
`,u=r({__name:"index",setup(f){return(x,_)=>{const t=c,o=a;return i(),s("div",null,[n(t,{title:"多步骤加载器",description:"FaMultiStepLoader"}),n(o,{code:l(m)},{default:d(()=>[n(p)]),_:1},8,["code"])])}}});typeof e=="function"&&e(u);export{u as default};
