
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as r}from"./index.vue_vue_type_script_setup_true_lang-DXpNJ-I9.js";import{d as c,f as m,g as s,h as e,a8 as p,j as l,l as o,V as a}from"./index-Cm5PYwOf.js";import{_ as i}from"./_demo1.vue_vue_type_script_setup_true_lang-D4OeRjIX.js";import{_ as E}from"./_demo2.vue_vue_type_script_setup_true_lang-G2u-ttq7.js";import"./index-DO3wYGke.js";import"./index-DWK6xA3r.js";import"./index.vue_vue_type_script_setup_true_lang-DWnVJ-Eg.js";import"./sortable.esm-C83syoBY.js";import"./index.vue_vue_type_script_setup_true_lang-DkM5o9N3.js";const d=`<script setup lang="ts">
const array = ref([])
<\/script>

<template>
  <div class="bg-background transition-300">
    <div class="rounded-2 bg-muted px-4 py-2 text-sm text-muted-foreground">
      该组件需要搭配业务场景使用。
    </div>
  </div>
  <FaStorageBox :data="array" name="box1" />
</template>
`,u=`<script setup lang="ts">
import { toast } from 'vue-sonner'

const search = ref({
  name: '',
  department_id: '',
  department_job_id: '',
  role_id: '',
  check1: false,
  check2: false,
})

function onSearch() {
  toast.info('模拟触发搜索')
}

function recovery(content: any) {
  search.value = content
  onSearch()
}
<\/script>

<template>
  <FaSearchBar :show-toggle="false">
    <ElForm :model="search" label-width="120px">
      <ElRow>
        <ElCol :span="12">
          <ElFormItem label="姓名 / 手机号">
            <ElInput v-model="search.name" placeholder="请输入姓名或者手机号，支持模糊查询" clearable />
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="6">
          <ElFormItem label="部门">
            <ElSelect v-model="search.department_id" clearable placeholder="请选择部门">
              <ElOption label="技术部" :value="1" />
              <ElOption label="设计部" :value="2" />
              <ElOption label="行政部" :value="3" />
            </ElSelect>
          </ElFormItem>
        </ElCol>
        <ElCol :span="6">
          <ElFormItem label="职位">
            <ElSelect v-model="search.department_job_id" clearable placeholder="请选择职位">
              <ElOption label="程序员" :value="1" />
              <ElOption label="设计师" :value="2" />
              <ElOption label="人事" :value="3" />
            </ElSelect>
          </ElFormItem>
        </ElCol>
        <ElCol :span="6">
          <ElFormItem label="角色">
            <ElSelect v-model="search.role_id" clearable placeholder="请选择角色">
              <ElOption label="主管" :value="1" />
              <ElOption label="普通职员" :value="2" />
            </ElSelect>
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="24">
          <ElFormItem label="角色">
            <ElCheckbox v-model="search.check1">
              备选项
            </ElCheckbox>
            <ElCheckbox v-model="search.check2">
              备选项
            </ElCheckbox>
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow>
        <ElCol :span="24">
          <ElFormItem>
            <ElSpace>
              <ElButton type="primary" @click="onSearch">
                <template #icon>
                  <FaIcon name="i-ep:search" />
                </template>
                筛选
              </ElButton>
              <FaStorageBox :data="search" name="box2" title="我的快捷筛选" @take-out="recovery">
                <ElButton>
                  保存当前筛选
                </ElButton>
              </FaStorageBox>
            </ElSpace>
          </ElFormItem>
        </ElCol>
      </ElRow>
    </ElForm>
  </FaSearchBar>
</template>
`,h=c({__name:"index",setup(_){return(b,f)=>{const t=p,n=r;return s(),m("div",null,[e(t,{title:"储物箱",description:"FaStorageBox"}),e(n,{title:"你可以将页面中的数据（object/array）储存到该组件内，并在需要的时候取出来",code:o(d)},{default:l(()=>[e(i)]),_:1},8,["code"]),e(n,{title:"推荐场景：具有复杂筛选项的页面，并记录常用的筛选条件",code:o(u)},{default:l(()=>[e(E)]),_:1},8,["code"])])}}});typeof a=="function"&&a(h);export{h as default};
