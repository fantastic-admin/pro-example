
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-EJiOFDNb.js";import{P as o,vt as s}from"./components-Dvnhr4Ep.js";import{n as c}from"./vue-i18n.runtime-pGyDsL5y.js";import{t as l}from"./_demo1-DADHDYAq.js";import{t as u}from"./_demo2-Dc4x2wSt.js";import{t as d}from"./_demo3-B5_C0QPR.js";import{t as f}from"./_demo4-CxtCTeX2.js";var p=`<template>
  <FaScrollingText
    :items="[
      'Fantastic-admin v6 正式发布，欢迎体验新特性！',
      '框架已支持 Vue 3.6 + Vite 8，性能大幅提升',
      '新增 30+ 内建 UI 组件，开箱即用',
      '支持亮色/暗色主题，一键切换',
    ]"
    class="text-sm flex-1 h-6"
  />
</template>
`,m=`<template>
  <FaScrollingText
    :items="[
      '公告：系统将于今晚 22:00 进行维护升级',
      '新功能：支持批量导出数据，欢迎体验',
      '提示：请及时更新您的账户安全信息',
    ]"
    :visible-count="2"
    animation="fade"
    :transition="300"
    class="text-sm px-3 border rounded-lg h-16"
    item-class="border-b border-dashed last:border-0"
  />
</template>
`,h=`<script setup lang="ts">
const items = [
  '点击查看：Vue 3 最佳实践指南',
  '点击查看：TypeScript 进阶教程',
  '点击查看：Vite 构建优化技巧',
  '点击查看：Pinia 状态管理详解',
  '点击查看：Fantasic Admin 最新功能介绍',
]

function handleClick(text: string, index: number) {
  faToast.info(\`点击了第 \${index + 1} 条：\${text}\`)
}
<\/script>

<template>
  <FaScrollingText
    :items="items"
    direction="down"
    :duration="2000"
    class="text-sm text-primary h-8 cursor-pointer"
    @item-click="handleClick"
  />
</template>
`,g=`<script setup lang="ts">
const notices = [
  { tag: '紧急', text: '系统将于今晚 22:00 进行维护升级', type: 'error' },
  { tag: '新功能', text: '支持批量导出数据，欢迎体验', type: 'success' },
  { tag: '提示', text: '请及时更新您的账户安全信息', type: 'warning' },
]
<\/script>

<template>
  <FaScrollingText :items="notices.map(n => n.text)">
    <template #item="{ index }">
      <div class="py-1 flex gap-2 w-full items-center">
        <span
          class="text-xs font-medium px-1.5 py-0.5 rounded shrink-0"
          :class="{
            'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400': notices[index].type === 'error',
            'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400': notices[index].type === 'success',
            'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400': notices[index].type === 'warning',
          }"
        >
          {{ notices[index].tag }}
        </span>
        <span class="text-sm truncate">{{ notices[index].text }}</span>
      </div>
    </template>
  </FaScrollingText>
</template>
`,_=e({__name:`index`,setup(e){let{t:_}=c();return(e,c)=>{let v=o,y=s;return r(),a(`div`,null,[n(v,{title:t(_)(`route.component.scrollingText`),description:`FaScrollingText`},null,8,[`title`]),n(y,{code:t(p)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(y,{title:`多条可见 + fade 动画`,code:t(m)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(y,{title:`向下滚动 + 点击事件`,code:t(h)},{default:i(()=>[n(d)]),_:1},8,[`code`]),n(y,{title:`自定义条目 slot`,code:t(g)},{default:i(()=>[n(f)]),_:1},8,[`code`])])}}});export{_ as default};