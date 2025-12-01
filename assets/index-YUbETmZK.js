
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as p}from"./index.vue_vue_type_script_setup_true_lang-F-HLmuYS.js";import{d as s,c as m,o as r,g as e,al as i,w as t,e as o,k as a}from"./index-COkggZqL.js";import l from"./_demo1-CRJFeEda.js";import{_ as f}from"./_demo2.vue_vue_type_script_setup_true_lang-CV3AW1zH.js";import"./index-uv4b71My.js";import"./index.vue_vue_type_script_setup_true_lang-DdWswJe2.js";const _='<template>\n  <FaPopover>\n    <FaButton>\n      浮动面板\n      <FaIcon name="i-ep:caret-bottom" />\n    </FaButton>\n    <template #panel>\n      <div class="h-30 w-60 flex items-center justify-center">\n        面板内容\n      </div>\n    </template>\n  </FaPopover>\n</template>\n',d='<script setup lang="ts">\nconst open = ref(false)\n<\/script>\n\n<template>\n  <FaPopover v-model:open="open">\n    <FaButton>\n      浮动面板\n      <FaIcon name="i-ep:caret-bottom" />\n    </FaButton>\n    <template #panel>\n      <div class="h-30 w-60 flex items-center justify-center">\n        <FaButton @click="open = false">\n          关闭\n        </FaButton>\n      </div>\n    </template>\n  </FaPopover>\n</template>\n',u=s({__name:"index",setup(F){return(v,B)=>{const c=i,n=p;return r(),m("div",null,[e(c,{title:"浮动面板",description:"FaPopover"}),e(n,{code:o(_)},{default:t(()=>[e(l)]),_:1},8,["code"]),e(n,{title:"手动关闭",code:o(d)},{default:t(()=>[e(f)]),_:1},8,["code"])])}}});typeof a=="function"&&a(u);export{u as default};
