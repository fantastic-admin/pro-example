
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-CNfuk_zw.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-DhJFHtNz.js";import{t as u}from"./_demo2-D6RpbwIE.js";import{t as d}from"./_demo3-B5x1Rrat.js";var f=`<script setup lang="ts">
const modal = ref(false)
const modalInfo = ref({
  maximizable: false,
  closable: true,
  draggable: false,
  alignCenter: false,
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
  <FaModal v-model="modal" title="标题" description="这里是一段描述介绍" :maximizable="modalInfo.maximizable" :closable="modalInfo.closable" :draggable="modalInfo.draggable" :align-center="modalInfo.alignCenter" :center="modalInfo.center" :loading="modalInfo.loading" :header="modalInfo.header" :footer="modalInfo.footer" :before-close="handleBeforeClose" :class="modalInfo.class">
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
        <FaButton :variant="modalInfo.alignCenter ? 'default' : 'outline'" class="w-full" @click="modalInfo.alignCenter = !modalInfo.alignCenter">
          窗口居中
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
        <FaButton :variant="!!modalInfo.class ? 'default' : 'outline'" class="w-full" @click="modalInfo.class = !!modalInfo.class ? '' : 'sm:max-w-2xl'">
          调整最大宽度
        </FaButton>
      </div>
    </div>
  </FaModal>
</template>
`,p=`<script setup lang="ts">
function showModalInfo() {
  useFaModal().info({
    title: '温馨提醒',
    content: '这是 info 弹窗',
    onConfirm: () => {
      faToast.info('你点了确定')
    },
  })
}
function showModalSuccess() {
  useFaModal().success({
    title: '温馨提醒',
    content: '这是 success 弹窗',
    onConfirm: () => {
      faToast.info('你点了确定')
    },
  })
}
function showModalWarning() {
  useFaModal().warning({
    title: '温馨提醒',
    content: '这是 warning 弹窗',
    onConfirm: () => {
      faToast.info('你点了确定')
    },
  })
}
function showModalError() {
  useFaModal().error({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    onConfirm: () => {
      faToast.info('你点了确定')
    },
  })
}
function showModalConfirm() {
  useFaModal().confirm({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    onConfirm: () => {
      faToast.info('你点了确定')
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
          faToast.success('成功了！')
          done()
        }
        else {
          faToast.error('失败了！')
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
`,m=`<script setup lang="tsx">
const TestComponent = defineComponent({
  props: {
    close: {
      type: Function,
    },
  },
  setup(props) {
    const val = ref('123')
    return () => (
      <div class="flex flex-col gap-4">
        <fa-input v-model={val.value} class="w-full" />
        <fa-button onClick={() => props.close?.()}>
          组件内部关闭弹窗
        </fa-button>
      </div>
    )
  },
})

const { open, close } = useFaModal().create({
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
  content: () => h(TestComponent, { close }),
})
<\/script>

<template>
  <FaButton @click="open">
    打开
  </FaButton>
</template>
`,h=e({__name:`index`,setup(e){let{t:h}=c();return(e,c)=>{let g=o,_=s;return r(),a(`div`,null,[n(g,{title:t(h)(`route.component.modal`),description:`FaModal`},null,8,[`title`]),n(_,{code:t(f)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(_,{title:`对话框`,code:t(p)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(_,{title:`函数式调用`,code:t(m)},{default:i(()=>[n(d)]),_:1},8,[`code`])])}}});export{h as default};