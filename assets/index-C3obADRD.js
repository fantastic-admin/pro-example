
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as o}from"./index.vue_vue_type_script_setup_true_lang-BHyjy1V-.js";import{d as s,c,o as i,g as e,am as p,w as r,e as m,k as t}from"./index-H6QnEWHf.js";import{_}from"./_demo1.vue_vue_type_script_setup_true_lang-DUVT1DFd.js";import"./index-ok7mAVWN.js";import"./index.vue_vue_type_script_setup_true_lang-B92B4tJk.js";const f='<script setup lang="ts">\nconst page = ref(1)\nconst size = ref(10)\nconst total = ref(100)\n<\/script>\n\n<template>\n  <FaPagination :page="page" :size="size" :total="total" @page-change="page = $event" />\n</template>\n',l=s({__name:"index",setup(d){return(g,u)=>{const a=p,n=o;return i(),c("div",null,[e(a,{title:"分页",description:"FaPagination"}),e(n,{code:m(f)},{default:r(()=>[e(_)]),_:1},8,["code"])])}}});typeof t=="function"&&t(l);export{l as default};
