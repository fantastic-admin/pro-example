
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as s}from"./index.vue_vue_type_script_setup_true_lang-dmrcc3Eo.js";import{d as p,c as l,o as m,k as e,aa as c,m as t,a as o,W as a}from"./index-Bnionyve.js";import r from"./_demo1-DQ_2fvUt.js";import{_ as d}from"./_demo2.vue_vue_type_script_setup_true_lang-D8oZgMbd.js";import"./index-Ci0lfOFO.js";import"./index.vue_vue_type_script_setup_true_lang-BXFVGQaP.js";const _='<template>\n  <FaCollapsible>\n    <template #trigger="{ open }">\n      <FaButton>\n        {{ open ? \'收起\' : \'展开\' }}\n      </FaButton>\n    </template>\n    <div class="mt-4 space-y-2">\n      <div v-for="item in 10" :key="item" class="border rounded-md px-4 py-2">\n        {{ item }}\n      </div>\n    </div>\n  </FaCollapsible>\n</template>\n',f='<script setup lang="ts">\nconst open = ref(false)\n<\/script>\n\n<template>\n  <FaButton @click="open = !open">\n    {{ open ? \'收起\' : \'展开\' }}\n  </FaButton>\n  <FaCollapsible v-model="open">\n    <div class="mt-4 space-y-2">\n      <div v-for="item in 10" :key="item" class="border rounded-md px-4 py-2">\n        {{ item }}\n      </div>\n    </div>\n  </FaCollapsible>\n</template>\n',u=p({__name:"index",setup(v){return(F,b)=>{const i=c,n=s;return m(),l("div",null,[e(i,{title:"折叠面板",description:"FaCollapsible"}),e(n,{code:o(_)},{default:t(()=>[e(r)]),_:1},8,["code"]),e(n,{title:"手动控制",code:o(f)},{default:t(()=>[e(d)]),_:1},8,["code"])])}}});typeof a=="function"&&a(u);export{u as default};
