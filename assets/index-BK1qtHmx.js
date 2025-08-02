
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as c}from"./index.vue_vue_type_script_setup_true_lang-EgipfE_5.js";import{d as s,e as u,f as r,g as n,a7 as l,i as t,k as e,U as o}from"./index-De8Oh0HC.js";import d from"./_demo1-KDhZlzNY.js";import{_ as p}from"./_demo2.vue_vue_type_script_setup_true_lang-BtKF-aJX.js";import"./index-CRjmYGFS.js";import"./index-BIF9sd5X.js";const F=`<template>
  <div class="flex gap-4">
    <FaButton>
      按钮
    </FaButton>
    <FaButton variant="destructive">
      按钮
    </FaButton>
    <FaButton variant="outline">
      按钮
    </FaButton>
    <FaButton variant="secondary">
      按钮
    </FaButton>
    <FaButton variant="ghost">
      按钮
    </FaButton>
    <FaButton variant="link">
      按钮
    </FaButton>
    <FaButton disabled>
      按钮
    </FaButton>
    <FaButton loading>
      按钮
    </FaButton>
  </div>
</template>
`,B=`<script setup lang="ts">
const hand = ref<'peace' | 'rock' | 'paper'>('peace')
<\/script>

<template>
  <div class="flex flex-col items-start gap-4">
    <FaButtonGroup>
      <FaButton variant="secondary">
        <FaIcon name="i-mdi:eye" class="size-4" />
        查看详情
      </FaButton>
      <FaButton>
        <FaIcon name="i-mdi:pencil" class="size-4" />
        编辑
      </FaButton>
      <FaButton variant="destructive">
        <FaIcon name="i-mdi:delete" class="size-4" />
        删除
      </FaButton>
    </FaButtonGroup>
    <FaButtonGroup vertical>
      <FaButton variant="secondary">
        <FaIcon name="i-mdi:eye" class="size-4" />
        查看详情
      </FaButton>
      <FaButton>
        <FaIcon name="i-mdi:pencil" class="size-4" />
        编辑
      </FaButton>
      <FaButton variant="destructive">
        <FaIcon name="i-mdi:delete" class="size-4" />
        删除
      </FaButton>
    </FaButtonGroup>
    <div class="flex flex-col gap-2">
      <div>单选按钮组</div>
      <FaButtonGroup class="gap-0 space-x-[-1px]">
        <FaButton :variant="hand === 'peace' ? 'default' : 'outline'" size="icon" :class="{ 'z-1': hand === 'peace' }" @click="hand = 'peace'">
          <FaIcon name="i-fa-regular:hand-peace" class="size-4" />
        </FaButton>
        <FaButton :variant="hand === 'rock' ? 'default' : 'outline'" size="icon" :class="{ 'z-1': hand === 'rock' }" @click="hand = 'rock'">
          <FaIcon name="i-fa-regular:hand-rock" class="size-4" />
        </FaButton>
        <FaButton :variant="hand === 'paper' ? 'default' : 'outline'" size="icon" :class="{ 'z-1': hand === 'paper' }" @click="hand = 'paper'">
          <FaIcon name="i-fa-regular:hand-paper" class="size-4" />
        </FaButton>
      </FaButtonGroup>
    </div>
  </div>
</template>
`,m=s({__name:"index",setup(f){return(v,_)=>{const i=l,a=c;return r(),u("div",null,[n(i,{title:"按钮",description:"FaButton"}),n(a,{code:e(F)},{default:t(()=>[n(d)]),_:1},8,["code"]),n(a,{title:"按钮组",code:e(B)},{default:t(()=>[n(p)]),_:1},8,["code"])])}}});typeof o=="function"&&o(m);export{m as default};
