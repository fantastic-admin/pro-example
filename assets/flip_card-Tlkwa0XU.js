
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-CNfuk_zw.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-BBOeX0pE.js";import{t as u}from"./_demo2-BV8R4XkE.js";var d=`<template>
  <div class="flex gap-4">
    <FaFlipCard>
      <div class="text-xl font-bold flex-center size-full">
        水平翻转
      </div>
      <template #back>
        <div class="p-4 flex flex-col">
          <h1 class="text-xl text-card-foreground font-bold">
            什么是 Fantastic-admin ?
          </h1>
          <FaDivider class="my-2" />
          <p class="text-base text-card-foreground leading-normal font-medium">
            Fantastic-admin 是一个基于 Vue 3 的后台管理系统框架，它集成了丰富的组件和工具函数，可以帮助开发者快速构建现代化的管理系统。
          </p>
        </div>
      </template>
    </FaFlipCard>
    <FaFlipCard rotate="x">
      <div class="text-xl font-bold flex-center size-full">
        垂直翻转
      </div>
      <template #back>
        <div class="p-4 flex flex-col">
          <h1 class="text-xl text-card-foreground font-bold">
            什么是 Fantastic-admin ?
          </h1>
          <FaDivider class="my-2" />
          <p class="text-base text-card-foreground leading-normal font-medium">
            Fantastic-admin 是一个基于 Vue 3 的后台管理系统框架，它集成了丰富的组件和工具函数，可以帮助开发者快速构建现代化的管理系统。
          </p>
        </div>
      </template>
    </FaFlipCard>
  </div>
</template>
`,f=`<template>
  <FaFlipCard class="h-72 w-128">
    <div class="size-full">
      <img src="https://picsum.photos/560/720" class="size-full object-cover">
      <div class="text-xl text-white font-bold text-shadow-lg inset-x-4 bottom-4 absolute">
        自定义尺寸
      </div>
    </div>
    <template #back>
      <div class="p-4 flex flex-col h-full">
        <h1 class="text-xl text-card-foreground font-bold">
          什么是 Fantastic-admin ?
        </h1>
        <FaDivider class="my-2" />
        <p class="text-base text-card-foreground leading-normal font-medium">
          Fantastic-admin 是一个基于 Vue 3 的后台管理系统框架，它集成了丰富的组件和工具函数，可以帮助开发者快速构建现代化的管理系统。
        </p>
        <FaButton class="mt-auto">
          按钮
        </FaButton>
      </div>
    </template>
  </FaFlipCard>
</template>
`,p=e({__name:`index`,setup(e){let{t:p}=c();return(e,c)=>{let m=o,h=s;return r(),a(`div`,null,[n(m,{title:t(p)(`route.component.flipCard`),description:`FaFlipCard`},null,8,[`title`]),n(h,{code:t(d)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(h,{title:`自定义尺寸`,code:t(f)},{default:i(()=>[n(u)]),_:1},8,[`code`])])}}});export{p as default};