
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as i}from"./index.vue_vue_type_script_setup_true_lang-BmDYF_lz.js";import{d as c,e as s,f,g as n,a7 as d,i as t,k as a,U as e}from"./index-DOTJNdHl.js";import{_ as r}from"./_demo1.vue_vue_type_script_setup_true_lang-DJ4MiVDL.js";import{_ as m}from"./_demo2.vue_vue_type_script_setup_true_lang-COsUUPJ3.js";import{_ as u}from"./_demo3.vue_vue_type_script_setup_true_lang-BANZI4HL.js";import"./index-WlNgMWD1.js";const F=`<script setup lang="ts">
import { useFaModal } from '@/ui/components/FaModal'

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
  class: '',
})
watch(() => modalInfo.value.loading, (loading) => {
  if (loading) {
    setTimeout(() => {
      modalInfo.value.loading = false
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
  <FaButton @click="modal = true">
    打开
  </FaButton>
  <FaModal v-model="modal" title="标题" description="这里是一段描述介绍" :maximizable="modalInfo.maximizable" :closable="modalInfo.closable" :draggable="modalInfo.draggable" :center="modalInfo.center" :loading="modalInfo.loading" :header="modalInfo.header" :footer="modalInfo.footer" :before-close="handleBeforeClose" :class="modalInfo.class">
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
        <FaButton :variant="!!modalInfo.class ? 'default' : 'outline'" class="w-full" @click="modalInfo.class = !!modalInfo.class ? '' : 'max-w-2xl'">
          调整最大宽度
        </FaButton>
      </div>
    </div>
  </FaModal>
</template>
`,p=`<script setup lang="ts">
import { toast } from 'vue-sonner'
import { useFaModal } from '@/ui/components/FaModal'

function showModalInfo() {
  useFaModal().info({
    title: '温馨提醒',
    content: '这是 info 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalSuccess() {
  useFaModal().success({
    title: '温馨提醒',
    content: '这是 success 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalWarning() {
  useFaModal().warning({
    title: '温馨提醒',
    content: '这是 warning 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalError() {
  useFaModal().error({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalConfirm() {
  useFaModal().confirm({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalDoubleConfirm() {
  const { update } = useFaModal().confirm({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    beforeClose: (action, done) => {
      if (action === 'confirm') {
        update({
          title: '二次确认',
          content: '确定要关闭吗？',
          confirmButtonText: '我确定',
          cancelButtonText: '我取消',
          beforeClose: (action) => {
            if (action === 'confirm') {
              done()
            }
            else {
              done()
            }
          },
        })
      }
      else {
        done()
      }
    },
  })
}
function showModalPromiseConfirm() {
  useFaModal().confirm({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    confirmButtonText: '确认（随机成功或失败）',
    beforeClose: async (action, done) => {
      if (action === 'confirm') {
        await new Promise(resolve => setTimeout(resolve, 1000))
        if (Math.random() > 0.5) {
          toast.success('成功了！')
          done()
        }
        else {
          toast.error('失败了！')
        }
      }
      else {
        done()
      }
    },
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
    <FaButton @click="showModalDoubleConfirm">
      Double Confirm
    </FaButton>
    <FaButton @click="showModalPromiseConfirm">
      Confirm with promise
    </FaButton>
  </div>
</template>
`,B=`<script setup lang="tsx">
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

const { open } = useFaModal().create({
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
`,I=c({__name:"index",setup(g){return(w,h)=>{const l=d,o=i;return f(),s("div",null,[n(l,{title:"弹窗",description:"FaModal"}),n(o,{code:a(F)},{default:t(()=>[n(r)]),_:1},8,["code"]),n(o,{title:"对话框",code:a(p)},{default:t(()=>[n(m)]),_:1},8,["code"]),n(o,{title:"函数式调用",code:a(B)},{default:t(()=>[n(u)]),_:1},8,["code"])])}}});typeof e=="function"&&e(I);export{I as default};
