
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as p}from"./index.vue_vue_type_script_setup_true_lang-DltvfDFZ.js";import{d as s,f as m,g as r,h as e,a8 as i,j as t,l as o,V as a}from"./index-8eOOZCt1.js";import l from"./_demo1-BTcKd5xf.js";import{_ as f}from"./_demo2.vue_vue_type_script_setup_true_lang-D_ErY8Jq.js";import"./index-P1b-IaR7.js";import"./index.vue_vue_type_script_setup_true_lang-DIKftiCi.js";const _=`<template>
  <FaPopover>
    <FaButton>
      浮动面板
      <FaIcon name="i-ep:caret-bottom" />
    </FaButton>
    <template #panel>
      <div class="h-30 w-60 flex items-center justify-center">
        面板内容
      </div>
    </template>
  </FaPopover>
</template>
`,d=`<script setup lang="ts">
const open = ref(false)
<\/script>

<template>
  <FaPopover v-model:open="open">
    <FaButton>
      浮动面板
      <FaIcon name="i-ep:caret-bottom" />
    </FaButton>
    <template #panel>
      <div class="h-30 w-60 flex items-center justify-center">
        <FaButton @click="open = false">
          关闭
        </FaButton>
      </div>
    </template>
  </FaPopover>
</template>
`,u=s({__name:"index",setup(F){return(v,B)=>{const c=i,n=p;return r(),m("div",null,[e(c,{title:"浮动面板",description:"FaPopover"}),e(n,{code:o(_)},{default:t(()=>[e(l)]),_:1},8,["code"]),e(n,{title:"手动关闭",code:o(d)},{default:t(()=>[e(f)]),_:1},8,["code"])])}}});typeof a=="function"&&a(u);export{u as default};
