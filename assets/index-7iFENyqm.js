
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as c}from"./index.vue_vue_type_script_setup_true_lang-iFov3akP.js";import{d as p,f as r,g as i,h as e,a8 as s,j as o,l as a,V as n}from"./index-Dv6GDtcN.js";import d from"./_demo1-SOL97c21.js";import _ from"./_demo2-Di2CU54P.js";import l from"./_demo3-CiE3pOGU.js";import"./index-DNIjrW4p.js";import"./index.vue_vue_type_script_setup_true_lang-B05RzRxS.js";const f=`<template>
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
`,D=p({__name:"index",setup(g){return(F,h)=>{const m=s,t=c;return i(),r("div",null,[e(m,{title:"可阅读时间",description:"FaTimeAgo"}),e(t,{code:a(f)},{default:o(()=>[e(d)]),_:1},8,["code"]),e(t,{code:a(u)},{default:o(()=>[e(_)]),_:1},8,["code"]),e(t,{code:a(w)},{default:o(()=>[e(l)]),_:1},8,["code"])])}}});typeof n=="function"&&n(D);export{D as default};
