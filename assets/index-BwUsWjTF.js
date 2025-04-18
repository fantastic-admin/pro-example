
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as c}from"./index.vue_vue_type_script_setup_true_lang-COBuVIR5.js";import{d as s,f as m,g as i,h as e,a8 as l,j as t,l as a,V as o}from"./index-DuOv7Qep.js";import{_ as d}from"./_demo1.vue_vue_type_script_setup_true_lang-71i4XNp9.js";import{_ as v}from"./_demo2.vue_vue_type_script_setup_true_lang-D4-Xe32o.js";import{_ as u}from"./_demo3.vue_vue_type_script_setup_true_lang-CqDvO4iD.js";import{_ as g}from"./_demo4.vue_vue_type_script_setup_true_lang-CwI_QjvT.js";import{_ as p}from"./_demo5.vue_vue_type_script_setup_true_lang-BtCKG_yl.js";import{_ as f}from"./_demo6.vue_vue_type_script_setup_true_lang-CuHq-pZC.js";import"./index-B51ig3ph.js";import"./index-FM_hdDOZ.js";import"./index.vue_vue_type_script_setup_true_lang-B-s5J4N5.js";const w=`<script lang="ts" setup>
const reviews = [
  { name: 'c***@msn.com', content: '从较低的上手难度，到完善的细节设计；从完善的示例，到详细而循序渐进的文档。无不体现作者作为一个技术专家之上的产品意识，这是诸多“开发框架”所达不到的理念高度。' },
  { name: 't***@126.com', content: '售后服务及时，耐心解答各种问题，源码讲解耐心，努力帮助客户了解系统架构，从而更好的服务客服体系，界面美观，集成快捷，非常棒的框架。' },
  { name: 'l***@163.com', content: '可以说是目前最简单、易上手的 Vue3 中后台框架，框架本身已经涵盖了开发中几乎所有的基础功能，可以让开发者更注重业务本身的开发。' },
  { name: '3***@qq.com', content: '无论从颜值、组件丰富程度来说都是非常优秀的，对后端开发十分友好，代码规范清晰，即便不是很熟悉前端的后端开发人员也能快速上手。' },
  { name: 't***@163.com', content: 'Fantastic-admin 的设计、交互都十分现代化，文档健全，售后及时，最重要的是，它几乎没有什么 Bug ，使用体验太丝滑了。' },
  { name: 'y***@163.com', content: '作为一个16年开发经验的老程序员，一看到这套框架就被深深的吸引，在对比开发成本和购买成本后，果断选择了专业版。' },
  { name: '4***@qq.com', content: '做为个人开发者，本人兼任前端和后端的工作。Fantastic-admin 拿来即用，解决了没有前端，没有美工的困扰。' },
  { name: 'b***@gmail.com', content: '我觉得 Fantastic-admin 最大的优势和吸引人的地方是产品性很强，前两年就买了专业版，一直在用。' },
  { name: 'r***@aliyun.com', content: '我是搞后端的，这个模板好好用，期待加入更多的页面可以直接用。' },
  { name: 'a***@163.com', content: '厉害👍🏻，是后台系统里见过最好的框架。' },
]
<\/script>

<template>
  <FaMarquee>
    <figure v-for="review in reviews" :key="review.name" class="w-64 cursor-pointer overflow-hidden border border-gray-950/[.1] rounded-xl bg-gray-950/[.01] p-4 dark:border-gray-50/[.1] dark:bg-gray-50/[.10] hover:bg-gray-950/[.05] dark:hover:bg-gray-50/[.15]">
      <div class="flex flex-row items-center gap-2">
        <FaAvatar :src="\`https://avatar.vercel.sh/\${review.name}\`" class="size-8" />
        <div class="flex flex-col">
          <span class="text-sm font-medium dark:text-white">
            {{ review.name }}
          </span>
        </div>
      </div>
      <blockquote class="mt-2 text-pretty text-sm">
        {{ review.content }}
      </blockquote>
    </figure>
  </FaMarquee>
</template>
`,b=`<script lang="ts" setup>
const reviews = [
  { name: 'c***@msn.com', content: '从较低的上手难度，到完善的细节设计；从完善的示例，到详细而循序渐进的文档。无不体现作者作为一个技术专家之上的产品意识，这是诸多“开发框架”所达不到的理念高度。' },
  { name: 't***@126.com', content: '售后服务及时，耐心解答各种问题，源码讲解耐心，努力帮助客户了解系统架构，从而更好的服务客服体系，界面美观，集成快捷，非常棒的框架。' },
  { name: 'l***@163.com', content: '可以说是目前最简单、易上手的 Vue3 中后台框架，框架本身已经涵盖了开发中几乎所有的基础功能，可以让开发者更注重业务本身的开发。' },
  { name: '3***@qq.com', content: '无论从颜值、组件丰富程度来说都是非常优秀的，对后端开发十分友好，代码规范清晰，即便不是很熟悉前端的后端开发人员也能快速上手。' },
  { name: 't***@163.com', content: 'Fantastic-admin 的设计、交互都十分现代化，文档健全，售后及时，最重要的是，它几乎没有什么 Bug ，使用体验太丝滑了。' },
  { name: 'y***@163.com', content: '作为一个16年开发经验的老程序员，一看到这套框架就被深深的吸引，在对比开发成本和购买成本后，果断选择了专业版。' },
  { name: '4***@qq.com', content: '做为个人开发者，本人兼任前端和后端的工作。Fantastic-admin 拿来即用，解决了没有前端，没有美工的困扰。' },
  { name: 'b***@gmail.com', content: '我觉得 Fantastic-admin 最大的优势和吸引人的地方是产品性很强，前两年就买了专业版，一直在用。' },
  { name: 'r***@aliyun.com', content: '我是搞后端的，这个模板好好用，期待加入更多的页面可以直接用。' },
  { name: 'a***@163.com', content: '厉害👍🏻，是后台系统里见过最好的框架。' },
]
<\/script>

<template>
  <FaMarquee reverse>
    <figure v-for="review in reviews" :key="review.name" class="w-64 cursor-pointer overflow-hidden border border-gray-950/[.1] rounded-xl bg-gray-950/[.01] p-4 dark:border-gray-50/[.1] dark:bg-gray-50/[.10] hover:bg-gray-950/[.05] dark:hover:bg-gray-50/[.15]">
      <div class="flex flex-row items-center gap-2">
        <FaAvatar :src="\`https://avatar.vercel.sh/\${review.name}\`" class="size-8" />
        <div class="flex flex-col">
          <span class="text-sm font-medium dark:text-white">
            {{ review.name }}
          </span>
        </div>
      </div>
      <blockquote class="mt-2 text-pretty text-sm">
        {{ review.content }}
      </blockquote>
    </figure>
  </FaMarquee>
</template>
`,x=`<script lang="ts" setup>
const reviews = [
  { name: 'c***@msn.com', content: '从较低的上手难度，到完善的细节设计；从完善的示例，到详细而循序渐进的文档。无不体现作者作为一个技术专家之上的产品意识，这是诸多“开发框架”所达不到的理念高度。' },
  { name: 't***@126.com', content: '售后服务及时，耐心解答各种问题，源码讲解耐心，努力帮助客户了解系统架构，从而更好的服务客服体系，界面美观，集成快捷，非常棒的框架。' },
  { name: 'l***@163.com', content: '可以说是目前最简单、易上手的 Vue3 中后台框架，框架本身已经涵盖了开发中几乎所有的基础功能，可以让开发者更注重业务本身的开发。' },
  { name: '3***@qq.com', content: '无论从颜值、组件丰富程度来说都是非常优秀的，对后端开发十分友好，代码规范清晰，即便不是很熟悉前端的后端开发人员也能快速上手。' },
  { name: 't***@163.com', content: 'Fantastic-admin 的设计、交互都十分现代化，文档健全，售后及时，最重要的是，它几乎没有什么 Bug ，使用体验太丝滑了。' },
  { name: 'y***@163.com', content: '作为一个16年开发经验的老程序员，一看到这套框架就被深深的吸引，在对比开发成本和购买成本后，果断选择了专业版。' },
  { name: '4***@qq.com', content: '做为个人开发者，本人兼任前端和后端的工作。Fantastic-admin 拿来即用，解决了没有前端，没有美工的困扰。' },
  { name: 'b***@gmail.com', content: '我觉得 Fantastic-admin 最大的优势和吸引人的地方是产品性很强，前两年就买了专业版，一直在用。' },
  { name: 'r***@aliyun.com', content: '我是搞后端的，这个模板好好用，期待加入更多的页面可以直接用。' },
  { name: 'a***@163.com', content: '厉害👍🏻，是后台系统里见过最好的框架。' },
]
<\/script>

<template>
  <FaMarquee pause-on-hover>
    <figure v-for="review in reviews" :key="review.name" class="w-64 cursor-pointer overflow-hidden border border-gray-950/[.1] rounded-xl bg-gray-950/[.01] p-4 dark:border-gray-50/[.1] dark:bg-gray-50/[.10] hover:bg-gray-950/[.05] dark:hover:bg-gray-50/[.15]">
      <div class="flex flex-row items-center gap-2">
        <FaAvatar :src="\`https://avatar.vercel.sh/\${review.name}\`" class="size-8" />
        <div class="flex flex-col">
          <span class="text-sm font-medium dark:text-white">
            {{ review.name }}
          </span>
        </div>
      </div>
      <blockquote class="mt-2 text-pretty text-sm">
        {{ review.content }}
      </blockquote>
    </figure>
  </FaMarquee>
</template>
`,y=`<script lang="ts" setup>
const reviews = [
  { name: 'c***@msn.com', content: '从较低的上手难度，到完善的细节设计；从完善的示例，到详细而循序渐进的文档。无不体现作者作为一个技术专家之上的产品意识，这是诸多“开发框架”所达不到的理念高度。' },
  { name: 't***@126.com', content: '售后服务及时，耐心解答各种问题，源码讲解耐心，努力帮助客户了解系统架构，从而更好的服务客服体系，界面美观，集成快捷，非常棒的框架。' },
  { name: 'l***@163.com', content: '可以说是目前最简单、易上手的 Vue3 中后台框架，框架本身已经涵盖了开发中几乎所有的基础功能，可以让开发者更注重业务本身的开发。' },
  { name: '3***@qq.com', content: '无论从颜值、组件丰富程度来说都是非常优秀的，对后端开发十分友好，代码规范清晰，即便不是很熟悉前端的后端开发人员也能快速上手。' },
  { name: 't***@163.com', content: 'Fantastic-admin 的设计、交互都十分现代化，文档健全，售后及时，最重要的是，它几乎没有什么 Bug ，使用体验太丝滑了。' },
  { name: 'y***@163.com', content: '作为一个16年开发经验的老程序员，一看到这套框架就被深深的吸引，在对比开发成本和购买成本后，果断选择了专业版。' },
  { name: '4***@qq.com', content: '做为个人开发者，本人兼任前端和后端的工作。Fantastic-admin 拿来即用，解决了没有前端，没有美工的困扰。' },
  { name: 'b***@gmail.com', content: '我觉得 Fantastic-admin 最大的优势和吸引人的地方是产品性很强，前两年就买了专业版，一直在用。' },
  { name: 'r***@aliyun.com', content: '我是搞后端的，这个模板好好用，期待加入更多的页面可以直接用。' },
  { name: 'a***@163.com', content: '厉害👍🏻，是后台系统里见过最好的框架。' },
]
<\/script>

<template>
  <FaMarquee class="[--duration:5s] [--gap:2rem]">
    <figure v-for="review in reviews" :key="review.name" class="w-64 cursor-pointer overflow-hidden border border-gray-950/[.1] rounded-xl bg-gray-950/[.01] p-4 dark:border-gray-50/[.1] dark:bg-gray-50/[.10] hover:bg-gray-950/[.05] dark:hover:bg-gray-50/[.15]">
      <div class="flex flex-row items-center gap-2">
        <FaAvatar :src="\`https://avatar.vercel.sh/\${review.name}\`" class="size-8" />
        <div class="flex flex-col">
          <span class="text-sm font-medium dark:text-white">
            {{ review.name }}
          </span>
        </div>
      </div>
      <blockquote class="mt-2 text-pretty text-sm">
        {{ review.content }}
      </blockquote>
    </figure>
  </FaMarquee>
</template>
`,k=`<script lang="ts" setup>
const reviews = [
  { name: 'c***@msn.com', content: '从较低的上手难度，到完善的细节设计；从完善的示例，到详细而循序渐进的文档。无不体现作者作为一个技术专家之上的产品意识，这是诸多“开发框架”所达不到的理念高度。' },
  { name: 't***@126.com', content: '售后服务及时，耐心解答各种问题，源码讲解耐心，努力帮助客户了解系统架构，从而更好的服务客服体系，界面美观，集成快捷，非常棒的框架。' },
  { name: 'l***@163.com', content: '可以说是目前最简单、易上手的 Vue3 中后台框架，框架本身已经涵盖了开发中几乎所有的基础功能，可以让开发者更注重业务本身的开发。' },
  { name: '3***@qq.com', content: '无论从颜值、组件丰富程度来说都是非常优秀的，对后端开发十分友好，代码规范清晰，即便不是很熟悉前端的后端开发人员也能快速上手。' },
  { name: 't***@163.com', content: 'Fantastic-admin 的设计、交互都十分现代化，文档健全，售后及时，最重要的是，它几乎没有什么 Bug ，使用体验太丝滑了。' },
  { name: 'y***@163.com', content: '作为一个16年开发经验的老程序员，一看到这套框架就被深深的吸引，在对比开发成本和购买成本后，果断选择了专业版。' },
  { name: '4***@qq.com', content: '做为个人开发者，本人兼任前端和后端的工作。Fantastic-admin 拿来即用，解决了没有前端，没有美工的困扰。' },
  { name: 'b***@gmail.com', content: '我觉得 Fantastic-admin 最大的优势和吸引人的地方是产品性很强，前两年就买了专业版，一直在用。' },
  { name: 'r***@aliyun.com', content: '我是搞后端的，这个模板好好用，期待加入更多的页面可以直接用。' },
  { name: 'a***@163.com', content: '厉害👍🏻，是后台系统里见过最好的框架。' },
]
<\/script>

<template>
  <FaMarquee vertical class="h-128 items-center">
    <figure v-for="review in reviews" :key="review.name" class="w-64 cursor-pointer overflow-hidden border border-gray-950/[.1] rounded-xl bg-gray-950/[.01] p-4 dark:border-gray-50/[.1] dark:bg-gray-50/[.10] hover:bg-gray-950/[.05] dark:hover:bg-gray-50/[.15]">
      <div class="flex flex-row items-center gap-2">
        <FaAvatar :src="\`https://avatar.vercel.sh/\${review.name}\`" class="size-8" />
        <div class="flex flex-col">
          <span class="text-sm font-medium dark:text-white">
            {{ review.name }}
          </span>
        </div>
      </div>
      <blockquote class="mt-2 text-pretty text-sm">
        {{ review.content }}
      </blockquote>
    </figure>
  </FaMarquee>
</template>
`,q=`<script lang="ts" setup>
const reviews = [
  { name: 'c***@msn.com', content: '从较低的上手难度，到完善的细节设计；从完善的示例，到详细而循序渐进的文档。无不体现作者作为一个技术专家之上的产品意识，这是诸多“开发框架”所达不到的理念高度。' },
  { name: 't***@126.com', content: '售后服务及时，耐心解答各种问题，源码讲解耐心，努力帮助客户了解系统架构，从而更好的服务客服体系，界面美观，集成快捷，非常棒的框架。' },
  { name: 'l***@163.com', content: '可以说是目前最简单、易上手的 Vue3 中后台框架，框架本身已经涵盖了开发中几乎所有的基础功能，可以让开发者更注重业务本身的开发。' },
  { name: '3***@qq.com', content: '无论从颜值、组件丰富程度来说都是非常优秀的，对后端开发十分友好，代码规范清晰，即便不是很熟悉前端的后端开发人员也能快速上手。' },
  { name: 't***@163.com', content: 'Fantastic-admin 的设计、交互都十分现代化，文档健全，售后及时，最重要的是，它几乎没有什么 Bug ，使用体验太丝滑了。' },
  { name: 'y***@163.com', content: '作为一个16年开发经验的老程序员，一看到这套框架就被深深的吸引，在对比开发成本和购买成本后，果断选择了专业版。' },
  { name: '4***@qq.com', content: '做为个人开发者，本人兼任前端和后端的工作。Fantastic-admin 拿来即用，解决了没有前端，没有美工的困扰。' },
  { name: 'b***@gmail.com', content: '我觉得 Fantastic-admin 最大的优势和吸引人的地方是产品性很强，前两年就买了专业版，一直在用。' },
  { name: 'r***@aliyun.com', content: '我是搞后端的，这个模板好好用，期待加入更多的页面可以直接用。' },
  { name: 'a***@163.com', content: '厉害👍🏻，是后台系统里见过最好的框架。' },
]
<\/script>

<template>
  <div class="relative mx-auto h-100 max-w-7xl overflow-hidden border rounded-xl bg-white shadow-lg dark:bg-background">
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <FaMarquee
        v-for="i in 4"
        :key="i"
        :pause-on-hover="false"
        :reverse="i % 2 === 0"
        :repeat="4"
        class="[--duration:60s] absolute left-[-20%] w-[140%]"
        :style="{ transform: \`translateY(\${(i - 1) * 13.5 - 12}rem) rotate(-16deg)\` }"
      >
        <figure v-for="(evaluate, index) in (i % 2 === 0 ? reviews.slice(0, 5) : reviews.slice(5))" :key="index" class="h-48 w-64 overflow-hidden border border-gray-950/[.1] rounded-xl bg-gray-950/[.01] p-4 dark:border-gray-50/[.1] dark:bg-gray-50/[.10]">
          <div class="flex flex-row items-center gap-2">
            <FaAvatar :src="\`https://avatar.vercel.sh/\${evaluate.name}\`" class="size-8" />
            <div class="flex flex-col">
              <span class="text-base font-medium dark:text-white">
                {{ evaluate.name }}
              </span>
            </div>
          </div>
          <blockquote class="mt-2 text-pretty text-sm">
            {{ evaluate.content }}
          </blockquote>
        </figure>
      </FaMarquee>
    </div>
    <div class="pointer-events-none absolute inset-0 from-white to-transparent bg-gradient-to-t dark:from-background" />
  </div>
</template>
`,h=s({__name:"index",setup(_){return(F,$)=>{const r=l,n=c;return i(),m("div",null,[e(r,{title:"跑马灯",description:"FaMarquee"}),e(n,{code:a(w)},{default:t(()=>[e(d)]),_:1},8,["code"]),e(n,{title:"反向",code:a(b)},{default:t(()=>[e(v)]),_:1},8,["code"]),e(n,{title:"悬停暂停",code:a(x)},{default:t(()=>[e(u)]),_:1},8,["code"]),e(n,{title:"速度、间隔",code:a(y)},{default:t(()=>[e(g)]),_:1},8,["code"]),e(n,{title:"垂直",code:a(k)},{default:t(()=>[e(p)]),_:1},8,["code"]),e(n,{title:"高级用法",code:a(q)},{default:t(()=>[e(f)]),_:1},8,["code"])])}}});typeof o=="function"&&o(h);export{h as default};
