
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as p}from"./index.vue_vue_type_script_setup_true_lang-B6jzPZTN.js";import{d as m,c as s,o as r,k as e,aa as i,m as t,a as o,W as a}from"./index-B13-Jify.js";import l from"./_demo1-CzEZKwwX.js";import{_ as f}from"./_demo2.vue_vue_type_script_setup_true_lang-CQfYgL0a.js";import"./index-SDO31BjC.js";import"./index.vue_vue_type_script_setup_true_lang-DlO7VFPy.js";const _='<template>\n  <FaPopover>\n    <FaButton>\n      浮动面板\n      <FaIcon name="i-ep:caret-bottom" />\n    </FaButton>\n    <template #panel>\n      <div class="h-30 w-60 flex items-center justify-center">\n        面板内容\n      </div>\n    </template>\n  </FaPopover>\n</template>\n',d='<script setup lang="ts">\nconst open = ref(false)\n<\/script>\n\n<template>\n  <FaPopover v-model:open="open">\n    <FaButton>\n      浮动面板\n      <FaIcon name="i-ep:caret-bottom" />\n    </FaButton>\n    <template #panel>\n      <div class="h-30 w-60 flex items-center justify-center">\n        <FaButton @click="open = false">\n          关闭\n        </FaButton>\n      </div>\n    </template>\n  </FaPopover>\n</template>\n',u=m({__name:"index",setup(F){return(v,B)=>{const c=i,n=p;return r(),s("div",null,[e(c,{title:"浮动面板",description:"FaPopover"}),e(n,{code:o(_)},{default:t(()=>[e(l)]),_:1},8,["code"]),e(n,{title:"手动关闭",code:o(d)},{default:t(()=>[e(f)]),_:1},8,["code"])])}}});typeof a=="function"&&a(u);export{u as default};
