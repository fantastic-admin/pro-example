
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as p}from"./index.vue_vue_type_script_setup_true_lang-BmDYF_lz.js";import{d as s,e as m,f as r,g as e,a7 as i,i as t,k as o,U as a}from"./index-DOTJNdHl.js";import l from"./_demo1-RiQIjQac.js";import{_ as f}from"./_demo2.vue_vue_type_script_setup_true_lang-yL7keC4A.js";import"./index-WlNgMWD1.js";import"./index.vue_vue_type_script_setup_true_lang-CDwMcqST.js";const _=`<template>
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
