
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as c}from"./index.vue_vue_type_script_setup_true_lang-C3pjQ_Y6.js";import{d as p,e as i,f as r,g as e,a7 as s,i as o,k as a,U as n}from"./index-BLSV4yIg.js";import d from"./_demo1-Byc08fnI.js";import _ from"./_demo2-Dm_6B6JQ.js";import f from"./_demo3-Cx69jhNC.js";import"./index-DU7ESt7E.js";import"./index.vue_vue_type_script_setup_true_lang-CXaU4jey.js";const l=`<template>
  <FaTimeAgo :date="new Date()" />
</template>
`,u=`<template>
  <p>距离 2020/10/17 ：</p>
  <FaTimeAgo :date="new Date('2020/10/17')" />
</template>
`,w=`<template>
  <p>显示秒，且更新间隔为1秒</p>
  <FaTimeAgo :date="new Date()" :update-interval="1000" :show-second="true" />
</template>
`,D=p({__name:"index",setup(g){return(F,k)=>{const m=s,t=c;return r(),i("div",null,[e(m,{title:"可阅读时间",description:"FaTimeAgo"}),e(t,{code:a(l)},{default:o(()=>[e(d)]),_:1},8,["code"]),e(t,{code:a(u)},{default:o(()=>[e(_)]),_:1},8,["code"]),e(t,{code:a(w)},{default:o(()=>[e(f)]),_:1},8,["code"])])}}});typeof n=="function"&&n(D);export{D as default};
