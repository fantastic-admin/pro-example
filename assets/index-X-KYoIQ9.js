
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as o}from"./index.vue_vue_type_script_setup_true_lang-D9W61kN3.js";import{d as s,e as i,f as c,g as e,a7 as p,i as r,k as _,U as t}from"./index-DQdGVpLy.js";import{_ as m}from"./_demo1.vue_vue_type_script_setup_true_lang-ODnZT1Cj.js";import"./index-B7psu-zk.js";import"./index.vue_vue_type_script_setup_true_lang-Qzw8Ov-Z.js";const f='<script setup lang="ts">\nconst page = ref(1)\nconst size = ref(10)\nconst total = ref(100)\n<\/script>\n\n<template>\n  <FaPagination :page="page" :size="size" :total="total" @page-change="page = $event" />\n</template>\n',l=s({__name:"index",setup(d){return(g,u)=>{const a=p,n=o;return c(),i("div",null,[e(a,{title:"分页",description:"FaPagination"}),e(n,{code:_(f)},{default:r(()=>[e(m)]),_:1},8,["code"])])}}});typeof t=="function"&&t(l);export{l as default};
