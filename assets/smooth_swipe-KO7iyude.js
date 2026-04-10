
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-EJiOFDNb.js";import{P as o,vt as s}from"./components-Dvnhr4Ep.js";import{n as c}from"./vue-i18n.runtime-pGyDsL5y.js";import{t as l}from"./_demo1-alUrw_Qq2.js";import{t as u}from"./_demo2-CeNV43yZ2.js";var d=`<script setup lang="ts">
const activeIndex = ref<number>(0)
<\/script>

<template>
  <FaButtonGroup>
    <FaButton v-for="index in 4" :key="index" :variant="activeIndex === index - 1 ? 'default' : 'outline'" @click="activeIndex = index - 1">
      切换到 {{ index }}
    </FaButton>
  </FaButtonGroup>
  <FaSmoothSwipe :active-index>
    <div class="text-20 flex-center h-50">
      1
    </div>
    <div class="text-20 flex-center h-150">
      2
    </div>
    <div class="text-20 flex-center h-100">
      3
    </div>
    <div class="text-20 flex-center h-50">
      4
    </div>
  </FaSmoothSwipe>
</template>
`,f=`<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'

const activeIndex = ref<number>(0)

// 表单数据
const formData = reactive({
  // 第一步：基本信息
  name: '',
  email: '',
  phone: '',
  // 第二步：详细信息
  company: '',
  position: '',
  department: '',
  // 第三步：确认信息
  agree: false,
  newsletter: false,
})

// 表单引用
const formRef1 = ref<FormInstance>()
const formRef2 = ref<FormInstance>()
const formRef3 = ref<FormInstance>()

// 表单验证规则
const formRules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 2, max: 20, message: '姓名长度在 2 到 20 个字符', trigger: 'blur' },
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' },
  ],
  company: [
    { required: true, message: '请输入公司名称', trigger: 'blur' },
  ],
  position: [
    { required: true, message: '请输入职位', trigger: 'blur' },
  ],
  department: [
    { required: true, message: '请输入部门', trigger: 'blur' },
  ],
  agree: [
    {
      validator: (_rule, value, callback) => {
        if (!value) {
          callback(new Error('请同意用户协议'))
        }
        else {
          callback()
        }
      },
      trigger: 'change',
    },
  ],
})

// 获取当前步骤需要验证的字段
function getCurrentStepFields() {
  const stepFields = [
    ['name', 'email', 'phone'],
    ['company', 'position', 'department'],
    ['agree'],
  ]
  return stepFields[activeIndex.value] || []
}

// 获取当前步骤的表单引用
function getCurrentFormRef() {
  const formRefs = [formRef1, formRef2, formRef3]
  return formRefs[activeIndex.value]?.value
}

// 下一步
async function nextStep() {
  if (activeIndex.value < 2) {
    // 验证当前步骤
    const currentFields = getCurrentStepFields()
    if (currentFields.length > 0) {
      try {
        const currentFormRef = getCurrentFormRef()
        await currentFormRef?.validateField(currentFields)
        activeIndex.value++
      }
      catch {
        // 验证失败，不进入下一步
      }
    }
    else {
      activeIndex.value++
    }
  }
}

// 上一步
function prevStep() {
  if (activeIndex.value > 0) {
    activeIndex.value--
  }
}

// 提交表单
async function submitForm() {
  try {
    // 验证所有表单
    await Promise.all([
      formRef1.value?.validate(),
      formRef2.value?.validate(),
      formRef3.value?.validate(),
    ])
    ElMessage.success('表单提交成功！')
    // console.log('表单数据：', formData)
  }
  catch {
    ElMessage.error('请检查表单信息')
  }
}

// 重置表单
function resetForm() {
  formRef1.value?.resetFields()
  formRef2.value?.resetFields()
  formRef3.value?.resetFields()
  activeIndex.value = 0
}
<\/script>

<template>
  <div class="mx-auto max-w-2xl">
    <FaSmoothSwipe :active-index>
      <div class="pb-1">
        <h3 class="text-lg font-semibold mb-4 text-center">
          基本信息
        </h3>
        <el-form
          ref="formRef1"
          :model="formData"
          :rules="formRules"
          label-width="100px"
        >
          <el-form-item label="姓名" prop="name">
            <el-input
              v-model="formData.name"
              placeholder="请输入您的姓名"
              clearable
            />
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input
              v-model="formData.email"
              placeholder="请输入您的邮箱地址"
              clearable
            />
          </el-form-item>
        </el-form>
      </div>
      <div class="pb-1">
        <h3 class="text-lg font-semibold mb-4 text-center">
          详细信息
        </h3>
        <el-form
          ref="formRef2"
          :model="formData"
          :rules="formRules"
          label-width="100px"
        >
          <el-form-item label="公司名称" prop="company">
            <el-input
              v-model="formData.company"
              placeholder="请输入您的公司名称"
              clearable
            />
          </el-form-item>
          <el-form-item label="职位" prop="position">
            <el-input
              v-model="formData.position"
              placeholder="请输入您的职位"
              clearable
            />
          </el-form-item>
          <el-form-item label="部门" prop="department">
            <el-select
              v-model="formData.department"
              placeholder="请选择您的部门"
              clearable
              class="w-full"
            >
              <el-option label="技术部" value="技术部" />
              <el-option label="产品部" value="产品部" />
              <el-option label="设计部" value="设计部" />
              <el-option label="运营部" value="运营部" />
              <el-option label="市场部" value="市场部" />
              <el-option label="人事部" value="人事部" />
              <el-option label="财务部" value="财务部" />
              <el-option label="其他" value="其他" />
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="pb-1">
        <h3 class="text-lg font-semibold mb-4 text-center">
          确认信息
        </h3>
        <div class="mb-4 p-4 rounded-lg bg-muted/50 space-y-2">
          <div class="flex justify-between">
            <span class="text-muted-foreground">姓名：</span>
            <span class="font-medium">{{ formData.name || '未填写' }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted-foreground">邮箱：</span>
            <span class="font-medium">{{ formData.email || '未填写' }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted-foreground">公司名称：</span>
            <span class="font-medium">{{ formData.company || '未填写' }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted-foreground">职位：</span>
            <span class="font-medium">{{ formData.position || '未填写' }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted-foreground">部门：</span>
            <span class="font-medium">{{ formData.department || '未填写' }}</span>
          </div>
        </div>
        <el-form
          ref="formRef3"
          :model="formData"
          :rules="formRules"
          label-width="10px"
        >
          <el-form-item prop="agree">
            <el-checkbox v-model="formData.agree">
              我已阅读并同意
              <el-link type="primary" href="#" target="_blank">
                《用户协议》
              </el-link>
              和
              <el-link type="primary" href="#" target="_blank">
                《隐私政策》
              </el-link>
            </el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="formData.newsletter">
              订阅我们的新闻通讯，获取最新产品信息
            </el-checkbox>
          </el-form-item>
        </el-form>
      </div>
    </FaSmoothSwipe>
    <!-- 操作按钮 -->
    <div class="mt-6 flex justify-between">
      <div class="flex space-x-2">
        <el-button
          v-if="activeIndex > 0"
          :disabled="activeIndex === 0"
          @click="prevStep"
        >
          上一步
        </el-button>
        <el-button variant="outline" @click="resetForm">
          重置
        </el-button>
      </div>

      <div class="flex space-x-2">
        <el-button
          v-if="activeIndex < 2"
          type="primary"
          @click="nextStep"
        >
          下一步
        </el-button>
        <el-button
          v-if="activeIndex === 2"
          type="primary"
          @click="submitForm"
        >
          提交
        </el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.step-actions {
  padding-top: 20px;
  border-top: 1px solid oklch(var(--border));
}
</style>
`,p=e({__name:`index`,setup(e){let{t:p}=c();return(e,c)=>{let m=o,h=s;return r(),a(`div`,null,[n(m,{title:t(p)(`route.component.smoothSwipe`),description:`FaSmoothSwipe`},null,8,[`title`]),n(h,{code:t(d)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(h,{title:`表单应用`,code:t(f)},{default:i(()=>[n(u)]),_:1},8,[`code`])])}}});export{p as default};