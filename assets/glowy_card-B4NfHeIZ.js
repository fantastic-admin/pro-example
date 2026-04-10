
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-EJiOFDNb.js";import{P as o,vt as s}from"./components-Dvnhr4Ep.js";import{n as c}from"./vue-i18n.runtime-pGyDsL5y.js";import{t as l}from"./_demo1-CV4zTz97.js";import{t as u}from"./_demo2-DktBL_NH.js";var d=`<script setup lang="ts">
const features = [
  { icon: 'i-mdi:palette-outline', title: '风格百变', intro: '通过布局与主题组合搭配，可实现上百种不同风格的界面外观' },
  { icon: 'i-streamline:page-setting', title: '组件丰富', intro: '提供 60+ 内建组件，不仅满足日常开发需求，更能让页面脱颖而出' },
  { icon: 'i-tabler:layout-sidebar', title: '多功能导航菜单', intro: '通过路由自动生成导航菜单，轻松实现导航菜单嵌套、图标、徽章、权限等特性' },
  { icon: 'i-codicon:key', title: '全场景权限验证', intro: '内置鉴权组件、鉴权指令和鉴权函数，真正实现各种场景下的权限验证' },
  { icon: 'i-octicon:cache-24', title: '页面保活', intro: '支持无限层级路由的页面保活，并提供简单易懂的保活策略配置' },
  { icon: 'i-icon-park-outline:international', title: '面向国际', intro: '内置通用国际化解决方案，简单配置即可实现多国语言切换' },
  { icon: 'i-gg:website', title: '丰富的业务页面', intro: '从真实场景和需求中，沉淀出数十个常见业务页面，方便开发人员直接使用' },
  { icon: 'i-ph:dev-to-logo', title: '注重开发体验', intro: '享受丝滑般的开发体验，让编码过程变得轻松愉快' },
]
<\/script>

<template>
  <FaGlowyCardWrapper :hue="220" :saturation="80" :lightness="50" class="gap-4 grid grid-cols-12">
    <FaGlowyCard v-for="(item, index) in features" :key="index" class="rounded-lg col-span-12 lg:col-span-3 sm:col-span-6">
      <div class="p-6 rounded flex flex-col gap-2 lg:p-8">
        <div class="text-left">
          <div class="p-3 border border-primary/10 rounded-xl inline-flex">
            <FaIcon :name="item.icon" class="text-3xl flex-center inline-flex" />
          </div>
        </div>
        <h1 class="text-2xl font-medium">
          {{ item.title }}
        </h1>
        <p class="dark-text-gray-5 text-sm leading-6 font-normal">
          {{ item.intro }}
        </p>
      </div>
    </FaGlowyCard>
  </FaGlowyCardWrapper>
</template>
`,f=`<script setup lang="ts">
const features = [
  { icon: 'i-mdi:palette-outline', title: '风格百变', intro: '通过布局与主题组合搭配，可实现上百种不同风格的界面外观' },
  { icon: 'i-streamline:page-setting', title: '组件丰富', intro: '提供 60+ 内建组件，不仅满足日常开发需求，更能让页面脱颖而出' },
  { icon: 'i-tabler:layout-sidebar', title: '多功能导航菜单', intro: '通过路由自动生成导航菜单，轻松实现导航菜单嵌套、图标、徽章、权限等特性' },
  { icon: 'i-codicon:key', title: '全场景权限验证', intro: '内置鉴权组件、鉴权指令和鉴权函数，真正实现各种场景下的权限验证' },
  { icon: 'i-octicon:cache-24', title: '页面保活', intro: '支持无限层级路由的页面保活，并提供简单易懂的保活策略配置' },
  { icon: 'i-icon-park-outline:international', title: '面向国际', intro: '内置通用国际化解决方案，简单配置即可实现多国语言切换' },
  { icon: 'i-gg:website', title: '丰富的业务页面', intro: '从真实场景和需求中，沉淀出数十个常见业务页面，方便开发人员直接使用' },
  { icon: 'i-ph:dev-to-logo', title: '注重开发体验', intro: '享受丝滑般的开发体验，让编码过程变得轻松愉快' },
]
<\/script>

<template>
  <FaGlowyCardWrapper :hue="120" class="gap-4 grid grid-cols-12">
    <FaGlowyCard v-for="(item, index) in features" :key="index" class="rounded-lg col-span-12 lg:col-span-3 sm:col-span-6">
      <div class="p-6 rounded flex flex-col gap-2 lg:p-8">
        <div class="text-left">
          <div class="p-3 border border-primary/10 rounded-xl inline-flex">
            <FaIcon :name="item.icon" class="text-3xl flex-center inline-flex" />
          </div>
        </div>
        <h1 class="text-2xl font-medium">
          {{ item.title }}
        </h1>
        <p class="dark-text-gray-5 text-sm leading-6 font-normal">
          {{ item.intro }}
        </p>
      </div>
    </FaGlowyCard>
  </FaGlowyCardWrapper>
</template>
`,p=e({__name:`index`,setup(e){let{t:p}=c();return(e,c)=>{let m=o,h=s;return r(),a(`div`,null,[n(m,{title:t(p)(`route.component.glowyCard`),description:`FaGlowyCardWrapper / FaGlowyCard`},null,8,[`title`]),n(h,{code:t(d)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(h,{title:`改变颜色`,code:t(f)},{default:i(()=>[n(u)]),_:1},8,[`code`])])}}});export{p as default};