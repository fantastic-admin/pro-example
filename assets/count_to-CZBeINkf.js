
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-CNfuk_zw.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-BinSlWd_.js";import{t as u}from"./_demo2-qBe74TqJ.js";import{t as d}from"./_demo3-CE3uoOxK.js";import{t as f}from"./_demo4-CluF8fIC.js";import{t as p}from"./_demo5-CbdKhsxt.js";var m=`<template>
  <FaCountTo :start-val="0" :end-val="100000" />
</template>
`,h=`<template>
  <FaCountTo :start-val="0" :end-val="100000" :duration="10000" />
</template>
`,g=`<template>
  <FaCountTo :start-val="0" :end-val="100000" :decimals="2" />
</template>
`,_=`<template>
  <FaCountTo :start-val="0" :end-val="100000" prefix="￥" suffix="元" />
</template>
`,v=`<script setup lang="ts">
const countToRef = useTemplateRef('countToRef')

const startVal = ref(0)
const endVal = ref(100000)

function onStarted() {
  faToast('开始')
}

function onFinished() {
  faToast('结束')
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
`,y=e({__name:`index`,setup(e){let{t:y}=c();return(e,c)=>{let b=o,x=s;return r(),a(`div`,null,[n(b,{title:t(y)(`route.component.countTo`),description:`FaCountTo`},null,8,[`title`]),n(x,{code:t(m)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(x,{title:`持续10秒`,code:t(h)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(x,{title:`保留2位小数`,code:t(g)},{default:i(()=>[n(d)]),_:1},8,[`code`]),n(x,{title:`带前缀和后缀`,code:t(_)},{default:i(()=>[n(f)]),_:1},8,[`code`]),n(x,{title:`手动控制`,code:t(v)},{default:i(()=>[n(p)]),_:1},8,[`code`])])}}});export{y as default};