
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as p}from"./index.vue_vue_type_script_setup_true_lang-G8mBMKDY.js";import{d as s,e as m,f as r,g as e,a7 as i,i as t,k as o,U as a}from"./index-H6KsPIiT.js";import l from"./_demo1-BVQX8YKM.js";import{_ as f}from"./_demo2.vue_vue_type_script_setup_true_lang-oT1A7ck4.js";import"./index-9dZpJgz5.js";import"./index.vue_vue_type_script_setup_true_lang-Cnfua8Xc.js";const _='<template>\n  <FaPopover>\n    <FaButton>\n      浮动面板\n      <FaIcon name="i-ep:caret-bottom" />\n    </FaButton>\n    <template #panel>\n      <div class="h-30 w-60 flex items-center justify-center">\n        面板内容\n      </div>\n    </template>\n  </FaPopover>\n</template>\n',d='<script setup lang="ts">\nconst open = ref(false)\n<\/script>\n\n<template>\n  <FaPopover v-model:open="open">\n    <FaButton>\n      浮动面板\n      <FaIcon name="i-ep:caret-bottom" />\n    </FaButton>\n    <template #panel>\n      <div class="h-30 w-60 flex items-center justify-center">\n        <FaButton @click="open = false">\n          关闭\n        </FaButton>\n      </div>\n    </template>\n  </FaPopover>\n</template>\n',u=s({__name:"index",setup(F){return(v,B)=>{const c=i,n=p;return r(),m("div",null,[e(c,{title:"浮动面板",description:"FaPopover"}),e(n,{code:o(_)},{default:t(()=>[e(l)]),_:1},8,["code"]),e(n,{title:"手动关闭",code:o(d)},{default:t(()=>[e(f)]),_:1},8,["code"])])}}});typeof a=="function"&&a(u);export{u as default};
