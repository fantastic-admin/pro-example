
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-CNfuk_zw.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-BhEgJNgZ.js";import{t as u}from"./_demo2-Cd79BfSw.js";import{t as d}from"./_demo3-Ba6OiYxJ.js";import{t as f}from"./_demo4-DAgz4AyB.js";import{t as p}from"./_demo5-DG5AbP5r.js";import{t as m}from"./_demo6-BIk3xqlR.js";var h=`<script setup lang="ts">
const value = [1, 5, 2, 4, 8, 3, 7]
<\/script>

<template>
  <FaSparkline :value="value" />
</template>
`,g=`<script setup lang="ts">
const value = [1, 5, 2, 4, 8, 3, 7]
<\/script>

<template>
  <FaSparkline :value="value" stroke-color="#409eff" />
</template>
`,_=`<script setup lang="ts">
const value = [
  { tooltip: '1', value: 1 },
  { tooltip: '3', value: 3 },
  { tooltip: '5', value: 5 },
  { tooltip: '8', value: 8 },
  { tooltip: '4', value: 4 },
  { tooltip: '6', value: 6 },
  { tooltip: '9', value: 9 },
]
<\/script>

<template>
  <FaSparkline :value="value" tooltip />
</template>
`,v=`<script setup lang="ts">
const value = [1, 5, 2, 4, 8, 3, 7]
<\/script>

<template>
  <FaSparkline :value="value" :width="160" :height="48" />
</template>
`,y=`<script setup lang="ts">
const value = [1, 8, 2, 9, 4, 7, 5]
<\/script>

<template>
  <FaSparkline :value="value" smooth />
</template>
`,b=`<script setup lang="ts">
const value = ref([12, 16, 19, 23, 26, 29, 33])

function randomizeValue() {
  value.value = value.value.map(item => Math.max(4, item + Math.floor(Math.random() * 9) - 4))
}
<\/script>

<template>
  <div class="flex flex-col gap-4">
    <FaSparkline :value="value" />
    <FaButton class="self-start" variant="outline" size="sm" @click="randomizeValue">
      随机刷新
    </FaButton>
  </div>
</template>
`,x=e({__name:`index`,setup(e){let{t:x}=c();return(e,c)=>{let S=o,C=s;return r(),a(`div`,null,[n(S,{title:t(x)(`route.component.sparkline`),description:`FaSparkline`},null,8,[`title`]),n(C,{title:`默认`,code:t(h)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(C,{title:`自定义颜色`,code:t(g)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(C,{title:`开启 Tooltip`,code:t(_)},{default:i(()=>[n(d)]),_:1},8,[`code`]),n(C,{title:`自定义尺寸`,code:t(v)},{default:i(()=>[n(f)]),_:1},8,[`code`]),n(C,{title:`圆润过渡`,code:t(y)},{default:i(()=>[n(p)]),_:1},8,[`code`]),n(C,{title:`数据更新`,code:t(b)},{default:i(()=>[n(m)]),_:1},8,[`code`])])}}});export{x as default};