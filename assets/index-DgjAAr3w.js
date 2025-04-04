
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as s}from"./index.vue_vue_type_script_setup_true_lang-D9xYUDNr.js";import{d as i,f as d,g as c,h as t,a8 as m,j as n,l as a,V as l}from"./index-BFPO48W4.js";import r from"./_demo1-HqlYYtXX.js";import p from"./_demo2-DAC7ZS8f.js";import f from"./_demo3-DOQYDzbK.js";import"./index-CdK171Ue.js";import"./index.vue_vue_type_script_setup_true_lang-BOBNrv7k.js";const x=`<template>
  <FaFlipCard>
    <div class="size-full flex-center text-xl font-bold">
      水平翻转
    </div>
    <template #back>
      <div class="flex flex-col p-4">
        <h1 class="text-xl text-card-foreground font-bold">
          什么是 Fantastic-admin ?
        </h1>
        <FaDivider class="my-2" />
        <p class="text-base text-card-foreground font-medium leading-normal">
          Fantastic-admin 是一个基于 Vue 3 的后台管理系统框架，它集成了丰富的组件和工具函数，可以帮助开发者快速构建现代化的管理系统。
        </p>
      </div>
    </template>
  </FaFlipCard>
</template>
`,u=`<template>
  <FaFlipCard rotate="x">
    <div class="size-full flex-center text-xl font-bold">
      垂直翻转
    </div>
    <template #back>
      <div class="flex flex-col p-4">
        <h1 class="text-xl text-card-foreground font-bold">
          什么是 Fantastic-admin ?
        </h1>
        <FaDivider class="my-2" />
        <p class="text-base text-card-foreground font-medium leading-normal">
          Fantastic-admin 是一个基于 Vue 3 的后台管理系统框架，它集成了丰富的组件和工具函数，可以帮助开发者快速构建现代化的管理系统。
        </p>
      </div>
    </template>
  </FaFlipCard>
</template>
`,F=`<template>
  <FaFlipCard class="h-72 w-128">
    <div class="size-full">
      <img src="https://picsum.photos/560/720" class="size-full object-cover">
      <div class="absolute inset-x-4 bottom-4 text-xl text-white font-bold text-shadow-xl">
        自定义尺寸
      </div>
    </div>
    <template #back>
      <div class="h-full flex flex-col p-4">
        <h1 class="text-xl text-card-foreground font-bold">
          什么是 Fantastic-admin ?
        </h1>
        <FaDivider class="my-2" />
        <p class="text-base text-card-foreground font-medium leading-normal">
          Fantastic-admin 是一个基于 Vue 3 的后台管理系统框架，它集成了丰富的组件和工具函数，可以帮助开发者快速构建现代化的管理系统。
        </p>
        <FaButton class="mt-auto">
          按钮
        </FaButton>
      </div>
    </template>
  </FaFlipCard>
</template>
`,v=i({__name:"index",setup(_){return(b,h)=>{const o=m,e=s;return c(),d("div",null,[t(o,{title:"翻转卡片",description:"FaFlipCard"}),t(e,{code:a(x)},{default:n(()=>[t(r)]),_:1},8,["code"]),t(e,{title:"垂直翻转",code:a(u)},{default:n(()=>[t(p)]),_:1},8,["code"]),t(e,{title:"自定义尺寸",code:a(F)},{default:n(()=>[t(f)]),_:1},8,["code"])])}}});typeof l=="function"&&l(v);export{v as default};
