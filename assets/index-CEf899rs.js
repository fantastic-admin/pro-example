
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as c}from"./index.vue_vue_type_script_setup_true_lang-C3pjQ_Y6.js";import{d as l,e as r,f as i,g as t,a7 as m,i as e,k as o,U as a}from"./index-BLSV4yIg.js";import d from"./_demo1-Dps_4ILP.js";import f from"./_demo2-CGHJmnNa.js";import p from"./_demo3-BxAEifoz.js";import u from"./_demo4-CvtAV1vs.js";import{_}from"./_demo5.vue_vue_type_script_setup_true_lang-Dq2OHAVm.js";import"./index-DU7ESt7E.js";import"./index.vue_vue_type_script_setup_true_lang-qKXiSJOT.js";const F=`<template>
  <FaCountTo :start-val="0" :end-val="100000" />
</template>
`,v=`<template>
  <FaCountTo :start-val="0" :end-val="100000" :duration="10000" />
</template>
`,T=`<template>
  <FaCountTo :start-val="0" :end-val="100000" :decimals="2" />
</template>
`,R=`<template>
  <FaCountTo :start-val="0" :end-val="100000" prefix="￥" suffix="元" />
</template>
`,C=`<script setup lang="ts">
import { toast } from 'vue-sonner'

const countToRef = useTemplateRef('countToRef')

const startVal = ref(0)
const endVal = ref(100000)

function onStarted() {
  toast('开始')
}

function onFinished() {
  toast('结束')
}
<\/script>

<template>
  <FaCountTo ref="countToRef" :start-val="startVal" :end-val="endVal" :autoplay="false" @on-started="onStarted" @on-finished="onFinished" />
  <div class="flex flex-row gap-2">
    <FaButton @click="countToRef?.start">
      开始
    </FaButton>
    <FaButton @click="countToRef?.reset">
      重置
    </FaButton>
    <FaButton @click="endVal += 10000">
      增加10000
    </FaButton>
  </div>
</template>
`,D=l({__name:"index",setup(w){return(x,B)=>{const s=m,n=c;return i(),r("div",null,[t(s,{title:"计数到",description:"FaCountTo"}),t(n,{code:o(F)},{default:e(()=>[t(d)]),_:1},8,["code"]),t(n,{title:"持续10秒",code:o(v)},{default:e(()=>[t(f)]),_:1},8,["code"]),t(n,{title:"保留2位小数",code:o(T)},{default:e(()=>[t(p)]),_:1},8,["code"]),t(n,{title:"带前缀和后缀",code:o(R)},{default:e(()=>[t(u)]),_:1},8,["code"]),t(n,{title:"手动控制",code:o(C)},{default:e(()=>[t(_)]),_:1},8,["code"])])}}});typeof a=="function"&&a(D);export{D as default};
