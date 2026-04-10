
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-EJiOFDNb.js";import{P as o,vt as s}from"./components-Dvnhr4Ep.js";import{n as c}from"./vue-i18n.runtime-pGyDsL5y.js";import{t as l}from"./_demo1-DvGSQMiV.js";import{t as u}from"./_demo2-CTGu8J81.js";import{t as d}from"./_demo3-CGBdgP_p.js";import{t as f}from"./_demo4-CQ0rgud_.js";import{t as p}from"./_demo5-CRWQ228p.js";import{t as m}from"./_demo6-CEInmPkj.js";var h=`<script setup lang="ts">
const search = ref({
  name: '',
  department_id: '',
  department_job_id: '',
  role_id: '',
  check1: true,
  check2: false,
})
<\/script>

<template>
  <FaSearchBar>
    <template #default="{ fold }">
      <ElForm :model="search" size="default" label-width="120px">
        <ElRow>
          <ElCol :span="12">
            <ElFormItem label="姓名 / 手机号">
              <ElInput v-model="search.name" placeholder="请输入姓名或者手机号，支持模糊查询" clearable />
            </ElFormItem>
          </ElCol>
        </ElRow>
        <ElRow v-show="!fold">
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
        <ElRow v-show="!fold">
          <ElCol :span="24">
            <ElFormItem label="角色">
              <ElCheckbox :value="true">
                备选项
              </ElCheckbox>
              <ElCheckbox :value="false">
                备选项
              </ElCheckbox>
            </ElFormItem>
          </ElCol>
        </ElRow>
        <ElFormItem>
          <ElButton type="primary">
            <template #icon>
              <FaIcon name="i-ep:search" />
            </template>
            筛选
          </ElButton>
          <ElButton>导出</ElButton>
          <ElButton type="primary" link>
            查看已导出记录
          </ElButton>
        </ElFormItem>
      </ElForm>
    </template>
  </FaSearchBar>
</template>
`,g=`<script setup lang="ts">
const search = ref({
  name: '',
  department_id: '',
  department_job_id: '',
  role_id: '',
  check1: true,
  check2: false,
})
<\/script>

<template>
  <FaSearchBar :fold="false">
    <template #default="{ fold }">
      <ElForm :model="search" size="default" label-width="120px">
        <ElRow>
          <ElCol :span="12">
            <ElFormItem label="姓名 / 手机号">
              <ElInput v-model="search.name" placeholder="请输入姓名或者手机号，支持模糊查询" clearable />
            </ElFormItem>
          </ElCol>
        </ElRow>
        <ElRow v-show="!fold">
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
        <ElRow v-show="!fold">
          <ElCol :span="24">
            <ElFormItem label="复选框">
              <ElCheckbox v-model="search.check1">
                备选项
              </ElCheckbox>
              <ElCheckbox v-model="search.check2">
                备选项
              </ElCheckbox>
            </ElFormItem>
          </ElCol>
        </ElRow>
        <ElFormItem>
          <ElButton type="primary">
            <template #icon>
              <FaIcon name="i-ep:search" />
            </template>
            筛选
          </ElButton>
          <ElButton>导出</ElButton>
          <ElButton type="primary" link>
            查看已导出记录
          </ElButton>
        </ElFormItem>
      </ElForm>
    </template>
  </FaSearchBar>
</template>
`,_=`<script setup lang="ts">
const search = ref({
  name: '',
  department_id: '',
  department_job_id: '',
  role_id: '',
  check1: true,
  check2: false,
})
<\/script>

<template>
  <FaSearchBar background>
    <template #default="{ fold }">
      <ElForm :model="search" size="default" label-width="120px">
        <ElRow>
          <ElCol :span="12">
            <ElFormItem label="姓名 / 手机号">
              <ElInput v-model="search.name" placeholder="请输入姓名或者手机号，支持模糊查询" clearable />
            </ElFormItem>
          </ElCol>
        </ElRow>
        <ElRow v-show="!fold">
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
        <ElRow v-show="!fold">
          <ElCol :span="24">
            <ElFormItem label="复选框">
              <ElCheckbox :value="true">
                备选项
              </ElCheckbox>
              <ElCheckbox :value="false">
                备选项
              </ElCheckbox>
            </ElFormItem>
          </ElCol>
        </ElRow>
        <ElFormItem>
          <ElButton type="primary">
            <template #icon>
              <FaIcon name="i-ep:search" />
            </template>
            筛选
          </ElButton>
          <ElButton>导出</ElButton>
          <ElButton type="primary" link>
            查看已导出记录
          </ElButton>
        </ElFormItem>
      </ElForm>
    </template>
  </FaSearchBar>
</template>
`,v=`<script setup lang="ts">
const search = ref({
  name: '',
  department_id: '',
  department_job_id: '',
  role_id: '',
  check1: true,
  check2: false,
})

function onToggle(fold: boolean) {
  faToast(fold ? '收起' : '展开')
}
<\/script>

<template>
  <FaSearchBar @toggle="onToggle">
    <template #default="{ fold }">
      <ElForm :model="search" size="default" label-width="120px">
        <ElRow>
          <ElCol :span="12">
            <ElFormItem label="姓名 / 手机号">
              <ElInput v-model="search.name" placeholder="请输入姓名或者手机号，支持模糊查询" clearable />
            </ElFormItem>
          </ElCol>
        </ElRow>
        <ElRow v-show="!fold">
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
        <ElRow v-show="!fold">
          <ElCol :span="24">
            <ElFormItem label="复选框">
              <ElCheckbox :value="true">
                备选项
              </ElCheckbox>
              <ElCheckbox :value="false">
                备选项
              </ElCheckbox>
            </ElFormItem>
          </ElCol>
        </ElRow>
        <ElFormItem>
          <ElButton type="primary">
            <template #icon>
              <FaIcon name="i-ep:search" />
            </template>
            筛选
          </ElButton>
          <ElButton>导出</ElButton>
          <ElButton type="primary" link>
            查看已导出记录
          </ElButton>
        </ElFormItem>
      </ElForm>
    </template>
  </FaSearchBar>
</template>
`,y=`<script setup lang="ts">
const search = ref({
  name: '',
  department_id: '',
  department_job_id: '',
  role_id: '',
  check1: true,
  check2: false,
})
<\/script>

<template>
  <FaSearchBar :show-toggle="false">
    <template #default="{ fold, toggle }">
      <ElForm :model="search" size="default" label-width="120px" inline class="search-form">
        <ElFormItem label="姓名 / 手机号" class="search-form-item-name">
          <ElInput v-model="search.name" placeholder="请输入姓名或者手机号，支持模糊查询" clearable />
        </ElFormItem>
        <ElFormItem v-show="!fold" label="部门">
          <ElSelect v-model="search.department_id" clearable placeholder="请选择部门">
            <ElOption label="技术部" :value="1" />
            <ElOption label="设计部" :value="2" />
            <ElOption label="行政部" :value="3" />
          </ElSelect>
        </ElFormItem>
        <ElFormItem v-show="!fold" label="职位">
          <ElSelect v-model="search.department_job_id" clearable placeholder="请选择职位">
            <ElOption label="程序员" :value="1" />
            <ElOption label="设计师" :value="2" />
            <ElOption label="人事" :value="3" />
          </ElSelect>
        </ElFormItem>
        <ElFormItem v-show="!fold" label="角色">
          <ElSelect v-model="search.role_id" clearable placeholder="请选择角色">
            <ElOption label="主管" :value="1" />
            <ElOption label="普通职员" :value="2" />
          </ElSelect>
        </ElFormItem>
        <ElFormItem v-show="!fold" label="复选框">
          <ElCheckbox v-model="search.check1">
            备选项
          </ElCheckbox>
          <ElCheckbox v-model="search.check2">
            备选项
          </ElCheckbox>
        </ElFormItem>
        <ElFormItem>
          <ElButton type="primary">
            <template #icon>
              <FaIcon name="i-ep:search" />
            </template>
            筛选
          </ElButton>
          <ElButton link @click="toggle">
            <template #icon>
              <FaIcon :name="fold ? 'i-ep:caret-bottom' : 'i-ep:caret-top' " />
            </template>
            {{ fold ? '展开' : '收起' }}
          </ElButton>
        </ElFormItem>
      </ElForm>
    </template>
  </FaSearchBar>
</template>

<style scoped>
.search-form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));

  :deep(.el-form-item) {
    grid-column: auto / span 1;

    &:last-child {
      grid-column-end: -1;

      .el-form-item__content {
        justify-content: flex-end;
      }
    }

    &.search-form-item-name {
      grid-column: auto / span 2;
    }
  }
}
</style>
`,b=`<script setup lang="ts">
const search = ref({
  name: '',
  department_id: '',
  department_job_id: '',
  role_id: '',
  check1: true,
  check2: false,
})
<\/script>

<template>
  <FaSearchBar :show-toggle="false">
    <template #default="{ fold, toggle }">
      <ElForm :model="search" size="default" label-width="120px">
        <ElRow>
          <ElCol :span="12">
            <ElFormItem label="姓名 / 手机号">
              <ElInput v-model="search.name" placeholder="请输入姓名或者手机号，支持模糊查询" clearable />
            </ElFormItem>
          </ElCol>
          <ElCol v-show="!fold" :span="6">
            <ElFormItem label="部门">
              <ElSelect v-model="search.department_id" clearable placeholder="请选择部门">
                <ElOption label="技术部" :value="1" />
                <ElOption label="设计部" :value="2" />
                <ElOption label="行政部" :value="3" />
              </ElSelect>
            </ElFormItem>
          </ElCol>
          <ElCol v-show="!fold" :span="6">
            <ElFormItem label="职位">
              <ElSelect v-model="search.department_job_id" clearable placeholder="请选择职位">
                <ElOption label="程序员" :value="1" />
                <ElOption label="设计师" :value="2" />
                <ElOption label="人事" :value="3" />
              </ElSelect>
            </ElFormItem>
          </ElCol>
          <ElCol v-show="!fold" :span="6">
            <ElFormItem label="角色">
              <ElSelect v-model="search.role_id" clearable placeholder="请选择角色">
                <ElOption label="主管" :value="1" />
                <ElOption label="普通职员" :value="2" />
              </ElSelect>
            </ElFormItem>
          </ElCol>
          <ElCol v-show="!fold" :span="6">
            <ElFormItem label="复选框">
              <ElCheckbox v-model="search.check1">
                备选项
              </ElCheckbox>
              <ElCheckbox v-model="search.check2">
                备选项
              </ElCheckbox>
            </ElFormItem>
          </ElCol>
          <ElCol :span="6" :offset="6">
            <ElFormItem label-width="0" class="action-box">
              <ElButton type="primary">
                <template #icon>
                  <FaIcon name="i-ep:search" />
                </template>
                筛选
              </ElButton>
              <ElButton link @click="toggle">
                <template #icon>
                  <FaIcon :name="fold ? 'i-ep:caret-bottom' : 'i-ep:caret-top' " />
                </template>
                {{ fold ? '展开' : '收起' }}
              </ElButton>
            </ElFormItem>
          </ElCol>
        </ElRow>
      </ElForm>
    </template>
  </FaSearchBar>
</template>

<style scoped>
.action-box {
  :deep(.el-form-item__content) {
    justify-content: flex-end;
  }
}
</style>
`,x=e({__name:`index`,setup(e){let{t:x}=c();return(e,c)=>{let S=o,C=s;return r(),a(`div`,null,[n(S,{title:t(x)(`route.component.searchBar`),description:`FaSearchBar`},null,8,[`title`]),n(C,{code:t(h)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(C,{title:`默认展开`,code:t(g)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(C,{title:`显示背景`,code:t(_)},{default:i(()=>[n(d)]),_:1},8,[`code`]),n(C,{title:`切换事件`,code:t(v)},{default:i(()=>[n(f)]),_:1},8,[`code`]),n(C,{title:`自定义切换按钮（搭配自定义 grid 布局）`,code:t(y)},{default:i(()=>[n(p)]),_:1},8,[`code`]),n(C,{title:`自定义切换按钮（搭配 el-row 组件）`,code:t(b)},{default:i(()=>[n(m)]),_:1},8,[`code`])])}}});export{x as default};