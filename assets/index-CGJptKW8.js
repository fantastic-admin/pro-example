
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as c}from"./index.vue_vue_type_script_setup_true_lang-iFov3akP.js";import{d as l,f as r,g as m,h as t,a8 as i,j as e,l as o,V as a}from"./index-Dv6GDtcN.js";import d from"./_demo1-CzfDw_Q9.js";import f from"./_demo2-Ci0a8lij.js";import p from"./_demo3-lPueQ5P_.js";import u from"./_demo4-uXZ3TcjR.js";import{_}from"./_demo5.vue_vue_type_script_setup_true_lang-CQM4P6Jf.js";import"./index-DNIjrW4p.js";import"./index.vue_vue_type_script_setup_true_lang-Cs6JfAwn.js";const F=`<template>
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
`,D=l({__name:"index",setup(w){return(x,B)=>{const s=i,n=c;return m(),r("div",null,[t(s,{title:"计数到",description:"FaCountTo"}),t(n,{code:o(F)},{default:e(()=>[t(d)]),_:1},8,["code"]),t(n,{title:"持续10秒",code:o(v)},{default:e(()=>[t(f)]),_:1},8,["code"]),t(n,{title:"保留2位小数",code:o(T)},{default:e(()=>[t(p)]),_:1},8,["code"]),t(n,{title:"带前缀和后缀",code:o(R)},{default:e(()=>[t(u)]),_:1},8,["code"]),t(n,{title:"手动控制",code:o(C)},{default:e(()=>[t(_)]),_:1},8,["code"])])}}});typeof a=="function"&&a(D);export{D as default};
