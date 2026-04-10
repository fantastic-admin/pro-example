
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-EJiOFDNb.js";import{P as o,vt as s}from"./components-Dvnhr4Ep.js";import{n as c}from"./vue-i18n.runtime-pGyDsL5y.js";import{t as l}from"./_demo1-BQ_4riUq.js";import{t as u}from"./_demo2-D3LxGOYr.js";var d=`<script setup lang="ts">
const appAccountStore = useAppAccountStore()

const array = ref([])
<\/script>

<template>
  <div class="bg-background transition-300">
    <div class="text-sm text-muted-foreground px-4 py-2 rounded-2 bg-muted">
      该组件需要搭配业务场景使用。
    </div>
  </div>
  <FaStorageBox :unique-key="appAccountStore.account" box-id="box1" :data="array" />
</template>
`,f=`<script setup lang="ts">
const appAccountStore = useAppAccountStore()

const search = ref({
  name: '',
  department_id: '',
  department_job_id: '',
  role_id: '',
  check1: false,
  check2: false,
})

function onSearch() {
  faToast.info('模拟触发搜索')
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
              <FaStorageBox :unique-key="appAccountStore.account" box-id="box2" :data="search" title="我的快捷筛选" @take-out="recovery">
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
`,p=e({__name:`index`,setup(e){let{t:p}=c();return(e,c)=>{let m=o,h=s;return r(),a(`div`,null,[n(m,{title:t(p)(`route.component.storageBox`),description:`FaStorageBox`},null,8,[`title`]),n(h,{title:`你可以将页面中的数据（object/array）储存到该组件内，并在需要的时候取出来`,code:t(d)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(h,{title:`推荐场景：具有复杂筛选项的页面，并记录常用的筛选条件`,code:t(f)},{default:i(()=>[n(u)]),_:1},8,[`code`])])}}});export{p as default};