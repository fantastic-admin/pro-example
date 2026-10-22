
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e,C as t,O as n,St as r,wt as i,yt as a}from"./reactivity.esm-bundler-DQLEWij_.js";import{D as o,E as s,Ht as c,Lt as l,_ as u,b as d,bt as f,ct as p,g as m,it as h,k as g,mt as _,o as v,qt as y,tt as b,v as x,wt as S,xt as C}from"./runtime-core.esm-bundler-B5ds1qB8.js";import{T as w,un as T}from"./src-XafWzjth.js";import{n as E}from"./vue-i18n.runtime-QoH7TMem.js";import"./examples-DXhZs5lg.js";import{t as D}from"./page-header-DeO2joBq.js";var O=[`onClick`],k=[`onClick`],A=g({name:`BuiltInScrollingText`,__name:`index`,props:{items:{},visibleCount:{default:1},duration:{default:3e3},transition:{default:500},animation:{default:`slide`},direction:{default:`up`},class:{type:[Boolean,null,String,Object,Array]},itemClass:{type:[Boolean,null,String,Object,Array]}},emits:[`itemClick`],setup(n,{emit:o}){let u=n,g=o,y=t(0),x=t(!1),S=t(!1),w=null,E=t(null),D=t(null),A=t(0),j=null,M=l(),N=m(()=>!!M.item),P=m(()=>N.value&&A.value?A.value:E.value?E.value.clientHeight/u.visibleCount:0),F=m(()=>N.value&&A.value?{height:`${A.value*u.visibleCount}px`}:{}),I=m(()=>u.items.length?u.direction===`down`?Array.from({length:u.visibleCount*2},(e,t)=>{let n=(y.value-u.visibleCount+t+u.items.length)%u.items.length;return{text:u.items[n],originalIndex:n}}):Array.from({length:u.visibleCount*2},(e,t)=>({text:u.items[(y.value+t)%u.items.length],originalIndex:(y.value+t)%u.items.length})):[]),L=m(()=>u.animation===`slide`&&u.direction===`down`?-(P.value*u.visibleCount):0),R=t(null),z=m(()=>({transform:`translateY(${R.value??L.value}px)`,transition:x.value?`transform ${u.transition}ms ease`:`none`})),B=m(()=>({opacity:+!x.value,transition:`opacity ${u.transition}ms ease`}));function V(){S.value||(u.animation===`slide`?u.direction===`up`?(x.value=!0,R.value=-(P.value*u.visibleCount),w=setTimeout(()=>{S.value||(x.value=!1,y.value=(y.value+u.visibleCount)%u.items.length,R.value=null,H())},u.transition)):(x.value=!1,R.value=null,requestAnimationFrame(()=>{requestAnimationFrame(()=>{S.value||(x.value=!0,R.value=0,w=setTimeout(()=>{S.value||(x.value=!1,y.value=(y.value-u.visibleCount+u.items.length)%u.items.length,R.value=null,H())},u.transition))})})):(x.value=!0,w=setTimeout(()=>{S.value||(y.value=u.direction===`up`?(y.value+u.visibleCount)%u.items.length:(y.value-u.visibleCount+u.items.length)%u.items.length,b(()=>{x.value=!1,H()}))},u.transition)))}function H(){w=setTimeout(V,u.duration)}function U(){S.value=!0,w&&(clearTimeout(w),w=null),x.value=!1,R.value=null}function W(){S.value=!1,w&&clearTimeout(w),H()}return c(()=>u.items,()=>{y.value=0,x.value=!1,R.value=null,w&&clearTimeout(w),u.items.length>u.visibleCount&&H()}),p(()=>{u.items.length>u.visibleCount&&H(),j=new ResizeObserver(e=>{let t=e[0]?.contentRect.height;t&&(A.value=t)}),c(D,e=>{j?.disconnect(),e&&j?.observe(e)},{immediate:!0})}),h(()=>{w&&clearTimeout(w),j?.disconnect()}),(t,n)=>(_(),d(`div`,{ref_key:`containerRef`,ref:E,class:a(e(T)(`relative overflow-hidden h-8`,u.class)),style:r(F.value),onMouseenter:U,onMouseleave:W},[u.animation===`slide`?(_(),d(`div`,{key:0,class:`h-full`,style:r(z.value)},[(_(!0),d(v,null,f(I.value,(n,o)=>(_(),d(`div`,{key:`${o}-${n.originalIndex}`,ref_for:!0,ref:e=>{o===0&&(D.value=e)},class:a(e(T)(`flex items-center`,t.$attrs.onItemClick?`cursor-pointer`:``,u.itemClass)),style:r(N.value&&A.value?{height:`${A.value}px`}:{height:`${100/u.visibleCount}%`}),onClick:e=>g(`itemClick`,n.text,n.originalIndex)},[C(t.$slots,`item`,{item:n.text,index:n.originalIndex},()=>[s(i(n.text),1)])],14,O))),128))],4)):(_(),d(`div`,{key:1,class:`h-full`,style:r(B.value)},[(_(!0),d(v,null,f(I.value.slice(0,u.visibleCount),(n,o)=>(_(),d(`div`,{key:n.originalIndex,ref_for:!0,ref:e=>{o===0&&(D.value=e)},class:a(e(T)(`flex items-center`,t.$attrs.onItemClick?`cursor-pointer`:``,u.itemClass)),style:r(N.value&&A.value?{height:`${A.value}px`}:{height:`${100/u.visibleCount}%`}),onClick:e=>g(`itemClick`,n.text,n.originalIndex)},[C(t.$slots,`item`,{item:n.text,index:n.originalIndex},()=>[s(i(n.text),1)])],14,k))),128))],4))],38))}}),j=g({__name:`_basic`,setup(e){return(e,t)=>(_(),x(A,{items:[`Fantastic-admin v6 正式发布，欢迎体验新特性！`,`框架已支持 Vue 3.6 + Vite 8，性能大幅提升`,`新增 30+ 内建 UI 组件，开箱即用`,`支持亮色/暗色主题，一键切换`],class:`text-sm flex-1 h-6`}))}}),M=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaScrollingText from '../index.vue'
<\/script>

<template>
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
`,N={class:`flex flex-col gap-3`},P={class:`text-sm text-muted-foreground`},F=g({__name:`_down-click`,setup(e){let t=[`点击查看：Vue 3 最佳实践指南`,`点击查看：TypeScript 进阶教程`,`点击查看：Vite 构建优化技巧`,`点击查看：Pinia 状态管理详解`,`点击查看：Fantasic Admin 最新功能介绍`],r=n(`等待点击`);function a(e,t){r.value=`点击了第 ${t+1} 条：${e}`}return(e,n)=>(_(),d(`div`,N,[o(A,{items:t,direction:`down`,duration:2e3,class:`text-sm text-primary h-8 cursor-pointer`,onItemClick:a}),u(`div`,P,i(r.value),1)]))}}),I=`<script setup lang="ts">
import { shallowRef } from 'vue'
// 组件实际使用时无需手动导入，框架会自动导入
import FaScrollingText from '../index.vue'

const items = [
  '点击查看：Vue 3 最佳实践指南',
  '点击查看：TypeScript 进阶教程',
  '点击查看：Vite 构建优化技巧',
  '点击查看：Pinia 状态管理详解',
  '点击查看：Fantasic Admin 最新功能介绍',
]
const clickedText = shallowRef('等待点击')

function handleClick(text: string, index: number) {
  clickedText.value = \`点击了第 \${index + 1} 条：\${text}\`
}
<\/script>

<template>
  <div class="flex flex-col gap-3">
    <FaScrollingText
      :items="items"
      direction="down"
      :duration="2000"
      class="text-sm text-primary h-8 cursor-pointer"
      @item-click="handleClick"
    />
    <div class="text-sm text-muted-foreground">
      {{ clickedText }}
    </div>
  </div>
</template>
`,L=g({__name:`_fade`,setup(e){return(e,t)=>(_(),x(A,{items:[`公告：系统将于今晚 22:00 进行维护升级`,`新功能：支持批量导出数据，欢迎体验`,`提示：请及时更新您的账户安全信息`],"visible-count":2,animation:`fade`,transition:300,class:`text-sm px-3 border rounded-lg h-16`,"item-class":`border-b border-dashed last:border-0`}))}}),R=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaScrollingText from '../index.vue'
<\/script>

<template>
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
`,z={class:`py-1 flex gap-2 w-full items-center`},B={class:`text-sm truncate`},V=[{title:`基础`,component:j,componentRaw:M},{title:`多条可见 + fade 动画`,component:L,componentRaw:R},{title:`向下滚动 + 点击事件`,component:F,componentRaw:I},{title:`自定义条目 slot`,component:g({__name:`_slot`,setup(e){let t=[{tag:`紧急`,text:`系统将于今晚 22:00 进行维护升级`,type:`error`},{tag:`新功能`,text:`支持批量导出数据，欢迎体验`,type:`success`},{tag:`提示`,text:`请及时更新您的账户安全信息`,type:`warning`}];return(e,n)=>(_(),x(A,{items:t.map(e=>e.text)},{item:y(({index:e})=>[u(`div`,z,[u(`span`,{class:a([`text-xs font-medium px-1.5 py-0.5 rounded shrink-0`,{"bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400":t[e].type===`error`,"bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400":t[e].type===`success`,"bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400":t[e].type===`warning`}])},i(t[e].tag),3),u(`span`,B,i(t[e].text),1)])]),_:1},8,[`items`]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaScrollingText from '../index.vue'

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
`}],H=g({__name:`scrolling_text`,setup(t){let{t:n}=E();return(t,r)=>{let i=D,a=w;return _(),d(`div`,null,[o(i,{title:e(n)(`route.componentPro.scrollingText`),description:`FaScrollingText`},null,8,[`title`]),(_(!0),d(v,null,f(e(V),e=>(_(),x(a,{key:e.title,code:e.componentRaw,title:e.title},{default:y(()=>[(_(),x(S(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{H as default};