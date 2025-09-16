
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as l}from"./index.vue_vue_type_script_setup_true_lang-DQczY1v6.js";import{d as n,c as r,o as i,k as e,aa as c,m as p,a as s,W as o}from"./index-CphCexG_.js";import{_ as u}from"./_demo1.vue_vue_type_script_setup_true_lang-CE5Y3nNo.js";import"./index-VN9-YxbI.js";const f='<script setup lang="ts">\nconst value1 = ref([1, 5, 2, 4, 8, 3, 7])\nconst value2 = ref([\n  { tooltip: \'值：1\', value: 1 },\n  { tooltip: \'值：3\', value: 3 },\n  { tooltip: \'值：5\', value: 5 },\n  { tooltip: \'值：8\', value: 8 },\n  { tooltip: \'值：4\', value: 4 },\n  { tooltip: \'值：6\', value: 6 },\n  { tooltip: \'值：9\', value: 9 },\n])\n<\/script>\n\n<template>\n  <FaSparkline :value="value1" />\n  <FaSparkline :value="value1" stroke-color="#409eff" fill-color="#b3d8ff" />\n  <FaSparkline :value="value2" tooltip />\n  <FaSparkline :value="value2" tooltip stroke-color="#409eff" fill-color="#b3d8ff" cursor-color="#e6a23c" spot-color="#909399" />\n</template>\n',_=n({__name:"index",setup(m){return(v,d)=>{const a=c,t=l;return i(),r("div",null,[e(a,{title:"迷你图",description:"FaSparkline"}),e(t,{code:s(f)},{default:p(()=>[e(u)]),_:1},8,["code"])])}}});typeof o=="function"&&o(_);export{_ as default};
