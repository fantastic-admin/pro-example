
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as l}from"./index.vue_vue_type_script_setup_true_lang-QJtPTUd7.js";import{d as o,e as d,f as c,g as t,a7 as s,i as n,k as a,U as i}from"./index-DODNO_Fi.js";import{_ as p}from"./_demo1.vue_vue_type_script_setup_true_lang-Cvk8d-fz.js";import{_ as r}from"./_demo2.vue_vue_type_script_setup_true_lang-BBDEUjir.js";import{_ as f}from"./_demo3.vue_vue_type_script_setup_true_lang-DEiauhea.js";import"./index-yfpwFnwn.js";import"./index-B9n51LCq.js";import"./index.vue_vue_type_script_setup_true_lang-MYsnApEj.js";import"./index.vue_vue_type_script_setup_true_lang-BkjBPcWI.js";import"./index.vue_vue_type_script_setup_true_lang-DEhMZ0bD.js";const _=`<script setup lang="ts">
const data = [
  { datetime: '2025/03/23', content: '请假申请', name: '张三' },
  { datetime: '2025/03/23', content: '部门主管审批', name: '李四' },
  { datetime: '2025/03/24', content: '人事审批', name: '王五' },
  { datetime: '2025/03/24', content: '完成' },
]
<\/script>

<template>
  <FaTimeline :data="data">
    <template #default="{ item }">
      <FaCard class="h-full">
        <template #header>
          <div>{{ item.content }}</div>
        </template>
        <template #footer>
          <div v-if="item.name" class="flex-center-end flex-1">
            <div>操作人：{{ item.name }}</div>
          </div>
        </template>
      </FaCard>
    </template>
  </FaTimeline>
</template>
`,u=`<script setup lang="ts">
const data = [
  { datetime: '2025/03/23', content: '请假申请', name: '张三' },
  { datetime: '2025/03/23', content: '部门主管审批', name: '李四' },
  { datetime: '2025/03/24', content: '人事审批', name: '王五' },
  { datetime: '2025/03/24', content: '完成' },
]
<\/script>

<template>
  <FaTimeline :data="data" merge>
    <template #default="{ item }">
      <FaCard class="h-full">
        <template #header>
          <div>{{ item.content }}</div>
        </template>
        <template #footer>
          <div v-if="item.name" class="flex-center-end flex-1">
            <div>操作人：{{ item.name }}</div>
          </div>
        </template>
      </FaCard>
    </template>
  </FaTimeline>
</template>
`,v=`<script setup lang="ts">
const data = [
  { datetime: '2022/05/08', title: 'Element Plus', content: '4000.00' },
  { datetime: '2022/07/06', title: 'Element Plus', content: '4000.00' },
  { datetime: '2022/08/08', title: 'Element Plus', content: '4000.00' },
  { datetime: '2024/01/09', title: 'condorheroblog', content: '100.00' },
  { datetime: '2024/01/12', title: 'antfu', content: '1024.00' },
  { datetime: '2024/01/12', title: 'sxzz', content: '256.00' },
  { datetime: '2024/02/04', title: 'Vue.js', content: '15000.00' },
  { datetime: '2024/05/06', title: 'Element Plus', content: '2000.00' },
  { datetime: '2024/07/17', title: 'Vxe Table', content: '800.00' },
  { datetime: '2024/10/18', title: 'Element Plus', content: '2000.00' },
  { datetime: '2025/02/28', title: 'hyoban', content: '60.00' },
  { datetime: '2025/03/19', title: 'Element Plus', content: '10000.00' },
]
<\/script>

<template>
  <FaTimeline :data="data" class="h-100">
    <template #default="{ item }">
      <FaCard>
        <template #header>
          <p>向 <b>{{ item.title }}</b> 赞助</p>
        </template>
        <div>{{ item.content }} 元</div>
      </FaCard>
    </template>
  </FaTimeline>
</template>
`,F=o({__name:"index",setup(h){return(x,C)=>{const m=s,e=l;return c(),d("div",null,[t(m,{title:"时间线",description:"FaTimeline"}),t(e,{code:a(_)},{default:n(()=>[t(p)]),_:1},8,["code"]),t(e,{code:a(u),title:"合并相同时间"},{default:n(()=>[t(r)]),_:1},8,["code"]),t(e,{code:a(v),title:"设置高度并出现滚动条"},{default:n(()=>[t(f)]),_:1},8,["code"])])}}});typeof i=="function"&&i(F);export{F as default};
