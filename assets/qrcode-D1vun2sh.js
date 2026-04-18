
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-CNfuk_zw.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-BAQC-R2y2.js";import{t as u}from"./_demo2-B-ghPnGN.js";import{t as d}from"./_demo3-DmLMsN47.js";import{t as f}from"./_demo4-CSOpeJN6.js";import{t as p}from"./_demo5-DLBPFK5R.js";import{t as m}from"./_demo6-DvfM9vK6.js";var h=`<script setup lang="ts">
import logoSvg from '@/assets/images/logo.svg'

const qrValue = ref('https://fantastic-admin.hurui.me')
<\/script>

<template>
  <div class="flex gap-6">
    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">基础二维码</span>
      <FaQrcode :value="qrValue" :size="150" />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">带 Logo (网络图片)</span>
      <FaQrcode
        :value="qrValue"
        :size="150"
        logo="https://fantastic-admin.hurui.me/logo.svg"
      />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">带 Logo (本地图片)</span>
      <FaQrcode
        :value="qrValue"
        :size="150"
        :logo="logoSvg"
      />
    </div>
  </div>
</template>
`,g=`<script setup lang="ts">
const qrcodeRef = useTemplateRef('qrcodeRef')

const qrValue = ref('https://fantastic-admin.hurui.me')
<\/script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-4 items-center">
      <FaInput v-model="qrValue" placeholder="输入二维码内容" class="w-64" />
      <FaButton variant="secondary" @click="qrcodeRef?.download('my-qrcode.png')">
        下载
      </FaButton>
    </div>
    <FaQrcode
      ref="qrcodeRef"
      :value="qrValue"
      :size="200"
    />
  </div>
</template>
`,_=`<script setup lang="ts">
const errorCorrectionLevel = ref<'L' | 'M' | 'Q' | 'H'>('M')
const qrValue = ref('https://fantastic-admin.hurui.me')

const levels = [
  { label: 'L', value: 'L' as const, desc: '7%' },
  { label: 'M', value: 'M' as const, desc: '15%' },
  { label: 'Q', value: 'Q' as const, desc: '25%' },
  { label: 'H', value: 'H' as const, desc: '30%' },
]
<\/script>

<template>
  <div class="space-y-2">
    <FaButtonGroup>
      <FaButton
        v-for="item in levels"
        :key="item.value"
        :variant="errorCorrectionLevel === item.value ? 'default' : 'outline'"
        @click="errorCorrectionLevel = item.value"
      >
        {{ item.label }}
      </FaButton>
    </FaButtonGroup>
    <FaQrcode
      :value="qrValue"
      :size="150"
      :error-correction-level="errorCorrectionLevel"
    />
  </div>
</template>
`,v=`<script setup lang="ts">
const sizeValue = ref([200])
const qrValue = ref('https://fantastic-admin.hurui.me')

const size = computed(() => sizeValue.value[0])
<\/script>

<template>
  <div class="space-y-2">
    <div class="flex gap-4 items-center">
      <FaSlider v-model="sizeValue" :min="100" :max="400" :step="100" class="w-48" />
      <span class="text-sm text-muted-foreground w-16">{{ size }}px</span>
    </div>
    <FaQrcode
      :value="qrValue"
      :size="size"
    />
  </div>
</template>
`,y=`<script setup lang="ts">
const qrValue = ref('https://fantastic-admin.hurui.me')
<\/script>

<template>
  <div class="flex flex-wrap gap-6">
    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">经典黑白</span>
      <FaQrcode
        :value="qrValue"
        :size="120"
        foreground-color="#000000"
        background-color="#ffffff"
      />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">品牌绿色</span>
      <FaQrcode
        :value="qrValue"
        :size="120"
        foreground-color="#059669"
        background-color="#f0fdf4"
      />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">科技蓝</span>
      <FaQrcode
        :value="qrValue"
        :size="120"
        foreground-color="#2563eb"
        background-color="#eff6ff"
      />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">活力橙</span>
      <FaQrcode
        :value="qrValue"
        :size="120"
        foreground-color="#ea580c"
        background-color="#fff7ed"
      />
    </div>

    <div class="flex flex-col gap-2 items-center">
      <span class="text-sm text-muted-foreground">暗色模式</span>
      <FaQrcode
        :value="qrValue"
        :size="120"
        foreground-color="#e5e5e5"
        background-color="#171717"
      />
    </div>
  </div>
</template>
`,b=`<script setup lang="ts">
const status = ref<'loading' | 'success' | 'expired' | 'error'>('loading')
const qrValue = ref('https://fantastic-admin.hurui.me')

const statuses = [
  { label: '加载中', value: 'loading' as const },
  { label: '已扫描', value: 'success' as const },
  { label: '已过期', value: 'expired' as const },
  { label: '错误', value: 'error' as const },
]

function setStatus(s: typeof status.value) {
  status.value = s
}
<\/script>

<template>
  <div class="flex flex-col gap-4">
    <FaButtonGroup>
      <FaButton
        v-for="item in statuses"
        :key="item.value"
        :variant="status === item.value ? 'default' : 'outline'"
        @click="setStatus(item.value)"
      >
        {{ item.label }}
      </FaButton>
    </FaButtonGroup>
    <FaQrcode :value="qrValue" :size="200" :status="status">
      <template #statusRender="{ status: s }">
        <template v-if="s === 'success'">
          <div class="text-success flex flex-col gap-1 items-center">
            <FaIcon name="i-mdi:check-circle" class="size-6" />
            <span class="text-xs">已扫描</span>
          </div>
        </template>
        <template v-else-if="s === 'expired'">
          <div class="text-muted-foreground flex flex-col gap-1 items-center">
            <FaIcon name="i-mdi:clock-alert" class="size-6" />
            <span class="text-xs">二维码已过期</span>
          </div>
        </template>
        <template v-else-if="s === 'error'">
          <div class="text-destructive flex flex-col gap-1 items-center">
            <FaIcon name="i-mdi:alert-circle" class="size-6" />
            <span class="text-xs">加载失败</span>
          </div>
        </template>
      </template>
    </FaQrcode>
  </div>
</template>
`,x=e({__name:`index`,setup(e){let{t:x}=c();return(e,c)=>{let S=o,C=s;return r(),a(`div`,null,[n(S,{title:t(x)(`route.component.qrcode`),description:`FaQrcode`},null,8,[`title`]),n(C,{title:`基础用法`,code:t(h)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(C,{title:`交互式操作`,code:t(g)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(C,{title:`纠错等级`,code:t(_)},{default:i(()=>[n(d)]),_:1},8,[`code`]),n(C,{title:`尺寸设置`,code:t(v)},{default:i(()=>[n(f)]),_:1},8,[`code`]),n(C,{title:`颜色定制`,code:t(y)},{default:i(()=>[n(p)]),_:1},8,[`code`]),n(C,{title:`状态展示`,code:t(b)},{default:i(()=>[n(m)]),_:1},8,[`code`])])}}});export{x as default};