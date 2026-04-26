
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-C_d7Trg8.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-squsMseY.js";var u=`<script setup lang="ts">
const type = ref<'plane' | 'chase' | 'bounce' | 'wave' | 'pulse' | 'flow' | 'swing' | 'circle' | 'circle-fade' | 'grid' | 'fold' | 'wander'>('plane')
const size = ref<number[]>([50])
const text = ref('加载中...')

function loading() {
  // 提供 3 个参数
  const { close } = useFaLoading({
    type: type.value,
    size: size.value[0],
    text: text.value,
  })
  setTimeout(() => {
    close()
  }, 2000)
}
<\/script>

<template>
  <div class="flex-col-start gap-4">
    <div class="flex gap-4 items-center">
      <div class="text-sm font-bold">
        类型
      </div>
      <FaButtonGroup>
        <FaButton
          v-for="(item, index) in [
            { label: 'Plane', value: 'plane' },
            { label: 'Chase', value: 'chase' },
            { label: 'Wave', value: 'wave' },
            { label: 'Pulse', value: 'pulse' },
            { label: 'Flow', value: 'flow' },
            { label: 'Swing', value: 'swing' },
            { label: 'Circle', value: 'circle' },
            { label: 'Circle Fade', value: 'circle-fade' },
            { label: 'Grid', value: 'grid' },
            { label: 'Fold', value: 'fold' },
            { label: 'Wander', value: 'wander' },
          ]" :key="index" :variant="type === item.value ? 'default' : 'outline'" size="sm" :class="{ 'z-1': type === item.value }" @click="type = (item.value as any)"
        >
          {{ item.label }}
        </FaButton>
      </FaButtonGroup>
    </div>
    <div class="flex gap-4 items-center">
      <div class="text-sm font-bold">
        尺寸
      </div>
      <FaSlider v-model="size" :min="20" :max="80" :step="10" class="w-50" />
    </div>
    <div class="flex gap-4 items-center">
      <div class="text-sm font-bold">
        文字
      </div>
      <FaInput v-model="text" />
    </div>
    <FaButton @click="loading">
      加载 Loading
    </FaButton>
  </div>
</template>
`,d=e({__name:`index`,setup(e){let{t:d}=c();return(e,c)=>{let f=o,p=s;return r(),a(`div`,null,[n(f,{title:t(d)(`route.component.loading`),description:`FaLoading`},null,8,[`title`]),n(p,{code:t(u)},{default:i(()=>[n(l)]),_:1},8,[`code`])])}}});export{d as default};