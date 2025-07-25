
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as l}from"./index.vue_vue_type_script_setup_true_lang-QJtPTUd7.js";import{d as r,e as c,f as s,g as n,a7 as d,i as t,k as i,U as o}from"./index-DODNO_Fi.js";import{_ as p}from"./_demo1.vue_vue_type_script_setup_true_lang-CT2s24He.js";import{_ as m}from"./_demo2.vue_vue_type_script_setup_true_lang-CRP0gSq1.js";import"./index-yfpwFnwn.js";import"./index-CusCaSre.js";const f=`<script setup lang="ts">
const features = [
  { icon: 'i-mdi:palette-outline', title: '风格百变', intro: '通过布局与主题组合搭配，可实现上百种不同风格的界面外观' },
  { icon: 'i-streamline:page-setting', title: '组件丰富', intro: '提供 60+ 内建组件，不仅满足日常开发需求，更能让页面脱颖而出' },
  { icon: 'i-tabler:layout-sidebar', title: '多功能导航栏', intro: '通过路由自动生成导航栏，轻松实现导航嵌套、图标、徽章、权限等特性' },
  { icon: 'i-codicon:key', title: '全场景权限验证', intro: '内置鉴权组件、鉴权指令和鉴权函数，真正实现各种场景下的权限验证' },
  { icon: 'i-octicon:cache-24', title: '页面缓存', intro: '支持无限层级路由的页面缓存，并提供简单易懂的缓存策略配置' },
  { icon: 'i-icon-park-outline:international', title: '面向国际', intro: '内置通用国际化解决方案，简单配置即可实现多国语言切换' },
  { icon: 'i-gg:website', title: '丰富的业务页面', intro: '从真实场景和需求中，沉淀出数十个常见业务页面，方便开发人员直接使用' },
  { icon: 'i-ph:dev-to-logo', title: '注重开发体验', intro: '享受丝滑般的开发体验，让编码过程变得轻松愉快' },
]
<\/script>

<template>
  <FaGlowyCardWrapper :hue="220" :saturation="80" :lightness="50" class="grid grid-cols-12 gap-4">
    <FaGlowyCard v-for="(item, index) in features" :key="index" class="col-span-12 rounded-lg lg:col-span-3 sm:col-span-6">
      <div class="flex flex-col gap-2 rounded p-6 lg:p-8">
        <div class="text-left">
          <div class="inline-flex border border-primary/10 rounded-xl p-3">
            <FaIcon :name="item.icon" class="flex-center inline-flex text-3xl" />
          </div>
        </div>
        <h1 class="text-2xl font-medium">
          {{ item.title }}
        </h1>
        <p class="text-sm font-normal leading-6 dark-text-gray-5">
          {{ item.intro }}
        </p>
      </div>
    </FaGlowyCard>
  </FaGlowyCardWrapper>
</template>
`,x=`<script setup lang="ts">
const features = [
  { icon: 'i-mdi:palette-outline', title: '风格百变', intro: '通过布局与主题组合搭配，可实现上百种不同风格的界面外观' },
  { icon: 'i-streamline:page-setting', title: '组件丰富', intro: '提供 60+ 内建组件，不仅满足日常开发需求，更能让页面脱颖而出' },
  { icon: 'i-tabler:layout-sidebar', title: '多功能导航栏', intro: '通过路由自动生成导航栏，轻松实现导航嵌套、图标、徽章、权限等特性' },
  { icon: 'i-codicon:key', title: '全场景权限验证', intro: '内置鉴权组件、鉴权指令和鉴权函数，真正实现各种场景下的权限验证' },
  { icon: 'i-octicon:cache-24', title: '页面缓存', intro: '支持无限层级路由的页面缓存，并提供简单易懂的缓存策略配置' },
  { icon: 'i-icon-park-outline:international', title: '面向国际', intro: '内置通用国际化解决方案，简单配置即可实现多国语言切换' },
  { icon: 'i-gg:website', title: '丰富的业务页面', intro: '从真实场景和需求中，沉淀出数十个常见业务页面，方便开发人员直接使用' },
  { icon: 'i-ph:dev-to-logo', title: '注重开发体验', intro: '享受丝滑般的开发体验，让编码过程变得轻松愉快' },
]
<\/script>

<template>
  <FaGlowyCardWrapper :hue="120" class="grid grid-cols-12 gap-4">
    <FaGlowyCard v-for="(item, index) in features" :key="index" class="col-span-12 rounded-lg lg:col-span-3 sm:col-span-6">
      <div class="flex flex-col gap-2 rounded p-6 lg:p-8">
        <div class="text-left">
          <div class="inline-flex border border-primary/10 rounded-xl p-3">
            <FaIcon :name="item.icon" class="flex-center inline-flex text-3xl" />
          </div>
        </div>
        <h1 class="text-2xl font-medium">
          {{ item.title }}
        </h1>
        <p class="text-sm font-normal leading-6 dark-text-gray-5">
          {{ item.intro }}
        </p>
      </div>
    </FaGlowyCard>
  </FaGlowyCardWrapper>
</template>
`,g=r({__name:"index",setup(u){return(_,y)=>{const a=d,e=l;return s(),c("div",null,[n(a,{title:"发光卡片",description:"FaGlowyCardWrapper / FaGlowyCard"}),n(e,{code:i(f)},{default:t(()=>[n(p)]),_:1},8,["code"]),n(e,{title:"改变颜色",code:i(x)},{default:t(()=>[n(m)]),_:1},8,["code"])])}}});typeof o=="function"&&o(g);export{g as default};
